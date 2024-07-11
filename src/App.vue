<template>
  <el-config-provider :locale="appStore.locale" :size="appStore.size">
    <router-view />
    <UpgradeDialog v-model:is-show="needUpgrade" :upgrade-data="upgradeData" />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()

import { useRoute } from 'vue-router'
const route = useRoute()
import UpgradeDialog from '@/components/upgrade-dialog/index.vue'
import { checkUpgrade, startPolling, visibilityChange, requestCheckUpgrade } from '@/components/upgrade-dialog/upgradeUtils'

const state = reactive({
  needUpgrade: false,
  upgradeData: {}
})
const { needUpgrade, upgradeData } = toRefs(state)

// ******************** 本地检测更新 ********************
// onMounted(() => {
//   startPolling(() => {
//     state.needUpgrade = checkIsUpgrade()
//     console.log('needUpgrade111', JSON.stringify(state.needUpgrade))
//   })
//   visibilityChange(() => {
//     state.needUpgrade = checkIsUpgrade()
//     console.log('needUpgrade222', JSON.stringify(state.needUpgrade))
//   })
// })
// const checkIsUpgrade = () => {
//   let needUpgrade = false
//   if (route.path !== '/login') {
//     needUpgrade = checkUpgrade()
//   }
//   return needUpgrade
// }

// ******************** 网络请求检测更新 ********************
onMounted(() => {
  startPolling(() => {
    getCheckUpgrade('startPolling')
  })
  visibilityChange(() => {
    getCheckUpgrade('visibilityChange')
  })
})
const getCheckUpgrade = (type: 'startPolling' | 'visibilityChange') => {
  // if (route.path === '/login') {
  //   return
  // }
  requestCheckUpgrade()
    .then((data: any) => {
      state.needUpgrade = data.needUpgrade
      state.upgradeData = data.upgradeData
      if (type === 'startPolling') {
        console.log('needUpgrade111', JSON.stringify(data))
      } else {
        console.log('needUpgrade222', JSON.stringify(data))
      }
    })
    .catch((err) => {
      console.log('err', JSON.stringify(err))
    })
}
</script>
