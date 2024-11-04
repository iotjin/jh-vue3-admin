<template>
  <div>
    <!-- add/edit dialog -->
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="80%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
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
              <el-button type="primary" @click="onSelectAll"> 全选 </el-button>
              <el-button type="danger" :disabled="selectedRows.length == 0" @click="onDeleteAll"> 清空 </el-button>
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
              <el-table-column type="selection" width="55" />
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
              <el-table-column label="级别" min-width="100">
                <template #default="scope">
                  <!-- <div class="b-tag-success">{{ getDictLabel(scope.row.level, levelOptions) }}</div> -->
                  <div :class="scope.row.level == '1' ? 'b-tag-success' : scope.row.level == '2' ? 'b-tag-warning' : 'b-tag-error'">{{ getDictLabel(scope.row.level, levelOptions) }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="isUse" label="启用">
                <template #default="scope"> {{ scope.row.isUse == 0 ? '停用' : '启用' }} </template>
              </el-table-column>
              <el-table-column prop="phone" label="手机号" min-width="120" />
              <el-table-column prop="money" label="金额" sortable />
              <el-table-column prop="age" label="年龄" sortable />
              <el-table-column prop="createDate" label="创建时间" min-width="180" />
              <el-table-column prop="updateDate" label="更新时间" min-width="180" />
              <!-- <el-table-column prop="content" label="备注" min-width="100" show-overflow-tooltip /> -->
              <el-table-column label="备注" min-width="100">
                <template #default="scope">
                  <el-tooltip :visible-arrow="false" effect="light" :content="scope.row.content" placement="bottom">
                    <span class="bs-tooltip-text">{{ scope.row.content }}</span>
                  </el-tooltip>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="180">
                <template #default="scope">
                  <el-button size="small" type="primary" @click="rowSelect(scope.row)">选择 </el-button>
                </template>
              </el-table-column>
            </el-table>
            <Pagination v-show="tableTotal > 0" :total="tableTotal" v-model:page="queryParams.page" v-model:limit="queryParams.limit" @pagination="requestList" />
          </div>
          <!-- Table end -->
        </div>
        <div class="bs-dialog-footer" style="text-align: center; margin-top: 10px">
          <el-button @click="isShowDialog = false"> 取消 </el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()"> 选择 </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { getDictLevel, getListData, TableType } from '@/api/tables/tables'
import TimeUtils from '@/utils/timeUtils'

const emit = defineEmits(['update:isShow', 'closed', 'select'])

const props = defineProps({
  // 是否显示
  isShow: { type: Boolean, default: false },
  // 标题
  title: { type: String, default: '' },
  // 传参1 - 对象
  dialogData: { type: Object, default: () => ({}) },
  // 传参2 - 数组
  dialogListData: { type: Array, default: () => [] }
})

const tableRef = ref()
const state = reactive({
  // 弹框相关
  dialogTitle: '选择',
  isShowDialog: false,
  dialogSubmitBtnLoading: false,
  // 列表相关
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as TableType[],
  queryParams: {
    page: 1,
    limit: 10,
    name: '',
    level: '',
    startDate: '',
    endDate: ''
  },
  dateRange: [],
  selectedRows: [] as TableType[] // 勾选一行或多行数据
})
const { dialogTitle, isShowDialog, dialogSubmitBtnLoading, tableTotal, tableLoading, tableData, queryParams, dateRange, selectedRows } = toRefs(state)

const optionState = reactive({
  levelOptions: [] as SelectOptionType[]
})
const { levelOptions } = toRefs(optionState)

watch(
  () => props.isShow,
  (val) => {
    state.isShowDialog = val // isShow改变是同步子组件isShowDialog的值
  }
)
watch(
  () => state.isShowDialog,
  (val) => {
    emit('update:isShow', val) // isShowDialog改变时同步父组件isShow的值
  }
)
watch(
  () => props.title,
  (val) => {
    state.dialogTitle = val.length ? val : state.dialogTitle
  }
)

onMounted(() => {})

// 弹框相关
const onOpenedDialog = () => {
  if (!optionState.levelOptions.length) {
    requestDictLevel()
  }
  requestList()
}
const onClosedDialog = () => {
  emit('closed', {})
}

// 字典
const requestDictLevel = () => {
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

// 通过下划线点击row
const onClickRow = (row: TableType) => {
  console.log(JSON.stringify(row))
  ElMessage.warning(row.name)
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

const onSelectAll = () => {
  tableRef.value.toggleAllSelection()
}
const onDeleteAll = () => {
  tableRef.value.clearSelection()
}
const onSelectionChange = (val: TableType[]) => {
  state.selectedRows = val
}
const rowSelect = (row: TableType) => {
  state.selectedRows = [row]
  state.isShowDialog = false
  emit('select', state.selectedRows) // 传出选择数据
}

const onDialogSubmit = () => {
  submitRequest()
}

const submitRequest = () => {
  var params = [...state.selectedRows]
  state.isShowDialog = false
  emit('select', params) // 传出选择数据
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
</style>
