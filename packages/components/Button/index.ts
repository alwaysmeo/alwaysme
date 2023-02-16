
import '@components/Button/style/button.scss'
import Button from '@components/Button/src/Button.vue'

Button.install = (app: App) => {
	app.component(`${namespace}Button`, Button)
	return app
}

export { Button }
