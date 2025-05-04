<script setup>
import Cochamodel from "@/components/ModelCocha.vue";
import Descubre from "@/components/Descubre.vue";
import HPage from "@/components/HPage.vue";
import Msx from "./msx.vue";
import QuienesSomos from "@/views/QuienesSomos.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full h-screen"><HPage /></div>
    <div class="w-full h-screen"><Cochamodel /></div>
    <div class="w-full h-screen"><Descubre /></div>
    <div class="w-full h-screen"><QuienesSomos /></div>
    <div class="w-full h-screen"><Msx /></div>
  </div>
</template>
