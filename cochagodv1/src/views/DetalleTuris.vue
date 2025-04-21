<template>
  <section class="pt-24 px-4 md:px-14">
    <div v-if="lugar">
      <h1 class="text-3xl font-bold text-center mb-6">{{ lugar.nombre }}</h1>
      <img :src="lugar.imagen" :alt="lugar.nombre" class="rounded-xl w-full h-60 object-cover" />
      <p class="mt-4 text-gray-700">{{ lugar.descripcion }}</p>
    </div>
    <div v-else>
      <p class="text-red-500">Lugar no encontrado.</p>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const lugares = [
  {
    id: '1',
    nombre: 'Cristo de la Concordia',
    descripcion: 'El Cristo más grande de Sudamérica, ubicado en el cerro San Pedro...',
    imagen: '/img/cristo.jpg'
  },
  {
    id: '2',
    nombre: 'Plaza 14 de Septiembre',
    descripcion: 'Centro histórico de Cochabamba, rodeado de arquitectura colonial...',
    imagen: '/img/plaza14.jpg'
  },
  {
    id: '3',
    nombre: 'Palacio Portales',
    descripcion: 'Antigua mansión de Simón I. Patiño, ubicado en el corredor principal de la ciudad...',
    imagen: '/img/portales.jpg'
  },
  {
    id: '4',
    nombre: 'Parque de la Familia',
    descripcion: 'Ideal para ir con niños. Tiene fuentes de agua danzantes, luces y diversión segura...',
    imagen: '/img/familia.jpg'
  },
  {
    id: '5',
    nombre: 'Laguna Alalay',
    descripcion: 'Lugar para caminar, andar en bici o sentarse a ver atardeceres. La vista al Tunari le da un toque especial...',
    imagen: '/img/alalay.jpg'
  },
  {
    id: '6',
    nombre: 'La Recoleta',
    descripcion: "Zona con historia, cafés artísticos y buena vibra. Ideal para pasear un domingo o tomar unas fotos retro.",
    imagen: "/img/recoleta.jpg",
  }
]

const lugar = lugares.find(l => l.id === id)
</script>