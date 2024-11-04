import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
import { createListData, createListAllCount } from './tableList'

const data = Mock.mock({
  'items|30': [
    {
      id: '@id',
      name: '@cname',
      'content|1-18': '这是内容',
      createDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
      updateDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
      phone: /^1[387][0-9]{9}$/,
      updateBy: '@cname',
      money: '@float(0, 1000, 1, 2)',
      age: '@integer(1,100)',
      'level|1': ['1', '2', '3'],
      'status|1': ['0', '1'],
      'isUse|1': ['0', '1'],
      'state|1': ['0', '1', '2', '3', '4', '5']
    }
  ]
})

const listData = {
  id: '@id',
  name: '@cname',
  name1: '@cname',
  'content|1-18': '这是内容',
  'notes|1-18': '这是内容',
  createDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
  updateDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
  userNumber: '@integer(10000000,99999999)',
  'deptId|1': ['dept1', 'dept2', 'dept3'],
  userExpiryDate: '@datetime("yyyy-MM-dd")',
  loginDate: '@datetime("yyyy-MM-dd HH:mm:ss")',
  loginIp: '@ip',
  phone: /^1[387][0-9]{9}$/,
  updateBy: '@cname',
  money: '@float(0, 1000, 1, 2)',
  age: '@integer(1,100)',
  'level|1': ['1', '2', '3'],
  'status|1': ['0', '1'],
  'isUse|1': ['0', '1'],
  'state|1': ['0', '1', '2', '3', '4', '5'],
  'subId|1': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  // 'subIds': '8,10',
  subIds: ['8', '10'],
  subIds2: ['1', '2', '3']
}

const mock: Array<MockMethod> = [
  {
    url: '/v1/api/table/list0',
    method: 'get',
    response: (config: any) => {
      const tempArr = data.items
      return {
        code: 20000,
        msg: 'success',
        total: tempArr.length,
        data: tempArr
      }
    }
  },
  // 查询列表
  {
    url: '/v1/api/table/list',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: 1000,
        data: tempArr
      }
    }
  },
  // 新增、编辑
  {
    url: '/v1/api/table/save',
    method: 'post',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: 1000,
        data: tempArr
      }
    }
  },
  // 删除
  {
    url: '/v1/api/table/delete',
    method: 'post',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: 1000,
        data: tempArr
      }
    }
  },

  // 单条查询
  {
    url: '/v1/api/table/:id',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      params.page = 1
      params.limit = 1
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: 1000,
        data: tempArr[0]
      }
    }
  }
]

export default mock
