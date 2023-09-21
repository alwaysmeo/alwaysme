export const useTools = () => {
	/**
	 * @description 将字符转换为 css 可识别单位
	 * @param source <string | number | undefined>
	 * @returns string | undefined
	 */
	const transformCssUnit = (source: string | number | undefined) => {
		if (typeof source === 'number') return `${source}px`
		if (typeof source === 'string') return source
	}

	return {
		transformCssUnit
	}
}
