import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { useUserStoreHook } from '@/store/modules/user'
import i18n from '@/lang/index'
const { t } = i18n.global

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStoreHook()
    if (userStore.token) {
      config.headers.Authorization = 'Bearer ' + userStore.token
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data
    if (code === 20000) {
      return response.data
    }

    // 响应数据为二进制流处理(Excel导出)
    if (response.data instanceof ArrayBuffer) {
      return response
    }

    // `token` 过期或者账号已在别处登录
    if (code === 401 || code === 50008 || code === 50012 || code === 50014) {
      ElMessageBox.confirm(t('logout401.message'), t('logout401.title'), {
        confirmButtonText: t('logout401.confirmButtonText'),
        type: 'warning'
      }).then(() => {
        localStorage.clear()
        window.location.href = '/'
      })

      // ElMessageBox.confirm('当前页面已失效，请重新登录', '提示', {
      //   confirmButtonText: '确定',
      //   type: 'warning'
      // }).then(() => {
      // })
      // ElMessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //   confirmButtonText: 'Re-Login',
      //   cancelButtonText: 'Cancel',
      //   type: 'warning'
      // }).then(() => {})
      // ElMessageBox.confirm('Unauthorized', 'Log out', {
      //   confirmButtonText: 'Log out',
      //   cancelButtonText: 'Cancel',
      //   type: 'warning'
      // }).then(() => {})
    }

    ElMessage.error(msg || t('logout401.error'))
    return Promise.reject(new Error(msg || 'Error'))
  },
  (error: any) => {
    console.log('err' + error) // for debug
    ElMessage.error(error.message || t('logout401.error'))
    return Promise.reject(error)
  }
)

// 导出 axios 实例
export default service
