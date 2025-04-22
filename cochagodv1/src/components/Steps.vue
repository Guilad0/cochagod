<template>
  <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
    <h3 class="text-xl font-semibold text-gray-800 mb-2">Comienza tu experiencia</h3>
    <p class="text-gray-500 mb-8">Tres simples pasos para explorar Cochabamba</p>

    <div class="flex flex-col md:flex-row justify-between relative">
      <!-- Progress Bar -->
      <div class="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-200">
        <div class="h-full bg-teal-500" :style="`width: ${(activeStep - 1) * 50}%`"></div>
      </div>

      <!-- Steps -->
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex flex-col items-center mb-6 md:mb-0 relative z-10"
        :class="{
          'opacity-100': index + 1 <= activeStep,
          'opacity-60': index + 1 > activeStep,
        }"
      >
        <div
          class="h-16 w-16 rounded-full flex items-center justify-center text-white mb-3"
          :class="index + 1 <= activeStep ? 'bg-teal-500' : 'bg-gray-300'"
        >
          <span class="text-xl font-medium">{{ index + 1 }}</span>
        </div>
        <h4 class="font-medium text-gray-900 text-center">{{ step.title }}</h4>
        <p class="mt-1 text-sm text-gray-500 text-center max-w-xs">
          {{ step.description }}
        </p>
      </div>
    </div>

    <div class="mt-12 flex justify-center">
      <button
        @click="nextStep"
        class="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
      >
        {{ activeStep < steps.length ? "Siguiente" : "Comenzar" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const steps = [
  {
    title: "Crea tu cuenta",
    description:
      "Regístrate para una experiencia personalizada y guarda tus lugares favoritos.",
  },
  {
    title: "Explora el mapa",
    description: "Descubre los puntos de interés y rutas recomendadas en Cochabamba.",
  },
  {
    title: "Disfruta la ciudad",
    description:
      "Visita los lugares, escanea códigos QR para obtener información adicional.",
  },
];

const activeStep = ref(1);

const nextStep = () => {
  if (activeStep.value < steps.length) {
    activeStep.value++;
  } else {
    // Handle completion - redirect or show completion modal
    console.log("Onboarding complete");
  }
};
</script>
