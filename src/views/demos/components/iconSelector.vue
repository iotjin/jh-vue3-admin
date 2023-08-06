<!-- 图标选择器示例 -->
<template>
  <div class="app-container">
    <icon-select v-model="iconName" />
  </div>
</template>

<script setup lang="ts">
const iconName = ref('edit')
</script>
