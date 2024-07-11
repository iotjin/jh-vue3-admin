// localStorage util

import CryptoJS from 'crypto-js'

// 16或32位密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse('1231231231231231')
// 16位密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse('4564564564564564')

interface configType {
  type: 'localStorage' | 'sessionStorage'
  prefix: string
  expire: number
  isEncryptKey: boolean
  isEncryptValue: boolean
}

// 类型 window.localStorage, window.sessionStorage
const config: configType = {
  type: 'localStorage', // 本地存储类型 sessionStorage
  prefix: 'jh-vue3-admin' + '_', // key前缀
  expire: 3600 * 24 * 365, // 过期时间 单位：秒
  isEncryptKey: true, // key默认加密
  isEncryptValue: true // value默认加密
}

/**
 * @description: 判断是否支持 Storage
 * @return {*}
 */
export const isSupportStorage = (): boolean => {
  return typeof Storage !== 'undefined'
}

/**
 * @description: 存数据（设置 setStorage）
 * @param {*} key
 * @param {*} value 存储的值
 * @param {*} expire 自定义过期时间（单位：秒）
 * @return {*}
 */
export const setStorage = <T>(key: string, value: T | null | undefined, expire: number = 0): void => {
  if (value === null || value === undefined) {
    value = null
  }

  if (isNaN(expire) || expire < 0) throw new Error('Expire must be a number')

  expire = (expire || config.expire) * 1000

  const data = {
    value: value, // 存储值
    time: Date.now(), // 存值时间戳
    expire: expire // 过期时间
  }

  const dataStr = JSON.stringify(data)
  const encryptValueStr = config.isEncryptValue ? encrypt(dataStr) : dataStr
  // 存储
  try {
    const storage = window[config.type]

    window[config.type].setItem(autoAddPrefix(key), encryptValueStr)
  } catch (error) {
    // 满了提示或直接清空
    var text = 'Local Storage is full, Please empty data'
    alert(text)
  }
}

/**
 * @description: 取数据（获取 getStorage）
 * @param {*} key
 * @return {*}
 */
export const getStorage = (key: string): any => {
  const newKey = autoAddPrefix(key)
  const value = window[config.type].getItem(newKey)

  // 判断是否存在
  if (!value || JSON.stringify(value) === 'null' || !hasStorage(key)) {
    return null
  }

  // 持续使用中续期
  const storage = JSON.parse(config.isEncryptValue ? decrypt(value) : value)

  const nowTime = Date.now()

  // 过期删除
  if (storage.expire && config.expire * 1000 < nowTime - storage.time) {
    removeStorage(newKey)
    return null
  } else {
    // 未过期期间被调用 则自动续期 进行保活
    setStorage(key, storage.value)
    return storage.value
  }
}

/**
 * @description: 某个key是否存在 hasStorage
 * @param {*} key
 * @return {*}
 */
export const hasStorage = (key: string): boolean => {
  key = autoAddPrefix(key)
  const arr = getStorageAll().filter((item: any) => {
    return item.key === key
  })
  return !!arr.length
}

/**
 * @description: 获取所有key
 * @return {*}
 */
export const getStorageKeys = (): (string | null)[] => {
  const items = getStorageAll()
  const keys = []
  for (let index = 0; index < items.length; index++) {
    keys.push(items[index].key)
  }
  return keys
}

/**
 * @description: 根据索引获取key
 * @param {*} index
 * @return {*}
 */
export const getStorageForIndex = (index: number): string | null => {
  return window[config.type].key(index)
}

/**
 * @description: 获取localStorage长度
 * @return {*}
 */
export const getStorageLength = (): number => {
  return window[config.type].length
}

/**
 * @description: 获取全部数据 getAllStorage
 * @return {*} 数组
 */
export const getStorageAll = (): any => {
  const len = window[config.type].length // 获取长度
  const arr = [] // 定义数据集
  for (let i = 0; i < len; i++) {
    // 获取key 索引从0开始
    const getKey = window[config.type].key(i)
    if (getKey !== null) {
      // 获取key对应的值
      const getVal = window[config.type].getItem(getKey)
      // 放进数组
      arr.push({ key: getKey, val: getVal })
    }
  }
  return arr
}

/**
 * @description: 删数据（删除 removeStorage）
 * @param {*} key
 * @return {*}
 */
export const removeStorage = (key: string): void => {
  window[config.type].removeItem(autoAddPrefix(key))
}

/**
 * @description: 清空数据 clearStorage
 * @return {*}
 */
export const clearStorage = (): void => {
  window[config.type].clear()
}

/**
 * @description: 已使用大小
 * @return {*}
 */
export const getUseSize = () => {
  var size = 0
  for (var item in window[config.type]) {
    // var hasOwnProperty = window[config.type].hasOwnProperty(item)
    var has = Object.prototype.hasOwnProperty.call(window[config.type], item)
    if (has) {
      const getVal = window[config.type].getItem(item)
      if (getVal !== null) {
        size += getVal.length
      }
    }
  }
  console.log('used: ' + (size / 1024).toFixed(2) + 'KB')
}

// 名称前自动添加前缀
const autoAddPrefix = (key: string) => {
  const encryptKey = config.isEncryptKey ? encrypt(key) : key // key先加密再加前缀
  const prefix = config.prefix ? config.prefix : ''
  return prefix + encryptKey
}

// 移除已添加的前缀
// const autoRemovePrefix = (key) => {
//   const len = config.prefix ? config.prefix.length : '';
//   return key.substr(len);
// };

/**
 * @description: 字符串加密
 * @param {*} dataStr
 * @return {*}
 */
const encrypt = (dataStr: any): any => {
  const dataHex = CryptoJS.enc.Utf8.parse(dataStr)
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

/**
 * @description: 字符串解密
 * @param {*} dataStr
 * @return {*}
 */
const decrypt = (dataStr: any): any => {
  const encryptedStr = CryptoJS.enc.Base64.parse(dataStr)
  const str = CryptoJS.enc.Base64.stringify(encryptedStr)
  const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}
