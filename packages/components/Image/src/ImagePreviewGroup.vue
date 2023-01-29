<!-- 图片预览组件 -->
<template>
	<div :class="`${prefix}-image-preview-group`">
		<slot />
	</div>
</template>

<script setup lang="ts">
	const emits = defineEmits<{
		(key: 'onChange', index: number): void // 切换图片触发的事件
		(key: 'onVisibleChange', visible: boolean): void // 切换可见状态触发的事件
	}>()

	interface Props {
		infinite?: boolean // 是否循环展示
		maskClosable?: boolean // 点击遮罩是否关闭
	}

	const props = withDefaults(defineProps<Props>(), {
		infinite: false,
		maskClosable: true
	})

	const state = reactive({
		visible: false,
		index: 0
	})
</script>
