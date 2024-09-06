package middlewares

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"strings"
)

func Set(app *fiber.App) {
	/*
		|----------------------------------------------
		| Useful MIDDLEWARES
		|----------------------------------------------
	*/
	app.Use(helmet.New(helmet.Config{
		CrossOriginEmbedderPolicy: "unsafe-none",
		CrossOriginOpenerPolicy:   "unsafe-none",
		CrossOriginResourcePolicy: "unsafe-none",
	}))
	app.Use(recover.New())
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowHeaders:     "Origin, Content-Type, Accept, X-Requested-With, x-csrf-token, Accept-Language, Content-Length, Authorization, Accept-Encoding, Connection",
		AllowOriginsFunc: nil,
		AllowOrigins:     "http://localhost:3000, http://127.0.0.1:3000, http://localhost:8080, http://127.0.0.1:8080",
		AllowMethods: strings.Join([]string{
			fiber.MethodGet,
			fiber.MethodPost,
			fiber.MethodHead,
			fiber.MethodPut,
			fiber.MethodDelete,
			fiber.MethodPatch,
		}, ","),
	}))

}
