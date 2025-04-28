import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
// import TurismoView from '@/views/TurismoView.vue';
// import Negocios from '@/views/Negocios.vue';
// import Profesiones from '@/views/Profesiones.vue';
// import Gastronomia from '@/views/Gastronomia.vue';
// import Entretenimiento from '@/views/Entretenimiento.vue';
// import DetalleTuris from '@/views/DetalleTuris.vue';
import RestaurantesView from '@/views/RestaurantesView.vue';
import EntretenimientoView from '@/views/EntretenimientoView.vue';
import Alojamientos from '@/views/Alojamientos.vue';
import ServiciosView from '@/views/ServiciosView.vue';
import TurismoV from '@/views/TurismoV.vue';
// import Fail from '@/views/Fail.vue';
import Cuatro from '@/views/Cuatro.vue';
import msx from '@/views/msx.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }, 
   
    {
      path: '/gastronomia/:id',
      name: 'TarjetaGastro',
      component: () => import('@/views/TarjetaGastro.vue'),
    },
    {
      path: '/comercios',
      name: 'comercios',
      component: RestaurantesView
    },
    {
      path: '/entretenimiento',
      name: 'entretenimiento',
      component: EntretenimientoView
    }
    ,
    {
      path: '/alojamientos',
      name: 'alojamientos',
      component: Alojamientos
    }
    ,
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    }
    ,
    {
      path: '/turismo',
      name: 'turismo',
      component: TurismoV
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: Cuatro,
      meta: { title: 'Página no encontrada' }
    },
    {
      path: '/msx',
      name: 'msx',
      component: msx
    }
  ],
})

export default router
