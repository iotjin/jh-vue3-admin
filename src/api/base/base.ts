import { getDictList, getMultiDictList } from '@/api/system/dict'

export function getDictDept() {
  return getDictList({ type: 'dept' })
}

export function getDictDeptTree() {
  return getDictList({ type: 'deptTree' })
}

export function getDictLevel() {
  return getDictList({ type: 'level' })
}

export function getDictLeader() {
  return getDictList({ type: 'leader' })
}

export function getDictDeptAndLevel() {
  return getMultiDictList({ types: 'dept,level' })
}
