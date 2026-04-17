package models

import (
	"gorm.io/gorm"
	"time"
)

type ImpactForm struct {
	ID                 int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID             int            `gorm:"column:user_id" json:"user_id"`
	OrgID              int            `gorm:"column:org_id" json:"org_id"`
	Misunderstood      *string        `gorm:"column:misunderstood" json:"misunderstood"`
	Lastname           *string        `gorm:"column:lastname" json:"lastname"`
	Firstname          *string        `gorm:"column:firstname" json:"firstname"`
	Postition          *string        `gorm:"column:postition" json:"postition"`
	MoreInfo           *string        `gorm:"column:more_info" json:"more_info"`
	Files              *string        `gorm:"column:files" json:"files"`
	Dates              *time.Time     `gorm:"column:dates" json:"dates"`
	EmpID              *int           `gorm:"column:emp_id" json:"emp_id"`
	MatDate            *time.Time     `gorm:"column:mat_date" json:"mat_date"`
	ImpactStatusID     *int           `gorm:"column:impact_status_id" json:"impact_status_id"`
	EmployeeID         *int           `gorm:"column:employee_id" json:"employee_id"`
	SDate              *time.Time     `gorm:"column:s_date" json:"s_date"`
	SImpactStatusID    *int           `gorm:"column:s_impact_status_id" json:"s_impact_status_id"`
	ShOrgID            *int           `gorm:"column:sh_org_id" json:"sh_org_id"`
	ShDate             *time.Time     `gorm:"column:sh_date" json:"sh_date"`
	ShImpactID         *int           `gorm:"column:sh_impact_id" json:"sh_impact_id"`
	TsDate             *time.Time     `gorm:"column:ts_date" json:"ts_date"`
	TsOrgID            *int           `gorm:"column:ts_org_id" json:"ts_org_id"`
	CreatedAt          *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt          *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt          gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	Moreinfo           *string        `gorm:"column:moreinfo" json:"moreinfo"`
	MoreFiles          *string        `gorm:"column:more_files" json:"more_files"`
	SecEmpID           *int           `gorm:"column:sec_emp_id" json:"sec_emp_id"`
	SecDates           *time.Time     `gorm:"column:sec_dates" json:"sec_dates"`
	Situation          *string        `gorm:"column:situation" json:"situation"`
	NoteSec            *string        `gorm:"column:note_sec" json:"note_sec"`
	SecImpactStatusID  *int           `gorm:"column:sec_impact_status_id" json:"sec_impact_status_id"`
	SDefinition        *string        `gorm:"column:s_definition" json:"s_definition"`
	SFile              *string        `gorm:"column:s_file" json:"s_file"`
	ShDefinition       *string        `gorm:"column:sh_definition" json:"sh_definition"`
	ShFile             *string        `gorm:"column:sh_file" json:"sh_file"`
	ShStatusImpactID   *int           `gorm:"column:sh_status_impact_id" json:"sh_status_impact_id"`
	TsConfirmationID   *int           `gorm:"column:ts_confirmation_id" json:"ts_confirmation_id"`
	FileSample         *string        `gorm:"column:file_sample" json:"file_sample"`
	JobPosition        *string        `gorm:"column:job_position" json:"job_position"`
	PartyCheck         *string        `gorm:"column:party_check" json:"party_check"`
	Esign              *string        `gorm:"column:esign" json:"esign"`
	IsCheckHr          *int           `gorm:"column:is_check_hr" json:"is_check_hr"`
	GazarHeltesID      *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	DocxStatus         *string        `gorm:"column:docx_status" json:"docx_status"`
	DocxStatusID       *string        `gorm:"column:docx_status_id" json:"docx_status_id"`
	IsEnterprise       *int           `gorm:"column:is_enterprise" json:"is_enterprise"`
	EnterpriseName     *string        `gorm:"column:enterprise_name" json:"enterprise_name"`
	SpclOrgFile        *string        `gorm:"column:spcl_org_file" json:"spcl_org_file"`
	StmntFile          *string        `gorm:"column:stmnt_file" json:"stmnt_file"`
	IsActionTakes      *string        `gorm:"column:is_action_takes" json:"is_action_takes"`
	IsDocumentAtteched *string        `gorm:"column:is_document_atteched" json:"is_document_atteched"`
	MemberID           *int           `gorm:"column:member_id" json:"member_id"`
	ImpactTriedID      *int           `gorm:"column:impact_tried_id" json:"impact_tried_id"`
	TrialStepID        *int           `gorm:"column:trial_step_id" json:"trial_step_id"`
	ImpactTriedOther   *string        `gorm:"column:impact_tried_other" json:"impact_tried_other"`
	ImpactRequest      *string        `gorm:"column:impact_request" json:"impact_request"`
	ImpactFact         *string        `gorm:"column:impact_fact" json:"impact_fact"`
}

type LutTrialStep struct {
	ID        int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TrialStep *string `gorm:"column:trial_step" json:"trial_step"`
}

func (l *LutTrialStep) TableName() string {
	return "lut_trial_step"
}

type LutImpactTried struct {
	ID          int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	ImpactTried *string `gorm:"column:impact_tried" json:"impact_tried"`
}

func (l *LutImpactTried) TableName() string {
	return "lut_impact_tried"
}

type ProtectionIssue struct {
	ID                 int                  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID             *int                 `gorm:"column:user_id" json:"user_id"`
	OrgID              *int                 `gorm:"column:org_id" json:"org_id"`
	RequestIssue       *string              `gorm:"column:request_issue" json:"request_issue"`
	AttachFile         *string              `gorm:"column:attach_file" json:"attach_file"`
	Ognoo              *time.Time           `gorm:"column:ognoo" json:"ognoo"`
	EsignJudge         *string              `gorm:"column:esign_judge" json:"esign_judge"`
	ProtectionID       *int                 `gorm:"column:protection_id" json:"protection_id"`
	ShezID             *int                 `gorm:"column:shez_id" json:"shez_id"`
	ShOgnoo            *time.Time           `gorm:"column:sh_ognoo" json:"sh_ognoo"`
	EsignSh            *string              `gorm:"column:esign_sh" json:"esign_sh"`
	ShProtectionID     *int                 `gorm:"column:sh_protection_id" json:"sh_protection_id"`
	SheOgnoo           *time.Time           `gorm:"column:she_ognoo" json:"she_ognoo"`
	SheID              *int                 `gorm:"column:she_id" json:"she_id"`
	MeasureID          *int                 `gorm:"column:measure_id" json:"measure_id"`
	AttachFileShe      *string              `gorm:"column:attach_file_she" json:"attach_file_she"`
	ProtectionDate     *time.Time           `gorm:"column:protection_date" json:"protection_date"`
	SheProtectionID    *int                 `gorm:"column:she_protection_id" json:"she_protection_id"`
	ReqCheck           *string              `gorm:"column:req_check" json:"req_check"`
	DeletedAt          gorm.DeletedAt       `gorm:"column:deleted_at" json:"deleted_at"`
	UpdatedAt          *time.Time           `gorm:"column:updated_at" json:"updated_at"`
	ReqFile            *string              `gorm:"column:req_file" json:"req_file"`
	Esign              *string              `gorm:"column:esign" json:"esign"`
	SubProtectionIssue []SubProtectionIssue `gorm:"-" json:"sub_protection_issue"`
}

func (p *ProtectionIssue) TableName() string {
	return "protection_issue"
}

type SubProtectionIssue struct {
	ID                int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	ProtectionIssueID *int    `gorm:"column:protection_issue_id" json:"protection_issue_id"`
	Surname           *string `gorm:"column:surname" json:"surname"`
	Givenname         *string `gorm:"column:givenname" json:"givenname"`
	Age               *int    `gorm:"column:age" json:"age"`
	Relative          *string `gorm:"column:relative" json:"relative"`
	Phonenumber       *int    `gorm:"column:phonenumber" json:"phonenumber"`
}

func (s *SubProtectionIssue) TableName() string {
	return "sub_protection_issue"
}

type Independency struct {
	ID            int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	OrgID         *int           `gorm:"column:org_id" json:"org_id"`
	UserID        *int           `gorm:"column:user_id" json:"user_id"`
	CriticalIssue *string        `gorm:"column:critical_issue" json:"critical_issue"`
	Surname       string         `gorm:"column:surname" json:"surname"`
	Givenname     string         `gorm:"column:givenname" json:"givenname"`
	Job           string         `gorm:"column:job" json:"job"`
	Info          *string        `gorm:"column:info" json:"info"`
	ImpactSit     string         `gorm:"column:impact_sit" json:"impact_sit"`
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
}

func (i *Independency) TableName() string {
	return "independency"
}
