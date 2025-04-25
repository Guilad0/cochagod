import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import TurismoView from '@/views/TurismoView.vue';
import Negocios from '@/views/Negocios.vue';
import Profesiones from '@/views/Profesiones.vue';
import Gastronomia from '@/views/Gastronomia.vue';
import Entretenimiento from '@/views/Entretenimiento.vue';
import DetalleTuris from '@/views/DetalleTuris.vue';


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
    {
      path: '/negocios',
      name: 'Negocios',
      component: Negocios
    },

    {
      path: '/profesiones',
      name: 'Profesiones',
      component: Profesiones
    },
    {
      path: '/gastronomia',
      name: 'gastronomia',
      component: Gastronomia
    },
    {
      path: '/entretenimiento',
      name: 'entretenimiento',
      component: Entretenimiento
    },
    {
      path: '/turismo/:id', 
      name: 'DetalleTuris',
      component: DetalleTuris 
    },
    {
      path: '/gastronomia/:id',
      name: 'TarjetaGastro',
      component: () => import('@/views/TarjetaGastro.vue'),
    },
    

  ],
})

export default router
