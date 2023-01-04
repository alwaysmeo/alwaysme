import { App } from 'vue'
import '@components/Divider/style/index.scss'
import Divider from '@components/Divider/src/divider.vue'

Divider.install = function (app: App) {
	app.component(Divider.name, Divider)
	return app
}

export { Divider }
