<template>
  <div>
    <h1 style="margin: 10px 0px 30px">复制指令</h1>

    <div style="width: 60%">
      <el-input v-model="inputValue" placeholder="请输入内容">
        <template #append>
          <el-button v-copy="inputValue"> 复制 </el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>
<script setup lang="ts">
const state = reactive({
  inputValue: '123456'
})

const { inputValue } = toRefs(state)
</script>

<style lang="scss" scoped></style>
