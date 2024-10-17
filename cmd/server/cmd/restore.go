package cmd

import (
	"fmt"
	"os"
	"path"
	"sort"
	"strings"
	"time"

	cmdUtils "github.com/1Panel-dev/1Panel/backend/utils/cmd"
	"github.com/1Panel-dev/1Panel/backend/utils/common"
	"github.com/pkg/errors"

	"github.com/spf13/cobra"
)

func init() {
	RootCmd.AddCommand(restoreCmd)
}

var restoreCmd = &cobra.Command{
	Use:   "restore",
	Short: "Roll back the NextWeb service and data",
	RunE: func(cmd *cobra.Command, args []string) error {
		if !isRoot() {
			fmt.Println("Please use sudo")
			return nil
		}
		stdout, err := cmdUtils.Exec("grep '^BASE_DIR=' /usr/local/bin/1pctl | cut -d'=' -f2")
		if err != nil {
			return fmt.Errorf("handle load `BASE_DIR` failed, err: %v", err)
		}
		baseDir := strings.ReplaceAll(stdout, "\n", "")
		upgradeDir := path.Join(baseDir, "nextweb", "tmp", "upgrade")

		tmpPath, err := loadRestorePath(upgradeDir)
		if err != nil {
			return err
		}
		if tmpPath == "There is no recovery file" {
			fmt.Println("There is no recovery file")
			return nil
		}
		tmpPath = path.Join(upgradeDir, tmpPath, "original")
		fmt.Printf("(0/4) Start Catalog rollback%s Catalog rollback NextWeb Service and data... \n", tmpPath)

		if err := common.CopyFile(path.Join(tmpPath, "nextweb"), "/usr/local/bin"); err != nil {
			return err
		}
		fmt.Println("(1/4) nextweb binary rollback successfully")
		if err := common.CopyFile(path.Join(tmpPath, "1pctl"), "/usr/local/bin"); err != nil {
			return err
		}
		fmt.Println("(2/4) nextweb Roll back successfully")
		if err := common.CopyFile(path.Join(tmpPath, "nextweb.service"), "/etc/systemd/system"); err != nil {
			return err
		}
		fmt.Println("(3/4) nextweb The service return is successful")
		checkPointOfWal()
		if _, err := os.Stat(path.Join(tmpPath, "NextWeb.db")); err == nil {
			if err := common.CopyFile(path.Join(tmpPath, "NextWeb.db"), path.Join(baseDir, "nextweb/db")); err != nil {
				return err
			}
		}
		if _, err := os.Stat(path.Join(tmpPath, "db.tar.gz")); err == nil {
			if err := handleUnTar(path.Join(tmpPath, "db.tar.gz"), path.Join(baseDir, "nextweb")); err != nil {
				return err
			}
		}
		fmt.Printf("(4/4) NextWeb Data rollback success \n\n")

		fmt.Println("Roll back success!Repeat the service, please wait ...")
		return nil
	},
}

func checkPointOfWal() {
	db, err := loadDBConn()
	if err != nil {
		return
	}
	_ = db.Exec("PRAGMA wal_checkpoint(TRUNCATE);").Error
}

func loadRestorePath(upgradeDir string) (string, error) {
	if _, err := os.Stat(upgradeDir); err != nil && os.IsNotExist(err) {
		return "暂无可回滚文件", nil
	}
	files, err := os.ReadDir(upgradeDir)
	if err != nil {
		return "", err
	}
	var folders []string
	for _, file := range files {
		if file.IsDir() {
			folders = append(folders, file.Name())
		}
	}
	if len(folders) == 0 {
		return "暂无可回滚文件", nil
	}
	sort.Slice(folders, func(i, j int) bool {
		return folders[i] > folders[j]
	})
	return folders[0], nil
}

func handleUnTar(sourceFile, targetDir string) error {
	if _, err := os.Stat(targetDir); err != nil && os.IsNotExist(err) {
		if err = os.MkdirAll(targetDir, os.ModePerm); err != nil {
			return err
		}
	}

	commands := fmt.Sprintf("tar zxvfC %s %s", sourceFile, targetDir)
	stdout, err := cmdUtils.ExecWithTimeOut(commands, 20*time.Second)
	if err != nil {
		return errors.New(stdout)
	}
	return nil
}
