import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { createDictData } from './dictList'

const listData = {
  id: '@id',
  'builtin|1': ['0', '0', '0', '0', '1'] // 是否内置，0否1是
}

// type : type, item
function createListData(params: any, listData: any, type = 'type') {
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
      if (type === 'type') {
        itemData.name = 'name' + i
        itemData.type = 'type' + i
      } else {
        itemData.label = 'label' + i
        itemData.value = 'value' + i
        if (params.type) {
          itemData.type = params.type
        }
      }
      itemData.sort = Number(i) // 长度小于11
      itemData.notes = type + ' notes' + i
      var temp = Mock.mock(itemData)
      // if (type !== 'type') {
      //   delete temp.builtin
      // }
      data.push(temp)
    }
    return skip >= maxCount ? '' : data
  } else {
    return ''
  }
}

export default [
  // 查询字典类型列表
  {
    url: '/v1/api/dict/type/list',
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
    url: '/v1/api/dict/type/save',
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
    url: '/v1/api/dict/type/delete',
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
    url: '/v1/api/dict/type/',
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
  // 查询字典项列表
  {
    url: '/v1/api/dict/item/list',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      const tempArr = createListData(params, listData, 'item')
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
    url: '/v1/api/dict/item/save',
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
    url: '/v1/api/dict/item/delete',
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
    url: '/v1/api/dict/item/',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      params.page = 1
      params.limit = 1
      const tempArr = createListData(params, listData, 'item')
      return {
        code: 20000,
        msg: 'success',
        total: 1,
        data: tempArr[0]
      }
    }
  },
  // 根据字典类型type, 查询字典项列表，查询结果根据sort升序
  // type
  {
    url: '/v1/api/dict/items/',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      const tempArr = createDictData(params, false)
      return {
        code: 20000,
        msg: 'success',
        data: tempArr
      }
    }
  },
  // 获取多个字典类型及该类型所对应的字典项，查询结果根据sort升序
  // types 通过逗号分隔传多个type进行查询
  {
    url: '/v1/api/dicts/multiple/',
    method: 'get',
    response: (config: any) => {
      const params = config.query
      const tempDict = createDictData(params, true)
      return {
        code: 20000,
        msg: 'success',
        data: tempDict
      }
    }
  }
] as MockMethod[]
