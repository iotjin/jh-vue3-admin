<template>
  <div>
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="60%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div class="bs-dialog input-width">
        <div style="margin: -10px 0px 20px">选中用户：{{ userData.name }}</div>
        <el-row :gutter="10" class="dialog-body">
          <!-- 可分配角色 -->
          <el-col :span="11">
            <div class="role-title">可分配角色</div>
            <el-form :inline="true" class="role-left">
              <div class="role-search">
                <el-form-item>
                  <el-input v-model="nameK" maxlength="20" placeholder="请输入角色名称" clearable />
                </el-form-item>
                <el-form-item>
                  <el-button class="bs-form-btn" type="primary" @click="requestList('K')">查询</el-button>
                </el-form-item>
              </div>
              <el-table v-loading="isLoadingK" :data="tableDataK" :max-height="tableHeight" border @selection-change="onSelectionChangeK">
                <el-table-column type="selection" />
                <el-table-column prop="name" label="角色名称" />
                <el-table-column prop="code" label="角色编号" />
              </el-table>
            </el-form>
          </el-col>
          <el-col :span="2">
            <div class="role-center">
              <el-icon :size="22">
                <i-ep-arrow-left @click="onClickArrowLeft()" />
              </el-icon>
              <br />
              <el-icon :size="22">
                <i-ep-arrow-right @click="onClickArrowRight()" />
              </el-icon>
            </div>
          </el-col>
          <!-- 已分配角色 -->
          <el-col :span="11">
            <div class="role-title">已分配角色</div>
            <el-form :inline="true" class="role-right">
              <div class="role-search">
                <el-form-item>
                  <el-input v-model="nameY" maxlength="20" placeholder="请输入角色名称" clearable />
                </el-form-item>
                <el-form-item>
                  <el-button class="bs-form-btn" type="primary" @click="requestList('Y')">查询</el-button>
                </el-form-item>
              </div>
              <el-table v-loading="isLoadingY" :data="tableDataY" :max-height="tableHeight" border @selection-change="onSelectionChangeY">
                <el-table-column type="selection" />
                <el-table-column prop="name" label="角色名称" />
                <el-table-column prop="code" label="角色编号" />
              </el-table>
            </el-form>
          </el-col>
        </el-row>
        <div slot="footer" class="bs-dialog-footer" style="padding-top: 30px">
          <el-button @click="isShowDialog = false">取消</el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()">保存</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { getRoleListByUserId, RoleType } from '@/api/system/role'
import { assignRole, UserType } from '@/api/system/user'

const emit = defineEmits(['update:isShow', 'closed', 'success'])

const props = defineProps({
  // 是否显示
  isShow: { type: Boolean, default: false },
  // 传参
  dialogData: { type: Object, default: () => ({}) }
})

const dialogFormRef = ref()
const state = reactive({
  // 弹框相关
  dialogTitle: '分配角色',
  isShowDialog: false,
  dialogSubmitBtnLoading: false,
  userData: {} as UserType,
  tableHeight: 400,
  isLoadingK: false,
  nameK: '',
  tableDataK: [] as RoleType[],
  selectedRowsK: [] as RoleType[],
  isLoadingY: false,
  nameY: '',
  tableDataY: [] as RoleType[],
  selectedRowsY: [] as RoleType[]
})
const { dialogTitle, isShowDialog, dialogSubmitBtnLoading } = toRefs(state)
const { userData, tableHeight, isLoadingK, nameK, tableDataK, isLoadingY, nameY, tableDataY } = toRefs(state)

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
  () => props.dialogData,
  (val) => {
    state.userData = JSON.parse(JSON.stringify(val))
  }
)

onMounted(() => {})

// 弹框相关
const onOpenedDialog = () => {
  requestList('K')
  requestList('Y')
}
const onClosedDialog = () => {
  emit('closed', {})
}

const requestList = (type: string) => {
  var params = { userId: state.userData.id, name: '', status: '' }
  params.name = type === 'K' ? state.nameK : state.nameY
  params.status = type === 'K' ? '0' : '1'
  console.log(JSON.stringify(params))
  handleLoading(true, type)
  getRoleListByUserId(params)
    .then((res) => {
      handleLoading(false, type)
      if (res.code === 20000) {
        if (type === 'K') {
          state.tableDataK = res.data
        } else {
          state.tableDataY = res.data
        }
      } else {
        ElMessage.error(res.msg)
      }
    })
    .catch((error) => {
      handleLoading(false, type)
      console.log(JSON.stringify(error))
    })
}

const handleLoading = (isShow: boolean, type: string) => {
  if (type === 'K') {
    state.isLoadingK = isShow
  } else {
    state.isLoadingY = isShow
  }
}
const onSelectionChangeK = (row: RoleType[]) => {
  state.selectedRowsK = row
}
const onSelectionChangeY = (row: RoleType[]) => {
  state.selectedRowsY = row
}
const onClickArrowLeft = () => {
  if (state.selectedRowsY.length === 0) {
    ElMessage.warning('请选择需要移除的已分配角色！')
    return
  }
  state.tableDataK = state.selectedRowsY.concat(state.tableDataK)
  state.tableDataY = state.tableDataY.filter((item1) => !state.selectedRowsY.some((item2) => item1.id === item2.id))
}

const onClickArrowRight = () => {
  if (state.selectedRowsK.length === 0) {
    ElMessage.warning('请选择需要添加的可分配角色！')
    return
  }
  state.tableDataY = state.selectedRowsK.concat(state.tableDataY)
  state.tableDataK = state.tableDataK.filter((item1) => !state.selectedRowsK.some((item2) => item1.id === item2.id))
}

const onDialogSubmit = () => {
  submitRequest()
}

const submitRequest = () => {
  const roleIds = state.tableDataY.map((item) => item.id)
  const params = { id: state.userData.id, roleIds: roleIds }
  console.log(JSON.stringify(params))
  state.dialogSubmitBtnLoading = true
  assignRole(params)
    .then((res) => {
      state.dialogSubmitBtnLoading = false
      if (res.code === 20000) {
        ElMessage.success('分配角色成功!')
        state.isShowDialog = false
        emit('success', {})
      } else {
        ElMessage.error(res.msg)
      }
    })
    .catch((error) => {
      state.dialogSubmitBtnLoading = false
      console.log(JSON.stringify(error))
    })
}
</script>

<style lang="scss" scoped>
.dialog-body {
  // margin-top: -10px;
  background: white;
}

.role-title {
  padding: 10px;
  text-align: center;
  color: #000;
  background: #f1f1f1;
}

.role-search {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.dialog-body .role-left,
.dialog-body .role-right {
  padding: 10px;
  border: 1px solid #f1f1f1;
}

.dialog-body .role-center {
  text-align: center;
  padding-top: 110px;
}

.dialog-body .role-center > i {
  font-size: 22px;
  cursor: pointer;
  margin-top: 10px;
}

.dialog-body .role-center > i:hover {
  color: #2aa7e8;
}

.input-width :deep(.el-form-item__content) {
  width: 100%;
}
.input-width :deep(.el-form-item__content .el-input) {
  width: 100%;
}
</style>
