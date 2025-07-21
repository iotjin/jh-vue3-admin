<template>
  <div style="padding: 20px; background: white">
    <div class="editor-container">
      <el-tag>
        Markdown is based on
        <a href="https://github.com/nhnent/tui.editor" target="_blank" style="color: red">tui.editor</a> ，simply wrapped with Vue.
        <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html" style="color: red"> Documentation </a>
      </el-tag>
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">Basic:</el-tag>
      <MarkdownEditor v-model="content1" height="500px" />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">Markdown Mode:</el-tag>
      <MarkdownEditor ref="markdownEditorRef" v-model="content2" :options="{ hideModeSwitch: true, previewStyle: 'tab' }" height="200px" />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">Customize Toolbar:</el-tag>
      <!-- <MarkdownEditor v-model="content3" :options="{ toolbarItems }" /> -->
      <MarkdownEditor v-model="content3" :options="{ toolbarItems: [['heading', 'bold', 'italic'], ['image']] }" @uploadImageEvent="uploadImage" />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">I18n:</el-tag>
      <el-alert :closable="false" title="You can change the language of the admin system to see the effect" type="success" />
      <MarkdownEditor ref="markdownEditorRef2" v-model="content4" :language="language" height="300px" />
    </div>

    <div class="editor-container" style="display: flex; justify-content: space-around">
      <el-button style="margin-top: 80px" type="primary" icon="i-ep-document" @click="getHtmlContent">Get HTML</el-button>
      <el-button style="margin-top: 80px" type="primary" icon="i-ep-document" @click="getMarkdownContent">Get Markdown - 组件内</el-button>
      <el-button style="margin-top: 80px" type="primary" icon="i-ep-document" @click="getMarkdownContent2">Get Markdown2 - 页面实现</el-button>
    </div>

    <div v-html="htmlValue" />
    <pre>{{ markdownValue }}</pre>

    <!-- Dialogs -->
    <el-dialog title="Html内容预览" v-model="isShowDialog" destroy-on-close>
      <!-- <div v-html="htmlValue" /> -->
      <MarkdownEditor v-model="content2" is-viewer />
    </el-dialog>

    <el-dialog title="Markdown内容预览-组件内" v-model="isShowDialog2" destroy-on-close>
      <!-- <pre style="white-space: pre-wrap">{{ markdownValue }}</pre> -->
      <!-- <MarkdownEditor v-model="markdownValue" is-viewer /> -->
      <MarkdownEditor v-model="content4" is-viewer />
    </el-dialog>

    <el-dialog title="Markdown内容预览-页面实现" v-model="isShowDialog3" @open="onDialogOpen">
      <div id="viewer-container" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'

// 编辑内容
const content = `**This is test**
  
  * vue
  * element
  * webpack
  
  ## Normal Table
  
  | Name  | Age | City     |
  |-------|-----|----------|
  | Alice | 25  | Tokyo    |
  | Bob   | 30  | New York |
  | Eva   | 28  | London   |
  
  ## Color Syntax Plugin
  
  <span style="color:#86c1b9">Click the color picker button on the toolbar!</span>
  
  ## Code Syntax Highlighting Plugin
  
  \`\`\`javascript
  console.log('foo')
  \`\`\`
  
  \`\`\`html
  <div id="editor"><span>baz</span></div>
  \`\`\`
  `

const introduction = `![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
  
  # Awesome Editor!
  
  It has been *released as opensource in 2018* and has~~continually~~evolved to **receive 10k GitHub ⭐️ Stars**.
  
  ## Create Instance
  
  You can create an instance with the following code and use \`getHtml()\` and \`getMarkdown()\` of the [Editor](https://github.com/nhn/tui.editor).
  
  \`\`\`js
  const editor = new Editor(options);
  \`\`\`
  
  | name | type | description |
  | ---- | ---- | ----------- |
  | el | \`HTMLElement\` | container element |
  
  ## Features
  
  * CommonMark + GFM Specifications
      * Live Preview
      * Scroll Sync
      * Auto Indent
      * Syntax Highlight
          1. Markdown
          2. Preview
  
  ## Support Wrappers
  
  > * Wrappers
  >     1. [x] React
  >     2. [x] Vue
  >     3. [ ] Ember
  `

const markdownEditorRef = ref()
const markdownEditorRef2 = ref()

const state = reactive({
  editor: null as any,
  content1: content,
  content2: content,
  content3: content,
  content4: introduction,
  htmlValue: '',
  markdownValue: '',
  languageTypeList: {
    en: 'en-US',
    zh: 'zh-CN',
    // 繁体
    zh_tw: 'zh-TW'
  },
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike']
    // ['hr', 'quote'],
    // ['ul', 'ol', 'task', 'indent', 'outdent'],
    // ['table', 'image', 'link'],
    // ['code', 'codeblock']
  ],
  isShowDialog: false,
  isShowDialog2: false,
  isShowDialog3: false
})

const { content1, content2, content3, content4, htmlValue, markdownValue, toolbarItems, isShowDialog, isShowDialog2, isShowDialog3 } = toRefs(state)

const language = computed(() => state.languageTypeList.zh)

// Custom picture upload
function uploadImage(file: File, callback: (url: string) => void) {
  console.log('file', file)
  console.log('callback', callback)
  const reader = new FileReader()
  reader.onload = ({ target }) => {
    callback((target?.result as string) || '')
  }
  reader.readAsDataURL(file)
}

// 获取 HTML 内容
function getHtmlContent() {
  if (markdownEditorRef.value) {
    state.htmlValue = markdownEditorRef.value.getHtml()
    state.isShowDialog = true
  }
}

// 获取 Markdown 内容（组件方法）
function getMarkdownContent() {
  if (markdownEditorRef2.value) {
    state.markdownValue = markdownEditorRef2.value.getValue()
    state.isShowDialog2 = true
  }
}

// 获取 Markdown 内容（页面直接渲染 Viewer）
function getMarkdownContent2() {
  if (markdownEditorRef2.value) {
    state.markdownValue = markdownEditorRef2.value.getValue()
    state.isShowDialog3 = true
  }
}

function onDialogOpen() {
  // 等 Dialog 内容渲染完成再初始化 Viewer
  nextTick(() => {
    const container = document.getElementById('viewer-container')
    if (container) {
      state.editor?.destroy()
      state.editor = Editor.factory({
        el: container,
        viewer: true,
        initialValue: state.markdownValue
        // height: '300px'
      })
    }
  })
}

onBeforeUnmount(() => {
  state.editor.destroy()
})
</script>

<style lang="scss" scoped>
.editor-container {
  margin-bottom: 30px;
}
.tag-title {
  margin-bottom: 5px;
}
</style>
