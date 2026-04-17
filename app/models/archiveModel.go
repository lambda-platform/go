package models

import (
	"gorm.io/gorm"
	"time"
)

type ViewExamArchive struct {
	ID                *int           `gorm:"column:id" json:"id"`
	UserID            *int           `gorm:"column:user_id" json:"user_id"`
	AdvertisementID   *int           `gorm:"column:advertisement_id" json:"advertisement_id"`
	ExamMainTypeID    *int           `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID     *int           `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	ExamnationTypeID  *int           `gorm:"column:examnation_type_id" json:"examnation_type_id"`
	ExamDate          *time.Time     `gorm:"column:exam_date" json:"exam_date"`
	StartTime         *string        `gorm:"column:start_time" json:"start_time"`
	ExamScores        *int           `gorm:"column:exam_scores" json:"exam_scores"`
	ExamAddressID     *int           `gorm:"column:exam_address_id" json:"exam_address_id"`
	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ExamStartDate     *time.Time     `gorm:"column:exam_start_date" json:"exam_start_date"`
	CTypeID           *int           `gorm:"column:c_type_id" json:"c_type_id"`
	ShuugchiinTorolID *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	Title             *string        `gorm:"column:title" json:"title"`
	UndsenShalgalt    *string        `gorm:"column:undsen_shalgalt" json:"undsen_shalgalt"`
	ShalgaltTorol     *string        `gorm:"column:shalgalt_torol" json:"shalgalt_torol"`
	TestTitle         *string        `gorm:"column:test_title" json:"test_title"`
	CourtType         *string        `gorm:"column:court_type" json:"court_type"`
	ShuugchiinTorol   *string        `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
}

func (v *ViewExamArchive) TableName() string {
	return "view_exam_archive"
}

type CronLog struct {
	ID        int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Torol     string     `gorm:"column:torol" json:"torol"`
	CreatedAt *time.Time `gorm:"column:created_at" json:"created_at"`
}

func (c *CronLog) TableName() string {
	return "cron_log"
}

type ExaminationArchive struct {
	ID               int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID           *int           `gorm:"column:user_id" json:"user_id"`
	AdvertisementID  int            `gorm:"column:advertisement_id" json:"advertisement_id"`
	ExamMainTypeID   int            `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID    int            `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	ExamnationTypeID int            `gorm:"column:examnation_type_id" json:"examnation_type_id"`
	ExamDate         *time.Time     `gorm:"column:exam_date" json:"exam_date"`
	StartTime        *string        `gorm:"column:start_time" json:"start_time"`
	ExamScores       int            `gorm:"column:exam_scores" json:"exam_scores"`
	ExamAddressID    int            `gorm:"column:exam_address_id" json:"exam_address_id"`
	CreatedAt        *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt        *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt        gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ExamStartDate    time.Time      `gorm:"column:exam_start_date" json:"exam_start_date"`
	CTypeID          *int           `gorm:"column:c_type_id" json:"c_type_id"`
	//ShuugchiinTorolID *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (e *ExaminationArchive) TableName() string {
	return "examination_archive"
}

type AdvertisementArchive struct {
	ID                    int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Title                 *string        `gorm:"column:title" json:"title"`
	CourtOrderDescription *string        `gorm:"column:court_order_description" json:"court_order_description"`
	CourtOrder            *string        `gorm:"column:court_order" json:"court_order"`
	CourtTypeID           *int           `gorm:"column:court_type_id" json:"court_type_id"`
	StartDate             *string        `gorm:"column:start_date" json:"start_date"`
	EndDate               *string        `gorm:"column:end_date" json:"end_date"`
	CreatedAt             *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt             *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt             gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UserID                *int           `gorm:"column:user_id" json:"user_id"`
	ShuugchiinTorolID     *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (a *AdvertisementArchive) TableName() string {
	return "advertisement_archive"
}

type AdvertisementS struct {
	ID                    int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Title                 *string        `gorm:"column:title" json:"title"`
	CourtOrderDescription *string        `gorm:"column:court_order_description" json:"court_order_description"`
	CourtOrder            *string        `gorm:"column:court_order" json:"court_order"`
	CourtTypeID           *int           `gorm:"column:court_type_id" json:"court_type_id"`
	StartDate             *string        `gorm:"column:start_date" json:"start_date"`
	EndDate               *string        `gorm:"column:end_date" json:"end_date"`
	CreatedAt             *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt             *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt             gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UserID                *int           `gorm:"column:user_id" json:"user_id"`
	ShuugchiinTorolID     *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (a *AdvertisementS) TableName() string {
	return "advertisement"
}

type ViewModExam struct {
	ID             *int           `gorm:"column:id" json:"id"`
	TestCatID      *int           `gorm:"column:test_cat_id" json:"test_cat_id"`
	TestTitle      *string        `gorm:"column:test_title" json:"test_title"`
	NiitHugatsaa   *int           `gorm:"column:niit_hugatsaa" json:"niit_hugatsaa"`
	ExamScheduleID *int           `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	CreatedAt      *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt      *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt      gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	IsStarted      bool           `gorm:"column:is_started" json:"is_started"`
	//ShuugchiinTorolID     *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	ExamScores            *int       `gorm:"column:exam_scores" json:"exam_scores"`
	UID                   *string    `gorm:"column:uid" json:"uid"`
	AdvertisementID       *int       `gorm:"column:advertisement_id" json:"advertisement_id"`
	ExamMainTypeID        *int       `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID         *int       `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	ExamResultSchedule    *int       `gorm:"column:exam_result_schedule" json:"exam_result_schedule"`
	DeletedAtlp           *time.Time `gorm:"column:deleted_atlp" json:"deleted_atlp"`
	ExamStartDate         *time.Time `gorm:"column:exam_start_date" json:"exam_start_date"`
	Title                 *string    `gorm:"column:title" json:"title"`
	CourtOrderDescription *string    `gorm:"column:court_order_description" json:"court_order_description"`
	StartDate             *string    `gorm:"column:start_date" json:"start_date"`
	UndsenShalgalt        *string    `gorm:"column:undsen_shalgalt" json:"undsen_shalgalt"`
	ShalgaltTorol         *string    `gorm:"column:shalgalt_torol" json:"shalgalt_torol"`
}

func (v *ViewModExam) TableName() string {
	return "view_mod_exam"
}

//type Mod3Test struct {
//	ID                int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
//	TestCatID         *int           `gorm:"column:test_cat_id" json:"test_cat_id"`
//	TestTitle         *string        `gorm:"column:test_title" json:"test_title"`
//	NiitHugatsaa      *int           `gorm:"column:niit_hugatsaa" json:"niit_hugatsaa"`
//	ExamScheduleID    int            `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
//	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
//	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
//	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
//	ExamScores        *int           `gorm:"column:exam_scores" json:"exam_scores"`
//	IsStarted         bool           `gorm:"column:is_started" json:"is_started"`
//	ShuugchiinTorolID *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
//	UID               string         `gorm:"column:uid;primaryKey;autoIncrement" json:"uid"`
//}
//
//func (m *Mod3Test) TableName() string {
//	return "mod3_test"
//}

type Mod3TestArchive struct {
	ID                int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestCatID         *int           `gorm:"column:test_cat_id" json:"test_cat_id"`
	TestTitle         *string        `gorm:"column:test_title" json:"test_title"`
	NiitHugatsaa      *int           `gorm:"column:niit_hugatsaa" json:"niit_hugatsaa"`
	ExamScheduleID    int            `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ExamScores        *int           `gorm:"column:exam_scores" json:"exam_scores"`
	IsStarted         bool           `gorm:"column:is_started" json:"is_started"`
	ShuugchiinTorolID *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	UID               string         `gorm:"column:uid;primaryKey;autoIncrement" json:"uid"`
}

func (m *Mod3TestArchive) TableName() string {
	return "mod3_test_archive"
}

type CandidateComplaintsArchive struct {
	ID                     int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	CandidateID            *int           `gorm:"column:candidate_id" json:"candidate_id"`
	ComplaintsTypeID       *int           `gorm:"column:complaints_type_id" json:"complaints_type_id"`
	Complaints             *string        `gorm:"column:complaints" json:"complaints"`
	CreatedAt              *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt              *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt              gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ComplaintsStatusID     *int           `gorm:"column:complaints_status_id" json:"complaints_status_id"`
	Explanation            *string        `gorm:"column:explanation" json:"explanation"`
	Files                  *string        `gorm:"column:files" json:"files"`
	CandidateApplicationID *int           `gorm:"column:candidate_application_id" json:"candidate_application_id"`
	CourtOffice            *string        `gorm:"column:court_office" json:"court_office"`
	TypeJudicialPosition   *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	TypeJudicialPositionID *int           `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtOfficeID          *int           `gorm:"column:court_office_id" json:"court_office_id"`
}

func (c *CandidateComplaintsArchive) TableName() string {
	return "candidate_complaints_archive"
}

type ViewCandidateComplaints struct {
	ID                     *int           `gorm:"column:id" json:"id"`
	CandidateID            *int           `gorm:"column:candidate_id" json:"candidate_id"`
	ComplaintsTypeID       *int           `gorm:"column:complaints_type_id" json:"complaints_type_id"`
	Complaints             *string        `gorm:"column:complaints" json:"complaints"`
	CreatedAt              *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt              *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt              gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ComplaintsStatusID     *int           `gorm:"column:complaints_status_id" json:"complaints_status_id"`
	BExplanation           *string        `gorm:"column:b_explanation" json:"b_explanation"`
	Files                  *string        `gorm:"column:files" json:"files"`
	CandidateApplicationID *int           `gorm:"column:candidate_application_id" json:"candidate_application_id"`
	CourtOffice            *string        `gorm:"column:court_office" json:"court_office"`
	TypeJudicialPosition   *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	TypeJudicialPositionID *int           `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtOfficeID          *int           `gorm:"column:court_office_id" json:"court_office_id"`
	ComplaintsType         *string        `gorm:"column:complaints_type" json:"complaints_type"`
	BComplaintsStatus      *string        `gorm:"column:b_complaints_status" json:"b_complaints_status"`
	TestDate               *time.Time     `gorm:"column:test_date" json:"test_date"`
	Status                 *string        `gorm:"column:status" json:"status"`
	UserID                 *int           `gorm:"column:user_id" json:"user_id"`
	Login                  *string        `gorm:"column:login" json:"login"`
	FirstName              *string        `gorm:"column:first_name" json:"first_name"`
	DeletedAtss            *time.Time     `gorm:"column:deleted_atss" json:"deleted_atss"`
	Address                *string        `gorm:"column:address" json:"address"`
	FirstNameNerDevshigch  *string        `gorm:"column:first_name_ner_devshigch" json:"first_name_ner_devshigch"`
	CourtOffices           *string        `gorm:"column:court_offices" json:"court_offices"`
}

func (v *ViewCandidateComplaints) TableName() string {
	return "view_candidate_complaints"
}
