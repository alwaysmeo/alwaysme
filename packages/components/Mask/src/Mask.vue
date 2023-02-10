<!-- 链接组件 -->
<template>
	<teleport :to="state.mount">
		<div v-if="state.visible" :class="`${prefix}-mask`" :style="styles" @click="close">
			<slot />
		</div>
	</teleport>
</template>

<script setup lang="ts">
	const emits = defineEmits<{
		(key: 'update:visible', visible: boolean): void
		(key: 'onClose', event: Event): void
	}>()

	interface Props {
		visible?: boolean // 是否可见
		blur?: number | string // 模糊度
		zindex?: number | string // 层级
		mount?: string // 挂载节点
	}

	interface State {
		visible: boolean
		mount: string
	}

	const props = withDefaults(defineProps<Props>(), {
		visible: false,
		blur: 12,
		zindex: 1000,
		mount: 'body'
	})

	const state = reactive<State>({
		visible: false,
		mount: computed(() => props.mount).value
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

	const close = (event: Event) => {
		emits('update:visible', false)
		emits('onClose', event)
	}
</script>
