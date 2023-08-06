import { AppRouteType } from '@/router/types'
const Layout = () => import('@/layout/index.vue')

const componentsRouter: AppRouteType = {
  path: '/components',
  name: 'components',
  component: Layout,
  redirect: '/components/component1',
  meta: { title: 'Component', icon: 'menu', roles: ['admin'] },
  children: [
    {
      path: 'iconSelector',
      name: 'iconSelector',
      component: () => import('@/views/demos/components/iconSelector.vue'),
      meta: { title: 'Icon Selector', icon: 'ep:pointer' }
    },
    {
      path: 'testEditor',
      name: 'testEditor',
      component: () => import('@/views/demos/components/testEditor.vue'),
      meta: { title: 'Editor', icon: 'ep:edit' }
    },
    {
      path: 'signature',
      name: 'signature',
      component: () => import('@/views/demos/components/signature.vue'),
      meta: { title: 'Signature', icon: 'line-md:pencil-twotone' }
    },
    {
      path: 'upload',
      name: 'upload',
      component: () => import('@/views/demos/components/upload.vue'),
      meta: { title: 'Upload', icon: 'ep:picture' }
    }
  ]
}
export default componentsRouter
