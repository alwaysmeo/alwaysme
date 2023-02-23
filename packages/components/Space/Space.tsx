// 间距组件

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
		const styles = computed(() => {
			return {
				[`--${namespace}-space-align`]: props.align,
				[`--${namespace}-space-direction`]: { horizontal: 'row', vertical: 'column' }[props.direction],
				[`--${namespace}-space-size`]: isNaN(props.size) ? props.size : `${props.size}px`
			}
		})

		return () => {
			return (
				<div class={`${namespace}-space`} style={styles.value}>
					{slots.default?.().map((item, index) => {
						return (
							<Fragment class={`${namespace}-space-item`} key={item.key ?? `${namespace}-space-item-${index}`}>
								{item}
							</Fragment>
						)
					})}
				</div>
			)
		}
	}
})
