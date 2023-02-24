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
				dts: './typings/auto-import.d.ts',
				vueTemplate: true
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `$namespace: '${namespace}';`
				}
			}
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './'),
				'@views': resolve(__dirname, './views'),
				'@assets': resolve(__dirname, './assets')
			}
		},
		build: {
			outDir: VITE_OUTDIR
		},
		server: {
			host: VITE_HOST,
			port: VITE_PORT,
			open: VITE_OPEN,
			hmr: VITE_HMR
		}
	}
})
