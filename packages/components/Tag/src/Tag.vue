<!-- 链接组件 -->
<template>
	<span :class="`${prefix}-tag`" :style="styles" :data-color="props.color">
		<slot />
		<component :is="`${prefix}-icon`" name="close" size="12" :color="`var(--${prefix}-tag-color)`" />
	</span>
</template>

<script setup lang="ts">
	const emits = defineEmits<{ (key: 'onClick', val: MouseEvent): void }>()

	interface Props {
		color?: string // 标签颜色
		closable?: boolean // 是否可关闭
	}

	interface State {
		colorMapping: Record<string, string>
	}

	const props = withDefaults(defineProps<Props>(), {
		color: 'gray',
		closable: false
	})

	const state = reactive<State>({
		colorMapping: {
			red: '#f53f3f',
			orangered: '#f77234',
			orange: '#ff7d00',
			gold: '#f7ba1e',
			lime: '#9fdb1d',
			green: '#00b42a',
			cyan: '#14c9c9',
			blue: '#3491fa',
			arcoblue: '#165dff',
			purple: '#722ed1',
			pinkpurple: '#d91ad9',
			magenta: '#f5319d',
			gray: '#86909c'
		}
	})

	const styles = computed(() => {
		return {
			[`--${prefix}-tag-color`]: Object.keys(state.colorMapping).includes(props.color)
				? state.colorMapping[props.color]
				: props.color
		}
	})
</script>
