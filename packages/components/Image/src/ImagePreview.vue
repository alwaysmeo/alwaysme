<!-- 图片预览组件 -->
<template>
	<div :class="`${prefix}-image-preview`">
		<slot />
		<div :class="`${prefix}-image-preview-mask`">
			<div :class="`${prefix}-image-preview-mask-toolbar`">
				<i class="iconfont icon-zoom-in" />
				<i class="iconfont icon-zoom-out" />
				<i class="iconfont icon-rotate-left" />
				<i class="iconfont icon-rotate-right" />
				<i class="iconfont icon-full-screen" />
			</div>
			<div :class="`${prefix}-image-preview-switch-left`">
				<i class="iconfont icon-arrow-left" />
			</div>
			<div :class="`${prefix}-image-preview-switch-right`">
				<i class="iconfont icon-arrow-right" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		infinite?: boolean // 是否循环展示
		maskClosable?: boolean // 点击遮罩是否关闭
	}

	const props = withDefaults(defineProps<Props>(), {
		infinite: false,
		maskClosable: true
	})

	const emits = defineEmits<{
		(key: 'onChange', index: number): void // 切换图片触发的事件
		(key: 'onVisibleChange', visible: boolean): void // 切换可见状态触发的事件
	}>()

	const state = reactive({
		visible: false,
		index: 0
	})
</script>
