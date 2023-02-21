import { App } from 'vue'
import './style/timeline.scss';
import './style/timelineItem.scss';
import Timeline from './src/Timeline.vue'
import TimelineItem from './src/TimelineItem.vue'

Timeline.install = (app: App) => {
	app.component(`${namespace}Timeline`, Timeline)
	app.component(`${namespace}TimelineItem`, TimelineItem)
	return app
}

export default Timeline
