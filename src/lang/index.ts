import { createI18n } from 'vue-i18n'
import { store } from '@/store'
import { useAppStore } from '@/store/modules/app'

// 本地语言包
import enLocale from './package/en'
import zhCnLocale from './package/zh-cn'

const appStore = useAppStore(store)

function siphonI18n(prefix = 'zh-CN') {
  return Object.fromEntries(
    Object.entries(import.meta.glob('./**/*.ts', { eager: true })).map(([key, value]: any) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1]
      return [matched, value.default]
    })
  )[prefix]
}

const messages = {
  'zh-cn': {
    ...zhCnLocale,
    ...siphonI18n('zh-cn')
  },
  en: {
    ...enLocale,
    ...siphonI18n('en')
  }
}

const i18n = createI18n({
  legacy: false, // 如果想在composition api中使用需要设置为false
  locale: appStore.language,
  messages: messages,
  globalInjection: true // 如果设置true, $t() 函数将注册到全局
})

export default i18n

// import i18n from '@/lang/index'
// const { t } = i18n.global
