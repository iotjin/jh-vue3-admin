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
