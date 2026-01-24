package models

import (
	"time"

	"github.com/golang-jwt/jwt/v4"
	"gorm.io/gorm"
)

type Users struct {
	ID             string         `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	CreatedAt      *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt      *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt      gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	Status         *string        `gorm:"column:status" json:"status"`
	Role           int            `gorm:"column:role" json:"role"`
	Login          string         `gorm:"column:login" json:"login"`
	Email          string         `gorm:"column:email" json:"email"`
	RegisterNumber string         `gorm:"column:register_number" json:"register_number"`
	Avatar         *string        `gorm:"column:avatar" json:"avatar"`
	Bio            *string        `gorm:"column:bio" json:"bio"`
	FirstName      *string        `gorm:"column:first_name" json:"first_name"`
	LastName       *string        `gorm:"column:last_name" json:"last_name"`
	Birthday       *string        `gorm:"column:birthday" json:"birthday"`
	Phone          string         `gorm:"column:phone" json:"phone"`
	Gender         *string        `gorm:"column:gender" json:"gender"`
	OrgID          *string        `gorm:"column:org_id" json:"org_id"`
	Password       string         `gorm:"column:password" json:"password"`
}

func (u *Users) TableName() string {
	return "public.users"
}

type UserRegisterRequestData struct {
	LastName        string  `gorm:"column:last_name" json:"last_name"`
	FirstName       string  `gorm:"column:first_name" json:"first_name"`
	RegisterNumber  string  `gorm:"column:register_number" json:"register_number"`
	Email           string  `gorm:"column:email" json:"email"`
	Phone           string  `gorm:"column:phone" json:"phone"`
	Password        *string `gorm:"column:password" json:"password"`
	ConfirmPassword *string `gorm:"column:confirm_password" json:"confirm_password"`
	ConfirmCode     string  `gorm:"column:confirm_code" json:"confirm_code"`
	Status          string  `gorm:"column:status" json:"status"`
	Login           string  `gorm:"column:login" json:"login"`
}

type UserData struct {
	Id        string
	Login     string
	OrgID     *string `gorm:"column:org_id" json:"org_id"`
	Role      int
	FirstName *string `json:"first_name"`
	LastName  *string `json:"last_name"`
	Email     string  `json:"email"`
}

type JwtClaims struct {
	Id        string  `json:"id"`
	Login     string  `json:"login"`
	Role      int     `json:"role"`
	FirstName *string `json:"first_name"`
	LastName  *string `json:"last_name"`
	Email     string  `json:"email"`
	jwt.StandardClaims
}
