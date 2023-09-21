<!-- 滑块组件 -->
<template>
	<div :class="classes" :style="styles"></div>
</template>

<script setup lang="ts">
	import { namespace } from '@config'
	import { reactive, computed } from 'vue'
	import { useTools } from '@hooks'

	const { transformCssUnit } = useTools()

	const emits = defineEmits<{
		(key: 'onChange', value: boolean): void
		(key: 'update:value', value: boolean): void
	}>()

	interface Props {
		value?: number // 滑块绑定值
		min?: number // 最小值
		max?: number // 最大值
		disabled?: boolean // 是否禁用
		step?: number // 步长
		range?: boolean // 是否为范围选择
		rangeValue?: [number, number] // 当 range 为true时 范围选择绑定的值 [min, max]
		size?: number | string // 水平模式下为宽度/垂直模式下为高度
		vertical?: boolean // 是否垂直模式 默认false为水平模式
		showTooltip?: boolean // 是否显示提示信息
		formatTooltip?: (value: number) => string // 格式化提示信息
		marks?: { [key: number]: string } // 标记点 key 的类型必须为 number 且取值在区间 [min, max] 内
	}

	interface State {
		value: number // 滑块当前值
	}

	const props = withDefaults(defineProps<Props>(), {
		value: 0,
		min: 0,
		max: 100,
		disabled: false,
		step: 1,
		range: false,
		rangeValue: () => [0, 100],
		size: 300,
		vertical: false,
		showTooltip: false,
		formatTooltip: (value: number) => `${value}`,
		marks: () => ({})
	})

	const state = reactive<State>({
		value: computed(() => props.value).value
	})

	const classes = computed(() => {
		return [
			`${namespace}-box-shadow`,
			`${namespace}-slider`,
			{
				[`${namespace}-disabled-mask`]: props.disabled,
				[`${namespace}-slider-disabled`]: props.disabled
			}
		]
	})

	const styles = computed(() => {
		return {
			[`--${namespace}-slider-${props.vertical ? 'height' : 'width'}`]: transformCssUnit(props.size)
		}
	})

	function onChange(payload: Event) {
		if (payload.target instanceof HTMLInputElement) {
			emits('onChange', payload.target.checked)
			emits('update:value', payload.target.checked)
		}
	}
</script>
