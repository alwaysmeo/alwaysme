import { App } from 'vue'
import '@style/components/tooltip.scss'
import Tooltip from './Tooltip.tsx'

Tooltip.install = (app: App) => {
	app.component(`${namespace}Tooltip`, Tooltip)
	return app
}

export { Tooltip }
