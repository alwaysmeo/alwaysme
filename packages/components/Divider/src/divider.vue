<template>
	<div :class="classNames">
		<div v-if="$slots.default">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import { prefix } from '@/config'

	interface Props {
		dashed?: boolean // 是否为虚线
		orientation?: 'horizontal' | 'vertical' // 线段方向
		textalign?: 'left' | 'right' | 'center' // 文本对齐方向
	}

	defineOptions({ name: `${prefix}Divider` })

	const props = withDefaults(defineProps<Props>(), {
		orientation: 'horizontal',
		textalign: 'left'
	})

	const classNames = computed(() => {
		return [
			`${prefix}-divider`,
			`${prefix}-divider-${props.orientation}`,
			`${prefix}-divider-align-${props.textalign}`,
			{ [`${prefix}-divider-dashed`]: props.dashed }
		]
	})
</script>
