import { App } from 'vue'
import '@theme/index.scss'
import components from '@/component'

// 完整引入组件
// Import components completely
const install = function (app: App) {
    components.forEach((component) => {
        app.use(component as unknown as { install: () => any })
    })
}

export default { install }
