<template>
  <div class="p-4">
    <button
      @click="tryLuck"
      class="px-4 py-2 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 mb-1 w-full sm:w-auto justify-center"
      :disabled="isRolling"
    >
      <div v-if="isRolling" class="flex flex-row">
        <LoadingSpinner /> <span class="px-3">Craneando..</span>
      </div>
      <div v-else>Probar suerte!</div>
    </button>

    <transition name="zoom">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-[url('./img/cris.jpg')] flex items-center justify-center z-50"
        @click.self="closeModal"
      >
        <div class="rounded-2xl shadow-2xl p-6 w-full max-w-md relative animate-pop">
          <button
            @click="closeModal"
            class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>

          <h2 class="text-2xl font-bold mb-4 text-center">
            ¡Nos Vamos a: <span class="text-sky-400">{{ randomBusiness.name }}</span> !
          </h2>

          <div
            class="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              :src="randomBusiness.logo_url"
              alt="Imagen del negocio"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold">{{ randomBusiness.name }}</h3>
              <p class="text-gray-600 mt-2 text-sm">{{ randomBusiness.description }}</p>

              <p class="text-gray-600 mt-2 text-sm">
                Dirección: {{ randomBusiness.address }}
              </p>
              <p class="text-gray-600 mt-2 text-sm">
                Teléfono: {{ randomBusiness.phone }}
              </p>
              <p class="text-gray-600 mt-2 text-sm">
                Calificación:
                <span v-for="n in Math.floor(randomBusiness.rating)" :key="n">
                  <i class="fas fa-star mr-1 text-teal-400"></i>
                </span>
                <span
                  v-for="n in 5 - Math.floor(randomBusiness.rating)"
                  :key="'empty-' + n"
                >
                  <i class="fas fa-star mr-1 text-gray-300"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import LoadingSpinner from "@/components/LoadingComponent.vue";

onMounted(() => {
  fetchBusinesses();
});
const ruta = ref(import.meta.env.VITE_BASE_URL);
const businesses = ref([]);
const randomBusiness = ref(null);
const showModal = ref(false);
const isRolling = ref(false);

const activeBusinesses = computed(() => businesses.value.filter((b) => b.is_active));

const fetchBusinesses = async () => {
  try {
    const response = await axios.get(`${ruta.value}/business`);
    if (Array.isArray(response.data)) {
      businesses.value = response.data.map((b) => ({
        ...b,
        rating: b.rating !== null ? parseFloat(b.rating) : null,
      }));
    } else {
      console.error("Respuesta inesperada:", response.data);
      businesses.value = [];
    }
  } catch (error) {
    console.error("Error fetching businesses:", error);
    businesses.value = [];
  }
};

function tryLuck() {
  if (activeBusinesses.value.length === 0) {
    randomBusiness.value = null;
    return;
  }

  isRolling.value = true;

  const rollInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * activeBusinesses.value.length);
    randomBusiness.value = activeBusinesses.value[randomIndex];
  }, 100);

  setTimeout(() => {
    clearInterval(rollInterval);
    let finalBusiness;
    do {
      const randomIndex = Math.floor(Math.random() * activeBusinesses.value.length);
      finalBusiness = activeBusinesses.value[randomIndex];
    } while (finalBusiness === randomBusiness.value && activeBusinesses.value.length > 1);

    randomBusiness.value = finalBusiness;
    isRolling.value = false;
    showModal.value = true;
  }, 1200);
}

function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.3s ease;
}
.zoom-enter-from {
  transform: scale(0.7);
  opacity: 0;
}
.zoom-enter-to {
  transform: scale(1);
  opacity: 1;
}
.zoom-leave-from {
  transform: scale(1);
  opacity: 1;
}
.zoom-leave-to {
  transform: scale(0.7);
  opacity: 0;
}

@keyframes pop {
  0% {
    transform: scale(0.7);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.animate-pop {
  animation: pop 0.3s ease;
}
</style>
