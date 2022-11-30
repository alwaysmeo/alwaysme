import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig(({ mode }) => {
    return {
        plugins: [vue(), DefineOptions()],
        resolve: {
            alias: {
                '@': resolve(__dirname, './packages'),
                '@components': resolve(__dirname, './packages/components'),
                '@utils': resolve(__dirname, './packages/utils'),
                '@theme': resolve(__dirname, './packages/theme')
            }
        },
        build: {
            outDir: 'lib',
            lib: {
                entry: resolve(__dirname, 'packages/index.ts'),
                formats: ['es', 'esm', 'umd', 'cjs'],
                name: 'Alwaysme',
                fileName: 'alwaysme'
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
            open: false,
            hmr: true
        }
    }
})
