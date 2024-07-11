<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 手机设备侧边栏打开遮罩层 -->
    <div v-if="classObj.mobile && classObj.openSidebar" class="drawer-bg" @click="handleClickOutside"></div>

    <!-- 不带顶栏 -->
    <div v-if="!hasTopHeader">
      <Sidebar class="sidebar-container" />
      <div :class="{ hasTagsView: showTagsView }" class="main-container">
        <div :class="{ 'fixed-header': fixedHeader }">
          <navbar />
          <tags-view v-if="showTagsView" />
        </div>
        <!--主页面-->
        <app-main />
      </div>
    </div>

    <!-- 带顶栏 -->
    <div v-if="hasTopHeader" :class="{ hasTopHeader: hasTopHeader }">
      <Sidebar class="sidebar-container" style="top: 60px" />
      <TopHeader />
      <div :class="{ hasTagsView: showTagsView }" class="main-container">
        <div :class="{ 'fixed-top-header': fixedHeader }">
          <navbar />
          <tags-view v-if="showTagsView" />
        </div>
        <!--主页面-->
        <app-main />
      </div>
    </div>

    <!-- 设置面板 -->
    <RightPanel v-if="showSettings">
      <settings />
    </RightPanel>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { AppMain, Navbar, Settings, TagsView } from './components/index'
import { TopHeader } from './components'
import Sidebar from './components/Sidebar/index.vue'
import RightPanel from '@/components/RightPanel/index.vue'

import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'

const { width } = useWindowSize()

/**
 * 响应式布局容器固定宽度
 *
 * 大屏（>=1200px）
 * 中屏（>=992px）
 * 小屏（>=768px）
 */
const WIDTH = 992

const appStore = useAppStore()
const settingsStore = useSettingsStore()

const fixedHeader = computed(() => settingsStore.fixedHeader)
const showTagsView = computed(() => settingsStore.tagsView)
const showSettings = computed(() => settingsStore.showSettings)
const hasTopHeader = computed(() => settingsStore.topHeader)

const classObj = computed(() => ({
  hideSidebar: !appStore.sidebar.opened,
  openSidebar: appStore.sidebar.opened,
  withoutAnimation: appStore.sidebar.withoutAnimation,
  mobile: appStore.device === 'mobile'
}))

watchEffect(() => {
  if (width.value < WIDTH) {
    appStore.toggleDevice('mobile')
    appStore.closeSideBar(true)
  } else {
    appStore.toggleDevice('desktop')

    if (width.value >= 1200) {
      //大屏
      appStore.openSideBar(true)
    } else {
      appStore.closeSideBar(true)
    }
  }
})

function handleClickOutside() {
  appStore.closeSideBar(false)
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    display: table;
    clear: both;
    content: '';
  }

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.3;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

/* TopHeader */
.hasTopHeader {
  padding-top: 60px;
  .fixed-top-header {
    position: fixed;
    top: 60;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  .fixed-top-header + .app-main {
    padding-top: 50px;
  }
  .hasTagsView {
    .fixed-top-header + .app-main {
      /* 84 = navbar + tags-view = 50 + 34 */
      padding-top: 84px;
    }
  }
}
.hideSidebar .fixed-top-header {
  width: calc(100% - 54px);
}
</style>
