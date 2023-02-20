<!-- 遮罩组件 -->
<template>
	<teleport :to="props.mount">
		<transition name="fade-zoom">
			<div v-if="state.visible" :class="`${namespace}-mask`" :style="styles" @click="close">
				<slot />
			</div>
		</transition>
	</teleport>
</template>

<script setup lang="ts">
	import { useEventListener } from '@vueuse/core'
	import { throttle } from 'lodash'

	const emits = defineEmits<{
		(key: 'update:visible', visible: boolean): void
		(key: 'onClose', event: MouseEvent | KeyboardEvent): void
	}>()

	interface Props {
		visible: boolean // 是否可见
		blur?: number | string // 模糊度
		zindex?: number | string // 层级
		mount?: string // 挂载节点
		closeOnPressEscape?: boolean // 是否支持按下 ESC 关闭预览
	}

	interface State {
		visible: boolean
	}

	const props = withDefaults(defineProps<Props>(), {
		blur: 12,
		zindex: 1000,
		mount: 'body',
		closeOnPressEscape: true
	})

	const state = reactive<State>({
		visible: false
	})

	watchEffect(() => {
		state.visible = computed(() => props.visible).value
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-mask-blur`]: isNaN(<number>props.blur) ? props.blur : `${props.blur}px`,
			[`--${namespace}-mask-zindex`]: props.zindex
		}
	})

	function close(event: MouseEvent | KeyboardEvent) {
		emits('update:visible', false)
		emits('onClose', event)
	}

	const keydownHandler = throttle((event: KeyboardEvent) => {
		if (!state.visible) return
		switch (event.code) {
			case 'Escape':
				props.closeOnPressEscape && close(event)
				break
		}
		event.preventDefault()
	}, 500)

	onMounted(() => {
		useEventListener(document, 'keyup', keydownHandler)
	})
</script>
