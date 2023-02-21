<!-- 链接组件 -->
<template>
	<svg :class="`${namespace}-icon ${namespace}-icon-${props.name}`" :style="styles" aria-hidden="true">
		<use :xlink:href="`#icon-${props.name}`"></use>
	</svg>
</template>

<script setup lang="ts">
	import { computed, withDefaults } from 'vue'
	import { namespace } from '../../utils/config'

	interface Props {
		name?: string // 图标颜色
		color?: string // 图标颜色
		size?: string | number // 图标大小
	}

	const props = withDefaults(defineProps<Props>(), {
		name: undefined,
		color: `var(--${namespace}-font-color)`,
		size: '16px'
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-icon-color`]: props.color,
			[`--${namespace}-icon-size`]: isNaN(<number>props.size) ? props.size : `${props.size}px`
		}
	})
</script>
