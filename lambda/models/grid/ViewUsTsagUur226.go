package grid

import "github.com/lambda-platform/lambda/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type ViewUsTsagUur226 struct {
	Aimagname            *string `gorm:"column:aimagname" json:"aimagname"`
	Angi                 *string `gorm:"column:angi" json:"angi"`
	AyultUzegdelDedTorol *string `gorm:"column:ayult_uzegdel_ded_torol" json:"ayult_uzegdel_ded_torol"`
	AyultUzegdelTorol    *string `gorm:"column:ayult_uzegdel_torol" json:"ayult_uzegdel_torol"`
	Bagname              *string `gorm:"column:bagname" json:"bagname"`
	EhSurvalj            *string `gorm:"column:eh_survalj" json:"eh_survalj"`
	ID                   *int    `gorm:"column:id" json:"id"`
	InfoSource           *string `gorm:"column:info_source" json:"info_source"`
	Salbar               *string `gorm:"column:salbar" json:"salbar"`
	Sumname              *string `gorm:"column:sumname" json:"sumname"`
	Tsol                 *string `gorm:"column:tsol" json:"tsol"`
}

type UsTsagUurGaraltaiAubMainTable226 struct {
	ATeHNegjID                         *int       `gorm:"column:a_te_h_negj_id" json:"a_te_h_negj_id"`
	AgaarTempratur                     *string    `gorm:"column:agaar_tempratur" json:"agaar_tempratur"`
	Aimagid                            *int       `gorm:"column:aimagid" json:"aimagid"`
	AngiID                             *int       `gorm:"column:angi_id" json:"angi_id"`
	AvsanArgaFile                      *string    `gorm:"column:avsan_arga_file" json:"avsan_arga_file"`
	AyangaEseh                         *int       `gorm:"column:ayanga_eseh" json:"ayanga_eseh"`
	AyangaNasBarsan                    *int       `gorm:"column:ayanga_nas_barsan" json:"ayanga_nas_barsan"`
	AyangaNasBarsanEseh                *int       `gorm:"column:ayanga_nas_barsan_eseh" json:"ayanga_nas_barsan_eseh"`
	AyangaNasBarsanHNegjID             *int       `gorm:"column:ayanga_nas_barsan_h_negj_id" json:"ayanga_nas_barsan_h_negj_id"`
	AyangaNerHun                       *int       `gorm:"column:ayanga_ner_hun" json:"ayanga_ner_hun"`
	AyangaNerHunHNegjID                *int       `gorm:"column:ayanga_ner_hun_h_negj_id" json:"ayanga_ner_hun_h_negj_id"`
	AyangaNervegdsenHunAravEseh        *int       `gorm:"column:ayanga_nervegdsen_hun_arav_eseh" json:"ayanga_nervegdsen_hun_arav_eseh"`
	AyangaUchirsanBHHoyor              *int       `gorm:"column:ayanga_uchirsan_b_h_hoyor" json:"ayanga_uchirsan_b_h_hoyor"`
	AyangaUchirsanBHHoyorEseh          *int       `gorm:"column:ayanga_uchirsan_b_h_hoyor_eseh" json:"ayanga_uchirsan_b_h_hoyor_eseh"`
	AyangaUchirsanBHHoyorHNegjID       *int       `gorm:"column:ayanga_uchirsan_b_h_hoyor_h_negj_id" json:"ayanga_uchirsan_b_h_hoyor_h_negj_id"`
	AyultDOgnoo                        *time.Time `gorm:"column:ayult_d_ognoo" json:"ayult_d_ognoo"`
	AyultEOgnoo                        *time.Time `gorm:"column:ayult_e_ognoo" json:"ayult_e_ognoo"`
	AyultUDedTorolID                   *int       `gorm:"column:ayult_u_ded_torol_id" json:"ayult_u_ded_torol_id"`
	AyultUTorolID                      *int       `gorm:"column:ayult_u_torol_id" json:"ayult_u_torol_id"`
	BAngiid                            *int       `gorm:"column:b_angiid" json:"b_angiid"`
	BGarUseg                           *string    `gorm:"column:b_gar_useg" json:"b_gar_useg"`
	BNer                               *string    `gorm:"column:b_ner" json:"b_ner"`
	BOvog                              *string    `gorm:"column:b_ovog" json:"b_ovog"`
	BSalbarid                          *int       `gorm:"column:b_salbarid" json:"b_salbarid"`
	BTsolID                            *int       `gorm:"column:b_tsol_id" json:"b_tsol_id"`
	BaAngiid                           *int       `gorm:"column:ba_angiid" json:"ba_angiid"`
	BaGarUseg                          *string    `gorm:"column:ba_gar_useg" json:"ba_gar_useg"`
	BaNer                              *string    `gorm:"column:ba_ner" json:"ba_ner"`
	BaOvog                             *string    `gorm:"column:ba_ovog" json:"ba_ovog"`
	BaSalbarid                         *int       `gorm:"column:ba_salbarid" json:"ba_salbarid"`
	BaTsolid                           *int       `gorm:"column:ba_tsolid" json:"ba_tsolid"`
	Bagid                              *int       `gorm:"column:bagid" json:"bagid"`
	Bairshil                           *string    `gorm:"column:bairshil" json:"bairshil"`
	BatAlbantushaalid                  *int       `gorm:"column:bat_albantushaalid" json:"bat_albantushaalid"`
	BatAngiid                          *int       `gorm:"column:bat_angiid" json:"bat_angiid"`
	BatGarUseg                         *string    `gorm:"column:bat_gar_useg" json:"bat_gar_useg"`
	BatNer                             *string    `gorm:"column:bat_ner" json:"bat_ner"`
	BatOvog                            *string    `gorm:"column:bat_ovog" json:"bat_ovog"`
	BatSalbarid                        *int       `gorm:"column:bat_salbarid" json:"bat_salbarid"`
	BatTsolid                          *int       `gorm:"column:bat_tsolid" json:"bat_tsolid"`
	BatalgaaAlbanTushaalID             *int       `gorm:"column:batalgaa_alban_tushaal_id" json:"batalgaa_alban_tushaal_id"`
	BatalgaaAngiID                     *int       `gorm:"column:batalgaa_angi_id" json:"batalgaa_angi_id"`
	BatalgaaGarUseg                    *string    `gorm:"column:batalgaa_gar_useg" json:"batalgaa_gar_useg"`
	BatalgaaNerID                      *int       `gorm:"column:batalgaa_ner_id" json:"batalgaa_ner_id"`
	BatalgaaOvogID                     *int       `gorm:"column:batalgaa_ovog_id" json:"batalgaa_ovog_id"`
	BatalgaaSalbarID                   *int       `gorm:"column:batalgaa_salbar_id" json:"batalgaa_salbar_id"`
	BatalgaaTsolID                     *int       `gorm:"column:batalgaa_tsol_id" json:"batalgaa_tsol_id"`
	BatalgaajAlbanTushaalID            *int       `gorm:"column:batalgaaj_alban_tushaal_id" json:"batalgaaj_alban_tushaal_id"`
	BatalgaajGarUseg                   *string    `gorm:"column:batalgaaj_gar_useg" json:"batalgaaj_gar_useg"`
	BatalgaajNer                       *string    `gorm:"column:batalgaaj_ner" json:"batalgaaj_ner"`
	BatalgaajOgnoo                     *DB.Date   `gorm:"column:batalgaaj_ognoo" json:"batalgaaj_ognoo"`
	BatalgaajOvog                      *string    `gorm:"column:batalgaaj_ovog" json:"batalgaaj_ovog"`
	BatalgaajiltAngiID                 *int       `gorm:"column:batalgaajilt_angi_id" json:"batalgaajilt_angi_id"`
	BatalgaajiltDuudlagaOgnoo          *time.Time `gorm:"column:batalgaajilt_duudlaga_ognoo" json:"batalgaajilt_duudlaga_ognoo"`
	BatalgaajiltGarUseg                *string    `gorm:"column:batalgaajilt_gar_useg" json:"batalgaajilt_gar_useg"`
	BatalgaajiltNer                    *string    `gorm:"column:batalgaajilt_ner" json:"batalgaajilt_ner"`
	BatalgaajiltOvog                   *string    `gorm:"column:batalgaajilt_ovog" json:"batalgaajilt_ovog"`
	BatalgaajiltSalbarID               *int       `gorm:"column:batalgaajilt_salbar_id" json:"batalgaajilt_salbar_id"`
	BatalgaajiltTsolID                 *int       `gorm:"column:batalgaajilt_tsol_id" json:"batalgaajilt_tsol_id"`
	CreatedAt                          *time.Time `gorm:"column:created_at" json:"created_at"`
	DeletedAt                          *time.Time `gorm:"column:deleted_at" json:"deleted_at"`
	ErenHaihAjilgaaDOgnoo              *time.Time `gorm:"column:eren_haih_ajilgaa_d_ognoo" json:"eren_haih_ajilgaa_d_ognoo"`
	ErenHaihAjilgaaEOgnoo              *time.Time `gorm:"column:eren_haih_ajilgaa_e_ognoo" json:"eren_haih_ajilgaa_e_ognoo"`
	FormID                             *int       `gorm:"column:form_id" json:"form_id"`
	GanAgaarChiig                      *int       `gorm:"column:gan_agaar_chiig" json:"gan_agaar_chiig"`
	GanAgaarChiigEseh                  *int       `gorm:"column:gan_agaar_chiig_eseh" json:"gan_agaar_chiig_eseh"`
	GanAgaarChiigHNegjID               *int       `gorm:"column:gan_agaar_chiig_h_negj_id" json:"gan_agaar_chiig_h_negj_id"`
	GanEseh                            *int       `gorm:"column:gan_eseh" json:"gan_eseh"`
	GanHamarsanNutag                   *int       `gorm:"column:gan_hamarsan_nutag" json:"gan_hamarsan_nutag"`
	GanHamarsanNutagEseh               *int       `gorm:"column:gan_hamarsan_nutag_eseh" json:"gan_hamarsan_nutag_eseh"`
	GanHamarsanNutagHNegjID            *int       `gorm:"column:gan_hamarsan_nutag_h_negj_id" json:"gan_hamarsan_nutag_h_negj_id"`
	GanHorogdsonMal                    *int       `gorm:"column:gan_horogdson_mal" json:"gan_horogdson_mal"`
	GanHorogdsonMalEseh                *int       `gorm:"column:gan_horogdson_mal_eseh" json:"gan_horogdson_mal_eseh"`
	GanHorogdsonMalHNegjID             *int       `gorm:"column:gan_horogdson_mal_h_negj_id" json:"gan_horogdson_mal_h_negj_id"`
	GanJil                             *int       `gorm:"column:gan_jil" json:"gan_jil"`
	GanJilEseh                         *int       `gorm:"column:gan_jil_eseh" json:"gan_jil_eseh"`
	GanJilHNegjID                      *int       `gorm:"column:gan_jil_h_negj_id" json:"gan_jil_h_negj_id"`
	GanNerHun                          *int       `gorm:"column:gan_ner_hun" json:"gan_ner_hun"`
	GanNerHunEseh                      *int       `gorm:"column:gan_ner_hun_eseh" json:"gan_ner_hun_eseh"`
	GanNerHunHNegjID                   *int       `gorm:"column:gan_ner_hun_h_negj_id" json:"gan_ner_hun_h_negj_id"`
	GanThAj                            *int       `gorm:"column:gan_th_aj" json:"gan_th_aj"`
	GanThAjEseh                        *int       `gorm:"column:gan_th_aj_eseh" json:"gan_th_aj_eseh"`
	GanThAjHNegjID                     *int       `gorm:"column:gan_th_aj_h_negj_id" json:"gan_th_aj_h_negj_id"`
	GanTuhainOron                      *int       `gorm:"column:gan_tuhain_oron" json:"gan_tuhain_oron"`
	GanTuhainOronEseh                  *int       `gorm:"column:gan_tuhain_oron_eseh" json:"gan_tuhain_oron_eseh"`
	GanTuhainOronHNegjID               *int       `gorm:"column:gan_tuhain_oron_h_negj_id" json:"gan_tuhain_oron_h_negj_id"`
	GanUchirsanHohirol                 *int       `gorm:"column:gan_uchirsan_hohirol" json:"gan_uchirsan_hohirol"`
	GanUchirsanHohirolEseh             *int       `gorm:"column:gan_uchirsan_hohirol_eseh" json:"gan_uchirsan_hohirol_eseh"`
	GanUchirsanHohirolHNegjID          *int       `gorm:"column:gan_uchirsan_hohirol_h_negj_id" json:"gan_uchirsan_hohirol_h_negj_id"`
	GanUrgeljHugatsaa                  *int       `gorm:"column:gan_urgelj_hugatsaa" json:"gan_urgelj_hugatsaa"`
	GanUrgeljHugatsaaEseh              *int       `gorm:"column:gan_urgelj_hugatsaa_eseh" json:"gan_urgelj_hugatsaa_eseh"`
	GanUrgeljHugatsaaHNegjID           *int       `gorm:"column:gan_urgelj_hugatsaa_h_negj_id" json:"gan_urgelj_hugatsaa_h_negj_id"`
	GarUseg                            *string    `gorm:"column:gar_useg" json:"gar_useg"`
	HHNegjID                           *int       `gorm:"column:h_h_negj_id" json:"h_h_negj_id"`
	HoishluulashguUilADOgnoo           *time.Time `gorm:"column:hoishluulashgu_uil_a_d_ognoo" json:"hoishluulashgu_uil_a_d_ognoo"`
	HoishluulashguUilAEOgnoo           *time.Time `gorm:"column:hoishluulashgu_uil_a_e_ognoo" json:"hoishluulashgu_uil_a_e_ognoo"`
	HuHuNervegdsenHunToo               *int       `gorm:"column:hu_hu_nervegdsen_hun_too" json:"hu_hu_nervegdsen_hun_too"`
	HuHuSalhiDedButetsEseh             *int       `gorm:"column:hu_hu_salhi_ded_butets_eseh" json:"hu_hu_salhi_ded_butets_eseh"`
	HuHuSalhiDundajHurd                *int       `gorm:"column:hu_hu_salhi_dundaj_hurd" json:"hu_hu_salhi_dundaj_hurd"`
	HuHuSalhiDundajHurdHNegjID         *int       `gorm:"column:hu_hu_salhi_dundaj_hurd_h_negj_id" json:"hu_hu_salhi_dundaj_hurd_h_negj_id"`
	HuHuSalhiDundajHurdTunees          *int       `gorm:"column:hu_hu_salhi_dundaj_hurd_tunees" json:"hu_hu_salhi_dundaj_hurd_tunees"`
	HuHuSalhiHamarsanNutagEseh         *int       `gorm:"column:hu_hu_salhi_hamarsan_nutag_eseh" json:"hu_hu_salhi_hamarsan_nutag_eseh"`
	HuHuSalhiHamarsanNutagHNegjID      *int       `gorm:"column:hu_hu_salhi_hamarsan_nutag_h_negj_id" json:"hu_hu_salhi_hamarsan_nutag_h_negj_id"`
	HuHuSalhiHamarsanNutagHuviToo      *int       `gorm:"column:hu_hu_salhi_hamarsan_nutag_huvi_too" json:"hu_hu_salhi_hamarsan_nutag_huvi_too"`
	HuHuSalhiNasBarsanHun              *int       `gorm:"column:hu_hu_salhi_nas_barsan_hun" json:"hu_hu_salhi_nas_barsan_hun"`
	HuHuSalhiNasBarsanHunHNegjID       *int       `gorm:"column:hu_hu_salhi_nas_barsan_hun_h_negj_id" json:"hu_hu_salhi_nas_barsan_hun_h_negj_id"`
	HuHuSalhiNasBarsanHunToo           *int       `gorm:"column:hu_hu_salhi_nas_barsan_hun_too" json:"hu_hu_salhi_nas_barsan_hun_too"`
	HuHuSalhiNervegdsenHun             *int       `gorm:"column:hu_hu_salhi_nervegdsen_hun" json:"hu_hu_salhi_nervegdsen_hun"`
	HuHuSalhiNervegdsenHunHNegjID      *int       `gorm:"column:hu_hu_salhi_nervegdsen_hun_h_negj_id" json:"hu_hu_salhi_nervegdsen_hun_h_negj_id"`
	HuHuSalhiUchirsanNutsgTosovEseh    *int       `gorm:"column:hu_hu_salhi_uchirsan_nutsg_tosov_eseh" json:"hu_hu_salhi_uchirsan_nutsg_tosov_eseh"`
	HuHuSalhiUchirsanNutsgTosovHNegjID *int       `gorm:"column:hu_hu_salhi_uchirsan_nutsg_tosov_h_negj_id" json:"hu_hu_salhi_uchirsan_nutsg_tosov_h_negj_id"`
	HuHuSalhiUchirsanNutsgTosovToo     *int       `gorm:"column:hu_hu_salhi_uchirsan_nutsg_tosov_too" json:"hu_hu_salhi_uchirsan_nutsg_tosov_too"`
	HuHuSalhiUlsadHohirolEseh          *int       `gorm:"column:hu_hu_salhi_ulsad_hohirol_eseh" json:"hu_hu_salhi_ulsad_hohirol_eseh"`
	HuiSalhi                           *int       `gorm:"column:hui_salhi" json:"hui_salhi"`
	Huis                               *string    `gorm:"column:huis" json:"huis"`
	HurTundas                          *string    `gorm:"column:hur_tundas" json:"hur_tundas"`
	ID                                 int        `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	InfoSourceID                       *int       `gorm:"column:info_source_id" json:"info_source_id"`
	MHNegjID                           *int       `gorm:"column:m_h_negj_id" json:"m_h_negj_id"`
	MedeeAvsanOgnoo                    *time.Time `gorm:"column:medee_avsan_ognoo" json:"medee_avsan_ognoo"`
	MedeelelOruulsanBaidal             *string    `gorm:"column:medeelel_oruulsan_baidal" json:"medeelel_oruulsan_baidal"`
	Mondor                             *string    `gorm:"column:mondor" json:"mondor"`
	Ner                                *string    `gorm:"column:ner" json:"ner"`
	Ners                               *string    `gorm:"column:ners" json:"ners"`
	Ovog                               *string    `gorm:"column:ovog" json:"ovog"`
	Ovogs                              *string    `gorm:"column:ovogs" json:"ovogs"`
	SalbarID                           *int       `gorm:"column:salbar_id" json:"salbar_id"`
	SalhiHemjihNegjID                  *int       `gorm:"column:salhi_hemjih_negj_id" json:"salhi_hemjih_negj_id"`
	SalhiHurd                          *string    `gorm:"column:salhi_hurd" json:"salhi_hurd"`
	SourceID                           *int       `gorm:"column:source_id" json:"source_id"`
	Sumid                              *int       `gorm:"column:sumid" json:"sumid"`
	TovchUtga                          *string    `gorm:"column:tovch_utga" json:"tovch_utga"`
	TsasAlsBaraa                       *int       `gorm:"column:tsas_als_baraa" json:"tsas_als_baraa"`
	TsasAlsBaraaEseh                   *int       `gorm:"column:tsas_als_baraa_eseh" json:"tsas_als_baraa_eseh"`
	TsasAlsBaraaHNegjID                *int       `gorm:"column:tsas_als_baraa_h_negj_id" json:"tsas_als_baraa_h_negj_id"`
	TsasDedButetsEseh                  *int       `gorm:"column:tsas_ded_butets_eseh" json:"tsas_ded_butets_eseh"`
	TsasHamarsanNutag                  *int       `gorm:"column:tsas_hamarsan_nutag" json:"tsas_hamarsan_nutag"`
	TsasHamarsanNutagEseh              *int       `gorm:"column:tsas_hamarsan_nutag_eseh" json:"tsas_hamarsan_nutag_eseh"`
	TsasHamarsanNutagHNegjID           *int       `gorm:"column:tsas_hamarsan_nutag_h_negj_id" json:"tsas_hamarsan_nutag_h_negj_id"`
	TsasNasBarsan                      *int       `gorm:"column:tsas_nas_barsan" json:"tsas_nas_barsan"`
	TsasNasBarsanEseh                  *int       `gorm:"column:tsas_nas_barsan_eseh" json:"tsas_nas_barsan_eseh"`
	TsasNasBarsanHNegjID               *int       `gorm:"column:tsas_nas_barsan_h_negj_id" json:"tsas_nas_barsan_h_negj_id"`
	TsasNervegdsenArav                 *int       `gorm:"column:tsas_nervegdsen_arav" json:"tsas_nervegdsen_arav"`
	TsasNervegdsenAravEseh             *int       `gorm:"column:tsas_nervegdsen_arav_eseh" json:"tsas_nervegdsen_arav_eseh"`
	TsasNervegdsenAravHNegjID          *int       `gorm:"column:tsas_nervegdsen_arav_h_negj_id" json:"tsas_nervegdsen_arav_h_negj_id"`
	TsasSalhiAravEseh                  *int       `gorm:"column:tsas_salhi_arav_eseh" json:"tsas_salhi_arav_eseh"`
	TsasSalhiDundajHurdToo             *int       `gorm:"column:tsas_salhi_dundaj_hurd_too" json:"tsas_salhi_dundaj_hurd_too"`
	TsasSalhiHNegjid                   *int       `gorm:"column:tsas_salhi_h_negjid" json:"tsas_salhi_h_negjid"`
	TsasShorooShuurgaEseh              *int       `gorm:"column:tsas_shoroo_shuurga_eseh" json:"tsas_shoroo_shuurga_eseh"`
	TsasUchirsanBodit                  *int       `gorm:"column:tsas_uchirsan_bodit" json:"tsas_uchirsan_bodit"`
	TsasUchirsanBoditHNegjID           *int       `gorm:"column:tsas_uchirsan_bodit_h_negj_id" json:"tsas_uchirsan_bodit_h_negj_id"`
	TsasUchirsanNoditEseh              *int       `gorm:"column:tsas_uchirsan_nodit_eseh" json:"tsas_uchirsan_nodit_eseh"`
	TsasUlsOntsEseh                    *int       `gorm:"column:tsas_uls_onts_eseh" json:"tsas_uls_onts_eseh"`
	TsasUrgeljlehHugatsaa              *int       `gorm:"column:tsas_urgeljleh_hugatsaa" json:"tsas_urgeljleh_hugatsaa"`
	TsasUrgeljlehHugatsaaEseh          *int       `gorm:"column:tsas_urgeljleh_hugatsaa_eseh" json:"tsas_urgeljleh_hugatsaa_eseh"`
	TsasUrgeljlehHugatsaaHNegjID       *int       `gorm:"column:tsas_urgeljleh_hugatsaa_h_negj_id" json:"tsas_urgeljleh_hugatsaa_h_negj_id"`
	TsolID                             *int       `gorm:"column:tsol_id" json:"tsol_id"`
	UgtHayg                            *string    `gorm:"column:ugt_hayg" json:"ugt_hayg"`
	UpdatedAt                          *time.Time `gorm:"column:updated_at" json:"updated_at"`
	UsHNegjID                          *int       `gorm:"column:us_h_negj_id" json:"us_h_negj_id"`
	UsTuvshin                          *string    `gorm:"column:us_tuvshin" json:"us_tuvshin"`
	UserID                             *int       `gorm:"column:user_id" json:"user_id"`
	Utas                               *int       `gorm:"column:utas" json:"utas"`
	UyerDedButetsEseh                  *int       `gorm:"column:uyer_ded_butets_eseh" json:"uyer_ded_butets_eseh"`
	UyerGemtelUchirsan                 *int       `gorm:"column:uyer_gemtel_uchirsan" json:"uyer_gemtel_uchirsan"`
	UyerGemtelUchirsanEseh             *int       `gorm:"column:uyer_gemtel_uchirsan_eseh" json:"uyer_gemtel_uchirsan_eseh"`
	UyerGemtelUchirsanHNegjID          *int       `gorm:"column:uyer_gemtel_uchirsan_h_negj_id" json:"uyer_gemtel_uchirsan_h_negj_id"`
	UyerGolMoronEseh                   *int       `gorm:"column:uyer_gol_moron_eseh" json:"uyer_gol_moron_eseh"`
	UyerNbHun                          *int       `gorm:"column:uyer_nb_hun" json:"uyer_nb_hun"`
	UyerNbHunEseh                      *int       `gorm:"column:uyer_nb_hun_eseh" json:"uyer_nb_hun_eseh"`
	UyerNbHunHNegjID                   *int       `gorm:"column:uyer_nb_hun_h_negj_id" json:"uyer_nb_hun_h_negj_id"`
	UyerNervegdsenAj                   *int       `gorm:"column:uyer_nervegdsen_aj" json:"uyer_nervegdsen_aj"`
	UyerNervegdsenAjEseh               *int       `gorm:"column:uyer_nervegdsen_aj_eseh" json:"uyer_nervegdsen_aj_eseh"`
	UyerNervegdsenAjHNegjID            *int       `gorm:"column:uyer_nervegdsen_aj_h_negj_id" json:"uyer_nervegdsen_aj_h_negj_id"`
	UyerNervegdsenHun                  *int       `gorm:"column:uyer_nervegdsen_hun" json:"uyer_nervegdsen_hun"`
	UyerNervegdsenHunEseh              *int       `gorm:"column:uyer_nervegdsen_hun_eseh" json:"uyer_nervegdsen_hun_eseh"`
	UyerNervegdsenHunHNegjID           *int       `gorm:"column:uyer_nervegdsen_hun_h_negj_id" json:"uyer_nervegdsen_hun_h_negj_id"`
	UyerNervegdsenOrh                  *int       `gorm:"column:uyer_nervegdsen_orh" json:"uyer_nervegdsen_orh"`
	UyerNervegdsenOrhEseh              *int       `gorm:"column:uyer_nervegdsen_orh_eseh" json:"uyer_nervegdsen_orh_eseh"`
	UyerNervegdsenOrhHNegjID           *int       `gorm:"column:uyer_nervegdsen_orh_h_negj_id" json:"uyer_nervegdsen_orh_h_negj_id"`
	UyerUchirsan                       *int       `gorm:"column:uyer_uchirsan" json:"uyer_uchirsan"`
	UyerUchirsanEseh                   *int       `gorm:"column:uyer_uchirsan_eseh" json:"uyer_uchirsan_eseh"`
	UyerUchirsanHNegjID                *int       `gorm:"column:uyer_uchirsan_h_negj_id" json:"uyer_uchirsan_h_negj_id"`
	UyrEseh                            *int       `gorm:"column:uyr_eseh" json:"uyr_eseh"`
	ZudAravHonog                       *int       `gorm:"column:zud_arav_honog" json:"zud_arav_honog"`
	ZudAravHonogEseh                   *int       `gorm:"column:zud_arav_honog_eseh" json:"zud_arav_honog_eseh"`
	ZudAravHonogHNegjID                *int       `gorm:"column:zud_arav_honog_h_negj_id" json:"zud_arav_honog_h_negj_id"`
	ZudBelcheer                        *int       `gorm:"column:zud_belcheer" json:"zud_belcheer"`
	ZudBelcheerEseh                    *int       `gorm:"column:zud_belcheer_eseh" json:"zud_belcheer_eseh"`
	ZudBelcheerHNegjID                 *int       `gorm:"column:zud_belcheer_h_negj_id" json:"zud_belcheer_h_negj_id"`
	ZudEseh                            *int       `gorm:"column:zud_eseh" json:"zud_eseh"`
	ZudHamarsanNutag                   *int       `gorm:"column:zud_hamarsan_nutag" json:"zud_hamarsan_nutag"`
	ZudHamarsanNutagEseh               *int       `gorm:"column:zud_hamarsan_nutag_eseh" json:"zud_hamarsan_nutag_eseh"`
	ZudHamarsanNutagHNegjID            *int       `gorm:"column:zud_hamarsan_nutag_h_negj_id" json:"zud_hamarsan_nutag_h_negj_id"`
	ZudHorogdsonMal                    *int       `gorm:"column:zud_horogdson_mal" json:"zud_horogdson_mal"`
	ZudHorogdsonMalEseh                *int       `gorm:"column:zud_horogdson_mal_eseh" json:"zud_horogdson_mal_eseh"`
	ZudHorogdsonMalHNegjID             *int       `gorm:"column:zud_horogdson_mal_h_negj_id" json:"zud_horogdson_mal_h_negj_id"`
	ZudNerHun                          *int       `gorm:"column:zud_ner_hun" json:"zud_ner_hun"`
	ZudNerHunEseh                      *int       `gorm:"column:zud_ner_hun_eseh" json:"zud_ner_hun_eseh"`
	ZudNerHunHNegjID                   *int       `gorm:"column:zud_ner_hun_h_negj_id" json:"zud_ner_hun_h_negj_id"`
	ZudTsasDundaj                      *int       `gorm:"column:zud_tsas_dundaj" json:"zud_tsas_dundaj"`
	ZudTsasDundajEseh                  *int       `gorm:"column:zud_tsas_dundaj_eseh" json:"zud_tsas_dundaj_eseh"`
	ZudTsasDundajHNegjID               *int       `gorm:"column:zud_tsas_dundaj_h_negj_id" json:"zud_tsas_dundaj_h_negj_id"`
	ZudUchirsan                        *int       `gorm:"column:zud_uchirsan" json:"zud_uchirsan"`
	ZudUchirsanEseh                    *int       `gorm:"column:zud_uchirsan_eseh" json:"zud_uchirsan_eseh"`
	ZudUchirsanHNegjID                 *int       `gorm:"column:zud_uchirsan_h_negj_id" json:"zud_uchirsan_h_negj_id"`
	ZudUrgeljHugatsaa                  *int       `gorm:"column:zud_urgelj_hugatsaa" json:"zud_urgelj_hugatsaa"`
	ZudUrgeljHugatsaaEseh              *int       `gorm:"column:zud_urgelj_hugatsaa_eseh" json:"zud_urgelj_hugatsaa_eseh"`
	ZudUrgeljHugatsaaHNegjID           *int       `gorm:"column:zud_urgelj_hugatsaa_h_negj_id" json:"zud_urgelj_hugatsaa_h_negj_id"`
}

func (u *UsTsagUurGaraltaiAubMainTable226) TableName() string {
	return "us_tsag_uur_garaltai_aub"
}

//  TableName sets the insert table name for this struct type
func (v *ViewUsTsagUur226) TableName() string {
	return "view_us_tsag_uur"
}

var ViewUsTsagUur226Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "Ус  цаг уурын гаралтай АҮБ",
	Identity:  "id",
	DataTable: "view_us_tsag_uur",
	MainTable: "us_tsag_uur_garaltai_aub",
	DataModel: new(ViewUsTsagUur226),
	Data:      new([]ViewUsTsagUur226),
	MainModel: new(UsTsagUurGaraltaiAubMainTable226),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "ayult_uzegdel_torol", Label: "Аюулт үзэгдлын төрөл"},
		datagrid.Column{Model: "ayult_uzegdel_ded_torol", Label: "Аюулт үзэгдийн дэд төрөл"},
		datagrid.Column{Model: "aimagname", Label: "Аймаг / Нийслэл"},
		datagrid.Column{Model: "sumname", Label: "Сум, Дүүрэг "},
		datagrid.Column{Model: "bagname", Label: "Баг, Хороо "},
		datagrid.Column{Model: "eh_survalj", Label: "Эх сурвалж"},
		datagrid.Column{Model: "info_source", Label: "Мэдээллийг хүлээн авсан суваг"},
		datagrid.Column{Model: "angi", Label: "Анги"},
		datagrid.Column{Model: "salbar", Label: "Салбар "},
		datagrid.Column{Model: "tsol", Label: "Цол"},
	},
	ColumnList: []string{"id", "ayult_uzegdel_torol", "ayult_uzegdel_ded_torol", "aimagname", "sumname", "bagname", "eh_survalj", "info_source", "angi", "salbar", "tsol"},
	Filters: map[string]string{
		"id": "",

		"ayult_u_torol_id": "",

		"ayult_u_ded_torol_id": "",

		"aimagid": "",

		"sumid": "",

		"bagid": "",

		"bairshil": "",

		"ugt_hayg": "",

		"ovog": "",

		"ner": "",

		"utas": "",

		"huis": "",

		"source_id": "",

		"info_source_id": "",

		"tovch_utga": "",

		"medee_avsan_ognoo": "",

		"ayult_e_ognoo": "",

		"ayult_d_ognoo": "",

		"eren_haih_ajilgaa_e_ognoo": "",

		"eren_haih_ajilgaa_d_ognoo": "",

		"hoishluulashgu_uil_a_e_ognoo": "",

		"hoishluulashgu_uil_a_d_ognoo": "",

		"user_id": "",

		"angi_id": "",

		"salbar_id": "",

		"tsol_id": "",

		"ovogs": "",

		"ners": "",

		"gar_useg": "",

		"salhi_hurd": "",

		"salhi_hemjih_negj_id": "",

		"mondor": "",

		"m_h_negj_id": "",

		"hur_tundas": "",

		"h_h_negj_id": "",

		"agaar_tempratur": "",

		"a_te_h_negj_id": "",

		"us_tuvshin": "",

		"us_h_negj_id": "",

		"avsan_arga_file": "",

		"medeelel_oruulsan_baidal": "",

		"b_angiid": "",

		"b_salbarid": "",

		"b_tsol_id": "",

		"b_ovog": "",

		"b_ner": "",

		"b_gar_useg": "",

		"ba_angiid": "",

		"ba_salbarid": "",

		"ba_tsolid": "",

		"ba_ovog": "",

		"ba_ner": "",

		"ba_gar_useg": "",

		"bat_angiid": "",

		"bat_salbarid": "",

		"bat_albantushaalid": "",

		"bat_tsolid": "",

		"bat_ovog": "",

		"bat_ner": "",

		"bat_gar_useg": "",

		"hu_hu_salhi_dundaj_hurd_tunees": "",

		"hu_hu_salhi_dundaj_hurd": "",

		"hu_hu_salhi_dundaj_hurd_h_negj_id": "",

		"hu_hu_salhi_nervegdsen_hun": "",

		"hu_hu_salhi_nervegdsen_hun_h_negj_id": "",

		"hu_hu_salhi_nas_barsan_hun": "",

		"hu_hu_salhi_nas_barsan_hun_too": "",

		"hu_hu_salhi_nas_barsan_hun_h_negj_id": "",

		"hu_hu_salhi_hamarsan_nutag_eseh": "",

		"hu_hu_salhi_hamarsan_nutag_huvi_too": "",

		"hu_hu_salhi_hamarsan_nutag_h_negj_id": "",

		"hu_hu_salhi_ulsad_hohirol_eseh": "",

		"hu_hu_salhi_ded_butets_eseh": "",

		"hu_hu_salhi_uchirsan_nutsg_tosov_eseh": "",

		"hu_hu_salhi_uchirsan_nutsg_tosov_too": "",

		"hu_hu_salhi_uchirsan_nutsg_tosov_h_negj_id": "",

		"ayult_uzegdel_torol": "",

		"ayult_uzegdel_ded_torol": "",

		"aimagname": "",

		"sumname": "",

		"bagname": "",

		"eh_survalj": "",

		"info_source": "",

		"angi": "",

		"salbar": "",

		"tsol": "",
	},
	Relations:   []models.GridRelation{},
	Condition:   "",
	Aggergation: "",
	BeforeFetch: nil,

	AfterFetch: nil,

	BeforeDelete: nil,

	AfterDelete: nil,

	BeforePrint:        nil,
	TriggerNameSpace:   "",
	FillVirtualColumns: fillVirtualColumnsViewUsTsagUur226,
}

func fillVirtualColumnsViewUsTsagUur226(rowsPre interface{}) interface{} {
	return rowsPre
}
