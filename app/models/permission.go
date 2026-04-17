package models

import (
	"gorm.io/gorm"
	"time"
)

type TamgaGazar struct {
	ID                int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	UserID            *int           `gorm:"column:user_id" json:"user_id"`
	TamginGazarID     *int           `gorm:"column:tamgin_gazar_id" json:"tamgin_gazar_id"`
	TovchNer          *string        `gorm:"column:tovch_ner" json:"tovch_ner"`
	Taniltsuulga      *string        `gorm:"column:taniltsuulga" json:"taniltsuulga"`
	ShuugchTorolID    *int           `gorm:"column:shuugch_torol_id" json:"shuugch_torol_id"`
	ShuuhShatID       *int           `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	HaryaTamgaGazarID *int           `gorm:"column:harya_tamga_gazar_id" json:"harya_tamga_gazar_id"`
	Fax               *int           `gorm:"column:fax" json:"fax"`
	UtasOne           *int           `gorm:"column:utas_one" json:"utas_one"`
	UtasTwo           *int           `gorm:"column:utas_two" json:"utas_two"`
	ShuudanHayg       *string        `gorm:"column:shuudan_hayg" json:"shuudan_hayg"`
	Web               *string        `gorm:"column:web" json:"web"`
	Email             *string        `gorm:"column:email" json:"email"`
	AimagID           *int           `gorm:"column:aimag_id" json:"aimag_id"`
	SumID             *int           `gorm:"column:sum_id" json:"sum_id"`
	BagID             *int           `gorm:"column:bag_id" json:"bag_id"`
	Hayg              *string        `gorm:"column:hayg" json:"hayg"`
	ShuuhBairTuuh     *string        `gorm:"column:shuuh_bair_tuuh" json:"shuuh_bair_tuuh"`
	OrooToo           *int           `gorm:"column:oroo_too" json:"oroo_too"`
	HudaldaaniiTanhim *int           `gorm:"column:hudaldaanii_tanhim" json:"hudaldaanii_tanhim"`
	ZovloldohOroo     *int           `gorm:"column:zovloldoh_oroo" json:"zovloldoh_oroo"`
	BairandShuuhToo   *int           `gorm:"column:bairand_shuuh_too" json:"bairand_shuuh_too"`
	ProkurorEses      *int           `gorm:"column:prokuror_eses" json:"prokuror_eses"`
	ZasvarHiisen      *string        `gorm:"column:zasvar_hiisen" json:"zasvar_hiisen"`
	GazarEseh         *int           `gorm:"column:gazar_eseh" json:"gazar_eseh"`
	TaharEseh         *int           `gorm:"column:tahar_eseh" json:"tahar_eseh"`
	ArhivBaidal       *string        `gorm:"column:arhiv_baidal" json:"arhiv_baidal"`
	TaviurEseh        *int           `gorm:"column:taviur_eseh" json:"taviur_eseh"`
	CreatedAt         *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt         *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt         gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	Logo              *string        `gorm:"column:logo" json:"logo"`
	Cover             *string        `gorm:"column:cover" json:"cover"`
	Location          *string        `gorm:"column:location" json:"location"`
}

func (t *TamgaGazar) TableName() string {
	return "tamga_gazar"
}

type LutAlbanTushaal struct {
	ID                     int     `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	AlbanTushaal           *string `gorm:"column:alban_tushaal" json:"alban_tushaal"`
	OrgID                  int     `gorm:"column:org_id" json:"org_id"`
	GazarHeltesID          *int    `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	EmployeePermission     *string `gorm:"column:employee_permission" json:"employee_permission"`
	CourtTypeID            *int    `gorm:"column:court_type_id" json:"court_type_id"`
	TypeJudicialPositionID *int    `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	AlbaTushaalTorolID     *int    `gorm:"column:alba_tushaal_torol_id" json:"alba_tushaal_torol_id"`
	Vacancy                int     `gorm:"column:vacancy" json:"vacancy"`
}

func (l *LutAlbanTushaal) TableName() string {
	return "lut_alban_tushaal"
}

type ViewEmployee struct {
	ID                 *int    `gorm:"column:id" json:"id"`
	UserID             *int    `gorm:"column:user_id" json:"user_id"`
	Emp                *string `gorm:"column:emp" json:"emp"`
	OrgID              *int    `gorm:"column:org_id" json:"org_id"`
	GazarHeltesID      *int    `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	EmployeePermission *string `gorm:"column:employee_permission" json:"employee_permission"`
}

func (v *ViewEmployee) TableName() string {
	return "view_employee"
}

type Role struct {
	ID          int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Name        string         `gorm:"column:name;not null;unique" json:"name"`
	DisplayName string         `gorm:"column:display_name" json:"display_name"`
	Description string         `gorm:"column:description" json:"description"`
	Permissions string         `gorm:"column:permissions;type:TEXT" json:"permissions"`
	Extra       string         `gorm:"column:extra;type:TEXT" json:"extra"`
	Menu        string         `gorm:"column:menu" json:"menu"`
	CreatedAt   *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt   *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at" json:"-"`
}

// TableName sets the insert table name for this struct type
func (v *Role) TableName() string {
	return "roles"
}

type ViewLutCourtOffice struct {
	ID                   *int    `gorm:"column:id" json:"id"`
	CourtOffice          *string `gorm:"column:court_office" json:"court_office"`
	ShuuhShatID          *int    `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ShuuhTurulID         *int    `gorm:"column:shuuh_turul_id" json:"shuuh_turul_id"`
	ShuuhBair            *string `gorm:"column:shuuh_bair" json:"shuuh_bair"`
	UruuToo              *int    `gorm:"column:uruu_too" json:"uruu_too"`
	HuraldaaTanhim       *string `gorm:"column:huraldaa_tanhim" json:"huraldaa_tanhim"`
	TasalgaaniiToo       *string `gorm:"column:tasalgaanii_too" json:"tasalgaanii_too"`
	HedenShuuh           *string `gorm:"column:heden_shuuh" json:"heden_shuuh"`
	ProkurorCheck        *int    `gorm:"column:prokuror_check" json:"prokuror_check"`
	ZasvarBaidal         *string `gorm:"column:zasvar_baidal" json:"zasvar_baidal"`
	GazarCheck           *int    `gorm:"column:gazar_check" json:"gazar_check"`
	AlbaCheck            *int    `gorm:"column:alba_check" json:"alba_check"`
	ArhivUruu            *string `gorm:"column:arhiv_uruu" json:"arhiv_uruu"`
	TaviurCheck          *int    `gorm:"column:taviur_check" json:"taviur_check"`
	TamgaGazarID         *int    `gorm:"column:tamga_gazar_id" json:"tamga_gazar_id"`
	ShuuhiinTamgiinGazar *string `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	ShuugchiinTorol      *string `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	CourtType            *string `gorm:"column:court_type" json:"court_type"`
}

func (v *ViewLutCourtOffice) TableName() string {
	return "view_lut_court_office"
}

type ViewShuuhiinTamgiinGazar struct {
	ID                   *int           `gorm:"column:id" json:"id"`
	ShuuhiinTamgiinGazar *string        `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	TamgaDarga           *string        `gorm:"column:tamga_darga" json:"tamga_darga"`
	Taniltsuulga         *string        `gorm:"column:taniltsuulga" json:"taniltsuulga"`
	TsahimShuudan        *string        `gorm:"column:tsahim_shuudan" json:"tsahim_shuudan"`
	Utas1                *int           `gorm:"column:utas1" json:"utas1"`
	Utas2                *int           `gorm:"column:utas2" json:"utas2"`
	FaxT                 *string        `gorm:"column:fax_t" json:"fax_t"`
	WebHuudas            *string        `gorm:"column:web_huudas" json:"web_huudas"`
	AimaigID             *int           `gorm:"column:aimaig_id" json:"aimaig_id"`
	SumID                *int           `gorm:"column:sum_id" json:"sum_id"`
	HorooID              *int           `gorm:"column:horoo_id" json:"horoo_id"`
	Hayag                *string        `gorm:"column:hayag" json:"hayag"`
	LogoT                *string        `gorm:"column:logo_t" json:"logo_t"`
	Baiirshil            *string        `gorm:"column:baiirshil" json:"baiirshil"`
	DeletedAt            gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	CreatedAt            *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt            *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	BairTuuh             *string        `gorm:"column:bair_tuuh" json:"bair_tuuh"`
	UruuToo              *int           `gorm:"column:uruu_too" json:"uruu_too"`
	HuraldaaniiTanhim    *string        `gorm:"column:huraldaanii_tanhim" json:"huraldaanii_tanhim"`
	TasalgaaToo          *string        `gorm:"column:tasalgaa_too" json:"tasalgaa_too"`
	HedenBair            *string        `gorm:"column:heden_bair" json:"heden_bair"`
	IsProcuror           *int           `gorm:"column:is_procuror" json:"is_procuror"`
	ZasvarBaidal         *string        `gorm:"column:zasvar_baidal" json:"zasvar_baidal"`
	IsGerchilgee         *int           `gorm:"column:is_gerchilgee" json:"is_gerchilgee"`
	IsTahar              *int           `gorm:"column:is_tahar" json:"is_tahar"`
	ArchiveUruu          *string        `gorm:"column:archive_uruu" json:"archive_uruu"`
	IsTaviur             *int           `gorm:"column:is_taviur" json:"is_taviur"`
	ZuragT               *string        `gorm:"column:zurag_t" json:"zurag_t"`
}

func (v *ViewShuuhiinTamgiinGazar) TableName() string {
	return "view_shuuhiin_tamgiin_gazar"
}
