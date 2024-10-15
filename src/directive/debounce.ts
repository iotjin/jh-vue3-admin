import type { App } from 'vue'

/**
 * 防抖指令，用法：v-debounce
 *
 * v-debounce:500="handleInput" 防抖时间 500ms
 * v-debounce:click="handleClick" 防抖点击事件
 * v-debounce:500.click="handleClick" 防抖点击事件，防抖时间 500ms
 */
export function debounceDirective(app: App) {
  function debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout>
    return function (...args: any[]) {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  app.directive('debounce', {
    mounted(el, binding) {
      const debounceTime = binding.arg ? Number(binding.arg) : 300 // 默认防抖时间 300ms
      const eventType = binding.modifiers.click ? 'click' : 'input' // 默认事件类型为 input

      const debouncedFunction = debounce(() => {
        binding.value()
      }, debounceTime)

      el.addEventListener(eventType, debouncedFunction)
      el._onEvent = debouncedFunction // 保存引用以便 unbind 时移除
      el._onEventType = eventType // 保存事件类型以便 unbind 时移除
    },
    unmounted(el) {
      const eventType = el._onEventType || 'input'
      el.removeEventListener(eventType, el._onEvent)
    }
  })
}
