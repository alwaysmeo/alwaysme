
import '@components/Link/style/link.scss'
import Link from '@components/Link/src/Link.vue'

Link.install = (app: App) => {
	app.component(`${namespace}Link`, Link)
	return app
}

export { Link }
