<!-- 图片预览组件 -->
<template>
	<div :class="`${prefix}-image-preview`">
		<slot />
		<component
			:is="`${prefix}-mask`"
			v-model:visible="state.visible"
			:zindex="props.zindex"
			:mount="props.mount"
			:close-on-press-escape="props.closeOnPressEscape"
			@on-close="close"
		>
			<div :class="`${prefix}-image-preview-image`">
				<img :class="`${prefix}-image-preview-image-img`" :src="state.list?.[state.index]" alt="" @click.stop />
			</div>
			<div :class="`${prefix}-image-preview-close`" @click.stop="close">
				<i class="iconfont icon-close" />
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
	const emits = defineEmits<{
		(key: 'switch', index: number): void // 切换图片触发的事件
		(key: 'onVisibleChange', { visible, index }: { visible: boolean; index: number }): void // 切换可见状态触发的事件
		(key: 'update:visible', visible: boolean): void
	}>()

	interface Props {
		visible?: boolean // 是否可见
		list?: Array<string> // 预览列表
		infinite?: boolean // 是否循环展示
		zindex?: number // 设置预览层级
		index?: number // 初始预览索引
		mount?: string // 挂载节点
		closeOnPressEscape?: boolean // 是否支持按下 ESC 关闭预览
	}

	interface State {
		visible: boolean
		index: number
		list: Array<string>
	}

	const props = withDefaults(defineProps<Props>(), {
		visible: false,
		list: () => [],
		infinite: true,
		zindex: 1000,
		index: 0,
		mount: 'body',
		closeOnPressEscape: true
	})

	const state = reactive<State>({
		visible: false,
		index: computed(() => props.index).value,
		list: computed(() => props.list).value
	})

	watch(
		() => props.visible,
		(visible) => {
			state.visible = visible
			emits('onVisibleChange', { visible: state.visible, index: state.index })
		}
	)

	function handleSwitch(index: number) {
		const length = state.list.length
		if (props.infinite) state.index = index < 0 ? length - 1 : index >= length ? 0 : index
		else if (index >= 0 && index < length) state.index = index
		nextTick(() => emits('switch', state.index))
	}

	function close() {
		state.visible = false
		emits('update:visible', false)
	}
</script>
