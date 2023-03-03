import { namespace } from '@config'
import { App } from 'vue'
import './iconfont/iconfont.js'
import '@style/components/icon.scss'
import Icon from './Icon.vue'

Icon.install = (app: App) => {
	app.component(`${namespace}Icon`, Icon)
	return app
}

export { Icon }
