<template>
	<a
		:class="[
			'me-link',
			{
				[`me-link-underline`]: props.underline,
				[`me-link-disabled`]: props.disabled
			}
		]"
		:href="props.href || 'javascript:;'"
		:target="props.target"
		@click="handleClick"
	>
		<slot></slot>
	</a>
</template>

<script setup lang="ts">
	import { LinkProps, Name } from '@components/Link/src/types'

	defineOptions({ name: Name })

	const props = defineProps(LinkProps)
	const emits = defineEmits(['click'])

	const handleClick = (event: MouseEvent) => {
		console.log(props)
		// if (props.disabled) return event.preventDefault()
		emits('click', event)
	}
</script>
