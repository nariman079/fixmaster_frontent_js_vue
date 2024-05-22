import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'
import DetailPage from './pages/DetailPage.vue'

const routes = [
  { path: '/', component:MainPage  },
  { name:'organization' ,path: '/organization/:id', component:DetailPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router