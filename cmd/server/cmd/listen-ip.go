package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

func init() {
	RootCmd.AddCommand(listenCmd)
	listenCmd.AddCommand(listenIpv4Cmd)
	listenCmd.AddCommand(listenIpv6Cmd)
}

var listenCmd = &cobra.Command{
	Use:   "listen-ip",
	Short: "切换监听 IP",
}

var listenIpv4Cmd = &cobra.Command{
	Use:   "ipv4",
	Short: "监听 IPv4",
	RunE: func(cmd *cobra.Command, args []string) error {
		return updateBindInfo("ipv4")
	},
}
var listenIpv6Cmd = &cobra.Command{
	Use:   "ipv6",
	Short: "监听 IPv6",
	RunE: func(cmd *cobra.Command, args []string) error {
		return updateBindInfo("ipv6")
	},
}

func updateBindInfo(protocol string) error {
	if !isRoot() {
		fmt.Println("Please use sudo 1pctl listen-ip ipv6 Or switch to root user")
		return nil
	}
	db, err := loadDBConn()
	if err != nil {
		return err
	}
	ipv6 := "disable"
	tcp := "tcp4"
	address := "0.0.0.0"
	if protocol == "ipv6" {
		ipv6 = "enable"
		tcp = "tcp6"
		address = "::"
	}
	if err := setSettingByKey(db, "Ipv6", ipv6); err != nil {
		return err
	}
	if err := setSettingByKey(db, "BindAddress", address); err != nil {
		return err
	}
	fmt.Printf("Successfully switch！Switch to monitoring %s [%s]", tcp, address)
	return nil
}
