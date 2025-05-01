<script setup>
import Cochamodel from "@/components/ModelCocha.vue";
// import Entretenimiento from "./Entretenimiento.vue";
// import Gastronomia from "./Gastronomia.vue";
// import Negocios from "./Negocios.vue";
// import Profesiones from "./Profesiones.vue";
import Descubre from "@/components/Descubre.vue";
import HPage from "@/components/HPage.vue";
import Msx from "./msx.vue";
import QuienesSomos from "@/views/QuienesSomos.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full h-screen"><HPage /></div>
    <div class="w-full h-screen">
      <Cochamodel />
    </div>
    <!-- <div class="w-full h-screen bg-blue-600"><Entretenimiento /></div>
    <div class="w-full h-screen bg-green-600"><Profesiones /></div>
    <div class="w-full h-screen bg-yellow-600"><Negocios /></div>
    <div class="w-full h-screen bg-purple-600"><Gastronomia /></div> -->
    <div class="w-full h-screen"><Descubre /></div>
    <!-- <div class="w-full h-screen"><Pierdete /></div> -->
    <div class="w-full h-screen"><QuienesSomos /></div>
    <div class="w-full h-screen"><Msx /></div>
  </div>
</template>
