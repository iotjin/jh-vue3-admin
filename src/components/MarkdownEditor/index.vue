<!-- toast-ui/editor -->
<template>
  <div :id="editorId" />
</template>

<script setup>
// import 'codemirror/lib/codemirror.css' // codemirror
import '@toast-ui/editor/dist/toastui-editor.css' // editor style

import Editor from '@toast-ui/editor'
import defaultOptions from './default-options'

// i18n
import '@toast-ui/editor/dist/i18n/zh-cn'
import '@toast-ui/editor/dist/i18n/zh-tw'

// 文本颜色选择器
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
// import colorPicker from 'tui-color-picker'

// 代码高亮
import 'prismjs/themes/prism.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight' // 不是针对所有语言的代码高亮
// @ts-ignore
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js'

// const colorSyntaxOptions = {
//   preset: [
//     // 灰黑色调
//     '#181818',

//     // 基础色
//     '#000000', '#FFFFFF',

//     // 常用主色
//     '#FF0000', // 红
//     '#FFA500', // 橙
//     '#FFFF00', // 黄
//     '#008000', // 绿
//     '#0000FF', // 蓝
//     '#4B0082', // 靛
//     '#EE82EE', // 紫

//     // 网页常见颜色
//     '#808080', // 灰
//     '#A52A2A', // 棕
//     '#00FFFF', // 青
//     '#FFC0CB', // 粉
//     '#FFD700', // 金
//     '#800080' // 紫
//   ]
// }

// defineEmits 是 Vue 3 中的一个组合式 API，用于定义组件的事件, 文档：https://vuejs.org/api/sfc-script-setup.html#defineemits
// 替代 Vue 2 中的 this.$emit 方法，向父组件发出事件，然后父组件可以监听这些事件并作出响应
// 如果使用了defineEmits，vue会从attrs中剥离掉这些事件

const emit = defineEmits(['update:modelValue', 'uploadImageEvent'])
const attrs = useAttrs()
/*
    update:modelValue
    是 Vue 3 中的 v-model 双向绑定事件，Vue 会监听这个事件来实现 "双向绑定"，当子组件的 modelValue 发生变化时，父组件会接收到这个事件，并更新父组件中绑定的变量。
  
    通过 defineProps 接收 modelValue, 通过 defineEmits 定义 update:modelValue 事件
  
    v-model 默认绑定 prop：`modelValue`
    v-model 默认触发事件：`update:modelValue`
  */

// props
const props = defineProps({
  // v-model 双向绑定
  // 注意 Vue 3 中的 v-model 默认 prop 名是 `modelValue`
  modelValue: { type: String, default: '' },
  id: {
    type: String,
    default: () => 'markdown-editor-' + Date.now() + '-' + Math.floor(Math.random() * 1000)
  },
  options: { type: Object, default: () => ({}) },
  mode: { type: String, default: 'markdown' }, // wysiwyg | markdown
  height: { type: String, default: '300px' }, // 300px | auto
  language: { type: String, default: 'zh-CN' }, // 'en-US' | 'zh-CN' | 'zh-TW'
  // previewStyle: tab | vertical
  isViewer: { type: Boolean, default: false }
})

let editor = null
const editorId = ref(props.id)

const instance = getCurrentInstance()

// 用 computed 判断父组件是存在 uploadImageEvent
const hasUploadImageListener = computed(() => {
  if (!instance?.vnode) return false

  // 判断 props 中是否有 uploadImageEvent 事件
  return typeof instance.vnode.props?.onUploadImageEvent === 'function'
})

const editorOptions = computed(() => {
  const options = Object.assign({}, defaultOptions, props.options)
  options.initialEditType = props.mode
  options.height = props.height
  options.language = props.language
  options.plugins = [
    colorSyntax,
    // [colorSyntax, colorSyntaxOptions],
    // [colorSyntax, { colorPicker }],
    codeSyntaxHighlight
  ]
  return options
})

// 监听 props
watch(
  () => props.modelValue, // 监听 modelValue 的变化
  (newVal, oldVal) => {
    if (!editor) return
    if (props.isViewer) {
      editor.setMarkdown(newVal)
    } else if (newVal !== oldVal && newVal !== editor.getMarkdown()) {
      editor.setMarkdown(newVal)
    }
  }
)
watch(
  () => props.language,
  () => {
    destroyEditor()
    initEditor()
  }
)
watch(
  () => props.height,
  (newVal) => {
    if (editor) editor.height(newVal)
  }
)
watch(
  () => props.mode,
  (newVal) => {
    if (editor) editor.changeMode(newVal)
  }
)
watch(
  () => props.isViewer,
  () => {
    destroyEditor()
    initEditor()
  }
)

onMounted(() => {
  initEditor()
})

onBeforeUnmount(() => {
  destroyEditor()
})

const initEditor = () => {
  const el = document.getElementById(editorId.value)
  if (!el) return

  if (props.isViewer) {
    editor = Editor.factory({
      el,
      ...editorOptions.value,
      viewer: true
    })
  } else {
    editor = new Editor({
      el,
      ...editorOptions.value
    })

    editor.on('change', () => {
      const content = editor.getMarkdown()
      emit('update:modelValue', content) // 触发 update:modelValue 事件，更新父组件的 modelValue
    })
  }

  if (props.modelValue) {
    editor.setMarkdown(props.modelValue)
  }

  editor.addHook('addImageBlobHook', (file, cb) => {
    if (hasUploadImageListener.value) {
      emit('uploadImageEvent', file, cb)
    } else {
      const reader = new FileReader()
      reader.onload = ({ target }) => {
        cb(target?.result || '')
      }
      reader.readAsDataURL(file)
    }
  })
}

const destroyEditor = () => {
  if (editor) {
    editor.off('change')
    editor.destroy()
    editor = null
  }
}

// 暴露给父组件的方法
// 用法： 在父组件中使用 ref 绑定该组件，然后调用 setValue、getValue、setHtml、getHtml 方法
// 例如：
// <MarkdownEditor ref="markdownEditorRef" />
// const markdownEditorRef = ref()
// markdownEditorRef.value.setHtml('新的内容')
// markdownEditorRef.value.getHtml()

defineExpose({
  setValue: (val) => editor?.setMarkdown(val),
  getValue: () => editor?.getMarkdown(),
  setHtml: (val) => editor?.setHTML(val),
  getHtml: () => editor?.getHTML()
})
</script>

<style lang="scss" scoped>
/* 可添加一些默认边框或自定义样式 */
</style>
