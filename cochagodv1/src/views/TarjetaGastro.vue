<template>
  <section class="pt-24 px-4 md:px-14 max-w-7xl mx-auto">
    <div v-if="restaurante" class="space-y-10">
      <!-- Header con nombre e imagen -->
      <div>
        <h1 class="text-4xl font-bold text-center mb-4">{{ restaurante.nombre }}</h1>
        <img :src="restaurante.imagen" :alt="restaurante.nombre"
          class="rounded-xl w-full h-72 object-cover shadow-lg" />
      </div>

      <!-- Navbar interna -->
      <nav class="sticky top-20 z-10 bg-white shadow-md rounded-lg p-2 flex justify-center flex-wrap gap-2">
        <a href="#descripcion" class="btn-tab">Descripción</a>
        <a href="#info" class="btn-tab">Info Básica</a>
        <a href="#galeria" class="btn-tab">Galería</a>
        <a href="#mapa" class="btn-tab">Mapa</a>
        <a href="#redes" class="btn-tab">Redes Sociales</a>
        <a href="#resenas" class="btn-tab">Reseñas</a>
      </nav>

      <!-- Descripción general -->
      <p id="descripcion" class="text-gray-700 text-center text-lg scroll-mt-28">
        {{ restaurante.descripcion }}
      </p>

      <!-- Info básica -->
      <div id="info" class="grid md:grid-cols-2 gap-6 text-gray-700 scroll-mt-28">
        <div>
          <h2 class="font-semibold text-lg">Dirección</h2>
          <p>{{ restaurante.direccion }}</p>
        </div>
        <div>
          <h2 class="font-semibold text-lg">Teléfono</h2>
          <p>{{ restaurante.telefono }}</p>
        </div>
        <div v-if="restaurante.horarios">
          <h2 class="font-semibold text-lg">Horarios</h2>
          <ul class="list-disc pl-5">
            <li v-for="(horario, i) in restaurante.horarios" :key="i">{{ horario }}</li>
          </ul>
        </div>
        <div v-if="restaurante.servicios">
          <h2 class="font-semibold text-lg">Productos y Servicios</h2>
          <ul class="list-disc pl-5">
            <li v-for="(item, i) in restaurante.servicios" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- Galería -->
      <div v-if="restaurante.galeria?.length" id="galeria" class="scroll-mt-28">
        <h2 class="font-semibold text-lg mb-2">Galería</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img v-for="(foto, i) in restaurante.galeria" :key="i" :src="foto"
            class="rounded-xl object-cover h-32 w-full" />
        </div>
      </div>

      <!-- Mapa -->
      <div v-if="restaurante.mapaUrl" id="mapa" class="scroll-mt-28">
        <h2 class="font-semibold text-lg mb-2">Ubicación</h2>
        <iframe :src="restaurante.mapaUrl" class="w-full h-64 rounded-xl border" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <!-- Redes Sociales -->
      <div v-if="restaurante.redes?.length" id="redes" class="scroll-mt-28">
        <h2 class="font-semibold text-lg mb-2">Redes Sociales</h2>
        <ul class="space-y-1">
          <li v-for="(red, i) in restaurante.redes" :key="i">
            <a :href="red.url" target="_blank" class="text-blue-600 underline hover:text-blue-800 transition">
              {{ red.nombre }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Reseñas -->
      <div v-if="restaurante.resenas?.length" id="resenas" class="scroll-mt-28">
        <h2 class="font-semibold text-lg mb-2">Reseñas de clientes</h2>
        <ul class="space-y-4">
          <li v-for="(resena, i) in restaurante.resenas" :key="i" class="bg-gray-100 p-4 rounded-xl shadow-sm">
            <p class="italic">"{{ resena.comentario }}"</p>
            <p class="text-sm text-right text-gray-600">— {{ resena.autor }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div v-else>
      <p class="text-red-500">No se encontró información del restaurante.</p>
    </div>
  </section>
</template>



<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'



//  Datos simulados (cuando esté listo el backend, se reemplazan Johna)
const restaurantes = ref([
  {
    id: 1,
    nombre: 'Café Paris',
    descripcion: 'Un rincón acogedor para los amantes del café.',
    imagen: '/img/cafe.jpg',
    direccion: 'Calle Ficticia #123, Cochabamba',
    telefono: '444-1234',
    horarios: ['Lunes a Viernes: 8:00 - 20:00', 'Sábados: 9:00 - 18:00'],
    servicios: ['Café artesanal', 'Desayunos', 'Wi-Fi gratis'],
    galeria: ['/img/cafe1.jpg', '/img/cafe2.jpg'],
    mapaUrl: 'https://www.google.com/maps/embed?pb=...', // pega el iframe src aquí
    redes: [
      { nombre: 'Facebook', url: 'https://facebook.com/cafeparis' },
      { nombre: 'Instagram', url: 'https://instagram.com/cafeparis' },
    ],
    resenas: [
      { autor: 'Lucía', comentario: 'El mejor cappuccino del centro.' },
      { autor: 'Carlos', comentario: 'Ambiente muy tranquilo para trabajar.' },
    ],
  },

  {
    id: 2,
    nombre: 'Restaurante El Gordo',
    descripcion: 'Comida tradicional con un toque familiar.',
    imagen: '/img/cafe.jpg',
    direccion: 'Calle Ficticia #123, Cochabamba',
    telefono: '444-1234',
    redes: [
      { nombre: 'Facebook', url: 'https://facebook.com/cafeparis' },
      { nombre: 'Instagram', url: 'https://instagram.com/cafeparis' },
    ],
  },
  {
    id: 3,
    nombre: 'Pollos Panchita',
    descripcion: 'Pollos a la brasa con sabor familiar, en el corazón de la ciudad.',
    imagen: '/img/restaurante.jpg',
    direccion: 'Av. América #456, Cochabamba',
    telefono: '71717171',
    redes: [
      { nombre: 'Facebook', url: 'https://facebook.com/panchita' },
      { nombre: 'Instagram', url: 'https://instagram.com/panchita' },
    ],
  },


])


// Obtener el id desde la URL
const route = useRoute()
const restaurante = ref(null)

onMounted(() => {
  const restauranteId = parseInt(route.params.id)  // Obtener el id de la URL
  restaurante.value = restaurantes.value.find(r => r.id === restauranteId) // Buscar el restaurante por id
})

</script>


