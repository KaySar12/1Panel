package router

import (
	v1 "github.com/1Panel-dev/1Panel/app/api/v1"
	"github.com/1Panel-dev/1Panel/middleware"

	"github.com/gin-gonic/gin"
)

type GroupRouter struct{}

func (s *GroupRouter) InitGroupRouter(Router *gin.RouterGroup) {
	userRouter := Router.Group("groups").Use(middleware.JwtAuth()).Use(middleware.SessionAuth())
	withRecordRouter := Router.Group("groups").Use(middleware.JwtAuth()).Use(middleware.SessionAuth()).Use(middleware.OperationRecord())
	baseApi := v1.ApiGroupApp.BaseApi
	{
		withRecordRouter.POST("", baseApi.CreateGroup)
		withRecordRouter.DELETE(":id", baseApi.DeleteGroup)
		userRouter.POST("/search", baseApi.ListGroup)
		userRouter.GET(":id", baseApi.GetGroupInfo)
		userRouter.PUT(":id", baseApi.UpdateGroup)
	}
}
