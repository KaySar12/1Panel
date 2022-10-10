export default {
    commons: {
        true: '是',
        false: '否',
        button: {
            create: '新建',
            add: '添加',
            save: '保存',
            set: '设置',
            sync: '同步',
            delete: '删除',
            edit: '编辑',
            enable: '启用',
            disable: '禁用',
            confirm: '确认',
            cancel: '取消',
            reset: '重置',
            conn: '连接',
            clean: '清空',
            login: '登录',
            close: '关闭',
            view: '详情',
            watch: '追踪',
            handle: '执行',
            expand: '展开',
            log: '日志',
            saveAndEnable: '保存并启用',
        },
        search: {
            timeStart: '开始时间',
            timeEnd: '结束时间',
            timeRange: '至',
            dateStart: '开始日期',
            dateEnd: '结束日期',
        },
        table: {
            total: '共 {0} 条',
            name: '名称',
            type: '类型',
            status: '状态',
            statusSuccess: '成功',
            statusFailed: '失败',
            records: '任务输出',
            group: '组',
            createdAt: '创建时间',
            date: '时间',
            updatedAt: '更新时间',
            operate: '操作',
            message: '信息',
            description: '描述信息',
            interval: '耗时',
        },
        msg: {
            delete: '此操作不可回滚,是否继续',
            deleteTitle: '删除',
            deleteSuccess: '删除成功',
            loginSuccess: '登录成功',
            operationSuccess: '操作成功',
            notSupportOperation: '不支持的当前操作',
            requestTimeout: '请求超时,请稍后重试',
            infoTitle: '提示',
            notRecords: '当前任务未产生执行记录',
            sureLogOut: '您是否确认退出登录?',
            createSuccess: '新建成功',
            updateSuccess: '更新成功',
            uploadSuccess: '上传成功',
            operate: '操作',
        },
        login: {
            captchaHelper: '请输入验证码',
            safeEntrance: '请使用正确的入口登录面板',
            reason: '错误原因：',
            reasonHelper:
                '当前新安装的已经开启了安全入口登录，新装机器都会随机一个8位字符的安全入口名称，亦可以在面板设置处修改，如您没记录或不记得了，可以使用以下方式解决',
            solution: '解决方法：',
            solutionHelper: '在SSH终端输入以下一种命令来解决 1.查看面板入口：/etc/init.d/bt default',
            warnning: '注意：【关闭安全入口】将使您的面板登录地址被直接暴露在互联网上，非常危险，请谨慎操作',
            codeInput: '请输入MFA验证器的 6 位验证码',
        },
        rule: {
            username: '请输入用户名',
            password: '请输入密码',
            rePassword: '密码不一致，请检查后重新输入',
            requiredInput: '请填写必填项',
            requiredSelect: '请选择必选项',
            commonName: '支持英文、中文、数字、.-_,长度1-30',
            complexityPassword: '请输入 8 位以上、必须含有字母、数字、特殊符号的密码',
            commonPassword: '请输入 6 位以上长度密码',
            email: '请输入正确的邮箱',
            number: '请输入正确的数字',
            ip: '请输入正确的 IP 地址',
            port: '请输入正确的端口',
        },
        res: {
            paramError: '请求失败,请稍后重试!',
            forbidden: '当前用户无权限',
            serverError: '服务异常',
            notFound: '资源不存在',
            commonError: '请求失败',
        },
        header: {
            language: '国际化',
            zh: '简体中文',
            en: 'English',
            theme: '布局设置',
            globalTheme: '全局主题',
            themeColor: '主题颜色',
            darkTheme: '暗黑主题',
            personalData: '个人资料',
            changePassword: '修改密码',
            logout: '退出登录',
        },
    },
    auth: {
        username: '用户名',
        email: '邮箱',
        password: '密码',
    },
    menu: {
        home: '概览',
        apps: '应用商店',
        website: '网站',
        project: '项目',
        config: '配置',
        firewall: '防火墙',
        database: '数据库',
        container: '容器',
        cronjob: '计划任务',
        host: '主机',
        security: '安全',
        files: '文件管理',
        monitor: '监控',
        terminal: '终端',
        settings: '面板设置',
        toolbox: '工具箱',
        operations: '操作日志',
    },
    home: {
        welcome: '欢迎使用',
    },
    tabs: {
        more: '更多',
        closeCurrent: '关闭当前',
        closeOther: '关闭其它',
        closeAll: '关闭所有',
    },
    header: {
        logout: '退出登录',
    },
    container: {
        operatorHelper: '将对选中容器进行 {0} 操作，是否继续？',
        start: '启动',
        stop: '停止',
        reStart: '重启',
        kill: '强制停止',
        pause: '暂停',
        unPause: '恢复',
        reName: '重命名',
        remove: '移除',
        container: '容器',
        network: '网络',
        storage: '数据卷',
        schedule: '编排',
        upTime: '运行时长',
        all: '全部',
        lastDay: '最近一天',
        last4Hour: '最近 4 小时',
        lastHour: '最近 1 小时',
        last10Min: '最近 10 分钟',

        image: '镜像',
        imagePull: '镜像拉取',
        imagePush: '镜像推送',
        repoName: '仓库名',
        imageName: '镜像名',
        pull: '拉取',
        path: '路径',
        importImage: '导入镜像',
        import: '导入',
        build: '构建镜像',
        label: '标签',
        push: '推送',
        fileName: '文件名',
        export: '导出',
        exportImage: '导出镜像',
        version: '版本',
        size: '大小',
        from: '来源',

        repo: '仓库',
        name: '名称',
        protocol: '协议',
        downloadUrl: '下载地址',
        imageRepo: '镜像仓库',
        repoHelper: '是否包含镜像仓库/组织/项目?',
        auth: '认证',
    },
    cronjob: {
        cronTask: '计划任务',
        taskType: '任务类型',
        shell: 'Shell 脚本',
        website: '备份网站',
        rulesHelper: '压缩排除规则(以 ; 号为分隔符)，例如： \n*.log;*.sql',
        failedFilter: '失败任务过滤',
        lastRecrodTime: '上次执行时间',
        all: '所有',
        database: '备份数据库',
        missBackupAccount: '未能找到备份账号',
        syncDate: '同步时间 ',
        releaseMemory: '释放内存',
        curl: '访问',
        taskName: '任务名称',
        cronSpec: '执行周期',
        directory: '备份目录',
        sourceDir: '备份目录',
        exclusionRules: '排除规则',
        url: 'URL 地址',
        target: '备份到',
        retainCopies: '保留份数',
        cronSpecRule: '请输入正确的执行周期',
        perMonth: '每月',
        perWeek: '每周',
        perHour: '每小时',
        perNDay: '每隔 N 日',
        perNHour: '每隔 N 时',
        perNMinute: '每隔 N 分钟',
        per: '每隔',
        handle: '执行',
        day: '日',
        day1: '天',
        hour: '小时',
        minute: '分钟',
        monday: '周一',
        tuesday: '周二',
        wednesday: '周三',
        thursday: '周四',
        friday: '周五',
        saturday: '周六',
        sunday: '周日',
        shellContent: '脚本内容',
        errRecord: '错误的日志记录',
        errHandle: '任务执行失败',
        noRecord: '执行未产生任何日志',
    },
    monitor: {
        avgLoad: '平均负载',
        loadDetail: '负载详情',
        resourceUsage: '资源使用率',
        min: '分钟',
        read: '读取',
        write: '写入',
        count: '次',
        readWriteCount: '读写次数',
        readWriteTime: '读写延迟',
        today: '今天',
        yestoday: '昨天',
        lastNDay: '近 {0} 天',
        memory: '内存',
        disk: '磁盘',
        network: '网络',
        up: '上行',
        down: '下行',
    },
    terminal: {
        conn: '连接',
        testConn: '连接测试',
        saveAndConn: '保存并连接',
        connTestOk: '连接信息可用',
        hostList: '主机信息',
        createConn: '创建连接',
        createGroup: '创建分组',
        expand: '全部展开',
        fold: '全部收缩',
        batchInput: '批量输入',
        quickCommand: '快速命令',
        groupDeleteHelper: '移除组后，组内所有连接将迁移到 default 组内，是否确认',
        quickCmd: '快捷命令',
        command: '命令',
        addHost: '添加主机',
        localhost: '本地服务器',
        name: '名称',
        port: '端口',
        user: '用户',
        authMode: '认证方式',
        passwordMode: '密码输入',
        keyMode: '密钥输入',
        password: '密码',
        key: '密钥',
        emptyTerminal: '暂无终端连接',
    },
    operations: {
        detail: {
            users: '用户',
            hosts: '主机',
            groups: '组',
            commands: '快捷命令',
            backups: '备份账号',
            settings: '面板设置',
            cronjobs: '计划任务',
            status: '状态修改',
            auth: '用户',
            post: '创建',
            put: '更新',
            update: '更新',
            delete: '删除',
            login: '登录',
            logout: '退出',
            del: '删除',
        },
        operatoin: '操作',
        status: '状态',
        request: '请求',
        response: '响应',
    },
    file: {
        dir: '文件夹',
        upload: '上传',
        download: '下载',
        fileName: '文件名',
        search: '查找',
        mode: '权限',
        owner: '所有者',
        file: '文件',
        remoteFile: '远程下载',
        share: '分享',
        sync: '数据同步',
        size: '大小',
        updateTime: '修改时间',
        open: '打开',
        rename: '重命名',
        role: '权限',
        info: '属性',
        linkFile: '软连接文件',
        terminal: '终端',
        shareList: '分享列表',
        zip: '压缩',
        user: '用户',
        group: '用户组',
        path: '路径',
        public: '公共',
        setRole: '设置权限',
        link: '是否链接',
        rRole: '读取',
        wRole: '写入',
        xRole: '可执行',
        name: '名称',
        compress: '压缩',
        deCompress: '解压',
        compressType: '压缩格式',
        compressDst: '压缩路径',
        replace: '覆盖已存在的文件',
        compressSuccess: '压缩成功',
        deCompressSuccess: '解压成功',
        deCompressDst: '解压路径',
        linkType: '链接类型',
        softLink: '软链接',
        hardLink: '硬链接',
        linkPath: '链接路径',
        selectFile: '选择文件',
        downloadSuccess: '下载成功',
        downloadUrl: '下载地址',
        downloadStart: '下载开始!',
        moveStart: '移动成功',
        move: '移动',
        copy: '复制',
        calculate: '计算',
        canNotDeCompress: '无法解压此文件',
        uploadSuccess: '上传成功!',
        downloadProcess: '下载进度',
        downloading: '正在下载...',
    },
    setting: {
        all: '全部',
        panel: '面板',
        emailHelper: '用于密码找回',
        title: '面板别名',
        theme: '主题色',
        componentSize: '组件大小',
        dark: '黑金',
        light: '白金',
        language: '系统语言',
        languageHelper: '默认跟随浏览器语言，设置后只对当前浏览器生效，更换浏览器后需要重新设置',
        sessionTimeout: '超时时间',
        sessionTimeoutHelper: '如果用户超过 {0} 秒未操作面板，面板将自动退出登录',
        syncTime: '同步时间',
        changePassword: '密码修改',
        oldPassword: '原密码',
        newPassword: '新密码',
        retryPassword: '确认密码',

        backup: '备份',
        noTypeForCreate: '当前无可创建备份类型',
        serverDisk: '服务器磁盘',
        OSS: '阿里云 OSS',
        S3: '亚马逊 S3 云存储',
        backupAccount: '备份账号',
        loadBucket: '获取桶',
        accountName: '账户名称',
        accountKey: '账户密钥',
        address: '地址',
        port: '端口',
        username: '用户名',
        password: '密码',
        path: '路径',

        safe: '安全',
        panelPort: '面板端口',
        portHelper: '建议端口范围8888 - 65535，注意：有安全组的服务器请提前在安全组放行新端口',
        safeEntrance: '安全入口',
        safeEntranceHelper: '面板管理入口，设置后只能通过指定安全入口登录面板，如: onepanel',
        expirationTime: '密码过期时间',
        expiredHelper: '当前密码已过期，请重新修改密码：',
        timeoutHelper: '【 {0} 天后 】面板密码即将过期，过期后需要重新设置密码',
        complexity: '密码复杂度验证',
        complexityHelper: '密码必须满足密码长度大于 8 位且包含字母、数字及特殊字符',
        mfa: '两步验证',
        mfaHelper1: '下载两步验证手机应用 如:',
        mfaHelper2: '使用手机应用扫描以下二维码，获取 6 位验证码',
        mfaHelper3: '输入手机应用上的 6 位数字',

        enableMonitor: '监控状态',
        storeDays: '过期时间 (天)',
        cleanMonitor: '清空监控记录',

        message: '通知',
        messageType: '通知方式',
        email: '邮箱',
        wechat: '企业微信',
        dingding: '钉钉',
        closeMessage: '关闭消息通知',
        emailServer: '邮箱服务名称',
        emailAddr: '邮箱地址',
        emailSMTP: '邮箱 SMTP 授权码',
        secret: '密钥',

        about: '关于',
        project: '项目地址',
        issue: '问题反馈',
        chat: '参与讨论',
        star: '点亮 Star',
        description: '一个现代化的 Linux 面板工具',
    },
    app: {
        installed: '已安装',
        all: '全部',
        version: '版本',
        detail: '详情',
        install: '安装',
        author: '作者',
        source: '来源',
        sync: '同步',
        appName: '应用名称',
        status: '状态',
        container: '容器',
        restart: '重启',
        up: '启动',
        down: '停止',
        name: '名称',
        description: '描述',
        delete: '删除',
        deleteWarn: '删除操作会把数据一并删除,此操作不可回滚,是否继续?',
        syncSuccess: '同步成功',
        canUpdate: '可更新',
        backup: '备份',
        backupName: '文件名称',
        backupPath: '文件路径',
        backupdate: '备份时间',
        restore: '回滚',
        restoreWarn: '回滚操作会重启应用,并替换数据,此操作不可回滚,是否继续?',
        update: '更新',
        versioneSelect: '请选择版本',
    },
};
