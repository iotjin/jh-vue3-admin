<template>
  <div>
    <div class="content-bg">
      <el-row>
        <el-col :span="12" :xs="24" :sm="12">
          <!-- 左侧 -->
          <div class="left">
            <!-- 标题一 -->
            <div class="left-item">
              <div class="header">
                <img class="header-img" src="../../../assets/images/static/icon2.png" />
                <div class="header-title">标题一</div>
              </div>
              <div v-for="item in state.dataArr1" :key="item.id" class="row-bg" @click="onClickItem(item)">
                <div class="row-top">
                  <div class="dot" />
                  <div class="row-time">{{ item.time }}</div>
                  <div class="row-content">{{ item.content }}</div>
                </div>
                <div class="line" />
              </div>
            </div>
            <!-- 标题二 -->
            <div class="left-item">
              <div class="header">
                <img class="header-img" src="../../../assets/images/static/icon2.png" />
                <div class="header-title">标题二</div>
              </div>
              <div v-for="item in state.dataArr1" :key="item.id" class="row-bg" @click="onClickItem(item)">
                <div class="row-top">
                  <div class="dot" />
                  <div class="row-time">{{ item.time }}</div>
                  <div class="row-content">{{ item.content }}</div>
                </div>
                <div class="line" />
              </div>
            </div>
            <!-- 标题三 -->
            <div class="left-item">
              <div class="header">
                <img class="header-img" src="../../../assets/images/static/icon2.png" />
                <div class="header-title">标题三</div>
              </div>
              <div v-for="item in state.dataArr1" :key="item.id" class="row-bg" @click="onClickItem(item)">
                <div class="row-top">
                  <div class="dot" />
                  <div class="row-time">{{ item.time }}</div>
                  <div class="row-content">{{ item.content }}</div>
                </div>
                <div class="line" />
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12" :xs="24" :sm="12">
          <!-- 右侧 -->
          <div class="right">
            <div class="header">
              <img class="header-img" src="../../../assets/images/static/icon2.png" />
              <div class="header-title">标题四</div>
            </div>
            <div class="chart-bg">
              <div id="myChart1" class="charts" />
            </div>
            <div class="header">
              <img class="header-img" src="../../../assets/images/static/icon2.png" />
              <div class="header-title">标题五</div>
            </div>
            <div class="chart-bg">
              <div id="myChart2" class="charts" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'

interface dataListType {
  dataArr1: {
    id: number
    time: string
    content: string
  }[]
  dataArr2: {
    id: number
    time: string
    docType: string
    title: string
  }[]
}

const state: dataListType = reactive({
  dataArr1: [],
  dataArr2: []
})

const myChart1 = ref()
const myChart2 = ref()
// const myChart1 = ref<any>('')
// const myChart2 = ref<any>('')

onMounted(() => {
  initChart1()
  initChart2()
  requestData()
  requestChartData1()
  requestChartData2()
})

onBeforeUnmount(() => {})

function requestData() {
  const tempArr = []
  for (let index = 0; index < 6; index++) {
    tempArr.push({
      id: index,
      time: '2020-02-20 09:10:15',
      content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容0'
    })
  }
  state.dataArr1 = tempArr

  const tempArr2 = []
  for (let index = 0; index < 6; index++) {
    tempArr2.push({
      id: index,
      docType: '天气预报',
      time: '2020-02-20',
      title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题0'
    })
  }
  state.dataArr2 = tempArr2
}

function requestChartData1() {
  myChart1.value.showLoading()
  setTimeout(() => {
    const res = {
      month: ['12月12日', '12月12日', '12月12日', '12月12日', '12月12日', '12月12日', '12月12日'],
      general: [2, 4, 7, 4, 2, 4, 5],
      serious: [1, 3, 2, 1, 4, 2, 1],
      crisis: [0, 1, 4, 2, 4, 1, 0]
    }
    const dataArr = [
      { name: '一般', data: res.general },
      { name: '严重', data: res.serious },
      { name: '危险', data: res.crisis }
    ]
    dataArr.forEach((item: any) => {
      item.type = 'bar'
      item.barWidth = '15'
    })
    var chartData = {
      legendData: ['一般', '严重', '危险'],
      xData: res.month,
      seriesData: dataArr
    }
    myChart1.value.setOption(getOption(chartData, 1), true)
    myChart1.value.hideLoading()
  }, 1000)
}

function requestChartData2() {
  myChart2.value.showLoading()
  setTimeout(() => {
    const res = {
      month: ['12月12日', '12月12日', '12月12日', '12月12日', '12月12日', '12月12日', '12月12日'],
      overhaul: [2, 4, 7, 4, 2, 4, 5],
      devOps: [1, 3, 2, 1, 4, 2, 1],
      infrastructure: [0, 1, 4, 2, 4, 1, 0]
    }
    const dataArr = [
      { name: '类别1', data: res.overhaul },
      { name: '类别2', data: res.devOps },
      { name: '类别3', data: res.infrastructure }
    ]
    dataArr.forEach((item: any) => {
      item.type = 'bar'
      item.barWidth = '15'
    })
    var chartData = {
      legendData: ['类别1', '类别2', '类别3'],
      xData: res.month,
      seriesData: dataArr
    }
    myChart2.value.setOption(getOption(chartData, 2), true)
    myChart2.value.hideLoading()
  }, 1000)
}

// 初始化图表
const initChart1 = () => {
  const chartData = {
    legendData: ['一般', '严重', '危险'],
    xData: [],
    seriesData: [
      { type: 'bar', name: '一般', data: [] },
      { type: 'bar', name: '严重', data: [] },
      { type: 'bar', name: '危险', data: [] }
    ]
  }
  myChart1.value = markRaw(echarts.init(document.getElementById('myChart1') as HTMLDivElement))
  myChart1.value.setOption(getOption(chartData, 1))
}

const initChart2 = () => {
  const chartData = {
    legendData: ['类别1', '类别2', '类别3'],
    xData: [],
    seriesData: [
      { type: 'bar', name: '类别1', data: [] },
      { type: 'bar', name: '类别2', data: [] },
      { type: 'bar', name: '类别3', data: [] }
    ]
  }
  myChart2.value = markRaw(echarts.init(document.getElementById('myChart2') as HTMLDivElement))
  myChart2.value.setOption(getOption(chartData, 2))
}

// 图表配置
function getOption(chartData: any, type: any) {
  var option = {
    color: type === 1 ? ['#36A88C', '#6088C1', '#A46EC3'] : ['#1990E2', '#36A88C', '#F5A245'],
    grid: { left: '3%', right: '2%', bottom: '15%', containLabel: true },
    tooltip: {},
    legend: { bottom: 10, data: chartData.legendData },
    xAxis: [{ data: chartData.xData, axisLabel: { interval: 0 } }],
    yAxis: { name: chartData.seriesData.length ? '单位:条' : '' },
    series: chartData.seriesData
  }
  return option
}
function onClickItem(item: any) {
  console.log(JSON.stringify(item))
}
</script>

<style lang="scss" scoped>
.content-bg {
  padding: 10px;
  font: 12px 微软雅黑 !important;

  .left {
    flex: 1;
    margin-right: 5px;
    border: 1px solid #e6e6e6;
    height: calc(100vh - 20px);

    .left-item {
      max-height: calc((100vh - 20px) / 3);
      overflow: hidden;
    }
  }

  .right {
    flex: 1;
    margin-left: 5px;
    border: 1px solid #e6e6e6;
    height: calc(100vh - 20px);
  }

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    // background: #f0f0f0;
    background: var(--el-card-bg-color);
    border-bottom: 1px solid green;

    .header-img {
      width: 35px;
      height: 35px;
      margin: 0px 10px;
    }

    .header-title {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .row-bg {
    display: flex;
    flex-direction: column;
    margin: 10px;

    .row-top {
      display: flex;
      align-items: center;

      .dot {
        min-width: 6px;
        min-height: 6px;
        margin: 0 5px;
        border-radius: 3px;
        background: #00938b;
      }
      .row-time {
        min-width: 130px;
        margin-left: 10px;
      }

      .row-content {
        white-space: nowrap; //强制文本在一行内输出
        overflow: hidden; //隐藏溢出部分
        text-overflow: ellipsis; //对溢出部分加上...
      }
    }

    .line {
      margin-left: 30px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e6e6e6;
    }
  }
}

.chart-bg {
  width: 100%;
  height: calc((100vh - 20px - 99px) / 2);

  .charts {
    width: 100%;
    height: 100%;
  }
}
</style>
