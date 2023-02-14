import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Tag/style/tag.scss'
import Tag from '@components/Tag/src/Tag.vue'

Tag.install = function (app: App) {
	app.component(`${prefix}Tag`, Tag)
	return app
}

export { Tag }
