<template>
    <el-container>
        <el-main class="login-form">
            <el-card class="box-card">
                <template #header>
                    <span>Automation Testing Platform</span>
                </template>

                <el-form ref='loginFormRef' :model='loginForm' status-icon :rules='loginRules' label-width='120px'
                    :inline-message="true">
                    <el-form-item label="Username" prop="username">
                        <el-input v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submitForm(loginFormRef)">Sign In</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores';
import { setToken } from '@/utils/LocalStorageUtil';


const router = useRouter()
const usertore = useUserStore()

const loginFormRef = ref<FormInstance>()
// 表单数据对象
const loginForm = reactive({
    username: '',
    password: ''
})

// 登录表单的验证规则
const usernameValidator = (rule: any, value: any, callback: any) => {
    let usernameReg = new RegExp('^[a-zA-Z0-9]{4,20}$')
    if (value === '') {
        callback(new Error('用户名不能为空!'))
    }
    if (!usernameReg.test(value)) {
        console.log("mismatch：" + value)
        callback(new Error('用户名输入错误'))
    }
    callback()

}

const loginRules = reactive({
    username: [{ required: true, validator: usernameValidator, trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

// 提交表单 
const submitForm = async (formElem: FormInstance | undefined) => {
    if (!formElem) return
    formElem.validate((valid) => {
        if (!valid) {
            console.log("Failed~" + loginForm)
            return false;
        }
    })

    // 用户登录 
    let res = await usertore.signIn(loginForm)

    if (res) {
        let userObj = res.data
        setToken(userObj)
        router.push({
            name: 'dashboard'
        })
    }
}
</script>
<style lang="less" scoped>
.login-form {
    margin-top: 30vh;
}
</style>    