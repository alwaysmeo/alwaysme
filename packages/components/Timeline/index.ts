import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Timeline/style/index.scss'
import Timeline from '@/components/Timeline/src/Timeline.vue'
import TimelineItem from '@/components/Timeline/src/TimelineItem.vue'

Timeline.install = function (app: App) {
	app.component(`${prefix}Timeline`, Timeline)
	app.component(`${prefix}TimelineItem`, TimelineItem)
	return app
}

export { Timeline }
