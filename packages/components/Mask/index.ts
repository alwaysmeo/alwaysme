import { App } from 'vue'
import './style/mask.scss'
import Mask from './src/Mask.vue'

Mask.install = (app: App) => {
	app.component(`${namespace}Mask`, Mask)
	return app
}

export default Mask
