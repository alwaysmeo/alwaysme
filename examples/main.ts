import { createApp } from 'vue'
import App from './App.vue'
import AlwaysmeDesign from '../packages/index'

const app = createApp(App)

app.use(AlwaysmeDesign).mount('#app')
