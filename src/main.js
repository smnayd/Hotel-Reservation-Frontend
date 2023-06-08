import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
const instance = axios.create({
    baseURL: "http://localhost:8080/"
})

app.config.globalProperties.$ajax = instance;
app.use(router)
app.use(VueAxios,axios)
app.provide('router', router);
app.mount('#app')