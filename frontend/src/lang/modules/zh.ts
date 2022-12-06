export default {
    commons: {
        true: '是',
        false: '否',
        example: '例如：',
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
            disconn: '断开',
            clean: '清空',
            login: '登录',
            close: '关闭',
            view: '详情',
            watch: '追踪',
            handle: '执行',
            expand: '展开',
            log: '日志',
            back: '返回',
            recover: '恢复',
            upload: '上传',
            download: '下载',
            init: '初始化',
            verify: '验证',
            saveAndEnable: '保存并启用',
            import: '导入',
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
            delete: '删除 操作不可回滚，是否继续',
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
            operateConfirm: '如果确认操作，请手动输入',
        },
        login: {
            firstLogin: '首次登录，请创建初始管理员用户！',
            username: '用户名',
            password: '密码',
            rePassword: '确认密码',
            welcome: '欢迎回来，请输入用户名和密码登录！',
            errorAuthInfo: '您输入的用户名或密码不正确，请重新输入！',
            captchaHelper: '请输入验证码',
            errorCaptcha: '验证码错误！',
            safeEntrance: '请使用正确的入口登录面板',
            reason: '错误原因：',
            reasonHelper:
                '当前新安装的已经开启了安全入口登录，新装机器都会随机一个8位字符的安全入口名称，亦可以在面板设置处修改，如您没记录或不记得了，可以使用以下方式解决',
            solution: '解决方法：',
            solutionHelper: '在 SSH 终端输入以下一种命令来解决 1.查看面板入口：/etc/init.d/bt default',
            warnning: '注意：【关闭安全入口】将使您的面板登录地址被直接暴露在互联网上，非常危险，请谨慎操作',
            codeInput: '请输入 MFA 验证器的 6 位验证码',
        },
        rule: {
            username: '请输入用户名',
            password: '请输入密码',
            rePassword: '密码不一致，请检查后重新输入',
            requiredInput: '请填写必填项',
            requiredSelect: '请选择必选项',
            commonName: '支持英文、中文、数字、.-_,长度1-30',
            imageName: '支持英文、中文、数字、:.-_,长度1-30',
            complexityPassword: '请输入 8 位以上、必须含有字母、数字、特殊符号的密码',
            commonPassword: '请输入 6 位以上长度密码',
            linuxName: '支持英文、数字、.-_,长度1-30',
            email: '请输入正确的邮箱',
            number: '请输入正确的数字',
            ip: '请输入正确的 IP 地址',
            port: '请输入正确的端口',
            selectHelper: '请选择正确的 {0} 文件',
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
        status: {
            running: '已启动',
            stopped: '已停止',
            error: '失败',
            created: '已创建',
            restarting: '重启中',
            removing: '迁移中',
            paused: '暂停',
            exited: '停止',
            installing: '安装中',
        },
    },
    menu: {
        home: '概览',
        apps: '应用商店',
        website: '网站',
        project: '项目',
        config: '配置',
        firewall: '防火墙',
        ssl: '证书',
        database: '数据库',
        container: '容器',
        cronjob: '计划任务',
        host: '主机',
        security: '安全',
        files: '文件',
        monitor: '监控',
        terminal: '终端',
        settings: '面板设置',
        toolbox: '工具箱',
        logs: '面板日志',
    },
    home: {
        overview: '概 览',
        appInstalled: '已安装应用',
        systemInfo: '系统信息',
        hostname: '主机名称',
        platformVersion: '发行版本',
        kernelVersion: '内核版本',
        kernelArch: '系统类型',
        network: '流量',
        io: '磁盘 IO',
        totalSend: '总发送',
        totalRecv: '总接收',
        rwPerSecond: '每秒读写',
        ioDelay: 'IO 延迟',
        time: '次',
        uptime: '启动时间',
        runningTime: '运行时间',
        Day: '天',
        Hour: '小时',
        Minute: '分钟',

        runSmoothly: '运行流畅',
        runNormal: '运行正常',
        runSlowly: '运行缓慢',
        runJam: '运行堵塞',

        core: '物理核心',
        logicCore: '逻辑核心',
        loadAverage: '最近 {0} 分钟平均负载',
        load: '负载',
        mount: '挂载点',
        total: '总数',
        used: '已用',
        free: '可用',
        percent: '使用率',
        app: '推荐应用',
        haloInfo: '好用又强大的开源建站工具',
        deInfo: '人人可用的开源数据可视化分析工具',
        jsInfo: '广受欢迎的开源堡垒机',
        msInfo: '一站式开源持续测试平台',
        koInfo: '开源的轻量级 Kubernetes 发行版',
        kubepiInfo: '现代化的开源 Kubernetes 面板',
        goInstall: '去安装',
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
    database: {
        create: '创建数据库',
        noMysql: '当前未检测到 {0} 数据库，请进入应用商店点击安装！',
        goInstall: '去安装',
        source: '来源',
        backup: '备份',
        permission: '权限',
        permissionLocal: '本地服务器',
        permissionForIP: '指定 IP',
        permissionAll: '所有人（不安全）',
        rootPassword: 'root 密码',
        backupList: '备份列表',
        backList: '返回列表',
        loadBackup: '导入备份',
        setting: '数据库设置',
        remoteAccess: '远程访问',
        changePassword: '改密',

        baseSetting: '基础设置',
        remoteConnHelper: 'root 帐号远程连接 mysql 有安全风险，开启需谨慎！',
        confChange: '配置修改',
        portHelper: '该端口为容器对外暴露端口，修改需要单独保存并且重启容器！',

        unSupportType: '不支持当前文件类型！',
        unSupportSize: '上传文件超过 10M，请确认！',
        selectFile: '选择文件',
        supportUpType: '仅支持 10M 以内 sql、zip、sql.gz、(tar.gz gz tgz) 文件',
        zipFormat: 'zip、tar.gz 压缩包结构：test.zip 或 test.tar.gz 压缩包内，必需包含 test.sql',

        currentStatus: '当前状态',
        runTime: '启动时间',
        connections: '总连接数',
        bytesSent: '发送',
        bytesReceived: '接收',
        queryPerSecond: '每秒查询',
        txPerSecond: '每秒事务',
        connInfo: '活动/峰值连接数',
        connInfoHelper: '若值过大，增加 max_connections',
        threadCacheHit: '线程缓存命中率',
        threadCacheHitHelper: '若过低,增加 thread_cache_size',
        indexHit: '索引命中率',
        indexHitHelper: '若过低,增加 key_buffer_size',
        innodbIndexHit: 'Innodb 索引命中率',
        innodbIndexHitHelper: '若过低,增加 innodb_buffer_pool_size',
        cacheHit: '查询缓存命中率',
        cacheHitHelper: '若过低,增加 query_cache_size',
        tmpTableToDB: '创建临时表到磁盘',
        tmpTableToDBHelper: '若过大,尝试增加 tmp_table_size',
        openTables: '已打开的表',
        openTablesHelper: 'table_open_cache 配置值应大于等于此值',
        selectFullJoin: '没有使用索引的量',
        selectFullJoinHelper: '若不为0，请检查数据表的索引是否合理',
        selectRangeCheck: '没有索引的 JOIN 量',
        selectRangeCheckHelper: '若不为0，请检查数据表的索引是否合理',
        sortMergePasses: '排序后的合并次数',
        sortMergePassesHelper: '若值过大，增加sort_buffer_size',
        tableLocksWaited: '锁表次数',
        tableLocksWaitedHelper: '若值过大，请考虑增加您的数据库性能',

        performanceTuning: '性能调整',
        optimizationScheme: '优化方案',
        keyBufferSizeHelper: '用于索引的缓冲区大小',
        queryCacheSizeHelper: '查询缓存，不开启请设为0',
        tmpTableSizeHelper: '临时表缓存大小',
        innodbBufferPoolSizeHelper: 'Innodb 缓冲区大小',
        innodbLogBufferSizeHelper: 'Innodb 日志缓冲区大小',
        sortBufferSizeHelper: '* 连接数, 每个线程排序的缓冲大小',
        readBufferSizeHelper: '* 连接数, 读入缓冲区大小',
        readRndBufferSizeHelper: '* 连接数, 随机读取缓冲区大小',
        joinBufferSizeHelper: '* 连接数, 关联表缓存大小',
        threadStackelper: '* 连接数, 每个线程的堆栈大小',
        binlogCacheSizeHelper: '* 连接数, 二进制日志缓存大小(4096的倍数)',
        threadCacheSizeHelper: '线程池大小',
        tableOpenCacheHelper: '表缓存',
        maxConnectionsHelper: '最大连接数',
        restart: '重启数据库',

        log: '日志',
        slowLog: '慢日志',

        isOn: '是否开启',
        longQueryTime: '慢查询阈值',

        status: '当前状态',
        terminal: '终端模式',
        key: '键',
        value: '值',
        type: '数据类型',
        length: '数据长度',
        expiration: '有效期',
        cleanAll: '清除所有',
        expirationHelper: '有效期为 0 表示永久',
        forever: '永久',
        second: '秒',
        timeout: '超时时间',
        timeoutHelper: '空闲连接超时时间，0表示不断开',
        maxclients: '最大连接数',
        requirepass: '密码',
        requirepassHelper: '留空代表没有设置密码',
        databases: '数据库数量',
        maxmemory: '最大内存使用',
        maxmemoryHelper: '0 表示不做限制',
        tcpPort: '当前监听端口',
        uptimeInDays: '已运行天数',
        connectedClients: '连接的客户端数量',
        usedMemory: 'Redis 历史分配内存的峰值',
        usedMemoryRss: 'Redis 当前占用的系统内存总量',
        memFragmentationRatio: '内存碎片比率',
        totalConnectionsReceived: '运行以来连接过的客户端的总数量',
        totalCommandsProcessed: '运行以来执行过的命令的总数量',
        instantaneousOpsPerSec: '服务器每秒钟执行的命令数量',
        keyspaceHits: '查找数据库键成功的次数',
        keyspaceMisses: '查找数据库键失败的次数',
        hit: '查找数据库键命中率',
        latestForkUsec: '最近一次 fork() 操作耗费的微秒数',

        recoverHelper: '即将使用 [{0}] 对数据进行覆盖，是否继续?',
        submitIt: '覆盖数据',

        baseConf: '基础配置',
        allConf: '全部配置',
        restartNow: '立即重启',
        restartNowHelper1: '修改配置后需要重启生效，若您的数据需要持久化请先执行 save 操作。',
        restartNowHelper: '修改配置后需要重启生效。',

        persistence: '持久化',
        rdbHelper1: '秒內,插入',
        rdbHelper2: '条数据',
        rdbHelper3: '符合任意一个条件将会触发RDB持久化',
        rdbInfo: '规则列表存在 0 值，请确认后重试！',
    },
    container: {
        operatorHelper: '将对选中容器进行 {0} 操作，是否继续？',
        start: '启动',
        stop: '停止',
        restart: '重启',
        kill: '强制停止',
        pause: '暂停',
        unpause: '恢复',
        rename: '重命名',
        remove: '移除',
        container: '容器',
        upTime: '运行时长',
        all: '全部',
        lastDay: '最近一天',
        last4Hour: '最近 4 小时',
        lastHour: '最近 1 小时',
        last10Min: '最近 10 分钟',
        newName: '新名称',

        custom: '自定义',
        containerTerminal: '容器终端',
        emptyUser: '为空时，将使用容器默认的用户登录',

        containerCreate: '容器创建',
        port: '端口',
        exposePort: '暴露端口',
        exposeAll: '暴露所有',
        containerPort: '容器端口',
        serverPort: '服务器端口',
        cmd: '启动命令',
        cmdHelper: '一行一个，例：\n/bin/bash \necho "hello"',
        autoRemove: '容器退出后自动删除容器',
        cpuQuota: 'CPU 限制',
        memoryLimit: '内存限制',
        limitHelper: '限制为 0 则关闭限制',
        mount: '挂载卷',
        serverPath: '服务器目录',
        containerDir: '容器目录',
        modeRW: '读写',
        modeR: '只读',
        mode: '权限',
        env: '环境变量',
        restartPolicy: '重启规则',
        unlessStopped: '关闭后重启',
        onFailure: '失败后重启（默认重启 5 次）',
        no: '不重启',

        monitor: '监控',
        refreshTime: '刷新间隔',
        cache: '缓存',

        image: '镜像',
        imagePull: '拉取镜像',
        imagePush: '推送镜像',
        imageDelete: '删除镜像',
        repoName: '仓库名',
        imageName: '镜像名',
        pull: '拉取',
        path: '路径',
        importImage: '导入镜像',
        import: '导入',
        imageBuild: '构建镜像',
        build: '构建镜像',
        edit: '编辑',
        pathSelect: '路径选择',
        label: '标签',
        push: '推送',
        fileName: '文件名',
        export: '导出',
        exportImage: '导出镜像',
        version: '版本',
        size: '大小',
        from: '来源',
        tag: '标签',
        tagHelper: '一行一个，例： \nkey1=value1\nkey2=value2',
        imageNameHelper: '镜像名称及 Tag，例：nginx:latest',

        network: '网络',
        createNetwork: '添加网络',
        networkName: '网络名',
        driver: '模式',
        option: '参数',
        attachable: '可用',
        subnet: '子网',
        scope: 'IP 范围',
        gateway: '网关',

        volume: '存储卷',
        volumeName: '名称',
        mountpoint: '挂载点',
        createVolume: '创建存储卷',

        repo: '仓库',
        name: '名称',
        protocol: '协议',
        downloadUrl: '下载地址',
        imageRepo: '镜像仓库',
        repoHelper: '是否包含镜像仓库/组织/项目?',
        auth: '认证',
        mirrorHelper: '一行一个，例：\nhttps://hub-mirror.c.163.com \nhttps://reg-mirror.qiniu.com',
        registrieHelper: '一行一个，例：\n172.16.10.111:8081 \n172.16.10.112:8081',

        compose: '编排',
        composeTemplate: '编排模版',
        description: '描述',
        content: '内容',
        containerNumber: '容器数量',
        down: '删除',
        up: '启动',
        operatorComposeHelper: '将对选中 Compose 进行 {0} 操作，是否继续？',

        setting: '容器配置',
        mirrors: '镜像加速',
        mirrorsHelper: '为空则关闭镜像加速；优先使用加速 URL 执行操作，请求超时将跳过使用默认加速方式',
        registries: '私有仓库',
        liveHelper: '停止 docker 服务时，是否关闭所有容器',
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
        saveLocal: '同时保留本地备份（和云存储保留份数一致）',
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
    logs: {
        operation: '操作日志',
        login: '登录日志',
        loginIP: '登录 IP',
        loginAddress: '登录地址',
        loginAgent: '用户代理',
        loginStatus: '登录状态',
        system: '系统日志',
        deleteLogs: '清空日志',
        detail: {
            users: '用户',
            hosts: '主机',
            groups: '组',
            containers: '容器',
            commands: '快捷命令',
            backups: '备份账号',
            settings: '面板设置',
            cronjobs: '计划任务',
            databases: '数据库',
            status: '状态修改',
            auth: '用户',
            post: '创建',
            put: '更新',
            update: '更新',
            delete: '删除',
            login: '登录',
            backup: '备份',
            recover: '恢复',
            operate: '操作',
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
        infoDetail: '文件属性',
        type: '类型',
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
        sessionTimeoutError: '最小超时时间为 300 秒',
        sessionTimeoutHelper: '如果用户超过 {0} 秒未操作面板，面板将自动退出登录',
        syncTime: '同步时间',
        changePassword: '密码修改',
        oldPassword: '原密码',
        newPassword: '新密码',
        retryPassword: '确认密码',
        duplicatePassword: '新密码不能与原始密码一致，请重新输入！',

        backup: '备份',
        noTypeForCreate: '当前无可创建备份类型',
        serverDisk: '服务器磁盘',
        currentPath: '当前路径',
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
        unSetting: '未设置',
        noneSetting: '为面板密码设置过期时间，过期后需要重新设置密码',
        expirationHelper: '密码过期时间为 [0] 天时，则关闭密码过期功能',
        days: '过期天数',
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
        description: '1Panel，一款现代化的开源 Linux 面板。',
    },
    app: {
        app: '应用',
        installName: '安装名称',
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
        deleteWarn: '删除操作会把所有数据和备份一并删除,此操作不可回滚,是否继续?',
        syncSuccess: '同步成功',
        canUpdate: '可升级',
        backup: '备份',
        backupName: '文件名称',
        backupPath: '文件路径',
        backupdate: '备份时间',
        restore: '恢复',
        restoreWarn: '恢复操作会重启应用,并替换数据,此操作不可回滚,是否继续?',
        update: '升级',
        versioneSelect: '请选择版本',
        operatorHelper: '将对选中应用进行 {0} 操作，是否继续？',
        checkInstalledWarn: '未检测到 {0} ,请进入应用商店点击安装!',
        gotoInstalled: '去安装',
        search: '搜索',
        limitHelper: '该应用已安装，不支持重复安装',
        deleteHelper: '{0}已经关联以下资源，无法删除',
        checkTitle: '提示',
        website: '网站',
        database: '数据库',
    },
    website: {
        website: '网站',
        primaryDomain: '主域名',
        otherDomains: '其他域名',
        type: '类型',
        static: '静态网站',
        deployment: '反向代理',
        supportUpType: '仅支持 tar.gz 文件',
        zipFormat: 'tar.gz 压缩包结构：test.tar.gz 压缩包内，必需包含 website.json 文件',
        proxy: '反向代理',
        alias: '代号',
        remark: '备注',
        group: '分组',
        groupSetting: '分组管理',
        app: '应用',
        appNew: '新装应用',
        appInstalled: '已装应用',
        create: '创建网站',
        delete: '删除网站',
        deleteApp: '删除应用',
        deleteBackup: '删除备份',
        domain: '域名',
        domainHelper: '一行一个域名,支持*和IP地址,支持域名:端口',
        port: '端口',
        addDomain: '新增域名',
        domainConfig: '域名设置',
        defaultDoc: '默认文档',
        perserver: '并发限制',
        perserverHelper: '限制当前站点最大并发数',
        perip: '单IP限制',
        peripHelper: '限制单个IP访问最大并发数',
        rate: '流量限制',
        rateHelper: '限制每个请求的流量上(单位:KB)',
        limtHelper: '启用流量控制',
        other: '其他',
        currentSSL: '当前证书',
        dnsAccount: 'DNS账号',
        applySSL: '证书申请',
        SSLList: '证书列表',
        createDnsAccount: 'DNS账号',
        aliyun: '阿里云DNS',
        manual: '手动解析',
        key: '密钥',
        check: '查看',
        acmeAccountManage: 'Acme 账户管理',
        email: '邮箱',
        addAccount: '新增账户',
        acmeAccount: 'Acme 账户',
        provider: '验证方式',
        dnsCommon: '手动解析',
        expireDate: '过期时间',
        brand: '品牌',
        deploySSL: '部署',
        deploySSLHelper: '确定部署证书？',
        ssl: '证书',
        dnsAccountManage: 'DNS 账户管理',
        renewSSL: '续签',
        renewHelper: '确定续签证书？',
        renewSuccess: '续签证书',
        config: '配置',
        enableHTTPS: '启用HTTPS',
        aliasHelper: '代号是网站目录的文件夹名称',
        lastBackupAt: '上次备份时间',
        null: '无',
        nginxConfig: 'Nginx配置',
        websiteConfig: '网站设置',
        basic: '基本',
        source: '源文',
        security: '安全',
        backup: '备份',
        log: '日志',
        nginxPer: '性能调整',
        neverExpire: '永不过期',
        protocol: '协议',
        setDefault: '设为默认',
        default: '默认',
        deleteHelper: '相关应用状态不正常，请检查',
        toApp: '去已安装列表',
        enableCC: '开启CC攻击防护',
        cycle: '周期',
        frequency: '频率',
        ccHelper: '{0} 秒内累计请求同一URL超过 {1} 次,触发CC防御,封锁此IP',
        seconds: '秒',
        count: '次',
        mustSave: '修改之后需要保存才能生效,不合法的IP不会保存',
    },
    nginx: {
        serverNamesHashBucketSizeHelper: '服务器名字的hash表大小',
        clientHeaderBufferSizeHelper: '客户端请求的头buffer大小',
        clientMaxBodySizeHelper: '最大上传文件',
        keepaliveTimeoutHelper: '连接超时时间',
        gzipMinLengthHelper: '最小压缩文件',
        gzipCompLevelHelper: '压缩率',
        gzipHelper: '是否开启压缩传输',
        connections: '活动连接(Active connections)',
        accepts: '总连接次数(accepts)',
        handled: '总握手次数(handled)',
        requests: '总握手次数(requests)',
        reading: '请求数(Reading)',
        writing: '响应数(Writing)',
        waiting: '驻留进程(Waiting)',
        status: '负载状态',
    },
    ssl: {
        provider: '类型',
        manualCreate: '手动创建',
        acmeAccount: 'Acme 账号',
    },
};
