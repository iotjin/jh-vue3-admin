import { MockMethod } from 'vite-plugin-mock'
const { allMenuTreeListData, userMenuTreeListData } = require('./menuList')

export default [
  // 查询所有菜单列表(包含按钮)
  {
    url: '/v1/api/menu/list',
    method: 'get',
    response: (config: any) => {
      return {
        code: 20000,
        msg: 'success',
        total: allMenuTreeListData.length,
        data: allMenuTreeListData
      }
    }
  },
  // 新增、编辑
  {
    url: '/v1/api/menu/save',
    method: 'post',
    response: (config: any) => {
      return {
        code: 20000,
        msg: 'success',
        total: 0,
        data: []
      }
    }
  },
  // 删除
  {
    url: '/v1/api/menu/delete',
    method: 'post',
    response: (config: any) => {
      return {
        code: 20000,
        msg: 'success',
        total: 0,
        data: []
      }
    }
  },
  // 单条查询
  {
    url: '/v1/api/menu/',
    method: 'get',
    response: (config: any) => {
      console.log(config)
      return {
        code: 20000,
        msg: 'success',
        total: 1,
        data: [allMenuTreeListData[0]]
      }
    }
  },
  // 根据角色id查询所有菜单(包含按钮)和已有权限的菜单id数组 (角色管理-权限配置使用)
  // roleId
  {
    url: '/v1/api/menus/byRoleId',
    method: 'get',
    response: (config: any) => {
      return {
        code: 20000,
        msg: 'success',
        total: allMenuTreeListData.length,
        data: {
          menuTree: allMenuTreeListData,
          // menuIds: ['1', '2-1-2', '5']
          menuIds: ['1', '1-1', '1-1-1', '1-1-2', '1-1-3', '1-2', '1-2-1', '2', '2-1', '2-1-2', '5']
        }
      }
    }
  },
  // 根据用户id查询所有菜单（对按钮菜单进行处理）
  // userId
  {
    url: '/v1/api/menus/byUserId',
    method: 'get',
    response: (config: any) => {
      return {
        code: 20000,
        msg: 'success',
        total: 1,
        data: userMenuTreeListData
      }
    }
  }
] as MockMethod[]
