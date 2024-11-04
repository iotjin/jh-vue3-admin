<template>
  <div>
    <h2 style="padding: 20px">函数实现</h2>
    <div style="margin: 20px">
      <el-table ref="dragTable2" :data="tableData2" row-key="id" :stripe="false">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="address" label="地址" />
        <el-table-column prop="date" label="日期" />
        <el-table-column label="Drag">
          <template #default="scope">
            <div class="drag-handler">
              <i-ep-rank />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--  -->
    <h2 style="padding: 20px">组件实现</h2>
    <div style="margin: 20px">
      <VueDraggable ref="dragRef" v-model="tableData1" chosen-class="sortable-ghost2" @start="onStart" @end="onEnd" target="tbody" :animation="150">
        <el-table ref="dragTable1" :data="tableData1" row-key="id" :stripe="false">
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="date" label="日期" />
          <el-table-column label="Drag">
            <template #default="scope">
              <div class="drag-handler">
                <i-ep-rank />
              </div>
            </template>
          </el-table-column>
        </el-table>
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type DraggableEvent, type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'
import { useDraggable } from 'vue-draggable-plus'

const dragRef = ref<UseDraggableReturn>()

const state = reactive({
  tableData1: [
    {
      id: '1',
      date: '2016-05-02',
      name: '王小虎1',
      address: '上海市普陀区金沙江路 100 弄'
    },
    {
      id: '2',
      date: '2016-05-04',
      name: '王小虎2',
      address: '上海市普陀区金沙江路 200 弄'
    },
    {
      id: '3',
      date: '2016-05-01',
      name: '王小虎3',
      address: '上海市普陀区金沙江路 300 弄'
    },
    {
      id: '4',
      date: '2016-05-03',
      name: '王小虎4',
      address: '上海市普陀区金沙江路 400 弄'
    }
  ],
  tableData2: [
    {
      id: '1',
      date: '2016-05-02',
      name: '王小虎1',
      address: '上海市普陀区金沙江路 100 弄'
    },
    {
      id: '2',
      date: '2016-05-04',
      name: '王小虎2',
      address: '上海市普陀区金沙江路 200 弄'
    },
    {
      id: '3',
      date: '2016-05-01',
      name: '王小虎3',
      address: '上海市普陀区金沙江路 300 弄'
    },
    {
      id: '4',
      date: '2016-05-03',
      name: '王小虎4',
      address: '上海市普陀区金沙江路 400 弄'
    }
  ]
})

const { tableData1, tableData2 } = toRefs(state)

onMounted(() => {})

const draggable = useDraggable('tbody', tableData2, {
  animation: 150,
  // dragClass: 'sortable-ghost1', // 设置拖拽样式类名
  // ghostClass: 'sortable-ghost2', // 设置拖拽停靠样式类名
  chosenClass: 'sortable-ghost3', // 设置选中样式类名
  onStart(e) {
    console.log('start', e)
  },
  onUpdate(e) {
    console.log('update', e)
  },
  // 结束拖拽后的回调函数
  onEnd(e) {
    console.log('onEnd', e)
    const { newIndex, oldIndex }: any = e
    console.log('拖动了行，当前序号：' + newIndex)
    console.log('tableData2', JSON.stringify(state.tableData2))

    // const currentRow = state.tableData2.splice(oldIndex, 1)[0]
    // state.tableData2.splice(newIndex, 0, currentRow)
  }
})

const onStart = (e: DraggableEvent) => {
  console.log('start', e)
}

const onEnd = (e: DraggableEvent) => {
  console.log('onEnd', e)
  const { newIndex, oldIndex }: any = e
  console.log('拖动了行，当前序号：' + newIndex)
  console.log('tableData1', JSON.stringify(state.tableData1))
}
</script>

<style lang="scss">
.custom-class {
  background: red;
}
.sortable-ghost1 {
  opacity: 0.8;
  background: #42b983 !important;
}
.sortable-ghost2 {
  opacity: 0.8;
  background: yellow !important;
}
.sortable-ghost3 {
  opacity: 0.8;
  background: red !important;
}
</style>

<style lang="scss" scoped>
.chosen {
  border: solid 1px #3089dc !important;
}

.drag-handler {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
