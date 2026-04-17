package controllers

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	agentUtils "github.com/lambda-platform/lambda/agent/utils"
)

type UserScore struct {
	UserID     int     `json:"user_id" gorm:"column:user_id"`
	FirstName  string  `json:"first_name" gorm:"column:first_name"`
	LastName   string  `json:"last_name" gorm:"column:last_name"`
	TotalScore float64 `json:"total_score" gorm:"column:total_score"`
	VacancyID  int     `json:"vacancy_id" gorm:"column:vacancy_id"`
}

type ExamScore struct {
	UserID        int     `json:"user_id" gorm:"column:user_id"`
	ShalgaltTorol string  `json:"shalgalt_torol" gorm:"column:shalgalt_torol"`
	SumScore      float64 `json:"sum_score" gorm:"column:sum_score"`
}

func GetCandidateResult(c *fiber.Ctx) error {

	user, authErr := agentUtils.AuthUserObject(c)
	if authErr != nil {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Нэвтэрсэний дараа үргэлжлүүлэх боломжтой!",
		})
	}

	userID := user["id"]

	var userScores []UserScore
	DB.DB.Table("view_user_score_for_report").Where("user_id = ?", userID).Find(&userScores)

	var examScores []ExamScore
	DB.DB.Table("view_exam_score_by_shalgalt_torol").Where("user_id = ?", userID).Find(&examScores)

	return c.JSON(fiber.Map{
		"status":      true,
		"user_scores": userScores,
		"exam_scores": examScores,
	})
}
