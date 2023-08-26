import request from '@/utils/request'
import { ResType } from '@/api/types'

// 查询列表
export function getRoleList(params: object): ResType<RoleType[]> {
  return request({
    url: '/v1/api/role/list',
    method: 'get',
    params: params
  })
}

// 新增、编辑
// name或code任意一个都不能重复
export function saveRole(data: object): ResType<object> {
  return request({
    url: '/v1/api/role/save',
    method: 'post',
    data: data
  })
}

// 新增
export function addRole(data: object): ResType<object> {
  return request({
    url: '/v1/api/role/save',
    method: 'post',
    data: data
  })
}

// 删除
// 1、系统内置角色不能删除
// 2、已经分配用户的角色不能删除
export function deleteRole(data: object): ResType<object> {
  return request({
    url: '/v1/api/role/delete',
    method: 'post',
    data: data
  })
}

// 编辑
export function editRole(data: object): ResType<object> {
  return request({
    url: '/v1/api/role/save',
    method: 'post',
    data: data
  })
}

// 单条查询
export function getRoleById(params: object): ResType<object> {
  return request({
    url: '/v1/api/role/',
    method: 'get',
    params: params
  })
}

// 根据用户id查询角色
// userId
// status : 0 未分配 1 已分配
// name 角色名称
export function getRoleListByUserId(params: object): ResType<RoleType[]> {
  return request({
    url: '/v1/api/roles/byUserId',
    method: 'get',
    params: params
  })
}

// 根据角色设置菜单权限
export function roleSetPermissions(data: object): ResType<object> {
  return request({
    url: '/v1/api/role/setPermissions',
    method: 'post',
    data: data
  })
}

// role type

export interface RoleType {
  id: string
  builtin: string
  name: string
  code: string
  notes: string
}
