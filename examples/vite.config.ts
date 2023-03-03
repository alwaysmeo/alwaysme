import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { namespace } from '../packages/config'

export default defineConfig(({ command, mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_OPEN, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)

	return {
		plugins: [
			vue(),
			vueJsx()
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `$namespace: '${namespace}'; @import './assets/style/global.scss';`
				}
			}
		},
		resolve: {
			alias: {
				// examples
				'@': resolve(__dirname, './'),
				'@views': resolve(__dirname, './views'),
				'@assets': resolve(__dirname, './assets'),
				// packages
				'@components': resolve(__dirname, '../packages/components'),
				'@config': resolve(__dirname, '../packages/config'),
				'@utils': resolve(__dirname, '../packages/utils'),
				'@hooks': resolve(__dirname, '../packages/hooks'),
				'@style': resolve(__dirname, '../packages/style')
			}
		},
		build: {
			outDir: VITE_OUTDIR,
			chunkSizeWarningLimit: 500,
			minify: true, // 压缩
			cssCodeSplit: false
		},
		server: {
			host: VITE_HOST as string,
			port: VITE_PORT as unknown as number,
			open: VITE_OPEN as unknown as boolean,
			hmr: VITE_HMR as unknown as boolean
		}
	}
})
