// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    // ...
  },
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      primary_dark: 'var(--el-color-primary-light-5)'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    // presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    }),
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
