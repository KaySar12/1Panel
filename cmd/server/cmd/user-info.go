package cmd

import (
	"fmt"

	"github.com/1Panel-dev/1Panel/backend/global"
	"github.com/1Panel-dev/1Panel/backend/utils/encrypt"
	"github.com/spf13/cobra"
)

func init() {
	RootCmd.AddCommand(userinfoCmd)
}

var userinfoCmd = &cobra.Command{
	Use:   "user-info",
	Short: "Get panel information",
	RunE: func(cmd *cobra.Command, args []string) error {
		if !isRoot() {
			fmt.Println("Please use the Sudo 1PCTL User-Info or switch to the root user")
			return nil
		}
		db, err := loadDBConn()
		if err != nil {
			return fmt.Errorf("init my db conn failed, err: %v \n", err)
		}
		user := getSettingByKey(db, "UserName")
		pass := "********"
		if isDefault(db) {
			encryptSetting := getSettingByKey(db, "EncryptKey")
			pass = getSettingByKey(db, "Password")
			if len(encryptSetting) == 16 {
				global.CONF.System.EncryptKey = encryptSetting
				pass, _ = encrypt.StringDecrypt(pass)
			}
		}
		port := getSettingByKey(db, "ServerPort")
		ssl := getSettingByKey(db, "SSL")
		entrance := getSettingByKey(db, "SecurityEntrance")
		address := getSettingByKey(db, "SystemIP")

		protocol := "http"
		if ssl == "enable" {
			protocol = "https"
		}
		if address == "" {
			address = "$LOCAL_IP"
		}

		fmt.Printf("Panel address: %s://%s:%s/%s \n", protocol, address, port, entrance)
		fmt.Println("Panel user: ", user)
		fmt.Println("Panel password: ", pass)
		fmt.Println("Tip: Modify the password by execute: 1pctl update password")
		return nil
	},
}
