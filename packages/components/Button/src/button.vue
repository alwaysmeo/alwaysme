<template>
	<button
		:class="[
			'me-button',
			`me-button-type-${props.type}`,
			`me-button-shape-${props.shape}`,
			{
				[`me-button-long`]: props.long,
				[`me-button-loading`]: props.loading,
				[`me-button-disabled`]: props.disabled,
				[`me-button-ghost`]: props.ghost
			}
		]"
		:disabled="props.disabled"
		:type="props.htmlType"
		@click="handleClick"
	>
		<i v-if="props.loading" class="iconfont icon-loading" />
		<slot name="icon" />
		<slot />
	</button>
</template>

<script setup lang="ts">
	import { prefix } from '@/config'

	interface Props {
		type?: 'default' | 'primary' | 'dashed' | 'text' | 'link' // 按钮类型 default | primary | dashed | text | link
		shape?: 'default' | 'square' | 'round' // 按钮形状 default | square | round
		long?: boolean // 使按钮的宽度跟随容器的宽度 true | false
		disabled?: boolean // 禁用状态 true | false
		loading?: boolean // 加载中状态 true | false
		htmlType?: 'submit' | 'reset' | 'button' // 设置 button 的原生 type 属性 可选值参考 HTML 标准
		ghost?: boolean // 幽灵按钮，使按钮背景透明
	}

	defineOptions({ name: `${prefix}Button` })

	const props = withDefaults(defineProps<Props>(), {
		type: 'default',
		shape: 'default',
		htmlType: 'button'
	})

	const emits = defineEmits<{ (key: 'click', val: Event): void }>()

	const handleClick = (event: Event) => {
		if (props.disabled || props.loading) return event.preventDefault()
		emits('click', event)
	}
</script>
