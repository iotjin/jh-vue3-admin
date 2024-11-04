<template>
  <div class="app-container">
    <el-row>
      <el-col :span="22">
        <el-transfer v-model="ids" :data="statusList" :filter-method="filterMethod" :titles="['Select All', 'Status']" target-order="push" filterable @change="handleChange" />
      </el-col>
    </el-row>
    <div style="margin: 10px 0; font-weight: bold; font-size: 25px">Selected Status:</div>
    <div style="margin-left: 10px; margin-bottom: 10px">Drag to sort status</div>
    <div v-if="selectStatusList.length" class="dndList">
      <VueDraggable ref="dragRef" v-model="selectStatusList" chosen-class="chosen" @start="onStart" @end="onEnd">
        <div v-for="(item, index) in selectStatusList" :key="index" class="list-item-bg">
          <div style="display: flex; align-items: center">
            <div style="flex: 9">
              <div style="color: #000; font-weight: bold">{{ item.label }}</div>
              <div style="color: #000; margin-top: 10px">
                <span style="margin-right: 5px">Can Read</span>
                <el-switch v-model="item.canRead" @change="onChange" />
                <span style="margin-right: 10px" />
                <span style="margin-right: 5px">Can Write</span>
                <el-switch v-model="item.canWrite" @change="onChange" />
              </div>
            </div>
            <div style="color: #000; font-weight: bold">{{ item.order }}</div>
          </div>
        </div>
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDictStatus } from '@/api/base/base'
import { type DraggableEvent, type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'

const emit = defineEmits(['change'])

const props = defineProps({
  // add，edit
  type: { type: String, default: 'add' },
  editStatusList: { type: Array, default: () => [] }
})

const dialogFormRef = ref()
const dragRef = ref<UseDraggableReturn>()
const state = reactive({
  // 弹框相关
  statusList: [] as any,
  selectStatusList: [] as any,
  ids: []
})
const { statusList, selectStatusList, ids } = toRefs(state)

watch(
  () => props.editStatusList,
  (val) => {
    handleEditData(val)
  },
  { immediate: true }
)

onMounted(() => {
  requestDictStatus()
})

const requestDictStatus = () => {
  getDictStatus().then((res) => {
    if (res.code === 20000) {
      var list = res.data
      var tempArr = [] as any
      for (let i = 0; i < list.length; i++) {
        tempArr.push({
          key: i,
          label: list[i].label,
          value: list[i].value
        })
        if (props.type === 'add') {
          tempArr[i].canRead = false
          tempArr[i].canWrite = false
        }
      }
      state.statusList = JSON.parse(JSON.stringify(tempArr))
    } else {
      ElMessage.warning(res.msg)
    }
  })
}

function handleEditData(val: any) {
  if (props.type === 'add') {
    return
  }
  var tempArr = [] as any
  for (let i = 0; i < val.length; i++) {
    var item = {
      key: i,
      label: val[i].statusName,
      value: val[i].statusId,
      canRead: val[i].canRead,
      canWrite: val[i].canWrite,
      order: val[i].order
    }
    const foundIndex = state.statusList.findIndex((item: Record<string, any>) => item.value === val[i].statusId)
    if (foundIndex !== -1) {
      item.key = state.statusList[foundIndex].key
    }
    tempArr.push(item)
  }
  tempArr.sort((a: any, b: any) => {
    return a.order !== b.order ? a.order - b.order : a.label.localeCompare(b.label)
    // if (a.order !== b.order) {
    //   return a.order - b.order // 按 order 升序排列
    // } else {
    //   return a.label.localeCompare(b.label) // 按字母表顺序排列
    // }
  })
  for (let i = 0; i < tempArr.length; i++) {
    tempArr[i].order = i
  }
  state.ids = tempArr.map((item: Record<string, any>) => item.key)
  state.selectStatusList = tempArr
}

const filterMethod = (query: string, item: Record<string, any>) => {
  var tempInput = ''
  const tempItem = item.label.toLowerCase()
  if (query) {
    tempInput = query.toLowerCase()
  }
  return tempItem.indexOf(tempInput) > -1
}

const handleChange = (value: number[] | string[], direction: 'left' | 'right', movedKeys: string[] | number[]) => {
  //   console.log(value, direction, movedKeys);
  // console.log('ids', JSON.stringify(this.ids))
  var tempArr = [] as any
  var status = JSON.parse(JSON.stringify(state.statusList))
  state.ids.forEach((id, index) => {
    const foundIndex = state.statusList.findIndex((item: Record<string, any>) => item.key === id)
    if (foundIndex !== -1) {
      var item = status[foundIndex]
      item.order = index
      tempArr.push(item)
    }
  })
  tempArr.forEach((item: Record<string, any>, index: number) => {
    const foundIndex = state.selectStatusList.findIndex((item2: Record<string, any>) => item.value === item2.value)
    if (foundIndex !== -1) {
      tempArr[index].canRead = state.selectStatusList[foundIndex].canRead
      tempArr[index].canWrite = state.selectStatusList[foundIndex].canWrite
    }
  })
  state.selectStatusList = tempArr
  onChange()
}

const onStart = (e: DraggableEvent) => {
  console.log('start', e)
}

const onEnd = (e: DraggableEvent) => {
  console.log('onEnd', e)
  for (let i = 0; i < state.selectStatusList.length; i++) {
    var item = state.selectStatusList[i]
    item.order = i
    state.selectStatusList[i] = item
  }
  onChange()
}

const onChange = () => {
  console.log('selectStatusList', JSON.stringify(state.selectStatusList))
  var tempArr = state.selectStatusList.map((item: Record<string, any>) => {
    return {
      statusId: item.value,
      canRead: item.canRead,
      canWrite: item.canWrite,
      order: item.order
    }
  })
  emit('change', tempArr)
}
</script>

<style lang="scss" scoped>
:deep(.el-transfer-panel) {
  width: 260px !important;
}

.list-item-bg {
  padding: 15px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}
.chosen {
  border: solid 1px #3089dc !important;
}
</style>
