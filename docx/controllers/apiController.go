package controllers

import (
	"archive/zip"
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	"io"
	"lambda/docx/models"
	"mime/multipart"
	"net/http"
	"net/textproto"
	"os"
	"path/filepath"
	"strconv"
	"time"
)

func AddFile(path string, writer *multipart.Writer) error {
	file, err := os.Open(path)
	if err != nil {
		return err
	}
	defer file.Close()

	fi, err := file.Stat()
	if err != nil {
		return err
	}

	// Manually create the form file part with the correct MIME type
	h := make(textproto.MIMEHeader)
	h.Set("Content-Disposition", fmt.Sprintf(`form-data; name="%s"; filename="%s"`, "files", filepath.Base(fi.Name())))
	h.Set("Content-Type", "application/pdf")
	part, err := writer.CreatePart(h)
	if err != nil {
		return err
	}

	_, err = io.Copy(part, file)
	return err
}

func DocumentFile(c *fiber.Ctx) error {
	id := c.Params("id")
	doc := models.DocxDocument{}

	DB.DB.Where("id = ?", id).Find(&doc)
	if doc.ID != "" {
		var files []models.File
		if err := json.Unmarshal([]byte(*doc.FileList), &files); err != nil {
			return err
		}

		sign, err := signInToDocx()
		if err != nil {
			return err
		}
		token := sign.AccessToken

		buf := new(bytes.Buffer)
		zipWriter := zip.NewWriter(buf)

		for _, file := range files {
			fileUrl := "https://docx.gov.mn/rest/api" + file.URL
			req, err := http.NewRequest("GET", fileUrl, nil)
			if err != nil {
				return err
			}

			req.Header.Add("Authorization", "Bearer "+token)
			client := &http.Client{}
			resp, err := client.Do(req)
			if err != nil {
				return err
			}
			defer resp.Body.Close()

			// Create a new zip file in the archive
			zipFile, err := zipWriter.Create(file.Name)
			if err != nil {
				return err
			}

			// Copy the file content to the zip
			_, err = io.Copy(zipFile, resp.Body)
			if err != nil {
				return err
			}
		}
		if err := zipWriter.Close(); err != nil {
			return err
		}

		// Set the content type and other headers
		c.Set("Content-Type", "application/zip")
		c.Set("Content-Disposition", "attachment; filename=\"files.zip\"")

		// Send the zip file
		c.Send(buf.Bytes())

		return nil
	}
	//url := "/file/download/view/"
	return nil
}
func DocumentIncome(c *fiber.Ctx) error {

	url := "https://docx.gov.mn/rest/api/document/new/0/1000000"
	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, nil)

	if err != nil {
		fmt.Println(err)
		return err
	}

	sign, err := signInToDocx()
	if err != nil {
		return err
	}
	token := sign.AccessToken
	req.Header.Add("Authorization", "Bearer "+token)

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return err
	}
	defer res.Body.Close()

	var results []models.NewDoc
	if err := json.NewDecoder(res.Body).Decode(&results); err != nil {
		return err
	}

	if len(results) >= 1 {

		for _, r := range results {

			go ConvertNewDocToDocxDocument(r)

		}

	}
	return nil
}

func ConvertNewDocToDocxDocument(newDoc models.NewDoc) {
	docExist := models.DocxDocument{}
	DB.DB.Where("id = ?", newDoc.ID).Find(&docExist)
	if docExist.ID == "" {

		jsonData, _ := json.Marshal(newDoc.FileList)

		list := string(jsonData)

		doc := models.DocxDocument{
			ID:              newDoc.ID,
			CreatedDate:     ConvertStringToTime(newDoc.CreatedDate),
			DocumentDate:    ConvertStringDate(newDoc.DocumentDate),
			DocumentName:    &newDoc.DocumentName,
			DocumentNumber:  &newDoc.DocumentNumber,
			DocumentTypeID:  ConvertStringToInt(strconv.Itoa(newDoc.DocumentTypeID)),
			IsActive:        newDoc.IsActive,
			IsNeedReply:     newDoc.IsNeedReply,
			IsReplyDoc:      newDoc.IsReplyDoc,
			NoOfPages:       ConvertStringToInt(newDoc.NoOfPages),
			OrgID:           ConvertStringToInt(newDoc.OrgID),
			OrgName:         &newDoc.OrgName,
			OrgCode:         &newDoc.OrgCode,
			ProgramID:       ConvertStringToInt(newDoc.ProgramID),
			PriorityID:      ConvertStringToInt(strconv.Itoa(newDoc.PriorityID)),
			ResponseDate:    ConvertStringDate(newDoc.ResponseDate),
			ResponseTypeID:  ConvertStringToInt(strconv.Itoa(newDoc.ResponseTypeID)),
			SignName:        &newDoc.SignName,
			SrcDocumentCode: newDoc.SrcDocumentCode,
			StatusID:        ConvertStringToInt(strconv.Itoa(newDoc.StatusID)),
			FileCount:       ConvertStringToInt(strconv.Itoa(newDoc.FileCount)),
			StatusCode:      &newDoc.StatusCode,
			StatusName:      &newDoc.StatusName,
			FileList:        &list,
		}

		DB.DB.Create(&doc)

	}

}

func ConvertStringToInt(s string) *int {
	if s == "" {
		return nil
	}
	i, err := strconv.Atoi(s)
	if err != nil {
		return nil
	}
	return &i
}

func ConvertStringToTime(s string) *time.Time {
	if s == "" {
		return nil
	}
	layout := "2006-01-02 15:04:05" // Updated layout to match your format
	t, err := time.Parse(layout, s)
	if err != nil {
		fmt.Println("Error parsing time:", err) // Optionally handle or log the error
		return nil
	}
	return &t
}
func ConvertStringDate(s string) *time.Time {
	if s == "" {
		return nil
	}
	layout := "2006-01-02" // Updated layout to match your format
	t, err := time.Parse(layout, s)
	if err != nil {
		fmt.Println("Error parsing time:", err) // Optionally handle or log the error
		return nil
	}
	return &t
}

func DocumentMarkStatus(c *fiber.Ctx) error {

	sign, err := signInToDocx()
	if err != nil {
		return err
	}
	token := sign.AccessToken

	url := "https://docx.gov.mn/rest/api/document/status/new/0/10000000000"
	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, nil)

	if err != nil {
		fmt.Println(err)
		return err
	}
	req.Header.Add("Authorization", "Bearer "+token)

	res, err := client.Do(req)
	if err != nil {

		return err
	}
	defer res.Body.Close()

	var results []models.NewStatus
	if err := json.NewDecoder(res.Body).Decode(&results); err != nil {
		return err
	}

	if len(results) >= 1 {
		marked := []string{}
		for _, r := range results {

			Impact := models.Impact{}
			DB.DB.Where("docx_status_id = ?", r.DocID).Find(&Impact)

			if Impact.ID >= 1 {
				Impact.DocxStatus = getStatusNameByID(r.StatusID)

				DB.DB.Save(&Impact)

				marked = append(marked, r.ID)
			} else {
				Independency := models.Independency{}
				DB.DB.Where("docx_status_id = ?", r.DocID).Find(&Independency)

				if Independency.ID >= 1 {
					Independency.DocxStatus = getStatusNameByID(r.StatusID)

					DB.DB.Save(&Independency)

					marked = append(marked, r.ID)
				}
			}

			if len(marked) >= 1 {
				MarkStatus(marked)
			}

		}
	}

	return nil
}

func MarkStatus(ids []string) error {
	url := "https://docx.gov.mn/rest/api/document/status/download"
	method := "POST"

	sign, err := signInToDocx()
	if err != nil {
		return err
	}
	token := sign.AccessToken

	// Constructing the JSON payload dynamically
	payloadData := map[string][]string{
		"ids": ids,
	}
	payloadBytes, err := json.Marshal(payloadData)
	if err != nil {
		return err
	}
	payload := bytes.NewReader(payloadBytes)

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)
	if err != nil {
		return err
	}

	req.Header.Add("Authorization", "Bearer "+token)
	req.Header.Add("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return err
	}
	defer res.Body.Close()

	// You may want to handle the response here, depending on your requirements

	return nil
}

// signIn handles the sign-in process
func signInToDocx() (*models.SignResponse, error) {

	username := os.Getenv("DOCX_USERNAME")
	password := os.Getenv("DOCX_PASSWORD")

	// Prepare the request payload
	payload := map[string]string{"username": username, "password": password}
	payloadBytes, err := json.Marshal(payload)
	if err != nil {
		return nil, err
	}

	// Make the POST request
	resp, err := http.Post("https://docx.gov.mn/rest/api/auth/signin", "application/json", bytes.NewBuffer(payloadBytes))
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// Read and unmarshal the response
	var signResp models.SignResponse
	err = json.NewDecoder(resp.Body).Decode(&signResp)
	if err != nil {
		return nil, err
	}

	return &signResp, nil
}

func getToday() string {
	return time.Now().Format("2006-01-02") // Go uses this specific date as a layout for formatting
}

type Status struct {
	ID   int
	Name string
	Code string
}

func getStatusNameByID(id int) string {
	statuses := []Status{
		{1, "Шинэ", "NEW"},
		{2, "Үзсэн", "SEEN"},
		{3, "Дэлгэрэнгүй үзсэн", "SEEN_DETAIL"},
		{4, "Файл татаж авсан", "DOWNLOADED"},
		{5, "Буцаасан", "CANCELLED"},
		{6, "Хүлээн авсан", "RECEIVED"},
		{9, "Шийдвэрлэсэн", "DECIDED"},
	}
	for _, status := range statuses {
		if status.ID == id {
			return status.Name
		}
	}
	return ""
}
