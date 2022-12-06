import { ExtractPropTypes, PropType } from 'vue'
import { prefix } from '@/config'

export const Name = `${prefix}Link`

export const LinkProps = {
	// 链接色值
	color: {
		type: String as PropType<string>,
		default: ''
	},
	// 是否需要下划线
	underline: {
		type: Boolean as PropType<boolean>,
		default: true
	},
	// 是否禁用状态
	disabled: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	// 原生 herf 属性
	href: {
		type: String as PropType<string>,
		default: ''
	},
	// 原生 target 属性
	target: {
		type: String as PropType<'_self' | '_blank' | '_parent' | '_top'>,
		values: ['_self', '_blank', '_parent', '_top'],
		default: '_self'
	}
}

export type LinkProps = ExtractPropTypes<typeof LinkProps>