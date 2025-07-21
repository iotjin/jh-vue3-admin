<!-- wangEditor富文本编辑器示例 -->

<template>
  <div class="app-container">
    <editor v-model="value" style="z-index: 99999; height: calc(100vh - 180px)" />

    <div style="margin-top: 20px">
      <textarea v-model="value" readonly style="width: 100%; height: 200px; outline: none" />
      <div v-html="value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Editor from '@/components/WangEditor/index.vue'
const value = ref('初始内容')
</script>
