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
		return form.Users1Dataform()

	case "5":
		return form.Event5Dataform()

	case "6":
		return form.LutRiskType6Dataform()

	case "8":
		return form.LutNewsType8Dataform()

	case "7":
		return form.CoOrganizations7Dataform()

	case "11":
		return form.LutPackage11Dataform()

	case "10":
		return form.Organization10Dataform()

	case "9":
		return form.News9Dataform()

	case "12":
		return form.Employee12Dataform()

	}
	return dataform.Dataform{}

}
