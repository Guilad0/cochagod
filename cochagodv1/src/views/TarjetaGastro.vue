<template>
  <section class="pt-24 px-4 md:px-14">
    <div v-if="restaurante">
      <h1 class="text-3xl font-bold text-center mb-6">{{ restaurante.nombre }}</h1>
      <img :src="restaurante.imagen" :alt="restaurante.nombre" class="rounded-xl w-full h-60 object-cover" />

      <p class="mt-4 text-gray-700 text-center">{{ restaurante.descripcion }}</p>

      <div class="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <h2 class="font-semibold text-lg">Dirección:</h2>
          <p class="text-gray-600">{{ restaurante.direccion }}</p>
        </div>
        <div>
          <h2 class="font-semibold text-lg">Teléfono:</h2>
          <p class="text-gray-600">{{ restaurante.telefono }}</p>
        </div>
      </div>

      <div v-if="restaurante.redes?.length" class="mt-6">
        <h2 class="font-semibold text-lg mb-2">Redes Sociales:</h2>
        <ul class="space-y-1">
          <li v-for="(red, i) in restaurante.redes" :key="i" class="text-blue-600 underline">
            <a :href="red.url" target="_blank">{{ red.nombre }}</a>
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
    redes: [
      { nombre: 'Facebook', url: 'https://facebook.com/cafeparis' },
      { nombre: 'Instagram', url: 'https://instagram.com/cafeparis' },
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