import { MockMethod } from 'vite-plugin-mock'
const Mock = require('mockjs')

const listData = {
  id: '@id',
  'builtin|1': ['0', '0', '0', '0', '1'] // 是否内置，0否1是
}

function createListData(params: any, listData: any) {
  var itemData = JSON.parse(JSON.stringify(listData))
  if (!params.noData || params.noData === 'false') {
    var data = []
    var page = Number(params.page)
    var limit = params.limit ? params.limit : 10
    limit = Number(limit)
    var maxCount = params.maxCount ? params.maxCount : 1300
    maxCount = Number(maxCount)
    var skip = page * limit
    var length = skip + limit
    for (var i = skip; i < length; i++) {
      itemData.name = 'name' + i
      itemData.code = 'code' + i
      itemData.notes = 'notes' + i
      var temp = Mock.mock(itemData)
      if (i === 10) {
        temp.name = '管理员'
        temp.code = 'admin'
        temp.builtin = '1'
      }
      data.push(temp)
    }
    return skip >= maxCount ? '' : data
  } else {
    return ''
  }
}

export default [
  // 查询列表
  {
    url: '/v1/api/role/list',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: 50,
        data: tempArr
      }
    }
  },
  // 新增、编辑
  {
    url: '/v1/api/role/save',
    method: 'post',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: tempArr.length,
        data: tempArr
      }
    }
  },
  // 删除
  {
    url: '/v1/api/role/delete',
    method: 'post',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: tempArr.length,
        data: tempArr
      }
    }
  },
  // 单条查询
  {
    url: '/v1/api/role/',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      params.page = 1
      params.limit = 1
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: 1,
        data: tempArr[0]
      }
    }
  },
  // 根据用户id查询角色
  // userId
  // status : 0 未分配 1 已分配
  // name 角色名称
  {
    url: '/v1/api/roles/byUserId',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      if (params.status === '0') {
        // 未分配
        params.page = 1
        params.limit = 15
      } else {
        // 已分配
        params.page = 1
        params.limit = 5
      }
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: tempArr.length,
        data: tempArr
      }
    }
  },
  // 根据角色设置菜单权限
  {
    url: '/v1/api/role/setPermissions',
    method: 'post',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData)
      return {
        code: 20000,
        msg: 'success',
        total: tempArr.length,
        data: tempArr
      }
    }
  }
] as MockMethod[]
