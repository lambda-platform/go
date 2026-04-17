package models

import "time"

type PasswordReset struct {
	Token     string    `gorm:"column:token;not null;" json:"token"`
	Wrong     int       `gorm:"column:wrong;not null;" json:"wrong"`
	Email     string    `gorm:"column:email;primaryKey;" json:"email"`
	Phone     string    `gorm:"column:phone" json:"phone"`
	ResetType string    `gorm:"column:reset_type" json:"reset_type"`
	CreatedAt time.Time `gorm:"column:created_at" json:"created_at"`
}

func (v *PasswordReset) TableName() string {
	return "password_resets"
}
