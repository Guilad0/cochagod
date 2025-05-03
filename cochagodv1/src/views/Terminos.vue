<template>
    <div class="pt-20">
        <div class="flex">
            <!-- Sidebar Navigation - Fixed -->
            <div class="hidden md:block w-64 bg-[#0A192F] text-[#EAEAEA] fixed h-screen p-4 overflow-y-auto">
                <h2 class="text-xl font-bold mb-6 text-[#17A589]">Navegación</h2>
                <nav>
                    <ul class="space-y-3">
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
            <div class="w-full md:ml-64 bg-[#EAEAEA] text-[#0A192F] pt-20 p-6">
                <h1 class="text-3xl font-bold mb-8 text-[#F76C5E]">Términos de Servicio de CochaGo</h1>
                <p class="mb-8">Última actualización: mayo de 2025</p>

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

</template>

<script>
export default {
    data() {
        return {
            activeTerm: 'acceptance',
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
                {
                    id: 'data',
                    title: '3. Datos Recopilados',
                    content: 'CochaGo recopila información personal con el fin de brindarte un servicio de calidad. Los datos que recopilamos incluyen:<br>• Datos de contacto que el usuario proporciona de manera voluntaria (por ejemplo, nombre, número de teléfono, redes sociales).<br>• Opiniones o reseñas que los usuarios publican.<br>• Información técnica (dirección IP, navegador, dispositivo).<br>• Datos compartidos a través de formularios o WhatsApp.'
                },
                {
                    id: 'use',
                    title: '4. Uso de la Información',
                    content: 'Los datos recopilados se utilizan para los siguientes fines:<br>• Crear y mostrar tarjetas digitales de negocios y profesionales.<br>• Publicar reseñas de usuarios y mejorar la experiencia en la plataforma.<br>• Mantener la seguridad y funcionamiento técnico de la plataforma.<br>• Contactar a los usuarios para confirmar o actualizar los datos de sus tarjetas digitales.<br>• Mejorar el servicio mediante análisis anónimos.'
                },
                {
                    id: 'share',
                    title: '5. Compartir Información',
                    content: 'No vendemos ni alquilamos la información personal de nuestros usuarios. Sin embargo, podemos compartirla en los siguientes casos:<br>• Con tu autorización previa.<br>• Con proveedores de servicios que nos asisten en el funcionamiento del sitio (por ejemplo, proveedores de hosting, análisis web).<br>• Si lo requiere la ley o por razones legales.'
                },
                {
                    id: 'cookies',
                    title: '6. Uso de Cookies',
                    content: 'Nuestro sitio utiliza cookies para mejorar tu experiencia de usuario. Las cookies son pequeños archivos que se almacenan en tu dispositivo. Puedes desactivarlas desde la configuración de tu navegador, aunque ten en cuenta que algunas funcionalidades del sitio podrían verse afectadas.'
                },
                {
                    id: 'reviews',
                    title: '7. Reseñas y Contenido Generado por Usuarios',
                    content: 'Las reseñas y opiniones que publiques en nuestro sitio son visibles para otros usuarios. Nos reservamos el derecho de moderarlas y eliminarlas en caso de que incumplan nuestras políticas de contenido o normas de conducta.'
                },
                {
                    id: 'security',
                    title: '8. Seguridad de los Datos',
                    content: 'Nos comprometemos a tomar las medidas necesarias para proteger tu información personal. Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar una seguridad absoluta.'
                },
                {
                    id: 'rights',
                    title: '9. Derechos de los Usuarios',
                    content: 'Tienes el derecho a acceder, corregir o eliminar tus datos personales. Si deseas ejercer estos derechos, puedes ponerte en contacto con nosotros a través del correo electrónico proporcionado en nuestra plataforma.'
                },
                {
                    id: 'changes',
                    title: '10. Cambios en los Términos',
                    content: 'Nos reservamos el derecho de modificar estos Términos en cualquier momento. Cualquier cambio será reflejado en esta página con la fecha de actualización. Te recomendamos revisar regularmente estos Términos.'
                },
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

            sections.forEach(section => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.clientHeight
                if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                    current = section.getAttribute('id')
                }
            })

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