import { AppRouteType } from '@/router/types'
const Layout = () => import('@/layout/index.vue')
import { apiDoc } from '@/utils/const'

const homesRouter: AppRouteType = {
  path: '/homes',
  name: 'homes',
  component: Layout,
  redirect: '/homes/home1',
  meta: {
    title: 'Home',
    icon: 'homepage'
    // roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'home1',
      name: 'home1',
      component: () => import('@/views/demos/homes/home1/index.vue'),
      meta: { title: 'Home1', icon: 'ep:grid', hidden: false }
    },
    {
      path: 'home2',
      name: 'home2',
      component: () => import('@/views/demos/homes/home2.vue'),
      meta: { title: 'Home2', icon: 'ep:grid', hidden: false }
    },
    {
      path: 'home3',
      name: 'home3',
      component: () => import('@/views/demos/homes/home3.vue'),
      meta: { title: 'Home3', icon: 'ep:grid', hidden: false }
    },
    {
      path: 'home4',
      name: 'home4',
      component: () => import('@/views/demos/homes/home4.vue'),
      meta: { title: 'Home4', icon: 'ep:grid', hidden: false }
    }
  ]
}
export default homesRouter

export const homesRouter0: AppRouteType = {
  path: '/dataCenter',
  name: 'dataCenter',
  component: Layout,
  meta: {
    title: 'DataCenter',
    icon: 'homepage'
    // roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'dataCenter',
      name: 'dataCenter',
      component: () => import('@/views/demos/homes/home1/index.vue'),
      meta: { title: 'DataCenter', icon: 'line-md:star-pulsating-twotone-loop', hidden: false }
    }
  ]
}

export const apisRouter: AppRouteType = {
  path: '/api',
  name: 'api',
  component: Layout,
  meta: { title: 'API', icon: 'api' },
  children: [
    {
      path: apiDoc,
      component: Layout,
      meta: { title: 'API', icon: 'api' }
    }
  ]
}

export const aboutRouter: AppRouteType = {
  path: '/about',
  name: 'about',
  component: Layout,
  meta: { title: 'About', icon: 'ep:info-filled' },
  children: [
    {
      path: 'about',
      name: 'about',
      component: () => import('@/views/demos/about/index.vue'),
      meta: { title: 'About', icon: 'ep:info-filled' }
    }
  ]
}
