package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	"lambda/app/models"
	"net/http"
)

func Users(c *fiber.Ctx) error {

	users := []models.Users{}
	DB.DB.Find(&users)

	return c.JSON(users)
}

//func SendNotification(c *fiber.Ctx) error {
//
//    FCMData := modelsModels.FCMData{
//        Title:       "Мэдэгдэл",
//        Body:        "Мэдэгдлийн жишээ, админ нүүр хуудас харна уу",
//        FirstName:   "Мөнх-Алтай",
//        Sound:       config.LambdaConfig.Notify.Sound,
//        Icon:        config.LambdaConfig.Favicon,
//        Link:        "/admin",
//        ClickAction: config.LambdaConfig.Domain + "/admin",
//    }
//
//    FCMNotification := modelsModels.FCMNotification{
//        Title:       "Мэдэгдэл",
//        Body:        "Мэдэгдлийн жишээ, админ нүүр хуудас харна уу",
//        Icon:        config.LambdaConfig.Domain + "/" + config.LambdaConfig.Favicon,
//        ClickAction: config.LambdaConfig.Domain + "/admin",
//    }
//    data := modelsModels.NotificationData{
//        Users: []int{2},
//        //Roles:        []int{2},
//        Data:         FCMData,
//        Notification: FCMNotification,
//    }
//    notifyHandler.CreateNotification(data, map[string]interface{}{})
//    return c.JSON(data)
//}

func News(c *fiber.Ctx) error {
	news := []models.News{}
	DB.DB.Find(&news)
	return c.JSON(news)
}

func NewsTypeID(c *fiber.Ctx) error {
	id := c.Params("id")
	var Types []models.News

	DB.DB.Where("news_type_id = ?", id).Find(&Types)
	return c.Status(http.StatusOK).JSON(Types)

}
