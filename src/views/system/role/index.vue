<template>
  <div class="bs-page-body">
    <!-- Search start -->
    <el-form :inline="true" :model="queryParams" class="bs-form-search mt10">
      <el-form-item>
        <span class="bs-form-label" style="width: 120px"> <span class="icon">角色名称:</span> </span>
        <el-input v-model="queryParams.name" maxlength="20" placeholder="请输入角色名称" clearable @keyup.enter.native="onSearch" />
      </el-form-item>
      <el-form-item>
        <span class="bs-form-label" style="width: 120px"> <span class="icon">角色编码:</span> </span>
        <el-input v-model="queryParams.code" maxlength="20" placeholder="请输入角色编码" clearable @keyup.enter.native="onSearch" />
      </el-form-item>
      <el-form-item>
        <el-button class="bs-form-btn" type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- Search end -->

    <!-- Table start -->
    <div class="bs-page-table">
      <div class="bs-table-btns">
        <el-button v-hasPerm="['role-add']" type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
        <el-button v-hasPerm="['role-edit']" type="primary" icon="i-ep-edit" :disabled="selectedRows.length !== 1" @click="onClickEdit"> 编辑 </el-button>
        <el-button v-hasPerm="['role-look']" type="primary" icon="i-ep-search" :disabled="selectedRows.length !== 1" @click="onClickLook"> 查看 </el-button>
        <el-button v-hasPerm="['role-delete']" type="danger" icon="i-ep-delete" :disabled="selectedRows.length == 0" @click="onClickDelete"> 删除 </el-button>
        <el-button v-hasPerm="['role-setting']" type="warning" icon="i-ep-setting" :disabled="selectedRows.length !== 1" @click="onClickAuthRole"> 权限配置 </el-button>
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
        <el-table-column label="角色名称" width>
          <template #default="scope">
            <span @click="onClickRow(scope.row)">
              <a style="color: #00a0e9; text-decoration: underline">{{ scope.row.name }}</a>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="code" label="角色编码" width />
        <el-table-column label="是否内置">
          <template #default="scope"> {{ scope.row.builtin === '0' ? '否' : '是' }} </template>
        </el-table-column>
        <el-table-column label="备注" min-width="100">
          <template #default="scope">
            <el-tooltip :visible-arrow="false" effect="light" :content="scope.row.notes" placement="bottom">
              <span class="bs-tooltip-text"> {{ scope.row.notes }} </span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
          <template #default="scope">
            <el-button v-hasPerm="['role-edit']" size="small" icon="i-ep-edit" :disabled="!isEditable(scope.row)" @click="onClickEdit(scope.row)" />
            <el-button v-hasPerm="['role-delete']" size="small" icon="i-ep-delete" type="danger" :disabled="!isEditable(scope.row)" @click="onClickDelete(scope.row)" />
            <span style="padding-left: 10px" />
            <el-dropdown>
              <el-button size="small" :disabled="!isEditable(scope.row)"> 更多 <i class="i-ep-arrow-down el-icon--right" /> </el-button>
              <template #dropdown>
                <el-dropdown-menu v-hasPerm="['role-setting']">
                  <el-dropdown-item @click.native="onClickAuthRole(scope.row)"><i class="i-ep-setting" />权限配置</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <Pagination v-show="tableTotal > 0" :total="tableTotal" v-model:page="queryParams.page" v-model:limit="queryParams.limit" @pagination="requestList" />
    </div>
    <!-- Table end -->

    <!-- add/edit dialog -->
    <AddDialog :dialog-type="dialogType" v-model:is-show="isShowDialog" :dialog-data="dialogFormData" @success="requestList" @closed="onClosedDialog" />

    <!-- 权限设置 -->
    <AuthDialog v-model:is-show="isShowDialogAuthRole" :dialog-data="authRoleData" @success="requestList" @closed="onClosedDialog" />
  </div>
</template>

<script setup lang="ts">
import { getRoleList, deleteRole, RoleType } from '@/api/system/role'
import AddDialog from './addDialog.vue'
import AuthDialog from './authDialog.vue'

const tableRef = ref()
const state = reactive({
  tableTotal: 0,
  tableLoading: false,
  tableData: [] as RoleType[],
  queryParams: {
    page: 1,
    limit: 10,
    name: '',
    code: ''
  },
  selectedRows: [] as RoleType[] // 勾选一行或多行数据
})
const { tableTotal, tableLoading, tableData, queryParams, selectedRows } = toRefs(state)

const dialogState = reactive({
  isShowDialog: false,
  dialogType: 'add',
  dialogFormData: {},
  isShowDialogAuthRole: false,
  authRoleData: {}
})
const { isShowDialog, dialogType, dialogFormData, isShowDialogAuthRole, authRoleData } = toRefs(dialogState)

onMounted(() => {
  requestList()
})

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  console.log(JSON.stringify(params))

  state.tableLoading = true
  getRoleList(params)
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

const isEditable = (row: RoleType) => {
  return !row.code.toLowerCase().includes('admin')
}
const onSelectionChange = (rows: RoleType[]) => {
  state.selectedRows = rows
}

// 操作按钮
const onClickAdd = () => {
  dialogState.dialogType = 'add'
  dialogState.dialogFormData = {} // 新增使用的内部初始值
  dialogState.isShowDialog = true
}
const onClickEdit = (row: RoleType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'edit'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickLook = (row: RoleType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = params
  dialogState.isShowDialog = true
}
const onClickDelete = (row: RoleType) => {
  var name = ''
  if (row && row.id) {
    name = row.name
  } else {
    name = state.selectedRows.map((item) => item.name).join(',')
  }

  ElMessageBox.confirm(`确定要删除角色 ${name} ，此操作将永久删除, 是否继续?`, '提示', {
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
  deleteRole(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('删除成功!')
      requestList()
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

const onClickAuthRole = (row: RoleType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.authRoleData = params
  dialogState.isShowDialogAuthRole = true
}

// 通过下划线点击row
const onClickRow = (row: RoleType) => {
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = JSON.parse(JSON.stringify(row))
  dialogState.isShowDialog = true
}
// 弹框相关
const onClosedDialog = () => {
  tableRef.value.clearSelection()
}
</script>
<style lang="scss" scoped></style>
