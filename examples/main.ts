import { createApp } from 'vue'
import App from './App.vue'
import AlwaysmeDesign from '../packages/index'
import zhHans from '@/locale/langs/zh-hans'

const app = createApp(App)
app.use(AlwaysmeDesign, {
    locale: zhHans
})

app.use(AlwaysmeDesign).mount('#app')
