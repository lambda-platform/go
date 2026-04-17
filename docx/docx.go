package docx

import (
	"github.com/gofiber/fiber/v2"
	"lambda/docx/controllers"
)

func Set(e *fiber.App) {
	document := e.Group("/document")

	document.Get("/mark-status", controllers.DocumentMarkStatus)
	document.Get("/income", controllers.DocumentIncome)
	document.Get("/file/:id", controllers.DocumentFile)
}
