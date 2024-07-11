<template>
  <div class="content">
    <div class="card mb10">
      <h4 class="title">简介</h4>
      <span class="text">
        <el-link type="primary" :href="gitHub" target="_blank">jh-vue3-admin</el-link>
        是基于 Vue3 + Vite4 + TypeScript5 + Element-Plus + Pinia 等最新主流技术栈构建的后台管理系统前端模板。
      </span>
    </div>
    <div class="card mb10">
      <h4 class="title">项目信息</h4>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="版本号" label-align="left">
          <el-tag>{{ version }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="发布时间" label-align="left">
          <el-tag>{{ lastBuildTime }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Github" label-align="left">
          <el-link type="primary" :href="gitHub" target="_blank"> Github地址 </el-link>
        </el-descriptions-item>
        <el-descriptions-item label="API文档" label-align="left">
          <el-link type="primary" :href="apiDoc" target="_blank"> API文档地址 </el-link>
        </el-descriptions-item>
        <el-descriptions-item label="在线预览" label-align="left">
          <el-link type="primary" href="https://iotjin.github.io/jh-vue3-admin" target="_blank"> 在线预览地址 </el-link>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="card mb10">
      <h4 class="title">生产环境依赖</h4>
      <el-descriptions :column="3" border>
        <el-descriptions-item v-for="(value, key) in dependencies" :key="key" width="400px" :label="key">
          <el-tag type="info"> {{ value }} </el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="card">
      <h4 class="title">开发环境依赖</h4>
      <el-descriptions :column="3" border>
        <el-descriptions-item v-for="(value, key) in devDependencies" :key="key" width="400px" :label="key">
          <el-tag type="info"> {{ value }} </el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gitHub, apiDoc } from '@/utils/const'

// @ts-ignore
const { pkg, lastBuildTime } = __APP_INFO__
const { dependencies, devDependencies, version } = pkg
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 12px;

  .card {
    box-sizing: border-box;
    padding: 20px;
    overflow-x: hidden;
    background-color: var(--el-bg-color);
    border: 1px solid var(--el-border-color-light);
    border-radius: 6px;
    box-shadow: 0 0 12px #0000000d;

    .title {
      margin: 0 0 15px;
      font-size: 17px;
      font-weight: bold;
      color: var(--el-text-color-primary);
    }
    .text {
      font-size: 15px;
      line-height: 25px;
      color: var(--el-text-color-regular);
      .el-link {
        font-size: 15px;
      }
    }
  }
}
</style>
