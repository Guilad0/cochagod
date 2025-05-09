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


                    <!-- Contenedor relativo para posicionar elementos -->
                    <div class="relative mb-10">
                        <!-- Imagen grande tipo banner -->
                        <img class="w-full h-[220px] object-cover rounded shadow bg-orange-500"
                            src="https://via.placeholder.com/1000x220" alt="Imagen grande" />

                        <!-- Card pequeña flotando encima -->
                        <div
                            class="absolute -bottom-10 left-4 bg-[#FDF2E9] p-3 rounded shadow-lg w-[160px] h-[160px] flex items-center justify-center">
                            <img class="object-contain max-h-full max-w-full" src="https://via.placeholder.com/150"
                                alt="Logo pequeño" />
                        </div>

                        <!-- Texto con responsividad mejorada -->
                        <div class="absolute left-[180px] top-[140px] right-4 sm:left-[200px]">
                            <h2 class="text-xl sm:text-2xl font-bold text-gray-800">PRODUCTOS LUCANA</h2>
                            <p class="text-base sm:text-lg text-gray-600">Santa Cruz</p>
                        </div>
                    </div>
                    <br>
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
                            <div v-if="openedSections[term.id]" class="md:hidden py-4 px-4">
                                <!-- Si es la sección de certificaciones -->
                                <div v-if="term.id === 'certifications'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div v-for="(cert, index) in term.certifications" :key="index"
                                        class="bg-white rounded shadow-md overflow-hidden">
                                        <img :src="cert.src" :alt="cert.alt"
                                            class="w-full h-48 object-cover cursor-pointer"
                                            @click="openLightbox(cert)" />
                                        <div class="p-2 text-sm text-center text-gray-600">{{ cert.alt }}</div>
                                    </div>
                                </div>

                                <!-- Galería -->
                                <div v-if="term.id === 'gallery'"
                                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div v-for="(img, index) in term.gallery" :key="index"
                                        class="bg-white rounded shadow-md overflow-hidden">
                                        <img :src="img.src" :alt="img.alt"
                                            class="w-full h-48 object-cover cursor-pointer"
                                            @click="openLightbox(img)" />
                                        <div class="p-2 text-sm text-center text-gray-600">{{ img.alt }}</div>
                                    </div>
                                </div>

                                <!-- QR para compartir -->
                                <div v-if="term.id === 'qr'" class="flex justify-center">
                                    <div class="bg-white rounded shadow-md overflow-hidden w-64">
                                        <img :src="term.qrImage.src" :alt="term.qrImage.alt"
                                            class="w-full h-auto object-cover cursor-pointer"
                                            @click="openLightbox(term.qrImage)" />
                                        <div class="p-2 text-sm text-center text-gray-600">{{ term.qrImage.alt }}</div>
                                    </div>
                                </div>



                                <!-- En caso contrario, mostrar texto normal -->
                                <p v-else v-html="term.content" class="prose max-w-none"></p>
                            </div>


                            <!-- Contenido normal en desktop -->
                            <div class="hidden md:block prose max-w-none">
                                <h2 class="text-2xl font-semibold mb-4 text-[#17A589] flex items-center">
                                    <span class="mr-2">{{ term.icon }}</span>
                                    {{ term.title }}
                                </h2>
                                <!-- Si es la sección de certificaciones -->
                                <div v-if="term.id === 'certifications'"
                                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div v-for="(cert, index) in term.certifications" :key="index"
                                        class="bg-white rounded shadow-md overflow-hidden">
                                        <img :src="cert.src" :alt="cert.alt"
                                            class="w-full h-48 object-cover cursor-pointer"
                                            @click="openLightbox(cert)" />
                                        <div class="p-2 text-sm text-center text-gray-600">{{ cert.alt }}</div>
                                    </div>
                                </div>

                                <!-- Galería -->
                                <div v-if="term.id === 'gallery'"
                                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div v-for="(img, index) in term.gallery" :key="index"
                                        class="bg-white rounded shadow-md overflow-hidden">
                                        <img :src="img.src" :alt="img.alt"
                                            class="w-full h-48 object-cover cursor-pointer"
                                            @click="openLightbox(img)" />
                                        <div class="p-2 text-sm text-center text-gray-600">{{ img.alt }}</div>
                                    </div>
                                </div>

                                <!-- QR para compartir -->
                                <div v-if="term.id === 'qr'" class="flex justify-center">
                                    <div class="bg-white rounded shadow-md overflow-hidden w-64">
                                        <img :src="term.qrImage.src" :alt="term.qrImage.alt"
                                            class="w-full h-auto object-cover cursor-pointer"
                                            @click="openLightbox(term.qrImage)" />
                                        <div class="p-2 text-sm text-center text-gray-600">{{ term.qrImage.alt }}</div>
                                    </div>
                                </div>




                                <!-- En caso contrario, mostrar texto normal -->
                                <p v-html="term.content"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Lightbox -->
        <div v-if="showLightbox" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div class="relative max-w-3xl w-full">
                <img :src="lightboxImage.src" :alt="lightboxImage.alt"
                    class="w-full max-h-[90vh] object-contain rounded" />
                <button @click="closeLightbox"
                    class="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1 text-sm">
                    ✕ Cerrar
                </button>
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
            lightboxImage: null,
            showLightbox: false,
            terms: [
                {
                    id: 'acceptance',
                    title: '🏛️ Descripción',
                    content:
                        'Médico Cirujano Plástico en Tarija, Bolivia, especialista en belleza corporal y facial. Atención con profesionalismo y seguridad.',
                },
                {
                    id: 'description',
                    title: '⚙️ Productos / Servicios',
                    content:
                        'Somos especialistas en belleza Corporal y Facial, realizamos siempre nuestra labor siguiendo los estándares de profesionalismo y seguridad más altos y otorgamos el mejor servicio para que nuestros pacientes se sientan cómodos y satisfechos. El Dr. Javier Ruiz Barea es Director de la Clínica Sao Paulo.',
                },
                
                {
                    id: 'contact',
                    title: '🗺️ Contacto',
                    content: `📞 <a href="https://wa.me/59171863980" target="_blank">+591 71863980</a><br>
                        <i class="fab fa-whatsapp"></i> <a href="https://wa.me/59146633056" target="_blank">+591 4 6633056</a><br><br>
                        <i class="fas fa-envelope"></i> <a href="mailto:correo@ejemplo.com" target="_blank">correo@ejemplo.com</a><br>    
                        <i class="fab fa-linkedin-in"></i> <a href="https://linkedin.com/in/usuario" target="_blank">LinkedIn</a><br>    
                        <i class="fab fa-facebook-f"></i> <a href="https://facebook.com/usuario" target="_blank">Facebook</a><br>    
                        <i class="fab fa-instagram"></i> <a href="https://instagram.com/usuario" target="_blank">Instagram</a><br>    
                        <i class="fab fa-tiktok"></i> <a href="https://tiktok.com/@usuario" target="_blank">TikTok</a><br><br>   
                        <i class="fas fa-map-marker-alt"></i> <a  href="https://www.google.com/maps/search/?api=1&query=Av.+América+123+Cochabamba"  target="_blank">   Av. América 123, Cochabamba</a>`
                },

                
                {
                    id: 'gallery',
                    title: '🖼️ Galería',
                    content: 'Imágenes en cards',
                    gallery: [
                        {
                            src: 'https://via.placeholder.com/300x200',
                            alt: 'Antes y después 1'
                        },
                        {
                            src: 'https://via.placeholder.com/300x200',
                            alt: 'Antes y después 2'
                        },
                        {
                            src: 'https://via.placeholder.com/300x200',
                            alt: 'Procedimiento 3'
                        },
                        {
                            src: 'https://via.placeholder.com/300x200',
                            alt: 'Certificado de ISAPS'
                        },
                        {
                            src: 'https://via.placeholder.com/300x200',
                            alt: 'Miembro Sociedad Boliviana'
                        },
                        {
                            src: 'https://via.placeholder.com/300x200',
                            alt: 'Certificado ASPS'
                        }
                    ]
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
                    id: 'qr',
                    title: '📱 QR para compartir Tarjeta',
                    content: 'Escanea el código QR para compartir esta tarjeta digital.',
                    qrImage: {
                        src: 'https://via.placeholder.com/300x300',
                        alt: 'Código QR para compartir'
                    }
                }



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
        openLightbox(image) {
            this.lightboxImage = image;
            this.showLightbox = true;
        },
        closeLightbox() {
            this.showLightbox = false;
            this.lightboxImage = null;
        },
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