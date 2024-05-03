import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'

import 'vant/lib/index.css'

import { adjustRem } from './utils'
import { setupPinia } from './store'
import { setupRouter } from './router'

const app = createApp(App)

adjustRem()

setupPinia(app)
setupRouter(app)
    .isReady()
    .then(() => app.mount('#app'))
