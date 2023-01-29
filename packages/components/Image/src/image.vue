<template>
	<div :class="`${prefix}-image`" :style="styles">
		<img :class="`${prefix}-image-img`" :src="props.src" :alt="props.alt" @load="imageLoad" @error="imageError" />
		<div v-if="props.preview" :class="`${prefix}-image-mask`">
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

	interface Props {
		src?: string // 图片地址
		alt?: string // 图像描述
		preview?: boolean // 是否开启预览
		fallback?: string // 图片加载失败时的替代图片
		width?: string | number // 图片宽度
		height?: string | number // 图片高度
		fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' // 图片填充模式，同原生 object-fit
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
			`--${prefix}-image-width: ${props.width}`,
			`--${prefix}-image-height: ${props.height}`,
			`--${prefix}-image-fit: ${props.fit}`
		]
	})

	const state = reactive({
		loading: true,
		lose: false
	})

	function imageLoad() {
		state.loading = false
	}

	function imageError() {
		state.lose = true
	}
</script>
