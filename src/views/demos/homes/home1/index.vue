<template>
  <div class="container">
    <Header />
    <el-row :gutter="40">
      <el-col :span="12" :xs="24" :sm="12" class="mt5">
        <BarChart1 id="barChart1" />
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" class="mt5">
        <el-row>
          <el-col>
            <PieChart1 id="pieChart1" />
          </el-col>
        </el-row>
        <el-row class="mt5">
          <el-col>
            <BarChart2 id="barChart2" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Header from './header.vue'
import BarChart1 from './barChart1.vue'
import PieChart1 from './pieChart1.vue'
import BarChart2 from './barChart2.vue'
</script>

<style lang="scss" scoped>
.container {
  padding: 15px 10px;

  .mt5 {
    margin-top: 15px;
  }
}
</style>
