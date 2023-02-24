import { defineConfig } from 'vite'
import viteDts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import { namespace } from '../packages/config'

const OUTDIR = '../dist'
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		viteDts({
			outputDir: `${OUTDIR}/es`,
			tsConfigFilePath: '../tsconfig.json'
		}),
		visualizer(),
		AutoImport({
			imports: ['vue'],
			dirs: ['./config'],
			dts: './typings/auto-import.d.ts',
			vueTemplate: true
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `$namespace: '${namespace}'; @import './style/index.scss';`
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './'),
			'@components': resolve(__dirname, './components'),
			'@hooks': resolve(__dirname, './hooks'),
			'@utils': resolve(__dirname, './utils'),
			'@style': resolve(__dirname, './style')
		}
	},
	build: {
		target: 'modules',
		outDir: `${OUTDIR}`,
		minify: true, // 压缩
		cssCodeSplit: false,
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'alwaysme'
		},
		rollupOptions: {
			external: ['vue'],
			input: {
				main: resolve(__dirname, './index.ts')
			},
			output: [
				{
					dir: `${OUTDIR}/es`,
					format: 'es',
					entryFileNames: '[name].mjs',
					preserveModules: true
				},
				{
					dir: `${OUTDIR}/lib`,
					format: 'cjs',
					entryFileNames: '[name].js',
					preserveModules: true
				}
			]
		}
	}
})
