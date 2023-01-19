<template>
	<div :class="`${prefix}-timeline`" :style="`--${prefix}-timeline-item-position: ${props.position}`">
		<slot />
	</div>
</template>

<script setup lang="ts">
	import { onMounted, watch } from 'vue'
	import { prefix } from '@utils/config'
	import mitt from '@utils/mitt'

	interface Props {
		position?: 'left' | 'right' // 对齐方式
	}

	const props = withDefaults(defineProps<Props>(), {
		position: 'left'
	})

	watch(
		() => props.position,
		(val) => {
			mitt.emit('timeline-position', val)
		}
	)

	onMounted(() => {
		mitt.emit('timeline-position', props.position)
	})
</script>
