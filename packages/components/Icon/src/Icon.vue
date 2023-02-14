<!-- 链接组件 -->
<template>
	<i :class="`iconfont ${prefix}-icon icon-${props.name}`" :style="styles" />
</template>

<script setup lang="ts">
	interface Props {
		name?: string // 图标颜色
		color?: string // 图标颜色
		size?: string | number // 图标大小
	}

	const props = withDefaults(defineProps<Props>(), {
		name: '',
		color: 'gray',
		size: '16px'
	})

	const styles = computed(() => {
		return [
			`--${prefix}-icon-color: ${props.color}`,
			`--${prefix}-icon-size: ${isNaN(<number>props.size) ? props.size : `${props.size}`}px`
		]
	})
</script>
