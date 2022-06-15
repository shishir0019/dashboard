import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/base.css';
import '@/assets/custom.css';

import FeatherIcon from './components/common/FeatherIcon.vue';
import store from './store'

const app = createApp(App).use(store)
app.component('Icon', FeatherIcon);

app.use(router)

app.mount('#app')
