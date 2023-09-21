// 间距组件
import { namespace } from '@config'
import { computed, defineComponent, Fragment, PropType } from 'vue'

export default defineComponent({
	props: {
		// 对齐方式
		align: {
			type: String as PropType<'start' | 'center' | 'end'>,
			default: 'start'
		},
		direction: {
			// 方向
			type: String as PropType<'horizontal' | 'vertical'>,
			default: 'horizontal'
		},
		size: {
			// 间距大小
			type: [String, Number],
			default: '1rem'
		}
	},
	setup(props, { slots }) {
		const classes = computed(() => {
			return [`${namespace}-space`]
		})

		const styles = computed(() => {
			return {
				[`--${namespace}-space-align`]: props.align,
				[`--${namespace}-space-direction`]: { horizontal: 'row', vertical: 'column' }[props.direction],
				[`--${namespace}-space-size`]: typeof props.size === 'number' ? `${props.size}px` : props.size
			}
		})

		return () => {
			return (
				<div class={classes.value} style={styles.value}>
					{slots.default?.().map((item, index) => {
						return <Fragment key={item.key ?? `${namespace}-space-item-${index}`}>{item}</Fragment>
					})}
				</div>
			)
		}
	}
})
