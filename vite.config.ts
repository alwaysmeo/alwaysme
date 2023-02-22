import { namespace } from './packages/config'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import viteDts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		viteDts({ outputDir: 'es' }),
		visualizer(),
		AutoImport({
			imports: ['vue'],
			dirs: ['./packages/config'],
			dts: './typings/auto-import.d.ts',
			vueTemplate: true
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `$namespace: '${namespace}'; @import './packages/style/index.scss';`
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './packages'),
			'@components': resolve(__dirname, './packages/components'),
			'@hooks': resolve(__dirname, './packages/hooks'),
			'@utils': resolve(__dirname, './packages/utils'),
			'@style': resolve(__dirname, './packages/style')
		}
	},
	build: {
		target: 'modules',
		outDir: 'es',
		minify: true, // 压缩
		cssCodeSplit: false,
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'alwaysme',
			fileName: (format, name) => `${name.replace(/_(\S*)/, '')}.${format}.js`
		},
		rollupOptions: {
			external: ['vue'],
			input: {
				main: resolve(__dirname, './packages/index.ts')
			},
			output: [
				{
					dir: 'es',
					format: 'es',
					preserveModules: true
				},
				{
					dir: 'lib',
					format: 'cjs',
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
