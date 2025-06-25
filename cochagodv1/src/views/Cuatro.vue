<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <img
      src="https://latinosanbolivia2022.com/wp-content/uploads/2022/05/Vista_Aerea_del_Cristo_de_la_Concordia.jpg"
      alt="Página no encontrada"
      class="w-full h-screen object-cover absolute top-0 left-0 z-0 opacity-80"
    />
    <div
      class="bg-white bg-opacity-80 p-8 rounded-xl shadow-2xl text-center max-w-lg mx-4 animate-fadeIn"
    >
      <h1 class="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        ¡Uy! No encontramos esta página.
      </h2>
      <p class="text-gray-600 mb-6">
        Puede que la dirección esté mal escrita o que el contenido ya no exista. ¡No te
        preocupes! Te ayudamos a volver al inicio.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition duration-300"
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
  animation: fadeIn 1.6s ease forwards;
}
</style>
