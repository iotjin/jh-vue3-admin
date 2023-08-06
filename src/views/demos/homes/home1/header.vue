<template>
  <el-card>
    <template #header>
      <div class="card-header">数据中心</div>
    </template>
    <el-row class="data-center">
      <template v-for="(item, index) in dataCenterList">
        <el-col :span="4" :xs="24" :sm="11" :md="4" style="margin: 5px 0">
          <div :key="item.title" class="item">
            <el-image class="left" :src="getImagePath(item.icon)" />
            <div class="right">
              <span class="title">{{ item.title }}</span>
              <span :class="'line ' + item.lineColor" />
              <div>
                <!-- <span class="quantity">{{ item.quantity }}</span> -->
                <span class="quantity">{{ Math.round(countOutput[index].value) }}</span>
                <span class="quantity-other">{{ item.quantityOther }}</span>
                <span class="unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="1" :xs="0" :sm="index % 2 !== 0 ? 0 : 2" :md="1" style="margin: 5px 0" />
      </template>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import { useTransition, TransitionPresets } from '@vueuse/core'

const dataCenterList = [
  {
    title: '当前登录',
    icon: 'icon.png',
    lineColor: 'blue',
    quantity: '10',
    quantityOther: '/100',
    unit: '人'
  },
  {
    title: '本周访问量',
    icon: 'icon2.png',
    lineColor: 'green',
    quantity: '200',
    quantityOther: '',
    unit: '次'
  },
  {
    title: '本月访问量',
    icon: 'icon3.png',
    lineColor: 'yellow',
    quantity: '300',
    quantityOther: '',
    unit: '次'
  },
  {
    title: '本年访问量',
    icon: 'icon4.png',
    lineColor: 'blue',
    quantity: '1000',
    quantityOther: '',
    unit: '次'
  },
  {
    title: '创建组',
    icon: 'icon5.png',
    lineColor: 'purple',
    quantity: '70',
    quantityOther: '',
    unit: '组'
  }
]

const duration = 5000

const countOutput = dataCenterList.map((item) => {
  const count = ref(0)
  const output = useTransition(count, {
    duration: duration,
    transition: TransitionPresets.easeOutExpo
  })
  count.value = Number(item.quantity)
  return output
})

const getImagePath = (name: string) => {
  return new URL('/src/assets/images/static/' + name, import.meta.url).href
}

onMounted(() => {})
</script>

<style lang="scss" scoped>
.el-col-5 {
  width: 20%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
}

.data-center {
  display: flex;
  flex-direction: row;
  .item {
    flex: 1;
    padding: 0 10px;
    border-radius: 7.5px;
    min-height: 90px;
    // background-color: white;
    // border: 1px solid #f5f5f5;
    box-shadow: var(--el-box-shadow-light);
    border: 1px solid var(--el-card-border-color);
    background-color: var(--el-card-bg-color);

    display: flex;
    flex-direction: row;
    align-items: center;
    .left {
      width: 48px;
      height: 48px;
    }
    .right {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      > * {
        margin-top: 2px;
      }
      .title {
        font-size: 14px;
        font-weight: bold;
        // color: #333333;
      }
      .line {
        width: 20px;
        height: 2px;
        border-radius: 3px;
      }
      .unit {
        margin-left: 10px;
        font-size: 8px;
        color: lightgray;
      }
      .quantity {
        font-size: 17px;
        // color: #333333;
        font-weight: bold;
      }
      .quantity-other {
        font-size: 14px;
        color: lightgray;
      }
    }
  }
}

.blue {
  background-color: cornflowerblue;
}
.green {
  background-color: forestgreen;
}
.yellow {
  background-color: yellow;
}
.purple {
  background-color: mediumpurple;
}
</style>
