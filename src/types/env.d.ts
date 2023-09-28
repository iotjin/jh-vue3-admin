/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_APP_PORT: string
  VITE_APP_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/* 处理mockjs警告

无法找到模块“mockjs”的声明文件。“xxx/jh-vue3-admin/node_modules/.pnpm/registry.npmmirror.com+mockjs@1.1.0/node_modules/mockjs/dist/mock.js”隐式拥有 "any" 类型。
尝试使用 `npm i --save-dev @types/mockjs` (如果存在)，或者添加一个包含 `declare module 'mockjs';` 的新声明(.d.ts)文件
*/
declare module 'mockjs'
