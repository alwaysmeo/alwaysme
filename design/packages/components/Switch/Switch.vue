<!-- 开关组件 -->
<template>
	<div :class="classes" :style="styles">
		<div v-if="props.type === 'block'" :class="`${namespace}-switch-text`">
			<slot v-if="slots['on-icon'] && state.value" name="on-icon" />
			<slot v-else-if="slots['off-icon']" name="off-icon" />
			<span v-else>{{ props.text[Number(!state.value)] }}</span>
		</div>
		<div :class="`${namespace}-switch-handle`">
			<template v-if="props.type === 'default'">
				<slot v-if="slots['on-icon'] && state.value" name="on-icon" />
				<slot v-else-if="slots['off-icon']" name="off-icon" />
				<span v-else>{{ props.text[Number(!state.value)] }}</span>
			</template>
		</div>
		<input
			v-model="state.value"
			:class="`${namespace}-switch-checkbox`"
			:disabled="props.disabled"
			type="checkbox"
			:name="props.name"
			@change="onChange"
		/>
	</div>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { reactive, computed, useSlots } from 'vue'
	import { useTools } from '@hooks'

	const slots = useSlots()
	const { transformCssUnit } = useTools()

	const emits = defineEmits<{
		(key: 'onChange', value: boolean): void
		(key: 'update:value', value: boolean): void
	}>()

	interface Props {
		value?: boolean // 开关默认状态
		disabled?: boolean // 开关是否禁用
		type?: 'default' | 'block' // 开关类型 default | block
		width?: string | number // 开关宽度
		text?: Array<string> // 开关文本描述 ['ON', 'OFF']
		onColor?: string // 开关状态为 on 时颜色
		offColor?: string // 开关状态为 off 时颜色
		shape?: 'default' | 'round' | 'square' // 开关形状 default | round | square
		name?: string // switch 对应的 name 属性
	}

	interface State {
		value: boolean // 开关状态
	}

	const props = withDefaults(defineProps<Props>(), {
		value: false,
		disabled: false,
		type: 'default',
		width: '60px',
		text: () => ['ON', 'OFF'],
		onColor: `var(--${namespace}-primary-color)`,
		offColor: `var(--${namespace}-gray-color-30)`,
		shape: 'default',
		name: undefined
	})

	const state = reactive<State>({
		value: computed(() => props.value).value
	})

	const classes = computed(() => {
		return [
			`${namespace}-box-shadow`,
			`${namespace}-switch`,
			`${namespace}-switch-type-${props.type}`,
			`${namespace}-switch-shape-${props.shape}`,
			{
				[`${namespace}-disabled-mask`]: props.disabled,
				[`${namespace}-switch-disabled`]: props.disabled,
				[`${namespace}-switch-checked`]: state.value
			}
		]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-switch-width`]: transformCssUnit(props.width),
			[`--${namespace}-switch-on-color`]: props.onColor,
			[`--${namespace}-switch-off-color`]: props.offColor
		}
	})

	function onChange(event: Event) {
		if (event.target instanceof HTMLInputElement) {
			emits('onChange', event.target.checked)
			emits('update:value', event.target.checked)
		}
	}
</script>
