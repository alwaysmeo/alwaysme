import { App } from 'vue'
import '@components/Icon/style/icon.scss'
import Icon from '@components/Icon/src/Icon.vue'

Icon.install = (app: App) => {
	app.component(`${namespace}Icon`, Icon)
	return app
}

export { Icon }
