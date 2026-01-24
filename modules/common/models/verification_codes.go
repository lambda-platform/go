package models

import "time"

type VerificationCodes struct {
	ID          int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Contact     string     `gorm:"column:contact" json:"contact"`
	ContactType string     `gorm:"column:contact_type" json:"contact_type"`
	Code        string     `gorm:"column:code" json:"code"`
	ExpiresAt   time.Time  `gorm:"column:expires_at" json:"expires_at"`
	IsUsed      bool       `gorm:"column:is_used" json:"is_used"`
	CreatedAt   *time.Time `gorm:"column:created_at" json:"created_at"`
	UpdatedAt   *time.Time `gorm:"column:updated_at" json:"updated_at"`
}

func (v *VerificationCodes) TableName() string {
	return "public.verification_codes"
}
