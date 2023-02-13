<!-- 链接组件 -->
<template>
	<teleport :to="props.mount">
		<div v-if="state.visible" :class="`${prefix}-mask`" :style="styles" @click="close">
			<slot />
		</div>
	</teleport>
</template>

<script setup lang="ts">
	import { throttle } from 'lodash'

	const emits = defineEmits<{
		(key: 'update:visible', visible: boolean): void
		(key: 'onClose', event: MouseEvent | KeyboardEvent): void
	}>()

	interface Props {
		visible?: boolean // 是否可见
		blur?: number | string // 模糊度
		zindex?: number | string // 层级
		mount?: string // 挂载节点
		closeOnPressEscape?: boolean // 是否支持按下 ESC 关闭预览
	}

	interface State {
		visible: boolean
	}

	const props = withDefaults(defineProps<Props>(), {
		visible: false,
		blur: 12,
		zindex: 1000,
		mount: 'body',
		closeOnPressEscape: true
	})

	const state = reactive<State>({
		visible: false
	})

	const styles = computed(() => {
		return [
			`--${prefix}-mask-blur: ${isNaN(<number>props.blur) ? props.blur : `${props.blur}px`}`,
			`--${prefix}-mask-zindex: ${props.zindex}`
		]
	})

	watchEffect(() => {
		state.visible = computed(() => props.visible).value
	})

	function close(event: MouseEvent | KeyboardEvent) {
		emits('update:visible', false)
		emits('onClose', event)
	}

	function registerEventListener() {
		const keydownHandler = throttle((event: KeyboardEvent) => {
			switch (event.code) {
				case 'Escape':
					props.closeOnPressEscape && close(event)
					break
			}
		})
		useEventListener(document, 'keydown', keydownHandler)
	}

	onMounted(() => {
		registerEventListener()
	})
</script>
