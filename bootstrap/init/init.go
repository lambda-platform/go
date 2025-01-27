package main

import (
    "github.com/lambda-platform/lambda/DB"
    "github.com/lambda-platform/lambda/DBSchema"
    "github.com/lambda-platform/lambda/config"
    "github.com/lambda-platform/lambda/generator"
    genertarModels "github.com/lambda-platform/lambda/generator/models"
    "os"
    "regexp"
)

func main() {
    var FormSchemas []genertarModels.ProjectSchemas
    var GridSchemas []genertarModels.ProjectSchemas
    var GraphqlSchemas []genertarModels.ProjectSchemas

    if config.Config.Database.Connection == "oracle" {

        DB.DB.Select("ID AS \"id\", NAME AS \"name\", SCHEMA AS \"schema\", \"TYPE\" AS \"type\", CREATED_AT AS \"created_at\", UPDATED_AT AS \"updated_at\"").Where("TYPE = ?", "form").Table("VB_SCHEMAS").Find(&FormSchemas)
        DB.DB.Select("ID AS \"id\", NAME AS \"name\", SCHEMA AS \"schema\", \"TYPE\" AS \"type\", CREATED_AT AS \"created_at\", UPDATED_AT AS \"updated_at\"").Where("TYPE = ?", "grid").Table("VB_SCHEMAS").Find(&GridSchemas)
        DB.DB.Select("ID AS \"id\", NAME AS \"name\", SCHEMA AS \"schema\", \"TYPE\" AS \"type\", CREATED_AT AS \"created_at\", UPDATED_AT AS \"updated_at\"").Where("TYPE = ?", "graphql").Table("VB_SCHEMAS").Find(&GraphqlSchemas)

    } else {
        DB.DB.Where("type = ?", "form").Table("vb_schemas").Find(&FormSchemas)
        DB.DB.Where("type = ?", "grid").Table("vb_schemas").Find(&GridSchemas)
        DB.DB.Where("type = ?", "graphql").Table("vb_schemas").Find(&GraphqlSchemas)
    }

    dbSchema := DBSchema.GetDBSchema()
    /*
       Generate Form, Grid
    */
    generator.ModelInit(dbSchema, FormSchemas, GridSchemas, true, false)
    /*
       Generate GRAPHQL
    */
    generator.GQLInit(dbSchema, GraphqlSchemas)

    /*CREATE META*/

    // Read the contents of the index.html file
    content, err := os.ReadFile("./public/index.html")
    if err != nil {
        panic(err)
    }

    // Define regular expressions for matching the dynamic metadata tags
    urlRegex := regexp.MustCompile(`<meta\s+name="url"\s+content="(.*?)"`)
    typeRegex := regexp.MustCompile(`<meta\s+name="type"\s+content="(.*?)"`)
    titleRegex := regexp.MustCompile(`<title>(.*?)<\/title>`)
    descRegex := regexp.MustCompile(`<meta\s+name="description"\s+content="(.*?)"`)
    imageRegex := regexp.MustCompile(`<meta\s+name="image"\s+content="(.*?)"`)
    ogUrlRegex := regexp.MustCompile(`<meta\s+property="og:url"\s+content="(.*?)"`)
    ogTitleRegex := regexp.MustCompile(`<meta\s+property="og:title"\s+content="(.*?)"`)
    ogDescRegex := regexp.MustCompile(`<meta\s+property="og:description"\s+content="(.*?)"`)
    ogImageRegex := regexp.MustCompile(`<meta\s+property="og:image"\s+content="(.*?)"`)
    titleRegexMeta := regexp.MustCompile(`<meta\s+name="title"\s+content="(.*?)"`)

    // Replace the dynamic metadata using the regular expressions
    newContent := urlRegex.ReplaceAllString(string(content), `<meta name="url" content="{{ .Url }}"`)
    newContent = typeRegex.ReplaceAllString(newContent, `<meta name="type" content="{{ .Type }}"`)
    newContent = titleRegex.ReplaceAllString(newContent, `<title>{{ .Title }}</title>`)
    newContent = titleRegexMeta.ReplaceAllString(newContent, `<meta name="title" content="{{ .Title }}"`)
    newContent = descRegex.ReplaceAllString(newContent, `<meta name="description" content="{{ .Description }}"`)
    newContent = imageRegex.ReplaceAllString(newContent, `<meta name="image" content="{{ .Image }}"`)
    newContent = ogUrlRegex.ReplaceAllString(newContent, `<meta property="og:url" content="{{ .Url }}"`)
    newContent = ogTitleRegex.ReplaceAllString(newContent, `<meta property="og:title" content="{{ .Title }}"`)
    newContent = ogDescRegex.ReplaceAllString(newContent, `<meta property="og:description" content="{{ .Description }}"`)
    newContent = ogImageRegex.ReplaceAllString(newContent, `<meta property="og:image" content="{{ .Image }}"`)

    // Write the modified content back to the index.html file
    err = os.WriteFile("./views/index.html", []byte(newContent), 0644)
    if err != nil {
        panic(err)
    }
}
