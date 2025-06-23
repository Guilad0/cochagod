<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
    <h2 class="text-xl font-bold text-center">🎨 Generador de QR Personalizado</h2>

    <!-- Campo para URL -->
    <div class="flex gap-2">
      <input v-model="url" type="text" placeholder="https://ejemplo.com" class="w-full border px-3 py-2 rounded" />
      <button @click="pegarDesdePortapapeles" class="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400 text-sm">
        Pegar
      </button>
    </div>

    <!-- Controles de personalización -->
    <div class="space-y-4 p-4 border rounded-lg">
      <h3 class="font-semibold">Personalización:</h3>
      
      <!-- Color del QR -->
      <div class="flex items-center gap-2">
        <label class="w-24">Color QR:</label>
        <input type="color" v-model="qrColor" class="h-8 w-8">
        <input type="color" v-model="qrBgColor" class="h-8 w-8 ml-2">
        <span class="text-xs">(Frente/Fondo)</span>
      </div>
      
      <!-- Logo central -->
      <div class="flex items-center gap-2">
        <label class="w-24">Logo:</label>
        <input type="file" @change="handleLogoUpload" accept="image/*" class="text-sm border p-1 rounded">
        <button v-if="logo" @click="removeLogo" class="text-red-500 text-sm">Quitar</button>
      </div>
      
      <!-- Tamaño del logo -->
      <div class="flex items-center gap-2">
        <label class="w-24">Tamaño logo:</label>
        <input type="range" v-model="logoSizePercentage" min="10" max="30" step="1" class="w-32">
        <span class="text-xs">{{ logoSizePercentage }}%</span>
      </div>
      
      <!-- Redondeo de bordes -->
      <div class="flex items-center gap-2">
        <label class="w-24">Bordes QR:</label>
        <input type="range" v-model="qrCornerRadius" min="0" max="50" step="1" class="w-32">
        <span class="text-xs">{{ qrCornerRadius }}px</span>
      </div>
      
      <!-- Marco estilo sticker -->
      <div class="flex items-center gap-2">
        <label class="w-24">Marco:</label>
        <select v-model="selectedFrame" class="border p-1 rounded text-sm">
          <option value="none">Ninguno</option>
          <option value="circle">Círculo</option>
          <option value="rounded">Redondeado</option>
          <option value="dotted">Punteado</option>
          <option value="solid">Sólido</option>
        </select>
        <input v-if="selectedFrame !== 'none'" type="color" v-model="frameColor" class="h-6 w-6">
      </div>
    </div>

    <!-- Botón Generar QR -->
    <button @click="generarQR" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
      Generar QR
    </button>

    <!-- Mensajes -->
    <div v-if="mensaje" class="text-center font-semibold" :class="mensaje.includes('✅') ? 'text-green-600' : 'text-red-600'">
      {{ mensaje }}
    </div>

    <!-- QR generado -->
    <div class="text-center" v-if="qrDataUrl">
      <div :class="['qr-container', frameClass]" :style="frameStyle">
        <img :src="qrDataUrl" alt="QR generado" class="mx-auto" :style="qrStyle" />
      </div>
      
      <a :href="qrDataUrl" download="qr.png" class="inline-block mt-4 text-blue-600 underline">
        Descargar QR
      </a>

      <!-- Compartir -->
      <div class="mt-4 space-y-2">
        <p class="text-gray-700 text-sm">Compartir:</p>
        <div class="flex justify-center gap-4">
          <a :href="`https://wa.me/?text=${encodeURIComponent(url)}`" target="_blank">📱 WhatsApp</a>
          <a :href="`mailto:?subject=Te comparto un enlace&body=${encodeURIComponent(url)}`" target="_blank">📧 Email</a>
          <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`" target="_blank">🌐 Facebook</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import QRCode from 'qrcode'

// Variables reactivas
const url = ref('')
const qrDataUrl = ref('')
const mensaje = ref('')
const qrColor = ref('#000000')
const qrBgColor = ref('#ffffff')
const logo = ref(null)
const logoSizePercentage = ref(20)
const qrCornerRadius = ref(0)
const selectedFrame = ref('none')
const frameColor = ref('#000000')

// Computed
const qrStyle = computed(() => ({
  borderRadius: `${qrCornerRadius.value}px`,
  maxWidth: '100%',
  height: 'auto'
}))

const frameClass = computed(() => ({
  none: '',
  circle: 'qr-frame-circle',
  rounded: 'qr-frame-rounded',
  dotted: 'qr-frame-dotted',
  solid: 'qr-frame-solid'
}[selectedFrame.value]))

const frameStyle = computed(() => ({
  borderColor: frameColor.value,
  display: 'inline-block',
  padding: selectedFrame.value !== 'none' ? '10px' : '0'
}))

// Métodos
const esURLValida = (string) => {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

const generarQR = async () => {
  if (!url.value) {
    mensaje.value = '❌ Por favor ingresa una URL'
    return
  }
  
  if (!esURLValida(url.value)) {
    mensaje.value = '❌ URL inválida. Debe comenzar con http:// o https://'
    return
  }
  
  try {
    const qrSize = 300
    const canvas = document.createElement('canvas')
    canvas.width = qrSize
    canvas.height = qrSize

    // Generar QR base
    await QRCode.toCanvas(canvas, url.value, {
      width: qrSize,
      margin: 2,
      color: {
        dark: qrColor.value,
        light: qrBgColor.value
      }
    })

    // Añadir logo si existe
    if (logo.value) {
      await addLogoToCanvas(canvas, logo.value, logoSizePercentage.value)
    }

    // Aplicar bordes redondeados
    qrDataUrl.value = qrCornerRadius.value > 0 
      ? applyRoundedCorners(canvas, qrCornerRadius.value) 
      : canvas.toDataURL('image/png')

    mensaje.value = '✅ ¡QR generado correctamente!'
  } catch (err) {
    console.error('Error generando QR:', err)
    mensaje.value = '❌ Error al generar el QR'
  }
}

const addLogoToCanvas = (canvas, logoSrc, sizePercentage) => {
  return new Promise((resolve) => {
    const ctx = canvas.getContext('2d')
    const logoImg = new Image()
    logoImg.src = logoSrc
    
    logoImg.onload = () => {
      const logoWidth = canvas.width * (sizePercentage / 100)
      const logoHeight = logoWidth * (logoImg.height / logoImg.width)
      const x = (canvas.width - logoWidth) / 2
      const y = (canvas.height - logoHeight) / 2

      // Fondo blanco para el logo
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(x, y, logoWidth, logoHeight)
      
      // Dibujar logo
      ctx.drawImage(logoImg, x, y, logoWidth, logoHeight)
      resolve()
    }
  })
}

const applyRoundedCorners = (sourceCanvas, radius) => {
  const canvas = document.createElement('canvas')
  canvas.width = sourceCanvas.width
  canvas.height = sourceCanvas.height
  const ctx = canvas.getContext('2d')
  
  ctx.beginPath()
  ctx.roundRect(0, 0, canvas.width, canvas.height, radius)
  ctx.clip()
  ctx.drawImage(sourceCanvas, 0, 0)
  
  return canvas.toDataURL('image/png')
}

const handleLogoUpload = (event) => {
  const file = event.target.files[0]
  if (file && file.type.match('image.*')) {
    const reader = new FileReader()
    reader.onload = (e) => {
      logo.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeLogo = () => {
  logo.value = null
}

const pegarDesdePortapapeles = async () => {
  try {
    const text = await navigator.clipboard.readText()
    if (text) {
      url.value = text
      mensaje.value = '📋 URL pegada desde el portapapeles'
      setTimeout(() => mensaje.value = '', 3000)
    }
  } catch (err) {
    mensaje.value = '⚠️ No se pudo acceder al portapapeles'
    console.error('Error al pegar:', err)
  }
}
</script>

<style>
.qr-frame-circle {
  border-radius: 50%;
  border: 3px solid;
}

.qr-frame-rounded {
  border-radius: 20px;
  border: 3px solid;
}

.qr-frame-dotted {
  border-radius: 10px;
  border: 3px dotted;
}

.qr-frame-solid {
  border-radius: 5px;
  border: 3px solid;
}

.qr-container {
  position: relative;
  margin: 1rem auto;
  display: inline-block;
}

/* Estilos para controles */
input[type="color"] {
  -webkit-appearance: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 0;
}

input[type="range"] {
  -webkit-appearance: none;
  height: 6px;
  background: #ddd;
  border-radius: 3px;
  width: 100%;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #3b82f6;
  border-radius: 50%;
  cursor: pointer;
}

button {
  transition: all 0.2s;
}

button:hover {
  filter: brightness(90%);
  transform: translateY(-1px);
}
</style>