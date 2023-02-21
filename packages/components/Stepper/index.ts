import { App } from 'vue'
import './style/stepper.scss'
import Stepper from './src/Stepper.vue'

Stepper.install = (app: App) => {
	app.component(`${namespace}Stepper`, Stepper)
	return app
}

export default Stepper
