<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 w-full max-w-md">
    <div class="p-4 border-b border-gray-100 flex justify-between items-center">
      <h3 class="font-semibold text-gray-800">Notificaciones</h3>
      <button
        v-if="notifications.length > 0"
        @click="clearAll"
        class="text-sm text-teal-500 hover:text-teal-600"
      >
        Marcar todo como leído
      </button>
    </div>

    <div class="max-h-96 overflow-y-auto">
      <div
        v-if="notifications.length === 0"
        class="py-12 flex flex-col items-center justify-center text-center"
      >
        <div
          class="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4"
        >
          <BellIcon class="h-6 w-6 text-gray-400" />
        </div>
        <p class="text-gray-500">No tienes notificaciones nuevas</p>
      </div>

      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 cursor-pointer"
        @click="markAsRead(index)"
      >
        <div class="flex">
          <div
            class="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
            :class="typeClasses[notification.type].bg"
          >
            <component
              :is="typeClasses[notification.type].icon"
              class="h-5 w-5"
              :class="typeClasses[notification.type].color"
            />
          </div>
          <div class="ml-3 flex-1">
            <div class="flex justify-between items-start">
              <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
              <span class="text-xs text-gray-500">{{ notification.time }}</span>
            </div>
            <p class="text-sm text-gray-500 mt-1">{{ notification.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  BellIcon,
  MapPinIcon,
  CalendarIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline";

const typeClasses = {
  event: {
    icon: CalendarIcon,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  location: {
    icon: MapPinIcon,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  info: {
    icon: InformationCircleIcon,
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
};

const notifications = ref([
  {
    type: "event",
    title: "Festival gastronómico",
    message:
      "No te pierdas el festival gastronómico este fin de semana en la Plaza Principal.",
    time: "Hace 5 min",
  },
  {
    type: "location",
    title: "Nuevo lugar cercano",
    message: "Estás cerca del Palacio Portales. ¡Toca para más información!",
    time: "Hace 45 min",
  },
  {
    type: "info",
    title: "Actualización de la app",
    message: "Hemos añadido nuevas rutas y funcionalidades a CochaGo.",
    time: "Ayer",
  },
]);

const markAsRead = (index) => {
  // Logic to mark notification as read
  notifications.value.splice(index, 1);
};

const clearAll = () => {
  notifications.value = [];
};
</script>
