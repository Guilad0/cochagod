<template>
  <footer class="bg-white text-teal-500 pt-10 w-full">
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
    >
      <div class="flex flex-col items-start">
        <img src="/cochago.ico" alt="Logo" class="h-15 mb-4 w-30" />
        <p class="text-sm leading-relaxed">
          Hecho con el corazón en la Llajta y el estómago lleno de pique macho. Nuestro
          trabajo es mostrarte el verdadero sabor de Cochabamba, ese que no aparece en las
          guías turísticas.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-bold text-orange-500 mb-4">Enlaces rápidos</h3>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/" class="hover:text-orange-500 transition"
              >Inicio</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink to="/about" class="hover:text-orange-500 transition"
              >Nosotros</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/services" class="hover:text-orange-500 transition"
              >Servicios</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-orange-500 transition"
              >Contacto</RouterLink
            >
          </li> -->
        </ul>
      </div>

      <!-- Sección 3: Contacto -->
      <div>
        <h3 class="text-lg font-bold text-orange-500 mb-4">Contactanos</h3>
        <ul class="space-y-3">
          <!-- <li class="flex items-center gap-2">
            <i class="fas fa-envelope"></i>
            <a href="mailto:CochaGo@gmail.com" class="hover:text-orange-500 transition"
              >CochaGo@gmail.com</a
            >
          </li> -->
          <li class="flex items-center gap-2">
            <i class="fab fa-whatsapp"></i>
            <a
              href="https://wa.me/59179367210"
              target="_blank"
              rel="noopener"
              class="hover:text-orange-500 transition"
            >
              +591 79367210
            </a>
          </li>
          <li class="flex items-center gap-2">
            <i class="fab fa-whatsapp"></i>
            <a
              href="https://wa.me/59175946778"
              target="_blank"
              rel="noopener"
              class="hover:text-orange-500 transition"
            >
              +591 75946778
            </a>
          </li>
          <li class="flex items-center gap-2">
            <i class="fab fa-whatsapp"></i>
            <a
              href="https://wa.me/59161602302"
              target="_blank"
              rel="noopener"
              class="hover:text-orange-500 transition"
            >
              +591 61602302
            </a>
          </li>
          <li class="flex items-center gap-2">
            <i class="fas fa-map-marker-alt"></i>
            <span>Cochabamba, Bolivia</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold text-orange-500 mb-4">Síguenos</h3>
        <div class="flex gap-4">
          <a
            href="#"
            aria-label="Facebook"
            class="bg-teal-500 hover:bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-full transition"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            class="bg-teal-500 hover:bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-full transition"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            aria-label="TikTok"
            class="bg-teal-500 hover:bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-full transition"
          >
            <i class="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 mt-10"></div>

    <div class="text-center py-6 text-sm">
      <p>&copy; {{ currentYear }} CochaGO. Todos los derechos reservados.</p>
      <div class="mt-2 flex justify-center space-x-4 text-teal-500">
        <RouterLink to="/privacy" class="hover:text-orange-500 transition"
          >Política de Privacidad</RouterLink
        >
        <RouterLink to="/terms" class="hover:text-orange-500 transition"
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
