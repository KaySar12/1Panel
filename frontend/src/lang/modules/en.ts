export default {
    commons: {
        true: 'true',
        false: 'false',
        button: {
            create: 'Create',
            add: 'Add',
            save: 'Save',
            set: 'Reset',
            sync: 'Sync',
            delete: 'Delete',
            edit: 'Edit',
            enable: 'Enable',
            disable: 'Disable',
            confirm: 'Confirm',
            cancel: 'Cancel',
            reset: 'Reset',
            conn: 'Connect',
            disconn: 'Disconnect',
            clean: 'Clean',
            login: 'Login',
            close: 'Close',
            view: 'View',
            watch: 'Watch',
            handle: 'Handle',
            expand: 'Expand',
            log: 'Log',
            back: 'Back',
            recover: 'Recover',
            upload: 'Upload',
            download: 'Download',
            init: 'Init',
            verify: 'Verify',
            saveAndEnable: 'Save and enable',
            import: 'import',
        },
        search: {
            timeStart: 'Time start',
            timeEnd: 'Time end',
            timeRange: 'To',
            dateStart: 'Date start',
            dateEnd: 'Date end',
        },
        table: {
            total: 'Total {0}',
            name: 'Name',
            type: 'Type',
            status: 'Status',
            statusSuccess: 'Success',
            statusFailed: 'Failed',
            records: 'Records',
            group: 'Group',
            createdAt: 'Creation Time',
            date: 'Date',
            updatedAt: 'Update Time',
            operate: 'Operations',
            message: 'Message',
            description: 'Description',
            interval: 'Interval',
        },
        msg: {
            delete: 'This operation cannot be rolled back. Do you want to continue',
            deleteTitle: 'Delete',
            deleteSuccess: 'Delete Success',
            loginSuccess: 'Login Success',
            operationSuccess: 'Successful operation',
            copySuccess: 'Copy Successful',
            notSupportOperation: 'This operation is not supported',
            requestTimeout: 'The request timed out, please try again later',
            infoTitle: 'Hint',
            notRecords: 'No execution record is generated for the current task',
            sureLogOut: 'Are you sure you want to log out?',
            createSuccess: 'Create Success',
            updateSuccess: 'Update Success',
            uploadSuccess: 'Update Success',
            operate: 'Operate',
            inputOrSelect: 'Please select or enter',
        },
        login: {
            firstLogin: 'First login, please create an initial administrator user!',
            username: 'UserName',
            password: 'Password',
            rePassword: 'Confirm Password',
            welcome: 'Welcome back, please enter your username and password to log in!',
            errorAuthInfo: 'The user name or password you entered is incorrect, please re-enter!',
            captchaHelper: 'Please enter the verification code',
            errorCaptcha: 'Verification code error!',
            safeEntrance: 'Please use the correct entry to log in to the panel',
            reason: 'Cause of error:',
            reasonHelper:
                'At present, the newly installed machine has enabled the security entrance login. The newly installed machine will have a random 8-character security entrance name, which can also be modified in the panel Settings. If you do not record or do not remember, you can use the following methods to solve the problem',
            solution: 'The solution:',
            solutionHelper:
                'Run the following command on the SSH terminal to solve the problem: 1. View the /etc/init.d/bt default command on the panel',
            warnning:
                'Note: [Closing the security entrance] will make your panel login address directly exposed to the Internet, very dangerous, please exercise caution',
            codeInput: 'Please enter the 6-digit verification code of the MFA validator',
        },
        rule: {
            username: 'Please enter a username',
            password: 'Please enter a password',
            rePassword: 'The passwords are inconsistent. Please check and re-enter the password',
            requiredInput: 'Please enter the required fields',
            requiredSelect: 'Please select the required fields',
            commonName: 'Support English, Chinese, numbers, .-, and _ length 1-30',
            simpleName: 'Support English, numbers and _ length 1-30',
            dbName: 'Support English, numbers, .-, and _ length 1-30',
            imageName: 'Support English, Chinese, numbers, :.-_, length 1-30',
            complexityPassword:
                'Please enter a password with more than 8 characters and must contain letters, digits, and special symbols',
            commonPassword: 'Please enter a password with more than 6 characters',
            email: 'Email format error',
            number: 'Please enter the correct number',
            ip: 'Please enter the correct IP address',
            port: 'Please enter the correct port',
            selectHelper: 'Please select the correct {0} file',
        },
        res: {
            paramError: 'The request failed, please try again later!',
            forbidden: 'The current user has no permission',
            serverError: 'Service exception',
            notFound: 'The resource does not exist',
            commonError: 'The request failed',
        },
        header: {
            language: 'Internationalization',
            zh: '简体中文',
            en: 'English',
            theme: 'Layout Settings',
            globalTheme: 'Global',
            themeColor: 'Theme Color',
            darkTheme: 'Dark Theme',
            personalData: 'Personal Data',
            changePassword: 'Change Password',
            logout: 'Logout',
        },
        service: {
            serviceNotStarted: 'The {0} service is not currently started',
        },
        status: {
            running: 'running',
            stopped: 'stopped',
            success: 'success',
            failed: 'failed',
            error: 'error',
            created: 'created',
            restarting: 'restarting',
            removing: 'removing',
            paused: 'paused',
            exited: 'exited',
            enabled: 'Enabled',
            disabled: 'Disabled',
        },
    },
    menu: {
        home: 'Overview',
        apps: 'App Store',
        website: 'Website',
        project: 'Project',
        config: 'Config',
        firewall: 'Firewall',
        database: 'Database',
        container: 'Container',
        cronjob: 'Cronjob',
        host: 'Host',
        security: 'Security',
        files: 'File Management',
        monitor: 'Monitor',
        terminal: 'Terminal',
        settings: 'Setting',
        toolbox: 'Toolbox',
        logs: 'Log',
    },
    home: {
        overview: 'Overview',
        appInstalled: 'App installed',
        systemInfo: 'System info',
        hostname: 'Hostname',
        platformVersion: 'Platform version',
        kernelVersion: 'Kernel version',
        kernelArch: 'Kernel arch',
        network: 'Network',
        io: 'Disk IO',
        totalSend: 'Total send',
        totalRecv: 'Total recv',
        rwPerSecond: 'RW per second',
        ioDelay: 'IO delay',
        time: 'Times',
        uptime: 'Up Time',
        runningTime: 'Running Time',
        Day: 'Days',
        Hour: 'Hours',
        Minute: 'Minutes',

        runSmoothly: 'Run smoothly',
        runNormal: 'Run normal',
        runSlowly: 'Run slowly',
        runJam: 'Run Blockaged',

        core: 'Physical core',
        logicCore: 'Logic core',
        loadAverage: 'Average load in the last {0} minutes',
        load: 'Load',
        mount: 'Mount point',
        total: 'Total',
        used: 'Used',
        free: 'Free',
        percent: 'Percent',
        app: 'Recommended Apps',
        haloInfo: 'Easy to use and powerful open source website tools',
        deInfo: 'Open source data visualization tool available to everyone',
        jsInfo: 'The popular Open source fortress machine',
        msInfo: 'One-stop open source continuous testing platform',
        koInfo: 'Open source lightweight Kubernetes distribution',
        kubepiInfo: 'Modern open source Kubernetes panel',
        goInstall: 'Go install',
    },
    tabs: {
        more: 'More',
        closeCurrent: 'Close current',
        closeOther: 'Close other',
        closeAll: 'Close All',
    },
    header: {
        logout: 'Logout',
    },
    database: {
        delete: 'Delete operation cannot be rolled back, please input "',
        deleteHelper: '" to delete this database',
        create: 'Create database',
        noMysql: 'No {0} database is detected, please go to App Store and click Install!',
        goInstall: 'Go to install',
        source: 'Source',
        backup: 'Backup',
        permission: 'Permission',
        permissionLocal: 'Local server',
        permissionForIP: 'IP',
        permissionAll: 'All of them (unsafe)',
        rootPassword: 'Root password',
        backupList: 'Backup list',
        backList: 'Return',
        loadBackup: 'Import the backup',
        setting: 'Mysql Settings',
        remoteAccess: 'Remote access',
        changePassword: 'Password change',
        changePasswordHelper:
            'The database has been associated with an application. Changing the password will change the database password of the application at the same time. The change takes effect after the application restarts.',

        baseSetting: 'infrastructure',
        remoteConnHelper:
            'Remote connection to mysql as user root may have security risks. Therefore, perform this operation with caution.',
        confChange: 'Configuration change',
        portHelper:
            'This port is the exposed port of the container. You need to save the modification separately and restart the container!',

        unSupportType: 'Current file type is not supported!',
        unSupportSize: 'The uploaded file exceeds 10M, please confirm!',
        selectFile: 'Select file',
        supportUpType: 'Only sql, zip, sql.gz, and (tar.gz gz tgz) files within 10 MB are supported',
        zipFormat:
            'zip, tar.gz compressed package structure: test.zip or test.tar.gz compressed package must contain test.sql',

        currentStatus: 'Current state',
        runTime: 'Startup time',
        connections: 'Total connections',
        bytesSent: 'Send bytes',
        bytesReceived: 'Received bytes',
        queryPerSecond: 'Query per second',
        txPerSecond: 'Tx per second',
        connInfo: 'active/peak connections',
        connInfoHelper: 'If the value is too large, increase max_connections',
        threadCacheHit: 'Thread cache hit',
        threadCacheHitHelper: 'If it is too low, increase thread_cache_size',
        indexHit: 'Index hit',
        indexHitHelper: 'If it is too low, increase key_buffer_size',
        innodbIndexHit: 'Innodb 索引命中率',
        innodbIndexHitHelper: 'If it is too low, increase innodb_buffer_pool_size',
        cacheHit: 'Querying the Cache Hit',
        cacheHitHelper: 'If it is too low, increase query_cache_size',
        tmpTableToDB: 'Temporary table to disk',
        tmpTableToDBHelper: 'If it is too large, try increasing tmp_table_size',
        openTables: 'Open tables',
        openTablesHelper: 'The configuration value of table_open_cache must be greater than or equal to this value',
        selectFullJoin: 'Select full join',
        selectFullJoinHelper: 'If the value is not 0, check whether the index of the data table is correct',
        selectRangeCheck: 'The number of joins with no index',
        selectRangeCheckHelper: 'If the value is not 0, check whether the index of the data table is correct',
        sortMergePasses: 'Number of sorted merges',
        sortMergePassesHelper: 'If the value is too large, increase sort_buffer_size',
        tableLocksWaited: 'Lock table number',
        tableLocksWaitedHelper: 'If the value is too large, consider increasing your database performance',

        performanceTuning: 'Performance tuning',
        optimizationScheme: 'Optimization scheme',
        keyBufferSizeHelper: 'Buffer size for index',
        queryCacheSizeHelper: 'Query cache. If this function is disabled, set this parameter to 0',
        tmpTableSizeHelper: 'Temporary table cache size',
        innodbBufferPoolSizeHelper: 'Innodb buffer size',
        innodbLogBufferSizeHelper: 'Innodb log buffer size',
        sortBufferSizeHelper: '* connections, buffer size per thread sort',
        readBufferSizeHelper: '* connections, read buffer size',
        readRndBufferSizeHelper: '* connections, random read buffer size',
        joinBufferSizeHelper: '* connections, association table cache size',
        threadStackelper: '* connections, stack size per thread',
        binlogCacheSizeHelper: '* onnections, binary log cache size (multiples of 4096)',
        threadCacheSizeHelper: 'Thread pool size',
        tableOpenCacheHelper: 'Table cache',
        maxConnectionsHelper: 'Max connections',
        restart: 'Restart',

        log: 'Logs',
        slowLog: 'Slowlogs',

        isOn: 'Is on',
        longQueryTime: 'Slow query threshold',

        status: 'The current state',
        terminal: 'Terminal mode',
        second: 'Second',
        timeout: 'Timeout',
        timeoutHelper: 'Idle connection timeout period. 0 indicates that the connection is on continuously',
        maxclients: 'Max clients',
        requirepass: 'Password',
        requirepassHelper:
            'Leave this blank to indicate that no password has been set. Changes need to be saved separately and the container restarted!',
        databases: 'Number of databases',
        maxmemory: 'Maximum memory usage',
        maxmemoryHelper: '0 indicates no restriction',
        tcpPort: 'Current listening port',
        uptimeInDays: 'Days in operation',
        connectedClients: 'Number of connected clients',
        usedMemory: 'Redis indicates the peak value of memory allocated historically',
        usedMemoryRss: 'Total system memory used by Redis',
        memFragmentationRatio: 'Memory fragmentation ratio',
        totalConnectionsReceived: 'Total number of clients connected since run',
        totalCommandsProcessed: 'The total number of commands executed since the run',
        instantaneousOpsPerSec: 'Number of commands executed by the server per second',
        keyspaceHits: 'The number of times a database key was successfully found',
        keyspaceMisses: 'Number of failed attempts to find the database key',
        hit: 'Find the database key hit ratio',
        latestForkUsec: 'The number of microseconds spent on the last fork() operation',

        recoverHelper: 'Data is about to be overwritten with [{0}]. Do you want to continue?',
        submitIt: 'Overwrite the data',

        baseConf: 'Basic configuration',
        allConf: 'All configuration',
        restartNow: 'Restart now',
        restartNowHelper1:
            'You need to restart the system after the configuration changes take effect. If your data needs to be persisted, perform the save operation first.',
        restartNowHelper: 'The modification takes effect only after the system restarts.',

        persistence: 'Persistence',
        rdbHelper1: 'In seconds, insert',
        rdbHelper2: 'The data',
        rdbHelper3: 'Meeting either condition triggers RDB persistence',
        rdbInfo: 'Rule list has 0 value, please confirm and try again!',
    },
    container: {
        operatorHelper: '{0} will be performed on the selected container. Do you want to continue?',
        start: 'Start',
        stop: 'Stop',
        restart: 'Restart',
        kill: 'Kill',
        pause: 'Pause',
        unpause: 'Unpause',
        rename: 'Rename',
        remove: 'Remove',
        container: 'Container',
        upTime: 'UpTime',
        all: 'All',
        lastDay: 'Last Day',
        last4Hour: 'Last 4 Hours',
        lastHour: 'Last Hour',
        last10Min: 'Last 10 Minutes',
        newName: 'New name',

        custom: 'Custom',
        emptyUser: 'When empty, you will log in with the  default user of container',
        containerTerminal: 'Container terminal',

        containerCreate: 'Container create',
        port: 'Port',
        exposePort: 'Expose port',
        exposeAll: 'Expose all',
        containerPort: 'Container port',
        serverPort: 'Host port',
        cmd: 'Command',
        cmdHelper: 'one in a row, for example: \n/bin/bash \necho "hello"',
        autoRemove: 'Auto remove',
        cpuQuota: 'NacosCPU',
        memoryLimit: 'Memory',
        limitHelper: 'If the limit is 0, the limit is turned off',
        mount: 'Mount',
        serverPath: 'Server path',
        containerDir: 'Container path',
        modeRW: 'RW',
        modeR: 'R',
        mode: 'Mode',
        env: 'Environment',
        restartPolicy: 'Restart policy',
        unlessStopped: 'unless-stopped',
        onFailure: 'on-failure（five times by default）',
        no: 'no',

        image: 'Image',
        imagePull: 'Image pull',
        imagePush: 'Image push',
        repoName: 'Repo Name',
        imageName: 'Image name',
        pull: 'Pull',
        path: 'Path',
        importImage: 'Image import',
        import: 'Import',
        build: 'Build',
        imageBuild: 'Image build',
        label: 'Label',
        push: 'Push',
        fileName: 'FileName',
        export: 'Export',
        exportImage: 'Image export',
        version: 'Version',
        size: 'Size',
        from: 'From',
        tag: 'Tag',
        tagHelper: 'one in a row, for example, \nkey1=value1\nkey2=value2',
        imageNameHelper: 'Image name and Tag, for example: nginx:latest',

        network: 'Network',
        createNetwork: 'Create network',
        networkName: 'Name',
        driver: 'Driver',
        option: 'Option',
        attachable: 'Attachable',
        subnet: 'Subnet',
        scope: 'IP Scope',
        gateway: 'Gateway',

        monitor: 'Monitor',
        refreshTime: 'Refresh time',
        cache: 'Cache',

        volume: 'Volume',
        volumeName: 'Name',
        mountpoint: 'Mountpoint',
        createVolume: 'Create volume',

        repo: 'Repo',
        name: 'Name',
        protocol: 'protocol',
        httpRepo: 'The http repository needs to restart the docker service to add credit',
        delInsecure: 'Deletion of credit',
        delInsecureHelper: 'docker service needs to be restarted to delete the credit. Do you want to delete it?',
        downloadUrl: 'Download URL',
        imageRepo: 'Image repo',
        repoHelper: 'Does it include a mirror repository/organization/project?',
        auth: 'Auth',
        mirrorHelper: 'One in a row, for example:\nhttps://hub-mirror.c.163.com \nhttps://reg-mirror.qiniu.com',
        registrieHelper: 'One in a row, for example:\n172.16.10.111:8081 \n172.16.10.112:8081',

        compose: 'Compose',
        composeTemplate: 'Compose template',
        description: 'Description',
        content: 'Content',
        containerNumber: 'Container number',
        down: 'Down',
        up: 'Up',
        composeDetailHelper:
            'The compose is created external to 1Panel. The start and stop operations are not supported.',
        composeOperatorHelper: '{1} operation will be performed on {0}. Do you want to continue?',

        setting: 'Setting',
        dockerStatus: 'Docker Service',
        daemonJsonPathHelper: 'Ensure that the configuration path is the same as that specified in docker.service.',
        mirrors: 'Registry mirrors',
        mirrorsHelper:
            'If empty, mirror acceleration is disabled. The accelerated URL is used first for the operation, and will skipped when the request times out',
        registries: 'Insecure registries',
        liveHelper: 'Whether to close all containers when stopping the docker service',
        daemonJsonPath: 'Conf Path',
        serviceUnavailable: 'Docker service is not started at present, please click',
        startIn: ' to start',
    },
    cronjob: {
        cronTask: 'Task',
        changeStatus: 'Change status',
        disableMsg: 'The cronjob cannot continue to run after it is stopped. Do you want to stop it?',
        enableMsg: 'The cronjob has been stopped. Enable now?',
        taskType: 'Task type',
        shell: 'shell',
        website: 'website',
        rulesHelper: 'Compression exclusion rules (with; Is a delimiter), for example: \n*.log; *.sql',
        lastRecrodTime: 'Last execution time',
        failedFilter: 'Failed Task Filtering',
        all: 'all',
        database: 'database',
        missBackupAccount: 'The backup account could not be found',
        syncDate: 'Synchronization time ',
        releaseMemory: 'Free memory',
        curl: 'Crul',
        taskName: 'Task name',
        cronSpec: 'Lifecycle',
        directory: 'Backup directory',
        sourceDir: 'Backup directory',
        exclusionRules: 'Exclusive rule',
        saveLocal: 'Retain local backups (the same as the number of cloud storage copies)',
        url: 'URL Address',
        target: 'Target',
        retainCopies: 'Retain copies',
        cronSpecRule: 'Please enter a correct lifecycle',
        perMonth: 'Per monthly',
        perWeek: 'Per week',
        perHour: 'Per hour',
        perNDay: 'Every N days',
        perDay: 'Every days',
        perNHour: 'Every N hours',
        perNMinute: 'Every N minutes',
        per: 'Every ',
        handle: 'Handle',
        day: 'Day',
        day1: 'Day',
        hour: ' Hour',
        minute: ' Minute',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        shellContent: 'Script content',
        errRecord: 'Incorrect logging',
        errHandle: 'Task execution failure',
        noRecord: 'The execution did not generate any logs',
    },
    monitor: {
        avgLoad: 'Average load',
        loadDetail: 'Load detail',
        resourceUsage: 'Resource utilization rate',
        min: 'Minutes',
        read: 'Read',
        write: 'Write',
        count: 'Times',
        readWriteCount: 'Read or write Times',
        readWriteTime: 'Read or write delay',
        today: 'Today',
        yestoday: 'Yestoday',
        lastNDay: 'Last {0} day',
        memory: 'Memory',
        disk: 'Disk',
        network: 'Network',
        up: 'Up',
        down: 'Down',
    },
    terminal: {
        conn: 'connection',
        testConn: 'Test connection',
        saveAndConn: 'Save and Connect',
        connTestOk: 'Connection information available',
        hostList: 'Host information',
        createConn: 'Create a connection',
        createGroup: 'Create a group',
        expand: 'Expand all',
        fold: 'All contract',
        batchInput: 'Batch input',
        quickCommand: 'quick command',
        groupDeleteHelper:
            'After the group is removed, all connections in the group will be migrated to the default group. Confirm the information',
        quickCmd: 'Quick command',
        addHost: 'Add Host',
        localhost: 'Localhost',
        name: 'Name',
        port: 'Port',
        user: 'User',
        authMode: 'Auth Mode',
        passwordMode: 'password',
        keyMode: 'PrivateKey',
        password: 'Password',
        key: 'Private Key',
        emptyTerminal: 'No terminal is currently connected',
    },
    operations: {
        operation: 'Operation logs',
        login: 'Login logs',
        system: 'System logs',
        loginIP: 'Login IP',
        loginAddress: 'Login address',
        loginAgent: 'Login agent',
        loginStatus: 'Login status',
        deleteLogs: 'Clearing Logs',
        resource: 'Resource',
        operate: 'Operate',
        detail: {
            users: 'User',
            hosts: 'Host',
            apps: 'App',
            containers: 'Container',
            commands: 'Command',
            backups: 'Backup Account',
            settings: 'Panel Setting',
            cronjobs: 'Cronjob',
            databases: 'Database',
            auth: 'User',
            login: ' login',
            logout: ' logout',
        },
        status: 'status',
    },
    file: {
        dir: 'folder',
        upload: 'Upload',
        download: 'Download',
        fileName: 'file name',
        search: 'find',
        mode: 'permission',
        owner: 'owner',
        file: 'file',
        remoteFile: 'remote download',
        share: 'Share',
        sync: 'Data synchronization',
        size: 'size',
        updateTime: 'Modification time',
        open: 'open',
        rename: 'rename',
        role: 'authority',
        info: 'Properties',
        linkFile: 'soft link file',
        terminal: 'terminal',
        shareList: 'Share List',
        zip: 'compress',
        user: 'User',
        group: 'user group',
        path: 'path',
        public: 'public',
        setRole: 'Set permissions',
        link: 'Whether to link',
        rRole: 'read',
        wRole: 'Write',
        xRole: 'executable',
        name: 'name',
        compress: 'compress',
        deCompress: 'Decompress',
        compressType: 'compression format',
        compressDst: 'compression path',
        replace: 'Overwrite existing file',
        compressSuccess: 'Compression successful',
        deCompressSuccess: 'Decompression succeeded',
        deCompressDst: 'Decompression path',
        linkType: 'Link type',
        softLink: 'soft link',
        hardLink: 'hard link',
        linkPath: 'Link path',
        selectFile: 'Select file',
        downloadSuccess: 'Download successful',
        downloadUrl: 'download URL',
        downloadStart: 'Download started!',
        moveStart: 'Move start',
        move: 'Move',
        copy: 'Cpoy',
        calculate: 'Calculate',
        canNotDeCompress: 'Can not DeCompress this File',
        uploadSuccess: 'Upload Success!',
        downloadProcess: 'Download Process',
        downloading: 'Downloading...',
    },
    setting: {
        all: 'All',
        panel: 'Panel',
        emailHelper: 'For password retrieval',
        title: 'Panel alias',
        theme: 'Theme',
        dark: 'Dark',
        light: 'Light',
        language: 'Language',
        languageHelper:
            'By default, it follows the browser language. This parameter takes effect only on the current browser',
        sessionTimeout: 'Timeout',
        sessionTimeoutError: 'The minimum timeout is 300 seconds',
        sessionTimeoutHelper:
            'If you do not operate the panel for more than {0} seconds, the panel automatically logs out',
        syncTime: 'Server time',
        changePassword: 'Password change',
        oldPassword: 'Original password',
        newPassword: 'New password',
        retryPassword: 'Confirm password',
        duplicatePassword: 'The new password cannot be the same as the original password, please re-enter!',

        backup: 'Backup',
        noTypeForCreate: 'No backup type is currently created',
        serverDisk: 'Server disks',
        currentPath: 'Current path',
        OSS: 'Ali OSS',
        S3: 'Amazon S3',
        backupAccount: 'Backup account',
        loadBucket: 'Get bucket',
        accountName: 'Account name',
        accountKey: 'Account key',
        address: 'Address',
        port: 'Port',
        username: 'Username',
        password: 'Password',
        path: 'Path',

        safe: 'Safe',
        panelPort: 'Panel port',
        portHelper:
            'The recommended port range is 8888 to 65535. Note: If the server has a security group, permit the new port from the security group in advance',
        safeEntrance: 'Security entrance',
        safeEntranceHelper:
            'Panel management portal. You can log in to the panel only through a specified security portal, for example: onepanel',
        expirationTime: 'Expiration Time',
        unSetting: 'Not set',
        noneSetting:
            'Set the expiration time for the panel password. After the expiration, you need to reset the password',
        expirationHelper: 'If the password expiration time is [0] days, the password expiration function is disabled',
        days: 'Expiration Days',
        expiredHelper: 'The current password has expired. Please change the password again.',
        timeoutHelper:
            '[ {0} days ] The panel password is about to expire. After the expiration, you need to reset the password',
        complexity: 'Complexity verification',
        complexityHelper:
            'The password must contain at least eight characters and contain at least three uppercase letters, lowercase letters, digits, and special characters',
        mfa: 'MFA',
        mfaHelper1: 'Download a MFA verification mobile app such as:',
        mfaHelper2: 'Scan the following QR code using the mobile app to obtain the 6-digit verification code',
        mfaHelper3: 'Enter six digits from the app',

        enableMonitor: 'Enable',
        storeDays: 'Expiration time (day)',
        cleanMonitor: 'Clearing monitoring records',

        message: 'Message',
        messageType: 'Message type',
        email: 'Email',
        wechat: 'WeChat',
        dingding: 'DingDing',
        closeMessage: 'Turning off Message Notification',
        emailServer: 'Service name',
        emailAddr: 'Service address',
        emailSMTP: 'SMTP code',
        secret: 'Secret',

        about: 'About',
        project: 'Project Address',
        issue: 'Feedback',
        chat: 'Community Discussion',
        star: 'Star',
        description: '1Panel, A modern open source Linux panel.',
    },
    app: {
        app: 'Application',
        installName: 'installation name',
        installed: 'installed',
        all: 'all',
        version: 'version',
        detail: 'Details',
        install: 'Install',
        author: 'Author',
        source: 'source',
        sync: 'synchronous',
        appName: 'Application Name',
        status: 'status',
        container: 'container',
        restart: 'restart',
        up: 'start',
        down: 'stop',
        name: 'name',
        description: 'Description',
        delete: 'delete',
        deleteWarn:
            'Delete operation will delete all data and backup together, this operation cannot be rolled back, continue?',
        syncSuccess: 'Sync successfully',
        canUpdate: 'can be upgraded',
        backup: 'Backup',
        backupName: 'file name',
        backupPath: 'file path',
        backupdate: 'Backup time',
        restore: 'Restore',
        restoreWarn:
            'The restore operation will restart the application and replace the data. This operation cannot be rolled back. Do you want to continue?',
        update: 'upgrade',
        versioneSelect: 'Please select a version',
        operatorHelper: 'Operation {0} will be performed on the selected application, continue? ',
        checkInstalledWarn: '{0} is not detected, please enter the app store and click to install!',
        gotoInstalled: 'Go to install',
        search: 'Search',
        limitHelper: 'The application has already been installed, does not support repeated installation',
        deleteHelper: 'The application has been associated with the following resources and cannot be deleted',
        checkTitle: 'Prompt',
        website: 'website',
        database: 'database',
    },
    website: {
        website: 'website',
        primaryDomain: 'primary domain name',
        otherDomains: 'other domain names',
        type: 'Type',
        static: 'Static website',
        deployment: 'reverse proxy',
        supportUpType: 'Only support tar.gz files',
        zipFormat: 'tar.gz compressed package structure: test.tar.gz compressed package must contain website.json file',
        proxy: 'reverse proxy',
        alias: 'Codename',
        remark: 'remark',
        group: 'group',
        groupSetting: 'Group Management',
        app: 'Application',
        appNew: 'New application',
        appInstalled: 'Installed application',
        create: 'Create a website',
        delete: 'Delete website',
        deleteApp: 'Delete application',
        deleteBackup: 'Delete backup',
        domain: 'domain name',
        domainHelper: 'One domain name per line, support * and IP address, support domain name: port',
        port: 'port',
        addDomain: 'Add domain name',
        domainConfig: 'domain name settings',
        defaultDoc: 'default document',
        perserver: 'concurrency limit',
        perserverHelper: 'Limit the maximum concurrency of the current site',
        perip: 'Single IP limit',
        peripHelper: 'Limit the maximum number of concurrent access to a single IP',
        rate: 'flow limit',
        rateHelper: 'Limit the flow of each request (unit: KB)',
        limtHelper: 'Enable flow control',
        other: 'other',
        currentSSL: 'current certificate',
        dnsAccount: 'DNS Account',
        applySSL: 'Certificate Application',
        SSLList: 'Certificate list',
        createDnsAccount: 'DNS Account',
        aliyun: 'Aliyun DNS',
        manual: 'Manual parsing',
        key: 'Key',
        check: 'View',
        acmeAccountManage: 'Acme Account Management',
        email: 'Email',
        addAccount: 'Add new account',
        acmeAccount: 'Acme Account',
        provider: 'Verification method',
        dnsCommon: 'Manual resolution',
        expireDate: 'Expiration time',
        brand: 'brand',
        deploySSL: 'Deployment',
        deploySSLHelper: 'Are you sure to deploy the certificate? ',
        ssl: 'certificate',
        dnsAccountManage: 'DNS account management',
        renewSSL: 'Renew',
        renewHelper: 'Are you sure to renew the certificate? ',
        renewSuccess: 'Renew Certificate',
        config: 'Configuration',
        enableHTTPS: 'Enable HTTPS',
        aliasHelper: 'The code name is the folder name of the website directory',
        lastBackupAt: 'last backup time',
        null: 'none',
        nginxConfig: 'Nginx Configuration',
        websiteConfig: 'Website Settings',
        basic: 'Basic',
        source: 'source text',
        security: 'Security',
        backup: 'Backup',
        log: 'log',
        nginxPer: 'performance adjustment',
        neverExpire: 'never expire',
        protocol: 'protocol',
        setDefault: 'Set as default',
        default: 'Default',
        deleteHelper: 'Related application status is abnormal, please check',
        toApp: 'Go to the installed list',
    },
    nginx: {
        serverNamesHashBucketSizeHelper: 'The hash table size of the server name',
        clientHeaderBufferSizeHelper: 'The header buffer size requested by the client',
        clientMaxBodySizeHelper: 'Maximum upload file',
        keepaliveTimeoutHelper: 'Connection timeout',
        gzipMinLengthHelper: 'minimum compressed file',
        gzipCompLevelHelper: 'compression rate',
        gzipHelper: 'Whether to enable compressed transmission',
        connections: 'Active connections',
        accepts: 'Total connections (accepts)',
        handled: 'Total number of handshakes (handled)',
        requests: 'Total number of handshakes (requests)',
        reading: 'Number of requests (Reading)',
        writing: 'Number of Responses (Writing)',
        waiting: 'resident process (Waiting)',
        status: 'load status',
    },
};
