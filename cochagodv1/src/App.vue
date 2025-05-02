<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navfooter/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";

// Existing route logic
const route = useRoute();
const is404 = computed(() => route.name === "NotFound");

// WhatsApp button logic
const whatsappNumbers = ['59179367210', '59175946778'];
const randomWhatsAppLink = ref('');

// Function to set a random WhatsApp link
const setRandomWhatsAppLink = () => {
  const randomNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
  randomWhatsAppLink.value = `https://wa.me/${randomNumber}`;
};

// Set initial link and update on route change
setRandomWhatsAppLink();
watch(() => route.path, setRandomWhatsAppLink);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar v-if="!is404" />
    <div class="flex-1 flex">
      <RouterView class="w-full" />
    </div>
    <Footer v-if="!is404" />

    <!-- WhatsApp floating button -->
    <a
      v-if="!is404"
      :href="randomWhatsAppLink"
      target="_blank"
      rel="noopener"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
      aria-label="WhatsApp"
    >
      <i class="fab fa-whatsapp text-xl"></i>
    </a>
  </div>
</template>