// 时间轴组件
import { PropType } from 'vue'
import { mitt } from '@utils'
import TimelineItem from './TimelineItem.vue'

export default defineComponent({
	props: {
		// 对齐方式
		position: {
			type: String as PropType<'left' | 'right'>,
			default: 'left'
		}
	},
	setup(props, { slots }) {
		nextTick(() => {
			watchEffect(() => {
				mitt.emit('timeline-position', props.position)
			})
		})

		if (slots.default?.())
			for (const item of slots.default?.())
				if (item?.type !== TimelineItem) {
					console.warn('There appears to be a non-TimelineItem component in Timeline')
					break
				}

		return () => {
			return h('div', { class: `${namespace}-timeline`, style: `--${namespace}-timeline-item-position: ${props.position}` }, slots.default?.())
		}
	}
})
