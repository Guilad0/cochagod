<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
    <h2 class="text-xl font-bold text-center">🔷 Generador de QR</h2>
    <input v-model="url" type="text" placeholder="https://guiadelaciudad.com/tarjetas/juanperez"
      class="w-full border px-3 py-2 rounded" />
    <button @click="generarQR" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
      Generar QR
    </button>

    <div class="text-center" v-if="qrDataUrl">
      <img :src="qrDataUrl" alt="QR generado" class="mx-auto my-4" />
      <a :href="qrDataUrl" download="qr.png" class="text-blue-600 underline">
        Descargar QR
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QRCode from 'qrcode'

const url = ref('')
const qrDataUrl = ref('')

const generarQR = async () => {
  if (!url.value) {
    alert('Por favor ingresa una URL válida.')
    return
  }
  try {
    qrDataUrl.value = await QRCode.toDataURL(url.value, {
      width: 300,
      margin: 2,
    })
  } catch (err) {
    console.error('Error generando QR:', err)
    alert('Ocurrió un error al generar el QR.')
  }
}
</script>
