<template>
  <div>
    <!-- dialog -->
    <el-dialog
      ref="dialogRef"
      v-model="isShowDialog"
      v-bind="$attrs"
      :title="dialogTitle"
      :top="top"
      :width="width"
      :draggable="draggable"
      :fullscreen="isFullscreen"
      :append-to-body="appendToBody"
      :destroy-on-close="destroyOnClose"
      :close-on-click-modal="closeOnClickModal"
      @open="onOpenDialog"
      @opened="onOpenedDialog"
      @closed="onClosedDialog"
      :show-close="false"
    >
      <!-- 自定义header -->
      <template #header="{ close, titleId, titleClass }">
        <div class="dialog-header">
          <div class="el-dialog__title">{{ dialogTitle }}</div>
          <button type="button" class="el-dialog__headerbtn icon-btn" style="margin-right: 40px" @click="onClickToggleFull">
            <el-icon :size="16" v-if="!isFullscreen"> <i-ep-full-screen /></el-icon>
            <svg-icon :size="20" v-if="isFullscreen" icon-class="dialog_exit-fullscreen" />
          </button>
          <button type="button" class="el-dialog__headerbtn icon-btn" style="margin-right: 12px" @click="close">
            <el-icon :size="20"><i-ep-close /></el-icon>
          </button>
        </div>
      </template>
      <div class="bs-dialog">
        <slot />
      </div>
      <template #footer v-if="isShowFooter">
        <div class="bs-dialog-footer">
          <el-button @click="onDialogCancel()"> {{ cancelText }} </el-button>
          <el-button :loading="dialogSubmitBtnLoading" type="primary" @click="onDialogSubmit()"> {{ confirmText }} </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs, onMounted, onBeforeMount, watch, computed, useAttrs } from 'vue'

const emit = defineEmits(['update:isShow', 'open', 'opened', 'closed', 'cancel', 'submit'])
const attrs = useAttrs()
const props = defineProps({
  // 是否显示
  isShow: { type: Boolean, default: false },
  // 标题：默认按类型设置为新增、编辑、查看，传值优先级更高
  title: { type: String, default: '' },
  isShowFooter: { type: Boolean, default: true },
  cancelText: { type: String, default: '取消' },
  confirmText: { type: String, default: '确定' },
  // Dialog CSS 中的 margin-top 值
  top: { type: String, default: '8vh' },
  // Dialog 的宽度
  width: { type: String, default: '55%' },
  // 支持拖拽 Dialog
  draggable: { type: Boolean, default: true },
  // Dialog 是否可以通过点击 modal 关闭
  closeOnClickModal: { type: Boolean, default: false },
  // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
  appendToBody: { type: Boolean, default: false },
  // Dialog 关闭时是否销毁内部元素，设置ture后拖动指令会失效
  destroyOnClose: { type: Boolean, default: false }
})

const state = reactive({
  // 弹框相关
  dialogTitle: '提示',
  isShowDialog: false,
  isFullscreen: false,
  dialogSubmitBtnLoading: false
})

const { isShowDialog, dialogTitle, isFullscreen, dialogSubmitBtnLoading } = toRefs(state)

// const dialogVisible = computed({
//   get: () => props.isShow,
//   set: (val) => {
//     emit('update:isShow', val)
//   }
// })

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

onMounted(() => {
  // console.log('base-dialog onMounted')
})

onBeforeMount(() => {
  // console.log('base-dialog onBeforeMount')
})

// 弹框相关
const onOpenDialog = () => {
  emit('open', {})
}

const onOpenedDialog = () => {
  emit('opened', {})
}

const onClosedDialog = () => {
  emit('closed', {})
}

const onDialogCancel = () => {
  if (attrs.onCancel) {
    emit('cancel', {})
  } else {
    state.isShowDialog = false
  }
}

const onDialogSubmit = () => {
  emit('submit', {})
}
// 父组件通过下面方式调用，注意需要在父组件中使用ref绑定，子组件需要暴露给父组件调用的方法和属性
// const dialogFormRef = ref()
// dialogRef.value.showSubmitBtnLoading(true)
const showSubmitBtnLoading = (isShow = false) => {
  state.dialogSubmitBtnLoading = isShow
}

const onClickToggleFull = () => {
  state.isFullscreen = !state.isFullscreen
}

// 暴露给父组件调用的方法和属性
defineExpose({
  showSubmitBtnLoading
})
</script>

<style lang="scss" scoped>
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-top: 16px;
  width: 24px;
  height: 24px;
}
.icon-btn:hover {
  background-color: #f0f0f0;
}
.bs-dialog-footer {
  text-align: center;
}
</style>
