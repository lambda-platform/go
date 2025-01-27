package caller

import "lambda/lambda/models/form"
import "github.com/lambda-platform/lambda/dataform"

func GetMODEL(schema_id string) dataform.Dataform {

	switch schema_id {

	case "crud_form":
		return form.KrudDataform()

	case "notification_target_form":
		return form.NotificationTargetsDataform()

	case "menu_form":
		return form.MenuFormDataform()

	case "user_form":
		return form.UserFormDataform()

	case "user_profile":
		return form.UserProfile()

	case "user_profile_user":
		return form.UserProfile()

	case "user_password":
		return form.UsersDataform()

	case "1":
		return form.Map1Dataform()

	case "2":
		return form.MapLayerCategory2Dataform()

	case "3":
		return form.MapLayerLegends3Dataform()

	case "4":
		return form.MapLayers4Dataform()

	case "12":
		return form.ExampleChildConfig12Dataform()

	case "13":
		return form.ExampleFullAccessUser13Dataform()

	case "14":
		return form.Example14Dataform()

	case "8":
		return form.Workflow8Dataform()

	case "9":
		return form.WorkflowCategory9Dataform()

	case "11":
		return form.Example11Dataform()

	case "27":
		return form.Banner27Dataform()

	case "37":
		return form.Feedback37Dataform()

	case "29":
		return form.AboutUs29Dataform()

	case "31":
		return form.AboutWeb31Dataform()

	case "33":
		return form.ContactUs33Dataform()

	case "35":
		return form.Cooperation35Dataform()

	case "39":
		return form.Help39Dataform()

	case "41":
		return form.News41Dataform()

	case "43":
		return form.Privacy43Dataform()

	case "45":
		return form.LutFeedbackType45Dataform()

	case "47":
		return form.LutHelpType47Dataform()

	case "49":
		return form.LutNewsType49Dataform()

	case "51":
		return form.LutPartnerType51Dataform()

	case "53":
		return form.LutServiceType53Dataform()

	case "55":
		return form.TermsOfService55Dataform()

	case "57":
		return form.LutTermService57Dataform()

	case "59":
		return form.Faq59Dataform()

	case "61":
		return form.LutFaqType61Dataform()

	case "10":
		return form.WorkflowSystemType10Dataform()

	case "64":
		return form.Krud64Dataform()

	case "65":
		return form.VbSchemas65Dataform()

	case "66":
		return form.Users66Dataform()

	case "67":
		return form.NotificationTargets67Dataform()

	case "68":
		return form.ProcessStep68Dataform()

	}
	return dataform.Dataform{}

}
