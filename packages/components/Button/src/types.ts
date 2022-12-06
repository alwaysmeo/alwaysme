import { ExtractPropTypes, PropType } from 'vue'
import { prefix } from '@/config'

export const Name = `${prefix}Button`

export const ButtonProps = {
	// 按钮类型 default | primary | dashed | text | link |
	type: {
		type: String as PropType<'default' | 'primary' | 'dashed' | 'text' | 'link'>,
		values: ['default', 'primary', 'dashed', 'text', 'link'],
		default: 'default'
	},
	// 按钮形状 default | square | round
	shape: {
		type: String as PropType<'default' | 'square' | 'round'>,
		values: ['default', 'square', 'round'],
		default: 'default'
	},
	// 使按钮的宽度跟随容器的宽度 true | false
	long: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	// 禁用状态 true | false
	disabled: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	// 加载中状态 true | false
	loading: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	// 设置 button 的原生 type 属性 可选值参考 HTML 标准
	htmlType: {
		type: String as PropType<'submit' | 'reset' | 'button' | undefined>,
		default: 'button'
	},
	// 幽灵按钮，使按钮背景透明
	ghost: {
		type: Boolean as PropType<boolean>,
		default: false
	}
}

export type ButtonProps = ExtractPropTypes<typeof ButtonProps>