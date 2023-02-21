import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/switch.scss'
import Switch from './Switch.vue'

Switch.install = (app: App) => {
	app.component(`${namespace}Switch`, Switch)
	return app
}

export default Switch
