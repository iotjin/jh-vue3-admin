<template>
  <div>
    <el-descriptions title="UTCTimeUtils - moment" :column="1" border>
      <el-descriptions-item width="50px" label="时间戳">{{ timeStamp }}</el-descriptions-item>
      <el-descriptions-item label="时间戳">{{ timeStamp }}</el-descriptions-item>
      <el-descriptions-item label="当前时间">{{ time1 }}</el-descriptions-item>
      <el-descriptions-item label="当前时间 => 指定格式( 'YYYY-MM-DD HH:mm:ss' )">{{ time2 }}</el-descriptions-item>
      <el-descriptions-item label="---------- UTC ----------"></el-descriptions-item>
      <el-descriptions-item label="UTC当前时间">{{ utcTime }}</el-descriptions-item>
      <el-descriptions-item label="UTC当前时间">{{ utcTime2 }}</el-descriptions-item>
      <el-descriptions-item label="UTC当前时间 => 指定格式( 'YYYY-MM-DDTHH:mm:ss' )">{{ utcTime3 }}</el-descriptions-item>
      <el-descriptions-item label="UTC当前时间 => 指定格式( 'YYYY-MM-DD HH:mm:ss' )">{{ utcTime4 }}</el-descriptions-item>
      <el-descriptions-item label="UTC时间 => 指定格式本地时间">{{ utcTime5 }}</el-descriptions-item>
      <el-descriptions-item label="本地时间 => 指定格式UTC时间">{{ utcTime6 }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { Jh_getTimeStamp, timeFormat, timeToYMDHMS } from '@/utils/utcTimeUtils'
import { getUTCTime, utcTimeFormat, utcTimeToYMDHMS, utcTimeToLocal, localTimeToUTCTime } from '@/utils/utcTimeUtils'

const timeStamp = Jh_getTimeStamp()
// Local
const currentTime = new Date().getTime()
const time1 = timeFormat(currentTime)
const time2 = timeToYMDHMS(currentTime)
// UTC
const utcTime = utcTimeFormat(currentTime)
const utcTime2 = getUTCTime()
const utcTime3 = utcTimeFormat(currentTime, 'YYYY-MM-DDTHH:mm:ss')
const utcTime4 = utcTimeToYMDHMS(utcTime)
const utcTime5 = utcTimeToLocal(utcTime)
const utcTime6 = localTimeToUTCTime(currentTime)

onMounted(() => {
  console.log('UTCTimeUtils - moment')
  const currentTime = new Date().getTime()
  console.log('currentTime', JSON.stringify(currentTime))
  console.log('---------- Local ----------')
  console.log('timeFormat', timeFormat(currentTime))
  console.log('timeToYMDHMS', timeToYMDHMS(currentTime))
  console.log('---------- UTC ----------')
  const utcTime = utcTimeFormat(currentTime)
  console.log('utcTime', utcTime)
  console.log('getUTCTime', getUTCTime())
  console.log('utcTimeFormat', utcTimeFormat(currentTime, 'YYYY-MM-DDTHH:mm:ss'))
  console.log('utcTimeToYMDHMS', utcTimeToYMDHMS(utcTime))
  console.log('utcTimeToLocal', utcTimeToLocal(utcTime))
  console.log('localTimeToUTCTime', localTimeToUTCTime(currentTime))
})
</script>

<style lang="scss" scoped></style>
