import { setStorage, getStorage } from '@/utils/storage'
import { getCheckUpgrade } from '@/api/auth'
const kCheckUpdateVersion = 'checkUpdateVersion'
const { checkUpdateVersion } = __APP_INFO__

// 方式一： 通过build\info.ts 配置的版本号和本地进行比较
export const checkUpgrade = () => {
  const version = getVersion()
  let needUpgrade = false
  if ((version && version !== checkUpdateVersion) || !version) {
    needUpgrade = true
  }
  return needUpgrade
}

export const getVersion = () => {
  return getStorage(kCheckUpdateVersion)
}

export const setVersion = (newVersion = checkUpdateVersion) => {
  setStorage(kCheckUpdateVersion, newVersion)
}

// 方式二
// 请求查询index.html中script和之前保存在本地的比较是否有变化，如果有则显示升级弹窗
export const getScript = async () => {
  const html = await fetch('/?_timestamp=' + Date.now()).then((res) => res.text())
  const reg = new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/gi) // script正则
  const script = html.match(reg)
  const scriptStr = JSON.stringify(script)
  console.log('script', JSON.stringify(scriptStr))
  const scriptStrLocal = getStorage('scriptStr')
  if ((scriptStr && scriptStr !== scriptStrLocal) || !scriptStrLocal) {
    // setStorage('scriptStr', scriptStr)
    return true
  }
  return false
}

// ******************** 分割线 ********************

let activeCount: number = 0
const MAX_INACTIVE_COUNT: number = 5
const MAX_INACTIVE_COUNT_HIDDEN: number = 1
let pollingInterval: NodeJS.Timeout | null = null
const normalInterval = 1000 * 60 * 30
const isLimitTimer = true

export function startPolling(callback: () => void, interval: number = normalInterval): void {
  // 首次执行
  callback()

  pollingInterval = setInterval(() => {
    if (document.visibilityState === 'visible') {
      if (isLimitTimer) {
        activeCount++
        if (activeCount >= MAX_INACTIVE_COUNT) {
          stopPolling()
        }
      } else {
        activeCount = 0
      }
      callback() // 执行轮询任务的回调函数
    } else {
      activeCount++
      if (activeCount >= MAX_INACTIVE_COUNT_HIDDEN) {
        stopPolling()
      }
    }
  }, interval)
}

export function stopPolling(): void {
  if (pollingInterval) {
    clearInterval(pollingInterval)
    pollingInterval = null
  }
}

export function visibilityChange(callback: () => void, interval: number = normalInterval): void {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      activeCount = 0
      stopPolling()
      // 页面可见时重新开始轮询
      startPolling(callback, interval)
    } else {
      activeCount++
      if (activeCount >= MAX_INACTIVE_COUNT_HIDDEN) {
        stopPolling()
      }
    }
  })
}

/**
 * @description: 比较版本号
 * @param {string} version1
 * @param {string} version2
 * @return {*} version1>version2 返回 1；如果小于返回 -1；如果相等 返回 0
 */
export function compareVersions(version1: string, version2: string): number {
  const parts1: number[] = version1.split('.').map((part) => parseInt(part))
  const parts2: number[] = version2.split('.').map((part) => parseInt(part))

  const maxLength: number = Math.max(parts1.length, parts2.length)

  for (let i = 0; i < maxLength; i++) {
    const num1: number = parts1[i] || 0
    const num2: number = parts2[i] || 0

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
    // 如果相等，则继续比较下一个部分
  }

  return 0 // 如果版本号完全相等
}

export function requestCheckUpgrade() {
  return new Promise((resolve, reject) => {
    getCheckUpgrade()
      .then((res) => {
        if (res.code === 20000) {
          var data = JSON.parse(JSON.stringify(res.data))
          let needUpgrade = false
          const version = getVersion()
          // console.log('version', JSON.stringify(version))
          // console.log('data.version', JSON.stringify(data.version))
          // console.log('checkUpdateVersion', JSON.stringify(checkUpdateVersion))
          // console.log('needUpgrade', compareVersions(data.version, version ? version : checkUpdateVersion))
          if (compareVersions(data.version, version ? version : checkUpdateVersion) === 1) {
            needUpgrade = true
          }
          var dict = { needUpgrade: needUpgrade, upgradeData: data }
          resolve(dict)
        } else {
          reject(res.msg)
          ElMessage.warning(res.msg)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
