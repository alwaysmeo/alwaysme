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
	import { useEventListener } from '@vueuse/core'
	import { isEmpty, throttle } from 'lodash-es'
	import { useTools, useZIndex } from '@hooks'

	const { transformNum } = useTools()
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
			[`--${namespace}-mask-blur`]: isNaN(props.blur as number) ? props.blur : `${props.blur}px`,
			[`--${namespace}-mask-zindex`]: computedZIndex.value
		}
	})

	const computedZIndex = computed(() => {
		return isEmpty(props.zindex) ? nextZIndex() : transformNum(props.zindex)
	})

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
