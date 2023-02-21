import { App } from 'vue'
import './style/tag.scss'
import Tag from './src/Tag.vue'

Tag.install = (app: App) => {
	app.component(`${namespace}Tag`, Tag)
	return app
}

export default Tag
