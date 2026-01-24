package controllers

import (
	"lambda/modules/common/models"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	"gorm.io/gorm"
)

// About Us
// GetAboutUs godoc
// @Summary Get about us
// @Description Get company about us info.
// @Tags Common
// @Accept json
// @Produce json
// @Success 200 {array} models.AboutUs
// @Failure 500 {object} map[string]string
// @Router /about-us [get]
func GetAboutUs(c *fiber.Ctx) error {
	var aboutUs []models.AboutUs
	if err := DB.DB.Order("list_order asc").Find(&aboutUs).Error; err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": err.Error(),
		})
	}
	return c.JSON(aboutUs)
}

// Contact Us
// CreateContactUs godoc
// @Summary Create contact us
// @Description Submit a contact form.
// @Tags Common
// @Accept json
// @Produce json
// @Param request body models.ContactUs true "Contact Data"
// @Success 201 {object} map[string]interface{}
// @Failure 400 {object} map[string]string
// @Router /contact-us [post]
func CreateContactUs(c *fiber.Ctx) error {
	contact := new(models.ContactUs)
	if err := c.BodyParser(contact); err != nil {
		return c.Status(http.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid request body",
		})
	}

	if err := DB.DB.Create(contact).Error; err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Could not create contact",
		})
	}

	return c.Status(http.StatusCreated).JSON(fiber.Map{
		"status":  "success",
		"message": "Contact created successfully",
		"data":    contact,
	})
}

// FAQ
// GetFaq godoc
// @Summary Get FAQs
// @Description Get frequently asked questions.
// @Tags Common
// @Accept json
// @Produce json
// @Param type_id query string false "Filter by Type"
// @Success 200 {array} models.LutFaqType
// @Failure 500 {object} map[string]string
// @Router /faq [get]
func GetFaq(c *fiber.Ctx) error {
	var luts []models.LutFaqType

	query := DB.DB.Preload("Faqs")

	// Filter logic is slightly more complex with Preload, usually we filter the parent or preloaded relation.
	// But if user wants filtered FAQs, maybe better to keep existing logic OR apply filter to the preload.
	// As per request "all same update" to return types with data.

	typeID := c.Query("type_id")
	if typeID != "" {
		query = query.Where("id = ?", typeID)
	}

	if err := query.Find(&luts).Error; err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": err.Error(),
		})
	}
	return c.JSON(luts)
}

// Help
// GetHelp godoc
// @Summary Get Help
// @Description Get help center content.
// @Tags Common
// @Accept json
// @Produce json
// @Success 200 {array} models.LutHelpType
// @Failure 500 {object} map[string]string
// @Router /help [get]
func GetHelp(c *fiber.Ctx) error {
	var luts []models.LutHelpType
	// Order types, then load helps (also ordered locally usually, but DB order for preload needs specific syntax or just default)
	if err := DB.DB.Order("order_type asc").Preload("Helps", func(db *gorm.DB) *gorm.DB {
		return db.Order("\"order\" asc")
	}).Find(&luts).Error; err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": err.Error(),
		})
	}
	return c.JSON(luts)
}

// Privacy
// GetPrivacy godoc
// @Summary Get Privacy Policy
// @Description Get privacy policy text.
// @Tags Common
// @Accept json
// @Produce json
// @Success 200 {object} models.Privacy
// @Failure 404 {object} map[string]string
// @Router /privacy [get]
func GetPrivacy(c *fiber.Ctx) error {
	var privacy models.Privacy
	// Assuming we want the latest privacy policy or specific one.
	// If it's a list, change to []models.Privacy.
	// Often mostly static content, let's fetch first or all.
	// Based on the table, it has ID.
	if err := DB.DB.First(&privacy).Error; err != nil {
		return c.Status(http.StatusNotFound).JSON(fiber.Map{
			"status":  "error",
			"message": "Privacy policy not found",
		})
	}
	return c.JSON(privacy)
}

// Terms of Service
// GetTermsOfService godoc
// @Summary Get Terms of Service
// @Description Get terms of service text.
// @Tags Common
// @Accept json
// @Produce json
// @Success 200 {array} models.LutTermService
// @Failure 500 {object} map[string]string
// @Router /terms [get]
func GetTermsOfService(c *fiber.Ctx) error {
	var luts []models.LutTermService
	if err := DB.DB.Preload("Terms").Find(&luts).Error; err != nil {
		return c.Status(http.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": err.Error(),
		})
	}
	return c.JSON(luts)
}

// News godoc
// @Summary Get news
// @Description Get list of news.
// @Tags Common
// @Accept json
// @Produce json
// @Success 200 {array} models.News
// @Failure 500 {object} map[string]string
// @Router /news [get]
func News(c *fiber.Ctx) error {
	var news []models.News
	DB.DB.Find(&news)

	return c.JSON(news)
}
