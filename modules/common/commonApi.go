package routes

import (
	"lambda/modules/common/controllers"

	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/agent/agentMW"
)

func CommonApi(e *fiber.App) {
	a := e.Group("/api")

	//users
	a.Post("/user-register", controllers.UserRegistration)
	a.Get("/user/info", agentMW.IsLoggedIn(), controllers.GetLoggedUserInfo)
	a.Put("/user/update", agentMW.IsLoggedIn(), controllers.UpdateUser)
	a.Post("/verification/code", controllers.GetVerificationCode)
	a.Post("/check/verification", controllers.CheckConfirmCode)

	a.Get("/news", controllers.News)
	a.Get("/about-us", controllers.GetAboutUs)
	a.Post("/contact-us", controllers.CreateContactUs)
	a.Get("/faq", controllers.GetFaq)
	a.Get("/help", controllers.GetHelp)
	a.Get("/privacy", controllers.GetPrivacy)
	a.Get("/terms", controllers.GetTermsOfService)
}
