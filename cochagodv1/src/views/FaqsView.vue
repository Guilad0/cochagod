<template>
  <section class="faqs p-6 max-w-4xl mx-auto pt-20">

    <h2 class="text-3xl font-bold mb-4 text-center text-blue-700">Preguntas Frecuentes (FAQs)</h2>
    <p class="mb-6 text-gray-600 text-center">
      Sabemos que al explorar una guía digital como esta pueden surgir varias dudas, tanto si eres un usuario que busca
      servicios como si tienes un negocio y te interesa aparecer en ella. Aquí respondemos de forma directa y sencilla
      las preguntas más comunes para que aproveches al máximo todo lo que ofrece esta plataforma. Y si hay algo más que
      quieras saber, no dudes en escribirnos: estamos para ayudarte.
    </p>

    <ul class="space-y-4">
      <li v-for="(faq, index) in faqs" :key="index" class="border rounded-lg shadow-sm">
        <button
          class="w-full text-left px-4 py-3 flex justify-between items-center bg-white hover:bg-blue-50 transition"
          @click="toggle(index)">
          <span class="font-medium text-blue-800">{{ index + 1 }}. {{ faq.pregunta }}</span>
          <span class="text-gray-500">{{ faq.abierto ? '−' : '+' }}</span>
        </button>
        <div v-show="faq.abierto" class="px-4 py-3 bg-gray-50 text-gray-700 transition-all duration-300">
          {{ faq.respuesta }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([

  {
    pregunta: '¿Quiénes somos?',
    respuesta: 'Somos un equipo de emprendedores digitales comprometidos con conectar a Cochabamba. Creamos esta guía para que encontrar servicios, negocios y experiencias en la ciudad sea tan fácil como escanear un código o hacer un click. Creemos en el poder de lo local, en mostrar lo mejor de cada emprendimiento, y en facilitar que las personas descubran y se conecten con lo que realmente necesitan. Nuestra plataforma es sencilla, rápida y hecha con cariño para apoyar a quienes construyen ciudad todos los días: desde el restaurante familiar hasta el técnico que resuelve lo que nadie más puede.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Cómo puedo buscar negocios o servicios específicos?',
    respuesta: 'En nuestra guía, tienes varias formas de encontrar fácilmente lo que buscas. Puedes navegar por las diferentes categorías disponibles a través de la barra de navegación en la parte superior de la página, donde encontrarás secciones como comercios, entretenimiento, alojamiento y turismo. Además, en la página de inicio, contamos con un práctico buscador que te permitirá filtrar los negocios o servicios por nombre, tipo de actividad o ubicación, lo que facilita encontrar rápidamente lo que necesitas. ¡Así podrás explorar Cochabamba y descubrir todo lo que te interesa de manera rápida y eficiente!',
    abierto: false,
  },
  {
    pregunta: '¿Puedo dejar comentarios o calificar un lugar?',
    respuesta: 'Sí, en nuestra guía puedes dejar una reseña y calificación sobre los negocios o servicios que hayas visitado. Los usuarios tienen la libertad de compartir su experiencia para ayudar a otros a tomar decisiones informadas. Sin embargo, como administradores de la página, nos encargamos de revisar y aprobar todas las reseñas para garantizar que cumplan con nuestros estándares de respeto y calidad. Nunca permitimos comentarios que falten al respeto ni a los usuarios ni a los negocios. Queremos fomentar un ambiente de confianza y positividad, donde todos puedan expresarse de manera constructiva.',
    abierto: false,
  },
  {
    pregunta: '¿La guía funciona también desde el celular?',
    respuesta: '¡Sí! La guía está completamente optimizada para dispositivos móviles. Gracias a su diseño responsivo, podrás acceder a todas sus funciones sin problemas desde tu celular. Ya sea para explorar negocios, ver información de productos o servicios, o utilizar el buscador, todo funcionará perfectamente en tu dispositivo móvil, brindándote la mejor experiencia en cualquier lugar.',
    abierto: false,
  },
  {
    pregunta: '¿Puedo contactar directamente con los negocios desde esta guía?',
    respuesta: '¡Sí! A través de cada tarjeta digital, podrás encontrar enlaces directos al teléfono y a las redes sociales del negocio o entidad. Esto te permitirá ponerte en contacto fácilmente, ya sea para hacer una consulta, hacer una reservación o conocer más sobre sus productos o servicios. Con solo un clic, estarás en contacto directo con el negocio desde la misma guía.',
    abierto: false,
  },
  {
    pregunta: '¿Necesito registrarme para usar la guía?',
    respuesta: 'No, no necesitas registrarte para navegar por la guía. Tanto los usuarios que buscan información como las personas interesadas en adquirir una tarjeta digital pueden explorar libremente todas las secciones. Además, las personas que deseen anunciar su negocio o entidad pueden hacerlo sin necesidad de crear una cuenta, lo que hace el proceso más sencillo y accesible para todos.',
    abierto: false,
  },
  {
    pregunta: '¿Cómo puedo anunciar mi negocio en la guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'Es muy fácil. Solo necesitas ponerte en contacto con nosotros a través de la información disponible al final del sitio web o mediante un mensaje directo por WhatsApp. Uno de nuestros representantes se reunirá contigo para recoger la información que desees incluir en tu tarjeta digital. En un plazo máximo de 24 horas, tu tarjeta estará publicada en la guía. Además, te entregaremos dos stickers tamaño media carta con un código QR personalizado que, al escanearlo, llevará directamente a los usuarios a tu tarjeta digital. ¡Así de simple y directo!',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  {
    pregunta: '¿Qué tipo de información puedo encontrar en esta guía?',
    respuesta: 'En nuestra guía podrás encontrar una completa recopilación de los mejores lugares y servicios de la ciudad de Cochabamba, organizados en diversas categorías como comercios, servicios, entretenimiento, alojamiento y turismo. Cada categoría ofrece una amplia variedad de tarjetas digitales de negocios, empresas y profesionales locales. Estas tarjetas contienen toda la información relevante sobre los productos o servicios que ofrecen, incluyendo descripciones, ubicación, horarios, contactos, galerías de fotos y reseñas de sus negocios. De esta manera, tendrás acceso rápido y fácil a todo lo que necesitas para explorar y aprovechar lo mejor que Cochabamba tiene para ofrecer.',
    abierto: false,
  },
  
])

function toggle(index) {
  faqs.value[index].abierto = !faqs.value[index].abierto
}
</script>
