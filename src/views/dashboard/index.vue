<template>
    <div>
        我是首页 !!!!!
        <button @click="testClick">点我测</button>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter(); 
const testClick = function(){
    console.log('跳转')
    router.push({
        name: 'system'
    })
}
    
</script>