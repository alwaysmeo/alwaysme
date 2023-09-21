import { ref } from 'vue'

const theme = ref<'light' | 'dark'>('light') // 当前主题
theme.value = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'

export const useTheme = () => {
	/**
	 * @description 设置当前主题
	 * @param _theme <'light' | 'dark'>
	 */
	const setTheme = (_theme: 'light' | 'dark') => {
		// 设置主题
		document.documentElement.setAttribute('data-theme', _theme)
		theme.value = _theme
	}

	return {
		theme,
		setTheme
	}
}
