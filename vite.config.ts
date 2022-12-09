import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
	plugins: [
		vue(),
		DefineOptions(),
		dts({ outputDir: 'es', tsConfigFilePath: './tsconfig.json' }),
		dts({ outputDir: 'lib', tsConfigFilePath: './tsconfig.json' })
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
		outDir: 'dist',
		minify: false,
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'alwaysme'
		},
		rollupOptions: {
			external: ['vue'],
			input: {
				alwaysme: resolve(__dirname, './packages/index.ts')
			},
			output: [
				{
					dir: 'es',
					format: 'es',
					sourcemap: true,
					entryFileNames: '[name].[format].js',
					preserveModules: true
				},
				{
					dir: 'lib',
					format: 'cjs',
					sourcemap: true,
					entryFileNames: '[name].[format].js',
					preserveModules: true
				}
			]
		}
	},
	server: {
		host: 'localhost',
		port: 7100,
		open: false,
		hmr: true
	}
})
