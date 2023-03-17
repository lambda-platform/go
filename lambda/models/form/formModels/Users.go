package formModels

import (
	"gorm.io/gorm"
	"time"
)

var _ = time.Time{}

type Users struct {
	CreatedAt *time.Time `gorm:"column:created_at" json:"created_at"`
	ID        int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Password  string     `gorm:"column:password" json:"password"`
	UpdatedAt *time.Time `gorm:"column:updated_at" json:"updated_at"`
}

// TableName sets the insert table name for this struct type
func (u *Users) TableName() string {
	return "users"
}

type UserForm struct {
	Avatar         string         `gorm:"column:avatar" json:"avatar"`
	Bio            string         `gorm:"column:bio" json:"bio"`
	Birthday       *time.Time     `gorm:"column:birthday" json:"birthday"`
	CreatedAt      *time.Time     `gorm:"column:created_at" json:"-"`
	DeletedAt      gorm.DeletedAt `gorm:"column:deleted_at" json:"-"`
	Email          string         `gorm:"column:email" json:"email"`
	FirstName      string         `gorm:"column:first_name" json:"first_name"`
	Gender         string         `gorm:"column:gender" json:"gender"`
	ID             int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	LastName       string         `gorm:"column:last_name" json:"last_name"`
	Login          string         `gorm:"column:login" json:"login"`
	Password       string         `gorm:"column:password" json:"password"`
	Phone          string         `gorm:"column:phone" json:"phone"`
	RegisterNumber string         `gorm:"column:register_number" json:"register_number"`
	Role           int            `gorm:"column:role" json:"role"`
	//Status         string     `gorm:"column:status" json:"status"`
	UpdatedAt *time.Time `gorm:"column:updated_at" json:"-"`
}

// TableName sets the insert table name for this struct type
func (u *UserForm) TableName() string {
	return "users"
}

type UserProfile struct {
	Avatar         string     `gorm:"column:avatar" json:"avatar"`
	Bio            string     `gorm:"column:bio" json:"bio"`
	Birthday       *time.Time `gorm:"column:birthday" json:"birthday"`
	Phone          string     `gorm:"column:phone" json:"phone"`
	FirstName      string     `gorm:"column:first_name" json:"first_name"`
	Gender         string     `gorm:"column:gender" json:"gender"`
	ID             int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	LastName       string     `gorm:"column:last_name" json:"last_name"`
	Login          string     `gorm:"column:login;unique_index;not null;unique" json:"login"`
	Email          string     `gorm:"column:email;unique_index;not null;unique" json:"email"`
	RegisterNumber string     `gorm:"column:register_number;not null;unique" json:"register_number"`
}

// TableName sets the insert table name for this struct type
func (u *UserProfile) TableName() string {
	return "users"
}
