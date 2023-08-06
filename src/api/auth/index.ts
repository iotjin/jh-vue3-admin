import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { CaptchaResult, LoginData, LoginResult } from './types'

export function login(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: '/v1/api/auth/login',
    method: 'post',
    data: data
  })
}

export function getUserInfo(accessToken: string) {
  return request({
    url: '/v1/api/user/info',
    method: 'get',
    params: { accessToken }
  })
}

export function logout() {
  return request({
    url: '/v1/api/auth/logout',
    method: 'post'
  })
}

export function getCaptchaApi(): AxiosPromise<CaptchaResult> {
  return request({
    url: '/v1/api/auth/captcha',
    method: 'get'
  })
}
