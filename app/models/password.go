package models

import "time"

type PasswordResetData struct {
    LastName        string  `gorm:"column:last_name" json:"last_name"`
    FirstName       string  `gorm:"column:first_name" json:"first_name"`
    Email           string  `gorm:"column:email" json:"email"`
    Password        *string `gorm:"column:password" json:"password"`
    ConfirmPassword *string `gorm:"column:confirm_password" json:"confirm_password"`
    ConfirmCode     string  `gorm:"column:confirm_code" json:"confirm_code"`
}

type UserEmailConfirm struct {
    ConfirmCode  string     `gorm:"column:confirm_code" json:"confirm_code"`
    CreatedAt    *time.Time `gorm:"column:created_at" json:"created_at"`
    EmailAddress string     `gorm:"column:email_address" json:"email_address"`
    ID           int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
}

func (u *UserEmailConfirm) TableName() string {
    return "user_email_confirm"
}
