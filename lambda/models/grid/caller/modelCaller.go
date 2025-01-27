package caller

import "lambda/lambda/models/grid"
import "github.com/lambda-platform/lambda/datagrid"

func GetMODEL(schema_id string) datagrid.Datagrid {

	switch schema_id {

	case "crud_grid":
		return grid.KrudGridDatagrid

	case "crud_log":
		return grid.CrudLogDatagrid

	case "analytic_grid":
		return grid.AnalyticGridDatagrid

	case "menu_grid":
		return grid.MenuGridDatagrid

	case "notification_target_grid":
		return grid.NotificationTargetDatagrid

	case "5":
		return grid.Map5Datagrid

	case "6":
		return grid.ViewMapLayerCategory6Datagrid

	case "7":
		return grid.ViewMapLayers7Datagrid

	case "15":
		return grid.ViewWorkflow15Datagrid

	case "17":
		return grid.WorkflowSystemType17Datagrid

	case "19":
		return grid.ExampleChildConfig19Datagrid

	case "18":
		return grid.Example18Datagrid

	case "20":
		return grid.ExampleFullAccessUser20Datagrid

	case "21":
		return grid.Example21Datagrid

	case "28":
		return grid.Banner28Datagrid

	case "36":
		return grid.VCooperation36Datagrid

	case "30":
		return grid.AboutUs30Datagrid

	case "32":
		return grid.AboutWeb32Datagrid

	case "34":
		return grid.ContactUs34Datagrid

	case "62":
		return grid.LutFaqType62Datagrid

	case "38":
		return grid.VFeedbck38Datagrid

	case "40":
		return grid.VHelp40Datagrid

	case "42":
		return grid.VNews42Datagrid

	case "44":
		return grid.Privacy44Datagrid

	case "46":
		return grid.LutFeedbackType46Datagrid

	case "48":
		return grid.LutHelpType48Datagrid

	case "50":
		return grid.LutNewsType50Datagrid

	case "52":
		return grid.LutPartnerType52Datagrid

	case "54":
		return grid.LutServiceType54Datagrid

	case "56":
		return grid.VTermService56Datagrid

	case "58":
		return grid.LutTermService58Datagrid

	case "60":
		return grid.VFaq60Datagrid

	case "16":
		return grid.ViewWorkflowCategory16Datagrid

	case "69":
		return grid.ProcessStep69Datagrid

	}
	return datagrid.Datagrid{}

}
