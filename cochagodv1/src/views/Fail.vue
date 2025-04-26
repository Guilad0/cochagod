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
        Cocha
        <span class="text-teal-400">GO!</span>
      </span>

      <div class="loader mb-6"></div>

      <p
        class="text-lg md:text-xl max-w-2xl font-medium text-gray-100 leading-relaxed tracking-wide mb-8"
      >
        Estamos preparando algo especial para nuestra querida Cochabamba. Muy pronto
        podrás
        <span class="text-amber-200 font-semibold">descubrir</span> sus rincones,
        <span class="text-emerald-200 font-semibold">conectar</span> con su gente y
        <span class="text-sky-200 font-semibold">vivir</span> lo mejor de esta ciudad que
        tanto nos inspira.
      </p>

      <div class="flex gap-4 text-4xl md:text-6xl font-extrabold text-orange-400">
        <div class="flex flex-col items-center">
          <span>{{ days }}</span>
          <small class="text-sm text-gray-300">días</small>
        </div>
        <div class="flex flex-col items-center">
          <span>{{ hours }}</span>
          <small class="text-sm text-gray-300">horas</small>
        </div>
        <div class="flex flex-col items-center">
          <span>{{ minutes }}</span>
          <small class="text-sm text-gray-300">min</small>
        </div>
        <div class="flex flex-col items-center">
          <span>{{ seconds }}</span>
          <small class="text-sm text-gray-300">seg</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdownDate: new Date("2025-04-27T00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      if (distance < 0) {
        clearInterval(this.timer);
        this.days = this.hours = this.minutes = this.seconds = 0;
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    },
  },
};
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
