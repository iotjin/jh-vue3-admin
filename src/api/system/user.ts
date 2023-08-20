import request from '@/utils/request'
import { ResType } from '@/api/types'

// 查询列表
export function getUserList(params: object): ResType<UserType[]> {
  return request({
    url: '/v1/api/user/list',
    method: 'get',
    params: params
  })
}

// 新增、编辑
// 检查loginName重复
export function saveUser(data: object): ResType<object> {
  return request({
    url: '/v1/api/user/save',
    method: 'post',
    data: data
  })
}

// 新增
export function addUser(data: object): ResType<object> {
  return request({
    url: '/v1/api/user/save',
    method: 'post',
    data: data
  })
}

// 删除
// 不能删除自己的账户
export function deleteUser(data: object): ResType<object> {
  return request({
    url: '/v1/api/user/delete',
    method: 'post',
    data: data
  })
}

// 编辑
export function editUser(data: object): ResType<object> {
  return request({
    url: '/v1/api/user/save',
    method: 'post',
    data: data
  })
}

// 单条查询
export function getUserById(params: object): ResType<object> {
  return request({
    url: '/v1/api/user/',
    method: 'get',
    params: params
  })
}

// 重置密码
// 不能重置自己的密码
export function resetPwd(data: object): ResType<object> {
  return request({
    url: '/v1/api/user/resetPwd',
    method: 'post',
    data: data
  })
}

// 用户分配角色
// 先删除用户所有角色，再插入新勾选
// useId 用户id
// roleIds 角色id数组
export function assignRole(data: object): ResType<object> {
  return request({
    url: '/v1/api/user/assignRole',
    method: 'post',
    data: data
  })
}

// user type

export interface UserType {
  id: string
  name: string
  loginName: string
  userNumber: number
  deptId: string
  status: string
  userExpiryDate: string
  phone: string
  notes: string
  age: number
  money: number
  level: string
  loginDate: string
  loginIp: string
  createDate: string
  updateDate: string
  updateBy: string
  delFlag: string
}
