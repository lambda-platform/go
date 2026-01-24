package controllers

import (
	"errors"
	"fmt"
	"lambda/modules/common/models"
	"net/http"
	"strconv"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	agentUtils "github.com/lambda-platform/lambda/agent/utils"
	"gorm.io/gorm"
)

var defaultRole int = 5

func CreateUser(userData models.VerificationCodes) (bool, models.Users) {
	var foundUser models.Users

	if userData.Contact == "" {
		return false, models.Users{}
	}
	tx := DB.DB.Where("phone = ? OR email = ?", strings.ToLower(userData.Contact), strings.ToLower(userData.Contact)).
		First(&foundUser)

	if tx.Error == nil {
		foundUser.Password = ""
		return true, foundUser
	} else if errors.Is(tx.Error, gorm.ErrRecordNotFound) {
		password, err := agentUtils.Hash(userData.Contact)
		if err != nil {
			return false, models.Users{}
		}

		// userAvatar := "/tenger-images/no-user-avatar.jpg"

		newUser := models.Users{
			Role:           defaultRole,
			Login:          userData.Contact,
			RegisterNumber: "",
			Avatar:         nil,
			Password:       password,
		}

		switch userData.ContactType {
		case "phone":
			newUser.Phone = userData.Contact
		case "email":
			newUser.Email = userData.Contact
		default:
			return false, models.Users{}
		}

		if errDB := DB.DB.Create(&newUser).Error; errDB != nil {
			return false, models.Users{}
		}

		newUser.Password = ""

		return true, newUser
	} else {
		return false, models.Users{}
	}
}

// UserRegistration godoc
// @Summary Register a new user
// @Description Register a new user with email, phone, login, etc.
// @Tags Users
// @Accept json
// @Produce json
// @Param request body models.UserRegisterRequestData true "User Registration Data"
// @Success 200 {object} map[string]string
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /user-register [post]
func UserRegistration(c *fiber.Ctx) error {
	userRegisterData := new(models.UserRegisterRequestData)
	userData := models.Users{}

	err := c.BodyParser(&userRegisterData)

	if err != nil {
		fmt.Println(err.Error())
		return c.Status(http.StatusInternalServerError).JSON("server error")
	}

	userDataEmail := models.Users{}
	userDataPhone := models.Users{}
	userDataLogin := models.Users{}
	userDataRegister := models.Users{}
	userDataRole := models.Users{}

	DB.DB.Where("email = ?", userRegisterData.Email).Find(&userDataEmail)
	DB.DB.Where("phone = ?", userRegisterData.Phone).Find(&userDataPhone)
	DB.DB.Where("login = ?", userRegisterData.Login).Find(&userDataLogin)
	DB.DB.Where("login = ?", userRegisterData.RegisterNumber).Find(&userDataRegister)

	if id, err := strconv.Atoi(userDataEmail.ID); err == nil && id > 0 {
		return c.Status(http.StatusOK).JSON(map[string]string{
			"status":  "error",
			"message": "Бүртгэлтэй е-майл хаяг байна.",
		})
	} else if id, err := strconv.Atoi(userDataPhone.ID); err == nil && id > 0 {
		return c.Status(http.StatusOK).JSON(map[string]string{
			"status":  "error",
			"message": "Бүртгэлтэй утасны дугаар байна.",
		})
	} else if id, err := strconv.Atoi(userDataLogin.ID); err == nil && id > 0 {
		return c.Status(http.StatusOK).JSON(map[string]string{
			"status":  "error",
			"message": "Нэвтрэх нэр бүртгэлтэй байна",
		})
	}
	if id, err := strconv.Atoi(userDataRegister.ID); err == nil && id > 0 {
		return c.Status(http.StatusOK).JSON(map[string]string{
			"status":  "error",
			"message": "Регистр бүртгэлтэй байна",
		})
	}
	if id, err := strconv.Atoi(userDataRole.ID); err == nil && id > 0 {
		return c.Status(http.StatusOK).JSON(map[string]string{
			"status":  "error",
			"message": "role test",
		})
	}

	checkIsSamePassword := *userRegisterData.Password == *userRegisterData.ConfirmPassword

	if checkIsSamePassword == false {
		return c.Status(http.StatusOK).JSON(map[string]string{
			"status":  "error",
			"message": "Баталгаажуулах нууц үг таарсангүй",
		})
	}

	userData.LastName = &userRegisterData.LastName
	userData.FirstName = &userRegisterData.FirstName
	userData.Phone = userRegisterData.Phone
	userData.Role = defaultRole
	userData.RegisterNumber = userRegisterData.RegisterNumber
	userData.Login = strings.ToLower(userRegisterData.Login)
	userData.Email = strings.ToLower(userRegisterData.Email)
	password, _ := agentUtils.Hash(*userRegisterData.Password)
	userData.Password = password

	DB.DB.Create(&userData)

	return c.Status(http.StatusOK).JSON(map[string]string{
		"status":  "success",
		"message": "Бүртгэл амжилттай",
	})
}

// GetLoggedUserInfo godoc
// @Summary Get logged-in user info
// @Description Get detailed information of the currently logged-in user.
// @Tags Users
// @Accept json
// @Produce json
// @Security Bearer
// @Success 200 {object} models.Users
// @Failure 401 {object} map[string]string
// @Router /user/info [get]
func GetLoggedUserInfo(c *fiber.Ctx) error {
	user, authErr := agentUtils.AuthUserObject(c)
	if authErr != nil {
		fmt.Println("Error authenticating user:", authErr)
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Нэвтэрсэний дараа үргэлжлүүлэх боломжтой!",
		})
	}
	userData := models.Users{}

	DB.DB.Select("id, created_at, updated_at, deleted_at, status, role, login, email, first_name, last_name, "+
		"birthday, phone, gender, avatar ").
		Where("id = ?", user["id"]).
		Find(&userData)

	return c.Status(http.StatusOK).JSON(userData)
}

// UpdateUser godoc
// @Summary Update user profile
// @Description Update user information such as first name, last name, bio, avatar, etc.
// @Tags Users
// @Accept json
// @Produce json
// @Security Bearer
// @Param request body models.Users true "User Update Data"
// @Success 200 {object} map[string]interface{}
// @Failure 400 {object} map[string]interface{}
// @Failure 401 {object} map[string]interface{}
// @Router /user/update [put]
func UpdateUser(c *fiber.Ctx) error {
	user, authErr := agentUtils.AuthUserObject(c)
	if authErr != nil {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"status":  "error",
			"message": "Unauthorized",
		})
	}
	userID := user["id"].(string)

	var input models.Users
	if err := c.BodyParser(&input); err != nil {
		return c.Status(http.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid JSON",
		})
	}

	var userData models.Users
	if err := DB.DB.Where("id = ?", userID).First(&userData).Error; err != nil {
		return c.Status(http.StatusNotFound).JSON(fiber.Map{
			"status":  "error",
			"message": "User not found",
		})
	}

	// Update only allowed fields
	if input.FirstName != nil {
		userData.FirstName = input.FirstName
	}
	if input.LastName != nil {
		userData.LastName = input.LastName
	}
	if input.Phone != "" {
		var checkPhone models.Users
		DB.DB.Where("phone = ? AND id != ?", input.Phone, userID).First(&checkPhone)
		if checkPhone.ID != "" {
			return c.Status(http.StatusOK).JSON(fiber.Map{
				"status":  "error",
				"message": "Утасны дугаар бүртгэлтэй байна",
			})
		}
		userData.Phone = input.Phone
	}

	if input.Email != "" {
		var checkEmail models.Users
		DB.DB.Where("email = ? AND id != ?", input.Email, userID).First(&checkEmail)
		if checkEmail.ID != "" {
			return c.Status(http.StatusOK).JSON(fiber.Map{
				"status":  "error",
				"message": "И-мэйл хаяг бүртгэлтэй байна",
			})
		}
		userData.Email = input.Email
	}
	if input.Avatar != nil {
		userData.Avatar = input.Avatar
	}
	if input.Bio != nil {
		userData.Bio = input.Bio
	}
	if input.Gender != nil {
		userData.Gender = input.Gender
	}
	if input.Birthday != nil {
		userData.Birthday = input.Birthday
	}

	if err := DB.DB.Save(&userData).Error; err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Database error",
		})
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "User info updated",
		"data":    userData,
	})
}
