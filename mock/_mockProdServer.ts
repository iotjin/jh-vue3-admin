import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules: Record<string, any> = import.meta.glob('../mock/**/*.ts', { eager: true })

const mockModules: any = []

Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  if (modules[key].default) {
    mockModules.push(...modules[key].default)
  }
})

// 或者这样写
// import sysUser from './system/user'
// import auth from './auth'
// const mockModules = [...auth, ...sysUser]

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
