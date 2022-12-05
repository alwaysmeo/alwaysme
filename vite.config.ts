import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        DefineOptions(),
        dts({ tsConfigFilePath: './tsconfig.json'}),
        dts({ outputDir: 'lib', tsConfigFilePath: './tsconfig.json'})
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './packages'),
            '@components': resolve(__dirname, './packages/components'),
            '@utils': resolve(__dirname, './packages/utils'),
            '@theme': resolve(__dirname, './packages/theme')
        }
    },
    build: {
        target: 'modules',
        outDir: 'lib',
        minify: false,
        rollupOptions: {
            external: ['vue'],
            input: ['packages/index.ts'],
            output: [
                {
                    dir: 'es',
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: 'packages'
                },
                {
                    dir: 'lib',
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: 'packages'
                }
            ]
        },
        lib: {
            entry: resolve(__dirname, 'packages/index.ts'),
            formats: ['es', 'cjs'],
        }
    },
    server: {
        host: 'localhost',
        port: 7100,
        open: false,
        hmr: true
    }
})
