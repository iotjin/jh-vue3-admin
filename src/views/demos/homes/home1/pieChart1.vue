<!-- 状态统计 饼图 -->
<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          状态统计
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
  color: ['#3585F4', '#00CA99'],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '5%'
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['25%', '60%'],
      // right: '35%',
      top: '-15%',
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 10
      },
      label: {
        // position: 'center',
        show: true,
        // formatter: '{a}{b}:{c}%（元）'// {a}：系列名。{b}：数据名。{c}：数据值。
        formatter: '{b}: {c} 元({d}%)'
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 17.58, name: '已发送合计' },
        { value: 25.27, name: '未发送合计' }
      ]
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
  // 图表初始化
  myChart.value = echarts.init(document.getElementById(props.id) as HTMLDivElement)
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
      { name: '已发送合计', value: 150 },
      { name: '未发送合计', value: 49 }
    ]
    options.series[0].data = data
    myChart.value.hideLoading()
  }, 1000)
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
