package models

import (
	"gorm.io/gorm"
	"time"
)

type Impact struct {
	ID                int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID            int            `gorm:"column:user_id" json:"user_id"`
	OrgID             int            `gorm:"column:org_id" json:"org_id"`
	Misunderstood     *string        `gorm:"column:misunderstood" json:"misunderstood"`
	Lastname          *string        `gorm:"column:lastname" json:"lastname"`
	Firstname         *string        `gorm:"column:firstname" json:"firstname"`
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
	Moreinfo          *string        `gorm:"column:moreinfo" json:"moreinfo"`
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
	DocxStatus        string         `gorm:"column:docx_status" json:"docx_status"`
	DocxStatusID      *string        `gorm:"column:docx_status_id" json:"docx_status_id"`
}

func (i *Impact) TableName() string {
	return "impact"
}

type Independency struct {
	ID            int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	OrgID         *int           `gorm:"column:org_id" json:"org_id"`
	UserID        *int           `gorm:"column:user_id" json:"user_id"`
	CriticalIssue *string        `gorm:"column:critical_issue" json:"critical_issue"`
	Surname       *string        `gorm:"column:surname" json:"surname"`
	Givenname     *string        `gorm:"column:givenname" json:"givenname"`
	Job           *string        `gorm:"column:job" json:"job"`
	Info          *string        `gorm:"column:info" json:"info"`
	ImpactSit     *string        `gorm:"column:impact_sit" json:"impact_sit"`
	ReqDate       *time.Time     `gorm:"column:req_date" json:"req_date"`
	IndepStatusID *int           `gorm:"column:indep_status_id" json:"indep_status_id"`
	AttachFile    *string        `gorm:"column:attach_file" json:"attach_file"`
	FileSample    *string        `gorm:"column:file_sample" json:"file_sample"`
	DeletedAt     gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UpdatedAt     *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	CreatedAt     *time.Time     `gorm:"column:created_at" json:"created_at"`
	ShezID        *int           `gorm:"column:shez_id" json:"shez_id"`
	ShezDate      *time.Time     `gorm:"column:shez_date" json:"shez_date"`
	ShezDef       *string        `gorm:"column:shez_def" json:"shez_def"`
	ShezFile      *string        `gorm:"column:shez_file" json:"shez_file"`
	Esign         *string        `gorm:"column:esign" json:"esign"`
	AdminDate     *time.Time     `gorm:"column:admin_date" json:"admin_date"`
	AdminID       *int           `gorm:"column:admin_id" json:"admin_id"`
	AdminTailbar  *string        `gorm:"column:admin_tailbar" json:"admin_tailbar"`
	AdminFile     *string        `gorm:"column:admin_file" json:"admin_file"`
	GazarHeltesID *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	DocxStatus    string         `gorm:"column:docx_status" json:"docx_status"`
	DocxStatusID  *string        `gorm:"column:docx_status_id" json:"docx_status_id"`
}

func (i *Independency) TableName() string {
	return "independency"
}
