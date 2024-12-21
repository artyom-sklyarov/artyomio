import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Add navigation guards to handle transitions
router.beforeEach((to, from, next) => {
  // Add a small delay to ensure DOM updates are complete
  setTimeout(() => {
    next()
  }, 50)
})

export default router
