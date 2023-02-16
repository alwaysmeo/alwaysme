import '@components/Image/style/image.scss'
import '@components/Image/style/imagePreview.scss'
import Image from '@components/Image/src/Image.vue'
import ImagePreview from '@components/Image/src/ImagePreview.vue'

Image.install = (app: App) => {
	app.component(`${namespace}ImagePreview`, ImagePreview)
	app.component(`${namespace}Image`, Image)
	return app
}

export { Image }
