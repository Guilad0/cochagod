<template>
    <div
        class="flex flex-col items-center justify-center h-screen text-center p-6 bg-gradient-to-b from-blue-100 to-white animate-fadeIn">
        <div class="relative mb-8">
            <div class="rocket animate-bounce">
                🚀
            </div>
        </div>
        <h1 class="text-6xl font-bold text-blue-600 mb-4 animate-slideInDown">404</h1>
        <h2 class="text-2xl font-semibold mb-2 animate-slideInLeft">¡Oops! Página no encontrada</h2>
        <p class="text-gray-600 mb-6 animate-slideInRight">Te perdiste en la galaxia de CochaGO. 🌌</p>
        <router-link to="/" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
            Volver al inicio
        </router-link>
    </div>
</template>

<script setup>
// No hace falta lógica extra
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideInDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(50px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* Clases personalizadas */
.animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
}

.animate-slideInDown {
    animation: slideInDown 0.8s ease-out forwards;
}

.animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
}

.animate-bounce {
    animation: bounce 2s infinite;
}

/* Extra: estilo para el cohete */
.rocket {
    font-size: 4rem;
}
</style>