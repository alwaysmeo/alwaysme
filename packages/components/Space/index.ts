import { App } from 'vue'
import '@style/components/space.scss'
import Space from './Space.tsx'

Space.install = (app: App) => {
	app.component(`${namespace}Space`, Space)
	return app
}

export { Space }
