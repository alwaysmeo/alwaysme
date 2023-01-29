import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Link/style/index.scss'
import Link from '@/components/Link/src/Link.vue'

Link.install = function (app: App) {
	app.component(`${prefix}Link`, Link)
	return app
}

export { Link }
