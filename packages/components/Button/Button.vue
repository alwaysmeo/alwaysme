<template>
	<template v-if="props.href">
		<a :href="props.href" :class="[state.className]" :target="props.target" @click="handleClick">
			<slot></slot>
		</a>
	</template>
	<template v-else>
		<button :class="[state.className]" :disabled="props.disabled" :type="props.htmlType" @click="handleClick">
			<slot></slot>
		</button>
	</template>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue'
import { size } from '@utils/constant'
import { prefix } from '@utils/config'
import './style.scss'


defineOptions({ name: `${prefix}Bottom` })

const props = defineProps({
	// 按钮类型 default | primary | success | warning | danger | info | text
	type: {
		type: String as PropType<'primary' | 'link' | 'text'>,
		default: 'primary',
	},
	// 按钮尺寸 large | default | small
	size: {
		type: String as PropType<size>,
		default: 'default',
	},
	// 按钮形状 default | circle | round
	shape: {
		type: String as PropType<'default' | 'circle' | 'round'>,
		default: 'default',
	},
	// 使按钮的宽度跟随容器的宽度 true | false
	long: {
		type: Boolean as PropType<boolean>,
		default: false,
	},
	// 禁用状态 true | false
	disabled: {
		type: Boolean as PropType<boolean>,
		default: false,
	},
	// 加载中状态 true | false
	loading: {
		type: Boolean as PropType<boolean>,
		default: false,
	},
	// 设置 button 的原生 type 属性 可选值参考 HTML 标准
	htmlType: {
		type: String as PropType<string>,
	},
	// 设置跳转链接 设置此属性时按钮渲染为a标签
	href: {
		type: String as PropType<string>,
	},
	// 规定在何处打开目标 URL。仅 href 属性存在时有效 可选值参考 HTML 标准
	target: {
		type: String as PropType<string>,
	},
})

const emits = defineEmits(['click'])

const state = reactive({
	className: [
		`${prefix}-button`,
		`${prefix}-type-${props.type}`,
		`${prefix}-size-${props.size}`,
		`${prefix}-shape-${props.shape}`,
		{
			[`${prefix}-long`]: props.long,
			[`${prefix}-disabled`]: props.disabled,
			[`${prefix}-loading`]: props.loading,
		},
	],
})

const handleClick = (event: MouseEvent) => {
	if (props.disabled || props.loading) {
		event.preventDefault()
		return
	}
	emits('click', event)
}
</script>
