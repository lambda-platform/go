package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/lambda-platform/lambda/DB"
	"io/ioutil"
	appModels "lambda/app/models"
	"lambda/docx/models"
	"lambda/lambda/models/form/formModels"
	"mime/multipart"
	"net/http"
	"os"
	"strconv"
)

func AfterUpdateImpact(newData interface{}) {
	data := newData.(*formModels.Impact788)

	if data.DocxStatus != nil {
		if *data.DocxStatus == "Албан бичгийн төсөл" && data.MoreFiles != nil && data.TsOrgID != nil {
			filePath1 := ""
			filePath2 := ""

			filePath1 = "public/" + *data.MoreFiles

			if data.Esign != nil {
				filePath2 = fmt.Sprintf("public/uploaded/signed/%s[signed].pdf", *data.Esign)
			} else if data.FileSample != nil {
				filePath2 = "public/" + *data.FileSample
			}

			if filePath2 != "" {
				documentNumber := fmt.Sprintf("Н%d", data.ID)

				user := appModels.Users{}

				DB.DB.Where("id = ?", data.TsOrgID).Find(&user)

				if user.ID >= 1 {

					firstname := ""
					if user.FirstName != nil {
						firstname = *user.FirstName
					} else {
						firstname = user.Login
					}

					res, err := SendToDocx(documentNumber, filePath1, filePath2, firstname, user.ID, "Нөлөөллийн мэдүүлэг")

					if err == nil && res.ID != "" {
						DB.DB.Model(&formModels.Impact788{}).Where("id = ?", data.ID).Updates(map[string]interface{}{"docx_status": "Илгээсэн", "docx_status_id": res.ID})
					} else {
						fmt.Println(err.Error())
					}

				}

			}

		}
	}

}

func AfterUpdateIndependency(newData interface{}) {
	data := newData.(*formModels.Independency790)

	if data.DocxStatus == "Албан бичгийн төсөл" && data.Esign != nil && data.AdminID != nil && data.AdminFile != nil {
		filePath1 := ""
		filePath2 := ""

		filePath1 = "public/" + *data.AdminFile

		if data.Esign != nil {
			filePath2 = fmt.Sprintf("public/uploaded/signed/%s[signed].pdf", *data.Esign)
		}

		if filePath2 != "" {
			documentNumber := fmt.Sprintf("М%d", data.ID)

			user := appModels.Users{}

			DB.DB.Where("id = ?", data.AdminID).Find(&user)

			if user.ID >= 1 {

				firstname := ""
				if user.FirstName != nil {
					firstname = *user.FirstName
				} else {
					firstname = user.Login
				}

				res, err := SendToDocx(documentNumber, filePath1, filePath2, firstname, user.ID, "ХББХЁАСХ мэдүүлэг")

				if err == nil && res.ID != "" {
					DB.DB.Model(&formModels.Independency790{}).Where("id = ?", data.ID).Updates(map[string]interface{}{"docx_status": "Илгээсэн", "docx_status_id": res.ID})
				} else {
					fmt.Println(err.Error())
				}

			}

		}

	}
}

func SendToDocx(documentNumber, filePath1, filePath2, firstname string, createdUserId int, documentName string) (*models.DocXResponse, error) {

	//fmt.Println(documentNumber, filePath1, filePath2, firstname, createdUserId, documentName)
	sign, err := signInToDocx()
	if err != nil {
		return nil, err
	}
	token := sign.AccessToken

	orgToken := os.Getenv("DOCX_ORG_TOKEN")

	payload := &bytes.Buffer{}
	writer := multipart.NewWriter(payload)

	err = AddFile(filePath1, writer)
	if err != nil {
		return nil, err
	}

	err = AddFile(filePath2, writer)
	if err != nil {
		return nil, err
	}

	// Add other fields to the form
	_ = writer.WriteField("orgList", "[{\"orgId\": 5261}]")
	_ = writer.WriteField("docxOrgToken", orgToken)
	_ = writer.WriteField("documentDate", getToday())
	_ = writer.WriteField("documentTypeId", "1")
	_ = writer.WriteField("documentNumber", documentNumber)
	_ = writer.WriteField("documentName", documentName)
	_ = writer.WriteField("signName", firstname)
	_ = writer.WriteField("isReplyDoc", "false")
	_ = writer.WriteField("isNeedReply", "true")
	_ = writer.WriteField("createdUserId", strconv.Itoa(createdUserId))
	_ = writer.WriteField("priorityId", "2")
	_ = writer.WriteField("noOfPages", "1")
	_ = writer.WriteField("responseTypeId", "1")
	_ = writer.WriteField("responseDate", getToday())

	// Close the multipart writer to finalize the form data

	err = writer.Close()
	if err != nil {
		return nil, err
	}

	url := "https://docx.gov.mn/rest/api/document/multer"
	method := "POST"

	// Create an HTTP request with the form data
	req, err := http.NewRequest(method, url, payload)
	if err != nil {
		return nil, err
	}

	// Set the necessary headers, including the content type and authorization token
	req.Header.Set("Content-Type", writer.FormDataContentType())
	req.Header.Set("Authorization", "Bearer "+token)

	// Send the request using an HTTP client
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// Check the response status code
	if resp.StatusCode != http.StatusCreated { // 201 is the expected status code for success
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			fmt.Println(err)

		}
		fmt.Println(string(body))
		fmt.Printf("Unexpected status code: %d\n", resp.StatusCode)
		return nil, err
	}

	// Parse the JSON response into DocXResponse struct
	var result models.DocXResponse
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return nil, err
	}

	return &result, nil
}
