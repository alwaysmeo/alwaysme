import { defineConfig, loadEnv } from 'vite'
import viteDts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import { namespace } from './packages/config'

export default defineConfig(({ command, mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_OPEN, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)

	return {
		// root: resolve(__dirname, './examples'),
		plugins: [
			vue(),
			vueJsx(),
			viteDts({ outputDir: `${VITE_OUTDIR}/es` }),
			visualizer(),
			AutoImport({
				imports: ['vue'],
				dirs: ['../packages/config'],
				dts: '../typings/auto-import.d.ts',
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
			outDir: `${VITE_OUTDIR}/es`,
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
						dir: `${VITE_OUTDIR}/es`,
						format: 'es',
						preserveModules: true
					},
					{
						dir: `${VITE_OUTDIR}/lib`,
						format: 'cjs',
						preserveModules: true
					}
				]
			}
		},
		server: {
			host: VITE_HOST,
			port: VITE_PORT,
			open: VITE_OPEN,
			hmr: VITE_HMR
		}
	}
})
