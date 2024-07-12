<template>
  <div>
    <!-- add/edit dialog -->
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="55%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div class="bs-dialog">
        <el-form ref="dialogFormRef" :model="dialogFormData" :inline="true" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
          <el-form-item label="字典名称:" prop="name">
            <el-input v-model="dialogFormData.name" placeholder="请输入字典名称" clearable />
          </el-form-item>
          <el-form-item label="字典类型:" prop="type">
            <el-input v-model="dialogFormData.type" placeholder="请输入字典类型" clearable />
          </el-form-item>
          <el-form-item label="排序:" prop="sort">
            <el-input v-model="dialogFormData.sort" type="number" placeholder="请输入排序" clearable />
          </el-form-item>
          <el-form-item v-if="dialogType !== 'add'" label="是否内置:" prop="builtin">
            <el-radio-group v-model="dialogFormData.builtin">
              <el-radio value="1" disabled>是</el-radio>
              <el-radio value="0" disabled>否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注:" prop="notes">
            <el-input v-model="dialogFormData.notes" placeholder="请输入备注" type="textarea" maxlength="100" show-word-limit clearable />
          </el-form-item>
        </el-form>
        <div v-if="!dialogIsLook" class="bs-dialog-footer">
          <el-button @click="isShowDialog = false"> 取消 </el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()"> 保存 </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { addDictType, editDictType, saveDictType } from '@/api/system/dict'

const emit = defineEmits(['update:isShow', 'closed', 'success'])

const props = defineProps({
  // 是否显示
  isShow: { type: Boolean, default: false },
  // add，edit，look
  dialogType: { type: String, default: 'add' },
  // 传参
  dialogData: { type: Object, default: () => ({}) },
  // 标题：默认按类型设置为新增、编辑、查看，传值优先级更高
  title: { type: String, default: '' }
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
    name: '',
    type: '',
    sort: '',
    builtin: '0',
    notes: ''
  }
})
const { dialogTitle, isShowDialog, dialogSubmitBtnLoading, dialogIsLook, dialogFormData } = toRefs(state)

const dialogFormRules = reactive({
  name: [
    { required: true, message: '请输入', trigger: ['blur'] },
    { min: 1, max: 32, message: '32字符以内', trigger: ['blur'] }
  ],
  type: [
    { required: true, message: '请输入', trigger: ['blur'] },
    { min: 1, max: 32, message: '32字符以内', trigger: ['blur'] }
  ],
  sort: [
    { required: true, message: '请输入正确的排序号', trigger: ['blur'] },
    { pattern: /^[1-9]\d{0,2}$/, message: '请输入0-999之间的正整数', trigger: ['blur'] }
  ]
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
const onDialogSubmit = () => {
  dialogFormRef.value.validate((valid: any) => {
    if (valid) {
      submitRequest()
    }
  })
}

const submitRequest = () => {
  const params = JSON.parse(JSON.stringify(state.dialogFormData))
  console.log(JSON.stringify(params))
  const msg = props.dialogType === 'add' ? '新增成功!' : '编辑成功!'
  state.dialogSubmitBtnLoading = true
  saveDictType(params)
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
  console.log(JSON.stringify(params))
  state.dialogSubmitBtnLoading = true
  const msg = props.dialogType === 'add' ? '新增成功!' : '编辑成功!'
  const p = props.dialogType === 'add' ? addDictType(params) : editDictType(params)
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

<style lang="scss" scoped></style>
