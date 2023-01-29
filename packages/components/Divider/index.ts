import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Divider/style/index.scss'
import Divider from '@/components/Divider/src/Divider.vue'

Divider.install = function (app: App) {
	app.component(`${prefix}Divider`, Divider)
	return app
}

export { Divider }
