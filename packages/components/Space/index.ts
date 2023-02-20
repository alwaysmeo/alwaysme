import { App } from 'vue'
import '@components/Space/style/space.scss'
import Space from '@/components/Space/src/Space.tsx'

Space.install = (app: App) => {
	app.component(`${namespace}Space`, Space)
	return app
}

export { Space }
