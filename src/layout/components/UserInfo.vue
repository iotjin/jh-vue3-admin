<template>
  <div class="container">
    <!-- 用户信息 -->
    <el-dropdown trigger="click">
      <div class="avatar-container">
        <img class="user-avatar" :src="userStore.avatar + '?imageView2/1/w/80/h/80'" />
        <div v-if="hasTopHeader" class="user-name">{{ userStore.nickname }}</div>
        <i-ep-caret-bottom :style="{ color: hasTopHeader ? 'white' : 'black' }" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link to="/">
            <el-dropdown-item>{{ $t('navbar.dashboard') }}</el-dropdown-item>
          </router-link>
          <a target="_blank" :href="gitHub">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" :href="gitHub2">
            <el-dropdown-item>{{ $t('navbar.document') }}</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click="logout">
            {{ $t('navbar.logout') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { useUserStore } from '@/store/modules/user'
import { useI18n } from 'vue-i18n'
import { gitHub, gitHub2 } from '@/utils/const'
const { t } = useI18n()

defineProps({
  hasTopHeader: {
    required: false,
    type: Boolean,
    default: false
  }
})

const tagsViewStore = useTagsViewStore()
const userStore = useUserStore()

const route = useRoute()
const router = useRouter()

/**
 * 注销
 */
function logout() {
  ElMessageBox.confirm(t('logout.message'), t('logout.title'), {
    confirmButtonText: t('logout.confirmButtonText'),
    cancelButtonText: t('logout.cancelButtonText'),
    type: 'warning'
  }).then(() => {
    userStore
      .logout()
      .then(() => {
        tagsViewStore.delAllViews()
      })
      .then(() => {
        router.push(`/login?redirect=${route.fullPath}`)
      })
  })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.avatar-container {
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 5px;
  cursor: pointer;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  .user-name {
    color: white;
    margin: 0px 5px;
  }
}
</style>
