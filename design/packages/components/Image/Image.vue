<!-- 图片组件 -->
<template>
	<div :class="classes" :style="styles" :data-status="state.failed">
		<img v-show="!state.failed" :class="`${namespace}-image-img`" :src="props.src" :alt="props.alt" @load="load" @error="error" />
		<div v-if="state.failed" :class="`${namespace}-image-img-failed`">
			<component
				:is="`${namespace}-icon`"
				name="image-failed"
				:size="`calc(min(${styles[`--${namespace}-image-width`]}, ${styles[`--${namespace}-image-height`]}) / 4)`"
				color="#878b90"
			/>
		</div>
		<div v-else-if="props.preview" :class="`${namespace}-image-mask`" @click.stop="handleMask">
			<slot v-if="slots.mask" name="mask" />
			<div v-else :class="`${namespace}-image-mask-text`">
				<component :is="`${namespace}-icon`" name="eye" :color="`var(--${namespace}-white-color)`" />
				<span :style="`display: ${parseInt(props.width.toString()) >= 60 ? 'inline-block' : 'none'}`">预览</span>
			</div>
		</div>
		<component
			:is="`${namespace}-image-preview`"
			v-model:visible="state.visible"
			:list="props.list"
			:infinite="props.infinite"
			:zindex="props.zindex ?? currentZIndex"
			:index="props.index ?? props.list.findIndex((item) => item === props.src)"
			:mount="props.mount"
			:close-on-press-escape="props.closeOnPressEscape"
			@switch="handleSwitch"
			@on-visible-change="handleVisibleChange"
		/>
	</div>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { reactive, computed, useSlots } from 'vue'
	import { useTools, useZIndex } from '@hooks'

	const { transformCssUnit } = useTools()
	const { currentZIndex } = useZIndex()

	const slots = useSlots()
	const emits = defineEmits<{
		(key: 'load', event: Event): void // 加载成功回调
		(key: 'error', event: Event): void // 加载失败回调
		(key: 'switch', index: number): void // 切换预览回调
		(key: 'onVisibleChange', { visible, index }: { visible: boolean; index: number }): void // 切换预览可见状态触发的事件
	}>()

	interface Props {
		src?: string // 地址
		alt?: string // 描述
		fallback?: string // 加载失败容错地址
		width?: string | number // 宽度
		height?: string | number // 高度
		fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' // 填充模式，同原生 object-fit 属性
		preview?: boolean // 是否允许预览
		list?: Array<string> // 预览列表
		infinite?: boolean // 是否循环展示
		zindex?: number | string // 设置预览层级
		index?: number // 初始预览索引
		mount?: string // 挂载节点
		closeOnPressEscape?: boolean // 是否支持按下 ESC 关闭预览
	}

	interface State {
		failed: boolean // 是否加载失败
		visible: boolean // 是否开启预览
	}

	const props = withDefaults(defineProps<Props>(), {
		src: '',
		alt: '',
		preview: true,
		fallback: 'default',
		width: 'auto',
		height: 'auto',
		fit: 'cover',
		list: () => [],
		infinite: true,
		zindex: undefined,
		index: undefined,
		mount: 'body',
		closeOnPressEscape: true
	})

	const state = reactive<State>({
		failed: true,
		visible: false
	})

	const classes = computed(() => {
		return [
			`${namespace}-box-shadow`,
			`${namespace}-image`,
			{
				[`${namespace}-image-disabled`]: state.failed
			}
		]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-image-width`]: transformCssUnit(props.width),
			[`--${namespace}-image-height`]: transformCssUnit(props.height),
			[`--${namespace}-image-fit`]: props.fit
		}
	})

	function load(event: Event) {
		state.failed = false
		emits('load', event)
	}

	function error(event: Event) {
		state.failed = true
		emits('error', event)
	}

	function handleMask() {
		if (!props.preview) return
		state.visible = true
	}

	function handleSwitch(index: number) {
		emits('switch', index)
	}

	function handleVisibleChange({ visible, index }: { visible: boolean; index: number }) {
		emits('onVisibleChange', { visible, index })
	}
</script>
