import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/link.scss'
import Link from './Link.vue'

Link.install = (app: App) => {
	app.component(`${namespace}Link`, Link)
	return app
}

export { Link }
