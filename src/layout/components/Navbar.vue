<template>
  <!-- 顶部导航栏 -->
  <div class="navbar">
    <!-- 左侧面包屑 -->
    <div class="flex">
      <hamburger :is-active="appStore.sidebar.opened" @toggle-click="toggleSideBar" />
      <breadcrumb />
    </div>

    <!-- 右侧导航设置 -->
    <div class="flex">
      <!-- 导航栏设置(窄屏隐藏)-->
      <div v-if="device !== 'mobile'" class="setting-container">
        <div class="setting-item item-center">
          <NavSearch />
        </div>

        <!--全屏 -->
        <el-tooltip :content="$t(isFullscreen ? 'navbar.exitFull' : 'navbar.entryFull')" effect="dark" placement="bottom">
          <div class="setting-item" @click="toggle">
            <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
          </div>
        </el-tooltip>
        <!-- 布局大小 -->
        <el-tooltip :content="$t('navbar.layoutSize')" effect="dark" placement="bottom">
          <size-select class="setting-item" />
        </el-tooltip>
        <!--语言选择-->
        <lang-select class="setting-item" />
      </div>

      <!-- 用户信息 -->
      <UserInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/modules/app'
import UserInfo from './UserInfo.vue'

const appStore = useAppStore()

const { device } = storeToRefs(appStore) // 设备类型：desktop-宽屏设备 || mobile-窄屏设备

/**
 * 左侧菜单栏显示/隐藏
 */
function toggleSideBar() {
  appStore.toggleSidebar(true)
}

/**
 * vueUse 全屏
 */
const { isFullscreen, toggle } = useFullscreen()
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 1px #0003;

  .flex {
    display: flex;
  }

  .setting-container {
    display: flex;
    align-items: center;

    .setting-item {
      display: inline-block;
      width: 30px;
      height: 50px;
      line-height: 50px;
      color: #5a5e66;
      text-align: center;
      cursor: pointer;

      &:hover {
        background: rgb(249 250 251 / 100%);
      }
    }

    .item-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
