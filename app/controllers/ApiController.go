package controllers

import (
    "github.com/gofiber/fiber/v2"
    "github.com/lambda-platform/lambda/DB"
    "github.com/lambda-platform/lambda/config"
    notifyHandler "github.com/lambda-platform/lambda/notify/handler"
    modelsModels "github.com/lambda-platform/lambda/notify/models"
    "lambda/app/models"
)

func Users(c *fiber.Ctx) error {

    users := []models.Users{}
    DB.DB.Find(&users)

    return c.JSON(users)
}

func SendNotification(c *fiber.Ctx) error {

    FCMData := modelsModels.FCMData{
        Title:       "Мэдэгдэл",
        Body:        "Мэдэгдлийн жишээ, админ нүүр хуудас харна уу",
        FirstName:   "Мөнх-Алтай",
        Sound:       config.LambdaConfig.Notify.Sound,
        Icon:        config.LambdaConfig.Favicon,
        Link:        "/admin",
        ClickAction: config.LambdaConfig.Domain + "/admin",
    }

    FCMNotification := modelsModels.FCMNotification{
        Title:       "Мэдэгдэл",
        Body:        "Мэдэгдлийн жишээ, админ нүүр хуудас харна уу",
        Icon:        config.LambdaConfig.Domain + "/" + config.LambdaConfig.Favicon,
        ClickAction: config.LambdaConfig.Domain + "/admin",
    }
    data := modelsModels.NotificationData{
        Users: []int{2},
        //Roles:        []int{2},
        Data:         FCMData,
        Notification: FCMNotification,
    }
    notifyHandler.CreateNotification(data, map[string]interface{}{})
    return c.JSON(data)
}
