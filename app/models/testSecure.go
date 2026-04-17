package models

import "github.com/lambda-platform/lambda/DB"

type TestSecure struct {
	ID         int             `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	SecureData DB.SecureString `gorm:"column:secure_data" json:"secure_data"`
}

func (t *TestSecure) TableName() string {
	return "test_secure"
}
