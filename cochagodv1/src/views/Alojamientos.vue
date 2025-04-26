<template>
  <div class="">
    <header class="shadow-md mt-13">
      <div class="container mx-auto px-3 py-4 bg-purple-600">
        <h1 class="text-3xl font-bold text-white text-center">
          Nuestros Alojamientos Afiliados
        </h1>
        <p class="mt-2 text-white text-center">
          Desde calidad y precio hasta experiencias inolvidables: los mejores alojamientos
          de Cochabamba te esperan.
        </p>
      </div>
    </header>

    <section class="bg-white shadow-sm sticky top-15 z-10">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div
            class="search-box flex-1 bg-white rounded-lg border border-gray-300 flex items-center px-4 py-2 transition-all w-full"
          >
            <i class="fas fa-search text-gray-400 mr-2"></i>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar negocios..."
              class="w-full focus:outline-none text-gray-700 placeholder-gray-400"
              @input="filterBusinesses"
            />
          </div>

          <div class="w-full md:w-auto">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="filterByCategory(category.id)"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 hover:bg-teal-100',
                ]"
              >
                {{ category.name }}
              </button>
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center">
            <label class="mr-2 text-sm text-gray-600">Ordenar por:</label>
            <select
              v-model="sortBy"
              @change="sortBusinesses"
              class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="featured">Destacados</option>
              <option value="rating">Mejor valorados</option>
              <option value="newest">Novedades</option>
              <option value="name">A-Z</option>
            </select>
          </div>

          <div class="flex items-center">
            <label class="mr-2 text-sm text-gray-600">Zona:</label>
            <select
              v-model="selectedZone"
              @change="filterByZone"
              class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Todas</option>
              <option v-for="zone in zones" :value="zone.id" :key="zone.id">
                {{ zone.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <main class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-6">
        <p class="text-gray-600" v-if="!loading">
          Mostrando <span class="font-medium">{{ filteredBusinesses.length }}</span> de
          <span class="font-medium">{{ totalBusinesses }}</span> negocios
        </p>
        <p class="text-gray-600" v-else>Cargando negocios...</p>

        <div class="flex items-center">
          <span class="text-sm text-gray-600 mr-2">Vista:</span>
          <button
            @click="viewMode = 'grid'"
            :class="[
              'p-2',
              viewMode === 'grid' ? 'text-teal-600' : 'text-gray-400 hover:text-teal-600',
            ]"
          >
            <i class="fas fa-th-large"></i>
          </button>
          <button
            @click="viewMode = 'list'"
            :class="[
              'p-2',
              viewMode === 'list' ? 'text-teal-600' : 'text-gray-400 hover:text-teal-600',
            ]"
          >
            <i class="fas fa-list"></i>
          </button>
        </div>
      </div>

      <div v-if="filteredBusinesses.length === 0 && !loading" class="text-center py-12">
        <i class="fas fa-store-slash text-4xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-medium text-gray-600">No se encontraron negocios</h3>
        <p class="text-gray-500 mt-2">Prueba con otros filtros o términos de búsqueda</p>
        <button
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
        >
          Reiniciar filtros
        </button>
      </div>

      <div
        v-else
        :class="[
          'grid gap-6',
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1',
        ]"
      >
        <div
          v-for="business in filteredBusinesses"
          :key="business.id"
          class="business-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
        >
          <div class="relative">
            <img
              :src="
                business.image ||
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              "
              :alt="business.name"
              class="w-full h-48 object-cover"
            />
            <div
              v-if="business.isFeatured"
              class="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded"
            >
              Destacado
            </div>
            <div
              v-if="business.promotion"
              class="absolute top-2 left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded"
            >
              Promoción
            </div>
            <div
              class="absolute bottom-2 right-2 bg-white text-yellow-500 text-sm font-bold px-2 py-1 rounded flex items-center"
            >
              <i class="fas fa-star mr-1"></i> {{ business.rating.toFixed(1) }}
            </div>
          </div>
          <div class="p-4">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-gray-800">{{ business.name }}</h3>
              <span
                :class="[
                  'text-xs px-2 py-1 rounded',
                  categoryClasses[business.category] || 'bg-gray-100 text-gray-800',
                ]"
              >
                {{ getCategoryName(business.category) }}
              </span>
            </div>
            <p class="text-gray-600 mt-1 flex items-center">
              <i class="fas fa-map-marker-alt text-teal-500 mr-1"></i>
              {{ business.address }}
            </p>
            <p class="text-gray-700 mt-3 text-sm">{{ business.description }}</p>

            <div
              class="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center"
            >
              <div class="flex">
                <i
                  :class="[
                    'mr-2',
                    business.phone
                      ? 'fas fa-phone-alt text-teal-500'
                      : 'fas fa-clock text-teal-500',
                  ]"
                ></i>
                <span class="text-sm text-gray-600">
                  {{ business.phone || `Abierto hasta ${business.closingTime}` }}
                </span>
              </div>
              <!-- <router-link
                  :to="`/negocios/${business.id}`"
                  class="text-teal-600 hover:text-teal-800 text-sm font-medium flex items-center"
                >
                  Ver más <i class="fas fa-chevron-right ml-1 text-xs"></i>
                </router-link> -->
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-8 flex justify-center"
        v-if="!loading && filteredBusinesses.length > 0"
      >
        <nav class="flex items-center space-x-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            :class="[
              'px-3 py-1 rounded border',
              currentPage === 1
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-500 hover:bg-gray-100',
            ]"
          >
            <i class="fas fa-chevron-left"></i>
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="[
              'px-3 py-1 rounded border',
              page === currentPage
                ? 'bg-teal-600 text-white border-teal-600'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100',
            ]"
          >
            {{ page }}
          </button>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            :class="[
              'px-3 py-1 rounded border',
              currentPage === totalPages
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-500 hover:bg-gray-100',
            ]"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </nav>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const businesses = ref([]);
const loading = ref(true);
const ruta = ref(import.meta.env.VITE_BASE_URL);

const searchQuery = ref("");
const selectedCategory = ref("all");
const selectedZone = ref("all");
const sortBy = ref("featured");
const viewMode = ref("grid");

const currentPage = ref(1);
const itemsPerPage = ref(6);

const categories = ref([
  { id: "all", name: "Todos" },
  { id: "restaurant", name: "Restaurantes" },
  { id: "cafe", name: "Cafeterías" },
  { id: "hotel", name: "Hoteles" },
  { id: "shop", name: "Tiendas" },
  { id: "service", name: "Servicios" },
  { id: "boliches", name: "Boliches" },
  { id: "other", name: "Otros" },
]);

const zones = ref([
  { id: "all", name: "Todas" },
  { id: "center", name: "Centro" },
  { id: "north", name: "Zona Norte" },
  { id: "south", name: "Zona Sur" },
  { id: "queru", name: "Queru Queru" },
  { id: "recoleta", name: "La Recoleta" },
]);

const categoryClasses = {
  restaurant: "bg-teal-100 text-teal-800",
  cafe: "bg-amber-100 text-amber-800",
  hotel: "bg-blue-100 text-blue-800",
  shop: "bg-green-100 text-green-800",
  service: "bg-red-100 text-red-800",
  boliches: "bg-purple-100 text-purple-800",
};

const fetchBusinesses = async () => {
  try {
    const response = await axios.get(`${ruta.value}/business/category/3`);
    if (Array.isArray(response.data)) {
      businesses.value = response.data.map((b) => ({
        ...b,
        rating: b.rating !== null ? parseFloat(b.rating) : null,
      }));
    } else {
      console.error("Respuesta inesperada:", response.data);
      businesses.value = [];
    }

    loading.value = false;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    businesses.value = [];
    loading.value = false;
  }
};

const filteredBusinesses = computed(() => {
  let result = [...businesses.value];

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (b) =>
        b.name.toLowerCase().includes(query) ||
        b.description.toLowerCase().includes(query) ||
        b.address.toLowerCase().includes(query)
    );
  }

  if (selectedCategory.value !== "all") {
    result = result.filter((b) => b.category === selectedCategory.value);
  }

  if (selectedZone.value !== "all") {
    result = result.filter((b) => b.zone === selectedZone.value);
  }

  switch (sortBy.value) {
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    case "name":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "featured":
    default:
      result.sort((a, b) => b.isFeatured - a.isFeatured || b.rating - a.rating);
  }

  const start = (currentPage.value - 1) * itemsPerPage.value;
  return result.slice(start, start + itemsPerPage.value);
});

const totalBusinesses = computed(() => {
  return businesses.value.length;
});

const totalPages = computed(() => {
  return Math.ceil(businesses.value.length / itemsPerPage.value);
});

const getCategoryName = (categoryId) => {
  const category = categories.value.find((c) => c.id === categoryId);
  return category ? category.name : "General";
};

const filterByCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  currentPage.value = 1;
};

const filterByZone = () => {
  currentPage.value = 1;
};

const sortBusinesses = () => {
  currentPage.value = 1;
};

const resetFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "all";
  selectedZone.value = "all";
  sortBy.value = "featured";
  currentPage.value = 1;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const goToPage = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  fetchBusinesses();
});
</script>

<style scoped>
.business-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.search-box:focus-within {
  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.2);
}
</style>
