<template>
	<button :class="classes" :disabled="props.disabled" :type="props.htmlType" @click="handleClick">
		<i v-if="props.loading" class="iconfont icon-loading" />
		<slot v-if="slots.icon" name="icon" />
		<slot />
	</button>
</template>

<script setup lang="ts">
	const slots = useSlots()
	const emits = defineEmits<{ (key: 'click', val: MouseEvent): void }>()

	interface Props {
		type?: 'default' | 'primary' | 'dashed' | 'text' | 'link' // 按钮类型 default | primary | dashed | text | link
		shape?: 'default' | 'square' | 'round' // 按钮形状 default | square | round
		long?: boolean // 使按钮的宽度跟随容器的宽度 true | false
		disabled?: boolean // 禁用状态 true | false
		loading?: boolean // 加载中状态 true | false
		htmlType?: 'submit' | 'reset' | 'button' // 设置 button 的原生 type 属性 可选值参考 HTML 标准
		ghost?: boolean // 幽灵按钮，使按钮背景透明
	}

	const props = withDefaults(defineProps<Props>(), {
		type: 'default',
		shape: 'default',
		htmlType: 'button'
	})

	const classes = computed(() => {
		return [
			`${prefix}-button`,
			`${prefix}-button-type-${props.type}`,
			`${prefix}-button-shape-${props.shape}`,
			{
				[`${prefix}-button-long`]: props.long,
				[`${prefix}-button-loading`]: props.loading,
				[`${prefix}-button-disabled`]: props.disabled,
				[`${prefix}-button-ghost`]: props.ghost
			}
		]
	})

	const handleClick = (event: MouseEvent) => {
		if (props.disabled || props.loading) return event.preventDefault()
		emits('click', event)
	}
</script>
