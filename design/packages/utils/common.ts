const isEmpty = (value: any) => {
	return value === undefined || value === null || value === ''
}

const isNumber = (value: any) => {
	return !isNaN(value)
}

const isString = (value: any) => {
	return typeof value === 'string'
}

const isBoolean = (value: any) => {
	return typeof value === 'boolean'
}

const isArray = (value: any) => {
	return Array.isArray(value)
}

const throttle = (fun: Function, time: number = 500) => {
	let previous = 0
	return function (...args: any) {
		let now = +new Date()
		if (now - previous > time) {
			previous = now
			fun.apply(this, args)
		}
	}
}
const debounce = (fun: Function, time: number = 500) => {
	let timer: any = null
	return function () {
		let context = this
		let args = arguments
		if (timer) {
			clearTimeout(timer)
			timer = null
		}
		timer = setTimeout(function () {
			fun.apply(context, args)
		}, time)
	}
}
export { isEmpty, isNumber, isString, isBoolean, isArray, throttle, debounce }
