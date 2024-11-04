<template>
  <div>
    <div class="bs-page-body">
      <!-- Search start -->
      <el-form :inline="true" :model="queryParams" class="bs-form-search mt10">
        <el-form-item>
          <span class="bs-form-label" style="width: 80px"> <span class="icon">姓名:</span> </span>
          <el-input v-model="queryParams.name" maxlength="20" placeholder="请输入" clearable @keyup.enter.native="onSearch" />
        </el-form-item>
        <el-form-item>
          <span class="bs-form-label" style="width: 80px"> <span class="icon">级别:</span> </span>
          <el-select v-model="queryParams.level" placeholder="请选择" filterable clearable>
            <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <span class="bs-form-label" style="width: 100px"> <span class="icon">创建时间:</span> </span>
          <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD" format="YYYY年MM月DD日" />
        </el-form-item>
        <el-form-item>
          <el-button class="bs-form-btn" type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- Search end -->

      <!-- Table start -->
      <div class="bs-page-table">
        <div class="bs-table-btns">
          <el-button type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
          <el-button type="primary" icon="i-ep-edit" :disabled="selectedRows.length !== 1" @click="onClickEdit"> 编辑 </el-button>
          <el-button type="primary" icon="i-ep-search" :disabled="selectedRows.length !== 1" @click="onClickLook"> 查看 </el-button>
          <el-button type="warning" icon="i-ep-download" @click="onClickExport"> 导出 </el-button>
          <el-button type="danger" icon="i-ep-delete" :disabled="selectedRows.length == 0" @click="onClickDelete"> 删除 </el-button>
          <el-button type="primary" icon="i-ep-plus" @click="onSelect"> 选择 </el-button>
          <el-button type="primary" icon="i-ep-plus" @click="onAddProduct"> 添加产品 </el-button>
          <el-button type="primary" icon="i-ep-plus" @click="onClickDrag()"> 拖拽排序 </el-button>

          <el-button class="datePicker-btn" type="primary" @click="onClickShowDatePicker">
            弹出日期选择器
            <div class="date-picker-bg">
              <el-date-picker ref="datePickerRef" v-model="date" :picker-options="pickerOptions" :editable="false" value-format="YYYY-MM-DD" format="YYYY年MM月DD日" />
            </div>
          </el-button>
          <span style="margin-left: 15px">{{ date }}</span>

          <!-- <el-button v-hasPerm="['user-add']" type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
          <el-button v-hasPerm="['user-edit']" type="primary" icon="i-ep-edit" :disabled="selectedRows.length !== 1" @click="onClickEdit"> 编辑 </el-button>
          <el-button v-hasPerm="['user-look']" type="primary" icon="i-ep-search" :disabled="selectedRows.length !== 1" @click="onClickLook"> 查看 </el-button>
          <el-button v-hasPerm="['user-export']" type="warning" icon="i-ep-download" @click="onClickExport"> 导出 </el-button>
          <el-button v-hasPerm="['user-delete']" type="danger" icon="i-ep-delete" :disabled="selectedRows.length == 0" @click="onClickDelete"> 删除 </el-button> -->
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
          <el-table-column prop="number" type="index" label="序号" min-width="60" />
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column label="操作人" min-width="100">
            <template #default="scope">
              <span @click="onClickRow(scope.row)">
                <a style="color: #00a0e9; text-decoration: underline">{{ scope.row.name }}</a>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="状态">
            <template #default="scope">
              <!-- {{ scope.row.status === '0' ? '停用' : '启用' }} -->
              <div :style="{ background: getBgColor(scope.row) }" class="tagClass">{{ scope.row.status === '0' ? '停用' : '启用' }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="isUse" label="启用状态">
            <template #header>
              <div>启用</div>
              <div>状态</div>
            </template>
            <template #default="scope"> {{ scope.row.isUse == 0 ? '停用' : '启用' }} </template>
          </el-table-column>
          <el-table-column label="级别" min-width="100">
            <template #default="scope">
              <!-- <div class="b-tag-success">{{ getDictLabel(scope.row.level, levelOptions) }}</div> -->
              <div :class="scope.row.level == '1' ? 'b-tag-success' : scope.row.level == '2' ? 'b-tag-warning' : 'b-tag-error'">{{ getDictLabel(scope.row.level, levelOptions) }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="isUse" label="启用">
            <template #default="scope"> {{ scope.row.isUse == 0 ? '停用' : '启用' }} </template>
          </el-table-column>
          <el-table-column prop="phone" label="手机号" min-width="200" />
          <el-table-column prop="money" label="金额" sortable />
          <el-table-column prop="age" label="年龄" sortable />
          <el-table-column prop="createDate" label="创建时间" min-width="180" />
          <el-table-column prop="updateDate" label="更新时间" min-width="180" />
          <!-- <el-table-column prop="content" label="备注" min-width="100" show-overflow-tooltip /> -->
          <el-table-column label="备注" min-width="200">
            <template #default="scope">
              <el-tooltip :visible-arrow="false" effect="light" :content="scope.row.content" placement="bottom">
                <span class="bs-tooltip-text">{{ scope.row.content }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button size="small" icon="i-ep-edit" :disabled="!isEditable(scope.row)" @click="onClickEdit(scope.row)" />
              <el-button size="small" icon="i-ep-delete" type="danger" :disabled="!isEditable(scope.row)" @click="onClickDelete(scope.row)" />
              <!-- <el-button v-hasPerm="['user-edit']" size="small" icon="i-ep-edit" :disabled="!isEditable(scope.row)" @click="onClickEdit(scope.row)" />
              <el-button v-hasPerm="['user-delete']" size="small" icon="i-ep-delete" type="danger" :disabled="!isEditable(scope.row)" @click="onClickDelete(scope.row)" /> -->

              <el-button size="small" icon="i-ep-rank" @click="onClickDrag(scope.row)" />
              <el-button :loading="cellBtnLoading === scope.row.id" style="margin: 6px 0px 0px" size="small" type="success" @click="onClickRowPrint(scope.row)">Print</el-button>
            </template>
          </el-table-column>
        </el-table>
        <Pagination v-show="tableTotal > 0" :total="tableTotal" v-model:page="queryParams.page" v-model:limit="queryParams.limit" @pagination="requestList" />
      </div>
      <!-- Table end -->

      <!-- add/edit dialog -->
      <AddDialog v-model:is-show="isShowDialog" :dialog-type="dialogType" :dialog-data="dialogFormData" @success="requestList" @closed="onClosedDialog" />

      <!-- select dialog -->
      <SelectDialog v-model:is-show="isShowSelectDialog" :dialog-data="dialogData2" @select="onSelectfinish" @closed="onClosedDialog" />

      <!-- add product dialog -->
      <AddProductDialog v-model:is-show="isShowAddProductDialog" :is-refresh="isRefreshDialog" @success="onSelectfinish" @closed="onClosedDialog" />

      <!-- drag sort dialog -->
      <DragSortDialog v-model:is-show="isShowDragDialog" :dialog-data="dialogFormData" @success="requestList" @closed="onClosedDialog" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { getDictDept, getDictLevel } from '@/api/base/base'
import { getDictLevel, getListData, deleteData, TableType } from '@/api/tables/tables'
import AddDialog from './addDialog.vue'
import SelectDialog from './selectDialog.vue'
import AddProductDialog from './addProductDialog.vue'
import DragSortDialog from './dragSortDialog.vue'
import TimeUtils from '@/utils/timeUtils'
import { exportExcel } from '@/utils/exportExcel'

const tableRef = ref()
const datePickerRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as TableType[],
  queryParams: {
    page: 1,
    limit: 10,
    startDate: '',
    endDate: '',
    name: '',
    level: ''
  },
  dateRange: [],
  selectedRows: [] as TableType[], // 勾选一行或多行数据
  cellBtnLoading: ''
})
const { tableTotal, tableLoading, tableData, queryParams, dateRange, selectedRows, cellBtnLoading } = toRefs(state)

// const deptOptions = ref<SelectOptionType[]>([])
const optionState = reactive({
  deptOptions: [] as SelectOptionType[],
  levelOptions: [] as SelectOptionType[]
})
const { deptOptions, levelOptions } = toRefs(optionState)

const dialogState = reactive({
  isShowDialog: false,
  dialogType: 'add',
  dialogFormData: {},
  //select dialog
  isShowSelectDialog: false,
  dialogData2: {},
  isShowAddProductDialog: false,
  isRefreshDialog: false,
  isShowDragDialog: false
})
const { isShowDialog, dialogType, dialogFormData, isShowSelectDialog, dialogData2, isShowAddProductDialog, isRefreshDialog, isShowDragDialog } = toRefs(dialogState)

const datePickerState = reactive({
  // 弹出日期选择器相关
  pickerOptions: {
    disabledDate(time: Date) {
      return time.getTime() < Date.now()
    }
  },
  date: ''
})
const { pickerOptions, date } = toRefs(datePickerState)

onMounted(() => {
  requestDict()
  requestList()
})

const requestDict = () => {
  getDictLevel().then((res) => {
    if (res.code === 20000) {
      optionState.levelOptions = res.data
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  params.startDate = state.dateRange ? TimeUtils.startOfDay(state.dateRange[0]) : ''
  params.endDate = state.dateRange ? TimeUtils.endOfDay(state.dateRange[1]) : ''
  console.log(JSON.stringify(params))

  state.tableLoading = true
  getListData(params)
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
const isEditable = (row: TableType) => {
  return true
  // return !row.loginName.toLowerCase().includes('admin')
}
const onSelectionChange = (rows: TableType[]) => {
  state.selectedRows = rows
}
const getDictLabel = (value: string, dictList: SelectOptionType[]) => {
  const foundIndex = dictList.findIndex((item) => item.value === value)
  if (foundIndex !== -1) {
    return dictList[foundIndex].label
  }
  // const option = dictList.find((item) => item.value === value)
  // return option ? option.label : ''
}
const getBgColor = (row: TableType) => {
  return row.status === '0' ? '#E6A23C' : '#67C23A'
}
// 操作按钮
const onClickAdd = () => {
  dialogState.dialogType = 'add'
  dialogState.dialogFormData = {} // 新增使用的内部初始值
  dialogState.isShowDialog = true
}
const onClickEdit = (row: TableType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'edit'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickLook = (row: TableType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickDelete = (row: TableType) => {
  var name = ''
  if (row && row.id) {
    name = row.name
  } else {
    name = state.selectedRows.map((item) => item.name).join(',')
  }

  ElMessageBox.confirm(`确定要删除用户 ${name} ，此操作将永久删除, 是否继续?`, '提示', {
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
  deleteData(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('删除成功!')
      requestList()
    } else {
      ElMessage.warning(res.msg)
    }
  })
}
const onClickExport = () => {
  if (state.selectedRows.length === 0) {
    var params = JSON.parse(JSON.stringify(state.queryParams))
    params.startDate = state.dateRange ? TimeUtils.startOfDay(state.dateRange[0]) : ''
    params.endDate = state.dateRange ? TimeUtils.endOfDay(state.dateRange[1]) : ''
    params.page = 0
    params.limit = 1000
    console.log(JSON.stringify(params))
    getListData(params).then((res) => {
      const { data } = res
      handelExcel(data)
    })
  } else {
    handelExcel(state.selectedRows)
  }
}
const handelExcel = (tableData: any) => {
  var newTableDate = tableData
  newTableDate.forEach((item: any) => {
    item.deptName = getDictLabel(item.deptId, optionState.deptOptions)
    item.statusText = item.status === '0' ? '停用' : '启用'
    item.levelName = getDictLabel(item.level, optionState.levelOptions)
  })
  const fields = ['name', 'levelName', 'phone', 'money', 'age', 'createDate', 'updateDate', 'statusText']
  const headers = ['操作人', '级别', '手机号', '金额', '年龄', '创建时间', '更新时间', '状态']
  exportExcel(newTableDate, fields, headers, '用户数据.xlsx')
}

// 通过下划线点击row
const onClickRow = (row: TableType) => {
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = JSON.parse(JSON.stringify(row))
  dialogState.isShowDialog = true
}
// 行操作
const onClickRowPrint = (row: TableType) => {
  state.cellBtnLoading = row.id
  setTimeout(() => {
    state.cellBtnLoading = ''
  }, 1500)
}

// 弹框相关
const onClosedDialog = () => {
  tableRef.value.clearSelection()
}

// 选择弹框相关
const onSelect = () => {
  dialogState.isShowSelectDialog = true
}
const onSelectfinish = (value: any) => {
  console.log('onSelectfinish', JSON.stringify(value))
}

const onAddProduct = () => {
  dialogState.isRefreshDialog = false
  nextTick(() => {
    dialogState.isRefreshDialog = true
  })
  dialogState.isShowAddProductDialog = true
}
const onClickDrag = (row?: TableType) => {
  if (row) {
    dialogState.dialogFormData = JSON.parse(JSON.stringify(row))
    dialogState.dialogType = 'edit'
    dialogState.isShowDragDialog = true
  } else {
    dialogState.dialogFormData = {
      name: '',
      content: '',
      level: '',
      createDate: '',
      updateDate: '',
      isUse: '',
      status: '',
      phone: '',
      money: '',
      age: ''
    }
    dialogState.dialogType = 'add'
    dialogState.isShowDragDialog = true
  }
}
// 弹出日期选择器
const onClickShowDatePicker = () => {
  datePickerRef.value.handleOpen()
  // datePickerRef.value.focus()
  // datePickerRef.value.handleClose()
}
</script>

<style lang="scss" scoped>
.tagClass {
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  word-break: break-word;
}

.b-tag-warning {
  display: inline-block;
  margin: 0.2rem;
  padding: 5px 10px;
  font-size: 12px;
  color: #ffba00;
  background: #fff8e6;
  border: 1px solid #fff1cc;
  border-radius: 4px;
}

.b-tag-error {
  display: inline-block;
  margin: 0.2rem;
  padding: 5px 10px;
  font-size: 12px;
  color: #ff4949;
  background: #ffeded;
  border: 1px solid #ffdbdb;
  border-radius: 4px;
}

.b-tag-success {
  display: inline-block;
  margin: 0.2rem;
  padding: 5px 10px;
  font-size: 12px;
  color: #13ce66;
  background: #e7faf0;
  border: 1px solid #d0f5e0;
  border-radius: 4px;
}

.datePicker-btn {
  position: relative !important;
}

.date-picker-bg {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
}
</style>
