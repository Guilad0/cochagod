<template>
  <div id="page-top">
    <div class="flex">
      <div
        class="hidden md:block w-64 bg-blue-600/10 text-gray-800 fixed h-screen p-4 overflow-y-auto shadow-md"
      >
        <nav>
          <ul class="space-y-3">
            <li>
              <a
                href="#page-top"
                class="px-3 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors flex"
                :class="{ 'bg-blue-400 text-white': activeTerm === 'page-top' }"
                @click="activeTerm = 'page-top'"
              >
                Inicio
              </a>
            </li>
            <li v-for="(term, index) in terms" :key="index">
              <a
                :href="'#' + term.id"
                class="block px-3 py-2 rounded hover:bg-blue-400 hover:text-white transition-colors"
                :class="{ 'bg-blue-400 text-white': activeTerm === term.id }"
                @click="activeTerm = term.id"
              >
                {{ term.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="w-full bg-white text-gray-800 md:ml-64" id="main-content">
        <!-- estos estilos cambiar para todas las vistas cpge -->
        <div class="relative mb-10">
          <img
            v-if="coverImages && coverImages.url_image"
            class="w-full h-[320px] rounded shadow object-cover"
            :src="coverImages.url_image"
            alt="IMG_COVER"
          />
          <div
            v-else
            class="w-full h-[320px] rounded shadow bg-gradient-to-br from-blue-600 to-gray-800"
          />

          <div
            class="absolute -bottom-10 left-4 bg-blue-600 border-2 border-white shadow-lg w-[160px] h-[160px] flex items-center justify-center rounded-full"
          >
            <img
              class="object-cover h-full w-full rounded-full"
              :src="alojamiento?.logo_url || cochago"
              alt="Logo pequeño"
            />
          </div>

          <div class="absolute bottom-0 left-50 p-2">
            <h2 class="text-xl sm:text-2xl font-bold text-white">
              {{ alojamiento?.name }}
            </h2>
            <p class="text-base sm:text-lg text-white">{{ alojamiento?.address }}</p>
          </div>
        </div>
        <br />
        <div class="px-4">
          <div id="acceptance" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
              Descripción
            </h2>
            <p v-html="alojamiento?.description || 'Sin descripción disponible'"></p>
          </div>

          <div id="description" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
              Productos / Servicios
            </h2>
            <p v-html="alojamiento?.servicios || 'Sin descripción disponible'"></p>
          </div>

          <div id="gallery" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
              Galería
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(img, index) in galleryImages"
                :key="index"
                class="bg-white rounded shadow-md overflow-hidden"
              >
                <img
                  :src="
                    img.url_image ||
                    'https://via.placeholder.com/300x200.png?text=Sin+imagen'
                  "
                  :alt="img.titulo || `Imagen ${index + 1}`"
                  class="w-full h-48 object-cover cursor-pointer"
                  @click="openLightbox(img)"
                />
                <div class="p-2 text-sm text-center text-gray-600">
                  {{ img.titulo || `Imagen ${index + 1}` }}
                </div>
              </div>
            </div>
          </div>

          <div id="working-hours" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
              Horarios de Atención
            </h2>
            <p>
              Lunes a viernes: 9:00 am - 6:00 pm<br />
              Sábados: 9:00 am - 1:00 pm
            </p>
          </div>

          <div id="payments" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
              Formas de Pago
            </h2>
            <p>Efectivo, tarjeta de crédito, transferencia bancaria.</p>
          </div>

          <div id="contact" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
              Contactos
            </h2>
            <i class="fas fa-phone-alt text-green-400 pr-2"></i>
            <a
              :href="`tel:${alojamiento.phone}`"
              target="_blank"
              class="text-gray-600 hover:text-blue-500 transition-colors"
            >
              {{ alojamiento?.phone || "Sin teléfono disponible" }}
            </a>

            <br />
            <i class="fas fa-phone-alt text-green-400 pr-2"></i>
            <a
              :href="`tel:${alojamiento.phone_two}`"
              target="_blank"
              class="text-gray-600 hover:text-blue-500 transition-colors"
            >
              {{ alojamiento?.phone_two || "Sin teléfono disponible" }}
            </a>

            <br />

            <i class="fas fa-envelope text-blue-600 mr-2"></i>
            <a
              :href="`mailto:${alojamiento.email}`"
              target="_blank"
              class="text-gray-600 hover:text-blue-600"
            >
              {{ alojamiento.email }}
            </a>
            <br />

            <i class="fab fa-facebook-f text-blue-600 mr-2"></i>
            <a
              :href="alojamiento.link_facebook"
              target="_blank"
              class="text-gray-600 hover:text-blue-600"
            >
              Facebook
            </a>
            <br />

            <i class="fab fa-instagram text-rose-400 mr-2"></i>
            <a
              :href="alojamiento.links"
              target="_blank"
              class="text-gray-600 hover:text-blue-600"
            >
              Instagram
            </a>
            <br />

            <i class="fab fa-tiktok mr-2"></i>
            <a
              :href="alojamiento.link_tiktok"
              target="_blank"
              class="text-gray-600 hover:text-blue-600"
            >
              TikTok
            </a>
            <br />

            <i class="fas fa-map-marker-alt text-red-500 mr-3"></i>
            <a
              :href="alojamiento.location"
              target="_blank"
              class="text-gray-600 hover:text-blue-600"
            >
              {{ alojamiento.address }}
            </a>
          </div>

          <div id="qr" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
              Compartir
            </h2>
            <div class="flex justify-center">
              <div class="bg-white rounded shadow-md overflow-hidden w-64 cursor-pointer">
                <img
                  :src="alojamiento.url_qr || cochago"
                  @click="openLightbox(alojamiento.url_qr || cochago)"
                />
                <div class="p-2 text-sm text-center text-gray-600">
                  Escanea este código QR para compartir.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="lightboxVisible"
      class="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
      @click="closeLightbox"
    >
      <span
        class="absolute top-4 right-6 text-white text-3xl font-bold cursor-pointer"
        @click.stop="closeLightbox"
      >
        &times;
      </span>
      <img
        :src="selectedImage.url_image || selectedImage"
        alt="Imagen ampliada"
        class="max-w-full max-h-[80vh] rounded shadow-lg mb-4"
        @click.stop
      />
      <div class="text-white text-center max-w-lg px-4">
        <h3 class="text-xl font-semibold mb-2">{{ selectedImage.titulo || "Imagen" }}</h3>
        <p>{{ selectedImage.descripcion || "Sin descripción disponible" }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import cochago from "/cochago.png";

const route = useRoute();
const alojamiento = ref({});
const ruta = ref(import.meta.env.VITE_BASE_URL);

const lightboxVisible = ref(false);
const selectedImage = ref(null);

function openLightbox(img) {
  selectedImage.value = img;
  lightboxVisible.value = true;
}

function closeLightbox() {
  lightboxVisible.value = false;
  selectedImage.value = null;
}

const terms = ref([]);
const activeTerm = ref("page-top");

const getData = async () => {
  const id = route.params.id;
  const res = await axios.get(`${ruta.value}/business/getall/${id}`);
  alojamiento.value = res.data;

  terms.value = [
    {
      id: "acceptance",
      title: "Descripción",
      // content: alojamiento.value.description || "Sin descripción disponible",
    },
    {
      id: "description",
      title: "Productos / Servicios",
      // content: alojamiento.value.servicios || "Sin descripción disponible",
    },
    {
      id: "gallery",
      title: "Galería",
      content: "",
    },
    {
      id: "working-hours",
      title: "Horarios de Atención",
      content: "",
    },
    {
      id: "certificados",
      title: "Certificados",
      content: "",
    },
    {
      id: "payments",
      title: "Formas de Pago",
      content: "Efectivo, tarjeta de crédito, transferencia bancaria.",
    },
    {
      id: "qr",
      title: "Compartir",
      content: "",
    },
  ];
};

onMounted(() => {
  getData();
});
const getImagesByType = (type) => {
  if (!alojamiento.value || !alojamiento.value.images) {
    return type === "cover" ? null : [];
  }

  if (type === "cover") {
    return alojamiento.value.images.find((img) => img.type === type) || null;
  }

  return alojamiento.value.images.filter((img) => img.type === type);
};

const coverImages = computed(() => getImagesByType("cover"));
const galleryImages = computed(() => getImagesByType("galeria"));
const qrImage = computed(() => getImagesByType("qr"));
const certificadoImage = computed(() => getImagesByType("certificado"));
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
