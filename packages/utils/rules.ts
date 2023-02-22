// 转换为数字
export const transformNumber = (str: string) => {
	str = str.replace(/^-?\d*\.?\d+$/, '')
	return Number(str)
}
