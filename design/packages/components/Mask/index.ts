import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/mask.scss'
import Mask from './Mask.vue'

Mask.install = (app: App) => {
	app.component(`${namespace}Mask`, Mask)
	return app
}

export { Mask }
