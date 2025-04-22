<template>
  <div
    class="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl border border-gray-100 h-64"
  >
    <div class="rounded-full bg-teal-100 p-3 mb-4">
      <component :is="icon" class="h-6 w-6 text-teal-600" />
    </div>

    <h3 class="text-lg font-medium text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-500 text-center max-w-md mb-6">{{ description }}</p>

    <button
      v-if="buttonText"
      @click="$emit('action')"
      class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition text-sm font-medium"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { MapIcon, StarIcon, BookmarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  type: {
    type: String,
    default: "generic",
    validator: (value) => ["favorites", "routes", "history", "generic"].includes(value),
  },
  title: {
    type: String,
    default: "No hay contenido",
  },
  description: {
    type: String,
    default: "No hay contenido disponible en esta sección.",
  },
  buttonText: {
    type: String,
    default: "",
  },
});

defineEmits(["action"]);

const iconMapping = {
  favorites: StarIcon,
  routes: MapIcon,
  history: BookmarkIcon,
  generic: MapIcon,
};

const icon = iconMapping[props.type];
</script>
