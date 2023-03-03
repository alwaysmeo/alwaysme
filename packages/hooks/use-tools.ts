import { isEmpty } from 'lodash-es'

export const useTools = () => {
	/**
	 * @description 验证是否为 Number 类型
	 * @param variable <any>
	 * @returns boolean
	 */
	const isNumber = (variable: any) => {
		if (isEmpty(variable)) return false
		if (typeof variable === 'number') return true
		return false
	}

	/**
	 * @description 将字符串转换为数字
	 * @param source <string | number | undefined>
	 * @returns number | undefined
	 */
	const transformNum = (source: string | number | undefined) => {
		if (isEmpty(source)) return source
		if (typeof source === 'number') return source
		if (typeof source === 'string') {
			const str = source.trim().replace(/[^0-9]/g, '')
			if (!str.length) return undefined
			return parseInt(str)
		}
	}

	/**
	 * @description 将字符转换为 css 可识别单位
	 * @param source <string | number | undefined>
	 * @returns string | undefined
	 */
	const transformCssUnit = (source: string | number | undefined) => {
		if (isEmpty(source)) return source
		if (typeof source === 'number') return `${source}px`
		if (typeof source === 'string') {
			if (source.trim() === 'auto') return source.trim()
			const str = source.trim().replace(/[^0-9]/g, '')
			if (!str.length) return undefined
			return `${str}px`
		}
	}

	return {
		isNumber,
		transformNum,
		transformCssUnit
	}
}
