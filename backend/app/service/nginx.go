package service

import (
	"io/ioutil"
	"net/http"
	"path"
	"strings"

	"github.com/1Panel-dev/1Panel/backend/app/dto"
	"github.com/1Panel-dev/1Panel/backend/constant"
	"github.com/1Panel-dev/1Panel/backend/utils/files"
)

type NginxService struct {
}

func (n NginxService) GetNginxConfig() (dto.FileInfo, error) {
	nginxInstall, err := getAppInstallByKey("nginx")
	if err != nil {
		return dto.FileInfo{}, err
	}
	configPath := path.Join(constant.AppInstallDir, "nginx", nginxInstall.Name, "conf", "nginx.conf")
	info, err := files.NewFileInfo(files.FileOption{
		Path:   configPath,
		Expand: true,
	})
	if err != nil {
		return dto.FileInfo{}, err
	}
	return dto.FileInfo{FileInfo: *info}, nil
}

func (n NginxService) GetConfigByScope(req dto.NginxScopeReq) ([]dto.NginxParam, error) {
	keys, ok := dto.ScopeKeyMap[req.Scope]
	if !ok || len(keys) == 0 {
		return nil, nil
	}
	return getNginxParamsByKeys(constant.NginxScopeHttp, keys, nil)
}

func (n NginxService) UpdateConfigByScope(req dto.NginxConfigReq) error {
	keys, ok := dto.ScopeKeyMap[req.Scope]
	if !ok || len(keys) == 0 {
		return nil
	}
	return updateNginxConfig(constant.NginxScopeHttp, getNginxParams(req.Params, keys), nil)
}

func (n NginxService) GetStatus() (dto.NginxStatus, error) {
	res, err := http.Get("http://127.0.0.1/nginx_status")
	if err != nil {
		return dto.NginxStatus{}, err
	}
	content, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return dto.NginxStatus{}, err
	}
	var status dto.NginxStatus
	resArray := strings.Split(string(content), " ")
	status.Active = resArray[2]
	status.Accepts = resArray[7]
	status.Handled = resArray[8]
	status.Requests = resArray[9]
	status.Reading = resArray[11]
	status.Writing = resArray[13]
	status.Waiting = resArray[15]
	return status, nil
}
