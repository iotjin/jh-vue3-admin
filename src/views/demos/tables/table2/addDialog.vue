<template>
  <div>
    <!-- add/edit dialog -->
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="90%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div class="bs-dialog input-width">
        <!-- Table Form start -->
        <div class="bs-page-table">
          <div class="bs-table-btns">
            <el-button type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
            <el-button type="danger" icon="i-ep-delete" :disabled="selectedRows.length == 0" @click="onClickDelete"> 删除 </el-button>
          </div>

          <el-form ref="dialogFormRef" :model="tableForm" label-width="120px" :inline="true" :rules="formRules" size="small" label-position="left">
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
              style="width: 100%"
            >
              <el-table-column label="">
                <el-table-column type="index" label="序号" prop="xh" width="80px" />
                <el-table-column type="selection" width="55px" label="" />
                <!-- <el-table-column prop="createDate">
                <template #header> <span style="color: red; padding-right: 3px">*</span><span>测试header红星</span> </template>
              </el-table-column> -->
                <el-table-column label="名称" :render-header="addRedStar" :min-width="columnWidth">
                  <template #default="scope">
                    <el-form-item :prop="`tableData.${scope.$index}.name`" :rules="formRules.name" style="width: 200px">
                      <el-input v-model="scope.row.name" maxlength="20" placeholder="请输入" clearable />
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="部门" :render-header="addRedStar" :min-width="columnWidth">
                  <template #default="scope">
                    <el-form-item :prop="`tableData.${scope.$index}.dept`" :rules="formRules.dept">
                      <el-select v-model="scope.row.dept" placeholder="请选择" collapse-tags clearable style="width: 200px">
                        <el-option v-for="item in deptOptions" :key="item.value" :label="item.label" :value="item.value" />
                      </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="操作人" :render-header="addRedStar" :min-width="columnWidth">
                  <template #default="scope">
                    <el-form-item :prop="`tableData.${scope.$index}.operator`" :rules="formRules.operator" style="width: 200px">
                      <el-input v-model="scope.row.operator" maxlength="10" placeholder="请输入" clearable />
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="内容" :render-header="addRedStar" :min-width="columnWidth">
                  <template #default="scope">
                    <el-form-item :prop="`tableData.${scope.$index}.content`" :rules="formRules.content">
                      <el-input v-model="scope.row.content" maxlength="100" placeholder="请输入" type="textarea" :autosize="{ minRows: 2, maxRows: 2 }" clearable />
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="创建时间" :render-header="addRedStar" :width="columnWidth">
                  <template #default="scope">
                    <el-form-item :prop="`tableData.${scope.$index}.createDate`" :rules="formRules.createDate">
                      <el-date-picker v-model="scope.row.createDate" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm" placeholder="选择日期" />
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column label="操作时间" :render-header="addRedStar" :width="columnWidth">
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
        </div>
        <!-- Table Form end -->

        <div v-if="!dialogIsLook" class="bs-dialog-footer">
          <el-button @click="isShowDialog = false"> 取消 </el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()"> 保存 </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { getDictDept } from '@/api/base/base'
import { getListData, addData, editData, deleteData } from '@/api/tables/tables'
import TimeUtils from '@/utils/timeUtils'

const emit = defineEmits(['update:isShow', 'closed', 'success'])

const props = defineProps({
  // 是否显示
  isShow: { type: Boolean, default: false },
  // add，edit，look
  dialogType: { type: String, default: 'add' },
  // 传参
  dialogData: { type: Object, default: () => ({}) },
  // 标题：默认按类型设置为新增、编辑、查看，传值优先级更高
  title: { type: String, default: '' },
  // 跳转页面：新增1，新增2，详情1，详情2
  jumpPage: { type: String, default: '' }
})

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

const dialogFormRef = ref()
const tableRef = ref()
const state = reactive({
  // 弹框相关
  dialogTitle: '提示',
  isShowDialog: false,
  tableLoading: false,
  dialogSubmitBtnLoading: false,
  dialogIsLook: false,
  selectedRows: [] as TableType[], // 勾选一行或多行数据
  columnWidth: 280
})
const { dialogTitle, isShowDialog, tableLoading, dialogSubmitBtnLoading, dialogIsLook, selectedRows, columnWidth } = toRefs(state)

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
watch(
  () => props.dialogData,
  (val) => {
    tableForm.tableData = JSON.parse(JSON.stringify(val.tableData))
  }
)
watch(
  () => props.dialogType,
  (val) => {
    state.dialogTitle = props.title || (val === 'add' ? '新增' : val === 'edit' ? '编辑' : val === 'look' ? '查看' : state.dialogTitle)
    state.dialogIsLook = val === 'look'
  },
  { immediate: true }
)

onMounted(() => {
  requestDictDept()
})

// 字典
const requestDictDept = () => {
  getDictDept().then((res) => {
    if (res.code === 20000) {
      optionState.deptOptions = res.data
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

// 弹框相关
const onOpenedDialog = () => {
  if (props.dialogType === 'add') {
    dialogFormRef.value.clearValidate() // 清空校验
  }
  if (!optionState.deptOptions.length) {
    requestDictDept()
  }
}
const onClosedDialog = () => {
  if (!state.dialogIsLook) {
    dialogFormRef.value.resetFields() // 仅清除验证
  }
  emit('closed', {})
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
    xh: 33,
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

const onDialogSubmit = () => {
  dialogFormRef.value.validate((valid: any, fields: any) => {
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
  const params = JSON.parse(JSON.stringify(tableForm))
  console.log(JSON.stringify(params))
  state.dialogSubmitBtnLoading = true
  const msg = props.dialogType === 'add' ? '新增成功!' : '编辑成功!'
  const p = props.dialogType === 'add' ? addData(params) : editData(params)
  p.then((res) => {
    state.dialogSubmitBtnLoading = false
    if (res.code === 20000) {
      ElMessage.success(msg)
      state.isShowDialog = false
      emit('success', {})
    } else {
      ElMessage.warning(res.msg)
    }
  }).catch((err) => {
    state.dialogSubmitBtnLoading = false
    console.log(JSON.stringify(err))
  })
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

// $inputWidth: null;
$inputWidth: 200px;

// form-item content
.input-width :deep(.el-form-item__content) {
  width: $inputWidth;
  // background: orange;
}

.input-width :deep(.el-form-item__content .el-input) {
  width: $inputWidth;
  // background: yellow;
}

.input-width :deep(.el-textarea) {
  width: $inputWidth;
  // background: blue;
}
</style>
