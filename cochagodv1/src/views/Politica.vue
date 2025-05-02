<script setup>
import { ref } from 'vue';

// Estado para alternar la barra lateral móvil
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

// Lista de secciones para la barra lateral
const sections = [
    { id: 'datos-recopilamos', title: '¿Qué datos recopilamos?' },
    { id: 'uso-informacion', title: '¿Para qué usamos tu información?' },
    { id: 'compartir-informacion', title: '¿Compartimos tu información?' },
    { id: 'cookies', title: '¿Usamos cookies?' },
    { id: 'reseñas', title: 'Reseñas y contenido generado por usuarios' },
    { id: 'seguridad', title: 'Seguridad de los datos' },
    { id: 'derechos', title: 'Tus derechos' },
    { id: 'cambios-politica', title: 'Cambios en esta política' },
    { id: 'contacto', title: 'Contacto' },
];
</script>

<template>
    <div class="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
           
            <button class="md:hidden bg-teal text-white px-4 py-2 rounded-lg mb-4 flex items-center justify-between"
                @click="toggleSidebar" aria-label="Toggle navigation">
                <span>Secciones</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        :d="isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
                </svg>
            </button>

            <!-- Sidebar -->
            <aside :class="[
                'w-full md:w-64 bg-white rounded-lg shadow-lg p-6',
                isSidebarOpen ? 'block' : 'hidden md:block'
            ]">

                <h2 class="text-xl font-semibold text-teal mb-4">Navegación</h2>
                <ul class="space-y-2">
                    <li v-for="section in sections" :key="section.id">
                        <a :href="`#${section.id}`"
                            class="block text-navy hover:text-teal transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100"
                            :class="{ 'border-l-4 border-coral': $route.hash === `#${section.id}` }"
                            @click="isSidebarOpen = false">
                            {{ section.title }}
                        </a>
                    </li>
                </ul>
            </aside>

            <!-- Main Content -->
            <div class="flex-1 bg-white rounded-lg shadow-lg p-8">
                <!-- Header -->
                <h1 class="text-3xl sm:text-4xl font-bold text-navy mb-4 flex items-center">
                    <span class="mr-2">🛡️</span> Política de Privacidad
                </h1>
                <p class="text-sm text-gray-600 mb-8">
                    Última actualización: mayo de 2025
                </p>
                <p class="text-base text-navy mb-8 leading-relaxed">
                    En <span class="font-semibold text-teal">CochaGo</span> valoramos tu privacidad. Esta Política de
                    Privacidad explica cómo recopilamos, usamos y protegemos la información personal que puedas
                    proporcionarnos al usar nuestra guía digital.
                </p>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 1 -->
                <section class="mb-8">
                    <h2 id="datos-recopilamos"
                        class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 1. ¿Qué datos recopilamos?
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Podemos recopilar:
                    </p>
                    <ul class="list-disc list-inside text-navy mt-2 space-y-1">
                        <li>Datos de contacto enviados voluntariamente (nombre, número, redes sociales de negocios).
                        </li>
                        <li>Opiniones o reseñas que los usuarios escriben.</li>
                        <li>Información técnica (como dirección IP, tipo de navegador, dispositivo y cookies).</li>
                        <li>Datos compartidos por WhatsApp o formularios de contacto.</li>
                    </ul>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 2 -->
                <section class="mb-8">
                    <h2 id="uso-informacion"
                        class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 2. ¿Para qué usamos tu información?
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Usamos los datos para:
                    </p>
                    <ul class="list-disc list-inside text-navy mt-2 space-y-1">
                        <li>Crear y mostrar tarjetas digitales de negocios.</li>
                        <li>Publicar reseñas y mejorar la experiencia del usuario.</li>
                        <li>Contactarte para actualizar o confirmar datos de tu tarjeta digital.</li>
                        <li>Mantener el funcionamiento técnico y seguridad de la plataforma.</li>
                        <li>En algunos casos, analizar el uso del sitio para mejorarlo (de forma anónima).</li>
                    </ul>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 3 -->
                <section class="mb-8">
                    <h2 id="compartir-informacion"
                        class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 3. ¿Compartimos tu información?
                    </h2>
                    <p class="text-navy leading-relaxed">
                        No vendemos ni alquilamos tus datos. Solo compartimos información en estos casos:
                    </p>
                    <ul class="list-disc list-inside text-navy mt-2 space-y-1">
                        <li>Con tu autorización previa.</li>
                        <li>Con proveedores de servicios que nos ayudan a operar el sitio (ej: hosting, análisis web).
                        </li>
                        <li>Si lo exige la ley.</li>
                    </ul>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 4 -->
                <section class="mb-8">
                    <h2 id="cookies" class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 4. ¿Usamos cookies?
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Sí. Usamos cookies para mejorar tu experiencia en el sitio. Podés desactivarlas desde la
                        configuración de tu navegador, aunque eso puede afectar algunas funciones.
                    </p>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 5 -->
                <section class="mb-8">
                    <h2 id="reseñas" class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 5. Reseñas y contenido generado por usuarios
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Las opiniones que publiques son visibles para otros usuarios. Nos reservamos el derecho de
                        moderarlas para mantener un ambiente respetuoso y constructivo.
                    </p>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 6 -->
                <section class="mb-8">
                    <h2 id="seguridad" class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 6. Seguridad de los datos
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Aplicamos medidas razonables de seguridad para proteger tu información. Sin embargo, ningún
                        sistema es 100% invulnerable.
                    </p>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 7 -->
                <section class="mb-8">
                    <h2 id="derechos" class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 7. Tus derechos
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Podés:
                    </p>
                    <ul class="list-disc list-inside text-navy mt-2 space-y-1">
                        <li>Solicitar acceso a los datos que tengamos sobre vos.</li>
                        <li>Pedir su corrección o eliminación.</li>
                        <li>Contactarnos para ejercer estos derechos en cualquier momento.</li>
                    </ul>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 8 -->
                <section class="mb-8">
                    <h2 id="cambios-politica"
                        class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 8. Cambios en esta política
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Podemos actualizar esta Política de Privacidad. Publicaremos la nueva versión en esta página,
                        con la fecha de modificación. Te recomendamos revisarla periódicamente.
                    </p>
                </section>

                <hr class="border-gray-300 mb-8" />

                <!-- Section 9 -->
                <section class="mb-8">
                    <h2 id="contacto" class="text-2xl font-semibold text-teal mb-4 flex items-center scroll-mt-20">
                        <span class="mr-2">📌</span> 9. Contacto
                    </h2>
                    <p class="text-navy leading-relaxed">
                        Para cualquier duda sobre esta política, escribinos a:
                    </p>
                    <p class="text-navy mt-2">
                        <span class="mr-2">📧</span>
                        <a href="mailto:Cocha_GO@outlook.com"
                            class="text-coral hover:underline">Cocha_GO@outlook.com</a>
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>

.text-navy {
    color: #0A192F;
}

.text-teal {
    color: #17A589;
}

.text-coral {
    color: #F76C5E;
}

.bg-gray-100 {
    background-color: #EAEAEA;
}

.bg-teal {
    background-color: #17A589;
}

.border-coral {
    border-color: #F76C5E;
}


html {
    scroll-behavior: smooth;
}

/* Desplazamiento para evitar la superposición de la barra de navegación fija */
.scroll-mt-20 {
    scroll-margin-top: 5rem;
   
}
</style>