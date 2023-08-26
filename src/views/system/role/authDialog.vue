<template>
  <div>
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="55%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div v-loading="dialogLoading" class="bs-dialog">
        <div style="margin: -10px 0px 20px">选中角色：{{ roleData.name }}</div>
        <el-tabs v-model="activeName" type="card">
          <!-- 菜单权限 -->
          <el-tab-pane label="菜单权限" name="first">
            <div style="padding: 0 5px 15px">
              <el-button type="primary" :icon="isExpandAll ? 'i-ep-arrow-down' : 'i-ep-arrow-right'" @click="onClickToggleExpand"> {{ isExpandAll ? '全部收起' : '全部展开' }} </el-button>
              <el-button type="primary" :icon="isSelectAll ? 'i-ep-close' : 'i-ep-check'" @click="onClickSelectAll"> {{ isSelectAll ? '全部取消' : '全部选择' }} </el-button>
            </div>
            <div class="tree-body">
              <el-tree ref="treeRef" :data="menuTreeData" show-checkbox :check-on-click-node="true" node-key="id" highlight-current :default-checked-keys="menuIdList" :props="defaultProps">
                <template #default="{ node, data }">
                  <span>
                    <Icon v-if="isIconify(data.icon)" :icon="data.icon" class="iconFont" />
                    <svg-icon v-else-if="isSVGIcon(data.icon)" :icon-class="data.icon" class="iconFont" />
                    {{ node.label }}
                  </span>
                </template>
              </el-tree>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="bs-dialog-footer">
          <el-button @click="isShowDialog = false">取消</el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()">保存</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { getMenuTreeListByRoleId, MenuType } from '@/api/system/menu'
import { roleSetPermissions, RoleType } from '@/api/system/role'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['update:isShow', 'closed', 'success'])

const props = defineProps({
  // 是否显示
  isShow: { type: Boolean, default: false },
  // 传参
  dialogData: { type: Object, default: () => ({}) }
})

const treeRef = ref()
const state = reactive({
  // 弹框相关
  dialogTitle: '权限设置',
  isShowDialog: false,
  dialogSubmitBtnLoading: false,
  dialogLoading: false,
  roleData: {} as RoleType,
  menuTreeData: [] as MenuType[],
  menuIdList: [] as string[],
  defaultProps: {
    label: 'title',
    children: 'children'
  },
  isExpandAll: false,
  isSelectAll: false,
  activeName: 'first'
})
const { dialogTitle, isShowDialog, dialogSubmitBtnLoading, dialogLoading, roleData } = toRefs(state)
const { menuTreeData, menuIdList, defaultProps, isExpandAll, isSelectAll, activeName } = toRefs(state)

const isIconify = (icon: string) => icon && icon.includes(':')
const isSVGIcon = (icon: string) => icon && !isIconify(icon)

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
    state.roleData = JSON.parse(JSON.stringify(val))
  }
)

// 弹框相关
const onOpenedDialog = () => {
  requestList()
}
const onClosedDialog = () => {
  emit('closed', {})
}

const requestList = () => {
  const params = { roleId: state.roleData.id }
  state.dialogLoading = true
  getMenuTreeListByRoleId(params)
    .then((res) => {
      state.dialogLoading = false
      if (res.code === 20000) {
        state.menuTreeData = res.data.menuTree
        state.menuIdList = res.data.menuIds
      } else {
        ElMessage.warning(res.msg)
      }
    })
    .catch((err) => {
      state.dialogLoading = false
      console.log(JSON.stringify(err))
    })
}

const onClickToggleExpand = () => {
  state.isExpandAll = !state.isExpandAll
  const nodes = treeRef.value.store._getAllNodes()
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].expanded = state.isExpandAll
  }
}

const onClickSelectAll = () => {
  state.isSelectAll = !state.isSelectAll
  if (state.isSelectAll) {
    treeRef.value.setCheckedNodes(state.menuTreeData)
  } else {
    treeRef.value.setCheckedNodes([])
  }
}

const onDialogSubmit = () => {
  submitRequest()
}
const submitRequest = () => {
  const roleId = state.roleData.id
  const defaultMenuList = treeRef.value.getCheckedKeys()
  const menuHalfCheckedKeys = treeRef.value.getHalfCheckedKeys()
  const params = {
    roleId: roleId,
    menuIds: defaultMenuList.concat(menuHalfCheckedKeys)
  }
  console.log(JSON.stringify(params))
  state.dialogSubmitBtnLoading = true
  roleSetPermissions(params)
    .then((res) => {
      state.dialogSubmitBtnLoading = false
      if (res.code === 20000) {
        ElMessage.success('角色设置权限成功!')
        state.isShowDialog = false
        emit('success', {})
      } else {
        ElMessage.warning(res.msg)
      }
    })
    .catch((err) => {
      state.dialogSubmitBtnLoading = false
      console.log(JSON.stringify(err))
    })
}
</script>

<style lang="scss" scoped>
.tree-body {
  background: white;
  // height: 400px;
  height: 50vh;
  overflow: auto;
}

.iconFont {
  font-size: 15px;
  color: #999;
}
</style>
