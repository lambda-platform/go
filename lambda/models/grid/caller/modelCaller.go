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

	case "2":
		return grid.Category2Datagrid

	case "6":
		return grid.ViewProduct6Datagrid

	case "9":
		return grid.ViewCustomer9Datagrid

	case "12":
		return grid.ViewOrder12Datagrid

	}
	return datagrid.Datagrid{}

}
