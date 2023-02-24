import { App } from 'vue'
import Trigger from './Trigger'

Trigger.install = (app: App) => {
	app.component(`${namespace}Trigger`, Trigger)
	return app
}

export { Trigger }
