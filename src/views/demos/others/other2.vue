<template>
  <div>
    <div v-for="(item, index) in limitedList" :key="index" class="item-bg">
      <div class="item-content">
        <div class="item-info">{{ item.info }}</div>
      </div>
    </div>
    <el-button type="primary" @click="toggleShowAll">{{ isShowAll ? '折叠' : '显示全部' }}</el-button>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  isShowAll: false,
  list: Array.from({ length: 5 }, (_, index) => ({
    info: `info ${index + 1}`
  }))
})
const { isShowAll } = toRefs(state)

const limitedList = computed(() => {
  if (state.isShowAll) {
    return state.list
  } else {
    if (state.list.length > 3) {
      return state.list.slice(0, 3)
    }
    return state.list
  }
})

function toggleShowAll() {
  state.isShowAll = !state.isShowAll
}
</script>

<style lang="scss" scoped>
.item-bg {
  width: 200px;
  height: 50px;
  margin: 10px;
  border: 1px solid #000;
}

.item-content {
  padding: 10px;
}

.item-info {
  font-size: 16px;
}
</style>
