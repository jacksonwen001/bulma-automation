<template>
    <el-menu @open="true" @close="false" :collapse="false" router collapse class="menu">
        <template v-for="(item, index) in menus" :key="index">
            <el-sub-menu v-if="item.children.length > 0" :index="item.path">
                <template #title>
                    <span>{{ item.title }}</span>
                </template>
                <template v-for="(sub, childIndex) in item.children" :key="index + '-' + childIndex">
                    <el-menu-item :index="sub.path" @click="clickMenu(sub)">
                        <template #title>{{ sub.title ? sub.title : '' }}</template>
                    </el-menu-item>
                </template>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path" @click="clickMenu(item)">
                <template #title>{{ item.title }}</template>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<script lang="ts" setup>
import { useMenuStore, useTabStore } from '@/stores';
import { listenerRouteChange } from '@/utils/RouterListener';
import { computed, ref } from 'vue';
const menuStore = useMenuStore()
const menus = computed(() => menuStore.menuList.sort((a, b) => a.order - b.order))
const selectedKey = ref<String[]>([])
const tabStore = useTabStore()
const clickMenu = (item: any) => {
    console.log(item);
}
// listenerRouteChange((newRoute) => {
//     const key = newRoute.matched[2]?.name as string;
//     selectedKey.value = [key]
// })
</script>
<style scoped lang="less">
.menu {
    height: 100vh;
}
</style>