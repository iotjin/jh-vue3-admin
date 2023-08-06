/**
 * @description: 接口返回类型
 * @return {*}
 */
export interface ResponseType extends Promise<any> {
  code?: number
  msg?: string
  data?: object | Array<any> | string
  total?: number
  success?: boolean
}
