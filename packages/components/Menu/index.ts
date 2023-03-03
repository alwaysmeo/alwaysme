import { namespace } from '@config'
import { App } from 'vue'
import '@style/components/menu.scss'
import '@style/components/menu-item.scss'
import Menu from './Menu.vue'
import MenuItem from './MenuItem.vue'

Menu.install = (app: App) => {
	app.component(`${namespace}Menu`, Menu)
	app.component(`${namespace}MenuItem`, MenuItem)
	return app
}

export { Menu }
