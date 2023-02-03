import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Image/style/image.scss'
import Image from '@components/Image/src/Image.vue'

Image.install = function (app: App) {
	app.component(`${prefix}Image`, Image)
	return app
}

export { Image }
