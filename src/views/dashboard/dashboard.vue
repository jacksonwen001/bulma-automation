<template>
    <div>
        <el-form ref="searchFormRef" :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="Scenario Name: ">
                <el-input v-model="searchForm.name" placeholder="dddd" />
            </el-form-item>
        </el-form>
        <button @click="testClick">点我测</button>
    </div>
</template>
<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const searchFormRef = ref<FormInstance>()
const searchForm = reactive({
    name: ''
})

const router = useRouter(); 
const testClick = function(){
    console.log('跳转')
    router.push({
        name: 'system'
    })
}

    
</script>