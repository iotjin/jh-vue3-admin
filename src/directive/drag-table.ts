import type { App } from 'vue'
import { useDraggable } from 'vue-draggable-plus'

/**
 * el-table拖拽排序指令，用法：v-drag-table
 *
 * 使用指令v-drag-table实现el-table拖拽排序，必须要设置row-key="id"，并且id是唯一的，table ref定义为tableRef
 */
export function dragTableDirective(app: App) {
  const list = ref([])

  // 使 v-drag-table 在el-table中可用
  app.directive('drag-table', {
    mounted(el, binding) {
      // console.log('el', el)
      // console.log('binding', binding)
      // console.log('binding.value', binding.value)
      const vm = binding.instance
      // console.log('vm', vm)
      // console.log('tableRef', vm?.$refs.tableRef)
      // console.log('tableRef.data', vm?.$refs.tableRef.data)
      const tbody = el.querySelector('tbody')
      if (!tbody) {
        console.warn('Tbody element not found!')
        return
      }

      list.value = vm?.$refs.tableRef.data || []

      const { onStart, onEnd } = binding.value || {}
      const dragClass = binding.value?.dragClass || 'dragClass'

      const draggable = useDraggable(tbody, list, {
        animation: 150,
        ghostClass: dragClass, // 使用外部传递的样式类名
        handle: '.el-table__row',
        onStart: (evt) => {
          if (onStart) {
            onStart(evt)
          }
        },
        onEnd: (evt: any) => {
          if (onEnd) {
            onEnd(evt)
          }
        }
      })
    },
    // 当传进来的值更新的时候触发
    updated(el, { value }) {
      el.$value = value
    }
  })
}
