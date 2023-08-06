<!-- 内嵌 iframe-->
<template>
  <div class="app-container">
    <iframe :src="path" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  path: {
    required: true,
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;

  /* 84 = navbar + tags-view = 50 + 34 */
  height: calc(100vh - 50px);
}

.hasTagsView {
  .app-container {
    height: calc(100vh - 84px);
  }
}

.hasTopHeader {
  .app-container {
    height: calc(100vh - 84px - 60px);
  }
}
</style>
