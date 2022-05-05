<template>
    <el-row justify="start" class="common-layout">
        <el-col :span="17" class="login-background">
        </el-col>
        <el-col :span="7" class="login-form-container">
            <LoginForm />
        </el-col>
    </el-row>
</template>
<script setup lang="ts">
    import LoginForm from './components/LoginForm.vue'; 
</script>
<style lang="less" scoped>
    .common-layout {
        height: 100vh;
        .login-background {
            background: url("https://sloanreview.mit.edu/wp-content/uploads/2021/04/GEN-Davenport-Schaefer-COE-1290x860-1.jpg");
        }
        .login-form-container {
            background-color: rgb(251, 250, 249);
        }
    }
</style>