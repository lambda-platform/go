package models

import (
	"time"
)

type AboutUs struct {
	ID          string     `gorm:"column:id;primaryKey;default:gen_random_uuid()" json:"id"`
	Title       string     `gorm:"column:title" json:"title"`
	Description string     `gorm:"column:description" json:"description"`
	Image       string     `gorm:"column:image" json:"image"`
	ListOrder   int16      `gorm:"column:list_order" json:"list_order"`
	CreatedAt   time.Time  `gorm:"column:created_at" json:"created_at"`
	UpdatedAt   time.Time  `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt   *time.Time `gorm:"column:deleted_at" json:"deleted_at"`
}

func (a *AboutUs) TableName() string {
	return "public.about_us"
}

type ContactUs struct {
	ID        int64      `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Name      string     `gorm:"column:name" json:"name"`
	Email     string     `gorm:"column:email" json:"email"`
	Phone     int64      `gorm:"column:phone" json:"phone"`
	Address   string     `gorm:"column:address" json:"address"`
	Comment   string     `gorm:"column:comment" json:"comment"`
	CreatedAt time.Time  `gorm:"column:created_at" json:"created_at"`
	UpdatedAt time.Time  `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt *time.Time `gorm:"column:deleted_at" json:"deleted_at"`
}

func (c *ContactUs) TableName() string {
	return "public.contact_us"
}

type Faq struct {
	ID             string     `gorm:"column:id;primaryKey;default:gen_random_uuid()" json:"id"`
	Question       string     `gorm:"column:queation" json:"question"` // Typo in DB 'queation' preserved in column tag
	Answer         string     `gorm:"column:answer" json:"answer"`
	Images         string     `gorm:"column:images" json:"images"`
	QuestionTypeID int64      `gorm:"column:question_type_id" json:"question_type_id"`
	CreatedAt      time.Time  `gorm:"column:created_at" json:"created_at"`
	UpdatedAt      time.Time  `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt      *time.Time `gorm:"column:deleted_at" json:"deleted_at"`
}

func (f *Faq) TableName() string {
	return "public.faq"
}

type Help struct {
	ID         int64  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	RoleID     int64  `gorm:"column:role_id" json:"role_id"`
	Title      string `gorm:"column:title" json:"title"`
	Link       string `gorm:"column:link" json:"link"`
	File       string `gorm:"column:file" json:"file"`
	HelpTypeID int64  `gorm:"column:help_type_id" json:"help_type_id"`
	Urls       string `gorm:"column:urls" json:"urls"`
	Order      int64  `gorm:"column:order" json:"order"`
}

func (h *Help) TableName() string {
	return "public.help"
}

type Privacy struct {
	ID        string     `gorm:"column:id;primaryKey" json:"id"`
	UserID    string     `gorm:"column:user_id" json:"user_id"`
	Privacy   string     `gorm:"column:privacy" json:"privacy"`
	CreatedAt time.Time  `gorm:"column:created_at" json:"created_at"`
	UpdatedAt time.Time  `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt *time.Time `gorm:"column:deleted_at" json:"deleted_at"`
}

func (p *Privacy) TableName() string {
	return "public.privacy"
}

type TermsOfService struct {
	ID                  int64      `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID              string     `gorm:"column:user_id" json:"user_id"`
	TermsOfService      string     `gorm:"column:terms_of_service" json:"terms_of_service"`
	TermOfServiceTypeID int64      `gorm:"column:term_of_service_type_id" json:"term_of_service_type_id"`
	CreatedAt           time.Time  `gorm:"column:created_at" json:"created_at"`
	UpdatedAt           time.Time  `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt           *time.Time `gorm:"column:deleted_at" json:"deleted_at"`
}

func (t *TermsOfService) TableName() string {
	return "public.terms_of_service"
}

type LutFaqType struct {
	ID      int64  `gorm:"column:id;primaryKey" json:"id"`
	FaqType string `gorm:"column:faq_type" json:"faq_type"`
	Faqs    []Faq  `gorm:"foreignKey:QuestionTypeID" json:"faqs"`
}

func (l *LutFaqType) TableName() string {
	return "public.lut_faq_type"
}

type LutHelpType struct {
	ID        int64  `gorm:"column:id;primaryKey" json:"id"`
	HelpType  string `gorm:"column:help_type" json:"help_type"`
	OrderType int64  `gorm:"column:order_type" json:"order_type"`
	Helps     []Help `gorm:"foreignKey:HelpTypeID" json:"helps"`
}

func (l *LutHelpType) TableName() string {
	return "public.lut_help_type"
}

type LutTermService struct {
	ID          int64            `gorm:"column:id;primaryKey" json:"id"`
	TermService string           `gorm:"column:term_service" json:"term_service"`
	Terms       []TermsOfService `gorm:"foreignKey:TermOfServiceTypeID" json:"terms"`
}

func (l *LutTermService) TableName() string {
	return "public.lut_term_service"
}
