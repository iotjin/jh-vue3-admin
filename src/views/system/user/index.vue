<template>
  <div>
    <div class="bs-page-body">
      <!-- Search start -->
      <el-form :inline="true" :model="queryParams" class="bs-form-search mt10">
        <el-form-item>
          <span class="bs-form-label" style="width: 80px"> <span class="icon">姓名:</span> </span>
          <el-input v-model="queryParams.name" maxlength="20" placeholder="请输入姓名" clearable @keyup.enter.native="onSearch" />
        </el-form-item>
        <el-form-item>
          <span class="bs-form-label"> <span class="icon">员工编号:</span> </span>
          <el-input v-model="queryParams.userNumber" maxlength="20" placeholder="请输入员工编号" clearable @keyup.enter.native="onSearch" />
        </el-form-item>
        <el-form-item>
          <span class="bs-form-label" style="width: 80px"> <span class="icon">部门:</span> </span>
          <el-select v-model="queryParams.deptId" placeholder="请选择" filterable clearable>
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

      <!-- Table start -->
      <div class="bs-page-table">
        <div class="bs-table-btns">
          <el-button v-hasPerm="['user-add']" type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
          <el-button v-hasPerm="['user-edit']" type="primary" icon="i-ep-edit" :disabled="selectedRows.length !== 1" @click="onClickEdit"> 编辑 </el-button>
          <el-button v-hasPerm="['user-look']" type="primary" icon="i-ep-search" :disabled="selectedRows.length !== 1" @click="onClickLook"> 查看 </el-button>
          <el-button v-hasPerm="['user-export']" type="warning" icon="i-ep-download" @click="onClickExport"> 导出 </el-button>
          <el-button v-hasPerm="['user-delete']" type="danger" icon="i-ep-delete" :disabled="selectedRows.length == 0" @click="onClickDelete"> 删除 </el-button>
          <el-button v-hasPerm="['user-assign']" type="warning" icon="i-ep-setting" :disabled="selectedRows.length !== 1" @click="onClickAssignRole"> 角色分配 </el-button>
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
          <el-table-column label="姓名" min-width="100">
            <template #default="scope">
              <span @click="onClickRow(scope.row)">
                <a style="color: #00a0e9; text-decoration: underline">{{ scope.row.name }}</a>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="loginName" label="用户名" min-width="120" />
          <el-table-column prop="userNumber" label="员工编号" min-width="120" sortable />
          <el-table-column label="部门" min-width="130">
            <template #default="scope">
              <div>{{ getDictLabel(scope.row.deptId, deptOptions) }}</div>
            </template>
          </el-table-column>
          <el-table-column label="状态">
            <template #default="scope">
              <!-- {{ scope.row.status === '0' ? '停用' : '启用' }} -->
              <div :style="{ background: getBgColor(scope.row) }" class="tagClass">{{ scope.row.status === '0' ? '停用' : '启用' }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="userExpiryDate" label="用户有效期至" sortable min-width="140" />
          <el-table-column label="级别" min-width="100">
            <template #default="scope">
              <!-- <div class="b-tag-success">{{ getDictLabel(scope.row.level, levelOptions) }}</div> -->
              <div :class="scope.row.level == '1' ? 'b-tag-success' : scope.row.level == '2' ? 'b-tag-warning' : 'b-tag-error'">{{ getDictLabel(scope.row.level, levelOptions) }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="phone" label="手机号" min-width="120" />
          <!-- <el-table-column prop="notes" label="备注" min-width="100" show-overflow-tooltip /> -->
          <el-table-column label="备注" min-width="100">
            <template #default="scope">
              <el-tooltip :visible-arrow="false" effect="light" :content="scope.row.notes" placement="bottom">
                <span class="bs-tooltip-text">{{ scope.row.notes }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="money" label="补助" />
          <el-table-column prop="age" label="年龄" />
          <el-table-column prop="loginDate" label="登录时间" min-width="180" />
          <el-table-column prop="loginIp" label="登录IP" min-width="150" />
          <el-table-column prop="createDate" label="创建时间" min-width="180" />
          <el-table-column prop="updateDate" label="更新时间" min-width="180" />
          <el-table-column prop="updateBy" label="操作人" /> -->
          <el-table-column fixed="right" label="操作" width="180">
            <template #default="scope">
              <el-button v-hasPerm="['user-edit']" size="small" icon="i-ep-edit" :disabled="!isEditable(scope.row)" @click="onClickEdit(scope.row)" />
              <el-button v-hasPerm="['user-delete']" size="small" icon="i-ep-delete" type="danger" :disabled="!isEditable(scope.row)" @click="onClickDelete(scope.row)" />
              <el-button v-hasPerm="['user-resetPwd']" size="small" icon="i-ep-refresh-left" type="danger" :disabled="!isEditable(scope.row)" @click="onClickReset(scope.row)" />
            </template>
          </el-table-column>
        </el-table>
        <Pagination v-show="tableTotal > 0" :total="tableTotal" v-model:page="queryParams.page" v-model:limit="queryParams.limit" @pagination="requestList" />
      </div>
      <!-- Table end -->

      <!-- add/edit dialog -->
      <AddDialog :dialog-type="dialogType" v-model:is-show="isShowDialog" :dialog-data="dialogFormData" @success="requestList" @closed="onClosedDialog" />
      <!-- 角色分配-->
      <AssignRoleDialog v-model:is-show="isShowDialogAssignRole" :dialog-data="assignRoleUserData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDictDept, getDictLevel, getDictDeptAndLevel } from '@/api/base/base'
import { getUserList, deleteUser, resetPwd, UserType } from '@/api/system/user'
import AddDialog from './addDialog.vue'
import AssignRoleDialog from './assignRoleDialog.vue'
import TimeUtils from '@/utils/timeUtils'
import { exportExcel } from '@/utils/exportExcel'

const tableRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as UserType[],
  queryParams: {
    page: 1,
    limit: 10,
    startDate: '',
    endDate: '',
    name: '',
    userNumber: '',
    deptId: ''
  },
  dateRange: [],
  selectedRows: [] as UserType[] // 勾选一行或多行数据
})
const { tableTotal, tableLoading, tableData, queryParams, dateRange, selectedRows } = toRefs(state)

// const deptOptions = ref<SelectOptionType[]>([])
const optionState = reactive({
  deptOptions: [] as SelectOptionType[],
  levelOptions: [] as SelectOptionType[]
})
const { deptOptions, levelOptions } = toRefs(optionState)

const dialogState = reactive({
  dialogType: 'add',
  isShowDialog: false,
  dialogFormData: {},
  isShowDialogAssignRole: false,
  assignRoleUserData: {}
})
const { dialogType, isShowDialog, dialogFormData, isShowDialogAssignRole, assignRoleUserData } = toRefs(dialogState)

onMounted(() => {
  requestDict()
  requestList()
})

const requestDict = () => {
  getDictDeptAndLevel().then((res) => {
    if (res.code === 20000) {
      optionState.deptOptions = res.data.dept
      optionState.levelOptions = res.data.level
    } else {
      ElMessage.error(res.msg)
    }
  })
}

const requestDict2 = () => {
  getDictDept().then((res) => {
    if (res.code === 20000) {
      optionState.deptOptions = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
  getDictLevel().then((res) => {
    if (res.code === 20000) {
      optionState.levelOptions = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
}

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  params.startDate = state.dateRange ? TimeUtils.startOfDay(state.dateRange[0]) : ''
  params.endDate = state.dateRange ? TimeUtils.endOfDay(state.dateRange[1]) : ''
  console.log(JSON.stringify(params))

  state.tableLoading = true
  getUserList(params)
    .then((res) => {
      state.tableLoading = false
      if (res.code === 20000) {
        state.tableData = res.data
        state.tableTotal = res.total
      } else {
        ElMessage.error(res.msg)
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
const isEditable = (row: UserType) => {
  return !row.loginName.toLowerCase().includes('admin')
}
const onSelectionChange = (rows: UserType[]) => {
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
const getBgColor = (row: UserType) => {
  return row.status === '0' ? '#E6A23C' : '#67C23A'
}
// 操作按钮
const onClickAdd = () => {
  dialogState.dialogType = 'add'
  dialogState.dialogFormData = {} // 新增使用的内部初始值
  dialogState.isShowDialog = true
}
const onClickEdit = (row: UserType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'edit'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickLook = (row: UserType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickDelete = (row: UserType) => {
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
    var params = { ids: [] as string[] | string }
    if (row && row.id) {
      params.ids = [row.id]
    } else {
      const tempArr = state.selectedRows.map((item) => item.id)
      params.ids = tempArr.join(',')
    }
    deleteRequest(params)
  })
}
const deleteRequest = (params: object) => {
  deleteUser(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('删除成功!')
      requestList()
    } else {
      ElMessage.error(res.msg)
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
    getUserList(params).then((response) => {
      const { data } = response
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
  const fields = ['name', 'loginName', 'userNumber', 'deptName', 'statusText', 'userExpiryDate', 'levelName', 'notes', 'phone']
  const headers = ['姓名', '用户名', '员工编号', '部门', '状态', '用户有效期至', '级别', '备注', '手机号']
  exportExcel(newTableDate, fields, headers, '用户数据.xlsx')
}
const onClickAssignRole = () => {
  dialogState.assignRoleUserData = JSON.parse(JSON.stringify(state.selectedRows[0]))
  dialogState.isShowDialogAssignRole = true
}

// 通过下划线点击row
const onClickRow = (row: UserType) => {
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = JSON.parse(JSON.stringify(row))
  dialogState.isShowDialog = true
}
// 行操作
const onClickReset = (row: UserType) => {
  ElMessageBox.confirm(`确定要重置 ${row.name} 的密码, 是否继续 ?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    const params = { id: row.id }
    resetRequest(params)
  })
}
const resetRequest = (params: object) => {
  console.log(JSON.stringify(params))
  resetPwd(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('重置密码成功!')
      requestList()
    } else {
      ElMessage.error(res.msg)
    }
  })
}
// 弹框相关
const onClosedDialog = () => {
  tableRef.value.clearSelection()
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
