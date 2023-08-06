<template>
  <el-tooltip placement="bottom" :content="$t('navbar.search')">
    <div @click="showDialog = true" class="item-center">
      <i-ep-search />
      <!-- <svg-icon icon-class="search" /> -->
      <!-- <Icon icon="ep:search" height="20" /> -->
    </div>
  </el-tooltip>
  <el-dialog v-model="showDialog" top="10vh" title="" class="search-dialog" min-height="200px" width="750px" :show-close="false" closeOnPressEscape @closed="reset">
    <el-input v-model="searchKey" :placeholder="$t('navbar.searchPlaceholder')" size="large" clearable>
      <template #prefix>
        <i-ep-search />
      </template>
    </el-input>

    <div class="search-list" v-if="searchList.length > 0">
      <div class="search-item item-center" :class="{ active: index === activeIndex }" v-for="(item, index) in searchList" :key="item.name" @click="handleRedirect" @mouseenter="handleMouseenter(index)">
        <div class="item-center">
          <Icon v-if="isIconify(item.meta)" :icon="item.meta.icon" style="font-size: 20px" />
          <svg-icon v-if="isSVGIcon(item.meta)" :icon-class="item.meta.icon" />
          <span class="search-item-title">{{ item.meta.title }}</span>
        </div>
        <svg-icon icon-class="confirm" />
        <!-- <Icon icon="ant-design:enter-outlined" height="20"  /> -->
      </div>
    </div>
    <el-empty :description="$t('navbar.searchEmpty')" :image-size="64" v-else />
    <template #footer>
      <div class="footer">
        <el-space :size="10">
          <div class="item-center">
            <svg-icon icon-class="confirm" class="icon" />
            <span>{{ $t('navbar.searchConfirm') }}</span>
          </div>
          <div class="item-center">
            <svg-icon icon-class="up" class="icon" />
            <svg-icon icon-class="down" class="icon" />
            <span>{{ $t('navbar.searchSwitch') }}</span>
          </div>
          <div class="item-center">
            <svg-icon icon-class="esc" class="icon" />
            <span>{{ $t('navbar.searchClose') }}</span>
          </div>
        </el-space>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { cloneDeep } from 'lodash-es'
import { useRouter } from 'vue-router'
import { onKeyStroke, useDebounceFn } from '@vueuse/core'
import { usePermissionStore } from '@/store/modules/permission'
import { translateRouteTitleI18n } from '@/utils/i18n'

const permissionStore = usePermissionStore()

const showDialog = ref(false)
const searchKey = ref('')
const activeIndex = ref(-1)

const searchList = ref<any[]>([])

const router = useRouter()

const searchMenu = useDebounceFn(handleSearchMenu, 250)

const isIconify = (meta: any) => meta && meta.icon && meta.icon.includes(':')
const isSVGIcon = (meta: any) => meta && meta.icon && !isIconify(meta)

function handleSearchMenu(val: string) {
  const keyword = val?.trim().toLocaleLowerCase()
  if (!keyword) {
    searchList.value = []
    return
  }
  searchList.value = filterMenu(cloneDeep(permissionStore.routes), keyword)
  activeIndex.value = unref(searchList).length > 0 ? 0 : -1
}

function filterMenu(menuList: any[], keyword: string, parent?: any) {
  const res: any[] = []
  menuList.forEach((item) => {
    if (item && item.meta && JSON.stringify(item.meta) !== '{}') {
      Object.assign(item.meta, {
        // icon: parent ? parent.meta.icon : item.meta.icon,
        icon: item.meta.icon ? item.meta.icon : parent ? parent.meta.icon : '', // 有子菜单时，子菜单的 icon 优先级高于父菜单
        title: parent ? `${translateRouteTitleI18n(parent.meta.title)} > ${translateRouteTitleI18n(item.meta.title)}` : translateRouteTitleI18n(item.meta.title)
      })
      if (!item.meta.hidden && item.meta.title.toLocaleLowerCase().includes(keyword)) {
        // 有子菜单才添加
        if (!item.children?.length) {
          res.push(item)
        }
      }
      if (!item.meta.hideChildren && item.children) {
        res.push(...filterMenu(item.children, keyword, item))
      }
    }
  })
  return res
}

function handleRedirect() {
  if (unref(searchList).length === 0 || unref(activeIndex) < 0) {
    return
  }
  showDialog.value = false
  router.push({
    name: unref(searchList)[unref(activeIndex)].name
  })
  reset()
}

function handleMouseenter(index: number) {
  activeIndex.value = Number(index)
}

function handleUp() {
  if (!searchList.value.length) return
  activeIndex.value--
  if (activeIndex.value < 0) {
    activeIndex.value = searchList.value.length - 1
  }
}

function handleDown() {
  if (!searchList.value.length) return
  activeIndex.value++
  if (activeIndex.value > searchList.value.length - 1) {
    activeIndex.value = 0
  }
}

function reset() {
  searchKey.value = ''
  searchList.value = []
}

onKeyStroke('Enter', handleRedirect)

onKeyStroke('ArrowUp', handleUp)

onKeyStroke('ArrowDown', handleDown)

watch(searchKey, () => {
  searchMenu(searchKey.value)
})
</script>

<style lang="scss" scoped>
// :root {
//   --selectText: white;
// }

// html.dark {
//   --selectText: var(--el-text-color-primary);
// }

.svg-icon {
  font-size: 20px;
}

.item-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-dialog {
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px #00000040;

  .el-dialog__body {
    padding-top: 0 !important;
  }

  .item-center {
    align-items: center;
    display: flex;
  }

  .search-list {
    margin-top: 15px;

    .search-item {
      height: 54px;
      justify-content: space-between;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 0 16px;
      cursor: pointer;
      border: 1px solid var(--el-border-color);
      &.active {
        background-color: var(--el-color-primary);
        color: var(--navSearchText);
        box-shadow: 0 1px 3px rgb(0 21 41 / 8%);
      }
      & + .search-item {
        margin-top: 8px;
      }
      .search-item-title {
        margin-left: 8px;
        font-size: 16px;
      }
    }
  }

  .footer {
    text-align: left;
    padding-left: 10px;
    color: var(--el-text-color-regular);

    .icon {
      padding: 3px;
      margin-right: 5px;
      border-radius: 2px;
      font-size: 20px;
      box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px #1e235a66;
    }
  }
}
</style>
