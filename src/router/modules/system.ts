import { AppRouteType } from '@/router/types'

const Layout = () => import('@/layout/index.vue')

const systemRouter: AppRouteType = {
  path: '/system',
  name: 'system',
  component: Layout,
  meta: { title: 'SystemSetting', icon: 'ep:setting', roles: ['admin'] },
  children: [
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        title: 'SystemUser',
        icon: 'user',
        buttons: ['user-add', 'user-edit', 'user-look', 'user-export', 'user-delete', 'user-assign', 'user-resetPwd']
      }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/system/role/index.vue'),
      meta: {
        title: 'SystemRole',
        icon: 'role',
        buttons: ['role-add', 'role-edit', 'role-look', 'role-delete', 'role-setting']
      }
    },
    {
      path: 'menu',
      name: 'menu',
      component: () => import('@/views/system/menu/index.vue'),
      meta: {
        title: 'SystemMenu',
        icon: 'menu',
        buttons: ['menu-add', 'menu-edit', 'menu-look', 'menu-delete']
      }
    },
    {
      path: 'dict',
      name: 'dict',
      component: () => import('@/views/system/dict/index.vue'),
      meta: {
        title: 'SystemDict',
        icon: 'dict',
        buttons: ['dict-type-add', 'dict-type-edit', 'dict-type-delete', 'dict-item-add', 'dict-item-edit', 'dict-item-delete']
      }
    }
  ]
}
export default systemRouter
