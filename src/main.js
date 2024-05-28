// import './assets/main.css'

import 'vant/lib/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router'
import store from './store'
createApp(App).use(router).use(store).use(Vant).mount('#app')
