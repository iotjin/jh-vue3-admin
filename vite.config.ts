import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import path from 'path'
import { setupBuild } from './build/index'
import { __APP_INFO__ } from './build/info'
import { include, exclude } from './build/optimize'
import { createPlugins } from './build/plugins'

const resolve = (dir: string) => path.resolve(__dirname, dir)

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_PORT, VITE_APP_BASE_API_TYPE, VITE_APP_BASE_API } = env
  const isProduction = mode === 'production' // process.env.NODE_ENV === 'production'
  console.log('isProduction', JSON.stringify(isProduction))

  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve('src'),
        // 清除警告 vue-i18n 控制台警告
        // You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        //define global scss variable
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `
        }
      }
    },
    server: {
      // 是否开启 https
      https: false,
      host: '0.0.0.0',
      port: Number(VITE_APP_PORT),
      open: true, // 运行是否自动打开浏览器
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        [VITE_APP_BASE_API_TYPE]: {
          // target: 'https://xxx.com', // 代理的线上的接口地址
          // target: 'http://localhost:9528', // 本地接口地址
          target: VITE_APP_BASE_API, // 本地接口地址
          changeOrigin: true,
          // 如果要代理 websockets
          // ws: false,
          rewrite: (path) => path.replace(new RegExp('^' + VITE_APP_BASE_API_TYPE), '') // 替换 /dev-api 为 target 接口地址
        }

        // '/dev-api': {
        //   target: 'http://localhost:9528',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/dev-api/, ''),
        // },
      }
    },
    plugins: createPlugins(env, isProduction),
    // 预加载项目必需的组件
    optimizeDeps: {
      include,
      exclude
    },
    build: setupBuild(),
    define: {
      // 解决打包报错
      __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
      //   __VUE_I18N_LEGACY_API__: false,
      //   __VUE_I18N_FULL_INSTALL__: false
      // 系统信息
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  }
})
