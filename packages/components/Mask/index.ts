import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/mask.scss'
import Mask from './Mask.vue'

Mask.install = (app: App) => {
	app.component(`${namespace}Mask`, Mask)
	return app
}

export default Mask
