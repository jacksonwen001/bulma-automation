<template>
    <div class="main">
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in" appear>
                <component :is="Component" v-if="route.meta.ignoreCache" :key="route.fullPath" />
                <keep-alive v-else :include="cacheTabList">
                    <component :is="Component" :key="route.fullPath" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { settings } from '@/config'
import { useTabStore } from '@/store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
/** 设置最大缓存 */
const keepAliveMaxNum = settings.keepMaxNum
const tabStore = useTabStore()
const route = useRoute()
const cacheTabList = computed(() => tabStore.getCacheTabList)
const key = computed(() => route.fullPath)
console.log("========== cacheTabList =========")
console.log(cacheTabList.value)

</script>
<style>
.main {
    background-color: #fff;
    height: 100vh;
    min-height: calc(100vh - 0.9rem);
    overflow: auto;
    padding: 10px;
}
</style>