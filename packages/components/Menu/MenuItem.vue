<!-- 菜单组件 -->
<template>
	<li :class="classes" :style="styles">
		<div :class="`${namespace}-menu-item-icon`">
			<slot name="icon" />
		</div>
		<slot />
	</li>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { reactive, computed } from 'vue'
	import { eq } from 'lodash-es'
	import { mitt } from '@utils'
	import { useTools } from '@hooks'

	const { transformCssUnit } = useTools()

	const emits = defineEmits<{
		// (key: 'select', { item, key }): void
	}>()

	interface Props {
		width?: number | string // 菜单展开时宽度，仅 horizontal 模式下有效
		height?: number | string // 菜单高度，仅 vertical 模式下有效
	}

	interface State {
		mode?: 'horizontal' | 'vertical' // 菜单展示模式
	}

	const props = withDefaults(defineProps<Props>(), {
		width: 'auto',
		height: 40
	})

	const state = reactive<State>({
		mode: undefined
	})

	const classes = computed(() => {
		return [`${namespace}-menu-item`, `${namespace}-menu-item-mode-${state.mode}`]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-menu-item-width`]: (eq(state.mode, 'horizontal') && transformCssUnit(props.width)) || '100%',
			[`--${namespace}-menu-item-height`]: (eq(state.mode, 'vertical') && transformCssUnit(props.height)) || '100%'
		}
	})

	mitt.on('menu-mode', (mode: 'horizontal' | 'vertical') => {
		console.log('menu-mode', mode)
		state.mode = mode
	})
</script>
