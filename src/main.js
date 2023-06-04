import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from "./router"

const el = document.getElementById('app')
if (el) {
    const data = {...el.dataset}
    const app = createApp(App, data)
    app.use(PrimeVue)
    app.use(router)
    app.mount('#app')
}