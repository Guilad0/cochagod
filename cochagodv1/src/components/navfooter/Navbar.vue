<template>
  <nav
    :class="[
      isScrolled ? 'fixed backdrop-blur-xl' : 'absolute',
      'top-0 left-0 z-50 w-full transition-all duration-500',
      'bg-white/40 md:bg-transparent',
    ]"
    class="absolute top-0 left-0 z-50"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <a href="/" class="text-xl md:text-3xl font-bold tracking-wide group font-mono">
            <span
              :class="isScrolled ? 'text-orange-500' : 'text-orange-500'"
              class="transition-all duration-300 ease-in-out group-hover:text-orange-400"
              >COCHA</span
            >
            <span
              :class="isScrolled ? 'text-teal-400' : 'text-teal-500'"
              class="transition-all duration-300 ease-in-out group-hover:text-teal-500"
              >GO</span
            >
            <!-- <img src="@/assets/img/logo.jpg" alt="" class="w-30 h-14" /> -->
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-6 text-sm justify-between">
          <NavLink
            v-for="(item, index) in navItems"
            :key="`desktop-${index}`"
            :href="item.href"
            :text="item.text"
            :mobile="false"
            :is-scrolled="isScrolled"
            :color-index="index"
          />
          <div class="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar destinos..."
              :class="isScrolled ? 'bg-black/40' : 'bg-black/50'"
              class="border-none rounded-md py-1 px-3 w-40 lg:w-48 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:w-56 transition-all duration-300"
              ref="desktopSearchInput"
            />
            <button
              :class="isScrolled ? 'text-gray-300' : 'text-gray-200'"
              class="absolute right-2 hover:text-white transition-colors duration-300"
              @click="handleDesktopSearch"
              aria-label="Search destinations"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <GetLucky />
        </div>

        <div class="flex md:hidden items-center">
          <button
            @click="toggleMenu"
            :class="
              isScrolled ? 'text-black hover:bg-teal-500' : 'text-black hover:bg-teal-500'
            "
            class="p-2 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 ease-in-out"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      id="mobile-menu"
      v-show="isMenuOpen"
      class="md:hidden"
      @keydown.esc="isMenuOpen = false"
    >
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMenuOpen" class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            class="text-sm"
            v-for="(item, index) in navItems"
            :key="`mobile-${index}`"
            :href="item.href"
            :text="item.text"
            :mobile="true"
            :active="index === 0"
            :is-scrolled="isScrolled"
            :color-index="index"
          />
        </div>
      </transition>

      <transition
        enter-active-class="transition-all duration-300 ease-out delay-150"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMenuOpen" class="pt-4 pb-3 border-t border-gray-700">
          <div class="px-2 space-y-3">
            <div
              class="flex items-center bg-gray-800 p-2 rounded-md overflow-hidden shadow-inner"
            >
              <input
                type="text"
                placeholder="Buscar destinos..."
                class="bg-transparent border-none w-full text-white focus:outline-none placeholder-gray-400"
                ref="mobileSearchInput"
              />
              <button
                :class="isScrolled ? 'text-gray-300' : 'text-gray-200'"
                class="ml-2 hover:text-white transition-colors duration-300"
                @click="handleMobileSearch"
                aria-label="Search destinations"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
            <GetLucky />
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, h, defineComponent } from "vue";
import GetLucky from "./GetLucky.vue";

const isScrolled = ref(false);

window.addEventListener("scroll", () => {
  isScrolled.value = window.scrollY > 50;
});

const navColors = [
  {
    text: "text-teal-400",
    textScrolled: "text-teal-300",
    hover: "hover:text-teal-300",
    underline: "bg-teal-400",
    underlineScrolled: "bg-teal-300",
  },
  {
    text: "text-orange-500",
    textScrolled: "text-orange-400",
    hover: "hover:text-orange-400",
    underline: "bg-orange-500",
    underlineScrolled: "bg-orange-400",
  },
  {
    text: "text-pink-500",
    textScrolled: "text-pink-400",
    hover: "hover:text-pink-400",
    underline: "bg-pink-500",
    underlineScrolled: "bg-pink-400",
  },
  {
    text: "text-purple-500",
    textScrolled: "text-purple-400",
    hover: "hover:text-purple-400",
    underline: "bg-purple-500",
    underlineScrolled: "bg-purple-400",
  },
  {
    text: "text-blue-500",
    textScrolled: "text-blue-400",
    hover: "hover:text-blue-400",
    underline: "bg-blue-500",
    underlineScrolled: "bg-blue-400",
  },
];

const NavLink = defineComponent({
  props: {
    href: { type: String, required: true },
    text: { type: String, required: true },
    mobile: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    isScrolled: { type: Boolean, default: false },
    colorIndex: { type: Number, default: 0 },
  },
  setup(props) {
    const colorScheme = navColors[props.colorIndex % navColors.length];

    return () =>
      props.mobile
        ? h(
            "a",
            {
              href: props.href,
              class: [
                "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out",
                props.active
                  ? "text-white bg-gray-800"
                  : props.isScrolled
                  ? `${colorScheme.textScrolled} hover:text-white hover:bg-gray-700`
                  : `${colorScheme.text} hover:text-white hover:bg-gray-800`,
              ],
            },
            props.text
          )
        : h(
            "a",
            {
              href: props.href,
              class: [
                "relative px-3 py-2 text-md font-medium transition-all duration-300 ease-in-out group",
                props.isScrolled ? colorScheme.textScrolled : colorScheme.text,
                colorScheme.hover,
              ],
            },
            [
              props.text,
              h("span", {
                class: [
                  "absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100",
                  props.isScrolled
                    ? colorScheme.underlineScrolled
                    : colorScheme.underline,
                ],
              }),
            ]
          );
  },
});

const navItems = [
  { text: "Inicio", href: "/" },
  { text: "Comercios", href: "/comercios" },
  { text: "Entretenimiento", href: "/entretenimiento" },
  { text: "Alojamiento", href: "/alojamientos" },
  { text: "Turismo", href: "/turismo" },
];

const isMenuOpen = ref(false);

const mobileSearchInput = ref(null);
const desktopSearchInput = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    nextTick(() => {
      mobileSearchInput.value?.focus();
    });
  }
};

const handleMobileSearch = () => {
  const searchTerm = mobileSearchInput.value?.value || "";
  console.log("Mobile Searching:", searchTerm);
};

const handleDesktopSearch = () => {
  const searchTerm = desktopSearchInput.value?.value || "";
  console.log("Desktop Searching:", searchTerm);
};

const handleEscKey = (event) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscKey);
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscKey);
  window.removeEventListener("resize", handleResize);
});
</script>
