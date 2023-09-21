module.exports = {
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
		'vue/setup-compiler-macros': true // vue3写法校验
	},
	extends: [
		'plugin:vue/base',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:@typescript-eslint/recommended' // ts写法校验
	],
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
				'vue/script-indent': 'off'
			}
		}
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		// Script parser for `<script lang="ts">`
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest', // ECMAScript 版本
		sourceType: 'module' // 模块化
	},
	plugins: ['vue', '@typescript-eslint'], // 插件
	rules: {
		eqeqeq: 'warn', // 必须使用全等
		indent: ['error', 'tab'], // 强制使用制表符缩进
		'no-console': 'warn', // 禁止使用 console
		'no-debugger': 'warn', // 禁止使用 debugger
		'no-const-assign': 'error', // 禁止修改 const 声明的变量
		'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
		'no-unused-components': 'off', // 关闭未使用的组件校验
		'comma-dangle': ['warn', 'never'], // 对象字面量项尾不能有逗号
		'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
		// 'no-extra-parens': ['error', 'functions'], // 禁止不必要的括号
		'comma-spacing': ['error', { before: false, after: true }], // 控制逗号前后的空格
		'no-unused-vars': ['warn', { vars: 'all', args: 'none' }], // 禁止出现未使用过的变量
		'keyword-spacing': ['error', { before: true, after: true }], // 强制在关键字前后使用一致的空格
		'@typescript-eslint/no-explicit-any': ['off'], // 关闭any类型校验
		'@typescript-eslint/no-empty-function': 'off', // 不允许空函数
		'vue/max-attributes-per-line': 'off', // 关闭属性换行
		'vue/script-indent': ['error', 'tab'], // 强制使用制表符缩进
		'vue/multi-word-component-names': 'off', // 关闭组件名必须包含一个连字符
		'vue/html-indent': ['error', 'tab'], // 强制使用制表符缩进
		'vue/html-self-closing': ['error', { html: { void: 'never', normal: 'always', component: 'always' } }], // 关闭自闭合标签
		'vue/singleline-html-element-content-newline': 'off', // 此规则强制在单行元素的内容前后换行
		'vue/html-self-closing': ['off'], // 此规则旨在强制将自闭合符号作为配置样式
		'vue/no-reserved-props': ['off', { vueVersion: 3 }],
		'@typescript-eslint/ban-types': ['error', { extendDefaults: true, types: { '{}': false } }]
	}
}
