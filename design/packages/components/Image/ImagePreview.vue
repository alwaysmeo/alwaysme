<!-- 图片预览组件 -->
<template>
	<div :class="`${namespace}-image-preview`">
		<slot />
		<component
			:is="`${namespace}-mask`"
			v-model:visible="state.visible"
			:zindex="zindex"
			:mount="props.mount"
			:close-on-press-escape="props.closeOnPressEscape"
			@on-close="close"
		>
			<div :class="`${namespace}-image-preview-image`">
				<img
					:class="`${namespace}-image-preview-image-img`"
					:style="styles"
					:src="state.list?.[state.index]"
					alt=""
					@click.stop
					@mousedown="handleMouseDown"
				/>
			</div>
			<div :class="`${namespace}-image-preview-close`" @click.stop="close">
				<component :is="`${namespace}-icon`" name="close" size="18" />
			</div>
			<div :class="`${namespace}-image-preview-toolbar`" @click.stop>
				<component :is="`${namespace}-icon`" v-for="item in state.iconList" :key="item" :name="item" size="20" @click.stop="handleToolbar(item)" />
			</div>
			<template v-if="state.list.length > 1">
				<div
					:class="`${namespace}-image-preview-switch-left`"
					:data-status="!props.infinite && state.index === 0"
					@click.stop="handleSwitch(state.index - 1)"
				>
					<component :is="`${namespace}-icon`" name="arrow-left" size="18" />
				</div>
				<div
					:class="`${namespace}-image-preview-switch-right`"
					:data-status="!props.infinite && state.index === state.list.length - 1"
					@click.stop="handleSwitch(state.index + 1)"
				>
					<component :is="`${namespace}-icon`" name="arrow-right" size="18" />
				</div>
			</template>
		</component>
	</div>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { computed, nextTick, onMounted, reactive, watchEffect } from 'vue'
	import { useEventListener } from '@vueuse/core'
	import { useZIndex } from '@hooks'
	import { isEmpty } from 'lodash-es'

	const { nextZIndex } = useZIndex()

	const emits = defineEmits<{
		(key: 'switch', index: number): void // 切换图片触发的事件
		(key: 'onVisibleChange', { visible, index }: { visible: boolean; index: number }): void // 切换可见状态触发的事件
		(key: 'update:visible', visible: boolean): void
	}>()

	interface Props {
		visible: boolean // 是否可见
		list?: Array<string> // 预览列表
		infinite?: boolean // 是否循环展示
		zindex?: number | string // 设置预览层级
		index?: number // 初始预览索引
		mount?: string // 挂载节点
		closeOnPressEscape?: boolean // 是否支持按下 ESC 关闭预览
	}

	interface State {
		visible: boolean
		index: number
		list: Array<string>
		iconList: Array<string>
		transform: { scale: number; rotate: number; offsetX: number; offsetY: number }
	}

	const props = withDefaults(defineProps<Props>(), {
		list: () => [],
		infinite: true,
		zindex: undefined,
		index: 0,
		mount: 'body',
		closeOnPressEscape: true
	})

	const state = reactive<State>({
		visible: false,
		index: computed(() => props.index).value,
		list: computed(() => props.list).value,
		iconList: ['rotate-left', 'rotate-right', 'zoom-in', 'zoom-out'],
		transform: { scale: 1, rotate: 0, offsetX: 0, offsetY: 0 }
	})

	watchEffect(() => {
		resetTransform()
		state.visible = computed(() => props.visible).value
		emits('onVisibleChange', { visible: state.visible, index: state.index })
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-image-preview-scale`]: state.transform.scale,
			[`--${namespace}-image-preview-rotate`]: `${state.transform.rotate}deg`,
			[`--${namespace}-image-preview-offsetX`]: `${state.transform.offsetX}px`,
			[`--${namespace}-image-preview-offsetY`]: `${state.transform.offsetY}px`
		}
	})

	const zindex = isEmpty(props.zindex) ? nextZIndex() : props.zindex

	function handleSwitch(index: number) {
		resetTransform()
		const length = state.list.length
		if (props.infinite) state.index = index < 0 ? length - 1 : index >= length ? 0 : index
		else if (index >= 0 && index < length) state.index = index
		nextTick(() => emits('switch', state.index))
	}

	function resetTransform() {
		state.transform.scale = 1
		state.transform.rotate = 0
	}

	function close() {
		state.visible = false
		emits('update:visible', false)
	}

	function handleToolbar(icon: string) {
		const fun: { [key: string]: () => void } = {
			'zoom-in': () => {
				state.transform.scale += 0.2
			},
			'zoom-out': () => {
				state.transform.scale > 0.4 && (state.transform.scale -= 0.2)
			},
			'rotate-left': () => {
				state.transform.rotate -= 90
			},
			'rotate-right': () => {
				state.transform.rotate += 90
			}
		}
		fun[icon]()
	}

	function handleMouseDown(event: MouseEvent) {
		const removeMousemove = useEventListener(document, 'mousemove', (_event: WheelEvent) => {
			const { clientX, clientY } = event
			const { clientX: _clientX, clientY: _clientY } = _event
			state.transform.offsetX = _clientX - clientX
			state.transform.offsetY = _clientY - clientY
		})

		useEventListener(document, 'mouseup', () => {
			state.transform.offsetX = state.transform.offsetY = 0
			removeMousemove()
		})
		event.preventDefault()
	}

	const mousewheelHandler = (event: WheelEvent) => {
		if (!state.visible) return
		event.deltaY > 0 ? state.transform.scale > 0.4 && (state.transform.scale -= 0.2) : (state.transform.scale += 0.2)
	}

	onMounted(() => {
		useEventListener(document, 'mousewheel', mousewheelHandler)
	})
</script>
