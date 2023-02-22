// 转换为数字
const transformNum = (str: string) => {
	str = str.replace(/^-?\d*\.?\d+$/, '')
	return Number(str)
}

export default {
	transformNum
}
