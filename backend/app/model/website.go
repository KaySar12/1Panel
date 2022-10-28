package model

import "time"

type WebSite struct {
	BaseModel
	PrimaryDomain  string    `gorm:"type:varchar(128);not null" json:"primaryDomain"`
	Type           string    `gorm:"type:varchar(64);not null" json:"type"`
	Alias          string    `gorm:"type:varchar(128);not null" json:"alias"`
	Remark         string    `gorm:"type:longtext;" json:"remark"`
	Status         string    `gorm:"type:varchar(64);not null" json:"status"`
	ExpireDate     time.Time `json:"expireDate"`
	AppInstallID   uint      `gorm:"type:integer" json:"appInstallID"`
	WebSiteGroupID uint      `gorm:"type:integer" json:"webSiteGroupID"`
	WebSiteSSLID   uint      `gorm:"type:integer" json:"webSiteSSLID"`
}
