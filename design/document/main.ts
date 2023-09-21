import { createApp } from 'vue'
import App from './app.vue'
import Router from './router'

// dist
import AlwaysMe from '../dist/es/main.mjs'
import '../dist/es/style.css'

const app = createApp(App)

app.use(Router).use(AlwaysMe).mount('#app')
