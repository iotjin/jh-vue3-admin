<template>
  <div>
    <div>test1和test2使用同一页面</div>
    <div>{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const text = computed(() => route.name)
</script>

<style lang="scss" scoped></style>
