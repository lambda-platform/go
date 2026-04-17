package models

import "time"

type DocXResponse struct {
	CreatedDate     string `json:"createdDate"`
	CreatedUserID   any    `json:"createdUserId"`
	DocumentDate    string `json:"documentDate"`
	DocumentName    string `json:"documentName"`
	DocumentNumber  string `json:"documentNumber"`
	DocumentTypeID  int    `json:"documentTypeId"`
	ID              string `json:"id"`
	IsActive        bool   `json:"isActive"`
	IsNeedReply     bool   `json:"isNeedReply"`
	IsReplyDoc      bool   `json:"isReplyDoc"`
	NoOfPages       string `json:"noOfPages"`
	OrgID           string `json:"orgId"`
	OrgName         string `json:"orgName"`
	OrgCode         string `json:"orgCode"`
	ProgramID       string `json:"programId"`
	PriorityID      int    `json:"priorityId"`
	ResponseDate    string `json:"responseDate"`
	ResponseTypeID  int    `json:"responseTypeId"`
	SignName        string `json:"signName"`
	SrcDocumentCode any    `json:"srcDocumentCode"`
	StatusID        int    `json:"statusId"`
	FileList        []File `json:"fileList"`
	FileCount       int    `json:"fileCount"`
	StatusCode      string `json:"statusCode"`
	StatusName      string `json:"statusName"`
	OrgList         []struct {
		CreatedDate string `json:"createdDate"`
		DocID       string `json:"docId"`
		ID          string `json:"id"`
		OrgID       string `json:"orgId"`
		StatusID    int    `json:"statusId"`
		ProgramID   string `json:"programId"`
	} `json:"orgList"`
}
type NewStatus struct {
	ID             string    `json:"id"`
	DocID          string    `json:"docId"`
	OrgID          string    `json:"orgId"`
	StatusID       int       `json:"statusId"`
	CreatedDate    time.Time `json:"createdDate"`
	UpdatedDate    time.Time `json:"updatedDate"`
	StatusPerson   string    `json:"statusPerson"`
	StatusPosition string    `json:"statusPosition"`
	StatusComment  string    `json:"statusComment"`
	Doc            struct {
		DocumentNumber string `json:"documentNumber"`
		OrgID          string `json:"orgId"`
		DocumentDate   string `json:"documentDate"`
	} `json:"doc"`
}

type NewDoc struct {
	CreatedDate     string  `json:"createdDate"`
	CreatedUserID   any     `json:"createdUserId"`
	DocumentDate    string  `json:"documentDate"`
	DocumentName    string  `json:"documentName"`
	DocumentNumber  string  `json:"documentNumber"`
	DocumentTypeID  int     `json:"documentTypeId"`
	ID              string  `json:"id"`
	IsActive        bool    `json:"isActive"`
	IsNeedReply     bool    `json:"isNeedReply"`
	IsReplyDoc      bool    `json:"isReplyDoc"`
	NoOfPages       string  `json:"noOfPages"`
	OrgID           string  `json:"orgId"`
	OrgName         string  `json:"orgName"`
	OrgCode         string  `json:"orgCode"`
	ProgramID       string  `json:"programId"`
	PriorityID      int     `json:"priorityId"`
	ResponseDate    string  `json:"responseDate"`
	ResponseTypeID  int     `json:"responseTypeId"`
	SignName        string  `json:"signName"`
	SrcDocumentCode *string `json:"srcDocumentCode"`
	StatusID        int     `json:"statusId"`
	FileList        []struct {
		ID            string `json:"id"`
		FileName      string `json:"fileName"`
		CreatedDate   string `json:"createdDate"`
		CreatedUserID string `json:"createdUserId"`
		DocID         string `json:"docId"`
		Name          string `json:"name"`
		Size          string `json:"size"`
		Type          string `json:"type"`
		URL           string `json:"url"`
		OrgList       []struct {
			CreatedDate string `json:"createdDate"`
			DocID       string `json:"docId"`
			ID          string `json:"id"`
			OrgID       string `json:"orgId"`
			StatusID    int    `json:"statusId"`
			ProgramID   string `json:"programId"`
		} `json:"orgList"`
	} `json:"fileList"`
	FileCount  int    `json:"fileCount"`
	StatusCode string `json:"statusCode"`
	StatusName string `json:"statusName"`
	OrgList    []struct {
		CreatedDate string `json:"createdDate"`
		DocID       string `json:"docId"`
		ID          string `json:"id"`
		OrgID       string `json:"orgId"`
		StatusID    int    `json:"statusId"`
		ProgramID   string `json:"programId"`
	} `json:"orgList"`
}
type DocxDocument struct {
	ID              string     `gorm:"column:id" json:"id"`
	CreatedDate     *time.Time `gorm:"column:created_date" json:"created_date"`
	DocumentDate    *time.Time `gorm:"column:document_date" json:"document_date"`
	DocumentName    *string    `gorm:"column:document_name" json:"document_name"`
	DocumentNumber  *string    `gorm:"column:document_number" json:"document_number"`
	DocumentTypeID  *int       `gorm:"column:document_type_id" json:"document_type_id"`
	IsActive        bool       `gorm:"column:is_active" json:"is_active"`
	IsNeedReply     bool       `gorm:"column:is_need_reply" json:"is_need_reply"`
	IsReplyDoc      bool       `gorm:"column:is_reply_doc" json:"is_reply_doc"`
	NoOfPages       *int       `gorm:"column:no_of_pages" json:"no_of_pages"`
	OrgID           *int       `gorm:"column:org_id" json:"org_id"`
	OrgName         *string    `gorm:"column:org_name" json:"org_name"`
	OrgCode         *string    `gorm:"column:org_code" json:"org_code"`
	ProgramID       *int       `gorm:"column:program_id" json:"program_id"`
	PriorityID      *int       `gorm:"column:priority_id" json:"priority_id"`
	ResponseDate    *time.Time `gorm:"column:response_date" json:"response_date"`
	ResponseTypeID  *int       `gorm:"column:response_type_id" json:"response_type_id"`
	SignName        *string    `gorm:"column:sign_name" json:"sign_name"`
	SrcDocumentCode *string    `gorm:"column:src_document_code" json:"src_document_code"`
	StatusID        *int       `gorm:"column:status_id" json:"status_id"`
	FileCount       *int       `gorm:"column:file_count" json:"file_count"`
	StatusCode      *string    `gorm:"column:status_code" json:"status_code"`
	StatusName      *string    `gorm:"column:status_name" json:"status_name"`
	FileList        *string    `gorm:"column:file_list" json:"file_list"`
}

func (d *DocxDocument) TableName() string {
	return "docx_document"
}

type File struct {
	ID            string `json:"id"`
	FileName      string `json:"fileName"`
	CreatedDate   string `json:"createdDate"`
	CreatedUserID string `json:"createdUserId"`
	DocID         string `json:"docId"`
	Name          string `json:"name"`
	Size          string `json:"size"`
	Type          string `json:"type"`
	URL           string `json:"url"`
	OrgList       []struct {
		CreatedDate string `json:"createdDate"`
		DocID       string `json:"docId"`
		ID          string `json:"id"`
		OrgID       string `json:"orgId"`
		StatusID    int    `json:"statusId"`
		ProgramID   string `json:"programId"`
	} `json:"orgList"`
}
