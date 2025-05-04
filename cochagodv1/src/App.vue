<script setup>
import Navbar from "./components/navfooter/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import WhatsappComponent from "./components/WhatsappComponent.vue";

// Existing route logic
const route = useRoute();
const is404 = computed(() => route.name === "NotFound");
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar v-if="!is404" />
    <div class="flex-1 flex">
      <RouterView class="w-full" />
    </div>
    <Footer v-if="!is404" />
    <WhatsappComponent />
  </div>
</template>
