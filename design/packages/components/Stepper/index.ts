import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/stepper.scss'
import Stepper from './Stepper.vue'

Stepper.install = (app: App) => {
	app.component(`${namespace}Stepper`, Stepper)
	return app
}

export { Stepper }
