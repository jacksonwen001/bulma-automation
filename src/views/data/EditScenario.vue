<template>
    <div>
        <el-container>
            <el-aside width="200px" height="100vh">
                <el-tree :allow-drop="allowDrop" :allow-drag="allowDrag" :data="data" draggable default-expand-all
                    node-key="id" @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter"
                    @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd"
                    @node-drop="handleDrop" />
            </el-aside>
                <el-divider direction="vertical" border-style="height:100vh; "/>
            <el-main>

            </el-main>
        </el-container>

    </div>
</template>
<script setup lang="ts">
import { getScenarios } from '@/api/Scenario';
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CreateScenario from './components/CreateScenario.vue';

const allowDrop = ref(true)
const allowDrag = ref(true)
const data = ref([])

const handleDragStart = () => {

}
const handleDragEnter = () => {
    
}

const handleDragLeave = () => {

}

const handleDragOver = () => {

}

const handleDragEnd = () => {

}

const handleDrop = () => {

}
const route = useRoute()
const router = useRouter()
const scenarioId = route.query.id;
if (!scenarioId) {
    ElMessage.error('Scenario didn\'t found ')
    router.push({
        name: 'data'
    })
}
console.log(route.query.id)
const fetchData = async () => {
    let res = await getScenarios({ id: scenarioId?.toString() })
    return res
}

onMounted(() => {
    fetchData().then(res => {
        console.log(res)
    })
})
</script>