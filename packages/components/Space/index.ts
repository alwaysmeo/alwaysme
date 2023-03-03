import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/space.scss'
import Space from './Space'

Space.install = (app: App) => {
	app.component(`${namespace}Space`, Space)
	return app
}

export { Space }
