<template>
    <el-row>
        <h1><span class="title"></span> 所有模块 </h1>
    </el-row>
    <el-row>
        <el-col>
            <el-space wrap>
                <el-card>
                    <div class="avatar">
                        <el-avatar></el-avatar>
                        <div class="desc">
                            项目1
                        </div>
                        <div class="operation">
                            <el-button>进入项目</el-button>
                        </div>
                    </div>

                </el-card>

            </el-space>
        </el-col>
    </el-row>

    <el-row>
        <el-divider />

    </el-row>
    <el-row>
        <h1><span class="title"></span> 收藏的项目</h1>
    </el-row>
    <el-row>
        <el-col>
            <el-space wrap>
                <el-card >
                    <div class="avatar">
                        <el-avatar></el-avatar>
                        <div class="desc">
                            项目1
                        </div>
                    </div>
                    <div class="operation">
                        <el-button @click="enterProject">进入项目</el-button>
                        <el-button>取消收藏</el-button>
                    </div>
                </el-card>
            </el-space>
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <el-link type="primary" :underline="false" @clikc="getMoreProjects"> >>>>>>>>>>>>>>>>> 查看更多或者创建项目 </el-link>
        </el-col>
    </el-row>


</template>
<script setup lang="ts">
import { onMounted } from 'vue';


const fetchCollectionProject = async () => {

}

onMounted(() => {

})
const getMoreProjects = () => {

}
const enterProject = () => {
    alert(1)
}
</script>
<style lang="less" scoped>
.el-card {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
        text-align: center;
        .el-avatar {
            width: 120px;
            height: 120px;
        }
    }


}

.title {
    width: 10px;
    height: 30px;
    display: inline-block;
    background-color: rgb(9, 181, 161);
    vertical-align: middle;
}

.el-row {
    line-height: 400%
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