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

	case "18":
		return grid.VUsers18Datagrid

	case "19":
		return grid.VEvent19Datagrid

	case "20":
		return grid.LutRiskType20Datagrid

	case "21":
		return grid.CoOrganizations21Datagrid

	case "22":
		return grid.LutNewsType22Datagrid

	case "25":
		return grid.VOrganization25Datagrid

	case "26":
		return grid.LutPackage26Datagrid

	case "27":
		return grid.VEmployee27Datagrid

	case "23":
		return grid.VNews23Datagrid

	}
	return datagrid.Datagrid{}

}
