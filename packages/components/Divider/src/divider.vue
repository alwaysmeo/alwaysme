<template>
	<div
		:class="[
			'me-divider',
			`me-divider-${props.orientation}`,
			`me-divider-align-${props.textalign}`,
			{ ['me-divider-dashed']: props.dashed }
		]"
	>
		<div>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
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
</script>
