<template>
    <el-space>
        <el-tag effect="dark" v-for="(tag, index) in tagList" :key="tag.fullPath" @click="goto(tag)" closable hit
            @close="tabClose(tag, index)">
            {{ tag.title }}
        </el-tag>
    </el-space>
</template>
<script setup lang="ts">
import { useTabStore } from '@/stores';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { listenerRouteChange } from '@/utils/RouterListener'
import type { RouteLocationNormalized } from 'vue-router';
import type { TagProps } from '@/stores/tab/types';

const tabStore = useTabStore()
const router = useRouter()
const tagList = computed(() => tabStore.getTabList);

listenerRouteChange((route: RouteLocationNormalized) => {
    if (!tagList.value.some((tag) => tag.fullPath === route.fullPath)) {
        tabStore.updateTabList(route)
    }
}, true)


const tabClose = (tab: TagProps, idx: number) => {
    if (tagList.value.length === 1) {
        return;
    }
    tabStore.deleteTag(idx, tab);
    if (idx === tagList.value.length) {
        const latest = tagList.value[tagList.value.length - 1]
        router.push({ name: latest.name })
    }
}

const goto = (tag: TagProps) => {
    router.push({
        path: tag.fullPath,
        query: tag.query
    })
}
</script>
<style lang="less" scoped>
.el-tag {
    cursor: pointer;
    background-color: rgb(5, 179, 179);
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 0 0 0 0;

    .el-tag__close {
        justify-content: end;
    }
}
</style>