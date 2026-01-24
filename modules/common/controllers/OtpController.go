package controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"lambda/modules/common/models"
	"math/rand"
	"net/http"
	"net/url"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"github.com/lambda-platform/lambda/DB"
	"github.com/lambda-platform/lambda/config"
)

func randomNumberOtp() string {
	rand.Seed(time.Now().UnixNano())
	minValue := 1000
	maxValue := 9999
	randNum := rand.Intn(maxValue-minValue+1) + minValue
	return fmt.Sprintf("%d", randNum)
}
func GetOtpCode(randomCode string, phoneNumber string) (models.CallProResponse, error) {
	var resCallPro models.CallProResponse

	// Message encode
	message := fmt.Sprintf("Tanii batalgaajuulah neg udaagiin code - %s", randomCode)
	escapedMsg := url.QueryEscape(message)

	// Build URL
	apiURL := fmt.Sprintf("https://api.messagepro.mn/send?key=%s&from=%s&to=%s&text=%s", "91f43d1d5116f1e6a765b52c2b0ed4a4", "72726700", phoneNumber, escapedMsg)

	// Make request
	resp, err := http.Get(apiURL)
	if err != nil {
		return resCallPro, fmt.Errorf("failed to send request: %w", err)
	}
	defer resp.Body.Close()

	// Read response
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return resCallPro, fmt.Errorf("failed to read response: %w", err)
	}

	// Parse JSON response
	if errJSON := json.Unmarshal(body, &resCallPro); errJSON != nil {
		return resCallPro, fmt.Errorf("failed to parse response JSON: %w", errJSON)
	}

	return resCallPro, nil
}

func GetVerificationCode(c *fiber.Ctx) error {
	// 1. Request parse
	verificationRequest := new(models.VerificationCodes)
	if err := c.BodyParser(&verificationRequest); err != nil {
		fmt.Println("BodyParser error:", err)
		return c.Status(http.StatusBadRequest).JSON(map[string]string{
			"status":  "error",
			"message": "Invalid request body",
		})
	}

	// contactType == phone
	if verificationRequest.ContactType == "phone" {
		// 3. Generate random OTP
		randomNumber := randomNumberOtp()

		// 4. Create verification record
		verificationCode := models.VerificationCodes{
			Contact:     verificationRequest.Contact,
			ContactType: "phone",
			Code:        randomNumber,
			ExpiresAt:   time.Now().Add(5 * time.Minute),
			IsUsed:      false, // нэмсэн бол
		}

		if err := DB.DB.Create(&verificationCode).Error; err != nil {
			fmt.Println("DB create error:", err)
			return c.Status(http.StatusInternalServerError).JSON(map[string]string{
				"status":  "error",
				"message": "Failed to save verification code",
			})
		}

		// 5. Send OTP via SMS
		resCallPro, errCallPro := GetOtpCode(randomNumber, verificationRequest.Contact)
		if errCallPro != nil {
			fmt.Println("SMS error:", errCallPro)
			// SMS failure дээр ч гэсэн кодыг хадгалсан учраас user-д warning буцааж болно
			return c.Status(http.StatusOK).JSON(map[string]interface{}{
				"status":  "warning",
				"message": "SMS илгээгдсэнгүй, дараа дахин оролдоно уу",
				"error":   errCallPro.Error(),
			})
		}

		// 6. Check SMS API response
		if len(resCallPro) >= 1 && resCallPro[0].Result == "SUCCESS" {
			return c.JSON(map[string]string{
				"status":  "success",
				"message": "Баталгаажуулах код илгээгдлээ.",
			})
		} else {
			return c.Status(http.StatusOK).JSON(map[string]interface{}{
				"status":  "warning",
				"message": "Утасны дугаар алдаатай эсвэл SMS илгээгдсэнгүй",
				"error":   resCallPro,
			})
		}
	} else {
		// contactType == email
		return c.JSON(map[string]string{
			"status":  "success",
			"message": "Баталгаажуулах код илгээгдлээ.",
		})
	}
}

func CheckConfirmCode(c *fiber.Ctx) error {
	var checkData models.VerificationCodes
	if err := c.BodyParser(&checkData); err != nil {
		return c.Status(http.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Буруу хүсэлт байна.",
		})
	}

	//if !checkPhoneOTP(checkData) {
	//	return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
	//		"status":  "warning",
	//		"message": "OTP код буруу эсвэл ашиглагдсан байна.",
	//	})
	//}

	success, newUser := CreateUser(checkData)
	if !success {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Хэрэглэгч үүсгэхэд алдаа гарлаа.",
		})
	}

	userToken, _ := createJwtToken(models.UserData{Id: newUser.ID, Login: newUser.Login, FirstName: newUser.FirstName, LastName: newUser.LastName, Email: newUser.Email, OrgID: newUser.OrgID, Role: newUser.Role})

	cookie := new(http.Cookie)
	cookie.Name = "token"
	cookie.Path = "/"
	cookie.Value = userToken
	cookie.Expires = time.Now().Add(time.Hour * time.Duration(config.Config.JWT.Ttl))

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Амжилттай нэвтэрлээ.",
		"user":    newUser,
		"token":   userToken,
	})
}

func createJwtToken(user models.UserData) (string, error) {
	// Set custom claims
	claims := &models.JwtClaims{
		Id:        user.Id,
		Login:     user.Login,
		Role:      user.Role,
		FirstName: user.FirstName,
		LastName:  user.LastName,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * time.Duration(config.Config.JWT.Ttl)).Unix(),
		},
	}
	// Create token with claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	t, err := token.SignedString([]byte(config.Config.JWT.Secret))
	if err != nil {
		return "", err
	}
	return t, nil
}

func checkPhoneOTP(codes models.VerificationCodes) bool {
	var verificationCode models.VerificationCodes

	result := DB.DB.
		Where("contact = ? AND contact_type = ?", codes.Contact, codes.ContactType).
		Order("created_at DESC").
		First(&verificationCode)

	if result.Error != nil || result.RowsAffected == 0 {
		return false
	}

	if !verificationCode.IsUsed && codes.Code == verificationCode.Code {
		verificationCode.IsUsed = true
		DB.DB.Save(&verificationCode)

		return true
	}

	return false
}
