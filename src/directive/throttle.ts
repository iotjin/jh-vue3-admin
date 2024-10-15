import type { App } from 'vue'
import { useDebounceFn, useThrottleFn } from '@vueuse/core'

/**
 * 节流指令，用法：v-throttle
 *
 * v-throttle:500="handleInput" 节流时间 500ms
 * v-throttle:click="handleClick" 节流点击事件
 * v-throttle:500.click="handleClick" 节流点击事件，节流时间 500ms
 */
export function throttleDirective(app: App) {
  function throttle(func: Function, delay: number) {
    let flag = true
    return function (...args: any[]) {
      if (!flag) {
        // 如果未超过时间间隔，flag无效，不执行函数
        return
      }
      func(...args)
      flag = false // 在时间间隔内把状态位flag设为无效（false）
      setTimeout(() => {
        flag = true // 超过时间间隔把状态位flag设为有效（true）
      }, delay)
    }
  }

  app.directive('throttle', {
    mounted(el, binding) {
      const throttleTime = binding.arg ? Number(binding.arg) : 500 // 默认节流时间 500ms
      const eventType = binding.modifiers.input ? 'input' : 'click' // 默认事件类型为 click

      const throttledFunction = throttle(() => {
        binding.value()
      }, throttleTime)

      // const throttledFunction = useThrottleFn(() => {
      //   binding.value()
      // }, throttleTime)

      el.addEventListener(eventType, throttledFunction)
      el._onEvent = throttledFunction // 保存引用以便 unbind 时移除
      el._onEventType = eventType // 保存事件类型以便 unbind 时移除
    },
    unmounted(el) {
      const eventType = el._onEventType || 'click'
      el.removeEventListener(eventType, el._onEvent)
    }
  })
}
