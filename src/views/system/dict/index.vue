<template>
  <div class="bs-page-body">
    <div class="mt10" />

    <!-- 字典列表 -->
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card>
          <!-- Search start -->
          <el-form :inline="true" :model="queryParams" class="bs-form-search">
            <el-form-item style="margin-right: 25px" class="search-input">
              <el-input v-model="queryParams.keyword" maxlength="20" placeholder="字典名称 / 类型" clearable @keyup.enter.native="onSearch" />
            </el-form-item>
            <el-form-item>
              <el-button class="bs-form-btn" style="margin-left: 0px" type="primary" @click="onSearch">查询</el-button>
            </el-form-item>
          </el-form>
          <!-- Search end -->
          <!-- Table start -->
          <div class="bs-page-table" style="padding: 0px">
            <div class="bs-table-btns">
              <el-button v-hasPerm="['dict-type-add']" type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
            </div>
            <el-table
              ref="tableRef"
              v-loading="tableLoading"
              class="bs-table table-class"
              highlight-current-row
              :data="tableData"
              :header-cell-style="{ textAlign: 'center' }"
              :cell-style="{ textAlign: 'center' }"
              @current-change="onCurrentChange"
            >
              <el-table-column label="字典名称" width>
                <template #default="scope">
                  <span @click="onClickLook(scope.row)">
                    <a style="color: #00a0e9; text-decoration: underline">{{ scope.row.name }}</a>
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="type" label="字典类型" width />
              <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                  <el-button v-hasPerm="['dict-type-edit']" size="small" icon="i-ep-edit" :disabled="!isEditable(scope.row)" @click="onClickEdit(scope.row)" />
                  <el-button v-hasPerm="['dict-type-delete']" size="small" icon="i-ep-delete" type="danger" :disabled="!isEditable(scope.row)" @click="onClickDelete(scope.row)" />
                </template>
              </el-table-column>
            </el-table>
            <Pagination v-show="tableTotal > 0" :layout="layout" :total="tableTotal" v-model:page="queryParams.page" v-model:limit="queryParams.limit" @pagination="requestList" />
          </div>
          <!-- Table end -->
        </el-card>
      </el-col>
      <!-- 字典详情列表 -->
      <el-col :span="16">
        <el-card>
          <div slot="header">
            <span style="font-size: 20px">字典详情</span>
          </div>
          <DictDetails :data="selectedData" />
        </el-card>
      </el-col>
    </el-row>

    <!-- add/edit dict type dialog -->
    <AddTypeDialog :dialog-type="dialogType" v-model:is-show="isShowDialog" :dialog-data="dialogFormData" @success="requestList" />
  </div>
</template>

<script setup lang="ts">
import { getDictTypeList, deleteDictType, DictTypeType } from '@/api/system/dict'
import DictDetails from './dictDetails.vue'
import AddTypeDialog from './addTypeDialog.vue'

const tableRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as DictTypeType[],
  queryParams: {
    page: 1,
    limit: 20,
    keyword: ''
  },
  selectedRows: [] as DictTypeType[], // 勾选一行或多行数据
  selectedData: {} // 选中的字典
})
const { tableTotal, tableLoading, tableData, queryParams, selectedRows, selectedData } = toRefs(state)
const layout = 'total, sizes, prev, pager, next'

const dialogState = reactive({
  isShowDialog: false,
  dialogType: '',
  dialogFormData: {}
})
const { isShowDialog, dialogType, dialogFormData } = toRefs(dialogState)

onMounted(() => {
  requestList()
})

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  console.log(JSON.stringify(params))

  state.tableLoading = true
  getDictTypeList(params)
    .then((res) => {
      state.tableLoading = false
      if (res.code === 20000) {
        state.tableData = res.data
        state.tableTotal = res.total
      } else {
        ElMessage.warning(res.msg)
      }
    })
    .catch((err) => {
      state.tableLoading = false
      console.log(JSON.stringify(err))
    })
}

const onSearch = () => {
  state.queryParams.page = 1
  requestList()
}

const isEditable = (row: DictTypeType) => {
  return row.builtin === '0'
}
const onCurrentChange = (currentRow: DictTypeType, oldCurrentRow: DictTypeType) => {
  state.selectedData = JSON.parse(JSON.stringify(currentRow))
}

// 操作按钮
const onClickAdd = () => {
  dialogState.dialogType = 'add'
  dialogState.dialogFormData = {} // 新增使用的内部初始值
  dialogState.isShowDialog = true
}
const onClickEdit = (row: DictTypeType) => {
  dialogState.dialogType = 'edit'
  dialogState.dialogFormData = JSON.parse(JSON.stringify(row))
  dialogState.isShowDialog = true
}

const onClickLook = (row: DictTypeType) => {
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = JSON.parse(JSON.stringify(row))
  dialogState.isShowDialog = true
}

const onClickDelete = (row: DictTypeType) => {
  var name = ''
  if (row && row.id) {
    name = row.name
  } else {
    name = state.selectedRows.map((item) => item.name).join(',')
  }

  ElMessageBox.confirm(`确定要删除字典类型 ${name} ，此操作将永久删除, 是否继续?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    var params = { ids: [] as string[] }
    if (row && row.id) {
      params.ids = [row.id]
    } else {
      const tempArr = state.selectedRows.map((item) => item.id)
      params.ids = tempArr
    }
    deleteRequest(params)
  })
}
const deleteRequest = (params: object) => {
  console.log(JSON.stringify(params))
  deleteDictType(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('删除成功!')
      requestList()
    } else {
      ElMessage.warning(res.msg)
    }
  })
}
</script>

<style lang="scss" scoped>
// .search-input ::v-deep .el-form-item__content .el-input {
//   width: 260px;
// }

// .table-class ::v-deep .el-table__body tr.current-row > td {
//   background-color: #e8f4ff !important;
// }

.search-input :deep(.el-form-item__content .el-input) {
  width: 260px;
}

.table-class :deep(.el-table__body tr.current-row > td) {
  background-color: #e8f4ff !important;
}
</style>
