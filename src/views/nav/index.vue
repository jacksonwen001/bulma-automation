<template>
    <el-container>
        <el-header class="layout-header">
            <headerComponent />
        </el-header>
        <el-main class="layout-container">
            <el-row>
                <el-col>
                    <el-space wrap>
                        <el-card>
                            测试情况
                        </el-card>
                        <el-card>
                            测试项目
                        </el-card>
                    </el-space>
                </el-col>
            </el-row>

            <el-divider />
            <el-row>
                <el-col>
                    <el-space wrap>
                        <el-card @click="enterProject">
                            <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                            测试项目1
                        </el-card>
                        <el-card>
                            测试项目2
                        </el-card>
                        <el-card>
                            测试项目3
                        </el-card>
                        <el-card>
                            测试项目4
                        </el-card>
                    </el-space>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-link type="primary" @clikc="getMoreProjects"> >>>>>>>>>>>>>>>>> 查看更多项目 </el-link>
                </el-col>
            </el-row>

            <el-divider />
        </el-main>
    </el-container>

</template>
<script setup lang="ts">
import headerComponent from '@/layout/components/Header.vue'

const getMoreProjects = () => {

}
const enterProject = () => {
    alert(1)
}
</script>
<style lang="less" scoped>
.el-card {
    cursor: pointer
}
.layout-header {
    border-bottom: 1px solid #c1c0bf;
    box-shadow: #11100f;
}

.layout-container {
    width: 80%;
    height: 100vh;
    margin: 0 auto;

}

.el-link {
    float: right;
}
</style>