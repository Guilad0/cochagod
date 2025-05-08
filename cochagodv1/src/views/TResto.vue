```vue
<template>
    <div id="page-top">
        <div class="pt-20">
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
                    <div class="w-full bg-[#17A589] shadow-md overflow-hidden h-[200px] mb-6">
                        <div class="flex h-full">
                            <div class="shrink-0">
                                <img class="h-full w-full object-cover md:w-[100px]"
                                    src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
                            </div>
                            <div class="p-4 flex items-center">
                                <div>
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nombre
                                        Completo</div>
                                    <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Ocupación y/o
                                        Profesión</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Secciones de términos -->
                    <div class="px-4">
                        <div v-for="(term, index) in terms" :key="index" :id="term.id" class="mb-12 scroll-mt-24">
                            <!-- Encabezado con botón acordeón (modo móvil) -->
                            <button
                                class="md:hidden w-full text-left font-semibold text-[#17A589] py-2 px-4 flex justify-between items-center border-b border-gray-300 hover:bg-gray-100 transition-colors"
                                @click="toggleSection(term.id)">
                                <span>{{ term.icon }} {{ term.title }}</span>
                                <span class="text-lg">{{ openedSections[term.id] ? '▲' : '▼' }}</span>
                            </button>

                            <!-- Contenido acordeón en móvil -->
                            <div v-if="openedSections[term.id]" class="md:hidden prose max-w-none py-4 px-4">
                                <p v-html="term.content"></p>
                            </div>

                            <!-- Contenido normal en desktop -->
                            <div class="hidden md:block prose max-w-none">
                                <h2 class="text-2xl font-semibold mb-4 text-[#17A589] flex items-center">
                                    <span class="mr-2">{{ term.icon }}</span>
                                    {{ term.title }}
                                </h2>
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
            activeTerm: 'page-top',
            openedSections: {
                acceptance: false,
                description: false,
                'about-me': false,
                contact: false,
            },
            terms: [
                {
                    id: 'acceptance',                    
                    title: '🏛️ Descripción del Profesional',
                    content:
                        'Una card con su foto <br>Médico Cirujano Plástico en Tarija, Bolivia, especialista en belleza corporal y facial. Atención con profesionalismo y seguridad.',
                },
                {
                    id: 'description',                    
                    title: '⚙️ Productos / Servicios',
                    content:
                        'Somos especialistas en belleza Corporal y Facial, realizamos siempre nuestra labor siguiendo los estándares de profesionalismo y seguridad más altos y otorgamos el mejor servicio para que nuestros pacientes se sientan cómodos y satisfechos. El Dr. Javier Ruiz Barea es Director de la Clínica Sao Paulo.',
                },
                {
                    id: 'about-me',                    
                    title: '📚 Acerca de mi',
                    content:
                        'Formado en el Hospital Estadual Ipiranga São Paulo Brasil Miembro Titular de la Sociedad Boliviana de Cirugía Plástica Presidente de la Sociedad Boliviana de Cirugía Plástica gestión 2018-2020. Miembro corresponsal de la Sociedad Brasilera de Cirugía Plástica. Miembro de ISAPS (International Society of Aesthetic Plastic Surgery) Miembro de la ASPS (American Society of Plastic Surgeons)',
                },
                {
                    id: 'contact',                    
                    title: '🗺️ Contacto',
                    content: 'Celular: (591-4) 6633056 (591) 71863980; redes sociales; ubicación de oficina o consultorio',
                },
                {
                    id: 'certifications',                    
                    title: '🏆 Certificaciones',
                    content: 'Imagenes en cards'
                },
                {
                    id: 'gallery',                    
                    title: '🖼️ Galeria',
                    content: 'Imagenes en cards'
                },
                {
                    id: 'working hours',                    
                    title: '⌚ Horarios de Atención',
                    content: 'Lunes a viernes: 9:00 am - 6:00 pm<br>Sabados: 9:00 am - 1:00 pm'
                },
                {
                    id: 'payments',                    
                    title: '💰 Formas de pago',
                    content: 'Efectivo. Bolivianos <br>Dólares y pesos Argentinos. <br>Tarjetas de crédito y debito.'   
                },
                {
                    id: 'QR',                    
                    title: '📱 QR para compartir Tarjeta',
                    content: 'Una card con su QR para compartir'
                },


            ],
        };
    },
    mounted() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const sections = document.querySelectorAll('[id]');
            let current = '';

            if (window.scrollY < 50) {
                current = 'page-top';
            } else {
                sections.forEach((section) => {
                    if (section.id !== 'page-top') {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.clientHeight;
                        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                            current = section.id;
                        }
                    }
                });
            }

            if (current) {
                this.activeTerm = current;
            }
        },
        toggleSection(id) {
            this.openedSections = {
                ...this.openedSections,
                [id]: !this.openedSections[id],
            };
        },
    },
};
</script>

<style>
html {
    scroll-behavior: smooth;
}

.prose a {
    color: #17a589;
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
</style>
```