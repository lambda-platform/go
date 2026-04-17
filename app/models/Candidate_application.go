package models

import (
	"gorm.io/gorm"
	"time"
)

type CandidateApplication struct {
	ID                         int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID                     *int           `gorm:"column:user_id" json:"user_id"`
	CandidateID                *int           `gorm:"column:candidate_id" json:"candidate_id"`
	AdvertisementID            *int           `gorm:"column:advertisement_id" json:"advertisement_id"`
	IDCard                     *string        `gorm:"column:id_card" json:"id_card"`
	Diplom                     *string        `gorm:"column:diplom" json:"diplom"`
	SocialSecurityReference    *string        `gorm:"column:social_security_reference" json:"social_security_reference"`
	TsagdaaTodorhoilolt        *string        `gorm:"column:tsagdaa_todorhoilolt" json:"tsagdaa_todorhoilolt"`
	ProkurorTodorhoilolt       *string        `gorm:"column:prokuror_todorhoilolt" json:"prokuror_todorhoilolt"`
	HayagTodorhoilolt          *string        `gorm:"column:hayag_todorhoilolt" json:"hayag_todorhoilolt"`
	GerBulTodorhoilolt         *string        `gorm:"column:ger_bul_todorhoilolt" json:"ger_bul_todorhoilolt"`
	LawyerCertificateFile      *string        `gorm:"column:lawyer_certificate_file" json:"lawyer_certificate_file"`
	CivilServantResumeFile     *string        `gorm:"column:civil_servant_resume_file" json:"civil_servant_resume_file"`
	ProfessionalActivitiesFile *string        `gorm:"column:professional_activities_file" json:"professional_activities_file"`
	MentalIllnessFile          *string        `gorm:"column:mental_illness_file" json:"mental_illness_file"`
	PersonalInterestFile       *string        `gorm:"column:personal_interest_file" json:"personal_interest_file"`
	NotlohBarimtFile           *string        `gorm:"column:notloh_barimt_file" json:"notloh_barimt_file"`
	CreatedAt                  *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt                  *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt                  gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	AnketID                    *int           `gorm:"column:anket_id" json:"anket_id"`
	CandidateTypeID            *int           `gorm:"column:candidate_type_id" json:"candidate_type_id"`
	SubAdvertisementID         *int           `gorm:"column:sub_advertisement_id" json:"sub_advertisement_id"`
	MarriedInfo                *string        `gorm:"column:married_info" json:"married_info"`
	OwnPropertyInfo            *string        `gorm:"column:own_property_info" json:"own_property_info"`
	MarriedPropertyInfo        *string        `gorm:"column:married_property_info" json:"married_property_info"`
	DzPresident                *string        `gorm:"column:dz_president" json:"dz_president"`
	HsPresident                *string        `gorm:"column:hs_president" json:"hs_president"`
	HsTenYearsCourt            *string        `gorm:"column:hs_ten_years_court" json:"hs_ten_years_court"`
	HsProcororTenYears         *string        `gorm:"column:hs_procoror_ten_years" json:"hs_procoror_ten_years"`
	HsTeachProcororTenYears    *string        `gorm:"column:hs_teach_procoror_ten_years" json:"hs_teach_procoror_ten_years"`
	HsCovermentTenYears        *string        `gorm:"column:hs_coverment_ten_years" json:"hs_coverment_ten_years"`
	CourtTypeID                *int           `gorm:"column:court_type_id" json:"court_type_id"`
	AdvTitle                   *string        `gorm:"column:adv_title" json:"adv_title"`
	CourtType                  *string        `gorm:"column:court_type" json:"court_type"`
	Vacancy                    *int           `gorm:"column:vacancy" json:"vacancy"`
	ExamOpenedID               *int           `gorm:"column:exam_opened_id" json:"exam_opened_id"`
	CourtOffice                *string        `gorm:"column:court_office" json:"court_office"`
	TypeJudicialPosition       *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	UpdateStatus               *time.Time     `gorm:"column:update_status" json:"update_status"`
}

func (c *CandidateApplication) TableName() string {
	return "candidate_application"
}

type ViewCandidateAllTables struct {
	ID                         *int           `gorm:"column:id" json:"id"`
	UserID                     *int           `gorm:"column:user_id" json:"user_id"`
	CandidateID                *int           `gorm:"column:candidate_id" json:"candidate_id"`
	AdvertisementID            *int           `gorm:"column:advertisement_id" json:"advertisement_id"`
	IDCard                     *string        `gorm:"column:id_card" json:"id_card"`
	Diplom                     *string        `gorm:"column:diplom" json:"diplom"`
	SocialSecurityReference    *string        `gorm:"column:social_security_reference" json:"social_security_reference"`
	TsagdaaTodorhoilolt        *string        `gorm:"column:tsagdaa_todorhoilolt" json:"tsagdaa_todorhoilolt"`
	ProkurorTodorhoilolt       *string        `gorm:"column:prokuror_todorhoilolt" json:"prokuror_todorhoilolt"`
	HayagTodorhoilolt          *string        `gorm:"column:hayag_todorhoilolt" json:"hayag_todorhoilolt"`
	GerBulTodorhoilolt         *string        `gorm:"column:ger_bul_todorhoilolt" json:"ger_bul_todorhoilolt"`
	LawyerCertificateFile      *string        `gorm:"column:lawyer_certificate_file" json:"lawyer_certificate_file"`
	CivilServantResumeFile     *string        `gorm:"column:civil_servant_resume_file" json:"civil_servant_resume_file"`
	ProfessionalActivitiesFile *string        `gorm:"column:professional_activities_file" json:"professional_activities_file"`
	MentalIllnessFile          *string        `gorm:"column:mental_illness_file" json:"mental_illness_file"`
	PersonalInterestFile       *string        `gorm:"column:personal_interest_file" json:"personal_interest_file"`
	NotlohBarimtFile           *string        `gorm:"column:notloh_barimt_file" json:"notloh_barimt_file"`
	CreatedAt                  *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt                  *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt                  gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	AnketID                    *int           `gorm:"column:anket_id" json:"anket_id"`
	CandidateTypeID            *int           `gorm:"column:candidate_type_id" json:"candidate_type_id"`
	SubAdvertisementID         *int           `gorm:"column:sub_advertisement_id" json:"sub_advertisement_id"`
	MarriedInfo                *string        `gorm:"column:married_info" json:"married_info"`
	OwnPropertyInfo            *string        `gorm:"column:own_property_info" json:"own_property_info"`
	MarriedPropertyInfo        *string        `gorm:"column:married_property_info" json:"married_property_info"`
	DzPresident                *string        `gorm:"column:dz_president" json:"dz_president"`
	HsPresident                *string        `gorm:"column:hs_president" json:"hs_president"`
	HsTenYearsCourt            *string        `gorm:"column:hs_ten_years_court" json:"hs_ten_years_court"`
	HsProcororTenYears         *string        `gorm:"column:hs_procoror_ten_years" json:"hs_procoror_ten_years"`
	HsTeachProcororTenYears    *string        `gorm:"column:hs_teach_procoror_ten_years" json:"hs_teach_procoror_ten_years"`
	HsCovermentTenYears        *string        `gorm:"column:hs_coverment_ten_years" json:"hs_coverment_ten_years"`
	CourtTypeID                *int           `gorm:"column:court_type_id" json:"court_type_id"`
	AdvTitle                   *string        `gorm:"column:adv_title" json:"adv_title"`
	CourtType                  *string        `gorm:"column:court_type" json:"court_type"`
	Vacancy                    *int           `gorm:"column:vacancy" json:"vacancy"`
	CourtOffice                *string        `gorm:"column:court_office" json:"court_office"`
	TypeJudicialPosition       *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	ReportID                   *int           `gorm:"column:report_id" json:"report_id"`
	ExamOpenedID               *int           `gorm:"column:exam_opened_id" json:"exam_opened_id"`
	CandidateRegisterID        *string        `gorm:"column:candidate_register_id" json:"candidate_register_id"`
	CandidateRefuseID          *string        `gorm:"column:candidate_refuse_id" json:"candidate_refuse_id"`
	Others                     *string        `gorm:"column:others" json:"others"`
	Description                *string        `gorm:"column:description" json:"description"`
	CandidateApplicationID     *int           `gorm:"column:candidate_application_id" json:"candidate_application_id"`
	ShuugchiinTorolID          *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	AuditorReportStatus        *string        `gorm:"column:auditor_report_status" json:"auditor_report_status"`
	ShalgaltiinErkhTuluv       *string        `gorm:"column:shalgaltiin_erkh_tuluv" json:"shalgaltiin_erkh_tuluv"`
	Login                      *string        `gorm:"column:login" json:"login"`
	Email                      *string        `gorm:"column:email" json:"email"`
	RegisterNumber             *string        `gorm:"column:register_number" json:"register_number"`
	FirstName                  *string        `gorm:"column:first_name" json:"first_name"`
	LastName                   *string        `gorm:"column:last_name" json:"last_name"`
	Phone                      *string        `gorm:"column:phone" json:"phone"`
	DeletedAtv                 *time.Time     `gorm:"column:deleted_atv" json:"deleted_atv"`
	DeletedAtrole              *time.Time     `gorm:"column:deleted_atrole" json:"deleted_atrole"`
}

func (v *ViewCandidateAllTables) TableName() string {
	return "view_candidate_all_tables"
}
