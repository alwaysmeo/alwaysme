import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/stepper.scss'
import Stepper from './Stepper.vue'

Stepper.install = (app: App) => {
	app.component(`${namespace}Stepper`, Stepper)
	return app
}

export default Stepper
