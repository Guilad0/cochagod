
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
// import DetalleTuris from '@/views/DetalleTuris.vue';
import RestaurantesView from '@/views/RestaurantesView.vue';
import EntretenimientoView from '@/views/EntretenimientoView.vue';
import Alojamientos from '@/views/Alojamientos.vue';
import ServiciosView from '@/views/ServiciosView.vue';
import TurismoV from '@/views/TurismoV.vue';
// import Fail from '@/views/Fail.vue';
// import Cuatro from '@/views/Cuatro.vue';
import msx from '@/views/msx.vue';
import NotFound from "@/views/NotFound.vue";// <-- Para el 404 johna
import FaqsView from '@/views/FaqsView.vue';



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
      path: '/msx',
      name: 'msx',
      component: msx
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }, // <-- Para el 404 johna

    {
      path: '/faqs', 
    name: 'Faqs',
    component: FaqsView
    },
  ],
})

export default router
