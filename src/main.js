import { createApp } from 'vue'
import App from './App.vue'
import "./assets/tailwind.css"
import router from './routes/index.js'
import {createPinia} from 'pinia';
import i18n from './i18n';

const pinia = createPinia();

createApp(App).use(router).use(i18n).use(pinia).mount('#app')
