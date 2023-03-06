<!-- 时间轴组件 -->
<template>
	<div :class="`${namespace}-timeline-item`" :style="`--${namespace}-timeline-item-color: ${props.color}`">
		<div :class="`${namespace}-timeline-item-icon`" :style="`${timeline.position.value}: 0`">
			<slot v-if="slots.icon" name="icon" />
			<component :is="`${namespace}-icon`" v-else :name="props.icon" size="14px" />
		</div>
		<div :class="`${namespace}-timeline-item-container`">
			<div :class="`${namespace}-timeline-item-title`">
				<slot v-if="slots.title" name="title" />
				<span v-else>{{ props.title }}</span>
			</div>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { inject, useSlots, ComputedRef } from 'vue'
	import { throwError } from '@utils'

	const slots = useSlots()

	interface Props {
		color?: string // 标题颜色
		icon?: string // 图标
		title?: string // 标题
	}

	const props = withDefaults(defineProps<Props>(), {
		color: `var(--${namespace}-gray-color-20)`,
		icon: 'unselected',
		title: undefined
	})

	const timeline = inject<{
		position: ComputedRef<'left' | 'right'>
	}>('timeline-position')
	if (!timeline) throw throwError(`TimelineItem`, 'Can not inject root timeline')
</script>
