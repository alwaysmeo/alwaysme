<!-- 时间轴组件 -->
<template>
	<div :class="`${prefix}-timeline-item`" :style="`--${prefix}-timeline-item-color: ${props.color}`">
		<div :class="`${prefix}-timeline-item-icon`" :style="`${state.position}: 0`">
			<slot v-if="slots.icon" name="icon" />
			<component :is="`${prefix}-icon`" v-else :name="props.icon" />
		</div>
		<div :class="`${prefix}-timeline-item-container`">
			<div :class="`${prefix}-timeline-item-title`">
				<slot v-if="slots.title" name="title" />
				<span v-else>{{ props.title }}</span>
			</div>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	const slots = useSlots()

	interface Props {
		color?: string // 标题颜色
		icon?: string // 图标
		title?: string // 标题
	}

	interface State {
		position: string // 节点对齐方式
	}

	const props = withDefaults(defineProps<Props>(), {
		color: 'var(--info-dark-color-50)',
		icon: 'unselected',
		title: undefined
	})

	const state = reactive<State>({
		position: ''
	})

	mitt.on('timeline-position', (position: string) => {
		state.position = position
	})
</script>
