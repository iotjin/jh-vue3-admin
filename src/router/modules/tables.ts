import { AppRouteType } from '@/router/types'

const Layout = () => import('@/layout/index.vue')

const othersRouter: AppRouteType = {
  path: '/tables',
  name: 'tables',
  component: Layout,
  redirect: '/tables/table1',
  meta: {
    title: 'Table',
    icon: 'menu'
    // roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'table1',
      name: 'table1',
      component: () => import('@/views/demos/tables/table1.vue'),
      meta: { title: 'Table1', icon: 'ep:grid' }
    }
  ]
}
export default othersRouter
