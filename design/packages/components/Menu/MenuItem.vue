<!-- 菜单子组件 -->
<template>
	<li :class="classes" :style="styles" :data-selected="eq(props.value, MenuRoot.value.value)" @click="MenuRoot.handleSelect(props.value)">
		<div :class="`${namespace}-menu-item-icon`">
			<slot v-if="slots.icon" name="icon" />
			<component :is="`${namespace}-icon`" v-else :name="props.icon" size="18px" />
		</div>
		<transition name="menu-fade-zoom">
			<span v-show="MenuRoot.collapse.value || eq(MenuRoot.mode.value, 'horizontal')" :class="`${namespace}-menu-item-text`">
				<slot />
			</span>
		</transition>
	</li>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { computed, inject, useSlots } from 'vue'
	import { eq } from 'lodash-es'
	import { useTheme } from '@hooks'
	import { throwError } from '@utils'
	import { MenuProvider } from './types'

	const slots = useSlots()
	const { theme } = useTheme()

	interface Props {
		value: string // 菜单项的唯一标志
		icon?: string // 菜单项图标，可被 slot#icon 覆盖
	}

	const props = withDefaults(defineProps<Props>(), {
		icon: 'selected'
	})

	const MenuRoot = inject<MenuProvider>('menu')
	if (!MenuRoot) throw throwError(`MenuItem`, 'Can not inject root menu')

	const classes = computed(() => {
		return [
			`${namespace}-menu-item`,
			`${namespace}-menu-item-mode-${MenuRoot.mode.value}`,
			{
				[`${namespace}-menu-item-collapse`]: MenuRoot.collapse.value
			}
		]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-menu-item-hover-color`]: { light: '#ffffff33', dark: '#00000033' }[theme.value]
		}
	})
</script>
