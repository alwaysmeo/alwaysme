import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/link.scss'
import Link from './Link.vue'

Link.install = (app: App) => {
	app.component(`${namespace}Link`, Link)
	return app
}

export default Link
