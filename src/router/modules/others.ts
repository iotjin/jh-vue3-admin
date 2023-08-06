import { AppRouteType } from '@/router/types'

const Layout = () => import('@/layout/index.vue')

const othersRouter: AppRouteType = {
  path: '/other',
  name: 'other',
  component: Layout,
  redirect: '/other/other1',
  meta: {
    title: 'Other',
    icon: 'line-md:moon-filled-to-sunny-filled-loop-transition'
    // roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'other1',
      name: 'other1',
      component: () => import('@/views/demos/others/other1.vue'),
      meta: { title: 'Other1', icon: 'line-md:star-pulsating-twotone-loop', hidden: false }
    },
    {
      path: 'other2',
      name: 'other2',
      component: () => import('@/views/demos/others/other2.vue'),
      meta: { title: 'Other2', icon: 'ep:grid', hidden: false }
    }
  ]
}
export default othersRouter
