import { createApp } from 'vue'
import App from './app.vue'
import Router from './router'

// packages
import AlwaysMe from '../packages/index'
import '../packages/style/index.scss'

// dist
// import AlwaysMe from '../dist/es/main.mjs'
// import '../dist/es/style.css'

const app = createApp(App)

app.use(Router).use(AlwaysMe).mount('#app')
