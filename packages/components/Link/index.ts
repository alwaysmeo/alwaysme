import { App } from 'vue'
import './style/link.scss'
import Link from './src/Link.vue'

Link.install = (app: App) => {
	app.component(`${namespace}Link`, Link)
	return app
}

export default Link
