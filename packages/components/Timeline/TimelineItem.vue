<!-- 时间轴组件 -->
<template>
	<div :class="`${namespace}-timeline-item`" :style="`--${namespace}-timeline-item-color: ${props.color}`">
		<div :class="`${namespace}-timeline-item-icon`" :style="`${state.position}: 0`">
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
	import { withDefaults, useSlots, reactive } from 'vue'
	import { namespace } from '../../utils/config'
	import mitt from '../../utils/mitt'

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
		color: `var(--${namespace}-gray-color-20)`,
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
