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
