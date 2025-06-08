<script setup>
import Navbar from "./components/navfooter/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import WhatsappComponent from "./components/WhatsappComponent.vue";

const route = useRoute();
const is404 = computed(() => route.name === "NotFound");
const isDetailView = computed(
  () =>
    route.name === "detalleServicio" ||
    route.name === "detalleTurismo" ||
    route.name === "detalleAlojamiento" ||
    route.name === "detalleEntretenimiento" ||
    route.name === "detalleNegocio"
);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar v-if="!is404" class="" />
    <div class="flex-1 flex">
      <RouterView class="w-full pt-16" />
    </div>
    <Footer v-if="!is404 && !isDetailView" />
    <WhatsappComponent />
  </div>
</template>
