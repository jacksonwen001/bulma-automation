<template>
    <el-container>
        <el-header class="layout-header">
            <headerComponent />
        </el-header>
        <el-main class="layout-container">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script setup lang="ts">
import headerComponent from '@/layout/components/Header.vue'
</script>
<style lang="less">
.el-header{
    border-bottom: 1px solid #c1c0bf;
    box-shadow: #11100f;
}
.el-main{
    width: 90%; 
    margin: 0 auto; 
}
</style>