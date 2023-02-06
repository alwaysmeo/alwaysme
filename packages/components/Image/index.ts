import { prefix } from '@utils/config'
import { App } from 'vue'
import '@components/Image/style/image.scss'
import '@components/Image/style/imagePreview.scss'
import Image from '@components/Image/src/Image.vue'
import ImagePreview from '@components/Image/src/ImagePreview.vue'

Image.install = function (app: App) {
	app.component(`${prefix}ImagePreview`, ImagePreview)
	app.component(`${prefix}Image`, Image)
	return app
}

export { Image }
