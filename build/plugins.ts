import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import UnoCSS from 'unocss/vite'
import { presetIcons } from 'unocss'

import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

const resolve = (dir: string) => path.resolve(process.cwd(), dir)

export function createPlugins(env: any, isProduction: boolean) {
  const { VITE_APP_USE_MOCK } = env

  return [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', '@vueuse/core'],
      // imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      eslintrc: {
        enabled: false, // 是否自动生成 eslint 规则，建议生成之后设置 false，手动维护
        filepath: './.eslintrc-auto-import.json', // 指定自动导入函数 eslint 规则的文件路径
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
      // dts: 'src/types/auto-imports.d.ts' // 指定自动导入函数TS类型声明文件路径
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
    }),

    // 配置UnoCSS，使其可以直接使用标签 <i-ep-edit /> | <el-button icon="i-ep-edit" > edit </el-button>
    // UnoCSS({})
    UnoCSS({
      presets: [
        presetIcons({
          scale: 1.2,
          warn: true
        })
      ],
      // 以下配置是为了可以直接使用标签 <i-ep-edit /> | <el-button icon="i-ep-edit" > edit </el-button>
      variants: [
        {
          match: (s) => {
            if (s.startsWith('i-')) {
              return {
                matcher: s,
                selector: (s) => {
                  return s.startsWith('.') ? `${s.slice(1)},${s}` : s
                }
              }
            }
          }
        }
      ]
    })
  ]
}
