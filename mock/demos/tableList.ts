import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [
    {
      id: '@id',
      title: '@sentence(10, 20)',
      createDate: '@datetime',
      updateDate: '@datetime',
      'username|1': ['admin0', 'admin1', 'admin2'],
      'name|1': ['刘一一一', '陈二儿', '张三儿', '李四', '王五', '赵六六', '孙七', '周八', '吴九九', '郑十'],
      name2: '@cname',
      'state|1': ['0', '1', '2', '3', '4', '5'],
      money: '@float(0, 1000, 1, 2)',
      bool: '@Boolean',
      email: '@email(163.com)',
      province: '@province',
      city: '@city',
      area: '@county',
      age: '@integer(1,100)',
      num: '@integer(1,50)',
      color: '@color',
      IDCard: '@ID',
      'sex|1': ['0', '1'],
      dateTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
      phone: /^1[387][0-9]{9}$/,
      'content|1-8': '这是内容',
      imageUrl: 'https://gitee.com/iotjh/Picture/raw/master/lufei.png'
    }
  ]
})

export function createListAllCount() {
  return Mock.mock('@integer(0,1000)')
}

export function createListData(params: any, itemData: any) {
  if (!params.noData || params.noData === 'false') {
    var data = []
    /* 页码 */
    var page = Number(params.page)
    /* 每页条数 */
    var limit = params.limit ? params.limit : 10
    limit = Number(limit)
    /* 最大条数 */
    var maxCount = params.maxCount ? params.maxCount : 1300
    maxCount = Number(maxCount)

    /* 跳过的页码 */
    var skip = page * limit
    /* 要返回的数据的总长度 */
    var length = skip + limit

    for (var i = skip; i < length; i++) {
      // var temp = Mock.mock({
      //   'id': i,
      //   'title': 'title' + '@id',
      //   'text': '这是文字' + '@id',
      //   'username|1': ['admin0', 'admin1', 'admin2'],
      //   'name|1': ['刘一一一', '陈二儿', '张三儿', '李四', '王五', '赵六六', '孙七', '周八', '吴九九', '郑十'],
      //   'name2': '@cname' + '@id',
      //   'state|1': ['0', '1', '2', '3', '4', '5'],
      //   'money': '@float(0, 1000, 1, 2)',
      //   'bool': '@Boolean',
      //   'time': '@time',
      //   'email': '@email(163.com)',
      //   'province': '@province',
      //   'city': '@city',
      //   'area': '@county',
      //   'age': '@integer(1,100)',
      //   'color': '@color',
      //   'img': '@image',
      //   'IDCard': '@ID',
      //   'sex|1': ['0', '1'],
      //   'dateTime': '@datetime("yyyy/MM/dd HH:mm:ss")',
      //   'place': '@city ' + '@id',
      //   'phone': /^1[387][0-9]{9}$/,
      //   'content|1-8': '这是内容',
      //   'imageUrl': 'https://gitee.com/iotjh/Picture/raw/master/lufei.png'
      // })
      itemData.title = 'title' + i
      itemData.text = '这是文字' + i
      var temp = Mock.mock(itemData)
      temp.name += i
      data.push(temp)
    }

    return skip >= maxCount ? '' : data
  } else {
    return ''
  }
}
