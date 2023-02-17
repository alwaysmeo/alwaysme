<!-- 标签组件 -->
<template>
	<div :class="classes" :style="styles">
		<span v-if="props.type === 'block'" :class="`${namespace}-switch-text`">{{ props.text[Number(!state.value)] }}</span>
		<div :class="`${namespace}-switch-handle`">
			<span v-if="props.type === 'default'" :class="`${namespace}-switch-text`">{{ props.text[Number(!state.value)] }}</span>
		</div>
		<input
			v-model="state.value"
			:class="`${namespace}-switch-checkbox`"
			:disabled="props.disabled"
			type="checkbox"
			:name="props.name"
			@change="onChange"
		/>
		<div v-if="props.disabled" :class="`${namespace}-switch-disabled-mask`"></div>
	</div>
</template>

<script setup lang="ts">
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
				[`${namespace}-switch-disabled`]: props.disabled,
				[`${namespace}-switch-checked`]: state.value
			}
		]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-switch-width`]: isNaN(<number>props.width) ? props.width : `${props.width}px`,
			[`--${namespace}-switch-on-color`]: props.onColor,
			[`--${namespace}-switch-off-color`]: props.offColor
		}
	})

	function onChange(payload: Event) {
		if (payload.target instanceof HTMLInputElement) {
			emits('onChange', payload.target.checked)
			emits('update:value', payload.target.checked)
		}
	}
</script>
