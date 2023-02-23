export const useTools = () => {
	/**
	 * @description 验证变量是否为空
	 * @param variable
	 * @returns boolean
	 */
	const isEmpty = (variable: any) => {
		if (variable === null || variable === undefined) return true
		if (typeof variable === 'string' && !variable.trim().length) return true
		if (typeof variable === 'object' && !Object.keys(variable).length) return true
		if (Array.isArray(variable) && !variable.length) return true
		return false
	}

	/**
	 * @description 验证变量是否为 Number
	 * @param variable
	 * @returns boolean
	 */
	const isNumber = (variable: any) => {
		if (typeof variable === 'number') return true
		if (isEmpty(variable)) return false
		return false
	}

	/**
	 * @description 将字符串转换为数字
	 * @param source
	 * @returns string | number | undefined
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

	return {
		isEmpty,
		isNumber,
		transformNum
	}
}
