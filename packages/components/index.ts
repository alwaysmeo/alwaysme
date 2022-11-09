import { App } from 'vue'
import Button from '@components/Button/Button.vue'

Button.install = function (app: App) {
    // 组件注册，按需引入
    app.component(Button.name, Button)
    return app
}

export {
    Button
}
