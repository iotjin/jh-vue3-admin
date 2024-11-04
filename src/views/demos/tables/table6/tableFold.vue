<template>
  <div>
    <el-card>
      <!-- list start -->
      <el-row style="display: flex; align-items: center">
        <el-col :span="6">
          <div class="header-text">Responses:</div>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" @click="toggleShowAll">{{ isShowAll ? 'Fold Responses' : 'Show All Responses' }} </el-button>
        </el-col>
      </el-row>
      <div style="height: 15px" />
      <el-timeline v-for="(item, index) in limitedList" :key="index" style="max-width: 90%">
        <el-timeline-item :timestamp="item.createDate" placement="top">
          <div class="box-card">
            <el-row>
              <el-col>
                <div style="display: flex">
                  <div class="header-text">{{ item.name }} :</div>
                  <div style="flex: 1">{{ item.content }}</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-timeline-item>
      </el-timeline>
      <!-- list end -->
    </el-card>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['toggleShowAll'])

const props = defineProps({
  foldList: { type: Array, default: () => [] }
})

const state = reactive({
  isShowAll: false,
  newFoldList: [] as any,
  // img dialog
  isShowDialogImg: false,
  previewImage: ''
})
const { isShowAll, newFoldList, isShowDialogImg, previewImage } = toRefs(state)

const limitedList = computed(() => {
  if (state.isShowAll) {
    return state.newFoldList
  } else {
    if (state.newFoldList.length > 3) {
      return state.newFoldList.slice(0, 3)
    }
    return state.newFoldList
  }
})

watch(
  () => props.foldList,
  (val) => {
    state.newFoldList = val
  },
  { immediate: true }
)

const toggleShowAll = () => {
  state.isShowAll = !state.isShowAll
  emit('toggleShowAll', state.isShowAll)
}
</script>

<style lang="scss" scoped>
.box-card {
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e6e6e6;
  width: 90%;
}

.header-text {
  font-weight: bold;
  font-size: 16px;
  color: #606266;
  padding-right: 10px;
}

.content-text {
  word-wrap: break-word;
  white-space: normal;
  word-break: break-all;
  padding-right: 10px;
}
</style>
