<template>
  <div>
    <div>
      <icon1 />
      <!-- <icon2 /> -->
      <icon3 />
    </div>

    <div>
      <component :is="iconHome4" />
    </div>

    <div>
      <i-ep-edit />
      <el-icon :size="19.2" color="#409eff">
        <i-ep-edit />
      </el-icon>
    </div>

    <!-- https://github.com/iconify/iconify/tree/main/components/vue -->
    <Icon icon="ep:add-location" height="24" />
    <Icon icon="mdi-light:home" width="16" height="16" />
    <Icon icon="mdi-light:home" height="24" />
    <Icon icon="mdi-light:home" height="2em" />
    <Icon icon="mdi-light:home" height="auto" />
    <Icon icon="eva:alert-triangle-fill" color="orange" />
    <Icon icon="eva:alert-triangle-fill" color="#f00" />

    <div>
      <!-- 水平翻转图标： -->
      <Icon icon="eva:alert-triangle-fill" :h-flip="true" />
      <Icon icon="eva:alert-triangle-fill" :horizontal-flip="true" />
      <Icon icon="eva:alert-triangle-fill" flip="horizontal" />
      <!-- 垂直翻转图标 -->
      <Icon icon="eva:alert-triangle-fill" :v-flip="true" />
      <Icon icon="eva:alert-triangle-fill" :vertical-flip="true" />
      <Icon icon="eva:alert-triangle-fill" flip="vertical" />
      <!-- 水平和垂直翻转图标（与180度旋转相同）： -->
      <Icon icon="eva:alert-triangle-fill" :h-flip="true" :v-flip="true" />
      <Icon icon="eva:alert-triangle-fill" :horizontal-flip="true" :vertical-flip="true" />
      <Icon icon="eva:alert-triangle-fill" flip="horizontal,vertical" />
      <!-- 90度旋转的例子： -->
      <Icon icon="eva:alert-triangle-fill" :rotate="1" />
      <!-- <Icon icon="eva:alert-triangle-fill" rotate="90deg" />
      <Icon icon="eva:alert-triangle-fill" rotate="25%" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

// element-plus图标
// https://icon-sets.iconify.design/ep/
import icon1 from '~icons/ep/help-filled'
// import { HelpFilled } from '@element-plus/icons-vue'

// 其他的
// https://icon-sets.iconify.design/
// import icon2 from '~icons/mdi/home-clock'
// 动态图标
// https://icon-sets.iconify.design/line-md/
// https://icon-sets.iconify.design/svg-spinners/
import icon3 from '~icons/line-md/home'

const iconHome4: any = ref(null)

onMounted(async () => {
  iconHome4.value = markRaw((await import('~icons/ep/help-filled')).default)
})
</script>

<style lang="scss" scoped></style>
