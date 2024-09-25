import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store, key} from './store/store'
import i18n from './i18n'
import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(store, key)
app.use(Toast)
app.mount('#app')
