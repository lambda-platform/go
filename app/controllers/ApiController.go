package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	"lambda/app/models"
)

func News(c *fiber.Ctx) error {
	var news []models.News
	DB.DB.Find(&news)

	return c.JSON(news)
}
