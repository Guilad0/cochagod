<template>
  <section class="p-4 md:p-14">
    <h1 class="text-3xl font-bold text-center mb-6">Turismo</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link v-for="lugar in lugares" :key="lugar.id" :to="`/turismo/${lugar.id}`" class="block">
        <div class="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300">
          <img :src="lugar.imagen" :alt="lugar.nombre" class="rounded-xl w-full h-48 object-cover" />
          <h2 class="text-xl font-semibold mt-3">{{ lugar.nombre }}</h2>
          <p class="text-sm mt-2 text-gray-600">{{ lugar.descripcion }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>


<script setup>
const lugares = [
  {
    id: 1,
    nombre: "Cristo de la Concordia",
    descripcion: "Uno de los íconos de la ciudad. Vista panorámica increíble.",
    imagen: "/img/cristo.jpg",
  },
  {
    id: 2,
    nombre: "Plaza Metropolitana 14 de Septiembre",
    descripcion: "Corazón histórico de Cochabamba. Rodeada de arquitectura colonial, palmeras y palomas chismosas. Perfecta para relajarse o empezar un buen tour.",
    imagen: "/img/plaza14.jpg",
  },
  {
    id: 3,
    nombre: "Palacio Portales",
    descripcion: "Antigua mansión de Simón I. Patiño. Su arquitectura europea y sus jardines lo convierten en una joyita escondida.",
    imagen: "/img/portales.jpg",
  },
  {
    id: 4,
    nombre: "Parque de la Familia",
    descripcion: "Ideal para ir con niños. Tiene fuentes de agua danzantes, luces y diversión segura. Ambiente tranquilo para toda la familia.",
    imagen: "/img/familia.jpg",
  },
  {
    id: 5,
    nombre: "Laguna Alalay",
    descripcion: "Lugar para caminar, andar en bici o sentarse a ver atardeceres. La vista al Tunari le da un toque especial.",
    imagen: "/img/alalay.jpg",
  },
  {
    id: 6,
    nombre: "La Recoleta",
    descripcion: "Zona con historia, cafés artísticos y buena vibra. Ideal para pasear un domingo o tomar unas fotos retro.",
    imagen: "/img/recoleta.jpg",
  },
];
</script>