<template>
  <div class="login-container">
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <LangSelect class="text" />
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <SvgIcon icon-class="user" />
        </span>
        <el-input ref="username" v-model="loginForm.username" :placeholder="$t('login.username')" name="username" type="text" tabindex="1" auto-complete="on" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <SvgIcon icon-class="password" />
        </span>
        <el-input
          ref="passwordRef"
          :key="passwordType"
          v-model="loginForm.password"
          :type="passwordType"
          :placeholder="$t('login.password')"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <SvgIcon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-button :loading="isLoading" type="primary" style="width: 100%; margin-bottom: 30px" @click.native.prevent="handleLogin">{{ $t('login.login') }}</el-button>
      <div class="tips">
        <span> {{ $t('login.textTip1') }}</span>
      </div>
      <div class="tips">
        <span> {{ $t('login.textTip2') }}</span>
      </div>
      <div class="tips">
        <span> {{ $t('login.textTip3') }}</span>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { LocationQuery, LocationQueryValue, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/modules/user'

import LangSelect from '@/components/LangSelect/index.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

import { LoginData } from '@/api/auth/types'
import { validUsername } from '@/utils/validate'

const { t, locale } = useI18n()

const route = useRoute()
const userStore = useUserStore()
const isLoading = ref(false)
const loginFormRef = ref()
const passwordRef = ref()
const passwordType = ref('password')
const loginForm = ref<LoginData>({
  username: 'admin',
  password: '123456'
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (!validUsername(value)) {
    callback(new Error(t('login.usernameMsg')))
  } else {
    callback()
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value.length < 6) {
    callback(new Error(t('login.passwordMsg')))
  } else {
    callback()
  }
}
const loginRules = ref({
  username: [{ required: true, trigger: ['blur', 'change'], validator: validateUsername }],
  password: [{ required: true, trigger: ['blur', 'change'], validator: validatePassword }]
})

watch(
  () => locale.value,
  (value) => {
    nextTick(() => {
      loginFormRef.value.resetFields()
    })
  }
)

function showPwd() {
  if (passwordType.value === 'password') {
    passwordType.value = ''
  } else {
    passwordType.value = 'password'
  }
  nextTick(() => {
    passwordRef.value.focus()
  })
}

function handleLogin() {
  loginFormRef.value.validate((valid: boolean) => {
    if (valid) {
      isLoading.value = true
      userStore
        .login(loginForm.value)
        .then(() => {
          const redirect = (route.query.redirect as LocationQueryValue) ?? '/'
          router.push({ path: redirect, query: getOtherQuery(route.query) }).then(() => {
            isLoading.value = false
          })
        })
        .catch(() => {
          isLoading.value = false
        })
        .finally(() => {})
    }
  })
}

const getOtherQuery = (query: LocationQuery) => {
  return Object.keys(query).reduce((acc: any, cur: string) => {
    if (cur !== 'redirect') {
      acc[cur] = query[cur]
    }
    return acc
  }, {})
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    .el-input__wrapper {
      width: 100%;
      padding: 0;
      background-color: transparent;
      box-shadow: none;

      input {
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    display: flex;
    align-items: center;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .text {
      color: white;
      margin-bottom: 40px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
