// 文字提示组件
import { PropType, Teleport, Transition, mergeProps, VNode } from 'vue'
import { useEventListener } from '@vueuse/core'
import { VNodeProps } from 'vue'

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
		// 鼠标移入后延时多少才显示 Tooltip，单位：秒
		mouseEnterDelay: {
			type: Number,
			default: 100
		},
		// 鼠标移出后延时多少才隐藏 Tooltip，单位：秒
		mouseLeaveDelay: {
			type: Number,
			default: 300
		},
		// 挂载节点
		mount: {
			type: String,
			default: 'body'
		},
		// 过渡动画
		transition: {
			type: String,
			default: 'fade'
		}
	},
	setup(props, { slots }) {
		const visible = ref(props.visible)
		const classes = computed(() => {
			return [`${namespace}-tooltip`]
		})

		const styles = computed(() => {
			return {
				[`--${namespace}-tooltip-color`]: undefined
			}
		})

		let vnode: VNode = <></>
		console.log(slots.default())
		if (slots.default) {
			vnode = slots.default()[0] as VNode
			vnode.props = mergeProps(vnode.props, {
				onMouseenter: () => {
					setTimeout(() => {
						visible.value = true
					}, props.mouseEnterDelay)
				},
				onMouseleave: () => {
					setTimeout(() => {
						visible.value = false
					}, props.mouseLeaveDelay)
				}
			})
		}

		console.warn('<Tooptip> can only be used on a single element or component.');


		return () => {
			return (
				<>
					{vnode}
					<Teleport to={props.mount}>
						<Transition name={props.transition}>
							{visible.value && (
								<div class={classes.value} style={styles.value}>
									123123123
								</div>
							)}
						</Transition>
					</Teleport>
				</>
			)
		}
	}
})
