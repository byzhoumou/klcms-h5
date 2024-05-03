import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd())
    const { VITE_APP_ENV, VITE_APP_DEV_SERVER } = env
    if (!VITE_APP_DEV_SERVER) {
        throw new Error('请在.env.local文件中配置VITE_APP_DEV_SERVER')
    }
    return {
        base: VITE_APP_ENV === 'production' ? '/' : '/',
        plugins: [
            vue(),
            AutoImport({
                // import自动倒入
                imports: ['vue'],
                // 自动生成类型定义文件
                dts: './auto-import.d.ts',
                // 这里的自动引入会导致组件样式重复  所以用括号里的不要导入
                resolvers: [VantResolver({ importStyle: true })],
            }),
            Components({
                // 这里的importStyle: 'sass' 在这里 不要写在上面
                resolvers: [VantResolver({ importStyle: false })],
            }),
            // 配置svg图片
        ],
        resolve: {
            alias: {
                '~': fileURLToPath(new URL('./', import.meta.url)),
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },

        server: {
            port: 3890,
            host: true,
            open: true,
            proxy: {
                '/api': {
                    target: VITE_APP_DEV_SERVER,
                },
                '/uploads': {
                    target: VITE_APP_DEV_SERVER,
                },
            },
        },
    }
})
