import { App } from 'vue'
import '@components/Button/style/index.scss'
import Button from '@components/Button/src/button.vue'

Button.install = function (app: App) {
    app.component(Button.name, Button)
    return app
}

export { Button }
