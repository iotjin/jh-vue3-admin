<p align="center">
    <img src="https://img.shields.io/badge/Vue-3.3.4-brightgreen.svg"/>
    <img src="https://img.shields.io/badge/Vite-4.4.8-green.svg"/>
    <img src="https://img.shields.io/badge/Element Plus-2.3.9-blue.svg"/>
    <img src="https://img.shields.io/badge/license-MIT-green.svg"/>
    <a href="https://github.com/iotjin/jh-vue3-admin" target="_blank">
        <img src="https://img.shields.io/badge/Author-iotjin-orange.svg"/>
    </a>
</p>
<p align="center">
 <a target="_blank" href="https://github.com/iotjin/jh-vue3-admin">jh-vue3-admin项目地址</a> |  <a target="_blank" href="https://iotjin.github.io/jh-vue3-admin">在线预览</a> 
</p>

<br>

## 项目介绍

[jh-vue3-admin](https://github.com/iotjin/jh-vue3-admin) 是基于 Vue3 + Vite4 + TypeScript5 + Element-Plus + Pinia 等最新主流技术栈构建的后台管理系统前端模板。

特性：

- 基于[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)项目升级到 vue3 版本
- 通过Mock模拟真实接口请求
- 动态权限控制、动态获取菜单路由、按钮级别的权限控制
- vue-i18n 国际化支持
- 暗黑模式支持
- 添加`TopHeader`功能、支持顶栏和固钉动态切换

## 在线预览

  https://iotjin.github.io/jh-vue3-admin

<br>

## 技术栈

| 技术    | 描述                                       | 官网                                     |
| ------- | ----------------------------------------- | ---------------------------------------- |
| Vue3    | 渐进式 JavaScript 框架                     | [https://cn.vuejs.org/](https://cn.vuejs.org/) |
| Element Plus | 基于 Vue 3，面向设计师和开发者的组件库    | [https://element-plus.gitee.io/zh-CN/](https://element-plus.gitee.io/zh-CN/) |
| Vite    | 前端开发与构建工具                           | [https://cn.vitejs.dev/](https://cn.vitejs.dev/) |
| TypeScript | 微软新推出的一种语言，是 JavaScript 的超集  | [https://www.tslang.cn/](https://www.tslang.cn/) |
| Pinia   | 新一代状态管理工具                           | [https://pinia.vuejs.org/zh/](https://pinia.vuejs.org/zh/) |
| Axios   | HTTP网络请求                               | [https://axios-http.com/](https://axios-http.com/) |
| Vue Router | Vue.js 的官方路由                        | [https://router.vuejs.org/zh/](https://router.vuejs.org/zh/) |
| Echarts | 一个基于 JavaScript 的开源可视化图表库         | [https://echarts.apache.org/zh/](https://echarts.apache.org/zh/) |
| vue-i18n | Vue 国际化多语言插件                        | [https://vue-i18n.intlify.dev/](https://vue-i18n.intlify.dev/) |
| VueUse  | 基于Vue组合式API的实用工具集                  | [http://www.vueusejs.com/](http://www.vueusejs.com/) |
| wangEditor | Typescript 开发的 Web 富文本编辑器        | [https://www.wangeditor.com/](https://www.wangeditor.com/) |
| UnoCSS  | 一个具有高性能且极具灵活性的即时原子化 CSS 引擎        | [https://unocss.dev/](https://unocss.dev/) |

<br>

## vue-admin-template 介绍 (vue2 实现)

> 这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

[线上地址](http://panjiachen.github.io/vue-admin-template)

[国内访问](https://panjiachen.gitee.io/vue-admin-template)

目前版本为 `v4.0+` 基于 `vue-cli` 进行构建，若你想使用旧版本，可以切换分支到[tag/3.11.0](https://github.com/PanJiaChen/vue-admin-template/tree/tag/3.11.0)，它不依赖 `vue-cli`。

如果你想要根据用户角色来动态生成侧边栏和 router，你可以使用该分支[permission-control](https://github.com/PanJiaChen/vue-admin-template/tree/permission-control)

## <a id="更新记录"></a> 更新记录
<details open id="重要更新">
  <summary><strong>重要更新</strong></summary>
   
```
* v1.0.0版本，基于vue-admin-template模板项目升级到Vue3
```
</details>



## 环境准备

| 环境                 | 名称版本                                                     | 备注                                                         |
| -------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| **开发工具**         | VSCode                                                       | [下载地址](https://code.visualstudio.com/Download)           |
| **运行环境**         | Node 16+                                                     | [下载地址](http://nodejs.cn/download)                        |
| **VSCode插件(必装)** | 1. `Vue Language Features (Volar) ` <br/> 2. `TypeScript Vue Plugin (Volar) `  <br/>3. 禁用 Vetur | ![vscode-plugin](https://gitee.com/iotjh/Picture/raw/master/GitHub/Vue3/volar.png) |


## 项目启动

```bash
# 克隆代码
git clone https://github.com/iotjin/jh-vue3-admin

# 安装 pnpm
npm install pnpm -g

# 安装依赖
pnpm install

# 启动运行
pnpm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

在线预览 [https://iotjin.github.io/jh-vue3-admin](https://iotjin.github.io/jh-vue3-admin)


## 项目部署

```bash
# 项目打包
pnpm run build:prod
```


## 注意事项

- **自动导入插件自动生成默认关闭**

  模板项目的组件类型声明已自动生成。如果添加和使用新的组件，请按照图示方法开启自动生成。在自动生成完成后，记得将其设置为 `false`，避免重复执行引发冲突。

  ![](https://gitee.com/iotjh/Picture/raw/master/GitHub/Vue3/dts.jpg)

- **项目启动浏览器访问空白**

  请升级浏览器尝试，低版本浏览器内核可能不支持某些新的 JavaScript 语法，比如可选链操作符 `?.`

- **项目同步仓库更新升级**

  项目同步仓库更新升级之后，建议 `pnpm install` 安装更新依赖之后启动