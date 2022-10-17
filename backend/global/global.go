package global

import (
	"github.com/1Panel-dev/1Panel/backend/configs"
	"github.com/1Panel-dev/1Panel/backend/init/cache/badger_db"
	"github.com/1Panel-dev/1Panel/backend/init/session/psession"
	"github.com/go-playground/validator/v10"
	"github.com/robfig/cron/v3"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
)

var (
	DB      *gorm.DB
	LOG     *logrus.Logger
	CONF    configs.ServerConfig
	VALID   *validator.Validate
	SESSION *psession.PSession
	CACHE   *badger_db.Cache

	Cron *cron.Cron
)
