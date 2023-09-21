// 文字提示组件
import { namespace } from '@config'
import {
	computed,
	defineComponent,
	reactive,
	ref,
	nextTick,
	onMounted,
	PropType,
	Teleport,
	Transition,
	useSlots,
	VNode,
	VNodeArrayChildren
} from 'vue'
import { useEventListener } from '@vueuse/core'
import { useTheme, useTools, useZIndex } from '@hooks'
import { isEmpty } from 'lodash-es'

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
			default: 'top'
		},
		// 出现位置偏移量
		offset: {
			type: Array as PropType<number[]>,
			default: () => [0, 0]
		},
		// 鼠标移入后延时多少才显示 Tooltip
		mouseEnterDelay: {
			type: Number,
			default: 100
		},
		// 鼠标移出后延时多少才隐藏 Tooltip
		mouseLeaveDelay: {
			type: Number,
			default: 300
		},
		// 过渡动画
		transition: {
			type: String,
			default: 'fade-zoom'
		},
		// 弹出框背景颜色
		color: {
			type: String,
			default: undefined
		},
		// 弹出框背景模糊度
		blur: {
			type: [Number, String],
			default: 6
		},
		// 设置弹出框层级
		zindex: {
			type: [Number, String],
			default: undefined
		}
	},
	setup(props) {
		const slots = useSlots()
		const { nextZIndex } = useZIndex()
		const { transformCssUnit } = useTools()
		const { theme } = useTheme()

		const classes = computed(() => {
			return [`${namespace}-tooltip`]
		})

		const styles = computed(() => {
			return {
				top: `${position.top}px`,
				left: `${position.left}px`,
				[`--${namespace}-tooltip-zindex`]: zindex,
				[`--${namespace}-tooltip-blur`]: transformCssUnit(props.blur),
				[`--${namespace}-tooltip-color`]: props.color ?? { light: '#000000b2', dark: '#535353cc' }[theme.value],
				[`--${namespace}-tooltip-arrow-border-width`]: arrow['border'][arrow.position].width,
				[`--${namespace}-tooltip-arrow-border-color`]: arrow['border'][arrow.position].color,
				[`--${namespace}-tooltip-arrow-top`]: `${arrow.top}px`,
				[`--${namespace}-tooltip-arrow-bottom`]: `${arrow.bottom}px`,
				[`--${namespace}-tooltip-arrow-left`]: `${arrow.left}px`,
				[`--${namespace}-tooltip-arrow-right`]: `${arrow.right}px`
			}
		})

		const zindex = isEmpty(props.zindex) ? nextZIndex() : props.zindex

		const tooltipRef = ref<HTMLElement>()

		const visible = ref<boolean>(computed(() => props.visible).value)

		// 弹窗坐标属性
		const position = reactive<{
			top?: number
			left?: number
		}>({})

		// 弹窗箭头属性
		const arrow = reactive<{
			top?: number
			bottom?: number
			left?: number
			right?: number
			position: 'top' | 'bottom' | 'left' | 'right'
			border: { [key: string]: { width: string; color: string } }
		}>({
			position: 'top',
			border: {
				top: {
					width: '6px 6px 0 6px',
					color: `var(--${namespace}-tooltip-color) transparent transparent transparent`
				},
				bottom: {
					width: '0 6px 6px 6px',
					color: `transparent transparent var(--${namespace}-tooltip-color) transparent`
				},
				left: {
					width: '6px 0 6px 6px',
					color: `transparent transparent transparent var(--${namespace}-tooltip-color)`
				},
				right: {
					width: '6px 6px 6px 0',
					color: `transparent var(--${namespace}-tooltip-color) transparent transparent`
				}
			}
		})

		function initPosition(sourceDom: HTMLElement, tootipDom: HTMLElement) {
			if (props.position.indexOf('top') === 0) {
				position.top = sourceDom.offsetTop - tootipDom.offsetHeight - 8 + props.offset[0]
				arrow.top = tootipDom.offsetHeight
				arrow['position'] = 'top'
				if (props.position === 'top') {
					position.left = sourceDom.offsetLeft - (tootipDom.offsetWidth - sourceDom.offsetWidth) / 2 + props.offset[1]
					arrow.left = tootipDom.offsetWidth - sourceDom.offsetWidth + 3
				} else if (props.position === 'top-start') {
					position.left = sourceDom.offsetLeft + props.offset[1]
					arrow.left = tootipDom.offsetWidth * 0.2
				} else if (props.position === 'top-end') {
					position.left = sourceDom.offsetLeft - (tootipDom.offsetWidth - sourceDom.offsetWidth) + props.offset[1]
					arrow.right = tootipDom.offsetWidth * 0.2
				}
			}

			if (props.position.indexOf('bottom') === 0) {
				position.top = sourceDom.offsetTop + sourceDom.offsetHeight + 8 + props.offset[0]
				arrow.bottom = tootipDom.offsetHeight
				arrow['position'] = 'bottom'
				if (props.position === 'bottom') {
					position.left = sourceDom.offsetLeft - (tootipDom.offsetWidth - sourceDom.offsetWidth) / 2 + props.offset[1]
					arrow.left = tootipDom.offsetWidth / 2 - 6
				} else if (props.position === 'bottom-start') {
					position.left = sourceDom.offsetLeft + props.offset[1]
					arrow.left = tootipDom.offsetWidth * 0.2
				} else if (props.position === 'bottom-end') {
					position.left = sourceDom.offsetLeft - (tootipDom.offsetWidth - sourceDom.offsetWidth) + props.offset[1]
					arrow.right = tootipDom.offsetWidth * 0.2
				}
			}

			if (props.position.indexOf('left') === 0) {
				position.left = sourceDom.offsetLeft - tootipDom.offsetWidth - 8 + props.offset[1]
				arrow.left = tootipDom.offsetWidth
				arrow['position'] = 'left'
				if (props.position === 'left') {
					position.top = sourceDom.offsetTop - (tootipDom.offsetHeight - sourceDom.offsetHeight) / 2 + props.offset[0]
					arrow.top = tootipDom.offsetHeight / 2 - 6
				} else if (props.position === 'left-start') {
					position.top = sourceDom.offsetTop + props.offset[0]
					arrow.top = tootipDom.offsetHeight * 0.2
				} else if (props.position === 'left-end') {
					position.top = sourceDom.offsetTop - (tootipDom.offsetHeight - sourceDom.offsetHeight) + props.offset[0]
					arrow.bottom = tootipDom.offsetHeight * 0.2
				}
			}

			if (props.position.indexOf('right') === 0) {
				position.left = sourceDom.offsetLeft + sourceDom.offsetWidth + 8 + props.offset[1]
				arrow.right = tootipDom.offsetWidth
				arrow['position'] = 'right'
				if (props.position === 'right') {
					position.top = sourceDom.offsetTop - (tootipDom.offsetHeight - sourceDom.offsetHeight) / 2 + props.offset[0]
					arrow.top = tootipDom.offsetHeight / 2 - 6
				} else if (props.position === 'right-start') {
					position.top = sourceDom.offsetTop + props.offset[0]
					arrow.top = tootipDom.offsetHeight * 0.2
				} else if (props.position === 'right-end') {
					position.top = sourceDom.offsetTop - (tootipDom.offsetHeight - sourceDom.offsetHeight) + props.offset[0]
					arrow.bottom = tootipDom.offsetHeight * 0.2
				}
			}
		}

		const vNode = slots.default && (slots.default()[0] as VNode)
		const wrapperSlot = <>{vNode}</>

		onMounted(() => {
			const children = wrapperSlot.children as VNodeArrayChildren
			const child = children[0] as VNode
			if (slots.default && Array.isArray(children) && child.el) {
				if (child.el.nodeType !== 1)
					// eslint-disable-next-line no-console
					return console.warn('The default slot of the <Tooltip> component appears to be a non-DOM element.')
				useEventListener(child.el as HTMLElement, { hover: 'mouseenter', click: 'click', focus: 'focus' }[props.trigger], () => {
					setTimeout(() => {
						visible.value = true
						nextTick(() => {
							if (child.el && tooltipRef.value) {
								initPosition(child.el as HTMLElement, tooltipRef.value)
							}
						})
					}, props.mouseEnterDelay)
				})
				if (props.trigger === 'click')
					useEventListener(document as Document, 'click', () => {
						visible.value &&
							setTimeout(() => {
								visible.value = false
							}, props.mouseLeaveDelay)
					})
				else
					useEventListener(child.el as HTMLElement, { hover: 'mouseleave', focus: 'blur' }[props.trigger], () => {
						setTimeout(() => {
							visible.value = false
						}, props.mouseLeaveDelay)
					})
			}
		})

		return () => {
			return (
				<>
					{wrapperSlot}
					<Teleport to="body">
						<Transition name={props.transition}>
							{visible.value && (
								<div ref={tooltipRef} class={classes.value} style={styles.value}>
									<div>
										{slots.content ? slots.content?.() : <span>{props.content}</span>}
										<span class={`${namespace}-tooltip-arrow`}></span>
									</div>
								</div>
							)}
						</Transition>
					</Teleport>
				</>
			)
		}
	}
})
