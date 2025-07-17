import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createWebHistory, createRouter } from 'vue-router'

import CategoriesList from './components/CategoriesList.vue'
import Checkout from './components/Checkout.vue'

const routes = [
  {path:'/', component: CategoriesList},
  {path: '/Checkout', component: Checkout}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router);
app.use(Toast);
app.mount('#app');
