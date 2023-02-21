import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/tag.scss'
import Tag from './Tag.vue'

Tag.install = (app: App) => {
	app.component(`${namespace}Tag`, Tag)
	return app
}

export default Tag
