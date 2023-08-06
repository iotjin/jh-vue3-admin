<template>
  <el-dropdown trigger="click" @command="handleSizeChange">
    <div>
      <svg-icon icon-class="size" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item of newOptions" :key="item.value" :disabled="appStore.size == item.value" :command="item.value">
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const { t } = useI18n()

const newOptions = computed(() => {
  return sizeOptions.value.map((item) => {
    return {
      label: item.value === 'large' ? t('navbar.sizeLarge') : item.value === 'small' ? t('navbar.sizeSmall') : t('navbar.sizeNormal'),
      value: item.value
    }
  })
})

const sizeOptions = ref([
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '小型', value: 'small' }
])

function handleSizeChange(size: string) {
  appStore.changeSize(size)
  ElMessage.success(t('navbar.sizeMsg'))
}
</script>
