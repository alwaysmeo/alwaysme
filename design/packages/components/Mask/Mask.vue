<!-- 遮罩组件 -->
<template>
	<teleport :to="props.mount">
		<transition name="fade-zoom">
			<div v-if="visible" :class="`${namespace}-mask`" :style="styles" @click="close">
				<slot />
			</div>
		</transition>
	</teleport>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { toRef, onMounted, computed } from 'vue'
	import { useEventListener } from '@vueuse/core'
	import { isEmpty, throttle } from '@utils/common'
	import { useTools, useZIndex } from '@hooks'

	const { transformCssUnit } = useTools()
	const { nextZIndex } = useZIndex()

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

	const props = withDefaults(defineProps<Props>(), {
		blur: 12,
		zindex: undefined,
		mount: 'body',
		closeOnPressEscape: true
	})

	const visible = toRef(props, 'visible')

	const styles = computed(() => {
		return {
			[`--${namespace}-mask-blur`]: transformCssUnit(props.blur),
			[`--${namespace}-mask-zindex`]: zindex
		}
	})

	const zindex = isEmpty(props.zindex) ? nextZIndex() : props.zindex

	function close(event: MouseEvent | KeyboardEvent) {
		emits('update:visible', false)
		emits('onClose', event)
	}

	const keydownHandler = throttle((event: KeyboardEvent) => {
		if (!visible) return
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
