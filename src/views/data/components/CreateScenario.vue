<template>
    <el-row>
        <el-col>
            <el-button type="primary" @click="openDialog">Add Scenario</el-button>
        </el-col>
    </el-row>
    <el-dialog v-model="scenarioDialog" :close-on-click-modal="false" :before-close="handleClose" width="50%">
        <el-form class="scenario" ref="scenarioFormRef" :model="scenarioForm" label-width="120px">
            <el-form-item label="Name:">
                <el-col :span="11">
                    <el-input v-model="scenarioForm.name"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Description:">
                <el-col :span="11">
                    <el-input type="textarea" v-model="scenarioForm.desc"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Path:">
                <el-col :span="18">
                    <el-input v-model="scenarioForm.path"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Method:">
                <el-select v-model="scenarioForm.method" placeholder="method">
                    <el-option label="POST" value="post" />
                    <el-option label="GET" value="get" />
                </el-select>
            </el-form-item>
            <el-form-item label="Params:">
                <el-col :span="18">
                    <el-row v-for="(param, index) in scenarioForm.params" :key="index">
                        <el-col :span="18">
                            <el-input v-model="param.data"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="danger" @click="delParam" v-if="scenarioForm.params.length > 1"> -
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addParam"> + </el-button>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

</template>

<script setup lang="ts">
import { ElMessage, type FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
const scenarioDialog = ref(false)
const openDialog = () => {
    scenarioDialog.value = true
}
const handleClose = () => {
    console.log('')
    scenarioDialog.value = false;
}
const scenarioFormRef = ref<FormInstance>()
const scenarioForm = reactive({
    name: '',
    desc: '',
    path: '',
    method: '',
    params: [
        {
            "data": ''
        }
    ]
})

const save = () => {
    ElMessage.success("保存成功")
    scenarioDialog.value  = false
}

const cancel = () => {
    ElMessage.warning("已取消！")
    scenarioDialog.value = false
}

const addParam = () => {
    scenarioForm.params.push({
        "data": ''
    })
}

const delParam = (index: number) => {
    scenarioForm.params.splice(index, 1)
}
</script>
<style lang="less" scoped>
.el-col {
    margin-top: 5px;
    margin-right: 3px;
}
</style>