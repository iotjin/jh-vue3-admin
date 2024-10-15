import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { setupStore } from '@/store'
import { setupComponent } from '@/views/components'
import { setupDirective } from '@/directive'

import '@/permission'

// 本地SVG图标
import 'virtual:svg-icons-register'

// 国际化
import i18n from '@/lang/index'

// 样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css' // 放在自定义样式前,防止覆盖自定义样式
import '@/styles/index.scss'

const app = createApp(App)
// 全局注册 组件
setupComponent(app)
// 全局注册 自定义指令(directive)
setupDirective(app)
// 全局注册 状态管理(store)
setupStore(app)

app.use(router).use(i18n).mount('#app')
