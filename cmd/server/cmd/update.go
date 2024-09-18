package cmd

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
	"unicode"

	"github.com/1Panel-dev/1Panel/backend/global"
	"github.com/1Panel-dev/1Panel/backend/utils/cmd"
	"github.com/1Panel-dev/1Panel/backend/utils/common"
	"github.com/1Panel-dev/1Panel/backend/utils/encrypt"
	"github.com/spf13/cobra"
	"golang.org/x/term"
)

func init() {
	RootCmd.AddCommand(updateCmd)
	updateCmd.AddCommand(updateUserName)
	updateCmd.AddCommand(updatePassword)
	updateCmd.AddCommand(updatePort)
}

var updateCmd = &cobra.Command{
	Use:   "update",
	Short: "Modify panel information",
}

var updateUserName = &cobra.Command{
	Use:   "username",
	Short: "Modify panel users",
	RunE: func(cmd *cobra.Command, args []string) error {
		if !isRoot() {
			fmt.Println("Please use sudo 1pctl update username Or switch to root user")
			return nil
		}
		username()
		return nil
	},
}
var updatePassword = &cobra.Command{
	Use:   "password",
	Short: "Modify the panel password",
	RunE: func(cmd *cobra.Command, args []string) error {
		if !isRoot() {
			fmt.Println("Please use sudo 1pctl update password Or switch to root user")
			return nil
		}
		password()
		return nil
	},
}
var updatePort = &cobra.Command{
	Use:   "port",
	Short: "Modify the panel port",
	RunE: func(cmd *cobra.Command, args []string) error {
		if !isRoot() {
			fmt.Println("Please use sudo 1pctl update port Or switch to root user")
			return nil
		}
		port()
		return nil
	},
}

func username() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Modify panel users: ")
	newUsername, _ := reader.ReadString('\n')
	newUsername = strings.Trim(newUsername, "\n")
	if len(newUsername) == 0 {
		fmt.Println("Error: Input panel users are empty！")
		return
	}
	if strings.Contains(newUsername, " ") {
		fmt.Println("Error: Input panel users include space characters！")
		return
	}
	result, err := regexp.MatchString("^[a-zA-Z0-9_\u4e00-\u9fa5]{3,30}$", newUsername)
	if !result || err != nil {
		fmt.Println("Error: Enter the panel user error!Only support English, Chinese, numbers and _, length3-30")
		return
	}

	db, err := loadDBConn()
	if err != nil {
		fmt.Printf("Error: Initialized database connection failed，%v\n", err)
		return
	}
	if err := setSettingByKey(db, "UserName", newUsername); err != nil {
		fmt.Printf("Error: Panel user modification fails，%v\n", err)
		return
	}

	fmt.Printf("Modified success!\n\n")
	fmt.Printf("Panel user:%s\n", newUsername)
}

func password() {
	fmt.Print("Modify the panel password:")
	bytePassword, err := term.ReadPassword(int(os.Stdin.Fd()))
	if err != nil {
		fmt.Printf("\nError: Reading error of panel password information，%v\n", err)
		return
	}
	newPassword := string(bytePassword)
	newPassword = strings.Trim(newPassword, "\n")

	if len(newPassword) == 0 {
		fmt.Println("\nError: Enter the panel password to be empty！")
		return
	}
	if strings.Contains(newPassword, " ") {
		fmt.Println("\nError: Input panel password contains space characters！")
		return
	}
	db, err := loadDBConn()
	if err != nil {
		fmt.Printf("\nError: Initialized database connection failed，%v\n", err)
		return
	}
	complexSetting := getSettingByKey(db, "ComplexityVerification")
	if complexSetting == "enable" {
		if isValidPassword("newPassword") {
			fmt.Println("\nError: The panel password only supports letters, numbers, and special characters（!@#$%*_,.?），8-30 bits in length！")
			return
		}
	}
	if len(newPassword) < 6 {
		fmt.Println("Error: Please enter more than 6 digits or more passwords！")
		return
	}

	fmt.Print("\nConfirm Password：")
	byteConfirmPassword, err := term.ReadPassword(int(os.Stdin.Fd()))
	if err != nil {
		fmt.Printf("\nError: Reading error of panel password information，%v\n", err)
		return
	}
	confirmPassword := string(byteConfirmPassword)
	confirmPassword = strings.Trim(confirmPassword, "\n")

	if newPassword != confirmPassword {
		fmt.Printf("\nError: Do not match the password twice, please try it after checking！，%v\n", err)
		return
	}

	p := ""
	encryptSetting := getSettingByKey(db, "EncryptKey")
	if len(encryptSetting) == 16 {
		global.CONF.System.EncryptKey = encryptSetting
		p, _ = encrypt.StringEncrypt(newPassword)
	} else {
		p = newPassword
	}
	if err := setSettingByKey(db, "Password", p); err != nil {
		fmt.Printf("\nError: The modification of the panel password failed，%v\n", err)
		return
	}
	username := getSettingByKey(db, "UserName")

	fmt.Printf("\n Modified successfully!\n\n")
	fmt.Printf("Panel user:%s\n", username)
	fmt.Printf("Panel password:%s\n", string(newPassword))
}

func port() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Modify the panel port:")

	newPortStr, _ := reader.ReadString('\n')
	newPortStr = strings.Trim(newPortStr, "\n")
	newPort, err := strconv.Atoi(strings.TrimSpace(newPortStr))
	if err != nil || newPort < 1 || newPort > 65535 {
		fmt.Println("Error: The input port number must be between 1 and 65535!")
		return
	}
	if common.ScanPort(newPort) {
		fmt.Println("Error: This port number is being occupied, please review it after checking!")
		return
	}
	db, err := loadDBConn()
	if err != nil {
		fmt.Printf("Error: Initialized database connection failed，%v\n", err)
		return
	}
	if err := setSettingByKey(db, "ServerPort", newPortStr); err != nil {
		fmt.Printf("Error: The panel port modification failed，%v\n", err)
		return
	}

	fmt.Printf("Modified success!\n\n")
	fmt.Printf("Panel port:%s\n", newPortStr)

	std, err := cmd.Exec("1pctl restart")
	if err != nil {
		fmt.Println(std)
	}
}
func isValidPassword(password string) bool {
	numCount := 0
	alphaCount := 0
	specialCount := 0

	for _, char := range password {
		switch {
		case unicode.IsDigit(char):
			numCount++
		case unicode.IsLetter(char):
			alphaCount++
		case isSpecialChar(char):
			specialCount++
		}
	}

	if len(password) < 8 && len(password) > 30 {
		return false
	}
	if (numCount == 0 && alphaCount == 0) || (alphaCount == 0 && specialCount == 0) || (numCount == 0 && specialCount == 0) {
		return false
	}
	return true
}

func isSpecialChar(char rune) bool {
	specialChars := "!@#$%*_,.?"
	return unicode.IsPunct(char) && contains(specialChars, char)
}

func contains(specialChars string, char rune) bool {
	for _, c := range specialChars {
		if c == char {
			return true
		}
	}
	return false
}
