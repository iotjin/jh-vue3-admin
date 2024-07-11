<template>
  <div>
    <div>test1和test2使用同一页面</div>
    <div>{{ text }}</div>

    <el-divider />

    <div>test LocalStorage 本地存储</div>
    <div>
      <el-input v-model="state.input" style="width: 240px" placeholder="Please input" />
      <el-button type="primary" @click="setStorage2(state.input)">setStorage</el-button>
    </div>
    <div style="margin-top: 10px">
      <el-button type="primary" @click="getStorage2()">getStorage</el-button>
      <div>{{ state.localData }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const text = computed(() => route.name)

import { setStorage, getStorage } from '@/utils/storage'

const state = reactive({
  input: '',
  localData: ''
})

onMounted(() => {
  setStorage('testLocalStorage', { testKey: 1234 })
  const data = getStorage('testLocalStorage')
  console.log(data)
  state.localData = data
})

function setStorage2(value: string) {
  setStorage('testLocalStorage', value)
}

function getStorage2() {
  state.localData = getStorage('testLocalStorage')
}
</script>

<style lang="scss" scoped></style>
