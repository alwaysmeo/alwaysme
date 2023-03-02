export const useTheme = () => {
	/**
	 * @description 获取当前主题
	 * @returns <'light' | 'dark'>
	 */
	const get = () => {
		return document.documentElement.getAttribute('data-theme') || 'light'
	}

	/**
	 * @description 设置当前主题
	 * @param theme <'light' | 'dark'>
	 */
	const set = (theme: 'light' | 'dark') => {
		// 设置主题
		document.documentElement.setAttribute('data-theme', theme)
	}

	return {
		get,
		set
	}
}
