package service

import (
	"context"
	"encoding/json"
	"github.com/1Panel-dev/1Panel/backend/app/dto"
	"github.com/1Panel-dev/1Panel/backend/app/dto/request"
	"github.com/1Panel-dev/1Panel/backend/app/dto/response"
	"github.com/1Panel-dev/1Panel/backend/app/model"
	"github.com/1Panel-dev/1Panel/backend/app/repo"
	"github.com/1Panel-dev/1Panel/backend/buserr"
	"github.com/1Panel-dev/1Panel/backend/constant"
	"github.com/1Panel-dev/1Panel/backend/global"
	"github.com/1Panel-dev/1Panel/backend/utils/compose"
	"github.com/1Panel-dev/1Panel/backend/utils/docker"
	"github.com/1Panel-dev/1Panel/backend/utils/files"
	"github.com/pkg/errors"
	"github.com/subosito/gotenv"
	"path"
	"strconv"
	"strings"
)

type RuntimeService struct {
}

type IRuntimeService interface {
	Page(req request.RuntimeSearch) (int64, []response.RuntimeDTO, error)
	Create(create request.RuntimeCreate) error
	Delete(delete request.RuntimeDelete) error
	Update(req request.RuntimeUpdate) error
	Get(id uint) (res *response.RuntimeDTO, err error)
	GetNodePackageRunScript(req request.NodePackageReq) ([]response.PackageScripts, error)
}

func NewRuntimeService() IRuntimeService {
	return &RuntimeService{}
}

func (r *RuntimeService) Create(create request.RuntimeCreate) (err error) {
	exist, _ := runtimeRepo.GetFirst(runtimeRepo.WithName(create.Name), commonRepo.WithByType(create.Type))
	if exist != nil {
		return buserr.New(constant.ErrNameIsExist)
	}
	fileOp := files.NewFileOp()

	switch create.Type {
	case constant.RuntimePHP:
		if create.Resource == constant.ResourceLocal {
			runtime := &model.Runtime{
				Name:     create.Name,
				Resource: create.Resource,
				Type:     create.Type,
				Version:  create.Version,
				Status:   constant.RuntimeNormal,
			}
			return runtimeRepo.Create(context.Background(), runtime)
		}
		exist, _ = runtimeRepo.GetFirst(runtimeRepo.WithImage(create.Image))
		if exist != nil {
			return buserr.New(constant.ErrImageExist)
		}
	case constant.RuntimeNode:
		if !fileOp.Stat(create.CodeDir) {
			return buserr.New(constant.ErrPathNotFound)
		}
		create.Install = true
	}

	appDetail, err := appDetailRepo.GetFirst(commonRepo.WithByID(create.AppDetailID))
	if err != nil {
		return err
	}
	app, err := appRepo.GetFirst(commonRepo.WithByID(appDetail.AppId))
	if err != nil {
		return err
	}
	appVersionDir := path.Join(constant.AppResourceDir, app.Resource, app.Key, appDetail.Version)
	if !fileOp.Stat(appVersionDir) || appDetail.Update {
		if err := downloadApp(app, appDetail, nil); err != nil {
			return err
		}
	}

	runtime := &model.Runtime{
		Name:        create.Name,
		AppDetailID: create.AppDetailID,
		Type:        create.Type,
		Image:       create.Image,
		Resource:    create.Resource,
		Version:     create.Version,
	}

	switch create.Type {
	case constant.RuntimePHP:
		if err = handlePHP(create, runtime, fileOp, appVersionDir); err != nil {
			return
		}
	case constant.RuntimeNode:
		if err = handleNode(create, runtime, fileOp, appVersionDir); err != nil {
			return
		}
	}
	return runtimeRepo.Create(context.Background(), runtime)
}

func (r *RuntimeService) Page(req request.RuntimeSearch) (int64, []response.RuntimeDTO, error) {
	var (
		opts []repo.DBOption
		res  []response.RuntimeDTO
	)
	if req.Name != "" {
		opts = append(opts, commonRepo.WithLikeName(req.Name))
	}
	if req.Status != "" {
		opts = append(opts, runtimeRepo.WithStatus(req.Status))
	}
	if req.Type != "" {
		opts = append(opts, commonRepo.WithByType(req.Type))
	}
	total, runtimes, err := runtimeRepo.Page(req.Page, req.PageSize, opts...)
	if err != nil {
		return 0, nil, err
	}
	for _, runtime := range runtimes {
		runtimeDTO := response.NewRuntimeDTO(runtime)
		runtimeDTO.Params = make(map[string]interface{})
		envs, err := gotenv.Unmarshal(runtime.Env)
		if err != nil {
			return 0, nil, err
		}
		for k, v := range envs {
			runtimeDTO.Params[k] = v
		}
		res = append(res, runtimeDTO)
	}
	return total, res, nil
}

func (r *RuntimeService) Delete(runtimeDelete request.RuntimeDelete) error {
	runtime, err := runtimeRepo.GetFirst(commonRepo.WithByID(runtimeDelete.ID))
	if err != nil {
		return err
	}
	website, _ := websiteRepo.GetFirst(websiteRepo.WithRuntimeID(runtimeDelete.ID))
	if website.ID > 0 {
		return buserr.New(constant.ErrDelWithWebsite)
	}
	if runtime.Resource == constant.ResourceAppstore {
		projectDir := runtime.GetPath()
		switch runtime.Type {
		case constant.RuntimePHP:
			client, err := docker.NewClient()
			if err != nil {
				return err
			}
			imageID, err := client.GetImageIDByName(runtime.Image)
			if err != nil {
				return err
			}
			if imageID != "" {
				if err := client.DeleteImage(imageID); err != nil {
					global.LOG.Errorf("delete image id [%s] error %v", imageID, err)
				}
			}
		case constant.RuntimeNode:
			if out, err := compose.Down(runtime.GetComposePath()); err != nil && !runtimeDelete.ForceDelete {
				if out != "" {
					return errors.New(out)
				}
				return err
			}
		}
		if err := files.NewFileOp().DeleteDir(projectDir); err != nil && !runtimeDelete.ForceDelete {
			return err
		}
	}
	return runtimeRepo.DeleteBy(commonRepo.WithByID(runtimeDelete.ID))
}

func (r *RuntimeService) Get(id uint) (*response.RuntimeDTO, error) {
	runtime, err := runtimeRepo.GetFirst(commonRepo.WithByID(id))
	if err != nil {
		return nil, err
	}

	res := response.NewRuntimeDTO(*runtime)
	if runtime.Resource == constant.ResourceLocal {
		return &res, nil
	}
	appDetail, err := appDetailRepo.GetFirst(commonRepo.WithByID(runtime.AppDetailID))
	if err != nil {
		return nil, err
	}
	res.AppID = appDetail.AppId
	switch runtime.Type {
	case constant.RuntimePHP:
		var (
			appForm   dto.AppForm
			appParams []response.AppParam
		)
		if err := json.Unmarshal([]byte(runtime.Params), &appForm); err != nil {
			return nil, err
		}
		envs, err := gotenv.Unmarshal(runtime.Env)
		if err != nil {
			return nil, err
		}
		if v, ok := envs["CONTAINER_PACKAGE_URL"]; ok {
			res.Source = v
		}
		for _, form := range appForm.FormFields {
			if v, ok := envs[form.EnvKey]; ok {
				appParam := response.AppParam{
					Edit:     false,
					Key:      form.EnvKey,
					Rule:     form.Rule,
					Type:     form.Type,
					Required: form.Required,
				}
				if form.Edit {
					appParam.Edit = true
				}
				appParam.LabelZh = form.LabelZh
				appParam.LabelEn = form.LabelEn
				appParam.Multiple = form.Multiple
				appParam.Value = v
				if form.Type == "select" {
					if form.Multiple {
						if v == "" {
							appParam.Value = []string{}
						} else {
							appParam.Value = strings.Split(v, ",")
						}
					} else {
						for _, fv := range form.Values {
							if fv.Value == v {
								appParam.ShowValue = fv.Label
								break
							}
						}
					}
					appParam.Values = form.Values
				}
				appParams = append(appParams, appParam)
			}
		}
		res.AppParams = appParams
	case constant.RuntimeNode:
		res.Params = make(map[string]interface{})
		envs, err := gotenv.Unmarshal(runtime.Env)
		if err != nil {
			return nil, err
		}
		for k, v := range envs {
			switch k {
			case "NODE_APP_PORT", "PANEL_APP_PORT_HTTP":
				port, err := strconv.Atoi(v)
				if err != nil {
					return nil, err
				}
				res.Params[k] = port
			default:
				res.Params[k] = v
			}
		}
	}

	return &res, nil
}

func (r *RuntimeService) Update(req request.RuntimeUpdate) error {
	runtime, err := runtimeRepo.GetFirst(commonRepo.WithByID(req.ID))
	if err != nil {
		return err
	}
	if runtime.Resource == constant.ResourceLocal {
		runtime.Version = req.Version
		return runtimeRepo.Save(runtime)
	}
	oldImage := runtime.Image
	switch runtime.Type {
	case constant.RuntimePHP:
		exist, _ := runtimeRepo.GetFirst(runtimeRepo.WithImage(req.Name), runtimeRepo.WithNotId(req.ID))
		if exist != nil {
			return buserr.New(constant.ErrImageExist)
		}
	}

	projectDir := path.Join(constant.RuntimeDir, runtime.Type, runtime.Name)
	create := request.RuntimeCreate{
		Image:   req.Image,
		Type:    runtime.Type,
		Source:  req.Source,
		Params:  req.Params,
		CodeDir: req.CodeDir,
		Version: req.Version,
	}
	composeContent, envContent, _, err := handleParams(create, projectDir)
	if err != nil {
		return err
	}
	runtime.Env = string(envContent)
	runtime.DockerCompose = string(composeContent)

	switch runtime.Type {
	case constant.RuntimePHP:
		runtime.Image = req.Image
		runtime.Status = constant.RuntimeBuildIng
		_ = runtimeRepo.Save(runtime)
		client, err := docker.NewClient()
		if err != nil {
			return err
		}
		imageID, err := client.GetImageIDByName(oldImage)
		if err != nil {
			return err
		}
		go buildRuntime(runtime, imageID, req.Rebuild)
	case constant.RuntimeNode:
		runtime.Version = req.Version
		runtime.CodeDir = req.CodeDir
		runtime.Status = constant.RuntimeReCreating
		_ = runtimeRepo.Save(runtime)
		go reCreateRuntime(runtime)
	}
	return nil
}

func (r *RuntimeService) GetNodePackageRunScript(req request.NodePackageReq) ([]response.PackageScripts, error) {
	fileOp := files.NewFileOp()
	if !fileOp.Stat(req.CodeDir) {
		return nil, buserr.New(constant.ErrPathNotFound)
	}
	if !fileOp.Stat(path.Join(req.CodeDir, "package.json")) {
		return nil, buserr.New(constant.ErrPackageJsonNotFound)
	}
	content, err := fileOp.GetContent(path.Join(req.CodeDir, "package.json"))
	if err != nil {
		return nil, err
	}
	var packageMap map[string]interface{}
	err = json.Unmarshal(content, &packageMap)
	if err != nil {
		return nil, err
	}
	scripts, ok := packageMap["scripts"]
	if !ok {
		return nil, buserr.New(constant.ErrScriptsNotFound)
	}
	var packageScripts []response.PackageScripts
	for k, v := range scripts.(map[string]interface{}) {
		packageScripts = append(packageScripts, response.PackageScripts{
			Name:   k,
			Script: v.(string),
		})
	}
	return packageScripts, nil
}
