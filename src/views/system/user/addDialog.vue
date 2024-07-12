<template>
  <div>
    <!-- add/edit dialog -->
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="55%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div class="bs-dialog input-width">
        <el-form ref="dialogFormRef" :model="dialogFormData" :inline="true" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
          <el-form-item label="姓名:" prop="name">
            <el-input v-model="dialogFormData.name" placeholder="请输入姓名" clearable />
          </el-form-item>
          <el-form-item label="用户名:" prop="loginName">
            <el-input v-model="dialogFormData.loginName" :disabled="dialogType !== 'add'" placeholder="请输入用户名" clearable />
          </el-form-item>
          <el-form-item label="员工编号:" prop="userNumber">
            <el-input v-model.number="dialogFormData.userNumber" :disabled="dialogType !== 'add'" placeholder="请输入员工编号" clearable />
          </el-form-item>
          <el-form-item label="部门:" prop="deptId">
            <el-select v-model="dialogFormData.deptId" placeholder="请选择部门" filterable clearable>
              <el-option v-for="item in deptOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="用户有效期至:" prop="userExpiryDate">
            <el-date-picker v-model="dialogFormData.userExpiryDate" type="date" placeholder="选择日期" value-format="YYYY-MM-DD" format="YYYY-MM-DD" />
          </el-form-item>
          <el-form-item label="手机号:" prop="phone">
            <el-input v-model="dialogFormData.phone" placeholder="请输入手机号" clearable />
          </el-form-item>
          <el-form-item label="级别:" prop="level">
            <el-select v-model="dialogFormData.level" placeholder="请选择级别" filterable clearable>
              <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="补助:" prop="money">
            <el-input v-model="dialogFormData.money" placeholder="请输入金额" clearable />
          </el-form-item>
          <el-form-item label="年龄:" prop="age">
            <el-input v-model="dialogFormData.age" placeholder="请输入年龄" clearable />
          </el-form-item>
          <el-form-item v-if="dialogType !== 'add'" label="登录时间:" prop="loginDate">
            <el-date-picker v-model="dialogFormData.loginDate" disabled type="datetime" placeholder="选择日期" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item v-if="dialogType !== 'add'" label="登录IP:" prop="loginIp">
            <el-input v-model="dialogFormData.loginIp" disabled />
          </el-form-item>
          <el-form-item v-if="dialogType !== 'add'" label="创建时间:" prop="createDate">
            <el-date-picker v-model="dialogFormData.createDate" disabled type="datetime" placeholder="选择日期" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item v-if="dialogType !== 'add'" label="更新时间:" prop="updateDate">
            <el-date-picker v-model="dialogFormData.updateDate" disabled type="datetime" placeholder="选择日期" value-format="YYYY-MM-DD HH:mm:ss" format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item v-if="dialogType !== 'add'" label="操作人:" prop="updateBy">
            <el-input v-model="dialogFormData.updateBy" disabled />
          </el-form-item>
          <el-form-item label="备注:" prop="notes">
            <el-input v-model="dialogFormData.notes" :autosize="{ minRows: 5, maxRows: 5 }" placeholder="请输入备注" type="textarea" maxlength="100" show-word-limit clearable />
          </el-form-item>
          <el-form-item label="状态:" prop="status">
            <el-radio-group v-model="dialogFormData.status">
              <el-radio value="1">启用</el-radio>
              <el-radio value="0">停用</el-radio>
            </el-radio-group>
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
import { getDictDept, getDictLevel } from '@/api/base/base'
import { addUser, editUser, saveUser, UserType } from '@/api/system/user'
import * as checkUtils from '@/utils/checkUtils'
import { REGEX_phone } from '@/utils/checkUtils'

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
    loginName: '',
    userNumber: '',
    userExpiryDate: '',
    deptId: '',
    status: '',
    notes: '',
    phone: '',
    age: '',
    money: '',
    level: '',
    loginDate: '',
    loginIp: '',
    createDate: '',
    updateDate: '',
    updateBy: ''
  }
})
const { dialogTitle, isShowDialog, dialogSubmitBtnLoading, dialogIsLook, dialogFormData } = toRefs(state)

const optionState = reactive({
  deptOptions: [] as SelectOptionType[],
  levelOptions: [] as SelectOptionType[]
})
const { deptOptions, levelOptions } = toRefs(optionState)

const validate1 = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入'))
  } else {
    if (value.toString().length !== 8) {
      callback(new Error('请输入8位数字'))
    }
    callback()
  }
}

const dialogFormRules = reactive({
  name: [
    { required: true, message: '请输入', trigger: ['blur', 'change'] },
    { min: 1, max: 10, message: '10字符以内', trigger: ['blur', 'change'] }
  ],
  loginName: [
    { required: true, message: '请输入', trigger: ['blur', 'change'] },
    { min: 1, max: 10, message: '10字符以内', trigger: ['blur', 'change'] }
  ],
  userNumber: [
    { required: true, message: '请输入', trigger: ['blur', 'change'] },
    { type: 'number', message: '请输入8位数字1', trigger: ['blur', 'change'] },
    { validator: validate1, trigger: ['blur', 'change'] }
  ],
  userExpiryDate: [{ required: true, message: '请选择', trigger: ['blur', 'change'] }],
  deptId: [{ required: true, message: '请选择', trigger: ['blur', 'change'] }],
  status: [{ required: true, message: '请选择', trigger: ['blur', 'change'] }],
  phone: [
    { required: true, message: '请输入', trigger: 'blur' },
    { pattern: REGEX_phone, message: '请输入正确手机号' }
  ],
  level: [{ required: true, message: '请选择', trigger: ['blur', 'change'] }],
  notes: [
    { required: false, message: '请输入', trigger: ['blur', 'change'] },
    { min: 1, max: 100, message: '100字符以内', trigger: ['blur', 'change'] }
  ],
  age: [
    { required: false, message: '请输入', trigger: 'blur' },
    { pattern: /^[1-9]\d*$/, message: '仅支持录入正整数' }
  ],
  money: [
    { required: false, message: '请输入', trigger: 'blur' },
    { pattern: checkUtils.REGEX_money, message: '请输入最多两位小数金额' }
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
  requestDictDept()
  requestDictLevel()
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
const requestDictLevel = () => {
  getDictLevel().then((res) => {
    if (res.code === 20000) {
      optionState.levelOptions = res.data
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
  if (!optionState.levelOptions.length) {
    requestDictLevel()
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
  saveUser(params)
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
  const p = props.dialogType === 'add' ? addUser(params) : editUser(params)
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
$inputWidth: null;
// $inputWidth: 300px;

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
