<!-- 时间轴组件 -->
<template>
	<div :class="`${namespace}-timeline`" :style="`--${namespace}-timeline-item-position: ${props.position}`">
		<slot />
	</div>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { computed, ComputedRef, provide, useSlots } from 'vue'
	import TimelineItem from './TimelineItem.vue'

	const slots = useSlots()

	interface Props {
		position?: 'left' | 'right' // 对齐方式
	}

	const props = withDefaults(defineProps<Props>(), {
		position: 'left'
	})

	if (slots.default)
		for (const item of slots.default?.())
			if (item?.type !== TimelineItem) {
				// eslint-disable-next-line no-console
				console.warn('There appears to be a non <TimelineItem> component within the <Timeline> component.')
				break
			}

	provide<{
		position: ComputedRef<'left' | 'right'>
	}>('timeline-position', {
		position: computed(() => props.position)
	})
</script>
