<template>
  <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
    <h3 class="text-xl font-semibold text-gray-800 mb-6">Funcionalidades principales</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div class="flex items-start">
          <div
            class="h-10 w-10 rounded-full flex items-center justify-center bg-teal-100 text-teal-600"
          >
            <component :is="feature.icon" class="h-5 w-5" />
          </div>
          <div class="ml-4">
            <h4 class="font-medium text-gray-900">{{ feature.title }}</h4>
            <p class="mt-1 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MapIcon, TicketIcon, CameraIcon, StarIcon } from "@heroicons/vue/24/outline";

const features = ref([
  {
    title: "Rutas turísticas",
    description:
      "Explora rutas personalizadas por los sitios más emblemáticos de Cochabamba.",
    icon: MapIcon,
  },
  {
    title: "Eventos locales",
    description:
      "Mantente al tanto de ferias, festivales y eventos culturales de la ciudad.",
    icon: TicketIcon,
  },
  {
    title: "Experiencia AR",
    description: "Vive la experiencia de realidad aumentada en los sitios históricos.",
    icon: CameraIcon,
  },
  {
    title: "Recomendaciones",
    description: "Descubre restaurantes, mercados y lugares favoritos de los locales.",
    icon: StarIcon,
  },
]);
</script>
