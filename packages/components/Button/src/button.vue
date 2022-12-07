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
	import { ButtonProps, Name } from '@components/Button/src/types'

	defineOptions({ name: Name })
	const props = defineProps(ButtonProps)
	const emits = defineEmits(['click'])

	const handleClick = (event: MouseEvent) => {
		if (props.disabled || props.loading) return event.preventDefault()
		emits('click', event)
	}
</script>
