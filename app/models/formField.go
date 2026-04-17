package models

import "time"

type UserFormRequest struct {
	Model struct {
		Avatar         string    `json:"avatar"`
		LastName       string    `json:"last_name"`
		FirstName      string    `json:"first_name"`
		RegisterNumber string    `json:"register_number"`
		Phone          string    `json:"phone"`
		Email          string    `json:"email"`
		Gender         string    `json:"gender"`
		Birthday       time.Time `json:"birthday"`
		ID             int       `json:"id"`
		Role           int       `json:"role"`
		Login          string    `json:"login"`
		Password       string    `json:"password"`
		CreatedAt      time.Time `json:"created_at"`
		UpdatedAt      time.Time `json:"updated_at"`
		OrgID          int       `json:"org_id"`
	} `json:"model"`
	EditMode bool `json:"editMode"`
}

type FormField struct {
	Field string                 `json:"field"`
	Value interface{}            `json:"value"`
	Props map[string]interface{} `json:"props"`
}

type FormFieldDate struct {
	Field string                 `json:"field"`
	Value time.Time              `json:"value"`
	Props map[string]interface{} `json:"props"`
}
