const level = [
  { id: '1', value: '1', label: '一级' },
  { id: '2', value: '2', label: '二级' },
  { id: '3', value: '3', label: '三级' }
]

const status = [
  { id: '1', value: 'status1', label: '状态1' },
  { id: '2', value: 'status2', label: '状态2' },
  { id: '3', value: 'status3', label: '状态3' },
  { id: '4', value: 'status4', label: '状态4' },
  { id: '5', value: 'status5', label: '状态5' },
  { id: '6', value: 'status6', label: '状态6' }
]

const leader = [
  { id: '1', value: 'leader1', label: '负责人1' },
  { id: '2', value: 'leader2', label: '负责人2' },
  { id: '3', value: 'leader3', label: '负责人3' },
  { id: '4', value: 'leader4', label: '负责人4' },
  { id: '5', value: 'leader5', label: '负责人5' }
]

const dept = [
  {
    id: 'f505a4b97b151d141d122a3d323c87ee1',
    label: '部门一',
    value: 'dept1'
  },
  {
    id: 'f505a4b97b151d141d122a3d323c87ee2',
    label: '部门二',
    value: 'dept2'
  },
  {
    id: 'f505a4b97b151d141d122a3d323c87ee3',
    label: '部门三',
    value: 'dept3'
  }
]

const deptTree = [
  {
    id: '1',
    label: '一级 1',
    children: [
      {
        id: '4',
        label: '二级 1-1',
        children: [
          {
            id: '9',
            label: '三级 1-1-1'
          },
          {
            id: '10',
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    label: '一级 2',
    children: [
      {
        id: '5',
        label: '二级 2-1'
      },
      {
        id: '6',
        label: '二级 2-2'
      }
    ]
  },
  {
    id: '3',
    label: '一级 3',
    children: [
      {
        id: '7',
        label: '二级 3-1'
      },
      {
        id: '8',
        label: '二级 3-2'
      }
    ]
  }
]

export function createDictData(params: any, isMultiple = false) {
  if (!isMultiple) {
    // 查单个
    const type = params.type
    if (type === 'level') {
      return level
    } else if (type === 'status') {
      return status
    } else if (type === 'leader') {
      return leader
    } else if (type === 'dept') {
      return dept
    } else if (type === 'deptTree') {
      return deptTree
    }
    return []
  } else {
    // 查多个
    const types = params.types
    if (types === 'dept,level') {
      return {
        dept: dept,
        level: level
      }
    }
    return {}
  }
}
