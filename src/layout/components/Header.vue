<template>
    <div class="navbar">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </router-link>
        </div>
        <div class="navbar-end">
            <div class="navbar-item ">
                <el-dropdown ref="userProfile" trigger="contextmenu" style="margin-right: 30px; cursor: pointer;">
                    <el-avatar fit="fill" shape="circle" @mouseenter="showMenu"
                        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const userProfile = ref();
const router = useRouter()
function showMenu() {
    userProfile.value.handleOpen()
}

const logout = async () => {
    const res = await userStore.logout()
    if (res) {
        ElMessage.success(res.message!)
        console.log('logout ====')

        console.log(res)
        router.push({
            name: 'Login'
        })
    }else{
        console.log(res)

    }
}
</script>
<style lang="less" scoped>
.navbar {
    display: flex;
    flex-direction: row;

    .navbar-brand {
        flex: 1;
        line-height: 100%;

        a {
            text-decoration: none;
            color: black;
            margin-top: 15px;
            margin-left: 20px;
            display: block;
            font-size: large;
            font-weight: bold;
            line-height: 200%;
        }
    }

    .navbar-end {
        padding: 10px;
    }

}
</style> 