package models

import "github.com/lambda-platform/lambda/DB"

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
