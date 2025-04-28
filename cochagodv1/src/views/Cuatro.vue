<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <!-- <img
      :src="NotFoundImage"
      alt="Página no encontrada"
      class="w-full h-auto object-cover"
    /> -->
    <div
      class="bg-white bg-opacity-80 p-8 rounded-xl shadow-2xl text-center max-w-lg mx-4 animate-fadeIn"
    >
      <h1 class="text-6xl font-bold text-teal-600 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        ¡Uy! No encontramos esta página.
      </h2>
      <p class="text-gray-600 mb-6">
        Puede que la dirección esté mal escrita o que el contenido ya no exista. ¡No te
        preocupes! Te ayudamos a volver al inicio.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
      >
        Volver al inicio
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}
</style>
