import vue from '@vitejs/plugin-vue'

import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// import UnoCSS from "unocss/vite";

import { viteMockServe } from 'vite-plugin-mock'

import path from 'path'

const resolve = (dir: string) => path.resolve(__dirname, dir)

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_USE_MOCK, VITE_APP_PORT, VITE_APP_BASE_API_TYPE, VITE_APP_BASE_API } = env
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
    plugins: [
      vue(),
      // UnoCSS({}),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', '@vueuse/core'],
        // imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        },
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          IconsResolver({})
        ],
        vueTemplate: true,
        // 配置文件生成位置(false:关闭自动生成)
        dts: false
        // dts: 'src/types/auto-imports.d.ts'
      }),

      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            // @iconify-json/ep 是 Element Plus 的图标库
            enabledCollections: ['ep']
          })
        ],
        // 指定自定义组件位置(默认:src/components)
        dirs: ['src/**/components'],
        // 配置文件位置(false:关闭自动生成)
        dts: false
        // dts: "src/types/components.d.ts",
      }),

      Icons({
        // 自动安装图标库
        autoInstall: true
      }),

      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve('src/assets/icons'), resolve('src/assets/error')],
        // iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),

      viteMockServe({
        mockPath: './mock/', // 指向mock下的文件
        ignore: /^\_/, // 忽略下划线开头的文件
        watchFiles: true, // 监听文件内容变更
        localEnabled: !isProduction && VITE_APP_USE_MOCK === 'true',
        prodEnabled: isProduction && VITE_APP_USE_MOCK === 'true',
        logger: true,
        injectCode: `
          import { setupProdMockServer } from '../mock/_mockProdServer';
          setupProdMockServer();
        `,
        injectFile: resolve('src/main.ts')
      })
    ],
    // 预加载项目必需的组件
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'pinia',
        'axios',
        'element-plus/es/components/form/style/css',
        'element-plus/es/components/form-item/style/css',
        'element-plus/es/components/button/style/css',
        'element-plus/es/components/input/style/css',
        'element-plus/es/components/input-number/style/css',
        'element-plus/es/components/switch/style/css',
        'element-plus/es/components/upload/style/css',
        'element-plus/es/components/menu/style/css',
        'element-plus/es/components/col/style/css',
        'element-plus/es/components/icon/style/css',
        'element-plus/es/components/row/style/css',
        'element-plus/es/components/tag/style/css',
        'element-plus/es/components/dialog/style/css',
        'element-plus/es/components/loading/style/css',
        'element-plus/es/components/radio/style/css',
        'element-plus/es/components/radio-group/style/css',
        'element-plus/es/components/popover/style/css',
        'element-plus/es/components/scrollbar/style/css',
        'element-plus/es/components/tooltip/style/css',
        'element-plus/es/components/dropdown/style/css',
        'element-plus/es/components/dropdown-menu/style/css',
        'element-plus/es/components/dropdown-item/style/css',
        'element-plus/es/components/sub-menu/style/css',
        'element-plus/es/components/menu-item/style/css',
        'element-plus/es/components/divider/style/css',
        'element-plus/es/components/card/style/css',
        'element-plus/es/components/link/style/css',
        'element-plus/es/components/breadcrumb/style/css',
        'element-plus/es/components/breadcrumb-item/style/css',
        'element-plus/es/components/table/style/css',
        'element-plus/es/components/tree-select/style/css',
        'element-plus/es/components/table-column/style/css',
        'element-plus/es/components/select/style/css',
        'element-plus/es/components/option/style/css',
        'element-plus/es/components/pagination/style/css',
        'element-plus/es/components/tree/style/css',
        'element-plus/es/components/alert/style/css',
        '@vueuse/core',

        'path-to-regexp',
        'echarts',
        '@wangeditor/editor',
        '@wangeditor/editor-for-vue',
        'vue-i18n',
        'codemirror'
      ]
    }
  }
})
