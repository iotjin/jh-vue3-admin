import { AppRouteType } from '@/router/types'

const Layout = () => import('@/layout/index.vue')

const nestedRouter: AppRouteType = {
  path: '/nested',
  name: 'Nested',
  component: Layout,
  redirect: '/nested/menu1',
  meta: { title: 'Nested', icon: 'line-md:list-indented', roles: ['admin'] },
  children: [
    {
      path: 'menu1',
      name: 'Menu1',
      component: () => import('@/views/demos/nested/menu1/index.vue'), // Parent router-view
      meta: { title: 'Menu1' },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu1-1',
          component: () => import('@/views/demos/nested/menu1/menu1-1/index.vue'),
          meta: { title: 'Menu1-1' }
        },
        {
          path: 'menu1-2',
          name: 'Menu1-2',
          component: () => import('@/views/demos/nested/menu1/menu1-2/index.vue'),
          meta: { title: 'Menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              name: 'Menu1-2-1',
              component: () => import('@/views/demos/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              meta: { title: 'Menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              name: 'Menu1-2-2',
              component: () => import('@/views/demos/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              meta: { title: 'Menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          name: 'Menu1-3',
          component: () => import('@/views/demos/nested/menu1/menu1-3/index.vue'),
          meta: { title: 'Menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/demos/nested/menu2/index.vue'),
      meta: { title: 'Menu2' }
    }
  ]
}
export default nestedRouter
