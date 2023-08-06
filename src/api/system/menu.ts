import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { ResponseType } from '@/api/types'

// 查询所有菜单列表(包含按钮)
export function getAllMenuTreeList(params: any): ResponseType {
  return request({
    url: '/v1/api/menu/list',
    method: 'get',
    params: params
  })
}

// 新增、编辑
// 同级菜单名称不能相同
export function saveMenu(data: any): ResponseType {
  return request({
    url: '/v1/api/menu/save',
    method: 'post',
    data: data
  })
}

// 新增
export function addMenu(data: any): ResponseType {
  return request({
    url: '/v1/api/menu/save',
    method: 'post',
    data: data
  })
}

// 删除
// 存在子菜单禁止删除
export function deleteMenu(data: any): ResponseType {
  return request({
    url: '/v1/api/menu/delete',
    method: 'post',
    data: data
  })
}

// 编辑
export function editMenu(data: any): ResponseType {
  return request({
    url: '/v1/api/menu/save',
    method: 'post',
    data: data
  })
}

// 单条查询
export function getMenuById(params: any): ResponseType {
  return request({
    url: '/v1/api/menu/',
    method: 'get',
    params: params
  })
}

// 根据角色id查询所有菜单(包含按钮)和已有权限的菜单id数组 (角色管理-权限配置使用)
// roleId
export function getMenuTreeListByRoleId(params: any) {
  return request({
    url: '/v1/api/menus/byRoleId',
    method: 'get',
    params: params
  })
}

// 根据用户id查询所有菜单（已对按钮菜单进行处理）
// userId
export function getUserMenus(params: any) {
  return request({
    url: '/v1/api/menus/byUserId',
    method: 'get',
    params: params
  })
}
