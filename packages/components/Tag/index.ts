import { App } from 'vue'
import '@components/Tag/style/tag.scss'
import Tag from '@components/Tag/src/Tag.vue'

Tag.install = (app: App) => {
	app.component(`${namespace}Tag`, Tag)
	return app
}

export { Tag }
