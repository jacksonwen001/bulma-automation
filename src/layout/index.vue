<template>
    <el-container>
        <el-header class="layout-header">
            <headerComponent />
        </el-header>
        <el-container>
        <el-aside width="200px">
            <asideComponent />
        </el-aside>
        <el-main class="layout-container">
            <mainComponent />
        </el-main>
        </el-container>
       
    </el-container>
</template>
<script setup lang="ts">
import headerComponent from  './components/Header.vue'
import mainComponent from './components/Main.vue'
import asideComponent from './components/Aside.vue'

</script>
<style scoped>
    .layout-header{
        border-bottom: 1px solid #c1c0bf;
        box-shadow: #11100f;
    }
    .layout-container {
        background-color: rgba(229,230,235);
        height: 100%; 
    }
</style>