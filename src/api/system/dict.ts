import request from '@/utils/request'
import { ResType } from '@/api/types'

// 查询字典类型列表
export function getDictTypeList(params: object) {
  return request({
    url: '/v1/api/dict/type/list',
    method: 'get',
    params: params
  })
}

// 新增、编辑
// 检查type重复
export function saveDictType(data: object) {
  return request({
    url: '/v1/api/dict/type/save',
    method: 'post',
    data: data
  })
}

// 新增
export function addDictType(data: object) {
  return request({
    url: '/v1/api/dict/type/save',
    method: 'post',
    data: data
  })
}

// 删除
// 删除一个类型（删除该类型下所有字典项）
export function deleteDictType(data: object) {
  return request({
    url: '/v1/api/dict/type/delete',
    method: 'post',
    data: data
  })
}

// 编辑
export function editDictType(data: object) {
  return request({
    url: '/v1/api/dict/type/save',
    method: 'post',
    data: data
  })
}

// 单条查询
export function getDictTypeById(params: object) {
  return request({
    url: '/v1/api/dict/type/',
    method: 'get',
    params: params
  })
}

// 查询字典项列表
export function getDictItemList(params: object) {
  return request({
    url: '/v1/api/dict/item/list',
    method: 'get',
    params: params
  })
}

// 新增、编辑
// 查询该类型是否已存在(根据type)，已存在该类型才能新增字典项
// 新增字典项要判断字典项是否存在(根据value)，已存在不能新增
export function saveDictItem(data: object) {
  return request({
    url: '/v1/api/dict/item/save',
    method: 'post',
    data: data
  })
}

// 新增
export function addDictItem(data: object) {
  return request({
    url: '/v1/api/dict/item/save',
    method: 'post',
    data: data
  })
}

// 删除
export function deleteDictItem(data: object) {
  return request({
    url: '/v1/api/dict/item/delete',
    method: 'post',
    data: data
  })
}

// 编辑
export function editDictItem(data: object) {
  return request({
    url: '/v1/api/dict/item/save',
    method: 'post',
    data: data
  })
}

// 单条查询
export function getDictItemById(params: object) {
  return request({
    url: '/v1/api/dict/item/',
    method: 'get',
    params: params
  })
}

// 根据字典类型type, 查询字典项列表，查询结果根据sort升序
// type
// export function getDictList(params: object): ResType<DictType[]> {
//   return request({
//     url: '/v1/api/dict/items/',
//     method: 'get',
//     params: params
//   })
// }

export function getDictList(params: object): ResType<DictType[]> {
  return request({
    url: '/v1/api/dict/items/',
    method: 'get',
    params: params
  })
}

// 获取多个字典类型及该类型所对应的字典项，查询结果根据sort升序
// types 通过逗号分隔传多个type进行查询
export function getMultiDictList(params: object): ResType<MultiDictType> {
  return request({
    url: '/v1/api/dicts/multiple/',
    method: 'get',
    params: params
  })
}

// dict type

export interface DictType {
  id: string | number
  label: string | number
  value: string | number
  children?: DictType[]
}

export interface MultiDictType {
  dept: DictType[]
  level: DictType[]
}
