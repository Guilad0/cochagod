<script setup>
import Cochamodel from "@/components/ModelCocha.vue";
import Entretenimiento from "./Entretenimiento.vue";
import Gastronomia from "./Gastronomia.vue";
import Negocios from "./Negocios.vue";
import Profesiones from "./Profesiones.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img src="../assets/cochago.jpg  " alt="" class="w-full h-screen" />
    <div class="w-full h-screen">
      <Cochamodel />
    </div>
    <div class="w-full h-screen bg-blue-600"><Entretenimiento /></div>
    <div class="w-full h-screen bg-green-600"><Profesiones /></div>
    <div class="w-full h-screen bg-yellow-600"><Negocios /></div>
    <div class="w-full h-screen bg-purple-600"><Gastronomia /></div>
  </div>
</template>
