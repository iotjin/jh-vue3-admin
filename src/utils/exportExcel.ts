import * as XLSX from 'xlsx'

/**
 * @description: 导出excel
 * @param {any} dataList
 * @param {Array} fields
 * @param {Array} headers
 * @param {string} fileName 需要加后缀名 eg: 'test.xlsx'
 * @param {string} sheetName
 * @return {*}
 */
export function exportExcel(dataList: any, fields: Array<string>, headers: Array<string> = [], fileName: string = 'Excel.xlsx', sheetName: string = 'Sheet') {
  let data = new Array()
  if (!Array.isArray(dataList)) return console.warn('dataList is not an array type')
  // if (!Array.isArray(fields)) return console.warn('fields is not an array type')
  // if (!Array.isArray(headers)) return console.warn('headers is not an array type')
  data = dataList.map((obj) => {
    return fields.map((field) => {
      return obj[field]
    })
  })
  if (headers.length > 0) {
    data.splice(0, 0, headers)
  } else {
    // 将headers设置为英文字段表头
    data.splice(0, 0, fields)
  }
  const ws = XLSX.utils.aoa_to_sheet(data)
  const wb = XLSX.utils.book_new()

  // 隐藏表头
  // let wsrows = [{ hidden: true }]
  // ws['!rows'] = wsrows // ws - worksheet

  XLSX.utils.book_append_sheet(wb, ws, sheetName)
  XLSX.writeFile(wb, fileName)
}
