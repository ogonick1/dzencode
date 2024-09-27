import { createRouter, createWebHistory } from 'vue-router'
import LogInPage from '@/pages/LogInPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import { store } from '@/store/store'

const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'logIn',
      component: LogInPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegistrationPage
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../pages/OrdersPage.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/ProductsPage.vue')
    },
    {
      path: '/protect',
      name: 'protect',
      component: () => import('../pages/ProtectPage.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: 'logIn' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
