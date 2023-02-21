import { App } from 'vue'
import './style/divider.scss'
import Divider from './src/Divider.vue'

Divider.install = (app: App) => {
	app.component(`${namespace}Divider`, Divider)
	return app
}

export default Divider
