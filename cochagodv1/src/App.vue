<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navfooter/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- <Navbar /> -->
    <div class="flex-1 flex">
      <RouterView class="w-full" />
    </div>
    <!-- <Footer /> -->
  </div>
</template>
