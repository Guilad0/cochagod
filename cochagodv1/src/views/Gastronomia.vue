<template>
  <section class="pt-24 px-4 md:px-14">
    <h1 class="text-3xl font-bold text-center mb-6">{{ titulo }}</h1>

    <div class="flex flex-wrap gap-2 mb-6">

      <!-- Buscador -->
      <input v-model="busqueda" type="text" placeholder="Buscar por nombre..."
        class="w-64 p-1.5 text-sm border border-gray-300 rounded-lg" />

      <!-- Filtro por zona -->
      <select v-model="zonaSeleccionada" class="w-40 p-1.5 text-sm border border-gray-300 rounded-lg">
        <option value="">Todas las zonas</option>
        <option value="Centro">Centro</option>
        <option value="Norte">Norte</option>
        <option value="Sur">Sur</option>
      </select>
    </div>


    <!-- Card de clientes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in filtrados" :key="item.id" class="bg-white shadow-lg rounded-2xl p-4">
        <router-link :to="`/gastronomia/${item.id}`">
          <img :src="item.imagen" :alt="item.nombre" class="rounded-xl w-full h-48 object-cover" />
          <h2 class="text-xl font-semibold mt-3">{{ item.nombre }}</h2>
          <p class="text-sm mt-2 text-gray-600">{{ item.descripcion }}</p>
          <p class="text-sm mt-2 text-gray-600 flex items-center gap-2">
            <PhoneIcon class="w-5 h-5 text-gray-500" />
            {{ item.telefono }}
          </p>
          <p class="text-sm mt-2 text-gray-600 flex items-center gap-2">
            <MapPinIcon class="w-5 h-5 text-gray-500" />
            {{ item.zona }}
          </p>
        </router-link>


      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PhoneIcon, MapPinIcon } from '@heroicons/vue/24/solid'




const titulo = 'Gastronomía'

const items = ref([
  {
    id: 1,
    nombre: 'Café Paris',
    descripcion: 'Un rincón acogedor para los amantes del café.',
    imagen: '/img/cafe.jpg',
    telefono: '444-1234',
    zona: 'Centro',
  },

  {
    id: 2,
    nombre: 'Restaurante El Gordo',
    descripcion: 'Comida tradicional con un toque familiar.',
    telefono: '71717171',
    imagen: '/img/restaurante.jpg',
    zona: 'Norte'
  },
  {
    id: 3,
    nombre: 'Pollos Panchita',
    descripcion: 'Deliciosamente familiar.',
    telefono: '71717171',
    imagen: '/img/restaurante.jpg',
    zona: 'Sur'
  },
])

const busqueda = ref('')
const zonaSeleccionada = ref('')

const filtrados = computed(() =>
  items.value.filter((i) =>
    i.nombre.toLowerCase().includes(busqueda.value.toLowerCase()) &&
    (!zonaSeleccionada.value || i.zona === zonaSeleccionada.value)
  )
)

</script>
