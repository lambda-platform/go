package models

import "time"

type LutComplaintsStatus struct {
	ID               int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	ComplaintsStatus *string    `gorm:"column:complaints_status" json:"complaints_status"`
	TestDate         *time.Time `gorm:"column:test_date" json:"test_date"`
	Status           *string    `gorm:"column:status" json:"status"`
}

func (l *LutComplaintsStatus) TableName() string {
	return "lut_complaints_status"
}
