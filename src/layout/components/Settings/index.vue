<template>
  <div class="drawer-container">
    <h3 class="drawer-title">项目配置</h3>
    <el-divider>主题</el-divider>

    <div class="drawer-switch" @click.stop>
      <el-switch v-model="isDark" inline-prompt :active-icon="IconEpMoon" :inactive-icon="IconEpSunny" active-color="var(--el-fill-color-dark)" inactive-color="var(--el-color-primary)" @change="toggleDark" />
    </div>

    <el-divider>界面设置</el-divider>
    <div class="drawer-item">
      <span class="text">开启 Tags-View</span>
      <el-switch v-model="settingsStore.tagsView" />
    </div>

    <div class="drawer-item">
      <span class="text">固定 Header</span>
      <el-switch v-model="settingsStore.fixedHeader" />
    </div>

    <div class="drawer-item">
      <span class="text">侧边栏 Logo</span>
      <el-switch v-model="settingsStore.sidebarLogo" />
    </div>

    <div class="drawer-item">
      <span class="text">开启 Top-Header</span>
      <el-switch v-model="settingsStore.topHeader" />
    </div>

    <el-divider>主题颜色</el-divider>

    <ul class="drawer-theme">
      <li v-for="(color, index) in themeColors" :key="index" class="drawer-theme-item" :style="{ background: color }" @click="changeThemeColor(color)" />
    </ul>

    <el-divider>导航设置</el-divider>

    <ul class="layout">
      <el-tooltip content="左侧模式" placement="bottom">
        <li :class="'layout-item layout-left ' + (settingsStore.layout == 'left' ? 'is-active' : '')" @click="changeLayout('left')">
          <div />
          <div />
        </li>
      </el-tooltip>
      <el-tooltip content="顶部模式" placement="bottom">
        <li :class="'layout-item layout-top ' + (settingsStore.layout == 'top' ? 'is-active' : '')" @click="changeLayout('top')">
          <div />
          <div />
        </li>
      </el-tooltip>
      <el-tooltip content="混合模式" placement="bottom">
        <li :class="'layout-item layout-mix ' + (settingsStore.layout == 'mix' ? 'is-active' : '')" @click="changeLayout('mix')">
          <div />
          <div />
        </li>
      </el-tooltip>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/store/modules/settings'

import IconEpSunny from '~icons/ep/sunny'
import IconEpMoon from '~icons/ep/moon'

/**
 * 暗黑模式
 */
const settingsStore = useSettingsStore()
const isDark = useDark()
const toggleDark = () => useToggle(isDark)

/**
 * 切换布局
 */
function changeLayout(layout: string) {
  settingsStore.changeSetting({ key: 'layout', value: layout })
  window.document.body.setAttribute('layout', settingsStore.layout)
}

// 主题颜色
const themeColors = ref<string[]>(['#409EFF', '#304156', '#11a983', '#13c2c2', '#6959CD', '#f5222d'])

/**
 * 切换主题颜色
 */
function changeThemeColor(color: string) {
  document.documentElement.style.setProperty('--el-color-primary', color)
  settingsStore.changeSetting({ key: 'layout', value: color })
}

onMounted(() => {
  window.document.body.setAttribute('layout', settingsStore.layout)
})
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
  }

  .drawer-switch {
    display: flex;
    justify-content: center;
  }

  .drawer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;

    .text {
      font-size: 14px;
    }
  }

  .drawer-theme {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    .drawer-theme-item {
      width: 30px;
      height: 30px;
      display: inline-block;
      cursor: pointer;
    }
  }

  .layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 50px;

    &-item {
      position: relative;
      width: 18%;
      height: 45px;
      overflow: hidden;
      cursor: pointer;
      background: #f0f2f5;
      border-radius: 4px;
    }

    &-item.is-active {
      border: 2px solid var(--el-color-primary);
    }

    &-mix div:nth-child(1) {
      width: 100%;
      height: 30%;
      background: #1b2a47;
      box-shadow: 0 0 1px #888;
    }

    &-mix div:nth-child(2) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30%;
      height: 70%;
      background: #1b2a47;
      box-shadow: 0 0 1px #888;
    }

    &-top div:nth-child(1) {
      width: 100%;
      height: 30%;
      background: #1b2a47;
      box-shadow: 0 0 1px #888;
    }

    &-left div:nth-child(1) {
      width: 30%;
      height: 100%;
      background: #1b2a47;
    }

    &-left div:nth-child(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
      height: 30%;
      background: #fff;
      box-shadow: 0 0 1px #888;
    }
  }
}
</style>
