<!-- 时间轴组件 -->
<template>
	<div :class="`${namespace}-timeline`" :style="`--${namespace}-timeline-item-position: ${props.position}`">
		<slot />
	</div>
</template>

<script setup lang="ts">
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
