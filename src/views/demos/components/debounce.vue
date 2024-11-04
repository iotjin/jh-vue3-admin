<template>
  <div class="bs-page-body">
    <h1 style="margin: 10px 0px 30px">防抖/节流指令</h1>

    <div>未处理前</div>
    <el-form :inline="true" :model="queryParams" class="bs-form-search">
      <el-form-item>
        <span class="bs-form-label" style="width: 80px"> <i class="icon" /><i class="label">名称:</i> </span>
        <el-input v-model="queryParams.name" maxlength="20" placeholder="请输入" clearable @input="onChange" @keyup.enter.native="onSearch" />
      </el-form-item>
      <el-form-item>
        <el-button class="bs-form-btn" type="primary" @click="onSearch()">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="m15">指令实现 - 搜索框防抖（0.5秒） / 点击按钮节流（3秒内）</div>
    <el-form :inline="true" :model="queryParams2" class="bs-form-search">
      <el-form-item>
        <span class="bs-form-label" style="width: 80px"> <i class="icon" /><i class="label">名称:</i> </span>
        <el-input v-model="queryParams2.name" v-debounce:500="onChange2" maxlength="20" placeholder="请输入" clearable @keyup.enter.native="onSearch2" />
      </el-form-item>
      <el-form-item>
        <el-button v-debounce:300.click="onSearch2" class="bs-form-btn" type="primary" style="width: 150px">查询（按钮防抖）</el-button>
      </el-form-item>
      <el-form-item>
        <el-button v-throttle:3000="onSearch3" class="bs-form-btn" type="primary" style="width: 150px">查询（按钮节流）</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  tableHeight: 170,
  tableLoading: false,
  tableData: [],
  queryParams: {
    name: '',
    page: 1,
    limit: 10
  },
  queryParams2: {
    name: '',
    page: 1,
    limit: 10
  }
})

const { tableHeight, tableLoading, tableData, queryParams, queryParams2 } = toRefs(state)

const onChange = (val: string) => {
  console.log(val)
}
const onSearch = () => {
  console.log('点击搜索按钮 请求...')
  console.log(JSON.stringify(state.queryParams))
}
// 搜索框防抖 - 指令实现
const onChange2 = () => {
  console.log('录入的文字', state.queryParams2.name)
  // Do some things
  getListByKeyword()
}
const getListByKeyword = () => {
  // 请求...
  console.log('根据关键字 请求...')
  console.log(state.queryParams2.name)
  console.log(JSON.stringify(state.queryParams2))
}
// 按钮防抖 - 指令实现
const onSearch2 = () => {
  // Do some things
  requestList()
}
// 按钮节流 - 指令实现
const onSearch3 = () => {
  // Do some things
  requestList()
}
const requestList = () => {
  // 请求...
  console.log('点击搜索按钮 请求...')
  console.log(JSON.stringify(state.queryParams2))
}
</script>

<style lang="scss" scoped></style>
