<template>
  <div>
    <div class="bs-page-body">
      <div style="height: 200px; width: auto; background: yellow" />

      <!-- Table start -->
      <div class="bs-page-table">
        <div class="bs-table-btns">
          <el-button type="primary" icon="i-ep-plus" @click="onClickAdd"> 新增 </el-button>
        </div>
        <div style="margin: 20px 0" />
        <div ref="scrollbarRef0" class="custom-scrollbar" style="width: calc(100%)">
          <div class="custom-scrollbar-content" :style="{ width: scrollbarWidth0 }" />
        </div>
        <div style="margin: 20px 0" />
        <el-table ref="tableRef" class="bs-table" v-loading="tableLoading" :data="tableData" max-height="500" border stripe fit>
          <el-table-column label="日期" prop="date" width="800" />
          <el-table-column label="姓名" prop="name" width="800" />
          <el-table-column label="地址" prop="address" width="800" />
          <el-table-column label="地址" prop="address" width="500" />
          <!-- <el-table-column fixed="right" label="操作" width="200"> -->
          <el-table-column label="操作" width="200">
            <template #default="scope">
              <!-- scope.$index 从0开始 -->
              <el-button size="small" icon="i-ep-delete" type="primary" @click="onClickRemoveRow(scope.$index)">Remove</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- Table end -->

      <div style="height: 400px; width: auto; background: yellow" />

      <div style="margin-top: 50px" />

      <div ref="scrollbarRef" class="custom-scrollbar custom-scrollbar2" :style="{ width: scrollbarBgWidth }">
        <div class="custom-scrollbar-content" :style="{ width: scrollbarWidth }" />
      </div>

      <!-- <div class="bottom-div">我在底部一直悬停</div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()

const scrollbarRef0 = ref()
const scrollbarRef = ref()
const tableRef = ref()
const tableScrollbarDom = ref<HTMLElement | null>(null)

const state = reactive({
  tableLoading: false,
  tableData: [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ] as any[],
  cellBtnLoading: '',
  scrollbarWidth0: 0 as number | string,
  scrollbarWidth: 0 as number | string
})
const { tableLoading, tableData, scrollbarWidth0, scrollbarWidth } = toRefs(state)

const scrollbarBgWidth = computed(() => {
  const sidebarWidth = appStore.device === 'mobile' ? 0 : appStore.sidebar.opened ? 210 : 54
  const other = 15 * 2 + 12 * 2 + 2 * 2 //15 padding, table 左右有12px padding, table 滚动条有2px margin
  return `calc(100% - ${sidebarWidth + other}px)`
})

// 监听滚动条,两个滚动条滚动同步
watch(
  () => state.scrollbarWidth0,
  (val) => {
    nextTick(() => {
      const tableScrollbar = tableRef.value.$el.querySelector('.el-scrollbar__wrap') as HTMLElement
      tableScrollbar.addEventListener('scroll', () => {
        // 自定义滚动条滚动条与表格底部同步
        const scrollLeft = tableScrollbar.scrollLeft || 0
        scrollbarRef0.value.scrollTo(scrollLeft, 0)
      })

      scrollbarRef0.value.addEventListener('scroll', () => {
        // 表格底部滚动条与自定义滚动条同步
        const scrollLeft = scrollbarRef0.value.scrollLeft || 0
        tableScrollbar.scrollTo(scrollLeft, 0)
      })
    })
  },
  { deep: true }
)

// 监听滚动条,两个滚动条滚动同步
watch(
  () => state.scrollbarWidth,
  (val) => {
    nextTick(() => {
      const tableScrollbar = tableRef.value.$el.querySelector('.el-scrollbar__wrap') as HTMLElement
      tableScrollbar.addEventListener('scroll', () => {
        // 自定义滚动条滚动条与表格底部同步
        const scrollLeft = tableScrollbar.scrollLeft || 0
        scrollbarRef.value.scrollTo(scrollLeft, 0)
      })

      scrollbarRef.value.addEventListener('scroll', () => {
        // 表格底部滚动条与自定义滚动条同步
        const scrollLeft = scrollbarRef.value.scrollLeft || 0
        tableScrollbar.scrollTo(scrollLeft, 0)
      })
    })
  },
  { deep: true }
)

onMounted(() => {
  window.addEventListener('resize', handleTableScroll) // 监听窗口大小变化
  requestList()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleTableScroll) // 移除监听
})

const requestList = () => {
  state.tableLoading = true
  setTimeout(() => {
    var tempList = []
    for (let i = 0; i < 40; i++) {
      tempList.push({
        date: 2016 + i + '-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      })
    }
    state.tableData = tempList
    state.tableLoading = false
    setScrollWidth()
  }, 1000)
}

const setScrollWidth = () => {
  nextTick(() => {
    // const tableElement = tableRef.value.$el
    // console.log('tableElement', tableElement)
    // const tableBody0 = tableRef.value.$refs.bodyWrapper
    // console.log('tableBody0', tableBody0)
    // console.log('555', tableRef.value.$refs.scrollBarRef)
    // console.log('666', tableRef.value.$refs.scrollBarRef.$refs)
    // const tableBody = tableElement.querySelector('.el-table__body-wrapper') as HTMLElement
    // console.log('tableBody', tableBody)
    // const tableScrollbar = tableElement.querySelector('.el-scrollbar__wrap') as HTMLElement
    // console.log('tableScrollbar', tableScrollbar)

    const tableScrollbar = tableRef.value.$el.querySelector('.el-scrollbar__wrap') as HTMLElement
    tableScrollbarDom.value = tableScrollbar
    scrollbarWidth0.value = `${tableScrollbar.scrollWidth}px`
    scrollbarWidth.value = `${tableScrollbar.scrollWidth}px`
  })
}

const handleTableScroll = () => {
  setScrollWidth()
}

// 操作按钮
const onClickAdd = () => {
  console.log('新增')
}
const onClickRemoveRow = (index: number) => {
  tableData.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.bs-page-body :deep(.el-table__header .el-table__cell) {
  background: #ddeeff !important;
}

// .bs-page-body :deep(.el-table th) {
//   background: red !important;
// }

// .bs-page-body ::v-deep .el-scrollbar__bar.is-horizontal {
//   height: 18px;
// }

// 横向滚动条的高度
.bs-page-body :deep(.el-scrollbar__bar.is-horizontal) {
  height: 18px;
  display: initial !important;
}
// 横向滚动条的滑块
.bs-page-body :deep(.el-scrollbar__bar.is-horizontal .el-scrollbar__thumb) {
  border-radius: 3px; //滑块的圆角
  background: red; //滑块的背景颜色
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15); //滑块的阴影
}

// 纵向滚动条的宽度
.bs-page-body :deep(.el-scrollbar__bar.is-vertical) {
  width: 18px;
}
.bs-page-body :deep(.el-scrollbar__bar.is-vertical .el-scrollbar__thumb) {
  border-radius: 3px;
  background: red;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
}

.custom-scrollbar {
  width: 100%;
  overflow-x: auto;
}

.custom-scrollbar-content {
  height: 1px; // 高度不设置的话滚动条出不来
}

.custom-scrollbar2 {
  position: fixed;
  bottom: 0;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: white;
  margin: 0 14px; // table 左右有12px padding, table 滚动条有2px margin
  z-index: 99;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 18px;
  height: 18px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: green;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: red;
}

.bottom-div {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  opacity: 0.5;
  padding: 10px 0;
  z-index: 99;
}
</style>
