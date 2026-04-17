package models

import (
	"gorm.io/gorm"
	"time"
)

type Advertisement struct {
	ID                    int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Title                 *string        `gorm:"column:title" json:"title"`
	CourtOrderDescription *string        `gorm:"column:court_order_description" json:"court_order_description"`
	CourtOrder            *string        `gorm:"column:court_order" json:"court_order"`
	CourtTypeID           *int           `gorm:"column:court_type_id" json:"court_type_id"`
	StartDate             *string        `gorm:"column:start_date" json:"start_date"`
	EndDate               *string        `gorm:"column:end_date" json:"end_date"`
	CreatedAt             *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt             *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt             gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UserID                *int           `gorm:"column:user_id" json:"user_id"`
}

func (a *Advertisement) TableName() string {
	return "advertisement"
}
