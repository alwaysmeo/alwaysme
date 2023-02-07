<!-- 图片组件 -->
<template>
	<div :class="`${prefix}-image`" :style="styles">
		<img
			v-show="!state.failed"
			:class="`${prefix}-image-img`"
			:src="props.src"
			:alt="props.alt"
			@load="load"
			@error="error"
		/>
		<div v-if="state.failed" :class="`${prefix}-image-img-failed`">
			<i class="iconfont icon-image-failed" />
		</div>
		<div v-else-if="props.preview" :class="`${prefix}-image-mask`">
			<slot v-if="slots.mask" name="mask" />
			<div v-else :class="`${prefix}-image-mask-text`">
				<i class="iconfont icon-eye" />
				<span :style="`display: ${parseInt(props.width.toString()) >= 60 ? 'inline-block' : 'none'}`">预览</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const slots = useSlots()
	const emits = defineEmits<{
		(key: 'load', val: Event): void // 加载成功回调
		(key: 'error', val: Event): void // 加载失败回调
		(key: 'onPreview', val: Event): void // 点击预览回调
	}>()

	interface Props {
		src?: string // 地址
		alt?: string // 描述
		preview?: boolean // 是否开启预览
		fallback?: string // 加载失败容错地址
		width?: string | number // 宽度
		height?: string | number // 高度
		fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' // 填充模式，同原生 object-fit 属性
	}

	const props = withDefaults(defineProps<Props>(), {
		src: '',
		alt: '',
		preview: true,
		fallback: 'default',
		width: 'auto',
		height: 'auto',
		fit: 'cover'
	})

	const styles = computed(() => {
		return [
			`--${prefix}-image-width: ${isNaN(<number>props.width) ? props.width : `${props.width}px`}`,
			`--${prefix}-image-height: ${isNaN(<number>props.height) ? props.height : `${props.height}px`}`,
			`--${prefix}-image-fit: ${props.fit}`
		]
	})

	const state = reactive({
		failed: false
	} as {
		failed: boolean
	})

	function load(event: Event) {
		state.failed = false
		emits('load', event)
	}

	function error(event: Event) {
		state.failed = true
		emits('error', event)
	}
</script>
