import { App } from 'vue'
import '@components/Link/style/index.scss'
import Link from '@components/Link/src/link.vue'

Link.install = function (app: App) {
	app.component(Link.name, Link)
	return app
}

export { Link }
