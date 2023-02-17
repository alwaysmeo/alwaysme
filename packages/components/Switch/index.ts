import { App } from 'vue'
import '@components/Switch/style/switch.scss'
import Switch from '@components/Switch/src/Switch.vue'

Switch.install = (app: App) => {
	app.component(`${namespace}Switch`, Switch)
	return app
}

export { Switch }
