package models

import "time"

type ViewZarMonthByTorol struct {
	Count           *int    `gorm:"column:count" json:"count"`
	CourtType       *string `gorm:"column:court_type" json:"court_type"`
	StartDate       *string `gorm:"column:start_date" json:"start_date"`
	AdvertisementID *int    `gorm:"column:advertisement_id" json:"advertisement_id"`
	IDCount         *int    `gorm:"column:id_count" json:"id_count"`
}

func (v *ViewZarMonthByTorol) TableName() string {
	return "view_zar_month_by_torol"
}

type ViewZarTypeTimeFilter struct {
	StartDate             *string `gorm:"column:start_date" json:"start_date"`
	EndDate               *string `gorm:"column:end_date" json:"end_date"`
	AnhanShat             *int    `gorm:"column:anhan_shat" json:"anhan_shat"`
	AnhanShatNiitOrontoo  *int    `gorm:"column:anhan_shat_niit_orontoo" json:"anhan_shat_niit_orontoo"`
	DavZaaldah            *int    `gorm:"column:dav_zaaldah" json:"dav_zaaldah"`
	DavZaaldahNiitOrontoo *int    `gorm:"column:dav_zaaldah_niit_orontoo" json:"dav_zaaldah_niit_orontoo"`
	Hytalt                *int    `gorm:"column:hytalt" json:"hytalt"`
	HytaltNiitOrontoo     *int    `gorm:"column:hytalt_niit_orontoo" json:"hytalt_niit_orontoo"`
	EneSard               *int    `gorm:"column:ene_sard" json:"ene_sard"`
	EneJild               *int    `gorm:"column:ene_jild" json:"ene_jild"`
}

func (v *ViewZarTypeTimeFilter) TableName() string {
	return "view_zar_type_time_filter"
}

type ViewDZarType struct {
	Niit      *int    `gorm:"column:niit" json:"niit"`
	CourtType *string `gorm:"column:court_type" json:"court_type"`
	EneSard   *int    `gorm:"column:ene_sard" json:"ene_sard"`
}

func (v *ViewDZarType) TableName() string {
	return "view_d_zar_type"
}

//////////

type VCShuuhchiinTomilgoo struct {
	ShuuhShatID       *int       `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	ShuugchiinTurulID *int       `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	CourtType         *string    `gorm:"column:court_type" json:"court_type"`
	ShuugchiinTorol   *string    `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	NiitTamgiinGazar  *int       `gorm:"column:niit_tamgiin_gazar" json:"niit_tamgiin_gazar"`
	TomilsonOgnoo     *time.Time `gorm:"column:tomilson_ognoo" json:"tomilson_ognoo"`
}

func (v *VCShuuhchiinTomilgoo) TableName() string {
	return "v_c_shuuhchiin_tomilgoo"
}

type VCTomilsonOgnoo struct {
	NiitHun            *int    `gorm:"column:niit_hun" json:"niit_hun"`
	TomilsonOgnooRange *string `gorm:"column:tomilson_ognoo_range" json:"tomilson_ognoo_range"`
	CountOfRecords     *int    `gorm:"column:count_of_records" json:"count_of_records"`
}

func (v *VCTomilsonOgnoo) TableName() string {
	return "v_c_tomilson_ognoo"
}

type VCTolovUser struct {
	TolovID      *int    `gorm:"column:tolov_id" json:"tolov_id"`
	ShuugchTolov *string `gorm:"column:shuugch_tolov" json:"shuugch_tolov"`
	UserID       *int    `gorm:"column:user_id" json:"user_id"`
}

func (v *VCTolovUser) TableName() string {
	return "v_c_tolov_user"
}

type VCCholooOnoor struct {
	YearCategory      *string  `gorm:"column:year_category" json:"year_category"`
	TotalCountPerYear *float32 `gorm:"column:total_count_per_year" json:"total_count_per_year"`
}

func (v *VCCholooOnoor) TableName() string {
	return "v_c_choloo_onoor"
}

type VCCholooNiitTorol struct {
	RequestStatus *string `gorm:"column:request_status" json:"request_status"`
	Count         *int    `gorm:"column:count" json:"count"`
}

func (v *VCCholooNiitTorol) TableName() string {
	return "v_c_choloo_niit_torol"
}

type VCSuutsOmchiinTorol struct {
	NiitOronSuutsniiTorol *int    `gorm:"column:niit_oron_suutsnii_torol" json:"niit_oron_suutsnii_torol"`
	ApartmentType         *string `gorm:"column:apartment_type" json:"apartment_type"`
	NiitOmchiinTorol      *int    `gorm:"column:niit_omchiin_torol" json:"niit_omchiin_torol"`
	OwnerType             *string `gorm:"column:owner_type" json:"owner_type"`
}

func (v *VCSuutsOmchiinTorol) TableName() string {
	return "v_c_suuts_omchiin_torol"
}

type Choloo struct {
	NiitCholoo       int `gorm:"column:niit_choloo" json:"niit_choloo"`
	CholooOlgovortoi int `gorm:"column:niit_choloo_olgovortoi" json:"niit_choloo_olgovortoi"`
	CholooOlgovorgui int `gorm:"column:niit_choloo_olgovorgui" json:"niit_choloo_olgovorgui"`
	Butaasan         int `gorm:"column:butaasan" json:"butaasan"`
}
type UrugdulToo struct {
	Jil int `gorm:"column:jil" json:"jil"`
	Too int `gorm:"column:too" json:"too"`
}

type SelgenToo struct {
	Irsen_too         int `gorm:"column:irsen_too" json:"irsen_too"`
	Shiidverlesen_too int `gorm:"column:shiidverlesen_too" json:"shiidverlesen_too"`
	Jil               int `gorm:"column:jil" json:"jil"`
}

type SelgenAjillahToo struct {
	Jil           int `gorm:"column:jil" json:"jil"`
	Irsen_too     int `gorm:"column:irsen_too" json:"irsen_too"`
	Ajluulsan_too int `gorm:"column:ajluulsan_too" json:"ajluulsan_too"`
}
type VCGazarHeltes struct {
	NiitShuuh     *int       `gorm:"column:niit_shuuh" json:"niit_shuuh"`
	TomilsonOgnoo *time.Time `gorm:"column:tomilson_ognoo" json:"tomilson_ognoo"`
	YearCategory  *string    `gorm:"column:year_category" json:"year_category"`
}

func (v *VCGazarHeltes) TableName() string {
	return "v_c_gazar_heltes"
}

type VCTetgevertGarsanJil struct {
	Niit         *int    `gorm:"column:niit" json:"niit"`
	YearCategory *string `gorm:"column:year_category" json:"year_category"`
}

func (v *VCTetgevertGarsanJil) TableName() string {
	return "v_c_tetgevert_garsan_jil"
}

type VCShuugchiinTooShuuheer struct {
	NiitHereglegch *int    `gorm:"column:niit_hereglegch" json:"niit_hereglegch"`
	GazarHeltesID  *int    `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	CourtOffice    *string `gorm:"column:court_office" json:"court_office"`
}

func (v *VCShuugchiinTooShuuheer) TableName() string {
	return "v_c_shuugchiin_too_shuuheer"
}

type CountCourtResult struct {
	NiitShuuh           int64 `json:"niitShuuh"`
	AnhanShat           int64 `json:"anhanShat"`
	DundShat            int64 `json:"dundShat"`
	HynaltShat          int64 `json:"hynaltShat"`
	ShuugchTurulEruu    int64 `json:"shuugchTurulEruu"`
	IrgenAnhaDavah      int64 `json:"irgenAnhaDavah"`
	ZahiragaaAnhanDavah int64 `json:"zahiragaaAnhanDavah"`
}

type VCHuis struct {
	Gender *string `gorm:"column:gender" json:"gender"`
	Count  *int    `gorm:"column:count" json:"count"`
}

func (v *VCHuis) TableName() string {
	return "v_c_huis"
}

type VCSuutsTorol struct {
	NiitOronSuutsniiTorol *int    `gorm:"column:niit_oron_suutsnii_torol" json:"niit_oron_suutsnii_torol"`
	NiitOmchiinTorol      *int    `gorm:"column:niit_omchiin_torol" json:"niit_omchiin_torol"`
	ShuugchTolov          *string `gorm:"column:shuugch_tolov" json:"shuugch_tolov"`
	ShuugchTorol          *string `gorm:"column:shuugch_torol" json:"shuugch_torol"`
	ApartmentType         *string `gorm:"column:apartment_type" json:"apartment_type"`
	OwnerType             *string `gorm:"column:owner_type" json:"owner_type"`
	BaiguullagaID         *int    `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	GazarHeltesID         *int    `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	ShuugchiinTurulID     *int    `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	ShuuhShatID           *int    `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	CourtType             *string `gorm:"column:court_type" json:"court_type"`
	CourtOffice           *string `gorm:"column:court_office" json:"court_office"`
	ShuuhiinTamgiinGazar  *string `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	ShuugchiinTorol       *string `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
}

func (v *VCSuutsTorol) TableName() string {
	return "v_c_suuts_torol"
}

type VCSuutsTorolN struct {
	ApartmentTypeID       *int       `gorm:"column:apartment_type_id" json:"apartment_type_id"`
	OwnerTypeID           *int       `gorm:"column:owner_type_id" json:"owner_type_id"`
	NiitOronSuutsniiTorol *int       `gorm:"column:niit_oron_suutsnii_torol" json:"niit_oron_suutsnii_torol"`
	NiitOmchiinTorol      *int       `gorm:"column:niit_omchiin_torol" json:"niit_omchiin_torol"`
	ShuugchTolov          *string    `gorm:"column:shuugch_tolov" json:"shuugch_tolov"`
	ShuugchTorol          *string    `gorm:"column:shuugch_torol" json:"shuugch_torol"`
	ApartmentType         *string    `gorm:"column:apartment_type" json:"apartment_type"`
	OwnerType             *string    `gorm:"column:owner_type" json:"owner_type"`
	BaiguullagaID         *int       `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	GazarHeltesID         *int       `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	ShuugchiinTurulID     *int       `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	ShuuhShatID           *int       `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	CourtType             *string    `gorm:"column:court_type" json:"court_type"`
	CourtOffice           *string    `gorm:"column:court_office" json:"court_office"`
	ShuuhiinTamgiinGazar  *string    `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	ShuugchiinTorol       *string    `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	CreatedAt             *time.Time `gorm:"column:created_at" json:"created_at"`
}

func (v *VCSuutsTorolN) TableName() string {
	return "v_c_suuts_torol_n"
}

type VCTetgeverJilN struct {
	Niit                 *int       `gorm:"column:niit" json:"niit"`
	ShuugchTolov         *string    `gorm:"column:shuugch_tolov" json:"shuugch_tolov"`
	ShuugchTorol         *string    `gorm:"column:shuugch_torol" json:"shuugch_torol"`
	BaiguullagaID        *int       `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	GazarHeltesID        *int       `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	ShuugchiinTurulID    *int       `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	ShuuhShatID          *int       `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	CourtType            *string    `gorm:"column:court_type" json:"court_type"`
	CourtOffice          *string    `gorm:"column:court_office" json:"court_office"`
	ShuuhiinTamgiinGazar *string    `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	ShuugchiinTorol      *string    `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	RetiringDate         *time.Time `gorm:"column:retiring_date" json:"retiring_date"`
	YearCategory         *string    `gorm:"column:year_category" json:"year_category"`
}

func (v *VCTetgeverJilN) TableName() string {
	return "v_c_tetgever_jil_n"
}

type VCCholooNiitTorolN struct {
	OrgID                *int       `gorm:"column:org_id" json:"org_id"`
	CourtOffice          *string    `gorm:"column:court_office" json:"court_office"`
	CourtType            *string    `gorm:"column:court_type" json:"court_type"`
	ShuugchiinTorol      *string    `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	ShuuhiinTamgiinGazar *string    `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	RequestDate          *time.Time `gorm:"column:request_date" json:"request_date"`
	RequestStatus        *string    `gorm:"column:request_status" json:"request_status"`
	Count                *int       `gorm:"column:count" json:"count"`
}

func (v *VCCholooNiitTorolN) TableName() string {
	return "v_c_choloo_niit_torol_n"
}

type VCCholooOnoorN struct {
	OrgID                    *int       `gorm:"column:org_id" json:"org_id"`
	CourtOffice              *string    `gorm:"column:court_office" json:"court_office"`
	CourtType                *string    `gorm:"column:court_type" json:"court_type"`
	ShuugchiinTorol          *string    `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	ShuuhiinTamgiinGazar     *string    `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	NiitSelgenAjilahShiidver *int       `gorm:"column:niit_selgen_ajilah_shiidver" json:"niit_selgen_ajilah_shiidver"`
	RequestDate              *time.Time `gorm:"column:request_date" json:"request_date"`
	YearCategory             *string    `gorm:"column:year_category" json:"year_category"`
}

func (v *VCCholooOnoorN) TableName() string {
	return "v_c_choloo_onoor_n"
}

type VCTomilsonOgnooN struct {
	NiitHun              *int    `gorm:"column:niit_hun" json:"niit_hun"`
	ShuuhShatID          *int    `gorm:"column:shuuh_shat_id" json:"shuuh_shat_id"`
	CourtType            *string `gorm:"column:court_type" json:"court_type"`
	BaiguullagaID        *int    `gorm:"column:baiguullaga_id" json:"baiguullaga_id"`
	CourtOffice          *string `gorm:"column:court_office" json:"court_office"`
	GazarHeltesID        *int    `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	ShuuhiinTamgiinGazar *string `gorm:"column:shuuhiin_tamgiin_gazar" json:"shuuhiin_tamgiin_gazar"`
	ShuugchiinTurulID    *int    `gorm:"column:shuugchiin_turul_id" json:"shuugchiin_turul_id"`
	ShuugchiinTorol      *string `gorm:"column:shuugchiin_torol" json:"shuugchiin_torol"`
	TomilsonOgnooRange   *string `gorm:"column:tomilson_ognoo_range" json:"tomilson_ognoo_range"`
	CountOfRecords       *int    `gorm:"column:count_of_records" json:"count_of_records"`
}

func (v *VCTomilsonOgnooN) TableName() string {
	return "v_c_tomilson_ognoo_n"
}

type FilterParams struct {
	ShuuhShatID        *int    `json:"shuuh_shat_id"`
	TomilsonOgnooStart *string `json:"tomilson_ognoo_start"`
	TomilsonOgnooEnd   *string `json:"tomilson_ognoo_end"`
	ShuugchiinTurulID  *int    `json:"shuugchiin_turul_id"`
	BaiguullagaID      *int    `json:"baiguullaga_id"`
	GazarheltesID      *int    `json:"gazar_heltes_id"`
}

type NegtgelResponse struct {
	Niit          int `json:"niit"`
	Anhan         int `json:"anhan"`
	Davah         int `json:"davah"`
	Hyanalt       int `json:"hyanalt"`
	EruuAnhan     int `json:"eruu_anhan"`
	IrgenAnhan    int `json:"irgen_anhan"`
	ZahirgaaAnhan int `json:"zahirgaa_anhan"`
}

type AjiljBuiResponse struct {
	EruuNiit           int `gorm:"column:eruu_niit" json:"eruu_niit"`
	EruuNiislel        int `gorm:"column:eruu_niislel" json:"eruu_niislel"`
	EruuOrontNutag     int `gorm:"column:eruu_oront_nutag" json:"eruu_oront_nutag"`
	AnhanIrgenNiit     int `gorm:"column:anhan_irgen_niit" json:"anhan_irgen_niit"`
	IrgenNiislel       int `gorm:"column:irgen_niislel" json:"irgen_niislel"`
	IrgenOrontNutag    int `gorm:"column:irgen_oront_nutag" json:"irgen_oront_nutag"`
	AnhanZahirgaaNiit  int `gorm:"column:anhan_zahirgaa_niit" json:"anhan_zahirgaa_niit"`
	ZahirgaaNiislel    int `gorm:"column:zahirgaa_niislel" json:"zahirgaa_niislel"`
	ZahirgaaOrontNutag int `gorm:"column:zahirgaa_oront_nutag" json:"zahirgaa_oront_nutag"`
}

type ShuugByGender struct {
	Niit        int `gorm:"column:niit" json:"niit"`
	MaleCount   int `gorm:"column:male_count" json:"male_count"`
	FemaleCount int `gorm:"column:female_count" json:"female_count"`
}
type ShuugByBolovsrol struct {
	Niit     int `gorm:"column:niit" json:"niit"`
	Bachelor int `gorm:"column:bachelor" json:"bachelor"`
	Magistor int `gorm:"column:magistor" json:"magistor"`
	Doctor   int `gorm:"column:doctor" json:"doctor"`
}
type AgeGroup struct {
	Age18_25   *int `gorm:"column:age_18_25" json:"age_18_25"`
	Age26_30   *int `gorm:"column:age_26_30" json:"age_26_30"`
	Age31_40   *int `gorm:"column:age_31_40" json:"age_31_40"`
	Age41_50   *int `gorm:"column:age_41_50" json:"age_41_50"`
	Age51_55   *int `gorm:"column:age_51_55" json:"age_51_55"`
	Age56Nemeh *int `gorm:"column:age_56_nemeh" json:"age_56_nemeh"`
}

type WorkYaerGroup struct {
	Years01_06  *int `gorm:"column:years_01_06" json:"years_01_06"`
	Years07_12  *int `gorm:"column:years_07_12" json:"years_07_12"`
	Years13_17  *int `gorm:"column:years_13_17" json:"years_13_17"`
	Years18_27  *int `gorm:"column:years_18_27" json:"years_18_27"`
	Years28_32  *int `gorm:"column:years_28_32" json:"years_28_32"`
	Years33Plus *int `gorm:"column:years_33_plus" json:"years_33_plus"`
}
type TomilsonOgnooYear struct {
	Niit           *int `gorm:"column:niit_hun" json:"niit_hun"`
	Count1984_1993 *int `gorm:"column:count_1984_1993" json:"count_1984_1993"`
	Count1994_2004 *int `gorm:"column:count_1994_2004" json:"count_1994_2004"`
	Count2005_2010 *int `gorm:"column:count_2005_2010" json:"count_2005_2010"`
	Count2011_2015 *int `gorm:"column:count_2011_2015" json:"count_2011_2015"`
	Count2016_2020 *int `gorm:"column:count_2016_2020" json:"count_2016_2020"`
	Count2021_2025 *int `gorm:"column:count_2021_2025" json:"count_2021_2025"`
}

type SearchByRetired struct {
	Niit *int `gorm:"column:niit" json:"niit"`
	Jil  *int `gorm:"column:jil" json:"jil"`
}

type SearchBySuutsTorol struct {
	OronSuuts    *int `gorm:"column:oron_suuts" json:"oron_suuts"`
	Baishin      *int `gorm:"column:baishin" json:"baishin"`
	BiyeDaasan   *int `gorm:"column:biye_daasan" json:"biye_daasan"`
	Busdiin      *int `gorm:"column:busdiin" json:"busdiin"`
	Huvi         *int `gorm:"column:huvi" json:"huvi"`
	Turees       *int `gorm:"column:turees" json:"turees"`
	ShuuhiinBair *int `gorm:"column:shuuhiin_bair" json:"shuuhiin_bair"`
}
type TomilsonOgnoo struct {
	StartYear                *time.Time `gorm:"column:start_year" json:"start_year"`
	EndYear                  *time.Time `gorm:"column:end_year" json:"end_year"`
	CountAlbanTushaalBurtgel *int       `gorm:"column:count_alban_tushaal_burtgel" json:"count_alban_tushaal_burtgel"`
}

type ShuugcheerCholoolson struct {
	Cholooldson *int `gorm:"column:cholooldson" json:"cholooldson"`
	Ogtsorson   *int `gorm:"column:ogtsorson" json:"ogtsorson"`
	Nasbarsan   *int `gorm:"column:nasbarsan" json:"nasbarsan"`
}

type NiitOrgodol struct {
	Niit      *int `gorm:"column:niit" json:"niit"`
	Count2020 *int `gorm:"column:count_2020" json:"count_2020"`
	Count2021 *int `gorm:"column:count_2021" json:"count_2021"`
	Count2022 *int `gorm:"column:count_2022" json:"count_2022"`
	Count2023 *int `gorm:"column:count_2023" json:"count_2023"`
	Count2024 *int `gorm:"column:count_2024" json:"count_2024"`
	Count2025 *int `gorm:"column:count_2025" json:"count_2025"`
	Count2026 *int `gorm:"column:count_2026" json:"count_2026"`
	Count2027 *int `gorm:"column:count_2027" json:"count_2027"`
}

type AjilsanJilCroup struct {
	WorkedYears  *string `gorm:"column:worked_years" json:"worked_years"`
	AnkhanCount  *int    `gorm:"column:ankhan_count" json:"ankhan_count"`
	DavakhCount  *int    `gorm:"column:davakh_count" json:"davakh_count"`
	HyanakhCount *int    `gorm:"column:hyanakh_count" json:"hyanakh_count"`
	Niit         *int    `gorm:"column:niit" json:"niit"`
}
