import { App } from 'vue'
import '@components/Button/style/index.scss'
import Button from '@components/Button/src/button.vue'
import ButtonGroup from '@components/Button/src/group.vue'

Button.install = function (app: App) {
    app.component(Button.name, Button)
    app.component(ButtonGroup.name, ButtonGroup)
    return app
}

export { Button, ButtonGroup }
