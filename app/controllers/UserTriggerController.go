package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"lambda/app/models"
	"lambda/lambda/models/form/formModels"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	"gorm.io/gorm"
)

type Users struct {
	ID                  int            `gorm:"column:id;primaryKey;autoIncrement" json:"id"`
	Status              *string        `gorm:"column:status" json:"status"`
	Role                *int           `gorm:"column:role" json:"role"`
	Login               string         `gorm:"column:login" json:"login"`
	Email               string         `gorm:"column:email" json:"email"`
	RegisterNumber      string         `gorm:"column:register_number" json:"register_number"`
	Avatar              *string        `gorm:"column:avatar" json:"avatar"`
	Bio                 *string        `gorm:"column:bio" json:"bio"`
	FirstName           *string        `gorm:"column:first_name" json:"first_name"`
	LastName            *string        `gorm:"column:last_name" json:"last_name"`
	Birthday            *time.Time     `gorm:"column:birthday" json:"birthday"`
	Phone               *string        `gorm:"column:phone" json:"phone"`
	Gender              *string        `gorm:"column:gender" json:"gender"`
	Password            string         `gorm:"column:password" json:"password"`
	CreatedAt           *time.Time     `gorm:"column:created_at" json:"created_at"`
	UpdatedAt           *time.Time     `gorm:"column:updated_at" json:"updated_at"`
	DeletedAt           gorm.DeletedAt `gorm:"column:deleted_at" json:"deleted_at"`
	OrgID               *int           `gorm:"column:org_id" json:"org_id"`
	EmpID               *int           `gorm:"column:emp_id" json:"emp_id"`
	IsFirst             bool           `gorm:"column:is_first" json:"is_first"`
	CourtMail           *string        `gorm:"column:court_mail" json:"court_mail"`
	IsResourse          bool           `gorm:"column:is_resourse" json:"is_resourse"`
	GazarHeltesID       *int           `gorm:"column:gazar_heltes_id" json:"gazar_heltes_id"`
	Address             *string        `gorm:"column:address" json:"address"`
	AlbanTushaalTailbar *string        `gorm:"column:alban_tushaal_tailbar" json:"alban_tushaal_tailbar"`
}

func (u *Users) TableName() string {
	return "public.users"
}

func CreateAllJudges(c *fiber.Ctx) error {
	users := []formModels.Users423{}

	DB.DB.Where("role = ?", 6).Find(&users)

	for _, user := range users {
		tomilgoo := models.ViewShuugchTomilgooForEcourt{}

		DB.DB.Where("user_id = ?", user.ID).First(&tomilgoo)
		if tomilgoo.ID >= 1 && tomilgoo.TolovID == 1 {
			// Insert Logic here
			reqBody := &CreateUserReq{
				RegisterNo: user.RegisterNumber,
				LastName:   user.LastName,
				FirstName:  user.FirstName,
				Email:      user.Email,
				Phone:      user.Phone,
				OrgId:      tomilgoo.OrgID,
				CourtCode:  tomilgoo.CourtCode,
			}
			if err := createUser(reqBody); err != nil {
				log.Printf("ecourt createUser error registerNumber: %s ", user.RegisterNumber)
			}
		}
	}

	return c.JSON(map[string]interface{}{
		"success": true,
		"total":   len(users),
	})
}

func AfterInsertUpdateUserTomilgoo(userPre interface{}) {
	userPreData := userPre.(*formModels.AlbanTushaalBurtgel95)

	fmt.Println("AfterInsertUpdateUserTomilgoo")
	fmt.Println(userPreData.UserID)
	if userPreData.UserID != nil {
		user := formModels.Users423{}

		DB.DB.Where("id = ?", userPreData.UserID).First(&user)

		fmt.Println("user.ID")
		fmt.Println(user.ID)
		if user.ID >= 1 {
			tomilgoo := models.ViewShuugchTomilgooForEcourt{}

			DB.DB.Where("user_id = ?", user.ID).First(&tomilgoo)
			if tomilgoo.ID >= 1 && tomilgoo.TolovID == 1 {
				// Insert Logic here
				reqBody := &CreateUserReq{
					RegisterNo: user.RegisterNumber,
					LastName:   user.LastName,
					FirstName:  user.FirstName,
					Email:      user.Email,
					Phone:      user.Phone,
					OrgId:      tomilgoo.OrgID,
					CourtCode:  tomilgoo.CourtCode,
				}
				if err := createUser(reqBody); err != nil {
					log.Printf("ecourt createUser error registerNumber: %s ", user.RegisterNumber)
				}
			}
		}

	}
}
func AfterInsertUpdateUserNew(userPre interface{}) {
	userPreData := userPre.(*formModels.Anket60)
	user := formModels.Users423{}

	DB.DB.Where("id = ?", userPreData.ID).First(&user)

	if user.ID >= 1 {
		if user.Role != nil {
			if *user.Role == 6 {

				tomilgoo := models.ViewShuugchTomilgooForEcourt{}

				DB.DB.Where("user_id = ?", user.ID).First(&tomilgoo)
				if tomilgoo.ID >= 1 && tomilgoo.TolovID == 1 {
					// Insert Logic here
					reqBody := &CreateUserReq{
						RegisterNo: user.RegisterNumber,
						LastName:   user.LastName,
						FirstName:  user.FirstName,
						Email:      user.Email,
						Phone:      user.Phone,
						OrgId:      tomilgoo.OrgID,
						CourtCode:  tomilgoo.CourtCode,
					}
					if err := createUser(reqBody); err != nil {
						log.Printf("ecourt createUser error registerNumber: %s ", user.RegisterNumber)
					}
				}
			}
		}
	}
}
func AfterInsertUpdateUser(userPre interface{}) {
	user := userPre.(*formModels.Users423)

	if user.Role != nil {
		if *user.Role == 6 {

			tomilgoo := models.ViewShuugchTomilgooForEcourt{}

			DB.DB.Where("user_id = ?", user.ID).First(&tomilgoo)
			if tomilgoo.ID >= 1 && tomilgoo.TolovID == 1 {
				// Insert Logic here
				reqBody := &CreateUserReq{
					RegisterNo: user.RegisterNumber,
					LastName:   user.LastName,
					FirstName:  user.FirstName,
					Email:      user.Email,
					Phone:      user.Phone,
					OrgId:      tomilgoo.OrgID,
					CourtCode:  tomilgoo.CourtCode,
				}
				if err := createUser(reqBody); err != nil {
					log.Printf("ecourt createUser error registerNumber: %s ", user.RegisterNumber)
				}
			}
		}
	}
}

func createUser(reqBody *CreateUserReq) error {
	token, err := getToken()
	if err != nil {
		return err
	}

	payload, _ := json.Marshal(reqBody)
	req, err := http.NewRequest("POST", fmt.Sprintf("%s/cpm/user", os.Getenv("ECOURT_GW_URL")), bytes.NewBuffer(payload))
	if err != nil {
		return fmt.Errorf("Failed to create request: %v", err)
	}

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("X-API-KEY", os.Getenv("ECOURT_GW_API_KEY"))
	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", *token))

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("Failed to execute request: %v", err)
	}

	if res.StatusCode != http.StatusOK {
		return fmt.Errorf("Failed to execute request: %v", res.StatusCode)
	}

	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return fmt.Errorf("Failed to read response: %v", err)
	}

	var response CreateUserRes
	err = json.Unmarshal(body, &response)
	if err != nil {
		return fmt.Errorf("Failed to parse response: %v", err)
	}

	if !response.Status {
		return fmt.Errorf("Create user error: %v", response.Msg[0])
	}

	return nil
}

func getToken() (*string, error) {
	reqBody := LoginReq{
		ClientId:     os.Getenv("ECOURT_GW_CLIENT_ID"),
		ClientSecret: os.Getenv("ECOURT_GW_CLIENT_SECRET"),
	}
	payload, _ := json.Marshal(reqBody)
	req, err := http.NewRequest("POST", fmt.Sprintf("%s/cpm/login", os.Getenv("ECOURT_GW_URL")), bytes.NewBuffer(payload))
	if err != nil {
		return nil, fmt.Errorf("Failed to create request: %v", err)
	}

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("X-API-KEY", os.Getenv("ECOURT_GW_API_KEY"))

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("Failed to execute request: %v", err)
	}

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("Failed to execute request: %v", res.StatusCode)
	}

	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("Failed to read response: %v", err)
	}

	var response LoginRes
	err = json.Unmarshal(body, &response)
	if err != nil {
		return nil, fmt.Errorf("Failed to parse response: %v", err)
	}

	if !response.Status {
		return nil, fmt.Errorf("Login error: %v", response.Msg[0])
	}

	return &response.Data.Token, nil
}

type CmnRes struct {
	Status bool     `json:"status"`
	Code   string   `json:"code"`
	Msg    []string `json:"msg"`
}

type LoginReq struct {
	ClientId     string `json:"clientId"`
	ClientSecret string `json:"clientSecret"`
}

type LoginRes struct {
	CmnRes
	Data struct {
		Id    string `json:"id"`
		Token string `json:"token"`
	} `json:"data"`
}

type CreateUserReq struct {
	RegisterNo string  `json:"registerNo"`
	LastName   *string `json:"lastName"`
	FirstName  *string `json:"firstName"`
	Email      string  `json:"email"`
	Phone      *string `json:"phone"`
	OrgId      *int    `json:"orgId"`
	CourtCode  *int    `json:"courtCode"`
}

type CreateUserRes struct {
	CmnRes
	Data struct {
		Id string `json:"id"`
	} `json:"data"`
}
