package models

import (
	"time"

	"gorm.io/gorm"
)

type News struct {
	ID          string         `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	NewsTypeID  int            `gorm:"column:news_type_id" json:"news_type_id"`
	Title       string         `gorm:"column:title" json:"title"`
	Description string         `gorm:"column:description" json:"description"`
	Photo       *string        `gorm:"column:photo" json:"photo"`
	IsSlide     *int           `gorm:"column:is_slide" json:"is_slide"`
	IsPublish   *int           `gorm:"column:is_publish" json:"is_publish"`
	CreatedAt   *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt   *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
}

func (n *News) TableName() string {
	return "public.news"
}

type LutNewsType struct {
	ID       int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	NewsType *string `gorm:"column:news_type" json:"news_type"`
}

func (l *LutNewsType) TableName() string {
	return "public.lut_news_type"
}
