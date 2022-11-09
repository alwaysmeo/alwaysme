import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig(({ mode }) => {
    return {
        plugins: [vue(), DefineOptions()],
        resolve: {
            alias: {
                '@': resolve(__dirname, './packages'),
                '@components': resolve(__dirname, './packages/components'),
                '@utils': resolve(__dirname, './packages/utils'),
                '@theme': resolve(__dirname, './packages/theme'),
                '@public': resolve(__dirname, './public')
            }
        },
        build: {
            outDir: 'lib',
            lib: {
                entry: resolve(__dirname, './packages/index.ts'),
                name: 'Alwaysme',
                fileName: 'Alwaysme-Vue3'
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        },
        server: {
            host: 'localhost',
            port: 7100,
            open: true,
            hmr: true
        }
    }
})
