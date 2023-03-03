import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/tag.scss'
import Tag from './Tag.vue'

Tag.install = (app: App) => {
	app.component(`${namespace}Tag`, Tag)
	return app
}

export { Tag }
