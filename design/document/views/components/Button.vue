<template>
	<div class="container">
		<div class="header">
			<PageHeader title="Button 按钮" desc="按钮用于开始一个即时操作" />
		</div>
		<div class="center">
			<DisplayComponent title="Button">
				<me-button>Button</me-button>
			</DisplayComponent>
		</div>
		<me-divider>Api</me-divider>
		<div class="footer">footer</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue'
	import { PageHeader, DisplayComponent } from '@components'

	const code = `
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import prismjs from 'vite-plugin-prismjs'
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
	const { VITE_HOST, VITE_PORT, VITE_OPEN, VITE_HMR, VITE_OUTDIR } = loadEnv(mode, __dirname)

	return {
		plugins: [
			vue(),
			vueJsx(),
			prismjs({
				languages: ['js', 'ts', 'html', 'css'],
				plugins: ['line-numbers'],
				theme: 'solarizedlight',
				css: true
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: @import './assets/style/global.scss';
				}
			}
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './'),
				'@views': resolve(__dirname, './views'),
				'@assets': resolve(__dirname, './assets'),
				'@components': resolve(__dirname, './components'),
				'@hooks': resolve(__dirname, './hooks')
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
})`
</script>

<style scoped lang="scss"></style>
