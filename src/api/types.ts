/**
 * @description: 接口返回类型
 * @return {*}
 */
// export interface ResponseType3 extends Promise<any> {
//   code?: number
//   msg?: string
//   data?: object | Array<object> | string
//   total?: number
//   success?: boolean
// }

/**
 * @description: 接口返回类型
 * @return {*}
 */
export interface ResponseType<T> {
  code: number
  msg: string
  data: T
  total: number
}

export type ResType2<T> = Promise<ResponseType<T>>

export interface ResType<T>
  extends Promise<{
    code: number
    msg: string
    data: T
    total: number
  }> {}
