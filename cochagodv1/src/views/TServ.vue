<template>
    <div id="page-top">
        <div class="pt-20">
            <!-- Para version móvil -->
            <div class="md:hidden bg-[#0A192F] p-4 sticky top-0 z-10">
                <button @click="isAccordionOpen = !isAccordionOpen"
                    class="flex items-center justify-between w-full text-[#EAEAEA]">
                    <span class="font-bold">📋 Términos de Servicio</span>
                    <span>{{ isAccordionOpen ? '▲' : '▼' }}</span>
                </button>
                <!-- Acordeón (visible solo en móvil) -->
                <div v-if="isAccordionOpen" class="mt-2 bg-[#0A192F]">
                    <ul class="space-y-2">
                        <li>
                            <a href="#page-top" class="block px-3 py-2 rounded hover:bg-[#17A589] transition-colors"
                                :class="{ 'bg-[#17A589]': activeTerm === 'page-top' }" @click="isAccordionOpen = false">
                                🏠 Inicio
                            </a>
                        </li>
                        <li v-for="(term, index) in terms" :key="index">
                            <a :href="'#' + term.id"
                                class="block px-3 py-2 rounded hover:bg-[#17A589] transition-colors"
                                :class="{ 'bg-[#17A589]': activeTerm === term.id }" @click="isAccordionOpen = false">
                                {{ term.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex">
                <!-- Sidebar Navegación - para PC -->
                <div class="hidden md:block w-64 bg-[#0A192F] text-[#EAEAEA] fixed h-screen p-4 overflow-y-auto">
                    <h2 class="text-xl font-bold mb-6 text-[#17A589]">Navegación</h2>
                    <nav>
                        <ul class="space-y-3">

                            <li>
                                <a href="#page-top" class="block px-3 py-2 rounded hover:bg-[#17A589] transition-colors"
                                    :class="{ 'bg-[#17A589]': activeTerm === 'page-top' }"
                                    @click="activeTerm = 'page-top'">
                                    🏠 Inicio
                                </a>
                            </li>
                            <li v-for="(term, index) in terms" :key="index">
                                <a :href="'#' + term.id"
                                    class="block px-3 py-2 rounded hover:bg-[#17A589] transition-colors"
                                    :class="{ 'bg-[#17A589]': activeTerm === term.id }" @click="activeTerm = term.id">
                                    {{ term.title }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- Main Content -->
                <div class="w-full bg-[#EAEAEA] text-[#0A192F] md:ml-64" id="main-content">
                    <!-- Tarjeta horizontal -->
                    <div class="w-full bg-[#17A589]  shadow-md overflow-hidden h-[200px] mb-6">
                        <div class="flex h-full">
                            <div class="shrink-0">
                                <img class="h-full w-full object-cover md:w-[100px]"
                                    src="https://via.placeholder.com/150" alt="Imagen de ejemplo">
                            </div>
                            <div class="p-4 flex items-center">
                                <div>
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Categoría
                                    </div>
                                    <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Título de la
                                        tarjeta
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Secciones de términos -->
                    <div class="px-4">
                        <div v-for="(term, index) in terms" :key="index" :id="term.id" class="mb-12 scroll-mt-24">
                            <h2 class="text-2xl font-semibold mb-4 text-[#17A589] flex items-center">
                                <span class="mr-2">📌</span>
                                {{ term.title }}
                            </h2>
                            <div class="prose max-w-none">
                                <p v-html="term.content"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isAccordionOpen: false,
            activeTerm: 'page-top', // Cambiado a 'page-top'
            terms: [
                {
                    id: 'acceptance',
                    title: '1. Aceptación de los Términos',
                    content: 'Al acceder al sitio web CochaGo o utilizar cualquiera de nuestros servicios, aceptas estar sujeto a estos Términos de Servicio. Nos reservamos el derecho de modificar, actualizar o cambiar estos términos en cualquier momento, y cualquier modificación será publicada en esta página con la fecha de actualización correspondiente.'
                },
                {
                    id: 'description',
                    title: '2. Descripción del Servicio',
                    content: 'CochaGo es una guía digital que ofrece información sobre negocios, servicios y lugares en tu ciudad. A través de nuestra plataforma, los usuarios pueden explorar diversas categorías y acceder a tarjetas digitales de empresas, restaurantes, profesionales, entre otros, con datos relevantes de contacto y detalles sobre sus servicios.'
                },
                // ... (resto de los términos se mantienen igual)
                {
                    id: 'contact',
                    title: '11. Contacto',
                    content: 'Si tienes alguna duda o inquietud sobre estos Términos de Servicio, puedes contactarnos a través del siguiente correo electrónico:<br><br>📧 <a href="mailto:Cocha_GO@outlook.com" class="text-[#17A589] hover:underline">Cocha_GO@outlook.com</a>'
                }
            ]
        }
    },
    mounted() {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const sections = document.querySelectorAll('[id]')
            let current = ''

            // Detectar si estamos en el tope de la página
            if (window.scrollY < 50) {
                current = 'page-top'
            } else {
                // Lógica original para otras secciones
                sections.forEach(section => {
                    // Excluimos el 'page-top' de la detección de secciones
                    if (section.id !== 'page-top') {
                        const sectionTop = section.offsetTop
                        const sectionHeight = section.clientHeight
                        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                            current = section.id
                        }
                    }
                })
            }

            if (current) {
                this.activeTerm = current
            }
        }
    }
}
</script>
<style>
html {
    scroll-behavior: smooth;
}

.prose a {
    color: #17A589;
    text-decoration: none;
}

.prose a:hover {
    text-decoration: underline;
}

.prose ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

/* Mobile menu button (opcional) */
.md-hidden {
    display: none;
}

@media (max-width: 767px) {
    .md-hidden {
        display: block;
    }
}
</style>