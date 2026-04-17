package controllers

import (
	"net/http"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	agentUtils "github.com/lambda-platform/lambda/agent/utils"
	"lambda/app/models"
)

// ── Local structs ──

type advGroup struct {
	AdvertisementID int    `gorm:"column:advertisement_id"`
	CourtTypeID     int    `gorm:"column:court_type_id"`
	CourtType       string `gorm:"column:court_type"`
}

type examItem struct {
	Type       int      `json:"type"`
	Label      string   `json:"label"`
	Score      *float32 `json:"score"`
	Status     string   `json:"status"`
	ReportType int      `json:"report_type"`
}

type advResult struct {
	AdvertisementID int        `json:"advertisement_id"`
	CourtType       string     `json:"court_type"`
	CourtTypeID     int        `json:"court_type_id"`
	Title           *string    `json:"title"`
	StartDate       *string    `json:"start_date"`
	Exams           []examItem `json:"exams"`
}

// ── Report view structs ──

type reportExamScoreRow struct {
	UserID          int     `gorm:"column:user_id" json:"user_id"`
	ShalgaltTorol   string  `gorm:"column:shalgalt_torol" json:"shalgalt_torol"`
	ShalgaltTorolID int     `gorm:"column:shalgalt_torol_id" json:"shalgalt_torol_id"`
	SumScore        float64 `gorm:"column:sum_score" json:"sum_score"`
	FirstName       string  `gorm:"column:first_name" json:"first_name"`
	LastName        string  `gorm:"column:last_name" json:"last_name"`
	AdvertisementID int     `gorm:"column:advertisement_id" json:"advertisement_id"`
	ExamSubTypeID   int     `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
}

type reportUserScoreRow struct {
	UserID          int     `gorm:"column:user_id" json:"user_id"`
	FirstName       string  `gorm:"column:first_name" json:"first_name"`
	LastName        string  `gorm:"column:last_name" json:"last_name"`
	VacancyID       int     `gorm:"column:vacancy_id" json:"vacancy_id"`
	TotalScore      float64 `gorm:"column:total_score" json:"total_score"`
	AdvertisementID int     `gorm:"column:advertisement_id" json:"advertisement_id"`
}

type reportVacancyRow struct {
	ID              int     `gorm:"column:id" json:"id"`
	Vacancy         int     `gorm:"column:vacancy" json:"vacancy"`
	AdvertisementID int     `gorm:"column:advertisement_id" json:"advertisement_id"`
	CourtOffice     *string `gorm:"column:court_office" json:"court_office"`
	CourtType       *string `gorm:"column:court_type" json:"court_type"`
}

type reportAdvRow struct {
	ID                    int     `gorm:"column:id" json:"id"`
	Title                 *string `gorm:"column:title" json:"title"`
	CourtOrderDescription *string `gorm:"column:court_order_description" json:"court_order_description"`
	CourtOrder            *string `gorm:"column:court_order" json:"court_order"`
	CourtType             *string `gorm:"column:court_type" json:"court_type"`
	CourtTypeID           *int    `gorm:"column:court_type_id" json:"court_type_id"`
	StartDate             *string `gorm:"column:start_date" json:"start_date"`
	EndDate               *string `gorm:"column:end_date" json:"end_date"`
}

type interviewReportRow struct {
	UserID          int     `gorm:"column:user_id" json:"user_id"`
	FirstName       string  `gorm:"column:first_name" json:"first_name"`
	LastName        string  `gorm:"column:last_name" json:"last_name"`
	QuestionID      int     `gorm:"column:question_id" json:"question_id"`
	ShalgaltTorol   string  `gorm:"column:shalgalt_torol" json:"shalgalt_torol"`
	ShalgaltTorolDev string `gorm:"column:shalgalt_torol_dev" json:"shalgalt_torol_dev"`
	ExamScheduleID  int     `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
}

type memberScoreRow struct {
	UserID      int      `gorm:"column:user_id" json:"user_id"`
	QuestionID  int      `gorm:"column:question_id" json:"question_id"`
	MemberScore *float64 `gorm:"column:member_score" json:"member_score"`
	UserScoreID int      `gorm:"column:user_score_id" json:"user_score_id"`
	ExamScheduleID int  `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
}

// ════════════════════════════════════════════════════════════════
// GetMyExamHistory – per-advertisement exam breakdown for the user
// GET /api/my-exam-history
// ════════════════════════════════════════════════════════════════

func GetMyExamHistory(c *fiber.Ctx) error {
	user, authErr := agentUtils.AuthUserObject(c)
	if authErr != nil {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Нэвтэрсэний дараа үргэлжлүүлэх боломжтой!",
		})
	}
	userID := user["id"]

	// 1. Distinct advertisements (>= 200)
	var groups []advGroup
	DB.DB.Table("public.view_candidate_exam_schedules").
		Select("DISTINCT advertisement_id, court_type_id, court_type").
		Where("user_id = ? AND advertisement_id >= 200", userID).
		Order("advertisement_id DESC").
		Scan(&groups)

	results := make([]advResult, 0, len(groups))

	for _, g := range groups {
		// Advertisement metadata
		var ad models.Advertisement
		DB.DB.Where("id = ?", g.AdvertisementID).First(&ad)

		// Get ALL category scores from same view used by admin print pages
		var allScores []reportExamScoreRow
		DB.DB.Table("view_exam_score_by_shalgalt_torol").
			Where("user_id = ? AND advertisement_id = ?", userID, g.AdvertisementID).
			Find(&allScores)

		// Allowed exam_sub_type_id maps (matching admin sortMaps)
		// Type 10 (step 1): partial law
		sortMap10 := map[int][]int{1: {40, 3}, 2: {43, 44}, 3: {9, 10, 38}}
		// Type 7 (step 2): full law (adds case analysis ID)
		sortMap7 := map[int][]int{1: {40, 3, 39}, 2: {43, 44, 7}, 3: {9, 10, 38, 11}}

		allowedStep1 := sortMap10[g.CourtTypeID]
		allowedStep2 := sortMap7[g.CourtTypeID]

		var step1Total, step2Total, step3Total float32
		hasStep1, hasStep2, hasStep3 := false, false, false

		for _, s := range allScores {
			score := float32(s.SumScore)
			subTypeID := s.ExamSubTypeID

			inStep1 := containsInt(allowedStep1, subTypeID)
			inStep2 := containsInt(allowedStep2, subTypeID)

			if inStep1 {
				step1Total += score
				hasStep1 = true
			}
			if inStep2 {
				step2Total += score
				hasStep2 = true
			}
			if !inStep2 {
				// Everything NOT in type 7 allowed IDs = step 3 (мэргэшил + ethics)
				step3Total += score
				hasStep3 = true
			}
		}

		results = append(results, advResult{
			AdvertisementID: g.AdvertisementID,
			CourtType:       g.CourtType,
			CourtTypeID:     g.CourtTypeID,
			Title:           ad.Title,
			StartDate:       ad.StartDate,
			Exams: []examItem{
				{Type: 1, Label: "Хууль зүйн мэдлэг, чадварын зарим шалгалтын үнэлгээ", Score: ptrIf(hasStep1, step1Total), Status: statusText(hasStep1), ReportType: 10},
				{Type: 2, Label: "Хууль зүйн мэдлэг, чадварын шалгалтын үнэлгээ", Score: ptrIf(hasStep2, step2Total), Status: statusText(hasStep2), ReportType: 7},
				{Type: 3, Label: "Мэргэшил, ёс зүй, зан төлөвийн шалгалтын үнэлгээ", Score: ptrIf(hasStep3, step3Total), Status: statusText(hasStep3), ReportType: 12},
			},
		})
	}

	return c.JSON(fiber.Map{"status": true, "data": results})
}

// ════════════════════════════════════════════════════════════════
// GetMyExamReport – detailed report data for the logged-in user
// GET /api/my-exam-report/:advertisement_id
// ════════════════════════════════════════════════════════════════

func GetMyExamReport(c *fiber.Ctx) error {
	user, authErr := agentUtils.AuthUserObject(c)
	if authErr != nil {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Нэвтэрсэний дараа үргэлжлүүлэх боломжтой!",
		})
	}
	userID := user["id"]
	advID := c.Params("advertisement_id")

	// Advertisement metadata
	var advReport reportAdvRow
	DB.DB.Table("view_advertisement_report").Where("id = ?", advID).First(&advReport)

	// User's own scores for report (filter by user_id only)
	var userScores []reportUserScoreRow
	DB.DB.Table("view_user_score_for_report").Where("user_id = ?", userID).Find(&userScores)

	// User's own exam scores by category (filter by user_id AND advertisement_id)
	var examScores []reportExamScoreRow
	DB.DB.Table("view_exam_score_by_shalgalt_torol").Where("user_id = ? AND advertisement_id = ?", userID, advID).Find(&examScores)

	// Interview report data for type 12 (Мэргэшил + Ёс зүй per-question breakdown)
	// Step 1: Find interview schedule (exam_main_type_id = 2)
	var examReports []struct {
		ID             int `gorm:"column:id"`
		ExamMainTypeID int `gorm:"column:exam_main_type_id"`
	}
	DB.DB.Table("view_exam_report").Where("advertisement_id = ?", advID).Scan(&examReports)

	var interviewScheduleID int
	for _, er := range examReports {
		if er.ExamMainTypeID == 2 {
			interviewScheduleID = er.ID
			break
		}
	}
	if interviewScheduleID == 0 && len(examReports) > 0 {
		interviewScheduleID = examReports[len(examReports)-1].ID
	}

	// Step 2: Get interview report with questions (columns) and member scores
	var interviewReport []interviewReportRow
	var memberScores []memberScoreRow
	if interviewScheduleID > 0 {
		DB.DB.Table("view_interview_report_with_question").
			Where("exam_schedule_id = ? AND user_id = ?", interviewScheduleID, userID).
			Find(&interviewReport)

		DB.DB.Table("view_mod3_user_score_by_member_question_confirmed").
			Where("exam_schedule_id = ? AND user_id = ?", interviewScheduleID, userID).
			Find(&memberScores)
	}

	// Step 3: Get user score for report (for total/average_score)
	var interviewUserScore []reportUserScoreRow
	if interviewScheduleID > 0 {
		DB.DB.Table("view_user_score_for_report").
			Where("exam_schedule_id = ? AND user_id = ?", interviewScheduleID, userID).
			Find(&interviewUserScore)
	}

	return c.JSON(fiber.Map{
		"status":                       true,
		"advertisement_report":         advReport,
		"user_scores":                  userScores,
		"exam_score_by_shalgalt_torol": examScores,
		"interview_report":             interviewReport,
		"member_scores":                memberScores,
		"interview_user_score":         interviewUserScore,
	})
}

// ── helpers ──

// resolveScheduleScore returns the user's confirmed AverageScore for one exam schedule.
func resolveScheduleScore(sch models.ExamSchedule, userID interface{}) (float32, bool) {
	var summary models.ViewExamSummary
	DB.DB.Where("exam_schedule_id = ?", sch.ExamScheduleID).Find(&summary)
	if summary.ID == 0 {
		return 0, false
	}

	var candidate models.SubModCandidate
	DB.DB.Where("user_id = ? AND test_id = ?", userID, summary.ID).Find(&candidate)
	if candidate.ID == 0 {
		return 0, false
	}
	// Skipped / absent
	if candidate.ScheduleTypeID != nil && *candidate.ScheduleTypeID == 2 {
		return 0, false
	}

	testID := summary.ID
	if candidate.TestID != nil {
		testID = *candidate.TestID
	}

	var us models.Mod3UserScore
	DB.DB.Where("test_id = ? AND user_id = ?", testID, userID).Find(&us)
	if us.ID == 0 {
		return 0, false
	}

	// Confirmation check (same logic as ExamSchedulesPaginate)
	if us.ExamTypeID == 1 {
		return us.AverageScore, true
	}
	var combine models.Mod3UserScoreCombine
	if us.CombineID > 0 {
		DB.DB.Where("id = ?", us.CombineID).Find(&combine)
	}
	if combine.IsConfirmed {
		return us.AverageScore, true
	}
	return 0, false
}

// classifyExam returns 1=law, 2=qualification, 3=ethics based on schedule text.
func classifyExam(sch models.ExamSchedule) int {
	low := strings.ToLower(sch.ShalgaltTorol + " " + sch.UndsenShalgalt)
	if strings.Contains(low, "мэргэшил") {
		return 2
	}
	if strings.Contains(low, "ёс зүй") || strings.Contains(low, "зан төлөв") {
		return 3
	}
	return 1
}

func ptrIf(has bool, v float32) *float32 {
	if !has {
		return nil
	}
	return &v
}

func statusText(has bool) string {
	if has {
		return "Хүчинтэй"
	}
	return "Мэдээлэл байхгүй"
}

// containsInt checks if a slice contains a given int
func containsInt(slice []int, val int) bool {
	for _, v := range slice {
		if v == val {
			return true
		}
	}
	return false
}
