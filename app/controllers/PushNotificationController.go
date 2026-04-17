package controllers

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/lambda-platform/lambda/DB"
	"lambda/app/models"
	"lambda/lambda/models/form/formModels"
	"strconv"
	"time"
)

// Shuuh
func FindToRetireUsers(c *fiber.Ctx) error {
	var ankets []models.Ankets
	DB.DB.Where("deleted_at IS NULL AND retiring_date IS NOT NULL").Find(&ankets)

	currentDate := time.Now()

	// Define a struct to represent the result for each user
	type UserRetirementInfo struct {
		UserID              int
		DaysUntilRetirement int
		RetireDate          time.Time
	}

	// Filter ankets where RetiringDate is within 120 days
	var nearRetirementUsers []UserRetirementInfo
	for _, anket := range ankets {
		retirementDate := anket.RetiringDate // Assuming RetiringDate is a field in the Ankets model

		// Calculate the difference in days
		daysUntilRetirement := int(retirementDate.Sub(currentDate).Hours() / 24)

		// Check if the difference is within 120 days
		if daysUntilRetirement >= 0 && daysUntilRetirement <= 120 {
			userInfo := UserRetirementInfo{
				UserID:              anket.ID,
				DaysUntilRetirement: daysUntilRetirement,
				RetireDate:          *anket.RetiringDate,
			}
			nearRetirementUsers = append(nearRetirementUsers, userInfo)
		}
	}

	if nearRetirementUsers != nil {
		for i := range nearRetirementUsers {
			SendToRetireNotification(nearRetirementUsers[i].UserID, nearRetirementUsers[i].DaysUntilRetirement, nearRetirementUsers[i].RetireDate)
		}

		return c.JSON("SUCCESS TO SEND")
	}

	return c.JSON(nearRetirementUsers)
}

func SendToRetireNotification(userID int, leftDays int, retireDate time.Time) bool {
	//var user models.Users
	//DB.DB.Where("id = ?", userID).Find(&user)
	//
	//var firstName string
	//var lastName string
	//
	//if *user.LastName != "" || user.LastName != nil {
	//	lastName = *user.LastName
	//}
	//
	//if *user.FirstName != "" || user.FirstName != nil {
	//	firstName = *user.FirstName
	//}
	//
	//year := retireDate.Year()
	//month := retireDate.Month()
	//day := retireDate.Day()

	//FCMData := modelsModels.FCMData{
	//	Title: "Мэдэгдэл",
	//	Body: "Танд энэ өдрийн мэнд хүргэе!\n " +
	//		"Монгол улсын шүүхийн тухай хуулийн 47 дугаар зүйлийн 47.6 дахь хэсэгт заасны дагуу шүүгч " + lastName + " овогтой " + firstName + " таны өндөр насны тэтгэвэр тогтоолгох хугацаа " + strconv.Itoa(year) + " оны " + strconv.Itoa(int(month)) + " сарын " + strconv.Itoa(day) + "- ны өдөр тохиож байна.\n" +
	//		"Та хуульд заасан хугацаанд Шүүхийн ерөнхий зөвлөлд хүсэлтээ гаргахыг хүсье.\n" +
	//		strconv.Itoa(leftDays) + " хоног үлдсэн ",
	//	FirstName:   firstName,
	//	Sound:       config.LambdaConfig.Notify.Sound,
	//	Icon:        config.LambdaConfig.Favicon,
	//	Link:        "/admin/p/eed64f6a-6c58-97c7-b0c0-f8c1dacddc0f",
	//	ClickAction: config.LambdaConfig.Domain + "/admin",
	//}
	//
	//FCMNotification := modelsModels.FCMNotification{
	//	Title: "Мэдэгдэл",
	//	Body: "Танд энэ өдрийн мэнд хүргэе!\n " +
	//		"Монгол улсын шүүхийн тухай хуулийн 47 дугаар зүйлийн 47.6 дахь хэсэгт заасны дагуу шүүгч " + lastName + " овогтой " + firstName + " таны өндөр насны тэтгэвэр тогтоолгох хугацаа " + strconv.Itoa(year) + " оны " + strconv.Itoa(int(month)) + " сарын " + strconv.Itoa(day) + "- ны өдөр тохиож байна.\n" +
	//		"Та хуульд заасан хугацаанд Шүүхийн ерөнхий зөвлөлд хүсэлтээ гаргахыг хүсье.\n" +
	//		strconv.Itoa(leftDays) + " хоног үлдсэн ",
	//	Icon:        config.LambdaConfig.Domain + "/" + config.LambdaConfig.Favicon,
	//	ClickAction: config.LambdaConfig.Domain + "/admin/p/eed64f6a-6c58-97c7-b0c0-f8c1dacddc0f",
	//}
	//
	//data := modelsModels.NotificationData{
	//	Users: []int{userID},
	//	//Roles:        []int{2},
	//	Data:         FCMData,
	//	Notification: FCMNotification,
	//}
	//
	//notifyHandler.CreateNotification(data, map[string]interface{}{})

	return false
}

func LeaveRequestInsert(dataPre interface{}) {
	choloo := dataPre.(*formModels.Choloo107)

	var shuugchUser models.Users
	err := DB.DB.Where("id = ? AND role = ? AND gazar_heltes_id = ?", choloo.CholooID, 6, choloo.GazarHeltesID).Find(&shuugchUser).Error
	if err != nil {
		fmt.Println("Error querying user:", err)
		return
	}

	//if *choloo.LeaveRequestID != 3 {
	//	SendCustomNotification(shuugchUser.ID, *shuugchUser.FirstName, "Таны чөлөөний хүсэлтийг шийдвэрлэлээ.", "/admin/p/8afbf657-a021-2348-1673-bb5082c30f1d")
	//}

	var erhlegchUser []models.Users
	err2 := DB.DB.Where("role = ? AND gazar_heltes_id = ?", 5, choloo.GazarHeltesID).Find(&erhlegchUser).Error
	if err2 != nil {
		fmt.Println("Error querying user:", err2)
		return
	}

	if *choloo.LeaveRequestID == 3 {
		for i := range erhlegchUser {
			SendCustomNotification(erhlegchUser[i].ID, *erhlegchUser[i].FirstName, strconv.Itoa(choloo.ID)+" "+*shuugchUser.LastName+" овогтой "+*shuugchUser.FirstName+" - аас чөлөөний хүсэлт ирлээ.", "/admin/p/14ba7c50-66ee-c7cd-00ed-f278590512a5")
		}
	}
}

func LeaveRequestSecretInsert(dataPre interface{}) {
	choloo := dataPre.(*formModels.Choloo767)

	var shuugchUser models.Users
	err := DB.DB.Where("id = ? AND role = ?", choloo.CholooID, 6).Find(&shuugchUser).Error
	if err != nil {
		fmt.Println("Error querying user:", err)
		return
	}

	var erhlegchUser []models.Users
	err2 := DB.DB.Where("role = ?", 13).Find(&erhlegchUser).Error
	if err2 != nil {
		fmt.Println("Error querying user:", err2)
		return
	}

	if *choloo.LeaveRequestID == 3 {
		for i := range erhlegchUser {
			SendCustomNotification(erhlegchUser[i].ID, *erhlegchUser[i].FirstName, strconv.Itoa(choloo.ID)+" "+*shuugchUser.LastName+" овогтой "+*shuugchUser.FirstName+" - аас чөлөөний хүсэлт ирлээ.", "/admin/p/dd917095-bcf1-6c0e-b8c4-9fb50d1e61d4")
		}
	}
}

func LeaveRequest(dataPre interface{}) {
	choloo := dataPre.(*formModels.Choloo405)

	var user models.Users
	err := DB.DB.Where("id = ? AND role = ? AND gazar_heltes_id = ?", choloo.CholooID, 6, choloo.GazarHeltesID).Find(&user).Error
	if err != nil {
		fmt.Println("Error querying user:", err)
		return
	}

	if user.ID > 0 {
		if *choloo.LeaveRequestID != 3 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны чөлөөний хүсэлтийг шийдвэрлэлээ.", "/admin/p/8afbf657-a021-2348-1673-bb5082c30f1d")
		}
	}
}

func LeaveRequestLong(dataPre interface{}) {
	choloo := dataPre.(*formModels.Choloo768)

	var user models.Users
	DB.DB.Where("id = ? AND role = ?", choloo.CholooID, 6).Find(&user)

	if user.ID > 0 {
		if *choloo.LeaveRequestID != 3 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны чөлөөний хүсэлтийг шийдвэрлэлээ.", "/admin/p/a6ef5266-08aa-117d-1079-a19fd0e8e45f")
		}
	}
}

func InsuranceRequest(dataPre interface{}) {
	insuranceRequest := dataPre.(*formModels.InsuranceRequest332)

	var user models.Users
	DB.DB.Where("id = ? AND role = ?", insuranceRequest.UserID, 6).Find(&user)

	if user.ID > 0 {
		if *insuranceRequest.IRequestID != 3 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны даатгалын хүсэлтийг шийдвэрлэлээ.", "/admin/p/6cac376b-662f-ce07-83f4-9580e78c2627")
		}
	}
}

func Migration(dataPre interface{}) {
	migration := dataPre.(*formModels.Migration241)

	var user models.Users
	DB.DB.Where("id = ? AND role = ?", migration.UserID, 6).Find(&user)

	if user.ID > 0 {
		if *migration.RequestTypeID != 1 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны сэлгэн ажиллах хүсэлтийг шийдвэрлэлээ.", "/admin/p/8ed6f7d1-9333-50a9-1bf9-442d48d8a0c0")
		}
	}
}

func MigrationInsert(dataPre interface{}) {
	migration := dataPre.(*formModels.Migration235)

	var user models.Users
	err := DB.DB.Where("id = ? AND role = ? AND gazar_heltes_id = ?", migration.UserID, 6, migration.GazarHeltesID).Find(&user).Error
	if err != nil {
		fmt.Println("Error querying user:", err)
		return
	}

	var erhlegchUser []models.Users
	err2 := DB.DB.Where("role = ? AND gazar_heltes_id = ?", 5, migration.GazarHeltesID).Find(&erhlegchUser).Error
	if err2 != nil {
		fmt.Println("Error querying user:", err2)
		return
	}

	if *migration.RequestTypeID == 1 {
		for i := range erhlegchUser {
			SendCustomNotification(erhlegchUser[i].ID, *erhlegchUser[i].FirstName, *user.LastName+" овогтой "+*user.FirstName+" -  сэлгэн ажиллах хүсэлт илгээлээ", "/admin/p/ba919161-f93c-e816-7305-9113172a8118")
		}
	}
}

func Dismissal(dataPre interface{}) {
	dismissal := dataPre.(*formModels.Dismissal471)

	var user models.Users
	DB.DB.Where("id = ? AND role = ? AND gazar_heltes_id = ?", dismissal.UserID, 6, dismissal.GazarHeltesID).Find(&user)

	if user.ID > 0 {
		if *dismissal.DismissalStatusID != 1 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны хүсэлтийг шийдвэрлэлээ.", "/admin/p/13c66246-22fa-6e32-45eb-88579798c769")
		}
	}
}

func DismissalInsert(dataPre interface{}) {
	dismissal := dataPre.(*formModels.Dismissal204)

	var user models.Users
	err := DB.DB.Where("id = ? AND role = ? AND gazar_heltes_id = ?", dismissal.UserID, 6, dismissal.GazarHeltesID).Find(&user).Error
	if err != nil {
		fmt.Println("Error querying user:", err)
		return
	}

	var erhlegchUser []models.Users
	err2 := DB.DB.Where("role = ? AND gazar_heltes_id = ?", 5, dismissal.GazarHeltesID).Find(&erhlegchUser).Error
	if err2 != nil {
		fmt.Println("Error querying user:", err2)
		return
	}

	if *dismissal.DismissalStatusID == 1 {
		for i := range erhlegchUser {
			SendCustomNotification(erhlegchUser[i].ID, *erhlegchUser[i].FirstName, *user.LastName+" овогтой "+*user.FirstName+" - ажлаас чөлөөлөгдөх хүсэлт илгээлээ.", "/admin/p/bea59b6a-c9de-dd4b-cd74-66a245ebc05f")
		}
	}
}

func Impact(dataPre interface{}) {
	impact := dataPre.(*formModels.Impact476)

	var user models.Users
	DB.DB.Where("id = ? AND role = ?", impact.UserID, 6).Find(&user)

	if user.ID > 0 {
		if *impact.ImpactStatusID == 2 || *impact.ImpactStatusID == 7 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны илгээсэн нөлөөллийн мэдүүлгийг шийдвэрлэлээ.", "/admin/p/06a8fc72-2632-7629-d99c-04a375d6b50e")
		}
	}
}

func Independency(dataPre interface{}) {
	independency := dataPre.(*formModels.Independency537)

	var user models.Users
	DB.DB.Where("id = ? AND role = ?", independency.UserID, 6).Find(&user)

	if user.ID > 0 {
		if *independency.IndepStatusID != 1 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны илгээсэн ХББХЁАС хүсэлтийг шийдвэрлэлээ.", "/аdmin/p/bdbbdef6-2ef1-2eb9-38a6-a8df3541a2e1")
		}
	}
}

func ProtectionIssue(dataPre interface{}) {
	protectionIssue := dataPre.(*formModels.ProtectionIssue422)

	var user models.Users
	DB.DB.Where("id = ? AND role = ?", protectionIssue.UserID, 6).Find(&user)

	if user.ID > 0 {
		if *protectionIssue.ProtectionID == 1 || *protectionIssue.ProtectionID == 4 {
			SendCustomNotification(user.ID, *user.FirstName, "Таны илгээсэн хамгаалалтанд авах хүсэлтийг шийдвэрлэлээ.", "/admin/p/34629eb3-3fef-fbea-61d7-41f9c7f0d85e")
		}
	}
}

func SendCustomNotification(userId int, userName string, message string, link string) {
	//FCMData := modelsModels.FCMData{
	//	Title:       "Мэдэгдэл",
	//	Body:        message,
	//	FirstName:   userName,
	//	Sound:       config.LambdaConfig.Notify.Sound,
	//	Icon:        config.LambdaConfig.Favicon,
	//	Link:        link,
	//	ClickAction: config.LambdaConfig.Domain + link,
	//}
	//
	//FCMNotification := modelsModels.FCMNotification{
	//	Title:       "Мэдэгдэл",
	//	Body:        message,
	//	Icon:        config.LambdaConfig.Domain + "/" + config.LambdaConfig.Favicon,
	//	ClickAction: config.LambdaConfig.Domain + link,
	//}
	//data := modelsModels.NotificationData{
	//	Users: []int{userId},
	//	//Roles:        []int{2},
	//	Data:         FCMData,
	//	Notification: FCMNotification,
	//}
	//
	//notifyHandler.CreateNotification(data, map[string]interface{}{})
}
