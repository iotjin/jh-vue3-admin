<template>
  <div class="bs-page-body">
    <!-- Search start -->
    <el-form :inline="true" :model="queryParams" class="bs-form-search mt10">
      <el-form-item>
        <span class="bs-form-label" style="width: 120px"> <span class="icon">菜单名称:</span> </span>
        <el-input v-model="queryParams.title" maxlength="20" placeholder="请输入菜单名称" clearable @keyup.enter.native="requestList" />
      </el-form-item>
      <el-form-item>
        <span class="bs-form-label" style="width: 120px"> <span class="icon">菜单编码:</span> </span>
        <el-input v-model="queryParams.code" maxlength="20" placeholder="请输入菜单编码" clearable @keyup.enter.native="requestList" />
      </el-form-item>
      <el-form-item>
        <el-button class="bs-form-btn" type="primary" @click="requestList">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- Search end -->

    <!-- Table start -->
    <div class="bs-page-table">
      <div class="bs-table-btns">
        <el-button v-hasPerm="['menu-add']" type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
        <el-button v-hasPerm="['menu-edit']" type="primary" icon="i-ep-edit" :disabled="selectedRows.length !== 1" @click="onClickEdit"> 编辑 </el-button>
        <el-button v-hasPerm="['menu-look']" type="primary" icon="i-ep-search" :disabled="selectedRows.length !== 1" @click="onClickLook"> 查看 </el-button>
        <el-button v-hasPerm="['menu-delete']" type="danger" icon="i-ep-delete" :disabled="selectedRows.length !== 1" @click="onClickDelete"> 删除 </el-button>
        <el-button plain :icon="isExpandAll ? 'i-ep-arrow-down' : 'i-ep-arrow-right'" @click="onClickToggleExpand"> {{ isExpandAll ? '全部收起' : '全部展开' }} </el-button>
      </div>
      <el-table
        ref="tableRef"
        v-loading="tableLoading"
        class="bs-table"
        :data="tableData"
        :tree-props="treeProps"
        row-key="id"
        :default-expand-all="false"
        :stripe="true"
        :header-cell-style="headerStyle"
        :cell-style="cellStyle"
        @selection-change="onSelectionChange"
      >
        <el-table-column type="selection" width="55px" />
        <el-table-column label="菜单名称" min-width="200px">
          <template #default="scope">
            <span @click="onClickLook(scope.row)">
              <a style="color: #00a0e9; text-decoration: underline">
                <Icon v-if="isIconify(scope.row.icon)" :icon="scope.row.icon" class="iconFont" />
                <svg-icon v-else-if="isSVGIcon(scope.row.icon)" :icon-class="scope.row.icon" class="iconFont" />
                {{ scope.row.title }}
              </a>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="菜单类型" min-width="100">
          <template #default="scope">
            <div :class="customStyle(scope.row)">{{ getDictLabel(scope.row.menuType, menuTypeOptions) }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="code" label="菜单编码" min-width="170px" />
        <el-table-column prop="sort" label="排序" />
        <el-table-column label="可见">
          <template #default="scope"> {{ scope.row.menuType === 'button' ? '' : scope.row.hidden ? '隐藏' : '显示' }} </template>
        </el-table-column>
        <el-table-column prop="component" label="组件路径" min-width="220px" />
        <el-table-column prop="parentTitle" label="上级菜单" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button v-hasPerm="['menu-edit']" size="small" icon="i-ep-edit" @click="onClickEdit(scope.row)" />
            <el-button v-hasPerm="['menu-delete']" size="small" icon="i-ep-delete" type="danger" @click="onClickDelete(scope.row)" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Table end -->

    <!-- add/edit dialog -->
    <AddDialog :dialog-type="dialogType" v-model:is-show="isShowDialog" :dialog-data="dialogFormData" :dialog-tree-data="dialogTreeData" @success="requestList" @closed="onClosedDialog" />
  </div>
</template>

<script setup lang="ts">
import { getAllMenuTreeList, deleteMenu, MenuType } from '@/api/system/menu'
import { dictMenuType } from '@/views/system/menu/dict'
import AddDialog from './addDialog.vue'
import { Icon } from '@iconify/vue'

const tableRef = ref()
const state = reactive({
  tableLoading: false,
  tableData: [] as MenuType[],
  queryParams: {
    title: '',
    code: ''
  },
  selectedRows: [] as MenuType[], // 勾选一行或多行数据
  isExpandAll: false,
  treeProps: {
    children: 'children',
    hasChildren: 'hasChildren'
  }
})
const { tableLoading, tableData, queryParams, selectedRows, isExpandAll, treeProps } = toRefs(state)

const optionState = reactive({
  menuTypeOptions: dictMenuType as SelectOptionType[]
})
const { menuTypeOptions } = toRefs(optionState)

// 弹框相关
const dialogState = reactive({
  isShowDialog: false,
  dialogType: '',
  dialogFormData: {},
  dialogTreeData: [] as MenuType[]
})
const { isShowDialog, dialogType, dialogFormData, dialogTreeData } = toRefs(dialogState)

const isIconify = (icon: string) => icon && icon.includes(':')
const isSVGIcon = (icon: string) => icon && !isIconify(icon)

onMounted(() => {
  requestList()
})

const requestList = () => {
  var params = JSON.parse(JSON.stringify(state.queryParams))
  console.log(JSON.stringify(params))

  state.tableLoading = true
  getAllMenuTreeList(params)
    .then((res) => {
      state.tableLoading = false
      if (res.code === 20000) {
        state.tableData = res.data
      } else {
        ElMessage.warning(res.msg)
      }
    })
    .catch((err) => {
      state.tableLoading = false
      console.log(JSON.stringify(err))
    })
}

const headerStyle = ({ row, column, rowIndex, columnIndex }: TableCellStyleType) => {
  if (column['label'] === '菜单名称') {
    return { textAlign: 'left', paddingLeft: '10px' }
  }
  return { textAlign: 'center' }
}

const cellStyle = ({ row, column, rowIndex, columnIndex }: TableCellStyleType) => {
  return { textAlign: column['label'] === '菜单名称' ? 'left' : 'center' }
}

const customStyle = (row: MenuType) => {
  return 'b-tag b-tag-' + row.menuType
}

const onSelectionChange = (rows: MenuType[]) => {
  state.selectedRows = rows
}

const getDictLabel = (value: string, dictList: SelectOptionType[]) => {
  const foundIndex = dictList.findIndex((item) => item.value === value)
  if (foundIndex !== -1) {
    return dictList[foundIndex].label
  }
}

// 操作按钮
const onClickAdd = () => {
  dialogState.dialogType = 'add'
  dialogState.dialogFormData = {} // 新增使用的内部初始值
  dialogState.dialogTreeData = state.tableData
  dialogState.isShowDialog = true
}
const onClickEdit = (row: MenuType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'edit'
  dialogState.dialogFormData = params
  dialogState.dialogTreeData = state.tableData
  dialogState.isShowDialog = true
}
const onClickLook = (row: MenuType) => {
  const params = JSON.parse(JSON.stringify(row && row.id ? row : state.selectedRows[0]))
  dialogState.dialogType = 'look'
  dialogState.dialogFormData = params
  dialogState.dialogTreeData = state.tableData
  dialogState.isShowDialog = true
}
const onClickDelete = (row: MenuType) => {
  var title = ''
  if (row && row.id) {
    title = row.title
  } else {
    title = state.selectedRows.map((item) => item.title).join(',')
  }

  ElMessageBox.confirm(`确定要删除菜单 ${title} （如果包含子菜单，将一并删除），此操作将永久删除, 是否继续?`, '提示', {
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
  deleteMenu(params).then((res) => {
    if (res.code === 20000) {
      ElMessage.success('删除成功!')
      requestList()
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

const onClickToggleExpand = () => {
  state.isExpandAll = !state.isExpandAll
  toggleRowExpansionAll(state.tableData, state.isExpandAll)
}

const toggleRowExpansionAll = (data: MenuType[], isExpansion: boolean) => {
  data.forEach((item) => {
    tableRef.value.toggleRowExpansion(item, isExpansion)
    if (item.children !== undefined && item.children !== null) {
      toggleRowExpansionAll(item.children, isExpansion)
    }
  })
}
// 弹框相关
const onClosedDialog = () => {
  tableRef.value.clearSelection()
}
</script>

<style lang="scss" scoped>
.iconFont {
  font-size: 15px;
  color: #999;
}

.b-tag {
  display: inline-block;
  margin: 0.2rem;
  padding: 0px 15px;
  font-size: 12px;
  border: 1px solid #e8eaec;
  border-radius: 4px;
}

.b-tag-catalog {
  color: #722ed1;
  background: #f9f0ff;
  border-color: #d3adf7;
}

.b-tag-menu {
  color: #2f54eb;
  background: #f0f5ff;
  border-color: #adc6ff;
}

.b-tag-button {
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;
}

.b-tag-button2 {
  display: inline-block;
  margin: 0.2rem;
  padding: 0px 15px;
  font-size: 12px;
  color: #1890ff;
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 4px;
}
</style>
