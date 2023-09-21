<!-- 步进器组件 -->
<template>
	<div :class="classes" :style="styles">
		<div :class="`${namespace}-stepper-minus`" :data-disabled="props.disabled || state.value <= props.min" @click="minus">
			<component :is="`${namespace}-icon`" name="minus" size="16" data-type="minus" />
		</div>
		<div :class="`${namespace}-stepper-input`">
			<input type="text" :value="state.value" :disabled="props.disabled" @input="input" @blur="blur" />
		</div>
		<div :class="`${namespace}-stepper-push`" :data-disabled="props.disabled || state.value >= props.max" @click="push">
			<component :is="`${namespace}-icon`" name="push" size="16" data-type="push" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { computed, nextTick, reactive, watchEffect } from 'vue'
	import { useTools } from '@hooks'

	const { transformCssUnit } = useTools()

	const emits = defineEmits<{
		(key: 'change', value: number): void
		(key: 'blur', value: number): void
		(key: 'input', value: number): void
		(key: 'update:value', value: number): void
	}>()

	interface Props {
		defaultValue?: number | string // 默认值
		min?: number | string // 输入框最小值
		max?: number | string // 输入框最大值
		height?: number | string // 高度
		inputWidth?: number | string // 输入框宽度
		disabled?: boolean // 是否禁用
	}

	interface State {
		value: number | string
	}

	const props = withDefaults(defineProps<Props>(), {
		defaultValue: 1,
		min: 1,
		max: 99,
		height: 32,
		inputWidth: 64,
		disabled: false
	})

	const state = reactive<State>({
		value: computed(() => props.defaultValue).value
	})

	const classes = computed(() => {
		return [
			`${namespace}-box-shadow`,
			`${namespace}-stepper`,
			{
				[`${namespace}-disabled-mask`]: props.disabled,
				[`${namespace}-stepper-disabled`]: props.disabled
			}
		]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-stepper-height`]: transformCssUnit(props.height),
			[`--${namespace}-stepper-input-width`]: transformCssUnit(props.inputWidth)
		}
	})

	watchEffect(() => {
		emits('update:value', Number(state.value))
	})

	function minus() {
		if (props.disabled || state.value <= props.min) return
		state.value = (Number(state.value) - 1).toString()
		emits('change', Number(state.value))
		emits('update:value', Number(state.value))
	}

	function push() {
		if (props.disabled || state.value >= props.max) return
		state.value = (Number(state.value) + 1).toString()
		emits('change', Number(state.value))
		emits('update:value', Number(state.value))
	}

	function input(event: Event) {
		if (event.target instanceof HTMLInputElement) {
			event.target.value = event.target.value.replace(/[^0-9]/g, '')
			let value: number | string = event.target.value
			if (Number(value) < Number(props.min)) event.target.value = value = props.min.toString()
			if (Number(value) > Number(props.max)) event.target.value = value = props.max.toString()
			state.value = value
			emits('input', Number(value))
		}
	}

	function blur(event: Event) {
		if (event.target instanceof HTMLInputElement) {
			let value: number | string = event.target.value
			if (Number(value) < Number(props.min)) event.target.value = value = props.min.toString()
			if (Number(value) > Number(props.max)) event.target.value = value = props.max.toString()
			nextTick(() => {
				emits('blur', Number(value))
			})
		}
	}
</script>
