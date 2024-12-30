import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

const projectRootDir = resolve(__dirname)

// A bit of a hack, but lets us use the proper extension in chunk filenames
let currentFormat = ''

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**', 'src/**/story/**', 'src/**/*.story.vue'],
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
    dedupe: [
      'vue',
      '@vue/runtime-core',
    ],
  },
  build: {
    minify: false,
    target: 'esnext',
    sourcemap: true,
    lib: {
      name: 'reka-ui',
      fileName: (format, name) => {
        currentFormat = format
        return `${name}.${format === 'es' ? 'js' : 'cjs'}`
      },
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        date: resolve(__dirname, 'src/date/index.ts'),
        constant: resolve(__dirname, 'constant/index.ts'),
        Accordion: resolve(__dirname, 'src/Accordion/index.ts'),
        AlertDialog: resolve(__dirname, 'src/AlertDialog/index.ts'),
        // AspectRatio: resolve(__dirname, 'src/AspectRatio/index.ts'),
        // Avatar: resolve(__dirname, 'src/Avatar/index.ts'),
        Calendar: resolve(__dirname, 'src/Calendar/index.ts'),
        // Checkbox: resolve(__dirname, 'src/Checkbox/index.ts'),
        // Collapsible: resolve(__dirname, 'src/Collapsible/index.ts'),
        Combobox: resolve(__dirname, 'src/Combobox/index.ts'),
        // ConfigProvider: resolve(__dirname, 'src/ConfigProvider/index.ts'),
        ContextMenu: resolve(__dirname, 'src/ContextMenu/index.ts'),
        DateField: resolve(__dirname, 'src/DateField/index.ts'),
        DatePicker: resolve(__dirname, 'src/DatePicker/index.ts'),
        DateRangePicker: resolve(__dirname, 'src/DateRangePicker/index.ts'),
        DateRangeField: resolve(__dirname, 'src/DateRangeField/index.ts'),
        // Dialog: resolve(__dirname, 'src/Dialog/index.ts'),
        DropdownMenu: resolve(__dirname, 'src/DropdownMenu/index.ts'),
        Editable: resolve(__dirname, 'src/Editable/index.ts'),
        HoverCard: resolve(__dirname, 'src/HoverCard/index.ts'),
        // Label: resolve(__dirname, 'src/Label/index.ts'),
        Listbox: resolve(__dirname, 'src/Listbox/index.ts'),
        Menubar: resolve(__dirname, 'src/Menubar/index.ts'),
        NavigationMenu: resolve(__dirname, 'src/NavigationMenu/index.ts'),
        NumberField: resolve(__dirname, 'src/NumberField/index.ts'),
        Pagination: resolve(__dirname, 'src/Pagination/index.ts'),
        PinInput: resolve(__dirname, 'src/PinInput/index.ts'),
        // Popover: resolve(__dirname, 'src/Popover/index.ts'),
        Progress: resolve(__dirname, 'src/Progress/index.ts'),
        RadioGroup: resolve(__dirname, 'src/RadioGroup/index.ts'),
        RangeCalendar: resolve(__dirname, 'src/RangeCalendar/index.ts'),
        ScrollArea: resolve(__dirname, 'src/ScrollArea/index.ts'),
        Select: resolve(__dirname, 'src/Select/index.ts'),
        // Separator: resolve(__dirname, 'src/Separator/index.ts'),
        Slider: resolve(__dirname, 'src/Slider/index.ts'),
        Splitter: resolve(__dirname, 'src/Splitter/index.ts'),
        Stepper: resolve(__dirname, 'src/Stepper/index.ts'),
        // Switch: resolve(__dirname, 'src/Switch/index.ts'),
        Tabs: resolve(__dirname, 'src/Tabs/index.ts'),
        TagsInput: resolve(__dirname, 'src/TagsInput/index.ts'),
        TimeField: resolve(__dirname, 'src/TimeField/index.ts'),
        // Toast: resolve(__dirname, 'src/Toast/index.ts'),
        Toggle: resolve(__dirname, 'src/Toggle/index.ts'),
        ToggleGroup: resolve(__dirname, 'src/ToggleGroup/index.ts'),
        Toolbar: resolve(__dirname, 'src/Toolbar/index.ts'),
        // Tooltip: resolve(__dirname, 'src/Tooltip/index.ts'),
        Tree: resolve(__dirname, 'src/Tree/index.ts'),
        // Viewport: resolve(__dirname, 'src/Viewport/index.ts'),
        // Primitive: resolve(__dirname, 'src/Primitive/index.ts'),
        // VisuallyHidden: resolve(__dirname, 'src/VisuallyHidden/index.ts'),
        utilities: resolve(__dirname, 'src/utilities/index.ts'),
      },
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ],
      output: {
        // Don't rely on preserveModules
        // It creates a lot of unwanted files because of the multiple sections of SFC files
        manualChunks: (moduleId, meta) => {
          const info = meta.getModuleInfo(moduleId)
          if (!info?.isIncluded) {
            // Don't create empty chunks
            return null
          }

          const [namespace, file] = moduleId.split('?')[0].split('/').slice(-2)
          return `${namespace}/${file.slice(0, file.lastIndexOf('.'))}`
        },

        exports: 'named',
        chunkFileNames: chunk => `${chunk.name}.${currentFormat === 'es' ? 'js' : 'cjs'}`,
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css')
            return 'index.css'
          return chunkInfo.name as string
        },
      },
    },
  },
})
