package controllers

import (
	"fmt"
	"github.com/lambda-platform/lambda/DB"
	"lambda/app/models"
	"lambda/lambda/models/form/formModels"
)

func AfterUpdateCandidateExamResult(newData interface{}) {
	CandidateExamResult := newData.(*formModels.CandidateExamResult465)

	if CandidateExamResult.IsConfirmed {
		var CandidateExamScores []models.CandidateExamScore

		DB.DB.Where("candidate_exam_result_id = ?", CandidateExamResult.ID).Find(&CandidateExamScores)

		var vacancy models.SubAdvertisement
		DB.DB.Where("id = ?", CandidateExamResult.VacancyID).Find(&vacancy)

		if vacancy.ID >= 1 {

			var albanTushaal models.LutAlbanTushaal
			DB.DB.Where("id = ?", vacancy.AlbanTushaalID).Find(&albanTushaal)

			selectedCount := 0

			for _, CandidateExamScore := range CandidateExamScores {
				if CandidateExamScore.Status == "Шүүгчээр шалгарсан" {
					selectedCount++
				}
			}

			if selectedCount == vacancy.Vacancy {
				for i, CandidateExamScore := range CandidateExamScores {
					fmt.Println(i, CandidateExamScore)

					if CandidateExamScore.Status == "Шүүгчээр шалгарсан" {

						AlbanTushaalBurtgel := models.AlbanTushaalBurtgel{}

						DB.DB.Where("user_id = ? AND alban_tushaal_id = ?", CandidateExamScore.UserID, albanTushaal.ID).Find(&AlbanTushaalBurtgel)

						if AlbanTushaalBurtgel.ID == 0 {

							albanTushaal.Vacancy = albanTushaal.Vacancy - 1
							DB.DB.Save(&albanTushaal)

							AlbanTushaalBurtgel.UserID = CandidateExamScore.UserID
							AlbanTushaalBurtgel.AlbanTushaalID = albanTushaal.ID
							AlbanTushaalBurtgel.BaiguullagaID = albanTushaal.OrgID
							AlbanTushaalBurtgel.GazarHeltesID = albanTushaal.GazarHeltesID
							AlbanTushaalBurtgel.AlbaTushaalTorolID = albanTushaal.AlbaTushaalTorolID
							AlbanTushaalBurtgel.ShuuhShatID = albanTushaal.CourtTypeID
							AlbanTushaalBurtgel.TypeJudicialPositionID = albanTushaal.TypeJudicialPositionID
							AlbanTushaalBurtgel.ShuugchiinTurulID = vacancy.ShuugchiinTorolID
							AlbanTushaalBurtgel.CourtTypeID = vacancy.CourtTypeID

							AlbanTushaalBurtgel.ZarilagFile = CandidateExamResult.Protocol
							AlbanTushaalBurtgel.TomilsonOgnoo = CandidateExamResult.PresidentDate
							AlbanTushaalBurtgel.ZarilagDugaar = CandidateExamResult.PresidentOrder

							AlbanTushaalBurtgel.TolovID = 1

							DB.DB.Create(&AlbanTushaalBurtgel)

							shalgarsanUser := models.Users{}
							Anket := models.AnketTable{}

							DB.DB.Where("id =?", CandidateExamScore.UserID).Find(&shalgarsanUser)
							DB.DB.Where("user_id =?", CandidateExamScore.UserID).Find(&Anket)

							if Anket.ID >= 1 {
								Anket.ShuugchTolovID = 1
								DB.DB.Save(&Anket)
							}

							if shalgarsanUser.ID >= 1 {
								shalgarsanUser.OrgID = &albanTushaal.OrgID
								shalgarsanUser.GazarHeltesID = albanTushaal.GazarHeltesID
								Role := 6
								shalgarsanUser.Role = &Role
								DB.DB.Save(&shalgarsanUser)
							}
						}

					}

				}
			}

		}

	}

}

func AfterInsertAdmin(newData interface{}) {
	//news := newData.(*formModels.EoNews29)

}

func AfterInsertAudit(newData interface{}) {
	//news := newData.(*formModels.EoNews29)

}
