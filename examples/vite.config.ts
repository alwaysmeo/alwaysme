import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import { namespace } from '../packages/config'

export default defineConfig(({ command, mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_OPEN, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)

	return {
		plugins: [
			vue(),
			vueJsx(),
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
					additionalData: `$namespace: '${namespace}'; @import '../packages/style/index.scss';`
				}
			}
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, '../packages'),
				'@components': resolve(__dirname, '../packages/components'),
				'@hooks': resolve(__dirname, '../packages/hooks'),
				'@utils': resolve(__dirname, '../packages/utils'),
				'@style': resolve(__dirname, '../packages/style')
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
