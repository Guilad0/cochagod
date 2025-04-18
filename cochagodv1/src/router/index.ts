import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import TurismoView from '@/views/TurismoView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    // {
    //   path: '/cochagod',
    //   name: 'cochagod',
    //   component: Msx
    // },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }, 
    {
      path: '/turismo',
      name: 'Turismo',
      component: TurismoView,
    },

  ],
})

export default router
