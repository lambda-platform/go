package models

import (
	"gorm.io/gorm"
	"time"
)

type ViewZar struct {
	ID                    *int           `gorm:"column:id" json:"id"`
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
	CourtType             *string        `gorm:"column:court_type" json:"court_type"`
	DeletedAtdf           *time.Time     `gorm:"column:deleted_atdf" json:"deleted_atdf"`
	DeletedAts            *time.Time     `gorm:"column:deleted_ats" json:"deleted_ats"`
	FirstName             *string        `gorm:"column:first_name" json:"first_name"`
	DeletedAtxxx          *time.Time     `gorm:"column:deleted_atxxx" json:"deleted_atxxx"`
}

func (v *ViewZar) TableName() string {
	return "view_zar"
}

type ViewZarNew struct {
	ID                    *int           `gorm:"column:id" json:"id"`
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
	CourtType             *string        `gorm:"column:court_type" json:"court_type"`
	DeletedAtdf           *time.Time     `gorm:"column:deleted_atdf" json:"deleted_atdf"`
	DeletedAts            *time.Time     `gorm:"column:deleted_ats" json:"deleted_ats"`
	FirstName             *string        `gorm:"column:first_name" json:"first_name"`
	DeletedAtxxx          *time.Time     `gorm:"column:deleted_atxxx" json:"deleted_atxxx"`
	IsSent                *int           `gorm:"column:is_sent" json:"is_sent"`
}
