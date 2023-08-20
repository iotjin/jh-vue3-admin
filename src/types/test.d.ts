// 声明 ref
declare type RefType<T = any> = T | null

// 声明 HTMLElement
declare type HtmlType = HTMLElement | string | undefined | null

// 申明 children 可选
declare type ChilType<T = any> = {
  children?: T[]
}

// 申明 数组
declare type EmptyArrayType<T = any> = T[]

// 申明 对象
declare type EmptyObjectType<T = any> = {
  [key: string]: T
}

/**
 * @description: 接口返回类型
 * @return {*}
 */
declare interface ResponseType22 extends Promise<any> {
  code?: number
  msg?: string
  data?: object | string
}

// declare function $t(key: string, params?: any): string
