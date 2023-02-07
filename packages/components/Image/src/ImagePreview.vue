<!-- 图片预览组件 -->
<template>
	<div :class="`${prefix}-image-preview`">
		<slot />
		<div :class="`${prefix}-image-preview-mask`">
			<div :class="`${prefix}-image-preview-image`">
				<img :class="`${prefix}-image-preview-image-img`" :src="state.list[state.index]" alt="" />
			</div>
			<div :class="`${prefix}-image-preview-mask-toolbar`">
				<i class="iconfont icon-zoom-in" />
				<i class="iconfont icon-zoom-out" />
				<i class="iconfont icon-rotate-left" />
				<i class="iconfont icon-rotate-right" />
				<i class="iconfont icon-full-screen" />
			</div>
			<div
				:class="`${prefix}-image-preview-switch-left`"
				:data-status="!props.infinite && state.index === 0"
				@click="handleSwitch(state.index - 1)"
			>
				<i class="iconfont icon-arrow-left" />
			</div>
			<div
				:class="`${prefix}-image-preview-switch-right`"
				:data-status="!props.infinite && state.index === state.list.length - 1"
				@click="handleSwitch(state.index + 1)"
			>
				<i class="iconfont icon-arrow-right" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const slots = useSlots()
	const emits = defineEmits<{
		(key: 'onChange', index: number): void // 切换图片触发的事件
		(key: 'onVisibleChange', visible: boolean): void // 切换可见状态触发的事件
	}>()

	interface Props {
		infinite?: boolean // 是否循环展示
		maskClosable?: boolean // 点击遮罩是否关闭
		list?: string[] // 预览图片列表
	}

	interface State {
		visible: boolean
		index: number
		list: string[]
	}

	const props = withDefaults(defineProps<Props>(), {
		infinite: false,
		maskClosable: true,
		list: () => []
	})

	const state = reactive<State>({
		visible: false,
		index: 0,
		list: []
	})

	if (props.list.length) state.list = computed(() => props.list).value
	else if (slots.default) state.list = slots.default().map((item) => item.props?.src)

	function handleSwitch(index: number) {
		if (props.infinite) {
			if (index < 0) state.index = state.list.length - 1
			else if (index >= state.list.length) state.index = 0
			else state.index = index
		} else if (index >= 0 && index < state.list.length) state.index = index
	}
</script>
