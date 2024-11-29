package routes

import (
	"github.com/gofiber/fiber/v2"
	"lambda/app/controllers"
)

func Api(e *fiber.App) {
	a := e.Group("/api")
	a.Get("/news", controllers.News)
}
