<template>
  <div>
    <!-- add/edit dialog -->
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="55%" destroy-on-close :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div class="bs-dialog">
        <el-form ref="dialogFormRef" :model="dialogFormData" :inline="true" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
          <el-form-item label="菜单类型:" prop="menuType">
            <el-select v-model="dialogFormData.menuType" placeholder="请选择菜单类型" :disabled="dialogType !== 'add'" collapse-tags clearable @change="onChange">
              <el-option v-for="item in menuTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="菜单名称:" prop="title">
            <el-input v-model="dialogFormData.title" placeholder="请输入菜单名称" clearable />
          </el-form-item>
          <el-form-item v-if="dialogFormData.menuType !== 'catalog'" label="上级菜单:" prop="parentId">
            <!-- <el-tree-select v-model="dialogFormData.parentId" :data="menuTreeData" :props="treeProps" placeholder="请选择上级菜单" check-strictly filterable @change="getTreeValue" /> -->
            <SingleSelectTree v-model="dialogFormData.parentId" placeholder="请选择上级菜单" :props="treeProps" :data="menuTreeData" @selected="getTreeValue" />
          </el-form-item>
          <el-form-item label="排序:" prop="sort">
            <el-input v-model="dialogFormData.sort" type="number" placeholder="请输入排序" clearable />
          </el-form-item>
          <el-form-item label="菜单编码:" prop="code">
            <template #label>
              <div>
                <span>菜单编码:</span>
                <el-tooltip :content="dialogFormData.menuType !== 'button' ? '对应路由path和name' : '定义的按钮权限标识'" effect="dark">
                  <i-ep-question-filled />
                </el-tooltip>
              </div>
            </template>
            <el-input v-model="dialogFormData.code" placeholder="请输入菜单编码" clearable />
          </el-form-item>
          <el-form-item v-if="dialogFormData.menuType === 'menu'" label="组件路径:" prop="component" class="input-width">
            <el-input v-model="dialogFormData.component" placeholder="请输入组件路径" clearable>
              <template #prepend>src/views/</template>
            </el-input>
          </el-form-item>
          <el-form-item label="图标:" prop="icon">
            <el-input v-model="dialogFormData.icon" placeholder="请输入图标" clearable />
          </el-form-item>
          <el-form-item v-if="dialogFormData.menuType !== 'button'" label="状态:" prop="hidden">
            <el-radio-group v-model="dialogFormData.hidden">
              <el-radio :value="true">隐藏</el-radio>
              <el-radio :value="false">显示</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div v-if="!dialogIsLook" class="bs-dialog-footer">
          <el-button @click="isShowDialog = false">取消</el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()">保存</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { addMenu, editMenu, saveMenu, MenuType } from '@/api/system/menu'
import { dictMenuType } from '@/views/system/menu/dict'
import SingleSelectTree from '@/views/system/menu/select-tree.vue'

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
  // 传参
  dialogTreeData: { type: Array, default: () => [] }
})

const dialogFormRef = ref()
const state = reactive({
  // 弹框相关
  dialogTitle: '提示',
  isShowDialog: false,
  dialogSubmitBtnLoading: false,
  dialogIsLook: false,
  initFormData: {},
  dialogFormData: {
    id: '',
    menuType: 'menu', // catalog | menu | button
    title: '',
    parentId: '',
    parentTitle: '',
    sort: '',
    code: '',
    component: '', //  "Layout" | "system/menu" | ""
    icon: '',
    hidden: ''
  }
})
const { dialogTitle, isShowDialog, dialogSubmitBtnLoading, dialogIsLook, dialogFormData } = toRefs(state)

const optionState = reactive({
  menuTypeOptions: dictMenuType as SelectOptionType[],
  menuTreeData: [] as MenuType[],
  treeProps: {
    value: 'id',
    label: 'title',
    children: 'children'
  }
})
const { menuTypeOptions, menuTreeData, treeProps } = toRefs(optionState)

const dialogFormRules = reactive({
  menuType: [{ required: true, message: '请选择', trigger: ['blur', 'change'] }],
  title: [
    { required: true, message: '请输入', trigger: ['blur', 'change'] },
    { min: 1, max: 32, message: '32字符以内', trigger: ['blur', 'change'] }
  ],
  parentId: [{ required: false, message: '请选择', trigger: ['blur', 'change'] }],
  sort: [
    { required: true, message: '请输入正确的排序号', trigger: ['blur'] },
    { pattern: /^[1-9]\d{0,2}$/, message: '请输入0-999之间的正整数', trigger: ['blur'] }
  ],
  code: [
    { required: true, message: '请输入', trigger: 'blur' },
    { min: 1, max: 32, message: '32字符以内', trigger: 'blur' }
  ],
  component: [
    { required: true, message: '请输入', trigger: ['blur', 'change'] },
    { min: 1, max: 32, message: '32字符以内', trigger: ['blur', 'change'] }
  ],
  hidden: [{ required: true, message: '请选择', trigger: 'blur' }]
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
    if (props.dialogType === 'add') {
      // 新增使用的初始值
      state.dialogFormData = JSON.parse(JSON.stringify(state.initFormData))
    } else {
      state.dialogFormData = JSON.parse(JSON.stringify(val))
    }
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
watch(
  () => props.dialogTreeData,
  (val) => {
    const treeData = JSON.parse(JSON.stringify(val))
    optionState.menuTreeData = filterTree(treeData, 'button')
  }
)

onMounted(() => {
  state.initFormData = JSON.parse(JSON.stringify(state.dialogFormData))
})

// 弹框相关
const onOpenedDialog = () => {
  if (props.dialogType === 'add') {
    dialogFormRef.value.clearValidate() // 清空校验
  }
}
const onClosedDialog = () => {
  if (!state.dialogIsLook) {
    dialogFormRef.value.resetFields() // 仅清除验证
  }
  emit('closed', {})
}

// 过滤数据中menuType为button的
const filterTree = (tree: any[], type: string) => {
  return tree.filter((node) => {
    if (node.menuType === type) {
      return false
    }
    if (node.children && node.children.length > 0) {
      node.children = filterTree(node.children, type)
    }
    return true
  })
}
const filterTree2 = (tree: any[], type: string) => {
  return tree.flatMap((node) => {
    if (node.menuType === type) {
      return []
    }
    if (node.children && node.children.length > 0) {
      node.children = filterTree(node.children, type)
    }
    return node
  })
}

const onChange = () => {
  state.dialogFormData.parentId = ''
  state.dialogFormData.parentTitle = ''
  state.dialogFormData.code = ''
  state.dialogFormData.component = ''
  state.dialogFormData.hidden = ''
  dialogFormRef.value.clearValidate() // 清空校验
}

const getTreeValue = (key: any, data: any) => {
  console.log(JSON.stringify(key))
  console.log(JSON.stringify(data))
}

const onDialogSubmit = () => {
  dialogFormRef.value.validate((valid: any) => {
    if (valid) {
      submitRequest()
    }
  })
}

const submitRequest = () => {
  const params = JSON.parse(JSON.stringify(state.dialogFormData))
  if (state.dialogFormData.menuType === 'catalog') {
    params.component = 'Layout'
  }
  if (props.dialogType === 'edit') {
    delete params.children
  }

  console.log(JSON.stringify(params))
  const msg = props.dialogType === 'add' ? '新增成功!' : '编辑成功!'
  state.dialogSubmitBtnLoading = true
  saveMenu(params)
    .then((res) => {
      state.dialogSubmitBtnLoading = false
      if (res.code === 20000) {
        ElMessage.success(msg)
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

const submitRequest2 = () => {
  const params = JSON.parse(JSON.stringify(state.dialogFormData))
  if (state.dialogFormData.menuType === 'catalog') {
    params.component = 'Layout'
  }
  if (props.dialogType === 'edit') {
    delete params.children
  }

  console.log(JSON.stringify(params))
  const msg = props.dialogType === 'add' ? '新增成功!' : '编辑成功!'
  state.dialogSubmitBtnLoading = true
  const p = props.dialogType === 'add' ? addMenu(params) : editMenu(params)
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
.input-width :deep(.el-input-group__prepend) {
  width: 75px;
  padding: 0 5px;
}

.input-width :deep(.el-input .el-input__wrapper) {
  width: calc(300px - 75px);
}
</style>
