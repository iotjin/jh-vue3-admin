/**
 * @description: 深拷贝
 * @param {any} source
 * @return {*}
 */
export function deepClone<T>(source: { [key: string]: any }) {
  if (!source || typeof source !== 'object') {
    return source
  }

  const targetObj = (Array.isArray(source) ? [] : {}) as { [key: string]: any }

  Object.keys(source).forEach((key) => {
    if (source[key] && typeof source[key] === 'object') {
      targetObj[key] = deepClone(source[key])
    } else {
      targetObj[key] = source[key]
    }
  })

  return targetObj
}
