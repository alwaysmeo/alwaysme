<!-- 标签组件 -->
<template>
	<transition name="fade-zoom">
		<span v-if="state.visible" :class="classes" :style="styles">
			<component
				:is="`${namespace}-icon`"
				v-if="props.icon"
				data-type="icon"
				:name="props.icon"
				:size="{ small: 12, medium: 12, large: 14 }[props.size]"
			/>
			<slot />
			<component
				:is="`${namespace}-icon`"
				v-if="props.closable"
				data-type="close"
				:name="props.closeIcon"
				:size="{ small: 12, medium: 12, large: 14 }[props.size]"
				@click="close"
			/>
		</span>
	</transition>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { reactive, computed } from 'vue'

	const emits = defineEmits<{
		(key: 'close', event: MouseEvent): void
		(key: 'update:visible', visible: boolean): void
	}>()

	interface Props {
		color?: string // 标签颜色
		icon?: string // 标签图标
		size?: 'small' | 'medium' | 'large' // 标签大小
		shape?: 'default' | 'square' // 标签形状 default | square
		closable?: boolean // 标签是否可关闭
		closeIcon?: string // 关闭按钮图标
	}

	interface State {
		colorMapping: Record<string, string[]>
		visible: boolean // 是否移除
	}

	const props = withDefaults(defineProps<Props>(), {
		color: 'gray',
		icon: undefined,
		size: 'medium',
		shape: 'default',
		closable: false,
		closeIcon: 'close'
	})

	const state = reactive<State>({
		colorMapping: {
			red: ['#f53f3f', '#ffece8'],
			orangered: ['#f77234', '#fff3e8'],
			orange: ['#ff7d00', '#fff7e8'],
			gold: ['#f7ba1e', '#fffce8'],
			lime: ['#9fdb1d', '#fcffe8'],
			green: ['#00b42a', '#e8ffea'],
			cyan: ['#14c9c9', '#e8fffb'],
			blue: ['#3491fa', '#e8f7ff'],
			arcoblue: ['#165dff', '#e8f3ff'],
			purple: ['#722ed1', '#f5e8ff'],
			pinkpurple: ['#d91ad9', '#ffe8fb'],
			magenta: ['#f5319d', '#ffe8f1'],
			gray: ['#86909c', '#f2f3f5']
		},
		visible: true
	})

	const classes = computed(() => {
		return [`${namespace}-box-shadow`, `${namespace}-tag`, `${namespace}-tag-size-${props.size}`, `${namespace}-tag-shape-${props.shape}`]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-tag-color`]: Object.keys(state.colorMapping).includes(props.color) ? state.colorMapping[props.color][0] : '#fff',
			[`--${namespace}-tag-background-color`]: Object.keys(state.colorMapping).includes(props.color)
				? state.colorMapping[props.color][1]
				: props.color
		}
	})

	function close(event: MouseEvent) {
		state.visible = false
		emits('close', event)
		emits('update:visible', false)
	}
</script>
