<template>
  <footer class="bg-white text-sky-500 pt-10 w-full">
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
    >
      <div class="flex flex-col items-start">
        <!-- <img src="/cochago.ico" alt="Logo" class="h-15 w-30 mb-4" /> -->
        <div class="primary-font text-5xl mb-7 flex items-center">
          <span class="text-orange-500">Cocha</span><span class="text-sky-500">Go!</span>
        </div>
        <p class="text-sm leading-relaxed">
          Hecho con el corazón en la Llajta y el estómago lleno de pique macho. Nuestro
          trabajo es mostrarte el verdadero sabor de Cochabamba, ese que no aparece en las
          guías turísticas.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-bold text-orange-500 mb-4">Enlaces rápidos</h3>
        <ul class="space-y-2 px-4">
          <li>
            <RouterLink to="/" class="hover:text-orange-500 transition"
              >Inicio</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/" class="hover:text-teal-400 transition text-teal-500"
              >Comercios</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/" class="hover:text-orange-400 transition text-orange-500"
              >Servicios</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/" class="hover:text-pink-400 transition text-pink-400"
              >Entretenimiento</RouterLink
            >
          </li>

          <li>
            <RouterLink to="/" class="hover:text-purple-400 transition text-purple-500"
              >Alojamiento</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/" class="hover:text-blue-400 transition text-blue-500"
              >Turismo</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/" class="hover:text-teal-400 transition text-teal-500"
              >FaQs</RouterLink
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold text-orange-500 mb-4">Contáctanos</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center gap-2">
            <i class="fab fa-whatsapp text-green-500"></i>
            <a
              href="https://wa.me/59179367210"
              target="_blank"
              rel="noopener"
              class="hover:text-orange-500 transition"
              >+591 79367210</a
            >
          </li>
          <li class="flex items-center gap-2">
            <i class="fab fa-whatsapp text-green-500"></i>
            <a
              href="https://wa.me/59175946778"
              target="_blank"
              rel="noopener"
              class="hover:text-orange-500 transition"
              >+591 75946778</a
            >
          </li>
          <li class="flex items-center gap-2">
            <i class="fab fa-whatsapp text-green-500"></i>
            <a
              href="https://wa.me/59161602302"
              target="_blank"
              rel="noopener"
              class="hover:text-orange-500 transition"
              >+591 61602302</a
            >
          </li>
          <li class="flex items-center gap-2">
            <i class="fas fa-map-marker-alt text-red-500"></i>
            <span>Cochabamba, Bolivia</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold text-orange-500 mb-4">Síguenos</h3>
        <div class="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61575809522361"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="bg-sky-500 hover:bg-blue-500 text-white w-9 h-9 flex items-center justify-center rounded-full transition"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/cocha.go/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="bg-sky-500 hover:bg-pink-500 text-white w-9 h-9 flex items-center justify-center rounded-full transition"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@cochago"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            class="bg-sky-500 hover:bg-black text-white w-9 h-9 flex items-center justify-center rounded-full transition"
          >
            <i class="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 mt-10"></div>

    <div class="text-center py-6 text-sm">
      <p>© {{ currentYear }} CochaGo! Todos los derechos reservados.</p>
      <div class="mt-2 flex justify-center space-x-4 text-sky-500">
        <RouterLink to="/politica" class="hover:text-orange-500 transition"
          >Política de Privacidad</RouterLink
        >
        <RouterLink to="/terminos" class="hover:text-orange-500 transition"
          >Términos de Servicio</RouterLink
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
