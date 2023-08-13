<template>
  <div>
    <h1>iconify 图标:</h1>
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

    <h1>img 本地图片:</h1>
    <img src="../../../assets/images/static/icon.png" />
    <img :src="imgPath2" />
    <img :src="imgPath3" />
    <img :src="imgPath4" />
    <img :src="imgPath5" />

    <h2>img 本地图片动态导入:</h2>
    <img :src="getImgPath2('icon2.png')" />
    <img :src="getImgPath3('icon3.png')" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { getImgPath } from '@/utils/common'

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

// 不能用require
// 报错：require is not definedrequire is not defined
// require是webpack提供的方法，在vite中不适用。在vite中，由于使用了 ES modules 的方式来加载模块，因此不能使用 require，而是使用 import。

// new URL(url, import.meta.url) https://www.vitejs.net/guide/assets.html#new-url-url-import-meta-url

import imgPath2 from '@/assets/images/static/icon2.png'
const imgPath3 = getImgPath('icon3.png')
const imgPath4 = new URL(`../../../assets/images/static/icon4.png`, import.meta.url).href
const imgPath5 = new URL(`@/assets/images/static/icon5.png`, import.meta.url).href

const getImgPath2 = (name: string): any => {
  return new URL(`/src/assets/images/static/${name}`, import.meta.url).href
}

const getImgPath3 = (name: string): any => {
  return new URL(`../../../assets/images/static/${name}`, import.meta.url).href
}

onMounted(async () => {
  iconHome4.value = markRaw((await import('~icons/ep/basketball')).default)
})
</script>

<style lang="scss" scoped></style>
