import http from '@/api';
import { ResPage, SearchWithPage, DescriptionUpdate } from '../interface';
import { Backup } from '../interface/backup';
import { Setting } from '../interface/setting';

export const getSettingInfo = () => {
    return http.post<Setting.SettingInfo>(`/settings/search`);
};
export const getSystemAvailable = () => {
    return http.get(`/settings/search/available`);
};

export const updateSetting = (param: Setting.SettingUpdate) => {
    return http.post(`/settings/update`, param);
};

export const updatePassword = (param: Setting.PasswordUpdate) => {
    return http.post(`/settings/password/update`, param);
};

export const updatePort = (param: Setting.PortUpdate) => {
    return http.post(`/settings/port/update`, param);
};

export const handleExpired = (param: Setting.PasswordUpdate) => {
    return http.post(`/settings/expired/handle`, param);
};

export const syncTime = () => {
    return http.post<string>(`/settings/time/sync`, {});
};

export const cleanMonitors = () => {
    return http.post(`/settings/monitor/clean`, {});
};

export const getMFA = () => {
    return http.get<Setting.MFAInfo>(`/settings/mfa`, {});
};

export const loadDaemonJsonPath = () => {
    return http.get<string>(`/settings/daemonjson`, {});
};

export const bindMFA = (param: Setting.MFABind) => {
    return http.post(`/settings/mfa/bind`, param);
};

export const loadBaseDir = () => {
    return http.get<string>(`/settings/basedir`);
};

// backup
export const getBackupList = () => {
    return http.get<Array<Backup.BackupInfo>>(`/settings/backup/search`);
};
export const getFilesFromBackup = (type: string) => {
    return http.post<Array<any>>(`/settings/backup/search/files`, { type: type });
};
export const addBackup = (params: Backup.BackupOperate) => {
    return http.post<Backup.BackupOperate>(`/settings/backup`, params);
};
export const editBackup = (params: Backup.BackupOperate) => {
    return http.post(`/settings/backup/update`, params);
};
export const deleteBackup = (params: { ids: number[] }) => {
    return http.post(`/settings/backup/del`, params);
};
export const downloadBackupRecord = (params: Backup.RecordDownload) => {
    return http.download<BlobPart>(`/settings/backup/record/download`, params, { responseType: 'blob' });
};
export const deleteBackupRecord = (params: { ids: number[] }) => {
    return http.post(`/settings/backup/record/del`, params);
};
export const searchBackupRecords = (params: Backup.SearchBackupRecord) => {
    return http.post<ResPage<Backup.RecordInfo>>(`/settings/backup/record/search`, params);
};
export const listBucket = (params: Backup.ForBucket) => {
    return http.post(`/settings/backup/buckets`, params);
};

// snapshot
export const snapshotCreate = (param: Setting.SnapshotCreate) => {
    return http.post(`/settings/snapshot`, param);
};
export const snapshotImport = (param: Setting.SnapshotImport) => {
    return http.post(`/settings/snapshot/import`, param);
};
export const updateSnapshotDescription = (param: DescriptionUpdate) => {
    return http.post(`/settings/snapshot/description/update`, param);
};
export const snapshotDelete = (param: { ids: number[] }) => {
    return http.post(`/settings/snapshot/del`, param);
};
export const snapshotRecover = (param: Setting.SnapshotRecover) => {
    return http.post(`/settings/snapshot/recover`, param);
};
export const snapshotRollback = (param: Setting.SnapshotRecover) => {
    return http.post(`/settings/snapshot/rollback`, param);
};
export const searchSnapshotPage = (param: SearchWithPage) => {
    return http.post<ResPage<Setting.SnapshotInfo>>(`/settings/snapshot/search`, param);
};

// upgrade
export const loadUpgradeInfo = () => {
    return http.get<Setting.UpgradeInfo>(`/settings/upgrade`);
};
export const upgrade = (version: string) => {
    return http.post(`/settings/upgrade`, { version: version });
};
