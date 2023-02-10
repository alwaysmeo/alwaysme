<!-- 图片预览组件 -->
<template>
	<div :class="`${prefix}-image-preview`">
		<slot />
		<component :is="`${prefix}-image`" v-for="item in state.list" :key="item" :src="item?.src" />
		<component
			:is="`${prefix}-mask`"
			v-model:visible="state.visible"
			zindex="1100"
			@on-close="$emit('update:visible', false)"
		>
			<div :class="`${prefix}-image-preview-image`">
				<img :class="`${prefix}-image-preview-image-img`" :src="state.list?.[state.index]?.src" alt="" @click.stop />
			</div>
			<div :class="`${prefix}-image-preview-toolbar`" @click.stop>
				<i class="iconfont icon-zoom-in" />
				<i class="iconfont icon-zoom-out" />
				<i class="iconfont icon-rotate-left" />
				<i class="iconfont icon-rotate-right" />
				<i class="iconfont icon-full-screen" />
			</div>
			<template v-if="state.list.length > 1">
				<div
					:class="`${prefix}-image-preview-switch-left`"
					:data-status="!props.infinite && state.index === 0"
					@click.stop="handleSwitch(state.index - 1)"
				>
					<i class="iconfont icon-arrow-left" />
				</div>
				<div
					:class="`${prefix}-image-preview-switch-right`"
					:data-status="!props.infinite && state.index === state.list.length - 1"
					@click.stop="handleSwitch(state.index + 1)"
				>
					<i class="iconfont icon-arrow-right" />
				</div>
			</template>
		</component>
	</div>
</template>

<script setup lang="ts">
	const slots = useSlots()
	const emits = defineEmits<{
		(key: 'onChange', index: number): void // 切换图片触发的事件
		(key: 'onVisibleChange', visible: boolean): void // 切换可见状态触发的事件
		(key: 'update:visible', visible: boolean): void
	}>()

	interface Props {
		image?: boolean | string // 预览图片
		visible?: boolean // 是否可见
		infinite?: boolean // 是否循环展示
	}

	interface State {
		visible: boolean
		index: number
		list: Array<{ [key: string]: any } | null>
	}

	const props = withDefaults(defineProps<Props>(), {
		image: '',
		visible: false,
		infinite: false,
		list: () => []
	})

	const state = reactive<State>({
		visible: false,
		index: 0,
		list: []
	})

	if (slots.default) {
		state.list = slots.default().map((item) => item.props)
		console.log(slots.default().map((item) => item))
	}

	watchEffect(() => {
		state.visible = computed(() => props.visible).value
		emits('onVisibleChange', state.visible)
	})

	function handleSwitch(index: number) {
		const length = state.list.length
		if (props.infinite) state.index = index < 0 ? length - 1 : index >= length ? 0 : index
		else if (index >= 0 && index < length) state.index = index
		emits('onChange', index)
	}

	function close() {
		state.visible = false
		emits('update:visible', false)
	}
</script>
