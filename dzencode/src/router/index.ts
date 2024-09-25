import { createRouter, createWebHistory } from 'vue-router'
import OrdersPage from '../components/OrdersPage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import LogInPage from '@/components/LogInPage.vue'
import RegistrationPage from '@/components/RegistrationPage.vue'

const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'logIn',
      component: LogInPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegistrationPage,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersPage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    },
  ]
})

export default router
