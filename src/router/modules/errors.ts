import { AppRouteType } from '@/router/types'

const Layout = () => import('@/layout/index.vue')

const errorsRouter: AppRouteType = {
  path: '/error',
  name: 'error',
  component: Layout,
  redirect: '/error/404',
  meta: { title: 'Error', icon: 'ep:warning', roles: ['admin'] },
  children: [
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/error/404.vue'),
      meta: { title: '404', hidden: false }
    },
    {
      path: '/401',
      name: '401',
      component: () => import('@/views/error/index.vue'),
      meta: { title: '401', hidden: false }
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/views/error/index.vue'),
      meta: { title: '403', hidden: false }
    },
    {
      path: '/404-2',
      name: '404-2',
      component: () => import('@/views/error/index.vue'),
      meta: { title: '404', hidden: false }
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/views/error/index.vue'),
      meta: { title: '500', hidden: false }
    }
  ]
}
export default errorsRouter

// 404 page must be placed at the end !!!
export const notFoundAndNoPower: AppRouteType[] = [
  // {
  //   path: '/401',
  //   name: '401',
  //   component: () => import('@/views/error/index.vue'),
  //   meta: { hidden: true }
  // },
  // {
  //   path: '/404',
  //   name: '404',
  //   alias: '/:pathMatch(.*)*',
  //   component: () => import('@/views/error/404.vue'),
  //   meta: { hidden: true }
  // },
  // {
  //   path: '/:pathMatch(.*)*', // Must put the 'ErrorPage' route at the end
  //   name: '404',
  //   redirect: '/404',
  //   component: () => import('@/views/error/404.vue'),
  //   meta: { hidden: true }
  // }
  // {
  //   path: '/:pathMatch(.*)*', // 解决路由爆[Vue Router warn]: No match found for location with path
  //   component: () => import('@/views/error/404.vue'),
  //   meta: { hidden: true }
  // },
]
