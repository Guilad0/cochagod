<template>
  <div
    class="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md border border-gray-100"
  >
    <div class="relative h-48">
      <img
        :src="place.imageUrl || '/api/placeholder/400/320'"
        :alt="place.name"
        class="w-full h-full object-cover"
      />
      <div class="absolute top-3 right-3">
        <button
          @click.stop="toggleFavorite"
          class="h-8 w-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
        >
          <HeartIcon v-if="isFavorite" class="h-5 w-5 text-red-500" />
          <HeartIcon v-else class="h-5 w-5 text-gray-400" />
        </button>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"
      >
        <div class="flex items-center">
          <div class="mr-2">
            <component :is="categoryIcons[place.category]" class="h-4 w-4" />
          </div>
          <span class="text-xs font-medium">{{ place.category }}</span>
        </div>
        <h3 class="text-lg font-semibold mt-1">{{ place.name }}</h3>
      </div>
    </div>

    <div class="p-4">
      <div class="flex items-center text-sm mb-3">
        <MapPinIcon class="h-4 w-4 text-gray-500 mr-1" />
        <span class="text-gray-500 truncate">{{ place.location }}</span>
      </div>

      <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ place.description }}</p>

      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <StarIcon
            v-for="i in 5"
            :key="i"
            class="h-4 w-4"
            :class="i <= place.rating ? 'text-yellow-400' : 'text-gray-300'"
          />
          <span class="ml-1 text-xs text-gray-500">{{ place.reviews }} reseñas</span>
        </div>

        <button
          @click="showDetails"
          class="px-3 py-1 text-sm bg-teal-100 text-teal-700 rounded-md hover:bg-teal-200 transition"
        >
          Ver más
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  HeartIcon,
  StarIcon,
  MapPinIcon,
  MuseumIcon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  SparklesIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  place: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["view-details"]);

const isFavorite = ref(false);

const categoryIcons = {
  Museo: MuseumIcon,
  Histórico: AcademicCapIcon,
  Gastronómico: BuildingStorefrontIcon,
  Entretenimiento: SparklesIcon,
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const showDetails = () => {
  emit("view-details", props.place);
};
</script>
