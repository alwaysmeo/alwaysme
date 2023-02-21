import { App } from 'vue'
import { namespace } from '../../utils/config'
import '../../style/components/image.scss'
import '../../style/components/image-preview.scss'
import Image from './Image.vue'
import ImagePreview from './ImagePreview.vue'

Image.install = (app: App) => {
	app.component(`${namespace}ImagePreview`, ImagePreview)
	app.component(`${namespace}Image`, Image)
	return app
}

export default Image
