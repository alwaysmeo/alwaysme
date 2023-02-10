import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Mask/style/mask.scss'
import Mask from '@components/Mask/src/Mask.vue'

Mask.install = function (app: App) {
	app.component(`${prefix}Mask`, Mask)
	return app
}

export { Mask }
