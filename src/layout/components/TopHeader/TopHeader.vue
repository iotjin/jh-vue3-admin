<template>
  <div class="top-header bgImage">
    <div class="header">
      <div class="left">{{ headerTitle }}</div>
      <div class="right">
        <!-- 用户信息 -->
        <UserInfo hasTopHeader />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from '../UserInfo.vue'

const headerTitle = ref('Vue3在线管理系统')
</script>

<style lang="scss" scoped>
.top-header {
  height: 60px !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1001;
  font-size: 15px;
}
.bgImage {
  background: url('../../../assets/images/frame/header.png') no-repeat;
  background-size: 100% 100%;
}
.header {
  display: flex;
  align-items: center;
  height: 60px !important;
}
.left {
  flex: 3;
  padding-left: 30px;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.right {
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px !important;
  padding-right: 20px;
}
</style>
