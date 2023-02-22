import { App } from 'vue'
import '@style/components/timeline.scss';
import '@style/components/timeline-item.scss';
import Timeline from './Timeline.tsx'
import TimelineItem from './TimelineItem.vue'

Timeline.install = (app: App) => {
	app.component(`${namespace}Timeline`, Timeline)
	app.component(`${namespace}TimelineItem`, TimelineItem)
	return app
}

export { Timeline }
