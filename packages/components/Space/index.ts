import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/space.scss'
import Space from './Space.tsx'

Space.install = (app: App) => {
	app.component(`${namespace}Space`, Space)
	return app
}

export default Space
