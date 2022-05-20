<template>
    <nav class="tab fix">
        <div class="tab-item" :class="{ 'active': tab.fullPath === $route.fullPath }" v-for=" (tab, idx) in tabList" :key="tab.fullPath" @click="goto(tab)">
            <div class="title">{{ tab.title }}</div>
            <div class="tab-close" @click.stop="close(tab, idx)">
                <el-icon>
                    <Close />
                </el-icon>
            </div>
            <div class="divide"></div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { useTabStore } from '@/store';
import { computed, ref } from 'vue';
import type { TabProps } from '@/store/modules/tab/types';
import { useRouter, type RouteLocationNormalized } from 'vue-router';
import { listenerRouteChange } from '@/utils/routerListener';

const tabStore = useTabStore();
const tabList = computed(() => tabStore.getTabList)
const router = useRouter()
const isActive = false

console.log(tabList)

const goto = (tab: TabProps) => {
    router.push({ ...tab })
}

const close = (tab: TabProps, idx: number) => {
    if (tabList.value.length === 1) {
        return;
    }
    tabStore.closeTab(idx, tab);
    if (idx === tabList.value.length) {
        const latest = tabList.value[tabList.value.length - 1]
        router.push({ name: latest.name })
    }
}

listenerRouteChange((route: RouteLocationNormalized) => {
    if (!tabList.value.some((tab) => tab.fullPath === route.fullPath)) {
        tabStore.openTab(route)
    }
}, true)

/**
 * <div class="tab-view-container">
        <div class="tab-view-item" v-for=" (tab, idx) in tabList" :key="tab.fullPath" @click="goto(tab)">
            <div class="tab-title">
                {{ tab.title }}
            </div>
            <span class="tab-close" @click="close(tab, idx)">
                <el-icon>
                    <circle-close />
                </el-icon>
            </span>

            <!-- <div class="tab-close" @click="close(tab, idx)">
                <el-icon>
                    <circle-close />
                </el-icon>
            </div> -->
        </div>
    </div>
 */
</script>
<style lang="less" scoped>
.tab {
    display: flex;
    flex-direction: row;
    background-color: rgb(200, 203, 205);
    overflow: scroll;
    padding: 5px 5px 0 5px; 
    .tab-item {
        display: flex;
        flex-direction: row;
        width: 120px;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        padding: 4px;
        text-align: center;
        cursor: pointer;
        border-right: 1px solid #eee;

        &:hover {
            background-color: #ddd;
            border: none;
        }
        &.active {
            background-color: #fff;
        }

        .title {
            text-align: center;
            height: 100%;
            width: 80%;
        }

        .tab-close {
            width: 10%;
            padding-top: 2px;
            align-self: center;
            text-align: center;
        }

    }


}
</style>

