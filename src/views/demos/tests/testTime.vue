<template>
  <div>
    <el-descriptions title="TimeUtils" :column="1" border>
      <el-descriptions-item width="50px" label="时间戳">{{ timeStamp1 }}</el-descriptions-item>
      <el-descriptions-item label="时间戳">{{ timeStamp2 }}</el-descriptions-item>
      <el-descriptions-item label="时间戳">{{ timeStamp3 }}</el-descriptions-item>
      <el-descriptions-item label="时间戳 => 指定格式( '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}' )">{{ time1 }}</el-descriptions-item>
      <el-descriptions-item label="时间戳 => 指定格式( '{y}-{m}-{d} {h}:{i}:{s}' )">{{ time2 }}</el-descriptions-item>
      <el-descriptions-item label="时间戳 => 年月日">{{ time3 }}</el-descriptions-item>
      <el-descriptions-item label="上一年">{{ time4 }}</el-descriptions-item>
      <el-descriptions-item label="上一年月">{{ time5 }}</el-descriptions-item>
      <el-descriptions-item label="当前年月">{{ ym }}</el-descriptions-item>
      <el-descriptions-item label="下一年月">{{ time6 }}</el-descriptions-item>
      <el-descriptions-item label="下一年">{{ time7 }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import TimeUtils from '@/utils/timeUtils' // ts 文件
import { Jh_getTimeStamp, Jh_timeStampToTime } from '@/utils/timeUtils'
import TimeUtils2 from '@/utils/time2Utils' // js 文件

const timeStamp1 = TimeUtils.Jh_getTimeStamp()
const timeStamp2 = TimeUtils2.Jh_getTimeStamp()
const timeStamp3 = Jh_getTimeStamp()
const time1 = Jh_timeStampToTime(new Date().getTime(), '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}')
const time2 = TimeUtils.Jh_timeStampToTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}:{s}')
const time3 = TimeUtils.Jh_timeStampToYMD()

const ym = TimeUtils.Jh_getYearMonth()
const time4 = TimeUtils.Jh_getPrevYear(Jh_timeStampToTime(timeStamp1, '{y}'))
const time5 = TimeUtils.Jh_getPrevYearMonth(ym)
const time6 = TimeUtils.Jh_getNextYearMonth(ym)
const time7 = TimeUtils.Jh_getNextYear(Jh_timeStampToTime(timeStamp1, '{y}'))

import timerUtils from '@/utils/timerUtils'

onMounted(() => {
  timerUtils.setInterval(
    'timer1',
    () => {
      console.log('Task 1 executed!')
    },
    1000
  )
  timerUtils.setInterval(
    'timer2',
    () => {
      console.log('Task 2 executed!')
    },
    500
  )
})

onBeforeUnmount(() => {
  // timerUtils.clearInterval('timer2')
  timerUtils.clearAllIntervals()
})
</script>

<style lang="scss" scoped></style>
