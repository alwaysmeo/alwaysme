import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/divider.scss'
import Divider from './Divider.vue'

Divider.install = (app: App) => {
	app.component(`${namespace}Divider`, Divider)
	return app
}

export { Divider }
