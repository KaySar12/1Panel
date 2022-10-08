package service

import "github.com/1Panel-dev/1Panel/backend/app/repo"

type ServiceGroup struct {
	AuthService
	HostService
	BackupService
	GroupService
	ContainerService
	CommandService
	OperationService
	FileService
	CronjobService
	SettingService
	AppService
}

var ServiceGroupApp = new(ServiceGroup)

var (
	hostRepo               = repo.RepoGroupApp.HostRepo
	backupRepo             = repo.RepoGroupApp.BackupRepo
	groupRepo              = repo.RepoGroupApp.GroupRepo
	commandRepo            = repo.RepoGroupApp.CommandRepo
	operationRepo          = repo.RepoGroupApp.OperationRepo
	commonRepo             = repo.RepoGroupApp.CommonRepo
	cronjobRepo            = repo.RepoGroupApp.CronjobRepo
	settingRepo            = repo.RepoGroupApp.SettingRepo
	appRepo                = repo.RepoGroupApp.AppRepo
	appTagRepo             = repo.RepoGroupApp.AppTagRepo
	appDetailRepo          = repo.RepoGroupApp.AppDetailRepo
	tagRepo                = repo.RepoGroupApp.TagRepo
	appInstallRepo         = repo.RepoGroupApp.AppInstallRepo
	appInstallResourceRepo = repo.RepoGroupApp.AppInstallResourceRpo
	dataBaseRepo           = repo.RepoGroupApp.DatabaseRepo
	appInstallBackupRepo   = repo.RepoGroupApp.AppInstallBackupRepo
)
