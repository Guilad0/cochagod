<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="closeIfClickable"
    ></div>

    <!-- Modal -->
    <div class="bg-white rounded-xl shadow-lg w-full max-w-md mx-4 relative z-10">
      <!-- Progress indicator -->
      <div class="flex justify-center gap-1 pt-4">
        <div
          v-for="(_, i) in steps"
          :key="i"
          class="h-1 rounded-full w-6 transition-colors duration-300"
          :class="i === currentStep ? 'bg-teal-500' : 'bg-gray-200'"
        ></div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <div class="h-40 flex items-center justify-center mb-4">
          <img
            :src="currentStepData.imageUrl || '/api/placeholder/320/160'"
            :alt="currentStepData.title"
            class="w-auto h-full object-contain"
          />
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          {{ currentStepData.title }}
        </h3>
        <p class="text-gray-600 mb-6">{{ currentStepData.description }}</p>

        <div class="flex justify-between items-center">
          <button
            v-if="currentStep > 0"
            @click="prevStep"
            class="text-gray-500 hover:text-gray-700"
          >
            Atrás
          </button>
          <div v-else></div>

          <button
            @click="nextStep"
            class="px-5 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          >
            {{ isLastStep ? "Entendido" : "Siguiente" }}
          </button>
        </div>
      </div>

      <!-- Skip button -->
      <div class="p-4 border-t border-gray-100 flex justify-center">
        <button
          v-if="!isLastStep"
          @click="close"
          class="text-sm text-gray-500 hover:text-gray-700"
        >
          Saltar tour
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  showModal: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["close", "complete"]);

const isVisible = ref(props.showModal);
const currentStep = ref(0);

const steps = [
  {
    title: "Explora el mapa interactivo",
    description:
      "Descubre puntos de interés, rutas personalizadas y ubicaciones destacadas en todo Cochabamba.",
    imageUrl: null,
  },
  {
    title: "Realidad aumentada",
    description:
      "Apunta la cámara a monumentos y edificios para obtener información histórica y cultural.",
    imageUrl: null,
  },
  {
    title: "Planifica tus recorridos",
    description:
      "Crea itinerarios personalizados según tus intereses y el tiempo disponible.",
    imageUrl: null,
  },
  {
    title: "¡Todo listo!",
    description:
      "Ahora estás preparado para disfrutar de la mejor experiencia en Cochabamba con CochaGo.",
    imageUrl: null,
  },
];

const currentStepData = computed(() => steps[currentStep.value]);
const isLastStep = computed(() => currentStep.value === steps.length - 1);

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  } else {
    close(true);
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const close = (completed = false) => {
  isVisible.value = false;
  if (completed) {
    emit("complete");
  } else {
    emit("close");
  }
};

const closeIfClickable = () => {
  // Only allow closing by backdrop click when on the last step
  if (isLastStep.value) {
    close(true);
  }
};
</script>
