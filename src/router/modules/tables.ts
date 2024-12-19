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
      component: () => import('@/views/demos/tables/table1/index.vue'),
      // meta: { title: 'table1 - 综合示例', icon: 'ep:grid' }
      meta: { title: 'Table1', icon: 'ep:grid' }
    },
    {
      path: 'table2',
      name: 'table2',
      component: () => import('@/views/demos/tables/table2/index.vue'),
      // meta: { title: 'table2 - 动态表格', icon: 'ep:grid' }
      meta: { title: 'Table2', icon: 'ep:grid' }
    },
    {
      path: 'table3',
      name: 'table3',
      component: () => import('@/views/demos/tables/table3.vue'),
      meta: { title: 'table3 - 行多层嵌套', icon: 'ep:grid' }
    },
    {
      path: 'table4',
      name: 'table4',
      component: () => import('@/views/demos/tables/table4.vue'),
      meta: { title: 'table4 - 行多层嵌套', icon: 'ep:grid' }
    },
    {
      path: 'table5',
      name: 'table5',
      component: () => import('@/views/demos/tables/table5.vue'),
      meta: { title: 'table5 - 合并单元格', icon: 'ep:grid' }
    },
    {
      path: 'table6',
      name: 'table6',
      component: () => import('@/views/demos/tables/table6/index.vue'),
      meta: { title: 'table6 - 行嵌套子组件', icon: 'ep:grid' }
    },
    {
      path: 'table7',
      name: 'table7',
      component: () => import('@/views/demos/tables/table7/index.vue'),
      meta: { title: 'table7 - 行嵌套子组件', icon: 'ep:grid' }
    },
    {
      path: 'table8',
      name: 'table8',
      component: () => import('@/views/demos/tables/table8.vue'),
      meta: { title: 'table8 - 动态列', icon: 'ep:grid' }
    },
    {
      path: 'table9',
      name: 'table9',
      component: () => import('@/views/demos/tables/table9.vue'),
      meta: { title: 'table9 - 行拖拽排序-指令实现', icon: 'ep:grid' }
    },
    {
      path: 'table10',
      name: 'table10',
      component: () => import('@/views/demos/tables/table10.vue'),
      meta: { title: 'table10 - 行拖拽排序', icon: 'ep:grid' }
    },
    {
      path: 'table11',
      name: 'table11',
      component: () => import('@/views/demos/tables/table11.vue'),
      meta: { title: 'table11 - 自定义滚动条', icon: 'ep:grid' }
    },
    {
      path: 'table12',
      name: 'table12',
      component: () => import('@/views/demos/tables/table12.vue'),
      meta: { title: 'table12', icon: 'ep:grid' }
    }
  ]
}
export default othersRouter
