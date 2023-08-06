import type { RouteRecordRaw, RouteMeta, RouteRecordRedirectOption } from 'vue-router'

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>)

// element-plus图标
// https://icon-sets.iconify.design/ep/
// 其他的
// https://icon-sets.iconify.design/
// 动态图标
// https://icon-sets.iconify.design/line-md/
// https://icon-sets.iconify.design/svg-spinners/

export interface AppRouteMetaType extends RouteMeta {
  title?: string
  icon?: string // 设置svg图标和通过iconify使用的element-plus图标，根据 : 判断是否是iconify图标
  hidden?: boolean
  affix?: boolean
  keepAlive?: boolean
  roles?: string[]
  buttons?: string[]
}

export interface AppRouteType extends Omit<RouteRecordRaw, 'props'> {
  path: string
  name?: string
  component?: Component | string
  components?: Component
  children?: AppRouteType[]
  fullPath?: string
  meta?: AppRouteMetaType
  redirect?: string
  alias?: string | string[]
}

// 动态路由类型
export interface AppDynamicRouteType extends AppRouteType {
  id: string
  code: string
  title: string
  parentId: string
  parentTitle: string
  menuType: string
  component: string | Component
  icon: string
  sort: number
  hidden: false
  level: number
  children?: AppDynamicRouteType[]
  buttons?: string[]
}

// const demoRoutes: AppDynamicRouteType = [
//   {
//     id: '22',
//     code: '/system',
//     title: '系统设置',
//     parentId: '',
//     parentTitle: '',
//     menuType: 'catalog', // catalog | menu | button
//     component: 'Layout', // "Layout" | "system/menu" (文件路径: src/views/) | ""
//     // component: Layout,
//     icon: 'el-icon-setting',
//     sort: 1,
//     hidden: false,
//     level: 1,
//     children: [
//       {
//         id: '22-1',
//         code: 'user',
//         title: '用户管理',
//         parentId: '22',
//         parentTitle: '系统设置',
//         menuType: 'menu',
//         component: 'system/user',
//         // component: () => import('@/views/system/user'),
//         icon: '',
//         sort: 2,
//         hidden: false,
//         level: 2,
//         children: [],
//         buttons: ['user-add', 'user-edit', 'user-look', 'user-export', 'user-delete', 'user-assign', 'user-resetPwd']
//       }
//     ]
//   }
// ]
