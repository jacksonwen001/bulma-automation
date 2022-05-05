<template>
    <el-menu @open="true" @close="false" :collapse="false" router collapse class="menu">
        <template v-for="(item, index) in menus" :key="index">
            <el-sub-menu v-if="item.children.length > 0 "
                :index="item.path">
                <template #title>
                    <span>{{ item.title }}</span>
                </template>
                <template v-for="(sub, childIndex) in item.children" :key="index + '-' + childIndex">
                    <el-menu-item :index="sub.path">
                        <template #title>{{ sub.title ? sub.title : '' }}</template>
                    </el-menu-item>
                </template>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path">
                <template #title>{{ item.title }}</template>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<script lang="ts" setup>
import { menuStore } from '@/stores';
import { computed } from 'vue';
let menu = menuStore()
const menus = computed(() => menu.menusInfo)

</script>
<style scoped lang="less">
.menu {
    height: 100vh;
}
</style>