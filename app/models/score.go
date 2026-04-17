package models

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

type Mod3UserScore2 struct {
	ID                           int             `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID                       int             `gorm:"column:test_id" json:"test_id"`
	UserID                       int             `gorm:"column:user_id" json:"user_id"`
	TotalScore                   float32         `gorm:"column:total_score" json:"total_score"`
	ExamScheduleID               int             `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	CreatedAt                    *time.Time      `gorm:"column:created_at" json:"created_at"`
	UpdatedAt                    *time.Time      `gorm:"column:updated_at" json:"updated_at"`
	Answers                      DB.SecureString `gorm:"column:answers" json:"answers"`
	IsVerified                   bool            `gorm:"column:is_verified" json:"is_verified"`
	IsConfirmed                  bool            `gorm:"column:is_confirmed" json:"is_confirmed"`
	AverageScore                 float32         `gorm:"column:average_score" json:"average_score"`
	VacancyID                    *int            `gorm:"column:vacancy_id" json:"vacancy_id"`
	ExamTypeID                   *int            `gorm:"column:exam_type_id" json:"exam_type_id"`
	CombineID                    *int            `gorm:"column:combine_id" json:"combine_id"`
	CorrectAnswers               float32         `gorm:"column:correct_answers" json:"correct_answers"`
	Percent                      *float32        `gorm:"column:percent" json:"percent"`
	AdminGiveScore               *float32        `gorm:"column:admin_give_score" json:"admin_give_score"`
	SystemCalculatedAverageScore float32         `gorm:"column:system_calculated_average_score" json:"system_calculated_average_score"`
	ShuugchiinTorolID            *int            `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (m *Mod3UserScore2) TableName() string {
	return "mod3_user_score"
}
