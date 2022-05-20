<template>
    <div class="menu">
        <el-menu @open="true" @close="false" :collapse="false" router collapse text-color="#fff" background-color="#022741">
            <template v-for="(item, index) in menus" :key="index">
                <el-sub-menu v-if="item.children.length > 0" :index="item.path">
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
    </div>
</template>
<script setup lang="ts">
import { useMenuStore } from '@/store';
import { computed } from 'vue';
const menuStore = useMenuStore()
const menus = computed(() => menuStore.menuList)

</script>
<style lang="less" scoped>
.menu {
    width: 200px;
    height: 95vh;
    background-color: #022741;
    color: #fff;

    .el-menu {
        border: none;
        text-align: center;
        
    }

    .logo {
        height: 60px;
        text-align: center; 
        a {
            display: block;
            height: 60px;
            width: 100px; 
            border: 1px solid #fff;
            color: #fff; 
            font-size: 16px; 
            text-decoration: none;

        }
    }
}
</style>