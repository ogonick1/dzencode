import { createRouter, createWebHistory } from 'vue-router'
import OrdersPage from '../components/OrdersPage.vue'
import ProductsPage from '../components/ProductsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
