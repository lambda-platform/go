package models

import (
	"time"
)

type UnSavedExam struct {
	ID        string    `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID    int       `gorm:"column:test_id" json:"test_id"`
	UserID    int       `gorm:"column:user_id" json:"user_id"`
	CreatedAt time.Time `gorm:"column:created_at" json:"created_at"`
}

func (u *UnSavedExam) TableName() string {
	return "public.un_saved_exam"
}

type Question struct {
	ID            int         `json:"id"`
	Asuult        string      `json:"asuult"`
	AsuultTorol   string      `json:"asuult_torol"`
	CorrectAnswer string      `json:"correct_answer"`
	Answer        interface{} `json:"answer"`
	AnswerTmp     interface{} `json:"answerTmp"`
	Onoo          float32     `json:"onoo"`
	AnswerShort   string      `json:"answer_short"`
	Status        *string     `json:"status"`
}

type Hargalzuulah struct {
	AText string `json:"a_text"`
	Value string `json:"value"`
}
