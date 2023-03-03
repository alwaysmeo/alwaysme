import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/switch.scss'
import Switch from './Switch.vue'

Switch.install = (app: App) => {
	app.component(`${namespace}Switch`, Switch)
	return app
}

export { Switch }
