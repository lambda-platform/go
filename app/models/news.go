package models

import (
	"github.com/lambda-platform/lambda/DB"
	"gorm.io/gorm"
	"time"
)

type EONEWS struct {
	Briefnews *string  `gorm:"column:BRIEFNEWS" json:"BRIEFNEWS"`
	Fullnews  *string  `gorm:"column:FULLNEWS" json:"FULLNEWS"`
	ID        *int     `gorm:"column:ID" json:"ID"`
	Newsdate  *DB.Date `gorm:"column:NEWSDATE" json:"NEWSDATE"`
	Pinned    *int     `gorm:"column:PINNED" json:"PINNED"`
	Thumb     *string  `gorm:"column:THUMB" json:"THUMB"`
	Title     *string  `gorm:"column:TITLE" json:"TITLE"`
	Views     *int     `gorm:"column:VIEWS" json:"VIEWS"`
}

func (e *EONEWS) TableName() string {
	return "EO_NEWS"
}

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
