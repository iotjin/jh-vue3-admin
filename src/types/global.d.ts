// select option
declare type SelectOptionType = {
  id: string | number
  label: string | number
  value: string | number
  children?: SelectOptionType[]
}

// table cell style
declare type TableCellStyleType = {
  row: any
  column: any
  rowIndex: number
  columnIndex: number
}

// ECharts 实例类型
declare type iEChartsInstanceType = echarts.ECharts | null
// ECharsts 图表组件数据类型
declare type iEChartsOptionType = import('echarts').EChartsOption

// 窗口resize处理函数类型
declare type iResizeHandlerFnType = (() => void) | null

declare module 'crypto-js'

// __APP_INFO__
declare const __APP_INFO__: {
  pkg: {
    name: string
    version: string
    dependencies: Recordable<string>
    devDependencies: Recordable<string>
  }
  lastBuildTime: string
  checkUpdateVersion: string
}
