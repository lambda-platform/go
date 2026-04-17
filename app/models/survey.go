package models

type SurveyA struct {
	ID           int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	SurveyQID    *int    `gorm:"column:survey_q_id" json:"survey_q_id"`
	SubSurveyQID *int    `gorm:"column:sub_survey_q_id" json:"sub_survey_q_id"`
	UserID       *int    `gorm:"column:user_id" json:"user_id"`
	SurAnswer    *string `gorm:"column:sur_answer" json:"sur_answer"`
	OrgID        *int    `gorm:"column:org_id" json:"org_id"`
}

func (s *SurveyA) TableName() string {
	return "survey_a"
}

//type SurveyQ struct {
//	ID                int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
//	SurveyQuestion    *string        `gorm:"column:survey_question" json:"survey_question"`
//	SurveyDescription *string        `gorm:"column:survey_description" json:"survey_description"`
//	SurveyDate        *time.Time     `gorm:"column:survey_date" json:"survey_date"`
//	SurveyEndDate     *time.Time     `gorm:"column:survey_end_date" json:"survey_end_date"`
//	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
//	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
//	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
//}
//
//func (s *SurveyQ) TableName() string {
//	return "survey_q"
//}

type SaveSurvey struct {
	ID        int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	SurveyID  *int    `gorm:"column:survey_id" json:"survey_id"`
	AnswerID  *int    `gorm:"column:answer_id" json:"answer_id"`
	UserID    *int    `gorm:"column:user_id" json:"user_id"`
	AnsweText *string `gorm:"column:answe_text" json:"answe_text"`
	TypeID    *int    `gorm:"column:type_id" json:"type_id"`
}

func (s *SaveSurvey) TableName() string {
	return "save_survey"
}
