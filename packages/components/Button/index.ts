import { App } from 'vue'
import './style/button.less'
import Button from './src/button.vue'

Button.install = function (app: App) {
    app.component(Button.name, Button)
    return app
}

export { Button }
