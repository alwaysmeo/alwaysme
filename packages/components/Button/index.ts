import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/button.scss'
import Button from './Button.vue'

Button.install = (app: App) => {
	app.component(`${namespace}Button`, Button)
	return app
}

export { Button }
