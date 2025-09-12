<script setup>
import { ref, onMounted, computed } from "vue";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, Environment } from "@tresjs/cientos";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const baseModel = ref(null);

onMounted(async () => {
  const loader = new OBJLoader();
  loader.load("/base.obj", (obj) => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    baseModel.value = obj;
  });
});

const photos = ref([
  {
    id: 1,
    title: "Atardecer en Cristo",
    location: "Cerro San Pedro",
    photographer: "María González",
    avatar: "/cochago.png",
    likes: 124,
    position: [-5, -3, 0],
    rotation: [0.2, 0.5, 0],
    scale: [3.5, 3.5, 3.5],
    color: "Oro",
    ranking: "Primero",

    cardPosition: { left: "15%", bottom: "20%" },
  },
  {
    id: 3,
    title: "Noche en la Plaza",
    location: "Plaza 14 de Septiembre",
    photographer: "Lucía Fernández",
    avatar: "/cochago.png",
    likes: 210,
    position: [0, -3, 0],
    rotation: [0.2, 0.5, 0],
    scale: [2.5, 2.5, 2.5],
    color: "Plata",
    ranking: "Segundo",
    cardPosition: { left: "50%", bottom: "15%", transform: "translateX(-50%)" },
  },
  {
    id: 2,
    title: "Vista desde Tunari",
    location: "Cordillera Tunari",
    photographer: "Juan Pérez",
    avatar: "/cochago.png",
    likes: 98,
    position: [5, -3, 0],
    rotation: [0.2, 0.5, 0],
    scale: [1.7, 1.7, 1.7],
    color: "Bronce",
    ranking: "Tercero",
    cardPosition: { right: "15%", bottom: "25%" },
  },
]);

const materialMap = {
  Oro: new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 1,
    roughness: 0.1,
  }),
  Plata: new THREE.MeshStandardMaterial({
    color: 0xc0c0c0,
    metalness: 1,
    roughness: 0.15,
  }),
  Bronce: new THREE.MeshStandardMaterial({
    color: 0xcd7f32,
    metalness: 1,
    roughness: 0.2,
  }),
};

const starGeometry = new THREE.BufferGeometry();
const starCount = 150;
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
  starPositions[i] = (Math.random() - 0.5) * 40;
}

starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.35,
  sizeAttenuation: true,
  transparent: true,
  opacity: 0.7,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const stars = new THREE.Points(starGeometry, starMaterial);

function animateFlashes() {
  requestAnimationFrame(animateFlashes);
  starMaterial.opacity = 0.5 + Math.sin(Date.now() * 0.005) * 0.4;
}
animateFlashes();

const orderedPhotos = computed(() =>
  [...photos.value].sort((a, b) => {
    const order = { Oro: 1, Plata: 2, Bronce: 3 };
    return order[a.color] - order[b.color];
  })
);
</script>

<template>
  <div
    class="w-full min-h-screen flex flex-col lg:flex-row bg-black primary-font font-light"
  >
    <div
      class="w-full lg:w-1/3 bg-black text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-center order-2 lg:order-1"
    >
      <h1
        class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 text-yellow-400 leading-tight"
      >
        Ranking de Fotos más Likeadas de Cochago
      </h1>
      <p class="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
        Explora las mejores fotos votadas por la comunidad cochala. Las figuras
        representan el podio de Oro, Plata y Bronce con sus respectivas cards
        interactivas.
      </p>

      <div class="block lg:hidden mt-6 space-y-4">
        <div
          v-for="photo in orderedPhotos"
          :key="photo.id"
          class="bg-gray-900/80 backdrop-blur rounded-xl p-4 shadow-lg hover:bg-gradient-to-br from-black via-emerald-700 to-black-800 transition-all duration-300 hover:scale-105"
        >
          <div class="flex items-center gap-3 mb-3">
            <img
              :src="photo.avatar"
              alt="avatar"
              class="w-full h-full rounded-md object-cover"
            />
          </div>
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <span
                :class="{
                  'text-yellow-400': photo.color === 'Oro',
                  'text-gray-300': photo.color === 'Plata',
                  'text-amber-600': photo.color === 'Bronce',
                }"
                class="font-bold text-sm"
              >
                {{ photo.color }} - {{ photo.ranking }}
              </span>
              <p class="text-white text-sm">{{ photo.title }}</p>
              <p class="text-gray-300 text-xs">{{ photo.location }}</p>
            </div>
            <div class="flex flex-col">
              <p class="text-pink-600 font-medium">❤️ {{ photo.likes }}</p>

              <span class="block text-xs text-white mt-2">
                📸 {{ photo.photographer }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-2/3 h-64 sm:h-96 lg:h-screen order-1 lg:order-2 relative">
      <TresCanvas clear-color="#000" shadows>
        <TresPerspectiveCamera :position="[6, 6, 12]" />

        <OrbitControls
          :enableZoom="false"
          :enablePan="false"
          :enableRotate="true"
          :autoRotate="false"
          :maxPolarAngle="Math.PI / 2"
          :minPolarAngle="Math.PI / 6"
        />

        <TresAmbientLight :intensity="4.6" />
        <TresDirectionalLight :position="[5, 10, 5]" :intensity="2" cast-shadow />

        <Environment preset="studio" />

        <primitive :object="stars" />

        <TresGroup v-if="baseModel">
          <primitive
            v-for="photo in orderedPhotos"
            :key="photo.id"
            :object="
              (() => {
                const clone = baseModel.clone();
                clone.traverse((child) => {
                  if (child.isMesh) {
                    child.material = materialMap[photo.color];
                  }
                });
                return clone;
              })()
            "
            :position="photo.position"
            :rotation="photo.rotation"
            :scale="photo.scale"
          />
        </TresGroup>
      </TresCanvas>

      <div class="absolute inset-0 pointer-events-none hidden lg:block">
        <div
          v-for="photo in orderedPhotos"
          :key="`card-${photo.id}`"
          class="absolute pointer-events-auto"
          :style="photo.cardPosition"
        >
          <div
            class="bg-black/80 hover:bg-gradient-to-br from-black via-emerald-700 to-black-800 backdrop-blur rounded-xl p-3 shadow-lg text-sm w-48 xl:w-56 transition-all duration-300 hover:scale-105"
          >
            <div class="flex items-center gap-3 mb-1">
              <img
                :src="photo.avatar"
                alt="avatar"
                class="w-12 h-8 xl:w-16 xl:h-16 rounded-md object-cover"
              />
              <div class="flex-1 min-w-0">
                <p class="text-white font-semibold text-xs xl:text-sm truncate">
                  {{ photo.title }}
                </p>
                <p class="text-white text-xs truncate">{{ photo.location }}</p>
              </div>
            </div>
            <p class="text-pink-600 font-medium mt-1 text-xs">❤️ {{ photo.likes }}</p>
            <span
              :class="{
                'text-yellow-400': photo.color === 'Oro',
                'text-gray-300': photo.color === 'Plata',
                'text-amber-600': photo.color === 'Bronce',
              }"
              class="font-bold text-xs xl:text-sm"
            >
              {{ photo.color }} - {{ photo.ranking }}
            </span>
            <span class="block text-xs text-white mt-1 truncate">
              📸 {{ photo.photographer }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
canvas {
  max-width: 100% !important;
  overflow: hidden !important;
}

@media (max-width: 1023px) {
}
</style>
