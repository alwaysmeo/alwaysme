import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Button/style/button.scss'
import Button from '@components/Button/src/Button.vue'

Button.install = function (app: App) {
	app.component(`${prefix}Button`, Button)
	return app
}

export { Button }
