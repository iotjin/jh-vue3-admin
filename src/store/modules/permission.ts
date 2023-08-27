import { defineAsyncComponent } from 'vue'
import { cloneDeep } from 'lodash-es'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { asyncRoutes, constantRoutes } from '@/router'

import { AppRouteType, AppDynamicRouteType } from '@/router/types'

const modules = import.meta.glob('../../views/**/**.vue')
const Layout = () => import('@/layout/index.vue')

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
const hasPermission = (roles: string[], route: AppRouteType) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return (route.meta.roles as string[]).includes(role)
      }
    })
  }
  return true
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
const filterAsyncRoutes = (routes: AppRouteType[], roles: string[]) => {
  const res: AppRouteType[] = []

  routes.forEach((route) => {
    const tmp = cloneDeep(route)
    // const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

// 加载路由
const loadView = (view: string) => {
  // 路由懒加载
  // return defineAsyncComponent(() => import(`/src/views/${view}.vue`))
  return modules[`../../views/${view}.vue`]
}

/**
 * 通过递归格式化菜单路由 (配置项规则：https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html#配置项)
 * @param routes
 */
export function filterAsyncRoutes2(routes: AppDynamicRouteType[]) {
  const res: AppDynamicRouteType[] = []
  routes.forEach((route) => {
    const tmp = cloneDeep(route)
    // const tmp = { ...route }
    tmp.id = route.id
    tmp.path = route.code
    tmp.name = route.code
    tmp.meta = { title: route.title, icon: route.icon, buttons: route.buttons }
    if (route.component === 'Layout') {
      tmp.component = Layout
    } else if (route.component) {
      tmp.component = loadView(route.component)
    }
    if (route.children && route.children.length > 0) {
      tmp.children = filterAsyncRoutes2(route.children)
    }
    res.push(tmp)
  })
  return res
}

// setup
export const usePermissionStore = defineStore('permission', () => {
  // state
  const routes = ref<AppRouteType[]>([])

  // actions
  function setRoutes(newRoutes: AppRouteType[]) {
    routes.value = constantRoutes.concat(newRoutes)
  }

  function generateRoutes(roles: string[]) {
    return new Promise<AppRouteType[]>((resolve, reject) => {
      let accessedRoutes: AppRouteType[] = []
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      setRoutes(accessedRoutes)
      resolve(accessedRoutes)
    })
  }

  function generateDynamicRoutes(menus: AppDynamicRouteType[]) {
    return new Promise<AppRouteType[]>((resolve, reject) => {
      const accessedRoutes = filterAsyncRoutes2(menus)
      setRoutes(accessedRoutes) // Todo: 内部拼接constantRoutes，所以查出来的菜单不用包含constantRoutes
      resolve(accessedRoutes)
    })
  }

  return { routes, setRoutes, generateRoutes, generateDynamicRoutes }
})

// 非setup
export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
