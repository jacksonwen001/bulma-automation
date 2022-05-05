<template>
    <div class="main-container">
        <router-view />
    </div>
</template>
<script setup lang="ts">
     
</script>
<style scoped>
.main-container {
        background-color: #fff;
        height: 100vh;
        min-height: calc(100vh - 0.9rem);
        overflow: auto;
     }
</style>