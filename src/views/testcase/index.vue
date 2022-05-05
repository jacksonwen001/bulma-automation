<template>
    <div class="container">
        <el-form ref="searchFormRef" :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="Scenario Name: ">
                <el-input v-model="searchForm.name" placeholder="Approved by" />
            </el-form-item>
        </el-form>

        <el-table :data="tableData" style="width: 100%; text-align: center">
            <el-table-column  prop="name" label="Name" width="150" />
            <el-table-column  prop="desc" label="Description" width="150" />
        </el-table>

         <el-row>
            <el-col>
                <el-pagination v-model:currentPage="page" v-model:page-size="pageSize" :page-sizes="pageSizes"
                    layout="total, sizes, prev, pager, next, jumper" :total="total" 
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';

const searchFormRef = ref<FormInstance>()
const searchForm = reactive({
    name: ''
})
const tableData = ref([])
const page = ref(1)
const pageSize = ref(5)
const pageSizes = [1, 5, 10, 40]
const total = ref(0)

const fetchTableData = async () => {

}
const handleSizeChange = (val: number) => {
    pageSize.value = val;
    fetchTableData()
}

const handleCurrentChange = (val: number) => {
    page.value = val
    fetchTableData()
}

</script>
<style lang="less" scoped>
.container {
    padding: 5vh; 
    margin: 0 auto; 
}
.el-pagination {
    float: right;
}
</style>