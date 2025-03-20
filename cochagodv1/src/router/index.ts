import { createRouter, createWebHistory } from 'vue-router'
import Msx from '../views/msx.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/cochagod',
      name: 'cochagod',
      component: Msx
    }
  ],
})

export default router
