module lambda

go 1.16

require (
	github.com/99designs/gqlgen v0.17.21
	github.com/go-redis/redis v6.15.9+incompatible
	github.com/gofiber/fiber/v2 v2.39.0
	github.com/gofiber/helmet/v2 v2.2.18
	github.com/google/go-cmp v0.5.9 // indirect
	github.com/gorilla/websocket v1.5.0
	github.com/lambda-platform/lambda v0.5.100-0.20230320012248-080e15f69dca
	github.com/thedevsaddam/govalidator v1.9.10
	github.com/valyala/fasthttp v1.40.0
	github.com/vektah/gqlparser/v2 v2.5.1
	golang.org/x/net v0.5.0 // indirect
	golang.org/x/tools v0.2.0 // indirect
	gorm.io/gorm v1.24.5

)

//replace github.com/lambda-platform/lambda/puzzle v0.2.2 => ../../go/puzzle
//replace github.com/lambda-platform/lambda/generator v0.0.1 => ../../go/generator
//
//replace github.com/lambda-platform/lambda v0.5.97 => ../../../lambda-fiber

//replace github.com/lambda-platform/arcGIS v0.0.1 => ./arcGIS
