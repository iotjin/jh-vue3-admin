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
