<template>
    <div class="container">
        <el-row>
            <el-col>
                <el-form ref="searchFormRef" :inline="true" :model="searchForm" class="demo-form-inline">
                    <el-form-item label="Project's Name: ">
                        <el-input v-model="searchForm.name" placeholder="Project Name" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">
                            Search
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
         <el-row>
            <el-col>
                <el-button type="primary" @click="openAddUserDialog">Add Project</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-table :data="tableData" style="width: 100%;">
                    <el-table-column prop="name" label="Name" width="150" />
                    <el-table-column prop="organization" label="Organization" width="120" />
                    <el-table-column prop="email" label="Email" width="120" />
                    <el-table-column prop="introduction" label="Introduction" width="200" />

                    <el-table-column prop="role" label="Role" width="150" />
                    <el-table-column prop="registerDate" label="RegisterDate" width="150" />
                    <el-table-column prop="lastLogin" label="LastLogin" width="150" />
                    <el-table-column fixed="right" label="Operations" width="200">
                        <template #default="scope">
                            <el-button type="text" size="small" @click="handleEdit(scope.row.id)">
                                <el-icon>
                                    <edit-pen />
                                </el-icon> Edit
                            </el-button>
                            <el-button type="text" size="small" @click="handleDel(scope.row.id)">
                                <el-icon>
                                    <delete />
                                </el-icon>Delete
                            </el-button>
                            
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-row>
            <el-col>
                <el-pagination v-model:currentPage="page" v-model:page-size="pageSize" :page-sizes="pageSizes"
                    layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { getUsers } from '@/api/User';
import type { FormInstance } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

const searchFormRef = ref<FormInstance>()
const searchForm = reactive({
    name: ''
})
const tableData = ref([])
const page = ref(1)
const pageSize = ref(5)
const pageSizes = [1, 5, 10, 40]
const total = ref(0)

const fetchTableData = () => {
    getUsers({ page: page.value, limit: pageSize.value }).then(res => {
        tableData.value = res.data.data
        total.value = res.data.total
    })
}
const handleSizeChange = (val: number) => {
    pageSize.value = val;
    fetchTableData()
}

const handleCurrentChange = (val: number) => {
    page.value = val
    fetchTableData()
}

const openAddUserDialog = () => {

}

const handleEdit = (id: number) => {

}

const handleDel = (id: number) => {

}
onMounted(() => {
    fetchTableData()
})
</script>
<style lang="less" scoped>
.container {
    padding: 5vh;
}

.el-row {
    margin: 20px;
}

.el-pagination {
    float: right;
}
</style>