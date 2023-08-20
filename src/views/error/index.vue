<template>
  <div class="container">
    <svg-icon :icon-class="iconName" style="width: 251px; height: 294px" />

    <div class="right">
      <p class="right-title">{{ iconName }}</p>
      <p class="right-subtitle">
        {{ route.path === '/401' || route.path === '/403' ? $t('error.subtitle403') : route.path === '/404-2' ? $t('error.subtitle404') : $t('error.subtitle500') }}
      </p>
      <el-button class="right-btn" type="primary" @click="router.push('/')">{{ $t('error.btn') }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRoute, useRouter } from 'vue-router'

defineOptions({
  name: '500'
})

const router = useRouter()
const route = useRoute()

const iconName = computed(() => {
  switch (route.path) {
    case '/401':
      return '401'
    case '/403':
      return '403'
    case '/404-2':
      return '404'
    case '/500':
      return '500'
    default:
      return '500'
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 640px;

  .left {
    width: 251px;
    height: 294px;
  }

  .right {
    margin-left: 3rem;

    .right-title {
      margin-bottom: 1rem;
      opacity: 0;
      font-weight: 500;
      font-size: 2.25rem;
      line-height: 2.5rem;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    .right-subtitle {
      margin-bottom: 1rem;
      opacity: 0;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    .right-btn {
      opacity: 0;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }

    @keyframes slideUp {
      0% {
        opacity: 0;
        transform: translateY(60px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>
