// 校验工具类

// ******************** 正则 ********************

// 手机号
export const REGEX_phone = /^1[3-9][0-9]{9}$/
// 身份证
export const REGEX_IDCard = /\d{17}[\d|x]|\d{15}/
// 邮箱
export const REGEX_email = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
// 金额，最多两位小数
export const REGEX_money = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
// 正整数，年龄
export const REGEX_age = /^[1-9]\d*$/
// 2-6位中文字符，姓名
export const REGEX_chinese = /^[\u4E00-\u9FA5]{2,6}$/
// 用户名，字母或数字或下划线
export const REGEX_userName1 = /^w+$/
// 用户名，4到16位字母，数字，下划线，减号
export const REGEX_userName2 = /^[a-zA-Z0-9_-]{4,16}$/
// 用户名，只含有数字、字母、下划线不能以下划线开头和结尾：
export const REGEX_userName3 = /^(?!_)(?!.*?_$)[a-zA-Z0-9_]+$/
// 用户名，只含有汉字、数字、字母、下划线不能以下划线开头和结尾：
export const REGEX_userName4 = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
// 密码，长度至少为6，至少包含一个字母和一个数字
export const REGEX_pwd1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
// 密码，长度至少为8，且至少有一个数字 并同时包含大小写字母
export const REGEX_pwd2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
// 密码，长度至少为8，至少含有一个字母和一个数字和一个特殊字符
export const REGEX_pwd3 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
// 密码，长度至少为8,包含大小写字母、数字和特殊字符
export const REGEX_pwd4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// 密码，长度8到16，包含大小写数字和特殊字符
export const REGEX_pwd5 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/

// ******************** 正则验证 ********************

// 判断是否是手机号
export function isPhone(value: string) {
  return REGEX_phone.test(value)
}

// 判断是否是身份证号
export function isIDCard(value: string) {
  return REGEX_IDCard.test(value)
}

// 判断是否是邮箱
export function isEmail(value: string) {
  return REGEX_email.test(value)
}

// 判断是否是金额
export function isMoney(value: string | number) {
  return REGEX_money.test(value.toString())
}

// 判断是否是年龄
export function isAge(value: string | number) {
  return REGEX_age.test(value.toString())
}

// 判断是否是2-6位中文字符，姓名
export function isChinese(value: string) {
  return REGEX_chinese.test(value)
}

// 判断是否是用户名
export function isUserName1(value: string) {
  return REGEX_userName1.test(value)
}
export function isUserName2(value: string) {
  return REGEX_userName2.test(value)
}
export function isUserName3(value: string) {
  return REGEX_userName3.test(value)
}
export function isUserName4(value: string) {
  return REGEX_userName4.test(value)
}

// 判断是否是密码
export function isPwd1(value: string) {
  return REGEX_pwd1.test(value)
}
export function isPwd2(value: string) {
  return REGEX_pwd2.test(value)
}
export function isPwd3(value: string) {
  return REGEX_pwd3.test(value)
}
export function isPwd4(value: string) {
  return REGEX_pwd4.test(value)
}
export function isPwd5(value: string) {
  return REGEX_pwd5.test(value)
}

// 表单校验

/**
 * 验证登录密码长度
 * @param {*} value
 * @param {*} callback
 */
export function validatePassword(rule: any, value: any, callback: any) {
  if (value.length < 6) {
    return callback(new Error('密码不能小于6位'))
  } else if (value.length > 20) {
    return callback(new Error('密码不能大于20位'))
  } else {
    return callback()
  }
}

/**
 * 验证登录密码长度
 * @param {*} value
 * @param {*} callback
 */
export function validatePwd(rule: any, value: any, callback: any) {
  if (value.length < 6) {
    return callback(new Error('密码不能小于6位'))
  } else if (value.length > 20) {
    return callback(new Error('密码不能大于20位'))
  } else if (isPwd1(value)) {
    return callback(new Error('至少包含一个字母和一个数字'))
  } else {
    return callback()
  }
}

/*
  使用方法：

  import * as checkUtils from '@/utils/checkUtils'
  import { isPhone, isMoney } from '@/utils/checkUtils'

  console.log(checkUtils.REGEX_phone)
  console.log(checkUtils.isPhone('123'))
  console.log(isPhone('123'))

  */
