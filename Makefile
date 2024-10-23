GOCMD=go
DOCKERCMD=docker
GOBUILD=$(GOCMD) build
DOCKERBUILD=$(DOCKERCMD) build
DOCKERCOMPOSE = $(DOCKERCMD) compose
DOCKERPUSH=$(DOCKERCMD) push
DOCKERIMAGE=$(DOCKERCMD) image
GOCLEAN=$(GOCMD) clean
GOARCH=$(shell go env GOARCH)
GOOS=$(shell go env GOOS)

BASE_PATH := $(shell pwd)
BUILD_PATH = $(BASE_PATH)/build
DEPLOY_PATH = $(BASE_PATH)/deploy
WEB_PATH=$(BASE_PATH)/frontend
SERVER_PATH=$(BASE_PATH)/backend
MAIN= $(BASE_PATH)/cmd/server/main.go
APP_NAME=nextweb
APP_VERSION=V1.1.0-beta
IMAGE_TAG=1.1
DOCKER_USERNAME=kaysar12
ASSERT_PATH= $(BASE_PATH)/cmd/server/web/assets
DETACH ?= false
NEXTZEN_REGISTRY=hub.c14soft.com
clean_assets:
	rm -rf $(ASSERT_PATH) &&\
    if [ -f "$(DEPLOY_PATH)/$(APP_NAME)" ]; then \
        rm $(DEPLOY_PATH)/$(APP_NAME); \
    fi
	

upx_bin:
	upx $(BUILD_PATH)/$(APP_NAME)

build_frontend:
	export NODE_OPTIONS="--max-old-space-size=8192" \
	&& cd $(WEB_PATH) && npm install && npm run build:pro

build_backend:
	cd $(SERVER_PATH) \
    && GOOS=$(GOOS) GOARCH=$(GOARCH) $(GOBUILD)  -ldflags '-s -w' -gcflags=all="-N -l" -o $(BUILD_PATH)/$(APP_NAME) $(MAIN)

build_all: build_frontend build_backend

build_on_local: clean_assets build_frontend build_backend upx_bin

build_image:
	if [ ! -f "$(BUILD_PATH)/$(APP_NAME)" ]; then \
		echo "Error: $(APP_NAME) does not exist in $(BUILD_PATH)"; \
		exit 1; \
	fi
	cp $(BUILD_PATH)/$(APP_NAME) $(DEPLOY_PATH) && \
	cd $(DEPLOY_PATH) && \
	$(DOCKERBUILD) --build-arg PANELVER=$(APP_VERSION) -t ${DOCKER_USERNAME}/$(APP_NAME):$(IMAGE_TAG) .
build_image_nextzen:
	if [ ! -f "$(BUILD_PATH)/$(APP_NAME)" ]; then \
		echo "Error: $(APP_NAME) does not exist in $(BUILD_PATH)"; \
		exit 1; \
	fi
	cp $(BUILD_PATH)/$(APP_NAME) $(DEPLOY_PATH) && \
	cd $(DEPLOY_PATH) && \
	$(DOCKERBUILD) --build-arg PANELVER=$(APP_VERSION) -t ${NEXTZEN_REGISTRY}/${NEXTZEN_ORG}/$(APP_NAME):$(IMAGE_TAG) .
remove_image:
	@if [ -n "$(shell $(DOCKERIMAGE) ls -q "${DOCKER_USERNAME}/${APP_NAME}:${IMAGE_TAG}")" ]; then \
		$(DOCKERIMAGE) rm ${DOCKER_USERNAME}/$(APP_NAME):$(IMAGE_TAG); \
	else \
		echo "Image ${DOCKER_USERNAME}/${APP_NAME}:${IMAGE_TAG} does not exist."; \
	fi
push_image:
	$(DOCKERPUSH) ${DOCKER_USERNAME}/$(APP_NAME):$(IMAGE_TAG)
push_image_nextzen:
	$(DOCKERPUSH) ${NEXTZEN_REGISTRY}/${NEXTZEN_ORG}/$(APP_NAME):$(IMAGE_TAG)
quick_run:
	cd $(DEPLOY_PATH)  && \
	$(DOCKERCOMPOSE) up $(if $(DETACH),--detach)
stop_clean:
	cd $(DEPLOY_PATH)  && \
	$(DOCKERCOMPOSE) down --rmi all --volumes 
stop:
	cd $(DEPLOY_PATH)  && \
	$(DOCKERCOMPOSE) down 
deploy:clean_assets build_all remove_image build_image push_image
deploy_and_run: clean_assets build_all remove_image build_image push_image quick_run



