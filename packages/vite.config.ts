import { defineConfig, loadEnv } from 'vite'
import viteDts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
import { namespace } from './config'

export default defineConfig(({ command, mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_OPEN, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)

	return {
		plugins: [
			vue(),
			vueJsx(),
			viteDts({
				outputDir: `${VITE_OUTDIR}/es`,
				tsConfigFilePath: './tsconfig.json'
			}),
			visualizer()
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
				'@config': resolve(__dirname, './config'),
				'@hooks': resolve(__dirname, './hooks'),
				'@utils': resolve(__dirname, './utils'),
				'@style': resolve(__dirname, './style')
			}
		},
		build: {
			target: 'modules',
			outDir: `${VITE_OUTDIR}`,
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
						dir: `${VITE_OUTDIR}/es`,
						format: 'es',
						entryFileNames: '[name].mjs',
						preserveModules: true
					},
					{
						dir: `${VITE_OUTDIR}/lib`,
						format: 'cjs',
						entryFileNames: '[name].js',
						preserveModules: true
					}
				]
			}
		},
		server: {
			host: VITE_HOST as string,
			port: VITE_PORT as unknown as number,
			open: VITE_OPEN as unknown as boolean,
			hmr: VITE_HMR as unknown as boolean
		}
	}
})
