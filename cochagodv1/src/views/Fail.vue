<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Imagen de fondo -->
    <img
      src="../assets/imgcochagod/photo-1585442170475-b0581c1f824c.avif"
      alt="Cochago Background"
      class="w-full h-full opacity-90"
    />

    <!-- Capa oscura encima de la imagen -->
    <div class="absolute inset-0 bg-black/60 bg-opacity-60"></div>

    <!-- Contenido centrado -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
    >
      <span class="text-4xl md:text-6xl font-bold text-orange-400 mb-4"
        >Cocha
        <span class="relative text-4xl md:text-6xl font-bold text-teal-400"
          >GO!</span
        ></span
      >

      <div class="loader mb-6"></div>
      <p
        class="text-lg md:text-xl max-w-2xl font-medium text-gray-100 leading-relaxed tracking-wide"
      >
        Estamos preparando algo especial para nuestra querida Cochabamba. Muy pronto
        podrás
        <span class="text-amber-200 font-semibold">descubrir</span> sus rincones,
        <span class="text-emerald-200 font-semibold">conectar</span> con su gente y
        <span class="text-sky-200 font-semibold">vivir</span> lo mejor de esta ciudad que
        tanto nos inspira.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
  border: 5px solid #444;
  border-top: 5px solid #e75b34;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
