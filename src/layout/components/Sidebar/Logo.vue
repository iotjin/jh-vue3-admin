<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse, 'dark-bg': isDark }">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="settingsStore.sidebarLogo" :src="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ defaultSettings.title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="settingsStore.sidebarLogo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ defaultSettings.title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/store/modules/settings'
import defaultSettings from '@/settings'

defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
})

const settingsStore = useSettingsStore()
const isDark = useDark()
const logo = 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
// const logo = ref(new URL(`@/assets/logo.png`, import.meta.url).href)
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  &.dark-bg {
    background-color: var(--el-bg-color-overlay);
  }

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
