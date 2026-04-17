package models

import (
	"time"

	"gorm.io/gorm"
)

type Anket struct {
	Model struct {
		ID                    int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
		UserID                int            `gorm:"column:user_id" json:"user_id"`
		IrgenshilID           int            `gorm:"column:irgenshil_id" json:"irgenshil_id"`
		UrgiinOvog            string         `gorm:"column:urgiin_ovog" json:"urgiin_ovog"`
		Ovog                  string         `gorm:"column:ovog" json:"ovog"`
		Ner                   string         `gorm:"column:ner" json:"ner"`
		RegisterNumber        string         `gorm:"column:register" json:"register"`
		Huis                  string         `gorm:"column:huis" json:"huis"`
		TorsonOdor            string         `gorm:"column:torson_odor" json:"torson_odor"`
		Nas                   string         `gorm:"column:nas" json:"nas"`
		UndesUgsaa            string         `gorm:"column:undes_ugsaa" json:"undes_ugsaa"`
		Zurag                 string         `gorm:"column:zurag" json:"zurag"`
		AimagID               int            `gorm:"column:aimag_id" json:"aimag_id"`
		SumID                 int            `gorm:"column:sum_id" json:"sum_id"`
		BagID                 int            `gorm:"column:bag_id" json:"bag_id"`
		Gudam                 string         `gorm:"column:gudam" json:"gudam"`
		Bair                  string         `gorm:"column:bair" json:"bair"`
		Toot                  string         `gorm:"column:toot" json:"toot"`
		UtasOne               string         `gorm:"column:utas_one" json:"utas_one"`
		UtasTwo               string         `gorm:"column:utas_two" json:"utas_two"`
		Email                 string         `gorm:"column:email" json:"email"`
		CreatedAt             time.Time      `gorm:"column:created_at" json:"created_at"`
		UpdatedAt             time.Time      `gorm:"column:updated_at" json:"updated_at"`
		DeletedAt             gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
		UnemlehFile           string         `gorm:"column:unemleh_file" json:"unemleh_file"`
		NerdevshigchID        int            `gorm:"column:nerdevshigch_id" json:"nerdevshigch_id"`
		ShuugchTorolID        int            `gorm:"column:shuugch_torol_id" json:"shuugch_torol_id"`
		ShuugchTolovID        int            `gorm:"column:shuugch_tolov_id" json:"shuugch_tolov_id"`
		TorsonGazar           string         `gorm:"column:torson_gazar" json:"torson_gazar"`
		TseregEseh            int            `gorm:"column:tsereg_eseh" json:"tsereg_eseh"`
		TseregUnemleh         string         `gorm:"column:tsereg_unemleh" json:"tsereg_unemleh"`
		TurHaygEseh           int            `gorm:"column:tur_hayg_eseh" json:"tur_hayg_eseh"`
		TAimagid              int            `gorm:"column:t_aimagid" json:"t_aimagid"`
		TSumid                int            `gorm:"column:t_sumid" json:"t_sumid"`
		TBagid                int            `gorm:"column:t_bagid" json:"t_bagid"`
		TGudams               string         `gorm:"column:t_gudams" json:"t_gudams"`
		TBair                 string         `gorm:"column:t_bair" json:"t_bair"`
		TToot                 string         `gorm:"column:t_toot" json:"t_toot"`
		ZailshguUydHobooBarih int            `gorm:"column:zailshgu_uyd_hoboo_barih" json:"zailshgu_uyd_hoboo_barih"`
		BAimagid              int            `gorm:"column:b_aimagid" json:"b_aimagid"`
		BSumid                int            `gorm:"column:b_sumid" json:"b_sumid"`
		BBagid                int            `gorm:"column:b_bagid" json:"b_bagid"`
		BGudam                int            `gorm:"column:b_gudam" json:"b_gudam"`
		BBair                 int            `gorm:"column:b_bair" json:"b_bair"`
		BToot                 int            `gorm:"column:b_toot" json:"b_toot"`
		Birthday              time.Time      `json:"birthday"`
	} `json:"model"`
	EditMode bool `json:"editMode"`
}

//func (a *Anket) TableName() string {
//	return "anket"
//}

type FormAnketField struct {
	Field string                 `json:"field"`
	Value interface{}            `json:"value"`
	Props map[string]interface{} `json:"props"`
}

type FormFieldAnket struct {
	Field string                 `json:"field"`
	Value time.Time              `json:"value"`
	Props map[string]interface{} `json:"props"`
}

type Ankets struct {
	ID                       int            `gorm:"column:id" json:"id"`
	UserID                   *int           `gorm:"column:user_id" json:"user_id"`
	IrgenshilID              *int           `gorm:"column:irgenshil_id" json:"irgenshil_id"`
	UrgiinOvog               *string        `gorm:"column:urgiin_ovog" json:"urgiin_ovog"`
	Ovog                     *string        `gorm:"column:ovog" json:"ovog"`
	Ner                      string         `gorm:"column:ner" json:"ner"`
	Register                 *string        `gorm:"column:register" json:"register"`
	Huis                     *string        `gorm:"column:huis" json:"huis"`
	TorsonOdor               *string        `gorm:"column:torson_odor" json:"torson_odor"`
	Nas                      *string        `gorm:"column:nas" json:"nas"`
	UndesUgsaa               *string        `gorm:"column:undes_ugsaa" json:"undes_ugsaa"`
	Zurag                    *string        `gorm:"column:zurag" json:"zurag"`
	AimagID                  *int           `gorm:"column:aimag_id" json:"aimag_id"`
	SumID                    *int           `gorm:"column:sum_id" json:"sum_id"`
	BagID                    *int           `gorm:"column:bag_id" json:"bag_id"`
	Gudam                    *string        `gorm:"column:gudam" json:"gudam"`
	Bair                     *string        `gorm:"column:bair" json:"bair"`
	Toot                     *string        `gorm:"column:toot" json:"toot"`
	UtasOne                  *string        `gorm:"column:utas_one" json:"utas_one"`
	UtasTwo                  *string        `gorm:"column:utas_two" json:"utas_two"`
	Email                    *string        `gorm:"column:email" json:"email"`
	CreatedAt                *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt                *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt                gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	UnemlehFile              *string        `gorm:"column:unemleh_file" json:"unemleh_file"`
	NerdevshigchID           *int           `gorm:"column:nerdevshigch_id" json:"nerdevshigch_id"`
	ShuugchTorolID           *int           `gorm:"column:shuugch_torol_id" json:"shuugch_torol_id"`
	ShuugchTolovID           *int           `gorm:"column:shuugch_tolov_id" json:"shuugch_tolov_id"`
	TorsonGazar              *string        `gorm:"column:torson_gazar" json:"torson_gazar"`
	TseregEseh               *int           `gorm:"column:tsereg_eseh" json:"tsereg_eseh"`
	TseregUnemleh            *string        `gorm:"column:tsereg_unemleh" json:"tsereg_unemleh"`
	TurHaygEseh              *int           `gorm:"column:tur_hayg_eseh" json:"tur_hayg_eseh"`
	TAimagid                 *int           `gorm:"column:t_aimagid" json:"t_aimagid"`
	TSumid                   *int           `gorm:"column:t_sumid" json:"t_sumid"`
	TBagid                   *int           `gorm:"column:t_bagid" json:"t_bagid"`
	TGudams                  *string        `gorm:"column:t_gudams" json:"t_gudams"`
	TBair                    *string        `gorm:"column:t_bair" json:"t_bair"`
	TToot                    *string        `gorm:"column:t_toot" json:"t_toot"`
	ZailshguUydHobooBarih    *int           `gorm:"column:zailshgu_uyd_hoboo_barih" json:"zailshgu_uyd_hoboo_barih"`
	BAimagid                 *int           `gorm:"column:b_aimagid" json:"b_aimagid"`
	BSumid                   *int           `gorm:"column:b_sumid" json:"b_sumid"`
	BBagid                   *int           `gorm:"column:b_bagid" json:"b_bagid"`
	BGudam                   *int           `gorm:"column:b_gudam" json:"b_gudam"`
	BBair                    *int           `gorm:"column:b_bair" json:"b_bair"`
	BToot                    *int           `gorm:"column:b_toot" json:"b_toot"`
	ApartmentTypeID          *int           `gorm:"column:apartment_type_id" json:"apartment_type_id"`
	OwnerTypeID              *int           `gorm:"column:owner_type_id" json:"owner_type_id"`
	IsMarried                *int           `gorm:"column:is_married" json:"is_married"`
	WorkedYearC              *float32       `gorm:"column:worked_year_c" json:"worked_year_c"`
	CWorkedYear              *float32       `gorm:"column:c_worked_year" json:"c_worked_year"`
	CourtWorkedYear          *float32       `gorm:"column:court_worked_year" json:"court_worked_year"`
	JudgeWorkedYear          *float32       `gorm:"column:judge_worked_year" json:"judge_worked_year"`
	HhshWorkedYear           *float32       `gorm:"column:hhsh_worked_year" json:"hhsh_worked_year"`
	IsOwnInfo                *int           `gorm:"column:is_own_info" json:"is_own_info"`
	IsIllness                *int           `gorm:"column:is_illness" json:"is_illness"`
	IllnessDesription        *string        `gorm:"column:illness_desription" json:"illness_desription"`
	IllnessOrg               *string        `gorm:"column:illness_org" json:"illness_org"`
	Birthday                 *time.Time     `gorm:"column:birthday" json:"birthday"`
	NiigmiinGaral            *string        `gorm:"column:niigmiin_garal" json:"niigmiin_garal"`
	ZailshguUydHobooBarihNer *string        `gorm:"column:zailshgu_uyd_hoboo_barih_ner" json:"zailshgu_uyd_hoboo_barih_ner"`
	IsDisable                *int           `gorm:"column:is_disable" json:"is_disable"`
	DisDisctoption           *string        `gorm:"column:dis_disctoption" json:"dis_disctoption"`
	RetiringDate             *time.Time     `gorm:"column:retiring_date" json:"retiring_date"`
}

func (a *Ankets) TableName() string {
	return "anket"
}
