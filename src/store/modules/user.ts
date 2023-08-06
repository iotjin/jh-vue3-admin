import { defineStore } from 'pinia'
import { store } from '@/store'
import { login as loginApi, logout as logoutApi, getUserInfo } from '@/api/auth'
import { getUserMenus as getUserMenusApi } from '@/api/system/menu'
import { resetRouter } from '@/router'
import { getToken, setToken, removeToken } from '@/utils/auth'

import { LoginData, UserInfo } from '@/api/auth/types'
import { AppDynamicRouteType } from '@/router/types'

export const useUserStore = defineStore('user', () => {
  // state
  const userId = ref('')
  const token = ref(getToken())
  const nickname = ref('')
  const avatar = ref('')
  const roles = ref<Array<string>>([]) // 用户角色编码集合 → 判断路由权限
  const perms = ref<Array<string>>([]) // 用户权限编码集合 → 判断按钮权限
  const menus = ref<Array<string>>([]) // 用户菜单

  // user login
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((res) => {
          const { accessToken } = res.data
          token.value = accessToken
          setToken(accessToken)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // get user info
  function getInfo() {
    return new Promise<UserInfo>((resolve, reject) => {
      getUserInfo(token.value)
        .then((res) => {
          const { data } = res
          if (!data) {
            return reject('Verification failed, please Login again.')
          }

          // roles must be a non-empty array
          if (!data.roles || data.roles.length <= 0) {
            reject('getUserInfo: roles must be a non-null array!')
          }

          userId.value = data.userId
          nickname.value = data.nickname
          avatar.value = data.avatar
          roles.value = data.roles
          // perms.value = perms
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // get user menus
  function getUserMenus() {
    return new Promise<AppDynamicRouteType[]>((resolve, reject) => {
      const params = { userId: userId.value }
      getUserMenusApi(params)
        .then((res) => {
          const { data } = res
          if (!data) {
            reject('Verification failed, please Login again.')
          }

          const menusList = data
          // roles must be a non-empty array
          if (!menusList || menusList.length <= 0) {
            reject('getMenus: menus must be a non-null array!')
          }
          menus.value = menusList
          resolve(menusList)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // user logout
  function logout() {
    return new Promise<void>((resolve, reject) => {
      logoutApi()
        .then(() => {
          resetToken()
          resetRouter()
          location.reload() // 清空路由
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // resetToken
  function resetToken() {
    removeToken() // must remove  token  first
    token.value = getToken()
    nickname.value = ''
    avatar.value = ''
    roles.value = []
    perms.value = []
  }

  return {
    // 当前登录用户ID
    userId,
    token,
    nickname,
    avatar,
    roles,
    menus,
    perms,
    login,
    getInfo,
    getUserMenus,
    logout,
    resetToken
  }
})

// 非setup
export function useUserStoreHook() {
  return useUserStore(store)
}
