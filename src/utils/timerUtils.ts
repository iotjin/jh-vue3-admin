// IntervalUtils.ts

class timerUtils {
  // 静态变量，用于存储所有定时器的引用
  private static intervals: Map<string, NodeJS.Timeout> = new Map()

  /**
   * 设置一个新的定时器，并将其存储在 intervals 中。
   * @param key 定时器的唯一标识符
   * @param callback 定时器的回调函数
   * @param delay 定时器的执行间隔（毫秒）
   */
  static setInterval(key: string, callback: () => void, delay: number): void {
    const interval = setInterval(callback, delay)
    this.intervals.set(key, interval)
  }

  /**
   * 清除指定 key 对应的定时器。
   * @param key 要清除的定时器的唯一标识符
   */
  static clearInterval(key: string): void {
    const interval = this.intervals.get(key)
    if (interval) {
      clearInterval(interval)
      this.intervals.delete(key)
    } else {
      console.warn(`Interval with key '${key}' not found.`)
    }
  }

  /**
   * 清除所有存储的定时器。
   */
  static clearAllIntervals(): void {
    this.intervals.forEach((interval) => {
      clearInterval(interval)
    })
    this.intervals.clear()
  }
}

export default timerUtils

/*
  使用方法：

 import timerUtils from '@/utils/timerUtils'


  onMounted(() => {
    timerUtils.setInterval('timer1',() => {
        console.log('Task 1 executed!')
    },1000)
    timerUtils.setInterval('timer2',() => {
        console.log('Task 2 executed!')
    },500)
  })

  onBeforeUnmount(() => {
  timerUtils.clearInterval('timer2')
  // timerUtils.clearAllIntervals()
  })

  */
