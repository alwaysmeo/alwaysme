import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/slider.scss'
import Switch from './Slider.vue'

Switch.install = (app: App) => {
	app.component(`${namespace}Slider`, Switch)
	return app
}

export { Switch }
