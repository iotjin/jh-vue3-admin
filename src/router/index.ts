import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/* Router Modules */
import homesRouter from './modules/homes'
import { homesRouter0, apisRouter, aboutRouter } from './modules/homes'
import tablesRouter from './modules/tables'
import componentsRouter from './modules/components'
import testsRouter from './modules/tests'
import othersRouter from './modules/others'
import nestedRouter from './modules/nested'
import errorsRouter from './modules/errors'
import systemRouter from './modules/system'

import { AppRouteType } from '@/router/types'
import { gitHub } from '@/utils/const'

const Layout = () => import('@/layout/index.vue')

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes: AppRouteType[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
        meta: { hidden: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/:pathMatch(.*)*', // TODO: 解决路由爆[Vue Router warn]: No match found for location with path
    component: () => import('@/views/error/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404.vue'),
        meta: { title: '404', hidden: true }
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error/index.vue'),
        meta: { title: '401', hidden: true }
      },
      {
        path: '/403',
        name: '403',
        component: () => import('@/views/error/index.vue'),
        meta: { title: '403', hidden: true }
      },
      {
        path: '/500',
        name: '500',
        component: () => import('@/views/error/index.vue'),
        meta: { title: '500', hidden: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: AppRouteType[] = [
  homesRouter0,
  apisRouter,
  {
    path: '/external-link',
    name: 'externalLink',
    component: Layout,
    meta: { title: 'Link', icon: 'ep:link', roles: ['admin'] },
    children: [
      {
        path: gitHub,
        component: Layout,
        // component: () => {},
        meta: { title: 'External Link', icon: 'externalLink' }
      },
      {
        path: 'iframe',
        name: 'iframe',
        component: () => import('@/views/demos/components/iframe.vue'),
        meta: { title: 'Iframe', icon: 'link' }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/

  homesRouter,
  tablesRouter,
  componentsRouter,
  testsRouter,
  othersRouter,
  nestedRouter,
  errorsRouter,
  systemRouter,
  aboutRouter
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * 重置路由
 */
export const resetRouter = () => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && constantRoutes.find((item) => item.name !== name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export function resetRouter2() {
  router.replace({ path: '/login' })
  // const newRouter = router as any;
  // (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
