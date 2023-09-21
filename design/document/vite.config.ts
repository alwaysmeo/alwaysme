import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_OPEN, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)

	return {
		plugins: [vue(), vueJsx()],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import './assets/style/global.scss';`
				}
			}
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './'),
				'@views': resolve(__dirname, './views'),
				'@assets': resolve(__dirname, './assets'),
				'@components': resolve(__dirname, './components')
			}
		},
		build: {
			outDir: VITE_OUTDIR,
			chunkSizeWarningLimit: 500,
			minify: true,
			cssCodeSplit: false
		},
		server: {
			host: VITE_HOST as string,
			port: Number(VITE_PORT) as number,
			open: VITE_OPEN as unknown as boolean,
			hmr: VITE_HMR as unknown as boolean
		}
	}
})
