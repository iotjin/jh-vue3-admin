<template>
  <div>
    <!-- Table start -->
    <div class="bs-page-table">
      <el-table ref="tableRef" v-loading="tableLoading" class="bs-table" :data="newFoldList" :stripe="true" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" style="width: 90%">
        <el-table-column prop="number" type="index" label="序号" width="55" />
        <el-table-column prop="name" label="产品名称" width="100" />
        <el-table-column prop="isUse" label="状态" width="100">
          <template #default="scope"> {{ scope.row.isUse == 0 ? '下降' : '上架' }} </template>
        </el-table-column>
        <el-table-column prop="money" label="价格" width="100" />
        <el-table-column prop="content" label="介绍" min-width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="占位" width="200" />
        <el-table-column label="Actions" align="center" fixed="right" width="120">
          <template #default="scope">
            <el-button size="small" type="warning" @click="onClickRemove(scope.$index)">Remove</el-button>
            <!-- <el-button size="small" type="warning" @click="newFoldList.splice(scope.$index, 1)">Remove</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Table end -->
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['change'])

const props = defineProps({
  foldList: { type: Array, default: () => [] }
})

const state = reactive({
  tableLoading: false,
  newFoldList: []
})
const { tableLoading, newFoldList } = toRefs(state)

watch(
  () => props.foldList,
  (val) => {
    state.newFoldList = JSON.parse(JSON.stringify(val))
  },
  { immediate: true }
)

const onClickRemove = (index: number) => {
  state.newFoldList.splice(index, 1)
  emit('change', state.newFoldList)
}
</script>

<style lang="scss" scoped>
.el-button:hover {
  background-color: #409eff;
  border-color: #409eff;
}

// .el-table__expanded-cell .el-table td, .el-table th {
//   padding: 0px !important;
// }
</style>
