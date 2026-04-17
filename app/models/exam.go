package models

import (
	"github.com/lambda-platform/lambda/DB"
	"gorm.io/gorm"
	"time"
)

type Mod3Test struct {
	ID             int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestCatID      *int           `gorm:"column:test_cat_id" json:"test_cat_id"`
	TestTitle      *string        `gorm:"column:test_title" json:"test_title"`
	NiitHugatsaa   *int           `gorm:"column:niit_hugatsaa" json:"niit_hugatsaa"`
	ExamScheduleID int            `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	CreatedAt      *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt      *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt      gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ExamScores     *int           `gorm:"column:exam_scores" json:"exam_scores"`
	IsStarted      bool           `gorm:"column:is_started" json:"is_started"`
	//ShuugchiinTorolID *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	UID string `gorm:"column:uid;primaryKey;autoIncrement" json:"uid"`
}

func (m *Mod3Test) TableName() string {
	return "mod3_test"
}

type Mod3AsuutSub struct {
	ID            int             `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestCatID     *int            `gorm:"column:test_cat_id" json:"test_cat_id"`
	TestID        *int            `gorm:"column:test_id" json:"test_id"`
	AsuultTorol   *string         `gorm:"column:asuult_torol" json:"asuult_torol"`
	Onoo          *int            `gorm:"column:onoo" json:"onoo"`
	AnswerFile    *string         `gorm:"column:answer_file" json:"answer_file"`
	CorrectAnswer *string         `gorm:"column:correct_answer" json:"correct_answer"`
	Tailbar       *string         `gorm:"column:tailbar" json:"tailbar"`
	Asuult        DB.SecureString `gorm:"column:asuult" json:"asuult"`
	Zurag         *string         `gorm:"column:zurag" json:"zurag"`
	FileButeeh    *string         `gorm:"column:file_buteeh" json:"file_buteeh"`
	AnswerShort   DB.SecureString `gorm:"column:answer_short" json:"answer_short"`
}

func (m *Mod3AsuutSub) TableName() string {
	return "mod3_asuut_sub"
}

type Mod3TestResult struct {
	ID            int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID        *int       `gorm:"column:test_id" json:"test_id"`
	Onoo          *float32   `gorm:"column:onoo" json:"onoo"`
	UserID        *int       `gorm:"column:user_id" json:"user_id"`
	CreatedAt     *time.Time `gorm:"column:created_at" json:"created_at"`
	UpdatedAt     *time.Time `gorm:"column:updated_at" json:"updated_at"`
	Answers       *string    `gorm:"column:answers" json:"answers"`
	AdTitle       *string    `gorm:"column:ad_title" json:"ad_title"`
	AdDate        *time.Time `gorm:"column:ad_date" json:"ad_date"`
	AdDescription *string    `gorm:"column:ad_description" json:"ad_description"`
	MainType      *string    `gorm:"column:main_type" json:"main_type"`
	SubMainType   *string    `gorm:"column:sub_main_type" json:"sub_main_type"`
	ExamType      *string    `gorm:"column:exam_type" json:"exam_type"`
	ExamDate      *time.Time `gorm:"column:exam_date" json:"exam_date"`
	ExamTime      *string    `gorm:"column:exam_time" json:"exam_time"`
	ExamResult    *float32   `gorm:"column:exam_result" json:"exam_result"`
	ExamAddress   *string    `gorm:"column:exam_address" json:"exam_address"`
	ExamTotalTime *string    `gorm:"column:exam_total_time" json:"exam_total_time"`
	CourtOffice   *string    `gorm:"column:court_office" json:"court_office"`
}

func (m *Mod3TestResult) TableName() string {
	return "mod3_test_result"
}

type SubModCandidate struct {
	ID                int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID            *int    `gorm:"column:test_id" json:"test_id"`
	CandidateName     *string `gorm:"column:candidate_name" json:"candidate_name"`
	CandidateRegister *string `gorm:"column:candidate_register" json:"candidate_register"`
	CandidatePhone    *string `gorm:"column:candidate_phone" json:"candidate_phone"`
	ScheduleTypeID    *int    `gorm:"column:schedule_type_id" json:"schedule_type_id"`
	UserID            *int    `gorm:"column:user_id" json:"user_id"`
}

func (s *SubModCandidate) TableName() string {
	return "sub_mod_candidate"
}

type SubModSpeakTest struct {
	ID                 int  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID             *int `gorm:"column:test_id" json:"test_id"`
	ExamQuestionTypeID *int `gorm:"column:exam_question_type_id" json:"exam_question_type_id"`
	Results            *int `gorm:"column:results" json:"results"`
	ShalgaltTorolID    *int `gorm:"column:shalgalt_torol_id" json:"shalgalt_torol_id"`
}

func (s *SubModSpeakTest) TableName() string {
	return "sub_mod_speak_test"
}

type SubModRole struct {
	ID     int  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID *int `gorm:"column:test_id" json:"test_id"`
	RoleID *int `gorm:"column:role_id" json:"role_id"`
	UserID *int `gorm:"column:user_id" json:"user_id"`
}

func (s *SubModRole) TableName() string {
	return "sub_mod_role"
}

type ExaminationSchedule struct {
	ID               int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID           *int           `gorm:"column:user_id" json:"user_id"`
	AdvertisementID  int            `gorm:"column:advertisement_id" json:"advertisement_id"`
	ExamMainTypeID   int            `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID    int            `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	ExamnationTypeID int            `gorm:"column:examnation_type_id" json:"examnation_type_id"`
	ExamDate         *time.Time     `gorm:"column:exam_date" json:"exam_date"`
	StartTime        *string        `gorm:"column:start_time" json:"start_time"`
	ExamScores       *int           `gorm:"column:exam_scores" json:"exam_scores"`
	ExamAddressID    int            `gorm:"column:exam_address_id" json:"exam_address_id"`
	CreatedAt        *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt        *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt        gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ExamStartDate    time.Time      `gorm:"column:exam_start_date" json:"exam_start_date"`
	CTypeID          *int           `gorm:"column:c_type_id" json:"c_type_id"`
	//ShuugchiinTorolID *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (e *ExaminationSchedule) TableName() string {
	return "examination_schedule"
}

type SubExamSchedule struct {
	ID                 int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	ExamScheduleID     *int    `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	AdvertisementTitle *string `gorm:"column:advertisement_title" json:"advertisement_title"`
	CandidateName      *string `gorm:"column:candidate_name" json:"candidate_name"`
	CandidateRegister  *string `gorm:"column:candidate_register" json:"candidate_register"`
	CandidatePhone     *string `gorm:"column:candidate_phone" json:"candidate_phone"`
	UserID             *int    `gorm:"column:user_id" json:"user_id"`
	ShuugchiinTorolID  int     `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	VacancyID          int     `gorm:"column:vacancy_id" json:"vacancy_id"`
}

func (s *SubExamSchedule) TableName() string {
	return "sub_exam_schedule"
}

type ExamSchedule struct {
	ExamScheduleID      int              `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	CandidateEndDate    *time.Time       `gorm:"column:candidate_end_date" json:"candidate_end_date"`
	CandidateStartDate  *time.Time       `gorm:"column:candidate_start_date" json:"candidate_start_date"`
	UserID              int              `gorm:"column:user_id" json:"user_id"`
	AdvertisementID     int              `gorm:"column:advertisement_id" json:"advertisement_id"`
	VacancyID           int              `gorm:"column:vacancy_id" json:"vacancy_id"`
	ExamMainTypeID      int              `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID       int              `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	ExamnationTypeID    int              `gorm:"column:examnation_type_id" json:"examnation_type_id"`
	ExamAddressID       int              `gorm:"column:exam_address_id" json:"exam_address_id"`
	CreatedAt           *time.Time       `gorm:"column:created_at" json:"created_at"`
	UpdatedAt           *time.Time       `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt           gorm.DeletedAt   `gorm:"column:deleted_at" json:"deleted_at"`
	ExamStartDate       time.Time        `gorm:"column:exam_start_date" json:"exam_start_date"`
	UndsenShalgalt      string           `gorm:"column:undsen_shalgalt" json:"undsen_shalgalt"`
	ShalgaltTorol       string           `gorm:"column:shalgalt_torol" json:"shalgalt_torol"`
	CourtTypeID         int              `gorm:"column:court_type_id" json:"court_type_id"`
	ShuugchiinTorolID   int              `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	Category            string           `gorm:"column:category" json:"category"`
	ShalgaltAvahGazar   string           `gorm:"column:shalgalt_avah_gazar" json:"shalgalt_avah_gazar"`
	CategoryGiveTitle   string           `gorm:"column:category_give_title" json:"-"`
	ExamStatus          string           `gorm:"-" json:"exam_status"`
	ExamID              *string          `gorm:"-" json:"exam_id"`
	ExamMinutes         *int             `gorm:"-" json:"exam_minutes"`
	ExamScore           *float32         `gorm:"-" json:"exam_score"`
	ExamTotalQuestions  *float32         `gorm:"-" json:"exam_total_questions"`
	ExamUserScore       *float32         `gorm:"-" json:"exam_user_score"`
	ExamUserScoreStatus *string          `gorm:"-" json:"exam_user_score_status"`
	GomdolGargasan      string           `gorm:"-" json:"gomdol_gargasan"`
	ExamNotification    ExamNotification `gorm:"-" json:"exam_notification"`
	IsStarted           bool             `gorm:"-" json:"is_started"`
}

func (v *ExamSchedule) TableName() string {
	return "view_exam_schedule_by_user_full"
}

type ExamSchedules struct {
	ExamScheduleID      int              `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	UserID              int              `gorm:"column:user_id" json:"user_id"`
	AdvertisementID     int              `gorm:"column:advertisement_id" json:"advertisement_id"`
	VacancyID           int              `gorm:"column:vacancy_id" json:"vacancy_id"`
	ExamMainTypeID      int              `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID       int              `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	ExamnationTypeID    int              `gorm:"column:examnation_type_id" json:"examnation_type_id"`
	ExamAddressID       int              `gorm:"column:exam_address_id" json:"exam_address_id"`
	CreatedAt           *time.Time       `gorm:"column:created_at" json:"created_at"`
	UpdatedAt           *time.Time       `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt           gorm.DeletedAt   `gorm:"column:deleted_at" json:"deleted_at"`
	ExamStartDate       time.Time        `gorm:"column:exam_start_date" json:"exam_start_date"`
	UndsenShalgalt      string           `gorm:"column:undsen_shalgalt" json:"undsen_shalgalt"`
	ShalgaltTorol       string           `gorm:"column:shalgalt_torol" json:"shalgalt_torol"`
	CourtTypeID         int              `gorm:"column:court_type_id" json:"court_type_id"`
	Category            string           `gorm:"column:category" json:"category"`
	ShalgaltAvahGazar   string           `gorm:"column:shalgalt_avah_gazar" json:"shalgalt_avah_gazar"`
	CategoryGiveTitle   string           `gorm:"column:category_give_title" json:"-"`
	ExamStatus          string           `gorm:"-" json:"exam_status"`
	ExamID              *string          `gorm:"-" json:"exam_id"`
	ExamMinutes         *int             `gorm:"-" json:"exam_minutes"`
	ExamScore           float32          `gorm:"-" json:"exam_score"`
	ExamTotalQuestions  *float32         `gorm:"-" json:"exam_total_questions"`
	ExamUserScore       *float32         `gorm:"-" json:"exam_user_score"`
	ExamUserScoreStatus *string          `gorm:"-" json:"exam_user_score_status"`
	ExamNotification    ExamNotification `gorm:"-" json:"exam_notification"`
	IsStarted           bool             `gorm:"-" json:"is_started"`
	//ShuugchiinTorolID   *int             `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (v *ExamSchedules) TableName() string {
	return "view_exam_schedule"
}

type ViewExamScheduleByUserAdvertisement struct {
	AdvertisementID      int            `gorm:"column:advertisement_id" json:"advertisement_id"`
	VacancyID            int            `gorm:"column:vacancy_id" json:"vacancy_id"`
	DeletedAt            gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UserID               int            `gorm:"column:user_id" json:"user_id"`
	CourtTypeID          int            `gorm:"column:court_type_id" json:"court_type_id"`
	TypeJudicialPosition *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	CourtOffice          *string        `gorm:"column:court_office" json:"court_office"`
	CourtType            *string        `gorm:"column:court_type" json:"court_type"`
	ShuugchiinTorolID    int            `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	Schedules            []ExamSchedule `gorm:"-" json:"schedules"`
}

func (v *ViewExamScheduleByUserAdvertisement) TableName() string {
	return "view_exam_schedule_by_user_advertisement"
}

type ViewSubAdvertisement struct {
	ID                     *int           `gorm:"column:id" json:"id"`
	AdvertisementID        *int           `gorm:"column:advertisement_id" json:"advertisement_id"`
	TypeJudicialPositionID *int           `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtOfficeID          *int           `gorm:"column:court_office_id" json:"court_office_id"`
	Vacancy                *int           `gorm:"column:vacancy" json:"vacancy"`
	CourtTypeID            *int           `gorm:"column:court_type_id" json:"court_type_id"`
	TypeJudicialPosition   *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	CourtOffice            *string        `gorm:"column:court_office" json:"court_office"`
	CourtType              *string        `gorm:"column:court_type" json:"court_type"`
	ShuugchiinTorolID      *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	ShuugchiinTorol        *string        `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	Schedules              []ExamSchedule `gorm:"-" json:"schedules"`
}

func (v *ViewSubAdvertisement) TableName() string {
	return "view_sub_advertisement"
}

type Mod3TestCategory struct {
	ID                int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Category          *string `gorm:"column:category" json:"category"`
	Step              *int    `gorm:"column:step" json:"step"`
	CategoryGiveTitle *string `gorm:"column:category_give_title" json:"category_give_title"`
}

func (m *Mod3TestCategory) TableName() string {
	return "mod3_test_category"
}

type ViewExamSummary struct {
	ID             int     `gorm:"column:id" json:"id"`
	UID            string  `gorm:"column:uid" json:"uid"`
	ExamScheduleID int     `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	NiitHugatsaa   int     `gorm:"column:niit_hugatsaa" json:"niit_hugatsaa"`
	IsStarted      bool    `gorm:"column:is_started" json:"is_started"`
	TotalScore     float32 `gorm:"column:total_score" json:"total_score"`
	TotalQuestions float32 `gorm:"column:total_questions" json:"total_questions"`
}

func (v *ViewExamSummary) TableName() string {
	return "view_exam_summary"
}

type ViewInterviewQuestions struct {
	ID                 int                  `gorm:"column:id" json:"id"`
	TestID             int                  `gorm:"column:test_id" json:"test_id"`
	ExamQuestionTypeID int                  `gorm:"column:exam_question_type_id" json:"exam_question_type_id"`
	Results            int                  `gorm:"column:results" json:"results"`
	ShalgaltTorolID    int                  `gorm:"column:shalgalt_torol_id" json:"shalgalt_torol_id"`
	ShalgaltTorol      string               `gorm:"column:shalgalt_torol" json:"shalgalt_torol"`
	UndsenTorolID      int                  `gorm:"column:undsen_torol_id" json:"undsen_torol_id"`
	CourtTypeID        int                  `gorm:"column:court_type_id" json:"court_type_id"`
	ShalgaltTorolDev   string               `gorm:"column:shalgalt_torol_dev" json:"shalgalt_torol_dev"`
	Questions          []SubModSpeakTestSub `gorm:"-" json:"questions"`
}

func (v *ViewInterviewQuestions) TableName() string {
	return "view_interview_questions"
}

type SubModSpeakTestSub struct {
	ID                int             `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	SubModSpeakTestID int             `gorm:"column:sub_mod_speak_test_id" json:"sub_mod_speak_test_id"`
	Question          DB.SecureString `gorm:"column:question" json:"question"`
	Answer            DB.SecureString `gorm:"column:answer" json:"answer"`
}

func (s *SubModSpeakTestSub) TableName() string {
	return "sub_mod_speak_test_sub"
}

type Mod3InterviewAnsweredQuestions struct {
	ID         int    `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID     string `gorm:"column:test_id" json:"test_id"`
	UserID     int    `gorm:"column:user_id" json:"user_id"`
	CategoryID int    `gorm:"column:category_id" json:"category_id"`
	QuestionID int    `gorm:"column:question_id" json:"question_id"`
}

func (m *Mod3InterviewAnsweredQuestions) TableName() string {
	return "mod_3_interview_answered_questions"
}

type Mod3UserScoreCombine struct {
	ID                int  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID            int  `gorm:"column:test_id" json:"test_id"`
	ExamScheduleID    int  `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	VacancyID         int  `gorm:"column:vacancy_id" json:"vacancy_id"`
	IsConfirmed       bool `gorm:"column:is_confirmed" json:"is_confirmed"`
	ShuugchiinTorolID int  `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (m *Mod3UserScoreCombine) TableName() string {
	return "mod3_user_score_combine"
}

type Mod3UserScore struct {
	ID                int             `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID            int             `gorm:"column:test_id" json:"test_id"`
	UserID            int             `gorm:"column:user_id" json:"user_id"`
	TotalScore        float32         `gorm:"column:total_score" json:"total_score"`
	AverageScore      float32         `gorm:"column:average_score" json:"average_score"`
	AdminGiveScore    float32         `gorm:"column:admin_give_score" json:"admin_give_score"`
	ExamScheduleID    int             `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	VacancyID         int             `gorm:"column:vacancy_id" json:"vacancy_id"`
	ExamTypeID        int             `gorm:"column:exam_type_id" json:"exam_type_id"`
	CombineID         int             `gorm:"column:combine_id" json:"combine_id"`
	CorrectAnswers    int             `gorm:"column:correct_answers" json:"correct_answers"`
	Percent           float32         `gorm:"column:percent" json:"percent"`
	Answers           DB.SecureString `gorm:"column:answers" json:"answers"`
	IsVerified        bool            `gorm:"column:is_verified" json:"is_verified"`
	CreatedAt         *time.Time      `gorm:"column:created_at" json:"created_at"`
	UpdatedAt         *time.Time      `gorm:"column:updated_at" json:"updated_at"`
	ShuugchiinTorolID int             `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`

	SystemCalculatedAverageScore float32 `gorm:"column:system_calculated_average_score" json:"system_calculated_average_score"`
}

func (m *Mod3UserScore) TableName() string {
	return "mod3_user_score"
}

type Mod3UserScoreByMember struct {
	ID                int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID            int     `gorm:"column:test_id" json:"test_id"`
	UserID            int     `gorm:"column:user_id" json:"user_id"`
	ExamScheduleID    int     `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	UserScoreID       int     `gorm:"column:user_score_id" json:"user_score_id"`
	MemberID          int     `gorm:"column:member_id" json:"member_id"`
	MemberTotalScore  float32 `gorm:"column:member_total_score" json:"member_total_score"`
	VacancyID         int     `gorm:"column:vacancy_id" json:"vacancy_id"`
	CombineID         int     `gorm:"column:combine_id" json:"combine_id"`
	ShuugchiinTorolID int     `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (m *Mod3UserScoreByMember) TableName() string {
	return "mod3_user_score_by_member"
}

type Mod3UserScoreByMemberCombine struct {
	ID                int  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID            int  `gorm:"column:test_id" json:"test_id"`
	ExamScheduleID    int  `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	MemberID          int  `gorm:"column:member_id" json:"member_id"`
	VacancyID         int  `gorm:"column:vacancy_id" json:"vacancy_id"`
	IsConfirmed       bool `gorm:"column:is_confirmed" json:"is_confirmed"`
	ShuugchiinTorolID int  `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
}

func (m *Mod3UserScoreByMemberCombine) TableName() string {
	return "mod3_user_score_by_member_combine"
}

type UserScoreByMember struct {
	ID          int `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserScoreID int `gorm:"column:user_score_id" json:"user_score_id"`
	MemberID    int `gorm:"column:member_id" json:"member_id"`
}

type Mod3UserScoreByMemberQuestion struct {
	ID                     int             `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID                 int             `gorm:"column:test_id" json:"test_id"`
	UserID                 int             `gorm:"column:user_id" json:"user_id"`
	ExamScheduleID         int             `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	UserScoreID            int             `gorm:"column:user_score_id" json:"user_score_id"`
	MemberID               int             `gorm:"column:member_id" json:"member_id"`
	MemberScore            *float32        `gorm:"column:member_score" json:"member_score"`
	Question               DB.SecureString `gorm:"column:question" json:"question"`
	CheckAnswer            DB.SecureString `gorm:"column:check_answer" json:"check_answer"`
	UserAnswer             *string         `gorm:"column:user_answer" json:"user_answer"`
	QuestionMaxScore       float32         `gorm:"column:question_max_score" json:"question_max_score"`
	MemberScoreDescription *string         `gorm:"column:member_score_description" json:"member_score_description"`
	UserScoreMemberID      int             `gorm:"column:user_score_member_id" json:"user_score_member_id"`
	QuestionTitle          string          `gorm:"column:question_title" json:"question_title"`
	ScoreType              string          `gorm:"column:score_type" json:"score_type"`
	CategoryID             int             `gorm:"column:category_id" json:"category_id"`
	QuestionID             int             `gorm:"column:question_id" json:"question__id"`
	VacancyID              int             `gorm:"column:vacancy_id" json:"vacancy_id"`
	AnsweredOrder          int             `gorm:"column:answered_order" json:"answered_order"`
}

func (m *Mod3UserScoreByMemberQuestion) TableName() string {
	return "mod3_user_score_by_member_question"
}

type SubModRankedMember struct {
	ID            int  `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	TestID        *int `gorm:"column:test_id" json:"test_id"`
	UnelgeeRoleID *int `gorm:"column:unelgee_role_id" json:"unelgee_role_id"`
	UnelgeeUserID *int `gorm:"column:unelgee_user_id" json:"unelgee_user_id"`
}

func (s *SubModRankedMember) TableName() string {
	return "sub_mod_ranked_member"
}

type SaveExamRequest struct {
	Answers        []SaveExamRequestAnswers `gorm:"column:answers" json:"answers"`
	AnswersText    DB.SecureString          `gorm:"column:answers_text" json:"answers_text"`
	Score          float32                  `gorm:"column:score" json:"score"`
	CorrectAnswers int                      `gorm:"column:correct_answers" json:"correct_answers"`
	Percent        float32                  `gorm:"column:percent" json:"percent"`
	TestID         int                      `gorm:"column:test_id" json:"test_id"`
}

type SaveExamRequestAnswers struct {
	ID     int    `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Answer string `gorm:"column:answer" json:"answer"`
}
type UpdateInterviewScoreRequest struct {
	SelectedCategoryID int `json:"SelectedCategoryID"`
	SelectedQuestionID int `json:"SelectedQuestionID"`
}

type Mod3InterviewCurrent struct {
	CurrentUserID int `gorm:"column:current_user_id" json:"current_user_id"`
	UserScoreID   int `gorm:"column:user_score_id" json:"user_score_id"`
	ID            int `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
}

func (m *Mod3InterviewCurrent) TableName() string {
	return "mod3_interview_current"
}

type ViewCandidateExamScore struct {
	ID                    *int     `gorm:"column:id" json:"id"`
	AdvertisementID       *int     `gorm:"column:advertisement_id" json:"advertisement_id"`
	VacancyID             *int     `gorm:"column:vacancy_id" json:"vacancy_id"`
	LegalKnowledgeScore   *float32 `gorm:"column:legal_knowledge_score" json:"legal_knowledge_score"`
	QualificationScore    *float32 `gorm:"column:qualification_score" json:"qualification_score"`
	EthicsBehaviorScore   *float32 `gorm:"column:ethics_behavior_score" json:"ethics_behavior_score"`
	TotalScore            *float32 `gorm:"column:total_score" json:"total_score"`
	UserID                *int     `gorm:"column:user_id" json:"user_id"`
	CandidateExamResultID *int     `gorm:"column:candidate_exam_result_id" json:"candidate_exam_result_id"`
	FirstName             *string  `gorm:"column:first_name" json:"first_name"`
	LastName              *string  `gorm:"column:last_name" json:"last_name"`
	Status                *string  `gorm:"column:status" json:"status"`
}

func (v *ViewCandidateExamScore) TableName() string {
	return "view_candidate_exam_score"
}

type ViewCandidateExamScoreNew struct {
	ID                    *int     `gorm:"column:id" json:"id"`
	AdvertisementID       *int     `gorm:"column:advertisement_id" json:"advertisement_id"`
	LegalKnowledgeScore   *float32 `gorm:"column:legal_knowledge_score" json:"legal_knowledge_score"`
	QualificationScore    *float32 `gorm:"column:qualification_score" json:"qualification_score"`
	EthicsBehaviorScore   *float32 `gorm:"column:ethics_behavior_score" json:"ethics_behavior_score"`
	TotalScore            *float32 `gorm:"column:total_score" json:"total_score"`
	UserID                *int     `gorm:"column:user_id" json:"user_id"`
	Status                *string  `gorm:"column:status" json:"status"`
	CandidateExamResultID *int     `gorm:"column:candidate_exam_result_id" json:"candidate_exam_result_id"`
	FirstName             *string  `gorm:"column:first_name" json:"first_name"`
	LastName              *string  `gorm:"column:last_name" json:"last_name"`
}

func (v *ViewCandidateExamScoreNew) TableName() string {
	return "public.view_candidate_exam_score_new"
}

type LutCourtOffice struct {
	ID          int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	CourtOffice *string `gorm:"column:court_office" json:"court_office"`
}

func (l *LutCourtOffice) TableName() string {
	return "lut_court_office"
}

type ExamUserAnswerTemp struct {
	ID        string          `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	ExamUID   string          `gorm:"column:exam_uid" json:"exam_uid"`
	UserID    int             `gorm:"column:user_id" json:"user_id"`
	Answers   DB.SecureString `gorm:"column:answers" json:"answers"`
	CreatedAt *time.Time      `gorm:"column:created_at" json:"created_at"`
	UpdatedAt *time.Time      `gorm:"column:updated_at" json:"updated_at"`
}

func (e *ExamUserAnswerTemp) TableName() string {
	return "exam_user_answer_temp"
}

type AverageScoreHistoryRequest struct {
	UserScoreID int     `gorm:"column:user_score_id" json:"user_score_id"`
	NewValue    float32 `gorm:"column:new_value" json:"new_value"`
}
type Mod3UserScoreAverageScoreHistory struct {
	ID          int       `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserScoreID int       `gorm:"column:user_score_id" json:"user_score_id"`
	OldValue    float32   `gorm:"column:old_value" json:"old_value"`
	NewValue    float32   `gorm:"column:new_value" json:"new_value"`
	IPAddress   string    `gorm:"column:ip_address" json:"ip_address"`
	AdminUserID int       `gorm:"column:admin_user_id" json:"admin_user_id"`
	AdminLogin  string    `gorm:"column:admin_login" json:"admin_login"`
	CreatedAt   time.Time `gorm:"column:created_at" json:"created_at"`
}

func (m *Mod3UserScoreAverageScoreHistory) TableName() string {
	return "mod3_user_score_average_score_history"
}

type ViewExamSchedulesForUser struct {
	ExamScheduleID         *int           `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	UserID                 *int           `gorm:"column:user_id" json:"user_id"`
	VacancyID              *int           `gorm:"column:vacancy_id" json:"vacancy_id"`
	ID                     *int           `gorm:"column:id" json:"id"`
	AdvertisementID        int            `gorm:"column:advertisement_id" json:"advertisement_id"`
	TypeJudicialPositionID *int           `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	CourtOfficeID          *int           `gorm:"column:court_office_id" json:"court_office_id"`
	Vacancy                *int           `gorm:"column:vacancy" json:"vacancy"`
	CourtTypeID            *int           `gorm:"column:court_type_id" json:"court_type_id"`
	TypeJudicialPosition   *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	CourtOffice            *string        `gorm:"column:court_office" json:"court_office"`
	CourtType              *string        `gorm:"column:court_type" json:"court_type"`
	ShuugchiinTorolID      *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	ShuugchiinTorol        *string        `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	Schedules              []ExamSchedule `gorm:"-" json:"schedules"`
}

func (v *ViewExamSchedulesForUser) TableName() string {
	return "view_exam_schedules_for_user"
}

type ViewCandidateExamSchedules struct {
	UserID          int            `gorm:"column:user_id" json:"user_id"`
	ExamScheduleID  int            `gorm:"column:exam_schedule_id" json:"exam_schedule_id"`
	AdvertisementID int            `gorm:"column:advertisement_id" json:"advertisement_id"`
	CourtTypeID     int            `gorm:"column:court_type_id" json:"court_type_id"`
	CourtType       string         `gorm:"column:court_type" json:"court_type"`
	Schedules       []ExamSchedule `gorm:"-" json:"schedules"`
}

func (v *ViewCandidateExamSchedules) TableName() string {
	return "public.view_candidate_exam_schedules"
}

type ExaminationScheduleReal struct {
	ID               int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID           *int           `gorm:"column:user_id" json:"user_id"`
	AdvertisementID  int            `gorm:"column:advertisement_id" json:"advertisement_id"`
	ExamMainTypeID   int            `gorm:"column:exam_main_type_id" json:"exam_main_type_id"`
	ExamSubTypeID    int            `gorm:"column:exam_sub_type_id" json:"exam_sub_type_id"`
	ExamnationTypeID int            `gorm:"column:examnation_type_id" json:"examnation_type_id"`
	ExamDate         *time.Time     `gorm:"column:exam_date" json:"exam_date"`
	StartTime        *string        `gorm:"column:start_time" json:"start_time"`
	ExamScores       *int           `gorm:"column:exam_scores" json:"exam_scores"`
	ExamAddressID    int            `gorm:"column:exam_address_id" json:"exam_address_id"`
	CreatedAt        *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt        *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt        gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	ExamStartDate    time.Time      `gorm:"column:exam_start_date" json:"exam_start_date"`
	CTypeID          *int           `gorm:"column:c_type_id" json:"c_type_id"`
	IsArchive        *int           `gorm:"column:is_archive" json:"is_archive"`
}

func (e *ExaminationScheduleReal) TableName() string {
	return "public.examination_schedule"
}

type ExamWarning struct {
	ID          int    `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	ExamWarning string `gorm:"column:exam_warning" json:"exam_warning"`
}

func (e *ExamWarning) TableName() string {
	return "public.exam_warning"
}
