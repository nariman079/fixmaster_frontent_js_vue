import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'
import DetailPage from './pages/DetailPage.vue'
import BookingPage from './pages/BookingPage.vue'
import SuccessBookingPage from './pages/SuccessBookingPage.vue'

const routes = [
  { name: 'main', path: '/', component: MainPage  },
  { name:'organization' ,path: '/organization/:id', component:DetailPage },
  { name: 'booking', path: '/booking/:id', component: BookingPage},
  { name: 'successBooking', path: '/success-booking/:code', component: SuccessBookingPage}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router