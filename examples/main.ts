import { createApp } from 'vue'
import AlwaysMe from '../packages'
import App from './app.vue'

const app = createApp(App)

app.use(AlwaysMe).mount('#app')
