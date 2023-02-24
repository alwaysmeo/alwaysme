// 文字提示组件
import { Fragment, PropType } from 'vue'
import { useEventListener } from '@vueuse/core'

export default defineComponent({
	props: {
		// 是否可见
		visible: {
			type: Boolean,
			default: false
		},
		// 显示的内容，可被 slot#content 覆盖
		content: {
			type: String,
			default: ''
		},
		// 触发方式
		trigger: {
			type: String as PropType<'hover' | 'click' | 'focus'>,
			default: 'hover'
		},
		// 显示的方向
		position: {
			type: String as PropType<
				| 'top'
				| 'top-start'
				| 'top-end'
				| 'bottom'
				| 'bottom-start'
				| 'bottom-end'
				| 'left'
				| 'left-start'
				| 'left-end'
				| 'right'
				| 'right-start'
				| 'right-end'
			>,
			default: 'horizontal'
		},
		// 出现位置偏移量
		offset: {
			type: Array,
			default: () => [0, 0]
		},
		// 挂载节点
		mount: {
			type: String,
			default: 'body'
		}
	},
	setup(props, { slots }) {
		const classes = computed(() => {
			return [`${namespace}-tooltip`]
		})

		const styles = computed(() => {
			return {}
		})

		const element = ref<HTMLElement>()

		onMounted(() => {
			useEventListener(element.value, 'mouseenter', (event: MouseEvent) => {
				console.log(event)
			})
			useEventListener(element.value, 'mouseleave', (event: MouseEvent) => {
				console.log(event)
			})
		})

		console.log(slots.default?.())

		return () => {
			return <component is={`${namespace}-trigger`}>{slots.default?.()}</component>
		}
	}
})

{/* <teleport to={props.mount}>
<transition name='fade-zoom'>
	<div class={classes.value}></div>
</transition>
</teleport> */}