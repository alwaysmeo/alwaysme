import { App } from 'vue'
import './iconfont'
import './style/icon.scss'
import Icon from './src/Icon.vue'

Icon.install = (app: App) => {
	app.component(`${namespace}Icon`, Icon)
	return app
}

export default Icon
