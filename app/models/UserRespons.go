package models

type UserResponse struct {
    RegisterNumber string `gorm:"column:register_number" json:"register_number"`
    Email          string `gorm:"column:email" json:"email"`
    Phone          string `gorm:"column:phone" json:"phone"`
    Login          string `gorm:"column:login" json:"login"`
    Token          string `gorm:"column:token" json:"token"`
    NewPassword    string `gorm:"column:new_password" json:"new_password"`
    ResetType      string `gorm:"column:reset_type" json:"reset_type"`
}
