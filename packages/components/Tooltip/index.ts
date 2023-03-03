import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/tooltip.scss'
import Tooltip from './Tooltip'

Tooltip.install = (app: App) => {
	app.component(`${namespace}Tooltip`, Tooltip)
	return app
}

export { Tooltip }
