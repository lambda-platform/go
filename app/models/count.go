package models

type ViewAdvertisementCountByType struct {
	CourtTypeID         *int    `gorm:"column:court_type_id" json:"court_type_id"`
	CourtType           *string `gorm:"column:court_type" json:"court_type"`
	AddedThisMonthCount *int    `gorm:"column:added_this_month_count" json:"added_this_month_count"`
	AddedThisYearCount  *int    `gorm:"column:added_this_year_count" json:"added_this_year_count"`
}

func (v *ViewAdvertisementCountByType) TableName() string {
	return "view_advertisement_count_by_type"
}

type ViewZarWebAllNew struct {
	AnhanShat                      *int `gorm:"column:anhan_shat" json:"anhan_shat"`
	DavjZaaldah                    *int `gorm:"column:davj_zaaldah" json:"davj_zaaldah"`
	Hytalt                         *int `gorm:"column:hytalt" json:"hytalt"`
	AddedThisYearCountAnhanShat    *int `gorm:"column:added_this_year_count_anhan_shat" json:"added_this_year_count_anhan_shat"`
	AddedThisYearCountDavjZaaldah  *int `gorm:"column:added_this_year_count_davj_zaaldah" json:"added_this_year_count_davj_zaaldah"`
	AddedThisYearCountHytalt       *int `gorm:"column:added_this_year_count_hytalt" json:"added_this_year_count_hytalt"`
	AddedThisMonthCountAnhanShat   *int `gorm:"column:added_this_month_count_anhan_shat" json:"added_this_month_count_anhan_shat"`
	AddedThisMonthCountDavjZaaldah *int `gorm:"column:added_this_month_count_davj_zaaldah" json:"added_this_month_count_davj_zaaldah"`
	AddedThisMonthCountHytalt      *int `gorm:"column:added_this_month_count_hytalt" json:"added_this_month_count_hytalt"`
}

func (v *ViewZarWebAllNew) TableName() string {
	return "view_zar_web_all_new"
}
