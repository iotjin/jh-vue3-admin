import request from '@/utils/request'
import { ResType } from '@/api/types'
import { getDictList, getMultiDictList } from '@/api/system/dict'

export function getListData(params: object): ResType<TableType[]> {
  return request({
    url: '/v1/api/table/list',
    method: 'get',
    params: params
  })
}

export function addData(params: object): ResType<object> {
  return request({
    url: '/v1/api/table/save',
    method: 'post',
    data: params
  })
}

export function deleteData(params: object): ResType<object> {
  return request({
    url: '/v1/api/table/delete',
    method: 'post',
    data: params
  })
}

export function editData(params: object): ResType<object> {
  return request({
    url: '/v1/api/table/save',
    method: 'post',
    data: params
  })
}

export function saveData(data: object): ResType<object> {
  return request({
    url: '/v1/api/user/save',
    method: 'post',
    data: data
  })
}

export function getDataById(id: string): ResType<object> {
  return request({
    url: '/v1/api/table/' + id,
    method: 'get'
  })
}

// 导出
export function exportById(params: object) {
  return request({
    url: '/v1/api/table/',
    method: 'get',
    params: params,
    responseType: 'blob'
  })
}

export function getDictLevel() {
  return getDictList({ type: 'level' })
}

export function getDictLeader() {
  return getDictList({ type: 'leader' })
}

export function getDictDept() {
  return getDictList({ type: 'dept' })
}

export function getDictDeptTree() {
  return getDictList({ type: 'deptTree' })
}

// table type

export interface TableType {
  id: string
  name: string
  name1: string
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
