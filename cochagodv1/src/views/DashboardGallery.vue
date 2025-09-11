<script setup>
import { ref, onMounted } from "vue";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, Html, Environment } from "@tresjs/cientos";
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
    position: [2.5, -3, 0],
    rotation: [0.2, 0.5, 0],
    scale: [3.5, 3.5, 3.5],
    color: "Oro",
    ranking: "Primero",
  },
  {
    id: 2,
    title: "Vista desde Tunari",
    location: "Cordillera Tunari",
    photographer: "Juan Pérez",
    avatar: "/cochago.png",
    likes: 98,
    position: [7, -3, -1],
    rotation: [0.2, 0.5, 0],
    scale: [1.7, 1.7, 1.7],
    color: "Bronce",
    ranking: "Tercero",
  },
  {
    id: 3,
    title: "Noche en la Plaza",
    location: "Plaza 14 de Septiembre",
    photographer: "Lucía Fernández",
    avatar: "/cochago.png",
    likes: 210,
    position: [-2, -3, 2],
    rotation: [0.2, 0.5, 0],
    scale: [2.5, 2.5, 2.5],
    color: "Plata",
    ranking: "Segundo",
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
</script>

<template>
  <div class="w-full h-screen">
    <TresCanvas clear-color="#000" shadows>
      <TresPerspectiveCamera :position="[6, 6, 12]" />

      <OrbitControls />

      <TresAmbientLight :intensity="4.6" />
      <TresDirectionalLight :position="[5, 10, 5]" :intensity="2" cast-shadow />

      <Environment preset="studio" />

      <primitive :object="stars" />

      <TresGroup v-if="baseModel">
        <primitive
          v-for="photo in photos"
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
        >
          <Html distanceFactor="12">
            <div
              class="bg-black/80 hover:bg-gradient-to-br from-black via-gray-400 to-black-800 backdrop-blur rounded-xl p-2 shadow-lg text-sm w-60"
            >
              <div class="flex items-center gap-2 mb-1">
                <img :src="photo.avatar" alt="avatar" class="w-full h-full" />
              </div>
              <span
                :class="{
                  'text-yellow-400': photo.color === 'Oro',
                  'text-gray-300': photo.color === 'Plata',
                  'text-amber-600': photo.color === 'Bronce',
                }"
                class="font-bold text-xs"
              >
                {{ photo.color }} - {{ photo.ranking }}
              </span>
              <p class="text-xs text-white">{{ photo.title }}</p>
              <p class="text-xs text-white">{{ photo.location }}</p>
              <p class="text-xs text-pink-600 font-medium">❤️ {{ photo.likes }}</p>
              <span class="font-semibold text-white">{{ photo.photographer }}</span>
            </div>
          </Html>
        </primitive>
      </TresGroup>
    </TresCanvas>
  </div>
</template>
