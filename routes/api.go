package routes

import (
	"lambda/app/controllers"

	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/agent/agentMW"
)

func Api(e *fiber.App) {
	a := e.Group("/api")
	a.Get("/candidate-result", agentMW.IsLoggedIn(), controllers.GetCandidateResult)
	a.Get("/my-exam-history", agentMW.IsLoggedIn(), controllers.GetMyExamHistory)
	a.Get("/my-exam-report/:advertisement_id", agentMW.IsLoggedIn(), controllers.GetMyExamReport)
}
