package middlewares

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

func Set(app *fiber.App) {
	/*
		|----------------------------------------------
		| Useful MIDDLEWARES
		|----------------------------------------------
	*/
	app.Use(helmet.New())
	app.Use(recover.New())
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowOriginsFunc: func(origin string) bool { return true },
		AllowOrigins:     "*",
		AllowHeaders:     "Origin, Content-Type, Accept, X-Requested-With, x-csrf-token, Accept-Language, Content-Length, Authorization, Accept-Encoding, Connection",
		AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH",
	}))

}
