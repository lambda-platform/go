package models

import (
	"gorm.io/gorm"
	"time"
)

type CandidateExamScore struct {
	ID                    int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	AdvertisementID       int     `gorm:"column:advertisement_id" json:"advertisement_id"`
	VacancyID             int     `gorm:"column:vacancy_id" json:"vacancy_id"`
	LegalKnowledgeScore   float32 `gorm:"column:legal_knowledge_score" json:"legal_knowledge_score"`
	QualificationScore    float32 `gorm:"column:qualification_score" json:"qualification_score"`
	EthicsBehaviorScore   float32 `gorm:"column:ethics_behavior_score" json:"ethics_behavior_score"`
	TotalScore            float32 `gorm:"column:total_score" json:"total_score"`
	UserID                int     `gorm:"column:user_id" json:"user_id"`
	CandidateExamResultID int     `gorm:"column:candidate_exam_result_id" json:"candidate_exam_result_id"`
	Status                string  `gorm:"column:status" json:"status"`
}

func (c *CandidateExamScore) TableName() string {
	return "candidate_exam_score"
}

type SubAdvertisement struct {
	ID                     int  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	AdvertisementID        *int `gorm:"column:advertisement_id" json:"advertisement_id"`
	TypeJudicialPositionID *int `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtOfficeID          *int `gorm:"column:court_office_id" json:"court_office_id"`
	Vacancy                int  `gorm:"column:vacancy" json:"vacancy"`
	CourtTypeID            *int `gorm:"column:court_type_id" json:"court_type_id"`
	AlbanTushaalID         *int `gorm:"column:alban_tushaal_id" json:"alban_tushaal_id"`
	ShuugchiinTorolID      *int `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (s *SubAdvertisement) TableName() string {
	return "sub_advertisement"
}

type AlbanTushaalBurtgel struct {
	ID                     int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID                 int            `gorm:"column:user_id" json:"user_id"`
	BaiguullagaID          int            `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	GazarHeltesID          *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	TomilsonOgnoo          *time.Time     `gorm:"column:tomilson_ognoo" json:"tomilson_ognoo"`
	AjilBairTorolID        *int           `gorm:"column:ajil_bair_torol_id" json:"ajil_bair_torol_id"`
	AlbanTushaalID         int            `gorm:"column:alban_tushaal_id" json:"alban_tushaal_id"`
	TsalinTorolID          *int           `gorm:"column:tsalin_torol_id" json:"tsalin_torol_id"`
	TsalinShatlalID        *int           `gorm:"column:tsalin_shatlal_id" json:"tsalin_shatlal_id"`
	ShuuhShatID            *int           `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ZarilagDugaar          *string        `gorm:"column:zarilag_dugaar" json:"zarilag_dugaar"`
	ZarilagFile            *string        `gorm:"column:zarilag_file" json:"zarilag_file"`
	PasswordMedeelel       *string        `gorm:"column:password_medeelel" json:"password_medeelel"`
	OOgnoo                 *time.Time     `gorm:"column:o_ognoo" json:"o_ognoo"`
	DOgnoo                 *time.Time     `gorm:"column:d_ognoo" json:"d_ognoo"`
	SungaltOgnoo           *time.Time     `gorm:"column:sungalt_ognoo" json:"sungalt_ognoo"`
	SungaltOgnooTwo        *time.Time     `gorm:"column:sungalt_ognoo_two" json:"sungalt_ognoo_two"`
	ButsaasanEseh          *int           `gorm:"column:butsaasan_eseh" json:"butsaasan_eseh"`
	ButsaasanOgnoo         *time.Time     `gorm:"column:butsaasan_ognoo" json:"butsaasan_ognoo"`
	FileHavsralt           *string        `gorm:"column:file_havsralt" json:"file_havsralt"`
	CreatedAt              *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt              *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt              gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	TolovID                int            `gorm:"column:tolov_id" json:"tolov_id"`
	AlbaTushaalTorolID     *int           `gorm:"column:alba_tushaal_torol_id" json:"alba_tushaal_torol_id"`
	Emp                    *string        `gorm:"column:emp" json:"emp"`
	Photo                  *string        `gorm:"column:photo" json:"photo"`
	CourtMail              *string        `gorm:"column:court_mail" json:"court_mail"`
	CourtTypeID            *int           `gorm:"column:court_type_id" json:"court_type_id"`
	Salery                 *int           `gorm:"column:salery" json:"salery"`
	RetiredDate            *time.Time     `gorm:"column:retired_date" json:"retired_date"`
	CompTypeID             *int           `gorm:"column:comp_type_id" json:"comp_type_id"`
	TypeJudicialPositionID *int           `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	AmraltOgnoo            *time.Time     `gorm:"column:amralt_ognoo" json:"amralt_ognoo"`
	ShuugchiinTurulID      *int           `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	AjillasanJil           *int           `gorm:"column:ajillasan_jil" json:"ajillasan_jil"`
}

func (a *AlbanTushaalBurtgel) TableName() string {
	return "alban_tushaal_burtgel"
}
