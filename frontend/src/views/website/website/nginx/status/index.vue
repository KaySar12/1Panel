<template>
    <div>
        <el-form label-position="top">
            <el-row type="flex" style="margin-left: 10px" justify="center">
                <el-form-item style="width: 25%">
                    <template #label>
                        <span class="status-label">{{ $t('nginx.connections') }}</span>
                    </template>
                    <span class="status-count">{{ data.active }}</span>
                </el-form-item>
                <el-form-item style="width: 25%">
                    <template #label>
                        <span class="status-label">{{ $t('nginx.accepts') }}</span>
                    </template>
                    <span class="status-count">{{ data.accepts }}</span>
                </el-form-item>
                <el-form-item style="width: 25%">
                    <template #label>
                        <span class="status-label">{{ $t('nginx.handled') }}</span>
                    </template>
                    <span class="status-count">{{ data.handled }}</span>
                </el-form-item>
                <el-form-item style="width: 25%">
                    <template #label>
                        <span class="status-label">{{ $t('nginx.requests') }}</span>
                    </template>
                    <span class="status-count">{{ data.requests }}</span>
                </el-form-item>

                <el-form-item style="width: 25%">
                    <template #label>
                        <span class="status-label">{{ $t('nginx.reading') }}</span>
                    </template>
                    <span class="status-count">{{ data.reading }}</span>
                </el-form-item>
                <el-form-item style="width: 25%">
                    <template #label>
                        <span class="status-label">{{ $t('nginx.writing') }}</span>
                    </template>
                    <span class="status-count">{{ data.writing }}</span>
                </el-form-item>
                <el-form-item style="width: 25%">
                    <template #label>
                        <span class="status-label">{{ $t('nginx.waiting') }}</span>
                    </template>
                    <span class="status-count">{{ data.waiting }}</span>
                </el-form-item>
                <el-form-item style="width: 25%" />
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { Nginx } from '@/api/interface/nginx';
import { GetNginxStatus } from '@/api/modules/nginx';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { SearchAppInstalled } from '@/api/modules/app';

const isOpenRestry = ref(false);

// check OpenRestry
const checkOpenRestry = async () => {
    const res = await SearchAppInstalled({
        page: 1,
        pageSize: 100,
        update: true,
    });
    // console.log(res.data);
    if (res.data.total != 0) {
        const openRes = res.data.items.find((item) => item.name === 'openresty');
        // console.log(openRes);
        if (openRes) {
            isOpenRestry.value = true;
        } else {
            console.log('err');
        }
    }
};

checkOpenRestry();

const props = defineProps({
    status: {
        type: String,
        default: 'Running',
    },
});

let data = ref<Nginx.NginxStatus>({
    accepts: '0',
    handled: '0',
    requests: '0',
    reading: '0',
    waiting: '0',
    writing: '0',
    active: '0',
});

const get = async () => {
    if (props.status != 'Running') {
        return;
    }
    if (isOpenRestry.value) {
        const res = await GetNginxStatus();
        data.value = res.data;
    }
};

// Tạo interval
let intervalId: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
    get();
    if (isOpenRestry.value) {
        intervalId = setInterval(get, 3000); // Lặp lại việc lấy dữ liệu mỗi 3 giây
    }
});

// abc

watch(isOpenRestry, (newValue) => {
    if (newValue) {
        console.log('isOpenRestry changed to true, starting interval...');
        if (!intervalId) {
            intervalId = setInterval(get, 3000); // Lặp lại việc lấy dữ liệu mỗi 3 giây
        }
    } else if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
    }
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId); // Xóa interval khi component bị unmount để tránh rò rỉ bộ nhớ
    }
});
</script>
