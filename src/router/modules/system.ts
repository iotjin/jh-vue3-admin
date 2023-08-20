import { AppRouteType } from '@/router/types'

const Layout = () => import('@/layout/index.vue')

const systemRouter: AppRouteType = {
  path: '/system',
  name: 'system',
  component: Layout,
  meta: { title: 'SystemSetting', icon: 'el-icon-setting', roles: ['admin'] },
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
    }
    // {
    //   path: 'role',
    //   name: 'role',
    //   component: () => import('@/views/system/role'),
    //   meta: {
    //     title: 'SystemRole',
    //     buttons: ['role-add', 'role-edit', 'role-look', 'role-delete', 'role-setting']
    //   }
    // },
    // {
    //   path: 'menu',
    //   name: 'menu',
    //   component: () => import('@/views/system/menu'),
    //   meta: {
    //     title: 'SystemMenu',
    //     buttons: ['menu-add', 'menu-edit', 'menu-look', 'menu-delete']
    //   }
    // },
    // {
    //   path: 'dict',
    //   name: 'dict',
    //   component: () => import('@/views/system/dict'),
    //   meta: {
    //     title: 'SystemDict',
    //     buttons: ['dict-type-add', 'dict-type-edit', 'dict-type-delete', 'dict-item-add', 'dict-item-edit', 'dict-item-delete']
    //   }
    // }
  ]
}
export default systemRouter
