import { App } from 'vue'
import './style/switch.scss'
import Switch from './src/Switch.vue'

Switch.install = (app: App) => {
	app.component(`${namespace}Switch`, Switch)
	return app
}

export default Switch
