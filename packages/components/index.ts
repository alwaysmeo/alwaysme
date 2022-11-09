import { App } from 'vue'
import Button from './Button/Button.vue'

Button.install = function (app: App) {
    app.component(Button.name, Button)
    return app
}

export { Button }
