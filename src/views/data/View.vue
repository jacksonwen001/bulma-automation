<template>
    <div class="container">
         <el-form ref="searchFormRef" :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="Scenario Name: ">
                <el-input v-model="searchForm.name" placeholder="dddd" />
            </el-form-item>
        </el-form>
        <CreateScenarioDialog />
        <el-row>
            <el-col>
                <el-table v-loading="loading"  :data="tableData" style="width: 100%">
                    <el-table-column fixed prop="name" label="Name" width="150" />
                    <el-table-column fixed prop="desc" label="Description" width="150" />
                    <el-table-column prop="path" label="Path" width="120" />
                    <el-table-column prop="method" label="Method" width="120" />
                    <el-table-column prop="owner" label="Owner" width="120" />
                    <el-table-column prop="created" label="Created" width="120" />
                    <el-table-column prop="updated" label="Updated" width="120" />
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
                            <el-button type="text" size="small" @click="openLogsDialog">
                                <el-icon>
                                    <document />
                                </el-icon>
                                Log
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


        <el-dialog v-model="logsDialog" :close-on-click-modal="false" :before-close="handleLogsDialogClose" width="70%">
            <LogMessageDialog />
        </el-dialog>

    </div>
</template>
<script setup lang="ts">import { ElMessage, type FormInstance, type UploadUserFile } from 'element-plus';
import { reactive, ref, onMounted } from 'vue';
import CreateScenarioDialog from './components/CreateScenario.vue';
import { getScenarios } from '@/api/Scenario'
import { useRouter } from 'vue-router';
import  LogMessageDialog  from './components/LogMessageDialog.vue'

const page = ref(1)
const pageSize = ref(5)
const pageSizes = [1, 5, 10, 40]
const total = ref(0)
const tableData = ref([])
const router = useRouter()
const logsDialog = ref(false)
const loading = ref(true)

const handleLogsDialogClose = () => {
    logsDialog.value = false
}
const openLogsDialog = () => {
        logsDialog.value = true

}

const searchFormRef = ref<FormInstance>()
const searchForm = reactive({
    project: '',
    owner: '',
    scenarioName: ''
})

const onSubmit = async (formElem: FormInstance | undefined) => {
    if (!formElem) return
    console.log(searchForm)
}
const onClear = () => {
    console.log('clear all input')
}

const handleEdit = (id: number) => {
    console.log(id)
    router.push({
        name: 'dataEdit',
        query: {
            id
        }

    })
}

const handleDel = (id: number) => {
    ElMessage.success("删除成功!")
    fetchTableData()
}

const fetchTableData = () => {
    getScenarios({ page: page.value, limit: pageSize.value }).then(res => {
        loading.value = true
        tableData.value = res.data.data
        total.value = res.data.total
        loading.value = false
    })
}


onMounted(() => {
    fetchTableData()
})

const handleSizeChange = (val: number) => {
    pageSize.value = val;
    fetchTableData()
}

const handleCurrentChange = (val: number) => {
    page.value = val
    fetchTableData()
}

const handleUpload = () => {

}

</script>
<style scoped lang="less">
.el-row {
    margin-top: 30px;
}

.container {
    padding: 5vh;
}

.el-pagination {
    float: right;
}
</style>