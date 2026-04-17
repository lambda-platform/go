package models

import (
	"time"

	"gorm.io/gorm"
)

type Users struct {
	ID                  int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Status              *string        `gorm:"column:status" json:"status"`
	Role                *int           `gorm:"column:role" json:"role"`
	Login               string         `gorm:"column:login" json:"login"`
	Email               string         `gorm:"column:email" json:"email"`
	RegisterNumber      string         `gorm:"column:register_number" json:"register_number"`
	Avatar              *string        `gorm:"column:avatar" json:"avatar"`
	Bio                 *string        `gorm:"column:bio" json:"bio"`
	FirstName           *string        `gorm:"column:first_name" json:"first_name"`
	LastName            *string        `gorm:"column:last_name" json:"last_name"`
	Birthday            *time.Time     `gorm:"column:birthday" json:"birthday"`
	Phone               *string        `gorm:"column:phone" json:"phone"`
	Gender              *string        `gorm:"column:gender" json:"gender"`
	Password            string         `gorm:"column:password" json:"password"`
	CreatedAt           *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt           *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt           gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	OrgID               *int           `gorm:"column:org_id" json:"org_id"`
	EmpID               *int           `gorm:"column:emp_id" json:"emp_id"`
	IsFirst             bool           `gorm:"column:is_first" json:"is_first"`
	CourtMail           *string        `gorm:"column:court_mail" json:"court_mail"`
	IsResourse          bool           `gorm:"column:is_resourse" json:"is_resourse"`
	GazarHeltesID       *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	Address             *string        `gorm:"column:address" json:"address"`
	AlbanTushaalTailbar *string        `gorm:"column:alban_tushaal_tailbar" json:"alban_tushaal_tailbar"`
}

func (u *Users) TableName() string {
	return "users"
}

type PasswordRequest struct {
	NewPassword        string `gorm:"column:new_password" json:"new_password"`
	NewPasswordConfirm string `gorm:"column:new_password_confirm" json:"new_password_confirm"`
}

type UsersWithoutPassword struct {
	ID             int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Status         *string    `gorm:"column:status" json:"status"`
	Role           *int       `gorm:"column:role" json:"role"`
	Login          string     `gorm:"column:login" json:"login"`
	Email          string     `gorm:"column:email" json:"email"`
	RegisterNumber string     `gorm:"column:register_number" json:"register_number"`
	Avatar         *string    `gorm:"column:avatar" json:"avatar"`
	Bio            *string    `gorm:"column:bio" json:"bio"`
	FirstName      *string    `gorm:"column:first_name" json:"first_name"`
	LastName       *string    `gorm:"column:last_name" json:"last_name"`
	Birthday       *time.Time `gorm:"column:birthday" json:"birthday"`
	Phone          *string    `gorm:"column:phone" json:"phone"`
	Gender         *string    `gorm:"column:gender" json:"gender"`

	CreatedAt     *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt     *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt     gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	OrgID         *int           `gorm:"column:org_id" json:"org_id"`
	EmpID         *int           `gorm:"column:emp_id" json:"emp_id"`
	IsFirst       bool           `gorm:"column:is_first" json:"is_first"`
	CourtMail     *string        `gorm:"column:court_mail" json:"court_mail"`
	IsResourse    bool           `gorm:"column:is_resourse" json:"is_resourse"`
	GazarHeltesID *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
}

func (u *UsersWithoutPassword) TableName() string {
	return "users"
}

type UserData struct {
	Id    int64
	Login string
	Role  int64
}
type AnketTable struct {
	ID                    int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID                *int           `gorm:"column:user_id" json:"user_id"`
	IrgenshilID           *int           `gorm:"column:irgenshil_id" json:"irgenshil_id"`
	UrgiinOvog            *string        `gorm:"column:urgiin_ovog" json:"urgiin_ovog"`
	Ovog                  *string        `gorm:"column:ovog" json:"ovog"`
	Ner                   string         `gorm:"column:ner" json:"ner"`
	Register              *string        `gorm:"column:register" json:"register"`
	Huis                  *string        `gorm:"column:huis" json:"huis"`
	TorsonOdor            *string        `gorm:"column:torson_odor" json:"torson_odor"`
	Nas                   *string        `gorm:"column:nas" json:"nas"`
	UndesUgsaa            *string        `gorm:"column:undes_ugsaa" json:"undes_ugsaa"`
	Zurag                 *string        `gorm:"column:zurag" json:"zurag"`
	AimagID               *int           `gorm:"column:aimag_id" json:"aimag_id"`
	SumID                 *int           `gorm:"column:sum_id" json:"sum_id"`
	BagID                 *int           `gorm:"column:bag_id" json:"bag_id"`
	Gudam                 *string        `gorm:"column:gudam" json:"gudam"`
	Bair                  *string        `gorm:"column:bair" json:"bair"`
	Toot                  *string        `gorm:"column:toot" json:"toot"`
	UtasOne               *string        `gorm:"column:utas_one" json:"utas_one"`
	UtasTwo               *string        `gorm:"column:utas_two" json:"utas_two"`
	Email                 *string        `gorm:"column:email" json:"email"`
	CreatedAt             *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt             *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt             gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UnemlehFile           *string        `gorm:"column:unemleh_file" json:"unemleh_file"`
	NerdevshigchID        *int           `gorm:"column:nerdevshigch_id" json:"nerdevshigch_id"`
	ShuugchTorolID        *int           `gorm:"column:shuugch_torol_id" json:"shuugch_torol_id"`
	ShuugchTolovID        int            `gorm:"column:shuugch_tolov_id" json:"shuugch_tolov_id"`
	TorsonGazar           *string        `gorm:"column:torson_gazar" json:"torson_gazar"`
	TseregEseh            *int           `gorm:"column:tsereg_eseh" json:"tsereg_eseh"`
	TseregUnemleh         *string        `gorm:"column:tsereg_unemleh" json:"tsereg_unemleh"`
	TurHaygEseh           *int           `gorm:"column:tur_hayg_eseh" json:"tur_hayg_eseh"`
	TAimagid              *int           `gorm:"column:t_aimagid" json:"t_aimagid"`
	TSumid                *int           `gorm:"column:t_sumid" json:"t_sumid"`
	TBagid                *int           `gorm:"column:t_bagid" json:"t_bagid"`
	TGudams               *string        `gorm:"column:t_gudams" json:"t_gudams"`
	TBair                 *string        `gorm:"column:t_bair" json:"t_bair"`
	TToot                 *string        `gorm:"column:t_toot" json:"t_toot"`
	ZailshguUydHobooBarih *int           `gorm:"column:zailshgu_uyd_hoboo_barih" json:"zailshgu_uyd_hoboo_barih"`
	BAimagid              *int           `gorm:"column:b_aimagid" json:"b_aimagid"`
	BSumid                *int           `gorm:"column:b_sumid" json:"b_sumid"`
	BBagid                *int           `gorm:"column:b_bagid" json:"b_bagid"`
	BGudam                *int           `gorm:"column:b_gudam" json:"b_gudam"`
	BBair                 *int           `gorm:"column:b_bair" json:"b_bair"`
	BToot                 *int           `gorm:"column:b_toot" json:"b_toot"`
	ApartmentTypeID       *int           `gorm:"column:apartment_type_id" json:"apartment_type_id"`
	OwnerTypeID           *int           `gorm:"column:owner_type_id" json:"owner_type_id"`
	IsMarried             *int           `gorm:"column:is_married" json:"is_married"`
	WorkedYearC           *float32       `gorm:"column:worked_year_c" json:"worked_year_c"`
	CWorkedYear           *float32       `gorm:"column:c_worked_year" json:"c_worked_year"`
	CourtWorkedYear       *float32       `gorm:"column:court_worked_year" json:"court_worked_year"`
	JudgeWorkedYear       *float32       `gorm:"column:judge_worked_year" json:"judge_worked_year"`
	HhshWorkedYear        *float32       `gorm:"column:hhsh_worked_year" json:"hhsh_worked_year"`
	IsOwnInfo             *int           `gorm:"column:is_own_info" json:"is_own_info"`
	IsIllness             *int           `gorm:"column:is_illness" json:"is_illness"`
	IllnessDesription     *string        `gorm:"column:illness_desription" json:"illness_desription"`
	IllnessOrg            *string        `gorm:"column:illness_org" json:"illness_org"`
	Birthday              *time.Time     `gorm:"column:birthday" json:"birthday"`
}

func (a *Anket) AnketTable() string {
	return "anket"
}

type UserUpdateRequestData struct {
	Email           string `gorm:"column:email" json:"email"`
	Phone           string `gorm:"column:phone" json:"phone"`
	Password        string `gorm:"column:password" json:"password"`
	ConfirmPassword string `gorm:"column:confirm_password" json:"confirm_password"`
}
type ViewErembeleltResource struct {
	ID                    *int       `gorm:"column:id" json:"id"`
	AdvertisementID       *int       `gorm:"column:advertisement_id" json:"advertisement_id"`
	VacancyID             *int       `gorm:"column:vacancy_id" json:"vacancy_id"`
	LegalKnowledgeScore   *float32   `gorm:"column:legal_knowledge_score" json:"legal_knowledge_score"`
	QualificationScore    *float32   `gorm:"column:qualification_score" json:"qualification_score"`
	EthicsBehaviorScore   *float32   `gorm:"column:ethics_behavior_score" json:"ethics_behavior_score"`
	TotalScore            *float32   `gorm:"column:total_score" json:"total_score"`
	UserID                int        `gorm:"column:user_id" json:"user_id"`
	CandidateExamResultID *int       `gorm:"column:candidate_exam_result_id" json:"candidate_exam_result_id"`
	Status                *string    `gorm:"column:status" json:"status"`
	PresidentDate         *time.Time `gorm:"column:president_date" json:"president_date"`
	PresidentOrder        *string    `gorm:"column:president_order" json:"president_order"`
	Title                 *string    `gorm:"column:title" json:"title"`
	EndDate               *string    `gorm:"column:end_date" json:"end_date"`
	CourtOfficeID         *int       `gorm:"column:court_office_id" json:"court_office_id"`
	Vacancy               *int       `gorm:"column:vacancy" json:"vacancy"`
	ShuugchiinTorolID     *int       `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	CourtOffice           *string    `gorm:"column:court_office" json:"court_office"`
	ShuuhShatID           *int       `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ShuuhTurulID          *int       `gorm:"column:shuuh_turul_id" json:"shuuh_turul_id"`
	ShuuhBair             *string    `gorm:"column:shuuh_bair" json:"shuuh_bair"`
	UruuToo               *int       `gorm:"column:uruu_too" json:"uruu_too"`
	HuraldaaTanhim        *string    `gorm:"column:huraldaa_tanhim" json:"huraldaa_tanhim"`
	TasalgaaniiToo        *string    `gorm:"column:tasalgaanii_too" json:"tasalgaanii_too"`
	HedenShuuh            *string    `gorm:"column:heden_shuuh" json:"heden_shuuh"`
	ProkurorCheck         *int       `gorm:"column:prokuror_check" json:"prokuror_check"`
	ZasvarBaidal          *string    `gorm:"column:zasvar_baidal" json:"zasvar_baidal"`
	GazarCheck            *int       `gorm:"column:gazar_check" json:"gazar_check"`
	AlbaCheck             *int       `gorm:"column:alba_check" json:"alba_check"`
	ArhivUruu             *string    `gorm:"column:arhiv_uruu" json:"arhiv_uruu"`
	TaviurCheck           *int       `gorm:"column:taviur_check" json:"taviur_check"`
	TamgaGazarID          *int       `gorm:"column:tamga_gazar_id" json:"tamga_gazar_id"`
	Utas                  *string    `gorm:"column:utas" json:"utas"`
	Bairshil              *string    `gorm:"column:bairshil" json:"bairshil"`
	AimagID               *int       `gorm:"column:aimag_id" json:"aimag_id"`
	SumID                 *int       `gorm:"column:sum_id" json:"sum_id"`
	BagID                 *int       `gorm:"column:bag_id" json:"bag_id"`
	EmailHayag            *string    `gorm:"column:email_hayag" json:"email_hayag"`
	TsahimHuudas          *string    `gorm:"column:tsahim_huudas" json:"tsahim_huudas"`
	LogoI                 *string    `gorm:"column:logo_i" json:"logo_i"`
	CoverI                *string    `gorm:"column:cover_i" json:"cover_i"`
	Role                  int        `gorm:"column:role" json:"role"`
	Login                 string     `gorm:"column:login" json:"login"`
	Email                 string     `gorm:"column:email" json:"email"`
	FirstName             *string    `gorm:"column:first_name" json:"first_name"`
	LastName              *string    `gorm:"column:last_name" json:"last_name"`
	Phone                 *string    `gorm:"column:phone" json:"phone"`
	Birthday              *time.Time `gorm:"column:birthday" json:"birthday"`
	RegisterNumber        string     `gorm:"column:register_number" json:"register_number"`
	CourtMail             *string    `gorm:"column:court_mail" json:"court_mail"`
	Address               *string    `gorm:"column:address" json:"address"`
	AlbanTushaalTailbar   *string    `gorm:"column:alban_tushaal_tailbar" json:"alban_tushaal_tailbar"`
}

func (v *ViewErembeleltResource) TableName() string {
	return "view_erembelelt_resource"
}
