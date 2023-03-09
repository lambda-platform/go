package bootstrap

import (
	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/chart"
	"github.com/lambda-platform/lambda/config"
	"github.com/lambda-platform/lambda/crudlogger"
	"github.com/lambda-platform/lambda/notify"
	"lambda/app/middlewares"
	"lambda/lambda/graph"
	"lambda/lambda/models/form/caller"
	gridCaller "lambda/lambda/models/grid/caller"
	/*
		|----------------------------------------------
		| Generated Models
		|----------------------------------------------
	*/
	"github.com/lambda-platform/lambda"
	"github.com/lambda-platform/lambda/agent"
	"github.com/lambda-platform/lambda/exportImport"
	"github.com/lambda-platform/lambda/krud"
	"github.com/lambda-platform/lambda/puzzle"

	/*
		|----------------------------------------------
		| PRO MODULES
		|----------------------------------------------
	*/

	"github.com/lambda-platform/lambda/moqup"
	"lambda/routes"
)

func Set() *lambda.Lambda {
	/*
		|----------------------------------------------
		| Lambda Platform
		|----------------------------------------------
	*/
	Lambda := lambda.New(&lambda.Settings{
		ModuleName: "lambda",
	})
	middlewares.Set(Lambda.App)
	KrudMiddleWares := []fiber.Handler{}

	if config.LambdaConfig.Notify.FirebaseConfig.APIKey != "" && config.LambdaConfig.Notify.FirebaseConfig.AppID != "" {
		notify.Set(Lambda.App)
		KrudMiddleWares = append(KrudMiddleWares, notify.MW(gridCaller.GetMODEL, caller.GetMODEL))
	}
	if config.LambdaConfig.WithCrudLog {
		crudlogger.Set(Lambda.App)
		KrudMiddleWares = append(KrudMiddleWares, crudlogger.MW(gridCaller.GetMODEL, caller.GetMODEL))
	}
	agent.Set(Lambda.App)
	krud.Set(Lambda.App, gridCaller.GetMODEL, caller.GetMODEL, KrudMiddleWares, true)

	exportImport.Set(Lambda.App)
	/*
		|----------------------------------------------
		| MODULES
		|----------------------------------------------
	*/
	graph.Set(Lambda.App)
	puzzle.Set(Lambda.App, Lambda.ModuleName, gridCaller.GetMODEL, false, true)
	chart.Set(Lambda.App)
	moqup.Set(Lambda.App)

	/*
		|----------------------------------------------
		| OAuth 2 for Lambda
		|----------------------------------------------
	*/
	//oauth2.Set(Lambda.App)
	/*
		|----------------------------------------------
		| ROUTES
		|----------------------------------------------
	*/
	routes.Api(Lambda.App)
	routes.Web(Lambda.App)

	return Lambda
}
