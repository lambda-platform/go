package routes

import (
	"github.com/gofiber/fiber/v2"
	"lambda/app/controllers"
)

func Api(e *fiber.App) {
	a := e.Group("/api")
	a.Get("/users", controllers.Users)
	a.Get("/send-notification", controllers.SendNotification)
	a.Post("/grid-form-example", controllers.GridFromExample)
	//a.Get("/read-icons", controllers.ReadIcons)

}
