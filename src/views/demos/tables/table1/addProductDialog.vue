<template>
  <div>
    <!-- add product dialog -->
    <el-dialog :title="dialogTitle" v-model="isShowDialog" top="8vh" width="60%" :close-on-click-modal="false" @opened="onOpenedDialog" @closed="onClosedDialog">
      <div class="bs-dialog input-width" v-loading="dialogLoading">
        <h2>Form1</h2>
        <el-form ref="dialogFormRef" :model="dialogFormData" :inline="false" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
          <el-row v-for="(product, index) in dialogFormData.products" :key="index">
            <el-col :span="15">
              <el-form-item :label="'product ' + (index + 1)" :prop="`products.${index}.productName`" label-width="130px" :rules="dialogFormRules.product">
                <el-input v-model="product.productName" clearable />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button v-show="dialogFormData.products.length > 1" icon="i-ep-delete" type="danger" @click="removeProduct(index)">Remove</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="3" :md="5" style="margin-left: 60px">
              <el-button icon="i-ep-plus" type="primary" @click="addProduct">Add new product</el-button>
            </el-col>
          </el-row>
          <div style="margin-top: 20px" />
          <el-form-item label="备注:" prop="notes">
            <el-input v-model="dialogFormData.notes" placeholder="请输入备注" type="textarea" maxlength="100" show-word-limit clearable class="input-width" />
          </el-form-item>
          <el-form-item label="测试拦截切换1 - 记录最后选中值" label-width="300px">
            <el-select ref="selectRef1" v-model="dialogFormData.testSwitch0" placeholder="请选择" filterable clearable @click.native="onFocus()" @visible-change="visibleChange">
              <el-option v-for="item in optionList" :key="item.value" :label="item.label" :value="item.value" @click.native="handleClick(item)" />
            </el-select>
          </el-form-item>
          <el-form-item label="测试拦截切换2 - watch监听" label-width="300px">
            <el-select ref="selectRef2" v-model="dialogFormData.testSwitch1" placeholder="请选择" filterable clearable @visible-change="visibleChange">
              <el-option v-for="item in optionList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-form>
        <h2>Form2</h2>
        <div style="margin-top: 20px" />
        <el-form ref="dialogFormRef3" :model="formData2" :inline="false" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
          <el-form-item label="测试拦截切换3 - Proxy" label-width="300px">
            <el-select ref="selectRef3" v-model="formData2.testSwitch2" placeholder="请选择" filterable clearable @change="onChange">
              <el-option v-for="item in optionList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="备注:" label-width="300px">
            <el-input v-model="note2" placeholder="请输入备注" type="textarea" maxlength="100" show-word-limit clearable class="input-width" />
          </el-form-item>
        </el-form>
        <h2>Form3</h2>
        <div style="margin-top: 20px" />
        <el-form ref="dialogFormRef4" :model="formData3" :inline="false" :rules="dialogFormRules" label-width="120px" :disabled="dialogIsLook">
          <el-form-item label="测试拦截切换3 - Proxy" label-width="300px">
            <el-select ref="selectRef4" v-model="formData3.dialogFormData3.testSwitch3" placeholder="请选择" filterable clearable @change="onChange">
              <el-option v-for="item in optionList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="备注:" label-width="300px">
            <el-input v-model="formData3.dialogFormData3.note3" placeholder="请输入备注" type="textarea" maxlength="100" show-word-limit clearable class="input-width" />
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
  isRefresh: { type: Boolean, default: false }
})

const dialogFormRef = ref()
const selectRef1 = ref()
const selectRef2 = ref()
const selectRef3 = ref()
const selectRef4 = ref()
const state = reactive({
  // 弹框相关
  dialogTitle: '提示',
  isShowDialog: false,
  dialogLoading: false,
  dialogSubmitBtnLoading: false,
  dialogIsLook: false,
  initFormData: {},
  dialogFormData: {
    id: '',
    products: [
      {
        productId: '',
        productName: ''
      }
    ],
    notes: '',
    testSwitch0: '',
    testSwitch1: ''
  }
})
const { dialogTitle, isShowDialog, dialogLoading, dialogSubmitBtnLoading, dialogIsLook, dialogFormData } = toRefs(state)

const optionState = reactive({
  optionList: [
    { label: '选项1', value: 'value1' },
    { label: '选项2', value: 'value2' },
    { label: '选项3', value: 'value3' },
    { label: '选项4', value: 'value4' },
    { label: '选项5', value: 'value5' }
  ] as SelectOptionType[],
  switchValue: 'value3',
  lastSelect: ''
})
const { optionList } = toRefs(optionState)

const dialogFormRules = reactive({
  product: [
    { required: true, message: '请输入产品', trigger: ['blur', 'change'] },
    { min: 1, max: 10, message: '10字符以内', trigger: ['blur', 'change'] }
  ],
  notes: [
    { required: false, message: '请输入', trigger: ['blur', 'change'] },
    { min: 1, max: 100, message: '100字符以内', trigger: ['blur', 'change'] }
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

watch(
  () => props.isRefresh,
  (val) => {
    console.log('Request data')
    state.dialogLoading = true
    setTimeout(() => {
      state.dialogLoading = false
    }, 1000)
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

const addProduct = () => {
  state.dialogFormData.products.push({
    productId: '',
    productName: ''
  })
}
const removeProduct = (index: number) => {
  state.dialogFormData.products.splice(index, 1)
}

// 选项拦截 方法1
const onFocus = () => {
  optionState.lastSelect = state.dialogFormData.testSwitch0
}
const handleClick = (item: SelectOptionType) => {
  if (item.value === optionState.switchValue) {
    ElMessageBox.confirm('是否切换到选项三', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        resetInputBlur()
      })
      .catch(() => {
        state.dialogFormData.testSwitch0 = optionState.lastSelect
        resetInputBlur()
      })
  }
}

// 选项拦截 方法2
watch(
  () => state.dialogFormData.testSwitch1,
  (newValue, oldValue) => {
    if (newValue === optionState.switchValue) {
      ElMessageBox.confirm('是否切换到选项三', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          resetInputBlur()
        })
        .catch(() => {
          state.dialogFormData.testSwitch1 = oldValue
          resetInputBlur()
        })
    }
  }
)

const onDialogSubmit = () => {
  console.log('form2', JSON.stringify(formData2))
  console.log('form3', JSON.stringify(formData3))
  dialogFormRef.value.validate((valid: any) => {
    if (valid) {
      submitRequest()
    }
  })
}

const submitRequest = () => {
  const params = JSON.parse(JSON.stringify(state.dialogFormData))
  console.log('form1', JSON.stringify(params))
  const msg = props.dialogType === 'add' ? '新增成功!' : '编辑成功!'
  state.dialogSubmitBtnLoading = true
  setTimeout(() => {
    state.dialogSubmitBtnLoading = false

    ElMessage.success(msg)
    state.isShowDialog = false
    emit('success', {})
  }, 1500)
}

// Proxy 拦截
let formData2 = reactive({
  testSwitch2: '',
  note2: ''
})
const { testSwitch2, note2 } = toRefs(formData2)

formData2 = new Proxy(formData2, {
  // get(target: any, key, value) {
  //   console.log('get - target', target)
  //   console.log('get - key', key)
  //   console.log('get - value', value)
  //   console.log('target[key]', JSON.stringify(target[key]))
  //   return Reflect.get(target, key, value)
  // },
  set: (target: any, key, value) => {
    console.log('target', JSON.stringify(target))
    console.log('key', JSON.stringify(key))
    console.log('value', JSON.stringify(value))
    if (key === 'testSwitch2' && value === optionState.switchValue) {
      ElMessageBox.confirm('是否切换到选项三', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          target[key] = value
          resetInputBlur()
        })
        .catch(() => {
          resetInputBlur()
        })
    } else {
      target[key] = value
    }
    // Reflect.set(target, prop, value)
    return true
  }
})

function visibleChange(visible: boolean) {
  console.log('visible', JSON.stringify(visible))
  if (!visible) {
    resetInputBlur()
  }
}

function onChange(val: any) {
  console.log('onChange - val:', val)
  resetInputBlur()
}

function resetInputBlur() {
  nextTick(() => {
    selectRef1.value.blur()
    selectRef2.value.blur()
    selectRef3.value.blur()
    selectRef4.value.blur()

    // selectRef1.value.$el.querySelector('input').blur()
    // selectRef2.value.$el.querySelector('input').blur()
    // selectRef3.value.$el.querySelector('input').blur()
    // selectRef4.value.$el.querySelector('input').blur()
  })
}

// Proxy 拦截 多层嵌套对象
let formData3 = reactive({
  dialogFormData3: {
    testSwitch3: '',
    note3: ''
  }
})

formData3 = createProxy(formData3)

function createProxy(data: any) {
  return new Proxy(data, {
    set(target, key, value) {
      console.log('target', JSON.stringify(target))
      console.log('key', JSON.stringify(key))
      console.log('value', JSON.stringify(value))
      if (key === 'testSwitch3' && value === optionState.switchValue) {
        ElMessageBox.confirm('是否切换到选项三', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            target[key] = value
            resetInputBlur()
          })
          .catch(() => {
            resetInputBlur()
          })
      } else {
        target[key] = value
      }
      // 代理深层嵌套的对象
      if (typeof value === 'object' && value !== null) {
        target[key] = createProxy(value)
      }
      return true
    },
    get(target, key) {
      // 如果是对象，则递归代理
      const value = target[key]
      if (typeof value === 'object' && value !== null) {
        return createProxy(value)
      }
      return value
    }
  })
}

/*
// 创建一个普通对象
const obj = { name: 'Vue', framework: true }

// 使用 Proxy 创建响应式对象
const reactiveObj = new Proxy(obj, {
  get(target: any, key, value) {
    console.log('get - target', target)
    console.log('get - key', key)
    console.log('get - value', value)
    console.log('target[key]', JSON.stringify(target[key]))
    return Reflect.get(target, key, value)
  },
  set(target, key, value, receiver) {
    // 在设置属性时进行拦截
    console.log(`设置属性 ${key as string} 为 ${value}`)
    return Reflect.set(target, key, value, receiver)
  }
})

// 通过 reactiveObj 读取属性
console.log(reactiveObj.name) // 会触发 get 拦截
// 通过 reactiveObj 设置属性
reactiveObj.version = 3 // 会触发 set 拦截

*/
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
