import { App } from 'vue'
import './style/space.scss'
import Space from './src/Space.tsx'

Space.install = (app: App) => {
	app.component(`${namespace}Space`, Space)
	return app
}

export default Space
