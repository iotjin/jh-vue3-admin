// 系统设置
interface DefaultSettings {
  /**
   * 系统title
   */
  title: string

  /**
   * 是否显示设置
   */
  showSettings: boolean

  /**
   * 是否显示多标签导航
   */
  tagsView: boolean

  /**
   * 是否固定头部
   */
  fixedHeader: boolean

  /**
   * 是否显示侧边栏Logo
   */
  sidebarLogo: boolean

  /**
   * topHeader显隐控制
   */
  topHeader: boolean

  /**
   * 导航栏布局
   */
  layout: string

  /**
   * 主题模式
   */
  theme: string

  /**
   * 主题色
   */
  themeColor: string

  /**
   * 布局大小
   */
  size: string

  /**
   * 语言
   */
  language: string
}

const defaultSettings: DefaultSettings = {
  title: 'jh-vue3-admin',
  showSettings: true,
  tagsView: true, // tagsView显隐控制
  fixedHeader: false,
  sidebarLogo: true,
  topHeader: false, // topHeader显隐控制
  layout: 'left',
  /**
   *  主题模式
   *
   * dark:暗黑模式
   * light: 明亮模式
   */
  theme: 'light',
  themeColor: '#409EFF',
  size: 'default', // default |large |small
  language: 'zh-cn' // zh-cn| en
}

export default defaultSettings
