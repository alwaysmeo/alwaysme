import { createApp } from 'vue'
import App from './app.vue'

// packages
import AlwaysMe from '../packages/index'
import '../packages/style/index.scss'

const app = createApp(App)

app.use(AlwaysMe).mount('#app')
