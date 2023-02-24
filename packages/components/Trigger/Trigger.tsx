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
		console.log(slots.default?.())

		return () => {
			return (
				<teleport to={props.mount}>
					<transition name="fade-zoom">
						<div></div>
					</transition>
				</teleport>
			)
		}
	}
})
