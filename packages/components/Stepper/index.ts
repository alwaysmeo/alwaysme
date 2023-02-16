import '@components/Stepper/style/stepper.scss'
import Stepper from '@components/Stepper/src/Stepper.vue'

Stepper.install = (app: App) => {
	app.component(`${namespace}Stepper`, Stepper)
	return app
}

export { Stepper }
