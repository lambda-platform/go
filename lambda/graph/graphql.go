package graph

import (
	"context"
	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/extension"
	"github.com/99designs/gqlgen/graphql/handler/lru"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-redis/redis"
	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/config"
	lambdaPlayground "github.com/lambda-platform/lambda/graphql/playground"
	"github.com/valyala/fasthttp/fasthttpadaptor"
	"github.com/vektah/gqlparser/v2/ast"
	"lambda/lambda/graph/generated"
	"net/http"
	"sync"
	"time"
)

type Cache struct {
	client redis.UniversalClient
	ttl    time.Duration
}

func Set(e *fiber.App) {

	graphqlConfig := generated.Config{Resolvers: &Resolver{

		mutex: sync.Mutex{},
	}}

	graphqlHandler := handler.New(generated.NewExecutableSchema(graphqlConfig))
	playgroundHandler := playground.Handler("GraphQL playground", "/query")
	lambdaPlaygroundHandler := lambdaPlayground.Handler("GraphQL playground", "/query")

	graphqlHandler.AddTransport(transport.Options{})
	graphqlHandler.AddTransport(transport.GET{})
	graphqlHandler.AddTransport(transport.POST{})
	graphqlHandler.AddTransport(transport.MultipartForm{})
	cache := &graphql.MapCache[*ast.QueryDocument]{}
	graphqlHandler.SetQueryCache(cache)

	graphqlHandler.Use(extension.AutomaticPersistedQuery{
		Cache: lru.New[string](100),
	})

	e.Post("/query", func(c *fiber.Ctx) error {
		ctx := context.WithValue(c.Context(), "FiberContextKey", c)
		c.SetUserContext(ctx)
		fasthttpadaptor.NewFastHTTPHandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
			request = request.WithContext(ctx)
			graphqlHandler.ServeHTTP(writer, request)
		})(c.Context())
		return nil
	})

	if config.Config.Graphql.Debug == "true" {
		graphqlHandler.Use(extension.Introspection{})

		e.Get("/play", func(c *fiber.Ctx) error {
			fasthttpadaptor.NewFastHTTPHandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
				playgroundHandler.ServeHTTP(writer, request)
			})(c.Context())
			return nil
		})

		e.Get("/play-full", func(c *fiber.Ctx) error {
			fasthttpadaptor.NewFastHTTPHandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
				lambdaPlaygroundHandler.ServeHTTP(writer, request)
			})(c.Context())
			return nil
		})
	}

}
