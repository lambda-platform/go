package form

import (
	"github.com/lambda-platform/lambda/DB"
	"github.com/lambda-platform/lambda/dataform"
	"github.com/lambda-platform/lambda/models"
	"github.com/thedevsaddam/govalidator"
	"lambda/lambda/models/form/formModels"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

func LutNDisasterReason98Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "L Аюулт үзэгдлийн шалтгаан",
		Identity: "id",
		Table:    "lut_n_disaster_reason",
		Model:    new(formModels.LutNDisasterReason98),
		FieldTypes: map[string]string{
			"id":                "Text",
			"n_disaster_reason": "Text",
		},
		Formulas: []models.Formula{},
		ValidationRules: govalidator.MapData{

			"n_disaster_reason": []string{}},
		ValidationMessages: govalidator.MapData{

			"n_disaster_reason": []string{}},
		SubForms:         []map[string]interface{}{},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}
