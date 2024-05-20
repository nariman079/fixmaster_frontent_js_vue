import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)
app.use(router)
app.mount('#app')

import '@/assets/css/style.css'
import '@/assets/css/detail.css'
import '@/assets/css/accordion.css'
import '@/assets/css/media.css'

// import '@/assets/js/script.js'