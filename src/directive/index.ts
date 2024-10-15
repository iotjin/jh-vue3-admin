import type { App } from 'vue'
import { hasPerm } from './permission'
import { copyDirective } from './copy'
import { debounceDirective } from './debounce'
import { throttleDirective } from './throttle'
import { wavesDirective, dragDirective } from '@/directive/customDirective'

/**
 * 自定义全局指令 directive：v-xxx
 */
export function setupDirective(app: App<Element>) {
  // 权限指令，用法：v-hasPerm
  // 使 v-hasPerm 在所有组件中都可用
  app.directive('hasPerm', hasPerm)
  // 复制指令，用法：v-copy
  copyDirective(app)
  // 防抖指令，用法：v-debounce
  debounceDirective(app)
  // 节流指令，用法：v-throttle
  throttleDirective(app)
  // 按钮波浪指令，用法：v-waves
  wavesDirective(app)
  // 自定义拖动指令，用法：v-drag
  dragDirective(app)
}
