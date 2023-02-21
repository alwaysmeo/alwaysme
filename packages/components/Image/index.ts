import { App } from 'vue'
import './style/image.scss'
import './style/imagePreview.scss'
import Image from './src/Image.vue'
import ImagePreview from './src/ImagePreview.vue'

Image.install = (app: App) => {
	app.component(`${namespace}ImagePreview`, ImagePreview)
	app.component(`${namespace}Image`, Image)
	return app
}

export default Image
