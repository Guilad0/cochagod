<template>
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
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
// WhatsApp button logic
const whatsappNumbers = ["59179367210", "59175946778"];
const randomWhatsAppLink = ref("");
const route = useRoute();

// Function to set a random WhatsApp link
const setRandomWhatsAppLink = () => {
  const randomNumber =
    whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
  randomWhatsAppLink.value = `https://wa.me/${randomNumber}`;
};

// Set initial link and update on route change
setRandomWhatsAppLink();
watch(() => route.path, setRandomWhatsAppLink);
</script>

<style></style>
