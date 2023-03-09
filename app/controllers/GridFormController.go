package controllers

import "github.com/gofiber/fiber/v2"

func GridFromExample(c *fiber.Ctx) error {
	//news := newData.(*formModels.EoNews29)

	return c.JSON(map[string]interface{}{
		"status": true,
		"msg":    "Амжилттай хадгалагдлаа",
	})
}
