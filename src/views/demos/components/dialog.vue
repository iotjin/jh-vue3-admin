<template>
  <div>
    <div style="margin: 20px">
      <el-button @click="onClickShowDialog">点击打开 BaseDialog 带表单</el-button>
    </div>

    <div style="margin: 20px">
      <el-button @click="onClickShowDialog2">点击打开 BaseDialog </el-button>
    </div>

    <div style="margin: 20px">
      <el-button @click="dialogVisible = true">点击打开 el-dialog 可拖拽</el-button>
    </div>

    <BaseDialog ref="dialogRef" v-model:is-show="isShowDialog" append-to-body @opened="onOpenedDialog" @closed="onClosedDialog" @submit="onDialogSubmit(dialogFormRef)">
      <el-form ref="dialogFormRef" :model="dialogFormData" :inline="true" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
        <el-form-item label="操作人:" prop="name1">
          <el-input v-model="dialogFormData.name1" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="级别:" prop="level">
          <el-select v-model="dialogFormData.level" placeholder="请选择" collapse-tags clearable>
            <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="手机号:" prop="phone">
          <el-input v-model="dialogFormData.phone" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="金额:" prop="money">
          <el-input v-model="dialogFormData.money" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="年龄:" prop="age">
          <el-input v-model="dialogFormData.age" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="创建时间:" prop="createDate">
          <el-date-picker v-model="dialogFormData.createDate" type="datetime" placeholder="选择日期" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" />
        </el-form-item>
        <el-form-item label="更新时间:" prop="updateDate">
          <el-date-picker v-model="dialogFormData.updateDate" type="datetime" placeholder="选择日期" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" />
        </el-form-item>
        <el-form-item label="处理状态:" prop="status">
          <el-select v-model="dialogFormData.status" placeholder="请选择" collapse-tags clearable>
            <el-option label="未处理" value="0" />
            <el-option label="已处理" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="内容:" prop="content">
          <el-input v-model="dialogFormData.content" placeholder="请输入" type="textarea" clearable />
        </el-form-item>
        <el-form-item label="启用:" prop="isUse">
          <el-radio-group v-model="dialogFormData.isUse">
            <el-radio value="1">启用</el-radio>
            <el-radio value="0">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div style="margin: 20px">
        <el-button @click="onClickShowDialog2">点击打开 BaseDialog </el-button>
      </div>
    </BaseDialog>

    <BaseDialog ref="dialogRef2" v-model:is-show="isShowDialog2" append-to-body @opened="onOpenedDialog" @closed="onClosedDialog" @submit="onDialogSubmit2" overflow>
      <div>这是一个弹框, header可拖拽, 拖动范围可以超出可视区</div>
    </BaseDialog>

    <div class="drag-container">
      <el-dialog v-model="dialogVisible" width="769px">
        <template #header>
          <div v-drag="['.drag-container .el-dialog', '.drag-container .el-dialog__header']">拖动指令效果（v-drag）</div>
        </template>
        <p>鼠标放标题头进行 Dialog 对话框拖动</p>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { getDictLevel } from '@/api/tables/tables'
import * as checkUtils from '@/utils/checkUtils'
import { REGEX_phone } from '@/utils/checkUtils'

const dialogRef = ref()
const dialogRef2 = ref()
const dialogFormRef = ref<FormInstance>()
const state = reactive({
  isfull: false,
  dialogVisible: false,
  dialogVisible2: false,
  isShowDialog2: false,
  // 弹框相关
  dialogType: '',
  isShowDialog: false,
  dialogFormData: {
    name1: '',
    content: '',
    level: '',
    createDate: '',
    updateDate: '',
    isUse: '',
    status: '',
    phone: '',
    money: '',
    age: ''
  },
  dialogIsLook: false
})

const optionState = reactive({
  levelOptions: [] as SelectOptionType[]
})

const { isfull, dialogVisible, dialogVisible2, isShowDialog2, dialogType, isShowDialog, dialogFormData, dialogIsLook } = toRefs(state)
const { levelOptions } = toRefs(optionState)

const dialogFormRules = reactive({
  name1: [
    { required: true, message: '请输入', trigger: 'blur' },
    { min: 1, max: 10, message: '10字符以内', trigger: 'blur' }
  ],
  content: [
    { required: false, message: '请输入', trigger: 'blur' },
    { min: 1, max: 100, message: '100字符以内', trigger: 'blur' }
  ],
  level: [{ required: true, message: '请选择', trigger: 'blur' }],
  createDate: [{ required: true, message: '请选择', trigger: 'blur' }],
  updateDate: [{ required: true, message: '请选择', trigger: 'blur' }],
  status: [{ required: true, message: '请选择', trigger: 'blur' }],
  isUse: [{ required: true, message: '请选择', trigger: 'blur' }],
  phone: [
    { required: true, message: '请输入', trigger: 'blur' },
    { pattern: REGEX_phone, message: '请输入正确手机号' }
  ],
  money: [
    { required: true, message: '请输入', trigger: 'blur' },
    { pattern: checkUtils.REGEX_money, message: '请输入最多两位小数金额' }
  ],
  age: [
    { required: true, message: '请输入', trigger: 'blur' },
    { pattern: /^[1-9]\d*$/, message: '仅支持录入正整数' }
  ]
})

onMounted(() => {
  requestDict()
})

const requestDict = () => {
  getDictLevel().then((res) => {
    if (res.code === 20000) {
      optionState.levelOptions = res.data
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

const onClickShowDialog = () => {
  state.isShowDialog = true
}
const onClickShowDialog2 = () => {
  state.isShowDialog2 = true
}

// 弹框相关
const onOpenedDialog = () => {
  console.log('onOpenedDialog')
  if (optionState.levelOptions.length === 0) {
    requestDict()
  }
}
const onClosedDialog = () => {
  console.log('onClosedDialog')
}

const onDialogSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (!valid) {
      console.log('error submit!', fields)
    } else {
      console.log('submit!')
      submitRequest()
    }
  })
}

const submitRequest = () => {
  console.log('验证通过 开始提交数据 。。。submitRequest')
  dialogRef.value.showSubmitBtnLoading(true)
  setTimeout(() => {
    dialogRef.value.showSubmitBtnLoading(false)
    state.isShowDialog = false
  }, 2000)
}

const onDialogSubmit2 = () => {
  dialogRef2.value.showSubmitBtnLoading(true)
  setTimeout(() => {
    dialogRef2.value.showSubmitBtnLoading(false)
    state.isShowDialog2 = false
  }, 2000)
}

const handleDrag = () => {
  console.log('handleDrag')
}
</script>
