package models

import (
	"gorm.io/gorm"
	"time"
)

type ExamNotificationRequest struct {
	ID int `json:"id"`
}

type ExamNotification struct {
	ID             int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID         int        `gorm:"column:user_id" json:"user_id"`
	ExamScheduleID *int       `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	CreatedAt      *time.Time `gorm:"column:created_at" json:"created_at"`
	IsSeen         int        `gorm:"column:is_seen" json:"is_seen"`
}

func (e *ExamNotification) TableName() string {
	return "exam_notification"
}

type UserNotification struct {
	ID        int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID    int            `gorm:"column:user_id" json:"user_id"`
	CreatedAt *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	Message   *string        `gorm:"column:message" json:"message"`
	IsRead    int            `gorm:"column:is_read" json:"is_read"`
}

func (u *UserNotification) TableName() string {
	return "user_notification"
}
