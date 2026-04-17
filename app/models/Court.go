package models

import (
	"time"

	"gorm.io/gorm"
)

type FilterCourtOffice struct {
	ShuuhShatID       *int `json:"shuuh_shat_id"`
	ShuugchiinTurulID *int `json:"shuugchiin_turul_id"`
	BaiguullagaID     *int `json:"baiguullaga_id"`
}

type ViewCourtWithCount struct {
	ID           int    `gorm:"column:id" json:"id"`
	CourtOffice  string `gorm:"column:court_office" json:"court_office"`
	NiitShuugch  int    `gorm:"column:niit_shuugch" json:"niit_shuugch"`
	ShuuhShatID  int    `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ShuuhTurulID int    `gorm:"column:shuuh_turul_id" json:"shuuh_turul_id"`
}

func (v *ViewCourtWithCount) TableName() string {
	return "view_court_with_count"
}

type ViewShuuhShuugch struct {
	UserID             *int           `gorm:"column:user_id" json:"user_id"`
	BaiguullagaID      *int           `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	DeletedAt          gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	AlbaTushaalTorolID *int           `gorm:"column:alba_tushaal_torol_id" json:"alba_tushaal_torol_id"`
	Login              *string        `gorm:"column:login" json:"login"`
	Avatar             *string        `gorm:"column:avatar" json:"avatar"`
	FirstName          *string        `gorm:"column:first_name" json:"first_name"`
	LastName           *string        `gorm:"column:last_name" json:"last_name"`
}

func (v *ViewShuuhShuugch) TableName() string {
	return "view_shuuh_shuugch"
}

type ViewShuugchTomilgoo struct {
	ID                     int            `gorm:"column:id" json:"id"`
	UserID                 int            `gorm:"column:user_id" json:"user_id"`
	BaiguullagaID          int            `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	GazarHeltesID          int            `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	TomilsonOgnoo          *time.Time     `gorm:"column:tomilson_ognoo" json:"tomilson_ognoo"`
	AjilBairTorolID        *int           `gorm:"column:ajil_bair_torol_id" json:"ajil_bair_torol_id"`
	AlbanTushaalID         *int           `gorm:"column:alban_tushaal_id" json:"alban_tushaal_id"`
	TsalinTorolID          *int           `gorm:"column:tsalin_torol_id" json:"tsalin_torol_id"`
	TsalinShatlalID        *int           `gorm:"column:tsalin_shatlal_id" json:"tsalin_shatlal_id"`
	ShuuhShatID            *int           `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ZarilagDugaar          *string        `gorm:"column:zarilag_dugaar" json:"zarilag_dugaar"`
	ZarilagFile            *string        `gorm:"column:zarilag_file" json:"zarilag_file"`
	PasswordMedeelel       *string        `gorm:"column:password_medeelel" json:"password_medeelel"`
	OOgnoo                 *time.Time     `gorm:"column:o_ognoo" json:"o_ognoo"`
	DOgnoo                 *time.Time     `gorm:"column:d_ognoo" json:"d_ognoo"`
	SungaltOgnoo           *time.Time     `gorm:"column:sungalt_ognoo" json:"sungalt_ognoo"`
	SungaltOgnooTwo        *time.Time     `gorm:"column:sungalt_ognoo_two" json:"sungalt_ognoo_two"`
	ButsaasanEseh          *int           `gorm:"column:butsaasan_eseh" json:"butsaasan_eseh"`
	ButsaasanOgnoo         *time.Time     `gorm:"column:butsaasan_ognoo" json:"butsaasan_ognoo"`
	FileHavsralt           *string        `gorm:"column:file_havsralt" json:"file_havsralt"`
	CreatedAt              *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt              *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt              gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	TolovID                int            `gorm:"column:tolov_id" json:"tolov_id"`
	AlbaTushaalTorolID     *int           `gorm:"column:alba_tushaal_torol_id" json:"alba_tushaal_torol_id"`
	Emp                    *string        `gorm:"column:emp" json:"emp"`
	Photo                  *string        `gorm:"column:photo" json:"photo"`
	CourtMail              *string        `gorm:"column:court_mail" json:"court_mail"`
	CourtTypeID            *int           `gorm:"column:court_type_id" json:"court_type_id"`
	Salery                 *int           `gorm:"column:salery" json:"salery"`
	RetiredDate            *time.Time     `gorm:"column:retired_date" json:"retired_date"`
	CompTypeID             *int           `gorm:"column:comp_type_id" json:"comp_type_id"`
	TypeJudicialPositionID *int           `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	AmraltOgnoo            *time.Time     `gorm:"column:amralt_ognoo" json:"amralt_ognoo"`
	ShuugchiinTurulID      *int           `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	AjillasanJil           *int           `gorm:"column:ajillasan_jil" json:"ajillasan_jil"`
	AlbanTushaal           *string        `gorm:"column:alban_tushaal" json:"alban_tushaal"`
	Vacancy                *int           `gorm:"column:vacancy" json:"vacancy"`
	DeletedAtsss           *time.Time     `gorm:"column:deleted_atsss" json:"deleted_atsss"`
	ShuugchiinTorolID      *int           `gorm:"column:shuugchiin_torol_id" json:"shuugchiin_torol_id"`
	AlbaTushaalTorol       *string        `gorm:"column:alba_tushaal_torol" json:"alba_tushaal_torol"`
	AjilBairTorol          *string        `gorm:"column:ajil_bair_torol" json:"ajil_bair_torol"`
	TypeJudicialPosition   *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	Role                   *int           `gorm:"column:role" json:"role"`
	Login                  *string        `gorm:"column:login" json:"login"`
	RegisterNumber         *string        `gorm:"column:register_number" json:"register_number"`
	FirstName              *string        `gorm:"column:first_name" json:"first_name"`
	LastName               *string        `gorm:"column:last_name" json:"last_name"`
	Birthday               *time.Time     `gorm:"column:birthday" json:"birthday"`
	Gender                 *string        `gorm:"column:gender" json:"gender"`
	DeletedAtu             *time.Time     `gorm:"column:deleted_atu" json:"deleted_atu"`
	Address                *string        `gorm:"column:address" json:"address"`
	AlbanTushaalTailbar    *string        `gorm:"column:alban_tushaal_tailbar" json:"alban_tushaal_tailbar"`
	ShuuhiinTamgiinGazar   string         `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	TamgaDarga             *string        `gorm:"column:tamga_darga" json:"tamga_darga"`
	Taniltsuulga           *string        `gorm:"column:taniltsuulga" json:"taniltsuulga"`
	TsahimShuudan          *string        `gorm:"column:tsahim_shuudan" json:"tsahim_shuudan"`
	Utas1                  *int           `gorm:"column:utas1" json:"utas1"`
	Utas2                  *int           `gorm:"column:utas2" json:"utas2"`
	FaxT                   *string        `gorm:"column:fax_t" json:"fax_t"`
	WebHuudas              *string        `gorm:"column:web_huudas" json:"web_huudas"`
	AimaigID               *int           `gorm:"column:aimaig_id" json:"aimaig_id"`
	SumID                  *int           `gorm:"column:sum_id" json:"sum_id"`
	HorooID                *int           `gorm:"column:horoo_id" json:"horoo_id"`
	Hayag                  *string        `gorm:"column:hayag" json:"hayag"`
	LogoT                  *string        `gorm:"column:logo_t" json:"logo_t"`
	ZuragT                 *string        `gorm:"column:zurag_t" json:"zurag_t"`
	Baiirshil              *string        `gorm:"column:baiirshil" json:"baiirshil"`
	DeletedAtf             *time.Time     `gorm:"column:deleted_atf" json:"deleted_atf"`
	BairTuuh               *string        `gorm:"column:bair_tuuh" json:"bair_tuuh"`
	UruuToo                *int           `gorm:"column:uruu_too" json:"uruu_too"`
	HuraldaaniiTanhim      *string        `gorm:"column:huraldaanii_tanhim" json:"huraldaanii_tanhim"`
	TasalgaaToo            *string        `gorm:"column:tasalgaa_too" json:"tasalgaa_too"`
	HedenBair              *string        `gorm:"column:heden_bair" json:"heden_bair"`
	IsProcuror             *int           `gorm:"column:is_procuror" json:"is_procuror"`
	ZasvarBaidal           *string        `gorm:"column:zasvar_baidal" json:"zasvar_baidal"`
	IsGerchilgee           *int           `gorm:"column:is_gerchilgee" json:"is_gerchilgee"`
	IsTahar                *int           `gorm:"column:is_tahar" json:"is_tahar"`
	ArchiveUruu            *string        `gorm:"column:archive_uruu" json:"archive_uruu"`
	IsTaviur               *int           `gorm:"column:is_taviur" json:"is_taviur"`
	CourtOffice            string         `gorm:"column:court_office" json:"court_office"`
	EmailHayag             *string        `gorm:"column:email_hayag" json:"email_hayag"`
	TsahimHuudas           *string        `gorm:"column:tsahim_huudas" json:"tsahim_huudas"`
	LogoI                  *string        `gorm:"column:logo_i" json:"logo_i"`
	CoverI                 *string        `gorm:"column:cover_i" json:"cover_i"`
	ShuugchiinTorol        *string        `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	CourtType              *string        `gorm:"column:court_type" json:"court_type"`
	ShuugchTolov           *string        `gorm:"column:shuugch_tolov" json:"shuugch_tolov"`
	CourtCode              *int           `gorm:"column:court_code" json:"court_code"`
}

func (v *ViewShuugchTomilgoo) TableName() string {
	return "public.view_shuugch_tomilgoo"
}

type ViewShuugchTomilgooForEcourt struct {
	ID                     int            `gorm:"column:id" json:"id"`
	UserID                 int            `gorm:"column:user_id" json:"user_id"`
	BaiguullagaID          *int           `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	GazarHeltesID          *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	TomilsonOgnoo          *time.Time     `gorm:"column:tomilson_ognoo" json:"tomilson_ognoo"`
	AjilBairTorolID        *int           `gorm:"column:ajil_bair_torol_id" json:"ajil_bair_torol_id"`
	AlbanTushaalID         *int           `gorm:"column:alban_tushaal_id" json:"alban_tushaal_id"`
	TsalinTorolID          *int           `gorm:"column:tsalin_torol_id" json:"tsalin_torol_id"`
	TsalinShatlalID        *int           `gorm:"column:tsalin_shatlal_id" json:"tsalin_shatlal_id"`
	ShuuhShatID            *int           `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ZarilagDugaar          *string        `gorm:"column:zarilag_dugaar" json:"zarilag_dugaar"`
	ZarilagFile            *string        `gorm:"column:zarilag_file" json:"zarilag_file"`
	PasswordMedeelel       *string        `gorm:"column:password_medeelel" json:"password_medeelel"`
	OOgnoo                 *time.Time     `gorm:"column:o_ognoo" json:"o_ognoo"`
	DOgnoo                 *time.Time     `gorm:"column:d_ognoo" json:"d_ognoo"`
	SungaltOgnoo           *time.Time     `gorm:"column:sungalt_ognoo" json:"sungalt_ognoo"`
	SungaltOgnooTwo        *time.Time     `gorm:"column:sungalt_ognoo_two" json:"sungalt_ognoo_two"`
	ButsaasanEseh          *int           `gorm:"column:butsaasan_eseh" json:"butsaasan_eseh"`
	ButsaasanOgnoo         *time.Time     `gorm:"column:butsaasan_ognoo" json:"butsaasan_ognoo"`
	FileHavsralt           *string        `gorm:"column:file_havsralt" json:"file_havsralt"`
	CreatedAt              *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt              *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt              gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	TolovID                int            `gorm:"column:tolov_id" json:"tolov_id"`
	AlbaTushaalTorolID     *int           `gorm:"column:alba_tushaal_torol_id" json:"alba_tushaal_torol_id"`
	Emp                    *string        `gorm:"column:emp" json:"emp"`
	Photo                  *string        `gorm:"column:photo" json:"photo"`
	CourtMail              *string        `gorm:"column:court_mail" json:"court_mail"`
	CourtTypeID            *int           `gorm:"column:court_type_id" json:"court_type_id"`
	Salery                 *int           `gorm:"column:salery" json:"salery"`
	RetiredDate            *time.Time     `gorm:"column:retired_date" json:"retired_date"`
	CompTypeID             *int           `gorm:"column:comp_type_id" json:"comp_type_id"`
	TypeJudicialPositionID *int           `gorm:"column:type_judicial_position_id" json:"type_judicial_position_id"`
	AmraltOgnoo            *time.Time     `gorm:"column:amralt_ognoo" json:"amralt_ognoo"`
	ShuugchiinTurulID      *int           `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	AjillasanJil           *int           `gorm:"column:ajillasan_jil" json:"ajillasan_jil"`
	AlbanTushaal           *string        `gorm:"column:alban_tushaal" json:"alban_tushaal"`
	Vacancy                *int           `gorm:"column:vacancy" json:"vacancy"`
	AlbaTushaalTorol       *string        `gorm:"column:alba_tushaal_torol" json:"alba_tushaal_torol"`
	AjilBairTorol          *string        `gorm:"column:ajil_bair_torol" json:"ajil_bair_torol"`
	TypeJudicialPosition   *string        `gorm:"column:type_judicial_position" json:"type_judicial_position"`
	Role                   *int           `gorm:"column:role" json:"role"`
	Login                  *string        `gorm:"column:login" json:"login"`
	RegisterNumber         *string        `gorm:"column:register_number" json:"register_number"`
	FirstName              *string        `gorm:"column:first_name" json:"first_name"`
	LastName               *string        `gorm:"column:last_name" json:"last_name"`
	Birthday               *time.Time     `gorm:"column:birthday" json:"birthday"`
	Gender                 *string        `gorm:"column:gender" json:"gender"`
	DeletedAtu             *time.Time     `gorm:"column:deleted_atu" json:"deleted_atu"`
	Address                *string        `gorm:"column:address" json:"address"`
	AlbanTushaalTailbar    *string        `gorm:"column:alban_tushaal_tailbar" json:"alban_tushaal_tailbar"`
	ShuuhiinTamgiinGazar   *string        `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	TamgaDarga             *string        `gorm:"column:tamga_darga" json:"tamga_darga"`
	Taniltsuulga           *string        `gorm:"column:taniltsuulga" json:"taniltsuulga"`
	TsahimShuudan          *string        `gorm:"column:tsahim_shuudan" json:"tsahim_shuudan"`
	Utas1                  *int           `gorm:"column:utas1" json:"utas1"`
	Utas2                  *int           `gorm:"column:utas2" json:"utas2"`
	FaxT                   *string        `gorm:"column:fax_t" json:"fax_t"`
	WebHuudas              *string        `gorm:"column:web_huudas" json:"web_huudas"`
	AimaigID               *int           `gorm:"column:aimaig_id" json:"aimaig_id"`
	SumID                  *int           `gorm:"column:sum_id" json:"sum_id"`
	HorooID                *int           `gorm:"column:horoo_id" json:"horoo_id"`
	Hayag                  *string        `gorm:"column:hayag" json:"hayag"`
	LogoT                  *string        `gorm:"column:logo_t" json:"logo_t"`
	ZuragT                 *string        `gorm:"column:zurag_t" json:"zurag_t"`
	Baiirshil              *string        `gorm:"column:baiirshil" json:"baiirshil"`
	BairTuuh               *string        `gorm:"column:bair_tuuh" json:"bair_tuuh"`
	UruuToo                *int           `gorm:"column:uruu_too" json:"uruu_too"`
	HuraldaaniiTanhim      *string        `gorm:"column:huraldaanii_tanhim" json:"huraldaanii_tanhim"`
	TasalgaaToo            *string        `gorm:"column:tasalgaa_too" json:"tasalgaa_too"`
	HedenBair              *string        `gorm:"column:heden_bair" json:"heden_bair"`
	IsProcuror             *int           `gorm:"column:is_procuror" json:"is_procuror"`
	ZasvarBaidal           *string        `gorm:"column:zasvar_baidal" json:"zasvar_baidal"`
	IsGerchilgee           *int           `gorm:"column:is_gerchilgee" json:"is_gerchilgee"`
	IsTahar                *int           `gorm:"column:is_tahar" json:"is_tahar"`
	ArchiveUruu            *string        `gorm:"column:archive_uruu" json:"archive_uruu"`
	IsTaviur               *int           `gorm:"column:is_taviur" json:"is_taviur"`
	OrgID                  *int           `gorm:"column:org_id" json:"org_id"`
	CourtOffice            *string        `gorm:"column:court_office" json:"court_office"`
	EmailHayag             *string        `gorm:"column:email_hayag" json:"email_hayag"`
	TsahimHuudas           *string        `gorm:"column:tsahim_huudas" json:"tsahim_huudas"`
	LogoI                  *string        `gorm:"column:logo_i" json:"logo_i"`
	CoverI                 *string        `gorm:"column:cover_i" json:"cover_i"`
	IsArchive              bool           `gorm:"column:is_archive" json:"is_archive"`
	CourtCode              *int           `gorm:"column:court_code" json:"court_code"`
	ShuugchiinTorol        *string        `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	CourtType              *string        `gorm:"column:court_type" json:"court_type"`
	ShuugchTolov           *string        `gorm:"column:shuugch_tolov" json:"shuugch_tolov"`
}

func (v *ViewShuugchTomilgooForEcourt) TableName() string {
	return "public.view_shuugch_tomilgoo_for_ecourt"
}
