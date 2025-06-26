<template>
  <div id="page-top">
    <div class="flex">
      <div
        class="hidden md:block w-64 bg-orange-600/10 text-gray-800 fixed h-screen overflow-y-auto shadow-md"
      >
        <nav>
          <ul class="space-y-3">
            <li>
              <a
                href="#descripcion"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'descripcion' }"
                @click="activeTerm = 'descripcion'"
              >
                Descripción del Profesional
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'servicios' }"
                @click="activeTerm = 'servicios'"
              >
                Productos y Servicios
              </a>
            </li>
            <li>
              <a
                href="#galeria"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'galeria' }"
                @click="activeTerm = 'galeria'"
              >
                Galería
              </a>
            </li>
            <li>
              <a
                href="#certificaciones"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'certificaciones' }"
                @click="activeTerm = 'certificaciones'"
              >
                Certificaciones
              </a>
            </li>

            <li>
              <a
                href="#horarios"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'horarios' }"
                @click="activeTerm = 'horarios'"
              >
                Horarios de Atención
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'contacto' }"
                @click="activeTerm = 'contacto'"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#pagos"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'pagos' }"
                @click="activeTerm = 'pagos'"
              >
                Formas de Pago
              </a>
            </li>
            <li>
              <a
                href="#qr"
                class="block px-3 py-2 rounded hover:bg-orange-400 hover:text-white transition-colors"
                :class="{ 'bg-orange-400 text-white': activeTerm === 'qr' }"
                @click="activeTerm = 'qr'"
              >
                Compartir
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="w-full bg-white text-gray-800 md:ml-64 px-4">
        <div class="relative mb-10">
          <img
            v-if="coverImages && coverImages.url_image"
            class="w-full h-[320px] rounded shadow object-cover"
            :src="coverImages.url_image"
            alt="IMG_COVER"
          />
          <div
            v-else
            class="w-full h-[320px] rounded shadow bg-gradient-to-br from-orange-400 to-pink-400"
          />
          <div class="absolute bottom-0 left-50 p-2">
            <h2 class="text-xl sm:text-2xl font-bold text-white">
              {{ servicio?.name }}
            </h2>
            <p class="text-base sm:text-lg text-white">{{ servicio?.address }}</p>
          </div>
          <div
            class="absolute -bottom-10 left-4 bg-orange-400 border-2 border-white shadow-lg w-[160px] h-[160px] flex items-center justify-center rounded-full"
          >
            <img
              class="object-cover h-full w-full rounded-full"
              :src="alojamiento?.logo_url || cochago"
              alt=""
            />
          </div>
        </div>
        <section id="descripcion" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400">
            Descripción del Profesional
          </h2>
          {{ servicio.description }}
        </section>

        <section id="servicios" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400">
            Productos y Servicios
          </h2>
          {{ servicio.servicios }}
        </section>

        <section id="galeria" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400">Galería</h2>
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
        </section>
        <section id="certificaciones" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400">Certificaciones</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="(img, index) in certificadoImage"
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
        </section>

        <section id="horarios" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400">
            Horarios de Atención
          </h2>
          Lunes a viernes: 9:00 am - 6:00 pm<br />
          Sábados: 9:00 am - 1:00 pm
        </section>
        <section id="contacto" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400 flex items-center">
            Contactos
          </h2>
          <i class="fas fa-phone-alt text-green-400 pr-2"></i>
          <a
            :href="`tel:${servicio.phone}`"
            target="_blank"
            class="text-gray-600 hover:text-orange-500 transition-colors"
          >
            {{ servicio?.phone || "Sin teléfono disponible" }}
          </a>

          <br />
          <i class="fas fa-phone-alt text-green-400 pr-2"></i>
          <a
            :href="`tel:${servicio.phone_two}`"
            target="_blank"
            class="text-gray-600 hover:text-orange-500 transition-colors"
          >
            {{ servicio?.phone_two || "Sin teléfono disponible" }}
          </a>

          <br />

          <i class="fas fa-envelope text-red-500 mr-2"></i>
          <a
            :href="`mailto:${servicio.email}`"
            target="_blank"
            class="text-gray-600 hover:text-orange-600"
          >
            {{ servicio.email }}
          </a>
          <br />

          <i class="fab fa-facebook-f text-blue-600 mr-2"></i>
          <a
            :href="servicio.link_facebook"
            target="_blank"
            class="text-gray-600 hover:text-orange-600"
          >
            Facebook
          </a>
          <br />

          <i class="fab fa-instagram text-rose-400 mr-2"></i>
          <a
            :href="servicio.links"
            target="_blank"
            class="text-gray-600 hover:text-orange-600"
          >
            Instagram
          </a>
          <br />

          <i class="fab fa-tiktok mr-2"></i>
          <a
            :href="servicio.link_tiktok"
            target="_blank"
            class="text-gray-600 hover:text-orange-600"
          >
            TikTok
          </a>
          <br />

          <i class="fas fa-map-marker-alt text-red-500 mr-3"></i>
          <a
            :href="servicio.location"
            target="_blank"
            class="text-gray-600 hover:text-orange-600"
          >
            {{ servicio.address }}
          </a>
        </section>

        <section id="pagos" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400">Formas de Pago</h2>
          <p>Efectivo, tarjeta de crédito, transferencia bancaria.</p>
        </section>

        <section id="qr" class="mb-12 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-4 text-orange-400">Compartir</h2>
          <div class="flex justify-center">
            <div class="bg-white rounded shadow-md overflow-hidden w-64 cursor-pointer">
              <img
                :src="servicio.url_qr || cochago"
                @click="openLightbox(servicio.url_qr || cochago)"
              />
              <div class="p-2 text-sm text-center text-gray-600">
                Escanea este código QR para compartir.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
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
        <p>{{ selectedImage.descripcion || "Cochago: Munaylla Llajta" }}</p>
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
const servicio = ref({});

const activeTerm = ref("descripcion");
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

const getData = async () => {
  const id = route.params.id;
  const res = await axios.get(`${ruta.value}/business/getall/${id}`);
  servicio.value = res.data;
};
const getImagesByType = (type) => {
  if (!servicio.value || !servicio.value.images) {
    return type === "cover" ? null : [];
  }

  if (type === "cover") {
    return servicio.value.images.find((img) => img.type === type) || null;
  }

  return servicio.value.images.filter((img) => img.type === type);
};

const coverImages = computed(() => getImagesByType("cover"));
const galleryImages = computed(() => getImagesByType("galeria"));
const qrImage = computed(() => getImagesByType("qr"));
const certificadoImage = computed(() => getImagesByType("certificado"));

onMounted(getData);
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
