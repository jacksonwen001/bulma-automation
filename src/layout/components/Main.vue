<template>
    <div class="main-container">
        <router-view>
            <template #default>
                <router-view v-slot="{ Component, route }">
                    <transition name="fade" mode="out-in" appear>
                        <component :is="Component" v-if="route.meta.ignoreCache" :key="route.fullPath" />
                        <keep-alive v-else :include="cacheList">
                            <component :is="Component" :key="route.fullPath" />
                        </keep-alive>
                    </transition>
                </router-view>
            </template>
        </router-view>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useTabStore } from '@/stores'

const tabStore = useTabStore()
const cacheList = computed(() => tabStore.getCacheList)


</script>
<style scoped>
.main-container {
    background-color: #fff;
    height: 100vh;
    min-height: calc(100vh - 0.9rem);
    overflow: auto;
}
</style>