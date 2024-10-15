<template>
  <div class="dashboard-container">
    <!-- github角标 -->
    <github-corner class="github-corner" />

    <div class="dashboard-text">name: {{ userStore.nickname }}</div>
    <div class="dashboard-text">
      roles: <span v-for="role in userStore.roles" :key="role">{{ role }}</span>
    </div>

    <div style="margin-top: 50px">
      <el-link href="https://iotjin.github.io/jh-vue-admin" target="_blank"> <el-tag type="primary" size="large">vue2版本在线预览</el-tag> </el-link>
    </div>
    <div style="margin-top: 50px">
      <el-link href="https://iotjin.github.io/jh-vue3-admin" target="_blank"> <el-tag type="primary" size="large">vue3版本在线预览</el-tag> </el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.github-corner {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  border: 0;
}
</style>
