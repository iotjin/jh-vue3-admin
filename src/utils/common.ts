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

/**
 * @description: 获取static路径下的图片
 * new URL(url, import.meta.url) https://www.vitejs.net/guide/assets.html#new-url-url-import-meta-url
 * @param {string} name 图片名称带后缀
 * @return {*}
 */
export const getImgPath = (name: string): any => {
  return new URL(`/src/assets/images/static/${name}`, import.meta.url).href
  // TODO: 下面这样写加载失败，也不可以用@/assets/xxx
  // return new URL('/src/assets/images/static/' + name, import.meta.url).href
}

/**
 * @description: 防抖函数
 * @param {Function} func 需要防抖处理的函数
 * @param {number} wait 延迟时间，单位为毫秒
 * @return {*}
 */
export function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>
  return function (...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * @description: 节流函数
 * @param {Function} func 需要节流处理的函数
 * @param {number} delay 延迟时间，单位为毫秒
 * @return {*}
 */
export function throttle(func: Function, delay: number) {
  let flag = true
  return function (...args: any[]) {
    if (!flag) {
      // 如果未超过时间间隔，flag无效，不执行函数
      return
    }
    func(...args)
    flag = false // 在时间间隔内把状态位flag设为无效（false）
    setTimeout(() => {
      flag = true // 超过时间间隔把状态位flag设为有效（true）
    }, delay)
  }
}
