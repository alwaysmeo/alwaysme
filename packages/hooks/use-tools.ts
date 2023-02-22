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
		if (typeof variable === 'array' && !variable.length) return true
		return false
	}

	/**
	 * @description 将字符串转换为数字
	 * @param str
	 * @returns number | undefined
	 */
	const transformNum = (str: string | undefined) => {
		if (isEmpty(str)) return str
		const _str = str.trim().replace(/[^0-9]/g, '')
		if (!_str.length) return undefined
		return parseInt(_str)
	}

	return {
		transformNum,
		isEmpty
	}
}
