package models

import "time"

type SafetyInfo struct {
	ID int `gorm:"column:id;primaryKey;autoIncrement" json:"id"`

	InfoTypeID  *int       `gorm:"column:info_type_id" json:"info_type_id"`
	Dates       *time.Time `gorm:"column:dates" json:"dates"`
	Title       *string    `gorm:"column:title" json:"title"`
	Information *string    `gorm:"column:information" json:"information"`
	Files       *string    `gorm:"column:files" json:"files"`
	CreatedAt   *time.Time `gorm:"column:created_at" json:"created_at"`
	UpdatedAt   *time.Time `gorm:"column:updated_at" json:"updated_at"`
}

func (s *SafetyInfo) TableName() string {
	return "safety_info"
}
