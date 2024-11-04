<template>
  <div>
    <!-- drag sort dialog -->
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="55%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div class="bs-dialog input-width">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="Staff Info" name="staffTab">
            <el-form ref="dialogFormRef" :model="dialogFormData" :inline="true" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
              <el-form-item label="姓名:" prop="name">
                <el-input v-model="dialogFormData.name" placeholder="请输入" clearable />
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="Set Status" name="setStatusTab">
            <SetStatus :type="dialogType" :edit-status-list="editStatusOptions" @change="onChangeStatus" />
          </el-tab-pane>
        </el-tabs>
        <div v-if="!dialogIsLook" class="bs-dialog-footer" style="margin-top: 10px">
          <el-button @click="isShowDialog = false"> 取消 </el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()"> 保存 </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { getDictStatus } from '@/api/base/base'
import SetStatus from './setStatus.vue'

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
  initFormData: {} as any,
  dialogFormData: {
    id: '',
    name: '',
    statusList: []
  },
  activeName: 'staffTab'
})
const { dialogTitle, isShowDialog, dialogSubmitBtnLoading, dialogIsLook, dialogFormData, activeName } = toRefs(state)

const optionState = reactive({
  editStatusOptions: [] as SelectOptionType[]
})
const { editStatusOptions } = toRefs(optionState)

const dialogFormRules = reactive({
  name: [
    { required: true, message: '请输入', trigger: ['blur', 'change'] },
    { min: 1, max: 10, message: '10字符以内', trigger: ['blur', 'change'] }
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

// 字典
const requestDictStatus = () => {
  getDictStatus().then((res) => {
    if (res.code === 20000) {
      optionState.editStatusOptions = res.data
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
  if (!optionState.editStatusOptions.length) {
    requestDict()
  }
}
const onClosedDialog = () => {
  if (!state.dialogIsLook) {
    dialogFormRef.value.resetFields() // 仅清除验证
  }
  emit('closed', {})
}

const requestDict = () => {
  //   optionState.editStatusOptions = props.dialogType === 'add' ? [] : state.initFormData.statusList
  var statusList = [
    { statusId: 'status2', statusName: '状态2', canRead: true, canWrite: true, order: 1 },
    { statusId: 'status4', statusName: '状态4', canRead: true, canWrite: false, order: 2 }
  ] as any
  optionState.editStatusOptions = props.dialogType === 'add' ? [] : statusList
}

const onChangeStatus = (arr: any) => {
  state.dialogFormData.statusList = arr
}

const onDialogSubmit = () => {
  dialogFormRef.value.validate((valid: any) => {
    if (valid) {
      submitRequest()
    } else {
      ElMessage.warning('Please check staff info.')
    }
  })
}

const submitRequest = () => {
  const params = JSON.parse(JSON.stringify(state.dialogFormData))
  console.log(JSON.stringify(params))
  state.isShowDialog = false
  state.dialogSubmitBtnLoading = false
  emit('success', {})
}
</script>

<style lang="scss" scoped></style>
