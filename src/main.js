import '@fortawesome/fontawesome-free/css/all.css';
import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



createApp(App).use(router).mount('#app')
