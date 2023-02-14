import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Icon/style/icon.scss'
import Icon from '@components/Icon/src/Icon.vue'

Icon.install = function (app: App) {
	app.component(`${prefix}Icon`, Icon)
	return app
}

export { Icon }
