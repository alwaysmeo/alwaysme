import { App } from 'vue'
import { namespace } from '../../utils/config'
import './iconfont'
import '../../style/components/icon.scss'
import Icon from './Icon.vue'

Icon.install = (app: App) => {
	app.component(`${namespace}Icon`, Icon)
	return app
}

export default Icon
