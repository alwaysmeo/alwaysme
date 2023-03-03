<!-- 菜单组件 -->
<template>
	<ul ref="menuRef" :class="classes" :style="styles">
		<slot />
	</ul>
</template>

<script setup lang="ts">
	import { useEventListener } from '@vueuse/core'
	import { isEmpty, isBoolean } from 'lodash-es'
	import { useTools, useZIndex } from '@hooks'

	const { nextZIndex } = useZIndex()
	const { transformCssUnit } = useTools()

	const emits = defineEmits<{
		(key: 'onCollapseChange', collapse: boolean): void
		(key: 'update:collapse', collapse: boolean): void
	}>()

	interface Props {
		collapse?: boolean // 是否折叠 受控模式
		zindex?: number | string // 菜单层级
		mode?: 'horizontal' | 'vertical' // 菜单展示模式
		width?: number | string // 菜单展开时宽度
		height?: number | string // 菜单高度
		color?: string // 背景颜色
		blur?: number | string // 背景模糊度
		mouseEnterDelay?: number // 鼠标移入后延时多少才显示 Tooltip，单位：秒
		mouseLeaveDelay?: number // 鼠标移出后延时多少才隐藏 Tooltip，单位：秒
	}

	interface State {
		collapse: boolean // 是否折叠
	}

	const props = withDefaults(defineProps<Props>(), {
		collapse: undefined,
		zindex: undefined,
		mode: 'vertical',
		width: 240,
		height: 'auto',
		color: undefined,
		blur: 10,
		mouseEnterDelay: 100,
		mouseLeaveDelay: 500
	})

	const state = reactive<State>({
		collapse: false
	})

	const classes = computed(() => {
		return [`${namespace}-menu`, `${namespace}-menu-mode-${props.mode}`]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-menu-zindex`]: zindex,
			[`--${namespace}-menu-width`]: state.collapse ? transformCssUnit(props.width) : '60px',
			[`--${namespace}-menu-height`]: transformCssUnit(props.height),
			[`--${namespace}-menu-color`]: props.color,
			[`--${namespace}-menu-blur`]: transformCssUnit(props.blur)
		}
	})

	const zindex = isEmpty(props.zindex) ? nextZIndex() : props.zindex

	const menuRef = ref<HTMLElement>()

	watch(
		() => props.collapse,
		(collapse) => {
			state.collapse = collapse
		}
	)

	watchEffect(() => {
		emits('onCollapseChange', state.collapse)
		emits('update:collapse', state.collapse)
	})

	onMounted(() => {
		if (!isBoolean(props.collapse)) {
			useEventListener(menuRef.value as HTMLElement, 'mouseenter', () => {
				setTimeout(() => {
					state.collapse = true
				}, props.mouseEnterDelay)
			})
			useEventListener(menuRef.value as HTMLElement, 'mouseleave', () => {
				setTimeout(() => {
					state.collapse = false
				}, props.mouseLeaveDelay)
			})
		}
	})
</script>
