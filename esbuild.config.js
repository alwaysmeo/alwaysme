import { build } from 'esbuild'
import vue from 'esbuild-plugin-vue'
import sassPlugin from 'esbuild-plugin-sass'
import esbuildPluginBowserSync from 'esbuild-plugin-browser-sync'
import components from './components.js'

const libraryName = 'index.js' // 包名

// 打包组件库
async function buildLibrary() {
	await build({
		entryPoints: ['packages/index.ts'],
		outfile: `lib/${libraryName}`,
		bundle: true,
		format: 'esm',
		tsconfig: 'tsconfig.json',
		treeShaking: true,
		minify: true,
		external: ['vue'],
		loader: {
			'.eot': 'file',
			'.svg': 'file',
			'.ttf': 'file',
			'.woff': 'file'
		},
		plugins: [vue()]
	})

	await build({
		entryPoints: Object.values(components),
		outdir: 'lib/components',
		bundle: true,
		format: 'esm',
		tsconfig: 'tsconfig.json',
		treeShaking: true,
		minify: true,
		external: ['vue'],
		loader: {
			'.eot': 'dataurl',
			'.svg': 'dataurl',
			'.ttf': 'dataurl',
			'.woff': 'dataurl'
		},
		plugins: [vue()]
	})
}

// 打包预览页面
function buildExamples() {
	build({
		entryPoints: ['examples/main.ts'],
		outdir: 'examples/static',
		bundle: true,
		tsconfig: 'tsconfig.json',
		format: 'iife',
		watch: true,
		sourcemap: true,
		inject: ['./packages/utils/config.ts'],
		loader: {
			'.js': 'jsx',
			'.ts': 'tsx',
			'.eot': 'file',
			'.svg': 'file',
			'.ttf': 'file',
			'.woff': 'file'
		},
		plugins: [
			sassPlugin(),
			vue(),
			esbuildPluginBowserSync({
				server: 'examples'
			})
		]
	})
}

// 启动函数
async function start() {
	// 判断当前环境
	if (process.argv.includes('serve')) buildExamples()
	else buildLibrary()
}

start()
