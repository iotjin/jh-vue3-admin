// https://github.com/nhn/tui.editor
// doc: https://nhn.github.io/tui.editor/latest/
export default {
  minHeight: '200px',
  previewStyle: 'vertical', // 预览样式：vertical 为上下布局（编辑区在上，预览区在下）
  useCommandShortcut: true, // 启用快捷键（如 Ctrl+B 加粗等）
  useDefaultHTMLSanitizer: true, // 使用默认 HTML 清洗器，防止 XSS 注入攻击
  usageStatistics: false, // 不上报使用统计数据，推荐设为 false
  hideModeSwitch: false, // 显示 Markdown / WYSIWYG 模式切换按钮
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock']
  ]
}
