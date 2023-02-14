import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Stepper/style/stepper.scss'
import Stepper from '@components/Stepper/src/Stepper.vue'

Stepper.install = function (app: App) {
	app.component(`${prefix}Stepper`, Stepper)
	return app
}

export { Stepper }
