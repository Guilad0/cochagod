<template>
  <div class="min-h-screen bg-white p-6">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2 text-center">
          Crear negocio <span class="text-orange-500">Cocha</span>
          <span class="text-sky-500">Go</span>
        </h1>
        <p class="text-gray-600 text-center">Crea un negocio afiliado choquito</p>
      </div>

      <div class="w-full">
        <div class="grid w-full grid-cols-1 mb-6 bg-gray-100 rounded-lg p-1">
          <button
            @click="activeTab = 'form'"
            :class="[
              'px-4 py-2 rounded-md font-medium transition-colors',
              activeTab === 'form'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Formulario
          </button>
          <!-- <button
            @click="activeTab = 'gallery'"
            :class="[
              'px-4 py-2 rounded-md font-medium transition-colors',
              activeTab === 'gallery'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Galería
          </button> -->
        </div>

        <!-- Form Tab -->
        <div v-show="activeTab === 'form'">
          <div class="border-2 border-orange-500 rounded-lg bg-white shadow-sm">
            <div class="p-6 border-b">
              <h2 class="text-xl font-semibold text-orange-600">
                Información del Negocio
              </h2>
              <p class="text-sm text-gray-600 mt-1">
                Completa todos los campos para registrar tu negocio
              </p>
            </div>
            <div class="p-6">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="name" class="block text-sm font-medium text-gray-700">
                      Nombre del Negocio <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      placeholder="Ingresa el nombre"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.name ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.name" class="text-sm text-red-600">
                      {{ errors.name }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label
                      for="category_id"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Categoría <span class="text-red-500">*</span>
                    </label>
                    <select
                      id="category_id"
                      v-model="formData.category_id"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.category_id ? 'border-red-500' : 'border-gray-300',
                      ]"
                    >
                      <option value="">Seleccionar categoría</option>
                      <option
                        v-for="category in categories"
                        :key="category.categoryid"
                        :value="category.category_id"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                    <p v-if="errors.category_id" class="text-sm text-red-600">
                      {{ errors.category_id }}
                    </p>
                  </div>
                </div>

                <div class="space-y-2">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Descripción <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    v-model="formData.description"
                    placeholder="Describe tu negocio"
                    rows="3"
                    :class="[
                      'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                      errors.description ? 'border-red-500' : 'border-gray-300',
                    ]"
                  ></textarea>
                  <p v-if="errors.description" class="text-sm text-red-600">
                    {{ errors.description }}
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="address" class="block text-sm font-medium text-gray-700">
                      Dirección <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="address"
                      v-model="formData.address"
                      type="text"
                      placeholder="Dirección completa"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                        errors.address ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.address" class="text-sm text-red-600">
                      {{ errors.address }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label for="phone" class="block text-sm font-medium text-gray-700">
                      Teléfono <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      v-model="formData.phone"
                      type="text"
                      placeholder="Número de contacto"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                        errors.phone ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.phone" class="text-sm text-red-600">
                      {{ errors.phone }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      placeholder="correo@ejemplo.com"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.email ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.email" class="text-sm text-red-600">
                      {{ errors.email }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label for="website" class="block text-sm font-medium text-gray-700">
                      Sitio Web
                    </label>
                    <input
                      id="website"
                      v-model="formData.website"
                      type="text"
                      placeholder="https://ejemplo.com"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.website ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.website" class="text-sm text-red-600">
                      {{ errors.website }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="space-y-2">
                    <label for="zone" class="block text-sm font-medium text-gray-700">
                      Zona
                    </label>
                    <input
                      id="zone"
                      v-model="formData.zone"
                      type="text"
                      placeholder="Zona geográfica"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                        errors.zone ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.zone" class="text-sm text-red-600">
                      {{ errors.zone }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label for="location" class="block text-sm font-medium text-gray-700">
                      Ubicación
                    </label>
                    <input
                      id="location"
                      v-model="formData.location"
                      type="text"
                      placeholder="Coordenadas o referencia"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                        errors.location ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.location" class="text-sm text-red-600">
                      {{ errors.location }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label for="rating" class="block text-sm font-medium text-gray-700">
                      Calificación
                    </label>
                    <input
                      id="rating"
                      v-model="formData.rating"
                      type="text"
                      placeholder="0.0"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.rating ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.rating" class="text-sm text-red-600">
                      {{ errors.rating }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label
                      for="link_facebook"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Facebook
                    </label>
                    <input
                      id="link_facebook"
                      v-model="formData.link_facebook"
                      type="text"
                      placeholder="https://facebook.com/tu-negocio"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.link_facebook ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.link_facebook" class="text-sm text-red-600">
                      {{ errors.link_facebook }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label
                      for="link_tiktok"
                      class="block text-sm font-medium text-gray-700"
                    >
                      TikTok
                    </label>
                    <input
                      id="link_tiktok"
                      v-model="formData.link_tiktok"
                      type="text"
                      placeholder="https://tiktok.com/@tu-negocio"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                        errors.link_tiktok ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.link_tiktok" class="text-sm text-red-600">
                      {{ errors.link_tiktok }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label
                      for="phone_two"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Teléfono Secundario
                    </label>
                    <input
                      id="phone_two"
                      v-model="formData.phone_two"
                      type="text"
                      placeholder="Número secundario"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                        errors.phone_two ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.phone_two" class="text-sm text-red-600">
                      {{ errors.phone_two }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <label for="url_qr" class="block text-sm font-medium text-gray-700">
                      URL QR
                    </label>
                    <input
                      id="url_qr"
                      v-model="formData.url_qr"
                      type="text"
                      placeholder="URL del código QR"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                        errors.url_qr ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.url_qr" class="text-sm text-red-600">
                      {{ errors.url_qr }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="map" class="block text-sm font-medium text-gray-700">
                      Mapa
                    </label>
                    <input
                      id="map"
                      v-model="formData.map"
                      type="text"
                      placeholder="URL o coordenadas del mapa"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.map ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.map" class="text-sm text-red-600">{{ errors.map }}</p>
                  </div>
                  <div class="space-y-2">
                    <label for="end_day" class="block text-sm font-medium text-gray-700">
                      Día de Finalización
                    </label>
                    <input
                      id="end_day"
                      v-model="formData.end_day"
                      type="date"
                      :class="[
                        'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                        errors.end_day ? 'border-red-500' : 'border-gray-300',
                      ]"
                    />
                    <p v-if="errors.end_day" class="text-sm text-red-600">
                      {{ errors.end_day }}
                    </p>
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="subtipo" class="block text-sm font-medium text-gray-700">
                    Subtipo
                  </label>
                  <input
                    id="subtipo"
                    v-model="formData.subtipo"
                    type="text"
                    placeholder="Subcategoría del negocio"
                    :class="[
                      'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                      errors.subtipo ? 'border-red-500' : 'border-gray-300',
                    ]"
                  />
                  <p v-if="errors.subtipo" class="text-sm text-red-600">
                    {{ errors.subtipo }}
                  </p>
                </div>

                <div class="space-y-2">
                  <label for="servicios" class="block text-sm font-medium text-gray-700">
                    Servicios
                  </label>
                  <textarea
                    id="servicios"
                    v-model="formData.servicios"
                    placeholder="Lista de servicios que ofreces"
                    rows="3"
                    :class="[
                      'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                      errors.servicios ? 'border-red-500' : 'border-gray-300',
                    ]"
                  ></textarea>
                  <p v-if="errors.servicios" class="text-sm text-red-600">
                    {{ errors.servicios }}
                  </p>
                </div>

                <div class="space-y-2">
                  <label for="links" class="block text-sm font-medium text-gray-700">
                    Enlaces Adicionales
                  </label>
                  <textarea
                    id="links"
                    v-model="formData.links"
                    placeholder="Otros enlaces relevantes"
                    rows="2"
                    :class="[
                      'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                      errors.links ? 'border-red-500' : 'border-gray-300',
                    ]"
                  ></textarea>
                  <p v-if="errors.links" class="text-sm text-red-600">
                    {{ errors.links }}
                  </p>
                </div>

                <div class="space-y-2">
                  <label for="logo_url" class="block text-sm font-medium text-gray-700">
                    URL del Logo
                  </label>
                  <input
                    id="logo_url"
                    v-model="formData.logo_url"
                    type="text"
                    placeholder="https://ejemplo.com/logo.png"
                    :class="[
                      'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
                      errors.logo_url ? 'border-red-500' : 'border-gray-300',
                    ]"
                  />
                  <p v-if="errors.logo_url" class="text-sm text-red-600">
                    {{ errors.logo_url }}
                  </p>
                </div>

                <div class="flex items-center space-x-3">
                  <div class="relative">
                    <input
                      id="is_active"
                      v-model="formData.is_active"
                      type="checkbox"
                      class="sr-only"
                    />
                    <button
                      type="button"
                      @click="formData.is_active = formData.is_active === 1 ? 0 : 1"
                      :class="[
                        'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
                        formData.is_active === 1 ? 'bg-orange-500' : 'bg-gray-200',
                      ]"
                    >
                      <span
                        :class="[
                          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                          formData.is_active === 1 ? 'translate-x-6' : 'translate-x-1',
                        ]"
                      ></span>
                    </button>
                  </div>
                  <label for="is_active" class="text-sm font-medium text-gray-700">
                    Negocio Activo
                  </label>
                </div>

                <div
                  v-if="Object.keys(errors).length > 0"
                  class="bg-red-50 border border-red-200 rounded-md p-4"
                >
                  <div class="flex">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div class="ml-3">
                      <h3 class="text-sm font-medium text-red-800">
                        Por favor, corrige los siguientes errores:
                      </h3>
                      <div class="mt-2 text-sm text-red-700">
                        <ul class="list-disc space-y-1 pl-5">
                          <li v-for="(error, field) in errors" :key="field">
                            {{ error }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex gap-4">
                  <button
                    type="submit"
                    :disabled="isLoading"
                    class="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {{ isLoading ? "Guardando..." : "Guardar Negocio" }}
                  </button>
                  <button
                    type="button"
                    @click="resetForm"
                    :disabled="isLoading"
                    class="px-4 py-2 border border-sky-500 text-sky-500 bg-transparent rounded-md hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                  >
                    Limpiar Formulario
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!--         
        <div v-show="activeTab === 'gallery'">
          <div class="border-2 border-sky-500 rounded-lg bg-white shadow-sm">
            <div class="p-6 border-b">
              <h2 class="text-xl font-semibold text-sky-600">Galería de Imágenes</h2>
              <p class="text-sm text-gray-600 mt-1">
                Sube del negocio afiliado like: Foto: Perfil, Cover, Galeria y demas
              </p>
            </div>
            <div class="p-6">
              <div class="space-y-6">
                <div
                  @drop.prevent="handleDrop"
                  @dragover.prevent
                  @dragenter.prevent
                  @dragleave.prevent
                  :class="[
                    'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
                    isDragActive
                      ? 'border-sky-500 bg-sky-50'
                      : 'border-gray-300 hover:border-sky-400 hover:bg-sky-50',
                  ]"
                  @click="$refs.fileInput.click()"
                >
                  <input
                    ref="fileInput"
                    type="file"
                    multiple
                    accept="image/*"
                    @change="handleFileSelect"
                    class="hidden"
                  />

                  <svg
                    class="mx-auto h-12 w-12 text-sky-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>

                  <div v-if="isDragActive">
                    <p class="text-sky-600 font-medium">Suelta las imágenes aquí...</p>
                  </div>
                  <div v-else>
                    <p class="text-gray-600 font-medium mb-2">
                      Arrastra y suelta imágenes aquí, o haz clic para seleccionar
                    </p>
                    <p class="text-sm text-gray-500">
                      Formatos soportados: JPG, PNG, GIF, WebP
                    </p>
                  </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    Imágenes Subidas ({{ uploadedFiles.length }})
                  </h3>
                  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div
                      v-for="(file, index) in uploadedFiles"
                      :key="file.id"
                      class="relative group"
                    >
                      <div
                        :class="[
                          'aspect-square rounded-lg overflow-hidden bg-gray-100 border-2',
                          index % 2 === 0 ? 'border-orange-500' : 'border-sky-500',
                        ]"
                      >
                        <img
                          :src="file.preview"
                          :alt="file.file.name"
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        @click="removeFile(file.id)"
                        class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg
                          class="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                      <p class="mt-2 text-xs text-gray-600 truncate">
                        {{ file.file.name }}
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else class="text-center py-8">
                  <svg
                    class="mx-auto h-16 w-16 text-gray-300 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p class="text-gray-500">No hay imágenes subidas aún</p>
                </div>

                <div class="flex gap-4">
                  <button
                    type="button"
                    class="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
                  >
                    Guardar Galería
                  </button>
                  <button
                    type="button"
                    @click="clearAllFiles"
                    class="px-4 py-2 border border-orange-500 text-orange-500 bg-transparent rounded-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                  >
                    Limpiar Todo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import axios from "axios";

const ruta = ref(import.meta.env.VITE_BASE_URL);

const activeTab = ref("form");
const isDragActive = ref(false);
const categories = ref([]);
const isLoading = ref(false);

const errors = reactive({});

const formData = ref({
  name: "",
  description: "",
  address: "",
  phone: "",
  email: "",
  website: "",
  category: "",
  logo_url: "",
  is_active: 1,
  location: "",
  links: "",
  zone: "",
  rating: "",
  category_id: "",
  subtipo: "",
  link_facebook: "",
  link_tiktok: "",
  servicios: "",
  phone_two: "",
  url_qr: "",
  map: "",
  end_day: "",
});

const uploadedFiles = ref([]);

const validateRequired = (value, fieldName) => {
  if (!value || value === "") {
    return `${fieldName} es requerido`;
  }
  return null;
};

const validateEmail = (email) => {
  if (!email) return null;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Ingresa un email válido";
  }
  return null;
};

const validatePhone = (phone) => {
  if (!phone) return null;
  const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
  if (!phoneRegex.test(phone)) {
    return "Ingresa un número de teléfono válido (7-15 dígitos)";
  }
  return null;
};

const validateURL = (url, fieldName) => {
  if (!url) return null;
  try {
    new URL(url);
    return null;
  } catch {
    return `${fieldName} debe ser una URL válida (ej: https://ejemplo.com)`;
  }
};

const validateRating = (rating) => {
  if (!rating) return null;
  const num = parseFloat(rating);
  if (isNaN(num) || num < 0 || num > 5) {
    return "La calificación debe ser un número entre 0 y 5";
  }
  return null;
};

const validateDate = (date) => {
  if (!date) return null;
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return "La fecha no puede ser anterior a hoy";
  }
  return null;
};

const validateLength = (value, fieldName, minLength, maxLength) => {
  if (!value) return null;

  if (value.length < minLength) {
    return `${fieldName} debe tener al menos ${minLength} caracteres`;
  }

  if (maxLength && value.length > maxLength) {
    return `${fieldName} no puede exceder ${maxLength} caracteres`;
  }

  return null;
};

const validateForm = () => {
  Object.keys(errors).forEach((key) => delete errors[key]);

  const requiredError = validateRequired(formData.value.name, "Nombre del negocio");
  if (requiredError) errors.name = requiredError;

  const categoryError = validateRequired(formData.value.category_id, "Categoría");
  if (categoryError) errors.category_id = categoryError;

  const descriptionError = validateRequired(formData.value.description, "Descripción");
  if (descriptionError) errors.description = descriptionError;

  const addressError = validateRequired(formData.value.address, "Dirección");
  if (addressError) errors.address = addressError;

  const phoneError = validateRequired(formData.value.phone, "Teléfono");
  if (phoneError) {
    errors.phone = phoneError;
  } else {
    const phoneFormatError = validatePhone(formData.value.phone);
    if (phoneFormatError) errors.phone = phoneFormatError;
  }

  const nameLength = validateLength(formData.value.name, "Nombre del negocio", 2, 100);
  if (nameLength) errors.name = nameLength;

  const descriptionLength = validateLength(
    formData.value.description,
    "Descripción",
    10,
    500
  );
  if (descriptionLength) errors.description = descriptionLength;

  const addressLength = validateLength(formData.value.address, "Dirección", 5, 200);
  if (addressLength) errors.address = addressLength;

  const emailError = validateEmail(formData.value.email);
  if (emailError) errors.email = emailError;

  const websiteError = validateURL(formData.value.website, "Sitio web");
  if (websiteError) errors.website = websiteError;

  const facebookError = validateURL(formData.value.link_facebook, "Enlace de Facebook");
  if (facebookError) errors.link_facebook = facebookError;

  const tiktokError = validateURL(formData.value.link_tiktok, "Enlace de TikTok");
  if (tiktokError) errors.link_tiktok = tiktokError;

  const logoError = validateURL(formData.value.logo_url, "URL del logo");
  if (logoError) errors.logo_url = logoError;

  const qrError = validateURL(formData.value.url_qr, "URL QR");
  if (qrError) errors.url_qr = qrError;

  const ratingError = validateRating(formData.value.rating);
  if (ratingError) errors.rating = ratingError;

  const dateError = validateDate(formData.value.end_day);
  if (dateError) errors.end_day = dateError;

  if (formData.value.phone_two) {
    const phoneSecondaryError = validatePhone(formData.value.phone_two);
    if (phoneSecondaryError) errors.phone_two = phoneSecondaryError;
  }

  if (formData.value.zone) {
    const zoneLength = validateLength(formData.value.zone, "Zona", 2, 50);
    if (zoneLength) errors.zone = zoneLength;
  }

  if (formData.value.location) {
    const locationLength = validateLength(formData.value.location, "Ubicación", 3, 100);
    if (locationLength) errors.location = locationLength;
  }

  if (formData.value.subtipo) {
    const subtipoLength = validateLength(formData.value.subtipo, "Subtipo", 2, 50);
    if (subtipoLength) errors.subtipo = subtipoLength;
  }

  if (formData.value.servicios) {
    const serviciosLength = validateLength(
      formData.value.servicios,
      "Servicios",
      5,
      1000
    );
    if (serviciosLength) errors.servicios = serviciosLength;
  }

  if (formData.value.links) {
    const linksLength = validateLength(
      formData.value.links,
      "Enlaces adicionales",
      5,
      500
    );
    if (linksLength) errors.links = linksLength;
  }

  if (formData.value.map) {
    const mapLength = validateLength(formData.value.map, "Mapa", 5, 200);
    if (mapLength) errors.map = mapLength;
  }

  return Object.keys(errors).length === 0;
};

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${ruta.value}/category`);
    categories.value = response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    alert("Error al cargar las categorías");
  }
};

const createBusiness = async (businessData) => {
  try {
    isLoading.value = true;
    const response = await axios.post(`${ruta.value}/business`, businessData);
    return response.data;
  } catch (error) {
    console.error("Error creating business:", error);

    if (error.response && error.response.data) {
      const serverErrors = error.response.data.errors;
      if (serverErrors) {
        Object.keys(serverErrors).forEach((key) => {
          errors[key] = Array.isArray(serverErrors[key])
            ? serverErrors[key][0]
            : serverErrors[key];
        });
      }
    }

    throw error;
  } finally {
    isLoading.value = false;
  }
};

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files);
  addFiles(files);
};

const handleDrop = (event) => {
  isDragActive.value = false;
  const files = Array.from(event.dataTransfer.files).filter((file) =>
    file.type.startsWith("image/")
  );
  addFiles(files);
};

const addFiles = (files) => {
  const newFiles = files.map((file) => ({
    id: Date.now() + file.name,
    file,
    preview: URL.createObjectURL(file),
  }));
  uploadedFiles.value.push(...newFiles);
};

const removeFile = (id) => {
  const fileIndex = uploadedFiles.value.findIndex((f) => f.id === id);
  if (fileIndex > -1) {
    const file = uploadedFiles.value[fileIndex];
    URL.revokeObjectURL(file.preview);
    uploadedFiles.value.splice(fileIndex, 1);
  }
};

const clearAllFiles = () => {
  uploadedFiles.value.forEach((file) => {
    URL.revokeObjectURL(file.preview);
  });
  uploadedFiles.value = [];
};

const handleSubmit = async () => {
  if (!validateForm()) {
    const firstErrorField = document.querySelector(".border-red-500");
    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      firstErrorField.focus();
    }
    return;
  }

  try {
    const businessData = {
      name: formData.value.name.trim(),
      description: formData.value.description.trim(),
      address: formData.value.address.trim(),
      phone: formData.value.phone.trim(),
      email: formData.value.email.trim(),
      website: formData.value.website.trim(),
      category: formData.value.category,
      logo_url: formData.value.logo_url.trim(),
      is_active: formData.value.is_active,
      location: formData.value.location.trim(),
      links: formData.value.links.trim(),
      zone: formData.value.zone.trim(),
      rating: formData.value.rating || "0",
      category_id: formData.value.category_id,
      subtipo: formData.value.subtipo.trim(),
      link_facebook: formData.value.link_facebook.trim(),
      link_tiktok: formData.value.link_tiktok.trim(),
      servicios: formData.value.servicios.trim(),
      phone_two: formData.value.phone_two.trim(),
      url_qr: formData.value.url_qr.trim(),
      map: formData.value.map.trim(),
      end_day: formData.value.end_day,
    };

    console.log("Enviando datos:", businessData);

    const result = await createBusiness(businessData);
    console.log("Negocio creado exitosamente:", result);

    alert("¡Negocio creado exitosamente!");
    resetForm();
  } catch (error) {
    console.error("Error al crear el negocio:", error);

    if (Object.keys(errors).length === 0) {
      alert(
        "Error al crear el negocio. Por favor, verifica los datos e intenta de nuevo."
      );
    }
  }
};

const resetForm = () => {
  formData.value = {
    name: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    category: "",
    logo_url: "",
    is_active: 1,
    location: "",
    links: "",
    zone: "",
    rating: "",
    category_id: "",
    subtipo: "",
    link_facebook: "",
    link_tiktok: "",
    servicios: "",
    phone_two: "",
    url_qr: "",
    map: "",
    end_day: "",
  };

  Object.keys(errors).forEach((key) => delete errors[key]);
};

onMounted(() => {
  fetchCategories();
});

onUnmounted(() => {
  uploadedFiles.value.forEach((file) => {
    URL.revokeObjectURL(file.preview);
  });
});
</script>
