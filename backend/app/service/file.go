package service

import (
	"fmt"
	"github.com/1Panel-dev/1Panel/backend/app/dto/request"
	"github.com/1Panel-dev/1Panel/backend/app/dto/response"
	"github.com/1Panel-dev/1Panel/backend/buserr"
	"github.com/1Panel-dev/1Panel/backend/constant"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/1Panel-dev/1Panel/backend/global"
	"github.com/1Panel-dev/1Panel/backend/utils/common"
	"github.com/1Panel-dev/1Panel/backend/utils/files"
	"github.com/pkg/errors"
	uuid "github.com/satori/go.uuid"
)

type FileService struct {
}

func (f FileService) GetFileList(op request.FileOption) (response.FileInfo, error) {
	var fileInfo response.FileInfo
	if _, err := os.Stat(op.Path); err != nil && os.IsNotExist(err) {
		return fileInfo, nil
	}
	info, err := files.NewFileInfo(op.FileOption)
	if err != nil {
		return fileInfo, err
	}
	fileInfo.FileInfo = *info
	return fileInfo, nil
}

func (f FileService) GetFileTree(op request.FileOption) ([]response.FileTree, error) {
	var treeArray []response.FileTree
	info, err := files.NewFileInfo(op.FileOption)
	if err != nil {
		return nil, err
	}
	node := response.FileTree{
		ID:   common.GetUuid(),
		Name: info.Name,
		Path: info.Path,
	}
	for _, v := range info.Items {
		if v.IsDir {
			node.Children = append(node.Children, response.FileTree{
				ID:   common.GetUuid(),
				Name: v.Name,
				Path: v.Path,
			})
		}
	}
	return append(treeArray, node), nil
}

func (f FileService) Create(op request.FileCreate) error {
	fo := files.NewFileOp()
	if fo.Stat(op.Path) {
		return errors.New("file is exist")
	}
	if op.IsDir {
		return fo.CreateDir(op.Path, fs.FileMode(op.Mode))
	} else {
		if op.IsLink {
			return fo.LinkFile(op.LinkPath, op.Path, op.IsSymlink)
		} else {
			return fo.CreateFile(op.Path)
		}
	}
}

func (f FileService) Delete(op request.FileDelete) error {
	fo := files.NewFileOp()
	if op.IsDir {
		return fo.DeleteDir(op.Path)
	} else {
		return fo.DeleteFile(op.Path)
	}
}

func (f FileService) BatchDelete(op request.FileBatchDelete) error {
	fo := files.NewFileOp()
	if op.IsDir {
		for _, file := range op.Paths {
			if err := fo.DeleteDir(file); err != nil {
				return err
			}
		}
	} else {
		for _, file := range op.Paths {
			if err := fo.DeleteFile(file); err != nil {
				return err
			}
		}
	}
	return nil
}

func (f FileService) ChangeMode(op request.FileCreate) error {
	fo := files.NewFileOp()
	return fo.Chmod(op.Path, fs.FileMode(op.Mode))
}

func (f FileService) Compress(c request.FileCompress) error {
	fo := files.NewFileOp()
	if !c.Replace && fo.Stat(filepath.Join(c.Dst, c.Name)) {
		return errors.New("file is exist")
	}

	return fo.Compress(c.Files, c.Dst, c.Name, files.CompressType(c.Type))
}

func (f FileService) DeCompress(c request.FileDeCompress) error {
	fo := files.NewFileOp()
	return fo.Decompress(c.Path, c.Dst, files.CompressType(c.Type))
}

func (f FileService) GetContent(op request.FileOption) (response.FileInfo, error) {
	info, err := files.NewFileInfo(op.FileOption)
	if err != nil {
		return response.FileInfo{}, err
	}
	return response.FileInfo{FileInfo: *info}, nil
}

func (f FileService) SaveContent(edit request.FileEdit) error {

	info, err := files.NewFileInfo(files.FileOption{
		Path:   edit.Path,
		Expand: false,
	})
	if err != nil {
		return err
	}

	fo := files.NewFileOp()
	return fo.WriteFile(edit.Path, strings.NewReader(edit.Content), info.FileMode)
}

func (f FileService) ChangeName(req request.FileRename) error {
	fo := files.NewFileOp()
	return fo.Rename(req.OldName, req.NewName)
}

func (f FileService) Wget(w request.FileWget) (string, error) {
	fo := files.NewFileOp()
	key := "file-wget-" + uuid.NewV4().String()
	return key, fo.DownloadFileWithProcess(w.Url, filepath.Join(w.Path, w.Name), key)
}

func (f FileService) MvFile(m request.FileMove) error {
	fo := files.NewFileOp()
	if !fo.Stat(m.NewPath) {
		return buserr.New(constant.ErrPathNotFound)
	}

	if m.Type == "cut" {
		return fo.Cut(m.OldPaths, m.NewPath)
	}
	var errs []error
	if m.Type == "copy" {
		for _, src := range m.OldPaths {
			if err := fo.Copy(src, m.NewPath); err != nil {
				errs = append(errs, err)
				global.LOG.Errorf("copy file [%s] to [%s] failed, err: %s", src, m.NewPath, err.Error())
			}
		}
	}

	var errString string
	for _, err := range errs {
		errString += err.Error() + "\n"
	}
	if errString != "" {
		return errors.New(errString)
	}

	return nil
}

func (f FileService) FileDownload(d request.FileDownload) (string, error) {
	tempPath := filepath.Join(os.TempDir(), fmt.Sprintf("%d", time.Now().UnixNano()))
	if err := os.MkdirAll(tempPath, os.ModePerm); err != nil {
		return "", err
	}
	fo := files.NewFileOp()
	if err := fo.Compress(d.Paths, tempPath, d.Name, files.CompressType(d.Type)); err != nil {
		return "", err
	}
	filePath := filepath.Join(tempPath, d.Name)
	return filePath, nil
}

func (f FileService) DirSize(req request.DirSizeReq) (response.DirSizeRes, error) {
	fo := files.NewFileOp()
	size, err := fo.GetDirSize(req.Path)
	if err != nil {
		return response.DirSizeRes{}, err
	}
	return response.DirSizeRes{Size: size}, nil
}
