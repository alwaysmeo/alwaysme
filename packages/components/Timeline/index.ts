
import '@components/Timeline/style/timeline.scss';
import '@components/Timeline/style/timelineItem.scss';
import Timeline from '@components/Timeline/src/Timeline.vue'
import TimelineItem from '@components/Timeline/src/TimelineItem.vue'

Timeline.install = (app: App) => {
	app.component(`${namespace}Timeline`, Timeline)
	app.component(`${namespace}TimelineItem`, TimelineItem)
	return app
}

export { Timeline }
