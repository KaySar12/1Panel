import { CommonModel, ReqPage } from '.';

export namespace WebSite {
    export interface WebSite extends CommonModel {
        primaryDomain: string;
        type: string;
        alias: string;
        remark: string;
        domains: string[];
        appType: string;
        appInstallId?: number;
        webSiteGroupId: number;
        otherDomains: string;
        appinstall?: NewAppInstall;
        webSiteSSL: SSL;
    }

    export interface WebSiteDTO extends CommonModel {
        primaryDomain: string;
        type: string;
        alias: string;
        remark: string;
        domains: WebSite.Domain[];
        appType: string;
        appInstallId?: number;
        webSiteGroupId: number;
        otherDomains: string;
        appinstall?: NewAppInstall;
    }

    export interface NewAppInstall {
        name: string;
        appDetailId: number;
        params: any;
    }

    export interface WebSiteSearch extends ReqPage {
        name: string;
    }

    export interface WebSiteRecover {
        websiteName: string;
        type: string;
        backupName: string;
    }
    export interface WebsiteRecoverByUpload {
        websiteName: string;
        type: string;
        fileDir: string;
        fileName: string;
    }

    export interface WebSiteDel {
        id: number;
        deleteApp: boolean;
        deleteBackup: boolean;
        forceDelete: boolean;
    }

    export interface WebSiteCreateReq {
        primaryDomain: string;
        type: string;
        alias: string;
        remark: string;
        appType: string;
        appInstallId: number;
        webSiteGroupId: number;
        otherDomains: string;
        proxy: string;
    }

    export interface WebSiteUpdateReq {
        id: number;
        primaryDomain: string;
        remark: string;
        webSiteGroupId: number;
    }

    export interface Group extends CommonModel {
        name: string;
        default: boolean;
    }

    export interface GroupOp {
        name: string;
        id?: number;
        default: boolean;
    }

    export interface Domain {
        websiteId: number;
        port: number;
        id: number;
        domain: string;
    }

    export interface DomainCreate {
        websiteId: number;
        port: number;
        domain: string;
    }

    export interface NginxConfigReq {
        operate: string;
        websiteId: number;
        scope: string;
        params?: any;
    }

    export interface NginxParam {
        name: string;
        params: string[];
    }

    export interface NginxScopeConfig {
        enable: boolean;
        params: NginxParam[];
    }

    export interface DnsAccount extends CommonModel {
        name: string;
        type: string;
        authorization: Object;
    }

    export interface DnsAccountCreate {
        name: string;
        type: string;
        authorization: Object;
    }

    export interface DnsAccountUpdate {
        id: number;
        name: string;
        type: string;
        authorization: Object;
    }

    export interface SSL extends CommonModel {
        primaryDomain: string;
        privateKey: string;
        pem: string;
        otherDomains: string;
        certURL: string;
        type: string;
        issuerName: string;
        expireDate: string;
        startDate: string;
    }

    export interface SSLCreate {
        primaryDomain: string;
        otherDomains: string;
        provider: string;
        acmeAccountId: number;
        dnsAccountId: number;
    }

    export interface SSLApply {
        websiteId: number;
        SSLId: number;
    }

    export interface SSLRenew {
        SSLId: number;
    }

    export interface AcmeAccount extends CommonModel {
        email: string;
        url: string;
    }

    export interface AcmeAccountCreate {
        email: string;
    }

    export interface DNSResolveReq {
        domains: string[];
        acmeAccountId: number;
    }

    export interface DNSResolve {
        resolve: string;
        value: string;
        domain: string;
        err: string;
    }

    export interface SSLReq {
        name?: string;
    }

    export interface HTTPSReq {
        websiteId: number;
        enable: boolean;
        websiteSSLId?: number;
        type: string;
        certificate?: string;
        privateKey?: string;
    }

    export interface HTTPSConfig {
        enable: boolean;
        SSL: SSL;
    }

    export interface CheckReq {
        installIds?: number[];
    }

    export interface CheckRes {
        name: string;
        status: string;
        version: string;
        appName: string;
    }

    export interface WafReq {
        websiteId: number;
        key: string;
        rule: string;
    }

    export interface WafRes {
        enable: boolean;
        filePath: string;
        content: string;
    }

    export interface WafUpdate {
        enable: boolean;
        websiteId: number;
        key: string;
    }
}
