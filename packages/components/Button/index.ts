
import { App } from 'vue'
import './style/button.scss'
import Button from './src/Button.vue'

Button.install = (app: App) => {
	app.component(`${namespace}Button`, Button)
	return app
}

export default Button
