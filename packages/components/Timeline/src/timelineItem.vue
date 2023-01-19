<!-- 时间轴组件 -->
<template>
	<div :class="`${prefix}-timeline-item`" :style="`--${prefix}-timeline-item-color: ${props.color}`">
		<div :class="`${prefix}-timeline-item-icon`" :style="`${state.position}: 0`">
			<slot v-if="$slots.icon" name="icon" />
			<i v-else :class="`iconfont ${props.icon}`" />
		</div>
		<div :class="`${prefix}-timeline-item-container`">
			<div :class="`${prefix}-timeline-item-title`">
				<slot v-if="$slots.title" name="title" />
				<span v-else>{{ props.title }}</span>
			</div>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { reactive } from 'vue'
	import { prefix } from '@utils/config'
	import mitt from '@utils/mitt'

	interface Props {
		color?: string // 标题颜色
		icon?: string // 图标
		title?: string // 标题
	}

	const props = withDefaults(defineProps<Props>(), {
		color: 'var(--black)',
		icon: 'icon-unselected',
		title: ''
	})

	const state = reactive({
		position: ''
	})

	mitt.on('timeline-position', (position: string) => {
		state.position = position
	})
</script>
