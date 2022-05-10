<template>
    <el-tag 
        v-for="(tag, index) in tagList"
        :key="tag.fullPath"
        @click="goto(tag)"
        closable 
        @close="tabClose(tag, index)"
    >
        {{ tag.fullPath }}
    </el-tag>
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
    if(!tagList.value.some((tag) => tag.fullPath === route.fullPath)) {
        tabStore.updateTabList(route)
    }
},  true)


const tabClose = (tab: TagProps, idx: number) => {
    tabStore.deleteTag(idx, tab); 
    if(idx === tagList.value.length) {
        const latest = tagList.value[tagList.value.length - 1]
        router.push({ name: latest.name })
    }
}

const goto = (tag: TagProps) => {
    router.push({ name: tag.name })
}
</script>