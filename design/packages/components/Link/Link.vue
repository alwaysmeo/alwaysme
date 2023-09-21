<!-- 链接组件 -->
<template>
	<a :class="classes" :href="props.href || 'javascript:;'" :target="props.target" @click="handleClick">
		<slot />
	</a>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { computed } from 'vue'

	const emits = defineEmits<{ (key: 'onClick', event: MouseEvent): void }>()

	interface Props {
		underline?: boolean // 是否需要下划线
		disabled?: boolean // 是否禁用状态
		href?: string // 原生 herf 属性
		target?: '_self' | '_blank' | '_parent' | '_top' // 原生 target 属性
	}

	const props = withDefaults(defineProps<Props>(), {
		underline: false,
		disabled: false,
		href: 'javascript:;',
		target: '_self'
	})

	const classes = computed(() => {
		return [
			`shadow`,
			`${namespace}-link`,
			{
				[`${namespace}-link-underline`]: props.underline,
				[`${namespace}-link-disabled`]: props.disabled
			}
		]
	})

	const handleClick = (event: MouseEvent) => {
		if (props.disabled) return event.preventDefault()
		emits('onClick', event)
	}
</script>
