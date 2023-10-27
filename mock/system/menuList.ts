// Just a mock data

import { apiDoc } from '@/utils/const'

// 实际路由
const asyncRoutes = [
  {
    path: 'external-link',
    component: 'Layout',
    children: [
      {
        path: 'https://github.com/iotjin/jh-vue3-admin',
        meta: { title: '动态External Link', icon: 'link' }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    // component: Layout,
    component: 'Layout',
    meta: { title: 'System Settings', icon: 'table' },
    children: [
      {
        path: 'user',
        name: 'user',
        // component: () => import('@/views/system/user/index.vue'),
        component: 'system/user',
        meta: {
          title: 'User Management',
          roles: ['admin'],
          buttons: ['user-add', 'user-edit', 'user-look', 'user-export', 'user-delete', 'user-assign', 'user-resetPwd']
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// 获取的某用户的所有菜单数据，需要转成实际使用的路由
export const userMenuTreeListData = [
  // {
  //   id: '1',
  //   code: 'https://github.com/iotjin/jh-vue3-admin',
  //   title: 'External Link',
  //   parentId: '',
  //   parentTitle: '',
  //   menuType: 'catalog',
  //   component: 'Layout',
  //   icon: 'link',
  //   sort: 0,
  //   hidden: false,
  //   level: 1,
  //   children: []
  // },
  {
    id: '1',
    code: '/api',
    title: 'API 文档',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog',
    component: 'Layout',
    icon: 'link',
    sort: 0,
    hidden: false,
    level: 1,
    children: [
      {
        id: '1-1',
        code: apiDoc,
        title: 'API',
        parentId: '1',
        parentTitle: 'API 文档',
        menuType: 'extlink',
        component: 'Layout',
        icon: 'api',
        sort: 2,
        hidden: false,
        level: 2,
        buttons: []
      }
    ]
  },
  {
    id: '22',
    code: '/system',
    title: '系统设置',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog', // catalog | menu | button | extlink
    component: 'Layout', // "Layout" | "system/menu" (文件路径: src/views/) | ""
    // component: Layout,
    icon: 'ep:setting',
    sort: 1,
    hidden: false,
    level: 1,
    children: [
      {
        id: '22-1',
        code: 'user',
        title: '用户管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/user/index',
        // component: () => import('@/views/system/user'),
        icon: 'user',
        sort: 2,
        hidden: false,
        level: 2,
        children: [],
        buttons: ['user-add', 'user-edit', 'user-look', 'user-export', 'user-delete', 'user-assign', 'user-resetPwd']
      },
      {
        id: '22-2',
        code: 'role',
        title: '角色管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/role/index',
        icon: 'role',
        sort: 3,
        hidden: false,
        level: 2,
        children: [],
        buttons: ['role-add', 'role-edit', 'role-look', 'role-delete', 'role-setting']
      },
      {
        id: '22-3',
        code: 'menu',
        title: '菜单管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/menu/index',
        icon: 'menu',
        sort: 4,
        hidden: false,
        level: 2,
        children: [],
        buttons: ['menu-add', 'menu-edit', 'menu-look', 'menu-delete']
      },
      {
        id: '22-4',
        code: 'dict',
        title: '字典管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/dict/index',
        icon: 'dict',
        sort: 5,
        hidden: false,
        level: 2,
        children: [],
        buttons: ['dict-type-add', 'dict-type-edit', 'dict-type-delete', 'dict-item-add', 'dict-item-edit', 'dict-item-delete']
      }
    ]
  }
]

const testMenuTreeListData = [
  {
    id: '1',
    code: 'code1',
    title: '菜单名称1',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog', // catalog | menu | button
    component: 'Layout', // "Layout" | "system/menu" (文件路径: src/views/) | ""
    icon: 'tree',
    sort: 1,
    hidden: false,
    level: 1,
    children: [
      {
        id: '1-1',
        code: 'code1-1',
        title: '菜单名称1-1',
        parentId: '1',
        parentTitle: '菜单名称1',
        menuType: 'menu',
        component: 'system/menu',
        icon: '',
        sort: 2,
        hidden: false,
        level: 2,
        children: [
          {
            id: '1-1-1',
            code: 'code1-1-1',
            title: '菜单名称1-1-1',
            parentId: '1-1',
            parentTitle: '菜单名称1-1',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 4,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '1-1-2',
            code: 'code1-1-2',
            title: '菜单名称1-1-2',
            parentId: '1-1',
            parentTitle: '菜单名称1-1',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 5,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '1-1-3',
            code: 'code1-1-3',
            title: '菜单名称1-1-3',
            parentId: '1-1',
            parentTitle: '菜单名称1-1',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 6,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      },
      {
        id: '1-2',
        code: 'code1-2',
        title: '菜单名称1-2',
        parentId: '1',
        parentTitle: '菜单名称1',
        menuType: 'menu',
        component: 'system/menu',
        icon: '',
        sort: 3,
        hidden: false,
        level: 2,
        children: [
          {
            id: '1-2-1',
            code: 'code1-2-1',
            title: '菜单名称1-2-1',
            parentId: '1-2',
            parentTitle: '菜单名称1-2',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 10,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '2',
    code: 'code2',
    title: '菜单名称2',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog',
    component: 'Layout',
    icon: 'document',
    sort: 2,
    hidden: false,
    level: 1,
    children: [
      {
        id: '2-1',
        code: 'code2-1',
        title: '菜单名称2-1',
        parentId: '2',
        parentTitle: '菜单名称2',
        menuType: 'menu',
        component: 'system/menu',
        icon: '',
        sort: 2,
        hidden: false,
        level: 2,
        children: [
          {
            id: '2-1-1',
            code: 'code2-1-1',
            title: '菜单名称2-1-1',
            parentId: '2-1',
            parentTitle: '菜单名称2-1',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 4,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '2-1-2',
            code: 'code2-1-2',
            title: '菜单名称2-1-2',
            parentId: '2-1',
            parentTitle: '菜单名称2-1',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 5,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '2-1-3',
            code: 'code2-1-3',
            title: '菜单名称2-1-3',
            parentId: '2-1',
            parentTitle: '菜单名称2-1',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 6,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      },
      {
        id: '2-2',
        code: 'code2-2',
        title: '菜单名称2-2',
        parentId: '2',
        parentTitle: '菜单名称2',
        menuType: 'menu',
        component: 'system/menu',
        icon: '',
        sort: 3,
        hidden: false,
        level: 2,
        children: [
          {
            id: '2-2-1',
            code: 'code2-2-1',
            title: '菜单名称2-2-1',
            parentId: '2-2',
            parentTitle: '菜单名称2-2',
            menuType: 'menu',
            component: 'system/menu',
            icon: '',
            sort: 1,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '3',
    code: 'code3',
    title: '菜单名称3',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog',
    component: 'Layout',
    icon: 'edit',
    sort: 3,
    hidden: false,
    level: 1,
    children: [
      {
        id: '3-1',
        code: 'code3-1',
        title: '菜单名称3-1',
        parentId: '3',
        parentTitle: '菜单名称3',
        menuType: 'menu',
        component: 'system/menu',
        icon: '',
        sort: 1,
        hidden: false,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '4',
    code: 'code4',
    title: '菜单名称4',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog',
    component: 'Layout',
    icon: '',
    sort: 4,
    hidden: false,
    level: 1,
    children: [
      {
        id: '4-1',
        code: 'code4-1',
        title: '菜单名称4-1',
        parentId: '4',
        parentTitle: '菜单名称4',
        menuType: 'menu',
        component: 'system/menu',
        icon: '',
        sort: 1,
        hidden: false,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '5',
    code: 'code5',
    title: '菜单名称5',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog',
    component: 'Layout',
    icon: '',
    sort: 5,
    hidden: false,
    level: 1,
    children: []
  }
]

const sysMenuTreeListData = [
  {
    id: '22',
    code: '/system',
    title: '系统设置',
    parentId: '',
    parentTitle: '',
    menuType: 'catalog', // catalog | menu | button
    component: 'Layout', // "Layout" | "system/menu" (文件路径: src/views/) | ""
    icon: 'ep:setting',
    sort: 1,
    hidden: false,
    level: 1,
    children: [
      {
        id: '22-1',
        code: 'user',
        title: '用户管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/user/index',
        icon: 'user',
        sort: 2,
        hidden: false,
        level: 2,
        children: [
          {
            id: '22-1-1',
            code: 'user-add',
            title: '用户管理-新增',
            parentId: '22-1',
            parentTitle: '用户管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 11,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-1-2',
            code: 'user-edit',
            title: '用户管理-编辑',
            parentId: '22-1',
            parentTitle: '用户管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 12,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-1-3',
            code: 'user-look',
            title: '用户管理-查看',
            parentId: '22-1',
            parentTitle: '用户管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 13,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-1-4',
            code: 'user-export',
            title: '用户管理-导出',
            parentId: '22-1',
            parentTitle: '用户管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 14,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-1-5',
            code: 'user-delete',
            title: '用户管理-删除',
            parentId: '22-1',
            parentTitle: '用户管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 15,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-1-6',
            code: 'user-assign',
            title: '用户管理-角色分配',
            parentId: '22-1',
            parentTitle: '用户管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 16,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-1-7',
            code: 'user-resetPwd',
            title: '用户管理-重置密码',
            parentId: '22-1',
            parentTitle: '用户管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 17,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      },
      {
        id: '22-2',
        code: 'role',
        title: '角色管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/role/index',
        icon: 'role',
        sort: 3,
        hidden: false,
        level: 2,
        children: [
          {
            id: '22-2-1',
            code: 'role-add',
            title: '角色管理-新增',
            parentId: '22-2',
            parentTitle: '角色管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 21,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-2-2',
            code: 'role-edit',
            title: '角色管理-编辑',
            parentId: '22-2',
            parentTitle: '角色管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 22,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-2-3',
            code: 'role-look',
            title: '角色管理-查看',
            parentId: '22-2',
            parentTitle: '角色管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 23,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-2-4',
            code: 'role-delete',
            title: '角色管理-删除',
            parentId: '22-2',
            parentTitle: '角色管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 24,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-2-5',
            code: 'role-setting',
            title: '角色管理-权限配置',
            parentId: '22-2',
            parentTitle: '角色管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 25,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      },
      {
        id: '22-3',
        code: 'menu',
        title: '菜单管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/menu/index',
        icon: 'menu',
        sort: 4,
        hidden: false,
        level: 2,
        children: [
          {
            id: '22-3-1',
            code: 'menu-add',
            title: '菜单管理-新增',
            parentId: '22-3',
            parentTitle: '菜单管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 31,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-3-2',
            code: 'menu-edit',
            title: '菜单管理-编辑',
            parentId: '22-3',
            parentTitle: '菜单管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 32,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-3-3',
            code: 'menu-look',
            title: '菜单管理-查看',
            parentId: '22-3',
            parentTitle: '菜单管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 33,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-3-4',
            code: 'menu-add',
            title: '菜单管理-删除',
            parentId: '22-3',
            parentTitle: '菜单管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 34,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      },
      {
        id: '22-4',
        code: 'dict',
        title: '字典管理',
        parentId: '22',
        parentTitle: '系统设置',
        menuType: 'menu',
        component: 'system/dict/index',
        icon: 'dict',
        sort: 5,
        hidden: false,
        level: 2,
        children: [
          {
            id: '22-4-1',
            code: 'dict-type-add',
            title: '字典管理-字典类型-新增',
            parentId: '22-4',
            parentTitle: '字典管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 41,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-4-2',
            code: 'dict-type-edit',
            title: '字典管理-字典类型-编辑',
            parentId: '22-4',
            parentTitle: '字典管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 42,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-4-3',
            code: 'dict-type-delete',
            title: '字典管理-字典类型-删除',
            parentId: '22-4',
            parentTitle: '字典管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 43,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-4-4',
            code: 'dict-item-add',
            title: '字典管理-字典项-新增',
            parentId: '22-4',
            parentTitle: '字典管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 44,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-4-5',
            code: 'dict-item-edit',
            title: '字典管理-字典项-编辑',
            parentId: '22-4',
            parentTitle: '字典管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 45,
            hidden: false,
            level: 3,
            children: []
          },
          {
            id: '22-4-6',
            code: 'dict-item-delete',
            title: '字典管理-字典项-删除',
            parentId: '22-4',
            parentTitle: '字典管理',
            menuType: 'button',
            component: '',
            icon: '',
            sort: 46,
            hidden: false,
            level: 3,
            children: []
          }
        ]
      }
    ]
  }
]

// 菜单管理所有菜单(包含按钮)
export const allMenuTreeListData = sysMenuTreeListData.concat(testMenuTreeListData)
