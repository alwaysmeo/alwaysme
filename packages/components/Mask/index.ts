import { App } from 'vue'
import '@components/Mask/style/mask.scss'
import Mask from '@components/Mask/src/Mask.vue'

Mask.install = (app: App) => {
	app.component(`${namespace}Mask`, Mask)
	return app
}

export { Mask }
