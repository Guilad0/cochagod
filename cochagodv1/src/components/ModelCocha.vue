<template>
  <!-- <div
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div
        class="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-3"
      ></div>
      <p class="text-orange-700 font-semibold text-lg">Cargando experiencia Cochago...</p>
    </div> -->
  <div class="h-screen flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex items-center justify-center p-8">
      <div class="max-w-md space-y-6 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Explora <span class="text-orange-500">Cochabamba</span> con
          <span class="font-light text-sky-500 primary-font">CochaGo!</span>
        </h1>
        <p class="text-lg text-gray-600 mb-12">
          Descubre la riqueza cultural, histórica y natural de la ciudad jardín. Déjate
          cautivar por la magia Cochala.
        </p>
      </div>
    </div>

    <div class="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center">
      <div class="relative w-[90vw] h-[70vh] md:w-[600px] md:h-[600px] rounded-2xl">
        <div class="object-cover w-full h-full">
          <div ref="canvasContainer" class="w-full h-full rounded-2xl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const canvasContainer = ref(null);
const loading = ref(true);

onMounted(() => {
  const container = canvasContainer.value;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfefefe);

  const width = container.clientWidth;
  const height = container.clientHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
  camera.position.set(0, 1, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.enableRotate = false;
  controls.autoRotateSpeed = 2.0;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enabled = false;
  controls.update();

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 5);
  light.castShadow = true;
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.ShadowMaterial({ opacity: 0.15 })
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -1;
  plane.receiveShadow = true;
  scene.add(plane);

  const loader = new OBJLoader();
  loader.load("/base.obj", (obj) => {
    obj.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.material = new THREE.MeshStandardMaterial({
          metalness: 0.2,
          roughness: 0.7,
        });
      }
    });

    const box = new THREE.Box3().setFromObject(obj);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    obj.position.sub(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3.5 / maxDim;
    obj.scale.setScalar(scale);

    scene.add(obj);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    loading.value = false;
  });

  window.addEventListener("resize", () => {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
});
</script>
