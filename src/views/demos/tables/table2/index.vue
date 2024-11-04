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
          <span class="bs-form-label" style="width: 80px"> <span class="icon">部门:</span> </span>
          <el-select v-model="queryParams.dept" placeholder="请选择" filterable clearable>
            <el-option v-for="item in deptOptions" :key="item.value" :label="item.label" :value="item.value" />
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

      <!-- Table Form start -->
      <div class="bs-page-table">
        <div class="bs-table-btns">
          <el-button type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
          <el-button type="danger" icon="i-ep-delete" :disabled="selectedRows.length == 0" @click="onClickDelete"> 删除 </el-button>
          <el-button type="primary" icon="i-ep-edit" @click="onClickBtn"> 弹框添加 </el-button>
        </div>

        <el-form ref="formRef" :model="tableForm" label-width="120px" :inline="true" :rules="formRules" size="default" label-position="left">
          <el-table
            ref="tableRef"
            v-loading="tableLoading"
            class="my-table"
            :data="tableForm.tableData"
            :stripe="true"
            :header-cell-style="headerCellStyle"
            :cell-style="cellStyle"
            :row-class-name="rowClassName"
            border
            @selection-change="onSelectionChange"
          >
            <el-table-column label="">
              <el-table-column type="index" label="序号" prop="xh" width="80px" />
              <el-table-column type="selection" width="55px" label="" />
              <!-- <el-table-column prop="createDate">
                <template #header> <span style="color: red; padding-right: 3px">*</span><span>测试header红星</span> </template>
              </el-table-column> -->
              <el-table-column label="名称" :render-header="addRedStar" min-width="260">
                <template #default="scope">
                  <el-form-item :prop="`tableData.${scope.$index}.name`" :rules="formRules.name" style="width: 200px">
                    <el-input v-model="scope.row.name" maxlength="20" placeholder="请输入" clearable />
                  </el-form-item>
                </template>
              </el-table-column>
              <el-table-column label="部门" :render-header="addRedStar" min-width="260">
                <template #default="scope">
                  <el-form-item :prop="`tableData.${scope.$index}.dept`" :rules="formRules.dept">
                    <el-select v-model="scope.row.dept" placeholder="请选择" collapse-tags clearable style="width: 200px">
                      <el-option v-for="item in deptOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-form-item>
                </template>
              </el-table-column>
              <el-table-column label="操作人" :render-header="addRedStar" min-width="260">
                <template #default="scope">
                  <el-form-item :prop="`tableData.${scope.$index}.operator`" :rules="formRules.operator" style="width: 200px">
                    <el-input v-model="scope.row.operator" maxlength="10" placeholder="请输入" clearable />
                  </el-form-item>
                </template>
              </el-table-column>
              <el-table-column label="内容" :render-header="addRedStar" min-width="260">
                <template #default="scope">
                  <el-form-item :prop="`tableData.${scope.$index}.content`" :rules="formRules.content">
                    <el-input v-model="scope.row.content" maxlength="100" placeholder="请输入" type="textarea" :autosize="{ minRows: 2, maxRows: 2 }" clearable />
                  </el-form-item>
                </template>
              </el-table-column>
              <el-table-column label="创建时间" :render-header="addRedStar" width="260">
                <template #default="scope">
                  <el-form-item :prop="`tableData.${scope.$index}.createDate`" :rules="formRules.createDate">
                    <el-date-picker v-model="scope.row.createDate" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm" placeholder="选择日期" />
                  </el-form-item>
                </template>
              </el-table-column>
              <el-table-column label="操作时间" :render-header="addRedStar" width="260">
                <template #default="scope">
                  <el-form-item :prop="`tableData.${scope.$index}.updateDate`" :rules="formRules.updateDate">
                    <el-date-picker v-model="scope.row.updateDate" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm" placeholder="选择日期" />
                  </el-form-item>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="120px">
                <template #default="scope">
                  <el-button size="small" icon="i-ep-edit" @click="rowEdit(scope.row)" />
                  <el-button size="small" icon="i-ep-delete" type="danger" @click="rowDelete(scope.row)" />
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-form>
        <div class="bs-dialog-footer" align="center" style="padding: 20px">
          <el-button :loading="submitBtnLoading" type="primary" @click="onClickSave()">保存</el-button>
          <el-button type="primary" @click="onClickReset()">重置</el-button>
        </div>
      </div>
      <!-- Table Form end -->

      <!-- add/edit dialog -->
      <AddDialog v-model:is-show="isShowDialog" :dialog-type="dialogType" :dialog-data="dialogFormData" jump-page="table2页面" @success="requestList" @closed="onClosedDialog" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDictDept } from '@/api/base/base'
import { getListData, deleteData } from '@/api/tables/tables'
import AddDialog from './addDialog.vue'
import TimeUtils from '@/utils/timeUtils'

interface TableType {
  xh: number | string
  id: string
  name: string
  dept: string
  operator: string
  content: string
  createDate: string
  updateDate: string
}

const formRef = ref()
const tableRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData0: [] as TableType[],
  queryParams: {
    page: 1,
    limit: 10,
    startDate: '',
    endDate: '',
    name: '',
    dept: ''
  },
  dateRange: [],
  selectedRows: [] as TableType[], // 勾选一行或多行数据
  submitBtnLoading: false,
  isShowDialog: false,
  dialogType: 'add',
  dialogFormData: {}
})
const { tableLoading, tableData0, queryParams, dateRange, selectedRows, submitBtnLoading, isShowDialog, dialogType, dialogFormData } = toRefs(state)

// const deptOptions = ref<SelectOptionType[]>([])
const optionState = reactive({
  deptOptions: [] as SelectOptionType[],
  levelOptions: [] as SelectOptionType[]
})
const { deptOptions, levelOptions } = toRefs(optionState)

const tableForm = reactive({
  tableData: [] as TableType[]
  // tableData: [{
  //   'name': '',
  //   'dept': '',
  //   'operator': '',
  //   'content': '',
  //   'createDate': '',
  //   'updateDate': ''
  // }]
})
// const { tableData } = toRefs(state)

const validate1 = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请选择创建时间'))
  } else {
    var index = rule.field.substr(10, 1) // tableData.0.createDate
    var updateDate = tableForm.tableData[index].updateDate
    var isBool = TimeUtils.Jh_compareTimes(value, updateDate)
    if (isBool) {
      callback(new Error('创建时间不能大于操作时间!'))
    }
    // var startTime = TimeUtils.Jh_timeStampToTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}:{s}') // 当前时间
    // var endTime = TimeUtils.Jh_timeStampToTime(new Date().getTime() + 1000 * 60 * 60 * 24 * 1, '{y}-{m}-{d} {h}:{i}:{s}') // 一天后
    // var isBool2 = TimeUtils.Jh_isBetweenTimes(value, startTime, endTime)
    // if (!isBool2) {
    //   callback(new Error('创建时间必须在开始时间和结束时间内!'))
    // }
    callback()
  }
}
const validate2 = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请选择操作时间'))
  } else {
    var index = rule.field.substr(10, 1)
    var isBool = TimeUtils.Jh_compareTimes(value, tableForm.tableData[index].createDate)
    if (!isBool) {
      callback(new Error('操作时间不能小于创建时间!'))
    }
    callback()
  }
}
const formRules = reactive({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  dept: [{ required: true, message: '请选择部门', trigger: 'change' }],
  operator: [{ required: true, message: '请输入操作人名称', trigger: 'blur' }],
  content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
  createDate: [{ validator: validate1, trigger: 'change' }],
  updateDate: [{ validator: validate2, trigger: 'change' }]
  // createDate: [{ required: true, message: '请选择创建时间', trigger: 'change' }],
  // updateDate: [{ required: true, message: '请选择操作时间', trigger: 'change' }]
})

onMounted(() => {
  requestDict()
  requestList()
})

const requestDict = () => {
  getDictDept().then((res) => {
    if (res.code === 20000) {
      optionState.deptOptions = res.data
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  params.startDate = state.dateRange ? TimeUtils.startOfDay(state.dateRange[0]) : ''
  params.endDate = state.dateRange ? TimeUtils.endOfDay(state.dateRange[1]) : ''
  console.log('参数：' + JSON.stringify(params))

  state.tableLoading = true
  getListData(params)
    .then((res) => {
      state.tableLoading = false
      if (res.code === 20000) {
        // tableForm.tableData = res.data
        // state.tableTotal = res.total
        // --- 使用假数据 ---
        var tempArr = [] as TableType[]
        for (let index = 0; index < 2; index++) {
          var id = index + 1
          tempArr.push({
            xh: index + 1,
            id: id.toString(),
            name: '名称' + id,
            dept: 'dept' + id,
            operator: '操作人' + id,
            content: '内容' + id,
            createDate: TimeUtils.Jh_timeStampToTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}:{s}'),
            updateDate: TimeUtils.Jh_timeStampToTime(new Date().getTime() + 1000 * 3600 * 24, '{y}-{m}-{d} {h}:{i}:{s}')
          })
        }
        tableForm.tableData = tempArr
        // --- 使用假数据 ---
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
const onSelectionChange = (rows: TableType[]) => {
  state.selectedRows = rows
}

// 设置表头样式
const headerCellStyle = ({ row, column, rowIndex, columnIndex }: any) => {
  // return { textAlign: 'center' }
  if (rowIndex === 0 && columnIndex === 0) {
    // 隐藏头部
    return { textAlign: 'center', background: '#eef1f6', display: 'none' }
  } else {
    return { textAlign: 'center', background: '#f5f5f5' }
  }
}
// 设置表内容样式
const cellStyle = ({ row, column, rowIndex, columnIndex }: any) => {
  return { textAlign: 'center' }
}
// 其中row是行对象，rowindex是行号，从0开始。所以这样就能实现了序号(xh属性)递增并且取值为行号加1。
const rowClassName = ({ row, rowIndex }: any) => {
  row.xh = rowIndex + 1
}
const addStar = (obj: any) => {
  // console.log(obj)
  // if (obj.columnIndex === 0 || obj.columnIndex === 1) {
  return 'star'
  // }
}
// const addRedStar = (h: any, { column, index }: any) => {
//  给表头加必选标识
const addRedStar = ({ column, $index }: any) => {
  // console.log('column', JSON.stringify(column))
  // console.log('index', JSON.stringify($index))
  return [h('span', { style: 'color: red' }, '*'), h('span', ' ' + column.label)]
}

// 操作按钮
const onClickAdd = () => {
  var item = {
    xh: 0,
    id: '',
    name: '',
    dept: '',
    operator: '',
    content: '',
    createDate: '',
    updateDate: ''
  }
  tableForm.tableData.push(item)
}
const onEdit = () => {
  if (state.selectedRows.length === 0) {
    ElMessage.warning('请选择记录')
    return
  } else if (state.selectedRows.length > 1) {
    ElMessage.warning('只能选择一条记录！')
    return
  } else {
    // isShowEditDialog = true;
  }
}
const onClickDelete = () => {
  if (state.selectedRows.length === 0) {
    ElMessage.warning('请选择记录')
    return
  }
  // console.log(JSON.stringify(state.selectedRows));
  ElMessageBox.confirm('此操作将永久删除, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      // 主要实现步骤，先把表格行数存到一个新数组
      var tempArr = [] as any
      for (let i = 0; i < state.selectedRows.length; i++) {
        tempArr.push(state.selectedRows[i].xh)
      }
      // 数字数组排序，因为选择框是根据先选择的顺序存到checkedDetail里面，所以需要排序
      tempArr.sort(function (a: any, b: any) {
        return a - b
      })
      console.log('新数组排序后：' + tempArr)
      // 逐个根据下标删除
      for (let i = 0; i < tempArr.length; i++) {
        tableForm.tableData.splice(tempArr[i] - i - 1, 1)
      }
      ElMessage.success('删除成功!')
    })
    .catch(() => {})
}

const rowEdit = (row: TableType) => {
  console.log(JSON.stringify(row))
}
const rowDelete = (row: TableType) => {
  console.log(JSON.stringify(row))
  ElMessageBox.confirm(`确定要删除用户 ${row.name} ，此操作将永久删除, 是否继续?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      tableForm.tableData.splice(Number(row.xh) - 1, 1)
      ElMessage.success('删除成功!')
    })
    .catch(() => {})
}

const onClickReset = () => {
  formRef.value.resetFields()
}
const onClickSave = () => {
  formRef.value.validate((valid: any, fields: any) => {
    if (!valid) {
      console.log('error submit!', fields)
      ElMessage.warning('有未输入项!')
    } else {
      console.log('submit!')
      submitRequest()
    }
  })
}
const submitRequest = () => {
  console.log('验证通过 开始提交数据 。。。submitRequest')
  console.log('tableform', JSON.stringify(tableForm))
  state.submitBtnLoading = true
  setTimeout(() => {
    state.submitBtnLoading = false
  }, 2000)
}

// 操作按钮 - 弹框添加

const onClickBtn = () => {
  state.dialogFormData = JSON.parse(JSON.stringify(tableForm))
  state.dialogType = 'edit'
  state.isShowDialog = true
  // if (state.selectedRows.length === 0) {
  //   ElMessage.warning('请选择记录')
  //   return
  // } else if (state.selectedRows.length > 1) {
  //   ElMessage.warning('只能选择一条记录！')
  //   return
  // } else {
  //   state.dialogFormData = JSON.parse(JSON.stringify(tableForm))
  //   state.isShowDialog = true
  // }
}

const onClosedDialog = () => {
  tableRef.value.clearSelection()
}
</script>

<style lang="scss" scoped>
.my-table {
  margin-top: 10px;
}

.el-form-item {
  padding: 10px;
  margin-bottom: 0px;
}

.el-form-item.is-error {
  padding: 10px;
  margin-bottom: 20px;
}
</style>
