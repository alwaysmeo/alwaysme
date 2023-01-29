<template>
	<div :class="classes">
		<div v-if="slots.default">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	const slots = useSlots()

	interface Props {
		dashed?: boolean // 是否为虚线
		orientation?: 'horizontal' | 'vertical' // 线段方向
		textalign?: 'left' | 'right' | 'center' // 文本对齐方向
	}

	const props = withDefaults(defineProps<Props>(), {
		dashed: false,
		orientation: 'horizontal',
		textalign: 'left'
	})

	const classes = computed(() => {
		return [
			`${prefix}-divider`,
			`${prefix}-divider-${props.orientation}`,
			`${prefix}-divider-align-${props.textalign}`,
			{ [`${prefix}-divider-dashed`]: props.dashed }
		]
	})
</script>
