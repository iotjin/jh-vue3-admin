import { AppRouteType } from '@/router/types'

const Layout = () => import('@/layout/index.vue')

const testsRouter: AppRouteType = {
  path: '/test',
  name: 'test',
  component: Layout,
  redirect: '/test/test1',
  meta: {
    title: 'Test',
    icon: 'material-symbols:build'
    // roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'test1',
      name: 'test1',
      component: () => import('@/views/demos/tests/test1.vue'),
      meta: { title: 'Test1', icon: 'ep:grid' }
    },
    {
      path: 'test2',
      name: 'test2',
      component: () => import('@/views/demos/tests/test1.vue'),
      meta: { title: 'Test2', icon: 'ep:grid' }
    },
    {
      path: 'testIcon',
      name: 'testIcon',
      component: () => import('@/views/demos/tests/testIcon.vue'),
      meta: { title: 'Test Icon', icon: 'ep:grid' }
    },
    {
      path: 'testTime',
      name: 'testTime',
      component: () => import('@/views/demos/tests/testTime.vue'),
      meta: { title: 'Test Time', icon: 'ep:grid' }
    },
    {
      path: 'testUTCTime',
      name: 'testUTCTime',
      component: () => import('@/views/demos/tests/testUTCTime.vue'),
      meta: { title: 'Test UTC Time', icon: 'ep:grid' }
    }
  ]
}
export default testsRouter
