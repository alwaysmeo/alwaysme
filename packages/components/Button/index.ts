
import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/button.scss'
import Button from './Button.vue'

Button.install = (app: App) => {
	app.component(`${namespace}Button`, Button)
	return app
}

export default Button
