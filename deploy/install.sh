#!/bin/bash

PANEL_BASE_DIR=/opt
PANEL_PORT=10086
DEFAULT_ENTRANCE="nextweb"
DEFAULT_USERNAME="nextzen"
DEFAULT_PASSWORD="Smartyourlife123@*"

CURRENT_DIR=$(
    cd "$(dirname "$0")"
    pwd
)

function log() {
    message="[NextWeb Log]: $1 "
    echo -e "${message}" 2>&1 | tee -a ${CURRENT_DIR}/install.log
}

echo
cat <<EOF
 ▄▄▄   ▄▄                               ▄▄      ▄▄ ▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄   
 ███   ██                        ██     ██      ██ ██▀▀▀▀▀▀  ██▀▀▀▀██ 
 ██▀█  ██   ▄████▄   ▀██  ██▀  ███████  ▀█▄ ██ ▄█▀ ██        ██    ██ 
 ██ ██ ██  ██▄▄▄▄██    ████      ██      ██ ██ ██  ███████   ███████  
 ██  █▄██  ██▀▀▀▀▀▀    ▄██▄      ██      ███▀▀███  ██        ██    ██ 
 ██   ███  ▀██▄▄▄▄█   ▄█▀▀█▄     ██▄▄▄   ███  ███  ██▄▄▄▄▄▄  ██▄▄▄▄██ 
 ▀▀   ▀▀▀    ▀▀▀▀▀   ▀▀▀  ▀▀▀     ▀▀▀▀   ▀▀▀  ▀▀▀  ▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀  
EOF

log "======================= Start installation ======================="

function Prepare_System() {
    if which nextweb >/dev/null 2>&1; then
        log "NextWEB Linux The server operation and maintenance management panel has been installed, please do not repeat the installation"
        #exit 1
        nextweb
    fi
}

function Set_Dir() {
    if [[ ! -d $PANEL_BASE_DIR ]]; then
        mkdir -p $PANEL_BASE_DIR
        log "The installation path has been set to $PANEL_BASE_DIR"
    fi

}

function Install_Docker() {
    if which docker >/dev/null 2>&1; then
        log "Detect Docker Has been installed, skip installation steps"
        log "start up Docker "
        systemctl start docker 2>&1 | tee -a ${CURRENT_DIR}/install.log
    else
        log "... Installing Docker"

        curl -fsSL https://get.docker.com -o get-docker.sh 2>&1 | tee -a ${CURRENT_DIR}/install.log
        if [[ ! -f get-docker.sh ]]; then
            log "docker The download of the online installation script failed, please try again"
            exit 1
        fi
        if [[ $(curl -s ipinfo.io/country) == "CN" ]]; then
            sh get-docker.sh --mirror Aliyun 2>&1 | tee -a ${CURRENT_DIR}/install.log
        else
            sh get-docker.sh 2>&1 | tee -a ${CURRENT_DIR}/install.log
        fi

        log "... start up docker"
        systemctl enable docker
        systemctl daemon-reload
        systemctl start docker 2>&1 | tee -a ${CURRENT_DIR}/install.log

        docker_config_folder="/etc/docker"
        if [[ ! -d "$docker_config_folder" ]]; then
            mkdir -p "$docker_config_folder"
        fi

        docker version >/dev/null 2>&1
        if [[ $? -ne 0 ]]; then
            log "Failed to install docker"
            exit 1
        else
            log "docker install successfully"
        fi
    fi
}

function Install_Compose() {
    docker-compose version >/dev/null 2>&1
    if [[ $? -ne 0 ]]; then
        log "... install docker-compose"

        arch=$(uname -m)
        if [ "$arch" == 'armv7l' ]; then
            arch='armv7'
        fi
        curl -L https://resource.fit2cloud.com/docker/compose/releases/download/v2.16.0/docker-compose-$(uname -s | tr A-Z a-z)-$arch -o /usr/local/bin/docker-compose 2>&1 | tee -a ${CURRENT_DIR}/install.log
        if [[ ! -f /usr/local/bin/docker-compose ]]; then
            log "docker-compose The download failed, please try again"
            exit 1
        fi
        chmod +x /usr/local/bin/docker-compose
        ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

        docker-compose version >/dev/null 2>&1
        if [[ $? -ne 0 ]]; then
            log "docker-compose install Failed"
            exit 1
        else
            log "docker-compose install Successfully"
        fi
    else
        compose_v=$(docker-compose -v)
        if [[ $compose_v =~ 'docker-compose' ]]; then
            read -p "Current Install Docker compose version is outdated (must be >= V2.0.0), upgrade [y/n]: " UPGRADE_DOCKER_COMPOSE
            if [[ "$UPGRADE_DOCKER_COMPOSE" == "Y" ]] || [[ "$UPGRADE_DOCKER_COMPOSE" == "y" ]]; then
                rm -rf /usr/local/bin/docker-compose /usr/bin/docker-compose
                Install_Compose
            else
                log "Docker Compose 版本为 $Compose_V may affect the normal use of the application store"
            fi
        else
            log "The docker compose has been installed, and the installation steps are skipped"
        fi
    fi
}

function Set_Port() {
    PANEL_PORT=${PANEL_PORT:-10086}
    log "The port you set is:$PANEL_PORT"
}

function Set_Firewall() {
    if which firewall-cmd >/dev/null 2>&1; then
        if systemctl status firewalld | grep -q "Active: active" >/dev/null 2>&1; then
            log "Firewall open in Port $PANEL_PORT "
            firewall-cmd --zone=public --add-port=$PANEL_PORT/tcp --permanent
            firewall-cmd --reload
        else
            log "The firewall is not opened, and the port is open"
        fi
    fi

    if which ufw >/dev/null 2>&1; then
        if systemctl status ufw | grep -q "Active: active" >/dev/null 2>&1; then
            log "Firewall open in port $PANEL_PORT "
            ufw allow $PANEL_PORT/tcp
            ufw reload
        else
            log "The firewall is not opened, and the port is open"
        fi
    fi
}

function Set_Username() {
    PANEL_USERNAME=${PANEL_USERNAME:-$DEFAULT_USERNAME}
    log "The user name you set is:$PANEL_USERNAME"
}

function Set_Password() {
    PANEL_PASSWORD=${PANEL_PASSWORD:-$DEFAULT_PASSWORD}
}

function Init_Panel() {
    log "Configuration NextWeb Service"

    RUN_BASE_DIR=$PANEL_BASE_DIR/nextweb
    mkdir -p $RUN_BASE_DIR
    rm -rf $RUN_BASE_DIR/*

    cd ${CURRENT_DIR}

    cp ./nextweb /usr/local/bin && chmod +x /usr/local/bin/nextweb
    if [[ ! -f /usr/bin/nextweb ]]; then
        ln -s /usr/local/bin/nextweb /usr/bin/nextweb >/dev/null 2>&1
    fi

    cp ./1pctl /usr/local/bin && chmod +x /usr/local/bin/1pctl
    sed -i -e "s#BASE_DIR=.*#BASE_DIR=${PANEL_BASE_DIR}#g" /usr/local/bin/1pctl
    sed -i -e "s#ORIGINAL_PORT=.*#ORIGINAL_PORT=${PANEL_PORT}#g" /usr/local/bin/1pctl
    sed -i -e "s#ORIGINAL_USERNAME=.*#ORIGINAL_USERNAME=${PANEL_USERNAME}#g" /usr/local/bin/1pctl
    ESCAPED_PANEL_PASSWORD=$(echo "$PANEL_PASSWORD" | sed 's/[!@#$%*_,.?]/\\&/g')
    sed -i -e "s#ORIGINAL_PASSWORD=.*#ORIGINAL_PASSWORD=${ESCAPED_PANEL_PASSWORD}#g" /usr/local/bin/1pctl
    PANEL_ENTRANCE=${PANEL_ENTRANCE:-$DEFAULT_ENTRANCE}
    sed -i -e "s#ORIGINAL_ENTRANCE=.*#ORIGINAL_ENTRANCE=${PANEL_ENTRANCE}#g" /usr/local/bin/1pctl
    if [[ ! -f /usr/bin/1pctl ]]; then
        ln -s /usr/local/bin/1pctl /usr/bin/1pctl >/dev/null 2>&1
    fi

}

function Show_Result() {
    log ""
    log "=================Thank you for your patience, the installation has been completed=================="
    log ""
    log "Please use the browser to access the panel:"
    log "Panel address: http://\$LOCAL_IP:$PANEL_PORT/$PANEL_ENTRANCE"
    log "User name: $PANEL_USERNAME"
    log "User password: $PANEL_PASSWORD"
    log ""
    log ""
    log "If you use the cloud server, please open the $ Panel_port port to the security group"
    log ""
    log "================================================================"
}

function main() {
    Prepare_System
    Set_Dir
    #   Install_Docker
    #   Install_Compose
    Set_Port
    Set_Firewall
    Set_Username
    Set_Password
    Init_Panel
    Show_Result
}
main
