import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import { MapPinIcon } from "@heroicons/vue/24/solid";
import '@fortawesome/fontawesome-free/css/all.min.css'



const app = createApp(App)

app.use(router)

app.component('MapPinIcon', MapPinIcon);

app.mount('#app')
