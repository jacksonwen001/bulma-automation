<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>

            <el-container>
                <el-aside width="200">
                    <Asider />
                </el-aside>
                <el-main>
                    <Tab />
                    <Main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import Header from '@/layout/components/Header.vue';
import Asider from '@/layout/components/Asider.vue';
import Main from '@/layout/components/Main.vue';
import Tab from './components/Tab.vue';

</script>
<style lang="less" scoped>
.el-aside {
    height: 100vh;
}

.el-header {
    border-bottom: 1px solid #c1c0bf;
    box-shadow: #11100f;
}

.el-main {
    background-color: rgba(229, 230, 235);
    height: 100%;
}
</style>