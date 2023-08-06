<!-- 阶段统计柱状图 -->
<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          阶段统计
          <el-tooltip effect="dark" content="点击试试下载" placement="bottom">
            <i-ep-download class="download" @click="downloadEchart"></i-ep-download>
          </el-tooltip>
        </div>
      </template>
      <div :id="id" :class="className" :style="{ height, width }" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const props = defineProps({
  id: {
    required: true,
    type: String,
    default: 'myChart'
  },
  className: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '200px'
  }
})

const myChart = ref()
// const myChart = ref<any>('')

const options = reactive({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    show: false,
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    data: ['按月', '按周', '按天']
  },
  series: [
    {
      name: '',
      type: 'bar',
      barWidth: '20%',
      data: [45, 30, 60],
      label: {
        show: true, // 是否显示
        position: 'right', // 显示位置
        // formatter: '{a}{b}:{c}%（元）'// {a}：系列名。{b}：数据名。{c}：数据值。
        formatter: '{c} 元' // c后面加单位
      },
      itemStyle: {
        borderRadius: [15, 15, 15, 15],
        color: function (params: any) {
          // let colorList = ['#FEC336', '#3585F4', '#00CA99'];
          // return colorList[params.dataIndex];
          if (params.name === '按天') {
            return '#00CA99'
          }
          if (params.name === '按周') {
            return '#3585F4'
          }
          if (params.name === '按月') {
            return '#FEC336'
          }
        }
      }
    }
  ]
})

watch(
  () => options,
  () => {
    myChart.value.setOption(options)
  },
  { deep: true }
)

onMounted(() => {
  initChart()
  requestData()
})

onBeforeUnmount(() => {
  // if (myChart.value) {
  //   myChart.value.dispose()
  //   myChart.value = null
  // }
  window.removeEventListener('resize', () => handleResize)
})

const initChart = () => {
  // 图表初始化，
  // 设置tooltip的type为axis时，tooltip不显示，使用item显示，使用markRaw把echarts实例从监听对象变成普通对象，防止被reactive代理
  myChart.value = markRaw(echarts.init(document.getElementById(props.id) as HTMLDivElement))
  myChart.value.setOption(options)
  // 大小自适应
  window.addEventListener('resize', () => handleResize)
}

const handleResize = () => {
  myChart.value.resize()
}

interface chartDataType {
  name: string
  value: number
}

const requestData = () => {
  if (!myChart.value) return
  myChart.value.showLoading()
  setTimeout(() => {
    const data: chartDataType[] = [
      { name: '按天', value: 50 },
      { name: '按周', value: 100 },
      { name: '按月', value: 120 }
    ]
    const chartData1 = getChartXdataAndSeriesData(data)

    options.yAxis.data = chartData1.xData.reverse()
    options.series[0].data = chartData1.seriesData.reverse()
    myChart.value.hideLoading()
  }, 1000)
}

// 把原始数据转换成图表数据
const getChartXdataAndSeriesData = (data: chartDataType[]) => {
  var tempArrName: string[] = []
  var tempArrValue: number[] = []
  data.forEach((item) => {
    tempArrName.push(item.name)
    tempArrValue.push(item.value)
  })
  var chartData = {
    xData: tempArrName,
    seriesData: tempArrValue
  }
  return chartData
}

const downloadEchart = () => {
  // 获取画布图表地址信息
  const img = new Image()
  img.src = myChart.value.getDataURL({
    type: 'png',
    pixelRatio: 1,
    backgroundColor: '#fff'
  })
  // 当图片加载完成后，生成 URL 并下载
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height)
      const link = document.createElement('a')
      link.download = `Chart.png`
      link.href = canvas.toDataURL('image/png', 0.9)
      document.body.appendChild(link)
      link.click()
      link.remove()
    }
  }
}
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;

  .download {
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
}
</style>
