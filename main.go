package main

import (
	"lambda/bootstrap"
)

func main() {

	lambda := bootstrap.Set()
	//DBSchema.GetStruct("oauth_clients")
	//DBSchema.GetStruct("VB_SCHEMAS_ADMIN")
	lambda.Start()

}
