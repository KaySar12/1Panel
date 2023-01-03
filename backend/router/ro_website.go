package router

import (
	v1 "github.com/1Panel-dev/1Panel/backend/app/api/v1"
	"github.com/1Panel-dev/1Panel/backend/middleware"
	"github.com/gin-gonic/gin"
)

type WebsiteRouter struct {
}

func (a *WebsiteRouter) InitWebsiteRouter(Router *gin.RouterGroup) {
	groupRouter := Router.Group("websites")
	groupRouter.Use(middleware.JwtAuth()).Use(middleware.SessionAuth())

	baseApi := v1.ApiGroupApp.BaseApi
	{
		groupRouter.POST("/search", baseApi.PageWebsite)
		groupRouter.GET("/list", baseApi.GetWebsites)
		groupRouter.POST("", baseApi.CreateWebsite)
		groupRouter.POST("/operate", baseApi.OpWebsite)
		groupRouter.POST("/log", baseApi.OpWebsiteLog)
		groupRouter.POST("/check", baseApi.CreateWebsiteCheck)
		groupRouter.GET("/options", baseApi.GetWebsiteOptions)
		groupRouter.POST("/update", baseApi.UpdateWebsite)
		groupRouter.GET("/:id", baseApi.GetWebsite)
		groupRouter.POST("/del", baseApi.DeleteWebsite)
		groupRouter.POST("/backup", baseApi.BackupWebsite)
		groupRouter.POST("/recover", baseApi.RecoverWebsite)
		groupRouter.POST("/recover/byupload", baseApi.RecoverWebsiteByUpload)

		groupRouter.GET("/domains/:websiteId", baseApi.GetWebDomains)
		groupRouter.POST("/domains/del", baseApi.DeleteWebDomain)
		groupRouter.POST("/domains", baseApi.CreateWebDomain)

		groupRouter.GET("/:id/nginx", baseApi.GetWebsiteNginx)
		groupRouter.POST("/config", baseApi.GetNginxConfig)
		groupRouter.POST("/config/update", baseApi.UpdateNginxConfig)
		groupRouter.GET("/:id/https", baseApi.GetHTTPSConfig)
		groupRouter.POST("/:id/https", baseApi.UpdateHTTPSConfig)
		groupRouter.POST("/waf/config", baseApi.GetWebsiteWafConfig)
		groupRouter.POST("/waf/update", baseApi.UpdateWebsiteWafConfig)
		groupRouter.POST("/nginx/update", baseApi.UpdateWebsiteNginxConfig)
		groupRouter.POST("/default/server", baseApi.ChangeDefaultServer)
	}
}
