<template>
  <section class="pt-24 px-4 md:px-14">
    <h1 class="text-3xl font-bold text-center mb-6">{{ titulo }}</h1>

    <input v-model="busqueda" type="text" placeholder="Buscar..."
      class="w-full md:w-1/2 mx-auto mb-6 p-2 border border-gray-300 rounded-lg block" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in filtrados" :key="item.id" class="bg-white shadow-lg rounded-2xl p-4">
        <img :src="item.imagen" :alt="item.nombre" class="rounded-xl w-full h-48 object-cover" />
        <h2 class="text-xl font-semibold mt-3">{{ item.nombre }}</h2>
        <p class="text-sm mt-2 text-gray-600">{{ item.descripcion }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'


const titulo = 'Entrerenimiento'

const items = ref([
  {
    id: 1,
    nombre: 'Cine Center',
    descripcion: 'Proyectamos tus emociones',
    imagen: '/img/cafe.jpg',

  },
  {
    id: 2,
    nombre: 'Sky Games',
    descripcion: 'Los mejores juegos y videojuegos',
    imagen: '/img/restaurante.jpg',
  },
  {
    id: 3,
    nombre: 'Aventura Games',
    descripcion: 'Centro de juegos para toda la familia',
    imagen: '/img/restaurante.jpg',
  },
])

const busqueda = ref('')

const filtrados = computed(() =>
  items.value.filter((i) =>
    i.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  )
)
</script>
