package models

import (
	"gorm.io/gorm"
	"time"
)

type Mod3TestPre struct {
	ID                int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	StartDate         time.Time      `gorm:"column:start_date" json:"start_date"`
	EndDate           time.Time      `gorm:"column:end_date" json:"end_date"`
	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	TestCatID         int            `gorm:"column:test_cat_id" json:"test_cat_id"`
	ExamMainTypeID    int            `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID     int            `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	CourtTypeID       int            `gorm:"column:court_type_id" json:"court_type_id"`
	ShuugchiinTorolID int            `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	SourceFile        *string        `gorm:"column:source_file" json:"source_file"`
}

func (m *Mod3TestPre) TableName() string {
	return "public.mod3_test_pre"
}

type Mod3AsuutSubPre struct {
	ID                                 int                                  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestCatID                          *int                                 `gorm:"column:test_cat_id" json:"test_cat_id"`
	TestID                             *int                                 `gorm:"column:test_id" json:"test_id"`
	AsuultTorol                        *string                              `gorm:"column:asuult_torol" json:"asuult_torol"`
	Onoo                               *float32                             `gorm:"column:onoo" json:"onoo"`
	AnswerFile                         *string                              `gorm:"column:answer_file" json:"answer_file"`
	CorrectAnswer                      *string                              `gorm:"column:correct_answer" json:"correct_answer"`
	Tailbar                            *string                              `gorm:"column:tailbar" json:"tailbar"`
	Asuult                             *string                              `gorm:"column:asuult" json:"asuult"`
	Zurag                              *string                              `gorm:"column:zurag" json:"zurag"`
	FileButeeh                         *string                              `gorm:"column:file_buteeh" json:"file_buteeh"`
	AnswerShort                        *string                              `gorm:"column:answer_short" json:"answer_short"`
	IsUsed                             bool                                 `gorm:"column:is_used" json:"is_used"`
	Mod3HariultSubAsuultHargalzahPre   []Mod3HariultSubAsuultHargalzahPre   `gorm:"foreignKey:AsuultID" json:"mod3_hariult_sub_asuult_hargalzah_pre"`
	Mod3HariultSubAsuultOlonSongoltPre []Mod3HariultSubAsuultOlonSongoltPre `gorm:"foreignKey:AsuultID" json:"mod3_hariult_sub_asuult_olon_songolt_pre"`
}

func (m *Mod3AsuutSubPre) TableName() string {
	return "public.mod3_asuut_sub_pre"
}

type Mod3HariultSubAsuultHargalzahPre struct {
	ID       int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	AsuultID *int    `gorm:"column:asuult_id" json:"asuult_id"`
	AText    *string `gorm:"column:a_text" json:"a_text"`
	BText    *string `gorm:"column:b_text" json:"b_text"`
}

func (m *Mod3HariultSubAsuultHargalzahPre) TableName() string {
	return "public.mod3_hariult_sub_asuult_hargalzah_pre"
}

type Mod3HariultSubAsuultOlonSongoltPre struct {
	ID       int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	AsuultID *int    `gorm:"column:asuult_id" json:"asuult_id"`
	Hariult  *string `gorm:"column:hariult" json:"hariult"`
	Zov      *int    `gorm:"column:zov" json:"zov"`
}

func (m *Mod3HariultSubAsuultOlonSongoltPre) TableName() string {
	return "public.mod3_hariult_sub_asuult_olon_songolt_pre"
}

type RequestData struct {
	TestCatID      int `json:"test_cat_id"`
	ExamScheduleID int `json:"exam_schedule_id"`
	TotalScore     int `json:"total_score"`
}
