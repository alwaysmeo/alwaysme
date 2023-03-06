<!-- 链接组件 -->
<template>
	<svg :class="`${namespace}-icon ${namespace}-icon-${props.name}`" :style="styles" aria-hidden="true">
		<use :xlink:href="`#icon-${props.name}`"></use>
	</svg>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { computed } from 'vue'
	import { useTools } from '@hooks'

	const { transformCssUnit } = useTools()

	interface Props {
		name?: string // 图标颜色
		color?: string // 图标颜色
		size?: string | number // 图标大小
	}

	const props = withDefaults(defineProps<Props>(), {
		name: undefined,
		color: undefined,
		size: '1em'
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-icon-color`]: props.color,
			[`--${namespace}-icon-size`]: transformCssUnit(props.size)
		}
	})
</script>
