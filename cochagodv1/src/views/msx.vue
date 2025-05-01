<template>
  <div class="relative w-full h-screen overflow-hidden">
    <img
      src="../assets/imgcochagod/photo-1585442170475-b0581c1f824c.avif"
      alt="Cochago Background"
      class="w-full h-full object-cover opacity-90"
    />

    <div class="absolute inset-0 bg-black/60 bg-opacity-60"></div>

    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
    >
      <span class="text-4xl md:text-6xl font-bold text-orange-400 mb-4">
        Comunícate con nosotros,
      </span>

      <span class="text-4xl md:text-6xl font-bold text-teal-400 mb-4">
        para ser uno de nuestros afiliados
      </span>

      <p
        class="text-lg md:text-xl max-w-2xl font-medium text-gray-100 leading-relaxed tracking-wide mb-8"
      >
        "Estamos buscando negocios familiares, locales o establecidos, Si te apasiona lo
        que haces y te gustaría formar parte de este hermoso proyecto, ¡te invitamos a
        unirte a nosotros! Juntos podemos crecer, conectar con más personas y hacer
        brillar nuestra querida llajta. Tu negocio tiene un espacio en nuestro corazón y
        en nuestra red."
        <span class="text-amber-200 font-semibold">Contactanos</span> y obtener más
        información.
      </p>

      <div class="mt-6 space-y-4">
        <a
          href="https://wa.me/59175946778"
          class="block text-xl text-teal-500 hover:text-orange-400 font-semibold"
          target="_blank"
        >
          Envianos un mensaje por WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.loader {
  border: 5px solid #444;
  border-top: 5px solid #e75b34;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
</style>
