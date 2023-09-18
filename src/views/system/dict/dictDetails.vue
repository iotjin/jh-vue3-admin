<template>
  <div>
    <div v-if="!tableData.length">
      <div class="vertical-line">点击字典查看详情</div>
    </div>

    <div v-else>
      <!-- Search start -->
      <el-form :inline="true" :model="queryParams" class="bs-form-search">
        <el-form-item style="margin-right: 25px" class="search-input">
          <el-input v-model="queryParams.keyword" maxlength="20" placeholder="字典标签 / 字典值" clearable @keyup.enter.native="onSearch" />
        </el-form-item>
        <el-form-item>
          <el-button class="bs-form-btn" style="margin-left: 0px" type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- Search end -->
      <!-- Table start -->
      <div class="bs-page-table" style="padding: 0px">
        <div class="bs-table-btns">
          <el-button v-hasPerm="['dict-item-add']" type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
          <el-button v-hasPerm="['dict-item-edit']" type="primary" icon="i-ep-edit" :disabled="selectedRows.length !== 1" @click="onClickEdit"> 编辑 </el-button>
          <el-button v-hasPerm="['dict-item-delete']" type="danger" icon="i-ep-delete" :disabled="selectedRows.length == 0" @click="onClickDelete"> 删除 </el-button>
        </div>
        <el-table
          ref="tableRef"
          v-loading="tableLoading"
          class="bs-table"
          :data="tableData"
          :stripe="true"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{ textAlign: 'center' }"
          @selection-change="onSelectionChange"
        >
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column label="字典标签" width>
            <template #default="scope">
              <span @click="onClickRow(scope.row)">
                <a style="color: #00a0e9; text-decoration: underline">{{ scope.row.label }}</a>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="字典值" width />
          <el-table-column prop="type" label="所属字典" width />
          <el-table-column prop="sort" label="排序" />
          <el-table-column label="备注" min-width="100">
            <template #default="scope">
              <el-tooltip :visible-arrow="false" effect="light" :content="scope.row.notes" placement="bottom">
                <span class="bs-tooltip-text"> {{ scope.row.notes }} </span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
              <el-button v-hasPerm="['dict-item-edit']" size="small" icon="i-ep-edit" :disabled="!isEditable(scope.row)" @click="onClickEdit(scope.row)" />
              <el-button v-hasPerm="['dict-item-delete']" size="small" icon="i-ep-delete" type="danger" :disabled="!isEditable(scope.row)" @click="onClickDelete(scope.row)" />
            </template>
          </el-table-column>
        </el-table>
        <Pagination v-show="tableTotal > 0" :total="tableTotal" v-model:page="queryParams.page" v-model:limit="queryParams.limit" @pagination="requestList" />
      </div>
      <!-- Table end -->
    </div>

    <!-- add/edit dict item dialog -->
    <AddItemDialog :dialog-type="dialogType" v-model:is-show="isShowDialog" :dialog-data="dialogFormData" @success="requestList" />
  </div>
</template>

<script setup lang="ts">
import { getDictItemList, deleteDictItem, DictTypeType, DictItemType } from '@/api/system/dict'
import AddItemDialog from './addItemDialog.vue'

const props = defineProps({
  // 传参, 选中的字典
  data: { type: Object, default: () => ({}) }
})

const tableRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as DictItemType[],
  queryParams: {
    page: 1,
    limit: 10,
    keyword: ''
  },
  selectedRows: [] as DictItemType[], // 勾选一行或多行数据,
  dictTypeData: {} as DictTypeType
})
const { tableTotal, tableLoading, tableData, queryParams, selectedRows } = toRefs(state)

// 弹框相关
const dialogState = reactive({
  isShowDialog: false,
  dialogType: '',
  dialogFormData: {}
})
const { isShowDialog, dialogType, dialogFormData } = toRefs(dialogState)

watch(
  () => props.data,
  (val) => {
    if (val) {
      state.dictTypeData = JSON.parse(JSON.stringify(val))
      requestList()
    } else {
      state.tableData = []
      state.tableTotal = 0
    }
  }
)

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  params.type = state.dictTypeData.type
  console.log(JSON.stringify(params))

  state.tableLoading = true
  getDictItemList(params)
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

const isEditable = (row: DictItemType) => {
  return row.builtin === '0'
}

const onSelectionChange = (rows: DictItemType[]) => {
  state.selectedRows = rows
}

// 操作按钮
const onClickAdd = () => {
  dialogState.dialogType = 'add'
  dialogState.dialogFormData = {
    id: '',
    label: '',
    value: '',
    sort: '',
    type: state.dictTypeData.type,
    builtin: '0',
    notes: ''
  }
  dialogState.isShowDialog = true
}
const onClickEdit = (row: DictItemType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'edit'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickLook = (row: DictItemType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickDelete = (row: DictItemType) => {
  var name = ''
  if (row && row.id) {
    name = row.label
  } else {
    name = state.selectedRows.map((item) => item.label).join(',')
  }

  ElMessageBox.confirm(`确定要删除字典项 ${name} ，此操作将永久删除, 是否继续?`, '提示', {
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
  deleteDictItem(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('删除成功!')
      requestList()
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

// 通过下划线点击row
const onClickRow = (row: DictItemType) => {
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = JSON.parse(JSON.stringify(row))
  dialogState.isShowDialog = true
}
// 弹框相关
const onClosedDialog = () => {
  tableRef.value.clearSelection()
}
</script>

<style lang="scss" scoped>
// .search-input ::v-deep .el-form-item__content .el-input {
//   width: 260px;
// }

.search-input :deep(.el-form-item__content .el-input) {
  width: 260px;
}

.vertical-line {
  position: relative;
  padding: 15px;
  line-height: 20px;
  border-left: 5px solid #ddd;
  color: #333;
  font-family: Courier New, serif;
  font-size: 12px;
}
</style>
