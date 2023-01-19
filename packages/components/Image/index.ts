import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Image/style/index.scss'
import Image from '@components/Image/src/image.vue'

Image.install = function (app: App) {
	app.component(`${prefix}Image`, Image)
	return app
}

export { Image }
