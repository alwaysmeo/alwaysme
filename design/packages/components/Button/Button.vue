<template>
	<button :class="classes" :disabled="props.disabled" :type="props.htmlType" @click="onClick">
		<component :is="`${namespace}-icon`" v-if="props.loading" name="loading" />
		<slot v-if="slots.icon" name="icon" />
		<span :class="`${namespace}-button-text`">
			<slot />
		</span>
	</button>
</template>

<script setup lang="ts">
import { namespace } from '@config'
import { computed, useSlots } from 'vue'


	const slots = useSlots()
	const emits = defineEmits<{ (key: 'onClick', event: MouseEvent): void }>()

	interface Props {
		type?: 'default' | 'primary' | 'dashed' | 'solid' // 按钮类型 default | primary | dashed | solid
		shape?: 'default' | 'square' | 'round' // 按钮形状 default | square | round
		long?: boolean // 使按钮的宽度跟随容器的宽度 true | false
		disabled?: boolean // 禁用状态 true | false
		loading?: boolean // 加载中状态 true | false
		htmlType?: 'submit' | 'reset' | 'button' // 设置 button 的原生 type 属性 可选值参考 HTML 标准
	}

	const props = withDefaults(defineProps<Props>(), {
		type: 'default',
		shape: 'default',
		htmlType: 'button'
	})

	const classes = computed(() => {
		return [
			`${namespace}-box-shadow`,
			`${namespace}-button`,
			`${namespace}-button-type-${props.type}`,
			`${namespace}-button-shape-${props.shape}`,
			{
				[`${namespace}-button-long`]: props.long,
				[`${namespace}-button-loading`]: props.loading,
				[`${namespace}-button-disabled`]: props.disabled
			}
		]
	})

	const onClick = (event: MouseEvent) => {
		if (props.disabled || props.loading) return event.preventDefault()
		emits('onClick', event)
	}
</script>
