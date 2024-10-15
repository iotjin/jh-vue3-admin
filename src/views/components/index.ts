import type { App } from 'vue'
import BaseDialog from '@/views/components/base-dialog/index.vue'

/**
 *  @description  全局注册组件
 */
export function setupComponent(app: App<Element>) {
  app.component('BaseDialog', BaseDialog)
}
