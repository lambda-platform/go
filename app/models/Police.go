package models

import (
	"gorm.io/gorm"
	"time"
)

type ViewImpactAllNew struct {
	ID                *int           `gorm:"column:id" json:"id"`
	UserID            *int           `gorm:"column:user_id" json:"user_id"`
	OrgID             *int           `gorm:"column:org_id" json:"org_id"`
	Misunderstood     *string        `gorm:"column:misunderstood" json:"misunderstood"`
	Lastname          *string        `gorm:"column:lastname" json:"lastname"`
	Firstnames        *string        `gorm:"column:firstnames" json:"firstnames"`
	Postition         *string        `gorm:"column:postition" json:"postition"`
	MoreInfo          *string        `gorm:"column:more_info" json:"more_info"`
	Files             *string        `gorm:"column:files" json:"files"`
	Dates             *time.Time     `gorm:"column:dates" json:"dates"`
	EmpID             *int           `gorm:"column:emp_id" json:"emp_id"`
	MatDate           *time.Time     `gorm:"column:mat_date" json:"mat_date"`
	ImpactStatusID    *int           `gorm:"column:impact_status_id" json:"impact_status_id"`
	EmployeeID        *int           `gorm:"column:employee_id" json:"employee_id"`
	SDate             *time.Time     `gorm:"column:s_date" json:"s_date"`
	SImpactStatusID   *int           `gorm:"column:s_impact_status_id" json:"s_impact_status_id"`
	ShOrgID           *int           `gorm:"column:sh_org_id" json:"sh_org_id"`
	ShDate            *time.Time     `gorm:"column:sh_date" json:"sh_date"`
	ShImpactID        *int           `gorm:"column:sh_impact_id" json:"sh_impact_id"`
	TsDate            *time.Time     `gorm:"column:ts_date" json:"ts_date"`
	TsOrgID           *int           `gorm:"column:ts_org_id" json:"ts_org_id"`
	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	MoreFiles         *string        `gorm:"column:more_files" json:"more_files"`
	SecEmpID          *int           `gorm:"column:sec_emp_id" json:"sec_emp_id"`
	SecDates          *time.Time     `gorm:"column:sec_dates" json:"sec_dates"`
	Situation         *string        `gorm:"column:situation" json:"situation"`
	NoteSec           *string        `gorm:"column:note_sec" json:"note_sec"`
	SecImpactStatusID *int           `gorm:"column:sec_impact_status_id" json:"sec_impact_status_id"`
	SDefinition       *string        `gorm:"column:s_definition" json:"s_definition"`
	SFile             *string        `gorm:"column:s_file" json:"s_file"`
	ShDefinition      *string        `gorm:"column:sh_definition" json:"sh_definition"`
	ShFile            *string        `gorm:"column:sh_file" json:"sh_file"`
	ShStatusImpactID  *int           `gorm:"column:sh_status_impact_id" json:"sh_status_impact_id"`
	TsConfirmationID  *int           `gorm:"column:ts_confirmation_id" json:"ts_confirmation_id"`
	FileSample        *string        `gorm:"column:file_sample" json:"file_sample"`
	JobPosition       *string        `gorm:"column:job_position" json:"job_position"`
	PartyCheck        *string        `gorm:"column:party_check" json:"party_check"`
	Esign             *string        `gorm:"column:esign" json:"esign"`
	IsCheckHr         *int           `gorm:"column:is_check_hr" json:"is_check_hr"`
	GazarHeltesID     *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	DocxStatus        *string        `gorm:"column:docx_status" json:"docx_status"`
	Impact            *string        `gorm:"column:impact" json:"impact"`
	CourtOffice       *string        `gorm:"column:court_office" json:"court_office"`
	ShuuhShatID       *int           `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ShuuhTurulID      *int           `gorm:"column:shuuh_turul_id" json:"shuuh_turul_id"`
	ShuuhBair         *string        `gorm:"column:shuuh_bair" json:"shuuh_bair"`
	UruuToo           *int           `gorm:"column:uruu_too" json:"uruu_too"`
	HuraldaaTanhim    *string        `gorm:"column:huraldaa_tanhim" json:"huraldaa_tanhim"`
	TasalgaaniiToo    *string        `gorm:"column:tasalgaanii_too" json:"tasalgaanii_too"`
	HedenShuuh        *string        `gorm:"column:heden_shuuh" json:"heden_shuuh"`
	ProkurorCheck     *int           `gorm:"column:prokuror_check" json:"prokuror_check"`
	ZasvarBaidal      *string        `gorm:"column:zasvar_baidal" json:"zasvar_baidal"`
	GazarCheck        *int           `gorm:"column:gazar_check" json:"gazar_check"`
	AlbaCheck         *int           `gorm:"column:alba_check" json:"alba_check"`
	ArhivUruu         *string        `gorm:"column:arhiv_uruu" json:"arhiv_uruu"`
	TaviurCheck       *int           `gorm:"column:taviur_check" json:"taviur_check"`
	TamgaGazarID      *int           `gorm:"column:tamga_gazar_id" json:"tamga_gazar_id"`
	Utas              *string        `gorm:"column:utas" json:"utas"`
	Bairshil          *string        `gorm:"column:bairshil" json:"bairshil"`
	AimagID           *int           `gorm:"column:aimag_id" json:"aimag_id"`
	SumID             *int           `gorm:"column:sum_id" json:"sum_id"`
	BagID             *int           `gorm:"column:bag_id" json:"bag_id"`
	EmailHayag        *string        `gorm:"column:email_hayag" json:"email_hayag"`
	TsahimHuudas      *string        `gorm:"column:tsahim_huudas" json:"tsahim_huudas"`
	LogoI             *string        `gorm:"column:logo_i" json:"logo_i"`
	CoverI            *string        `gorm:"column:cover_i" json:"cover_i"`
	Role              *int           `gorm:"column:role" json:"role"`
	Login             *string        `gorm:"column:login" json:"login"`
	FirstName         *string        `gorm:"column:first_name" json:"first_name"`
}

func (v *ViewImpactAllNew) TableName() string {
	return "view_impact_all_new"
}

type ViewIndependency struct {
	ID             *int           `gorm:"column:id" json:"id"`
	OrgID          *int           `gorm:"column:org_id" json:"org_id"`
	UserID         *int           `gorm:"column:user_id" json:"user_id"`
	CriticalIssue  *string        `gorm:"column:critical_issue" json:"critical_issue"`
	Surname        *string        `gorm:"column:surname" json:"surname"`
	Givenname      *string        `gorm:"column:givenname" json:"givenname"`
	Job            *string        `gorm:"column:job" json:"job"`
	Info           *string        `gorm:"column:info" json:"info"`
	ImpactSit      *string        `gorm:"column:impact_sit" json:"impact_sit"`
	ReqDate        *time.Time     `gorm:"column:req_date" json:"req_date"`
	IndepStatusID  *int           `gorm:"column:indep_status_id" json:"indep_status_id"`
	AttachFile     *string        `gorm:"column:attach_file" json:"attach_file"`
	FileSample     *string        `gorm:"column:file_sample" json:"file_sample"`
	DeletedAt      gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UpdatedAt      *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	CreatedAt      *time.Time     `gorm:"column:created_at" json:"created_at"`
	ShezID         *int           `gorm:"column:shez_id" json:"shez_id"`
	ShezDate       *time.Time     `gorm:"column:shez_date" json:"shez_date"`
	ShezDef        *string        `gorm:"column:shez_def" json:"shez_def"`
	ShezFile       *string        `gorm:"column:shez_file" json:"shez_file"`
	Esign          *string        `gorm:"column:esign" json:"esign"`
	AdminDate      *time.Time     `gorm:"column:admin_date" json:"admin_date"`
	AdminID        *int           `gorm:"column:admin_id" json:"admin_id"`
	AdminTailbar   *string        `gorm:"column:admin_tailbar" json:"admin_tailbar"`
	AdminFile      *string        `gorm:"column:admin_file" json:"admin_file"`
	GazarHeltesID  *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	DocxStatus     *string        `gorm:"column:docx_status" json:"docx_status"`
	DeletedAtt     *time.Time     `gorm:"column:deleted_att" json:"deleted_att"`
	CourtMail      *string        `gorm:"column:court_mail" json:"court_mail"`
	CourtTypeID    *int           `gorm:"column:court_type_id" json:"court_type_id"`
	Salery         *int           `gorm:"column:salery" json:"salery"`
	Login          *string        `gorm:"column:login" json:"login"`
	FirstName      *string        `gorm:"column:first_name" json:"first_name"`
	LastName       *string        `gorm:"column:last_name" json:"last_name"`
	CourtOffice    *string        `gorm:"column:court_office" json:"court_office"`
	ShuuhShatID    *int           `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ShuuhTurulID   *int           `gorm:"column:shuuh_turul_id" json:"shuuh_turul_id"`
	ShuuhBair      *string        `gorm:"column:shuuh_bair" json:"shuuh_bair"`
	UruuToo        *int           `gorm:"column:uruu_too" json:"uruu_too"`
	HuraldaaTanhim *string        `gorm:"column:huraldaa_tanhim" json:"huraldaa_tanhim"`
	TasalgaaniiToo *string        `gorm:"column:tasalgaanii_too" json:"tasalgaanii_too"`
	HedenShuuh     *string        `gorm:"column:heden_shuuh" json:"heden_shuuh"`
	ProkurorCheck  *int           `gorm:"column:prokuror_check" json:"prokuror_check"`
	ZasvarBaidal   *string        `gorm:"column:zasvar_baidal" json:"zasvar_baidal"`
	GazarCheck     *int           `gorm:"column:gazar_check" json:"gazar_check"`
	AlbaCheck      *int           `gorm:"column:alba_check" json:"alba_check"`
	ArhivUruu      *string        `gorm:"column:arhiv_uruu" json:"arhiv_uruu"`
	TaviurCheck    *int           `gorm:"column:taviur_check" json:"taviur_check"`
	TamgaGazarID   *int           `gorm:"column:tamga_gazar_id" json:"tamga_gazar_id"`
	Utas           *string        `gorm:"column:utas" json:"utas"`
	Bairshil       *string        `gorm:"column:bairshil" json:"bairshil"`
	AimagID        *int           `gorm:"column:aimag_id" json:"aimag_id"`
	SumID          *int           `gorm:"column:sum_id" json:"sum_id"`
	BagID          *int           `gorm:"column:bag_id" json:"bag_id"`
	EmailHayag     *string        `gorm:"column:email_hayag" json:"email_hayag"`
	TsahimHuudas   *string        `gorm:"column:tsahim_huudas" json:"tsahim_huudas"`
	LogoI          *string        `gorm:"column:logo_i" json:"logo_i"`
	CoverI         *string        `gorm:"column:cover_i" json:"cover_i"`
	IndepStatus    *string        `gorm:"column:indep_status" json:"indep_status"`
}

func (v *ViewIndependency) TableName() string {
	return "view_independency"
}

type ViewImpactCustom struct {
	ID            *int       `gorm:"column:id" json:"id"`
	Misunderstood *string    `gorm:"column:misunderstood" json:"misunderstood"`
	Lastname      *string    `gorm:"column:lastname" json:"lastname"`
	Firstnames    *string    `gorm:"column:firstnames" json:"firstnames"`
	Postition     *string    `gorm:"column:postition" json:"postition"`
	MoreInfo      *string    `gorm:"column:more_info" json:"more_info"`
	Files         *string    `gorm:"column:files" json:"files"`
	MatDate       *time.Time `gorm:"column:mat_date" json:"mat_date"`
	Situation     *string    `gorm:"column:situation" json:"situation"`
	PartyCheck    *string    `gorm:"column:party_check" json:"party_check"`
	CourtOffice   *string    `gorm:"column:court_office" json:"court_office"`
	FirstName     *string    `gorm:"column:first_name" json:"first_name"`
	JobPosition   *string    `gorm:"column:job_position" json:"job_position"`
	DocxStatus    *string    `gorm:"column:docx_status" json:"docx_status"`
	DocxStatusID  *string    `gorm:"column:docx_status_id" json:"docx_status_id"`
}

func (v *ViewImpactCustom) TableName() string {
	return "view_impact_custom"
}

type ViewCustomIndependency struct {
	ID            *int       `gorm:"column:id" json:"id"`
	CriticalIssue *string    `gorm:"column:critical_issue" json:"critical_issue"`
	Surname       *string    `gorm:"column:surname" json:"surname"`
	Givenname     *string    `gorm:"column:givenname" json:"givenname"`
	Job           *string    `gorm:"column:job" json:"job"`
	Info          *string    `gorm:"column:info" json:"info"`
	ImpactSit     *string    `gorm:"column:impact_sit" json:"impact_sit"`
	ReqDate       *time.Time `gorm:"column:req_date" json:"req_date"`
	AttachFile    *string    `gorm:"column:attach_file" json:"attach_file"`
	FirstName     *string    `gorm:"column:first_name" json:"first_name"`
	LastName      *string    `gorm:"column:last_name" json:"last_name"`
	CourtOffice   *string    `gorm:"column:court_office" json:"court_office"`
	DocxStatus    *string    `gorm:"column:docx_status" json:"docx_status"`
	DocxStatusID  *string    `gorm:"column:docx_status_id" json:"docx_status_id"`
}

func (v *ViewCustomIndependency) TableName() string {
	return "view_custom_independency"
}
