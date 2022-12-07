<template>
	<a
		:class="['me-link', { [`me-link-underline`]: props.underline, [`me-link-disabled`]: props.disabled }]"
		:href="props.href || 'javascript:;'"
		:target="props.target"
		@click="handleClick"
	>
		<slot />
	</a>
</template>

<script setup lang="ts">
	import { prefix } from '@/config'

	interface Props {
		color?: string // 链接色值
		underline?: boolean // 是否需要下划线
		disabled?: boolean // 是否禁用状态
		href?: string // 原生 herf 属性
		target?: '_self' | '_blank' | '_parent' | '_top' // 原生 target 属性
	}

	defineOptions({ name: `${prefix}Link` })

	const props = withDefaults(defineProps<Props>(), {
		color: '',
		href: 'javascrit:;',
		target: '_self'
	})

	const emits = defineEmits<{ (key: 'click', val: MouseEvent): void }>()

	const handleClick = (event: MouseEvent) => {
		if (props.disabled) return event.preventDefault()
		emits('click', event)
	}
</script>
