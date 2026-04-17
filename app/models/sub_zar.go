package models

import "time"

type ViewSubZar struct {
	ID                     *int       `gorm:"column:id" json:"id"`
	AdvertisementID        *int       `gorm:"column:advertisement_id" json:"advertisement_id"`
	TypeJudicialPositionID *int       `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtOfficeID          *int       `gorm:"column:court_office_id" json:"court_office_id"`
	Vacancy                *int       `gorm:"column:vacancy" json:"vacancy"`
	CourtTypeID            *int       `gorm:"column:court_type_id" json:"court_type_id"`
	AlbanTushaalID         *int       `gorm:"column:alban_tushaal_id" json:"alban_tushaal_id"`
	ShuugchiinTorolID      *int       `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	TypeJudicialPosition   *string    `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	CourtOffice            *string    `gorm:"column:court_office" json:"court_office"`
	CourtType              *string    `gorm:"column:court_type" json:"court_type"`
	IsSent                 *string    `gorm:"column:is_sent" json:"is_sent"`
	CanID                  *int       `gorm:"column:can_id" json:"can_id"`
	DeletedAtdd            *time.Time `gorm:"column:deleted_atdd" json:"deleted_atdd"`
}
type ViewSubZarSummary struct {
	AdvertisementID        *int    `gorm:"column:advertisement_id" json:"advertisement_id"`
	TypeJudicialPositionID *int    `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtTypeID            *int    `gorm:"column:court_type_id" json:"court_type_id"`
	ShuugchiinTorolID      *int    `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	TypeJudicialPosition   *string `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	CourtType              *string `gorm:"column:court_type" json:"court_type"`
	IsSent                 *string `gorm:"column:is_sent" json:"is_sent"`
	CanID                  *int    `gorm:"column:can_id" json:"can_id"`
	TotalVacancy           int     `gorm:"column:total_vacancy" json:"total_vacancy"`
}

type ViewSubZarForSummary struct {
	ID                     *int       `gorm:"column:id" json:"id"`
	AdvertisementID        *int       `gorm:"column:advertisement_id" json:"advertisement_id"`
	TypeJudicialPositionID *int       `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtOfficeID          *int       `gorm:"column:court_office_id" json:"court_office_id"`
	Vacancy                *int       `gorm:"column:vacancy" json:"vacancy"`
	CourtTypeID            *int       `gorm:"column:court_type_id" json:"court_type_id"`
	AlbanTushaalID         *int       `gorm:"column:alban_tushaal_id" json:"alban_tushaal_id"`
	ShuugchiinTorolID      *int       `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	TypeJudicialPosition   *string    `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	CourtOffice            *string    `gorm:"column:court_office" json:"court_office"`
	CourtType              *string    `gorm:"column:court_type" json:"court_type"`
	CanID                  *int       `gorm:"column:can_id" json:"can_id"`
	DeletedAtdd            *time.Time `gorm:"column:deleted_atdd" json:"deleted_atdd"`
}

func (v *ViewSubZar) TableName() string {
	return "view_sub_zar"
}
