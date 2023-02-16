
import '@components/Divider/style/divider.scss'
import Divider from '@components/Divider/src/Divider.vue'

Divider.install = (app: App) => {
	app.component(`${namespace}Divider`, Divider)
	return app
}

export { Divider }
