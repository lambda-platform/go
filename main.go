package main

import (
	"fmt"
	"github.com/lambda-platform/lambda/generator"
	"lambda/bootstrap"

	"os"
)

func main() {
	if len(os.Args) < 2 {

		lambda := bootstrap.Set()
		lambda.Start()

	} else {
		command := os.Args[1]

		switch command {
		case "generate":
			bootstrap.Generate()
		case "table":
			if len(os.Args) < 3 {
				fmt.Println("Please provide table name: table your-table-name")
			} else {
				table := os.Args[2]
				generator.GetStruct(table)
			}
		default:
			fmt.Printf("Unknown command: %s\n", command)
			os.Exit(1)
		}
	}

}
