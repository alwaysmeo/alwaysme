// 文字提示组件
import { PropType } from 'vue'

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
		// 触发方式
		trigger: {
			type: String as PropType<'hover' | 'click'>,
			default: 'hover'
		}
	},
	setup(props, { slots }) {
		const classes = computed(() => {
			return [`${namespace}-tooltip`]
		})

		const styles = computed(() => {
			return {}
		})

		return () => {
			return (
				<div class={classes.value} style={styles.value}>
					{slots.default?.()}
				</div>
			)
		}
	}
})
