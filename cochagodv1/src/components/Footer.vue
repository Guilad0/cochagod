<template>
    <footer class="modern-footer">
        <div class="footer-content">
            <!-- Sección 1: Logo y descripción -->
            <div class="footer-section">
                <div class="logo-container">
                    <img src=# alt="Logo" class="footer-logo" />
                    <p class="footer-description">
                        Tu ciudad en un clic: Descubre, explora y conecta con lo mejor de la región.
                    </p>
                </div>
            </div>

            <!-- Sección 2: Enlaces rápidos -->
            <div class="footer-section">
                <h3 class="footer-title">Enlaces rápidos</h3>
                <ul class="footer-links">
                    <li>
                        <RouterLink to="/">Inicio</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">Nosotros</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services">Servicios</RouterLink>
                    </li>                   
                    <li>
                        <RouterLink to="/contact">Contacto</RouterLink>
                    </li>
                </ul>
            </div>

            <!-- Sección 3: Contacto -->
            <div class="footer-section">
                <h3 class="footer-title">Contacto</h3>
                <ul class="contact-info">
                    <li><i class="fas fa-envelope"></i> CochaGo@gmail.com</li>
                    <li><i class="fas fa-phone"></i> +591 12345678</li>
                    <li><i class="fas fa-map-marker-alt"></i> Cochabamba, Bolivia</li>
                </ul>
            </div>

            <!-- Sección 4: Redes sociales -->
            <div class="footer-section">
                <h3 class="footer-title">Síguenos</h3>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                </div>               
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p>&copy; {{ currentYear }} CochaGO. Todos los derechos reservados.</p>
            <div class="legal-links">
                <RouterLink to="/privacy">Política de Privacidad</RouterLink>
                <RouterLink to="/terms">Términos de Servicio</RouterLink>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.modern-footer {
    background-color: #0A192F;
    color: #17A589;
    padding: 2rem 0 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.footer-section {
    margin-bottom: 1.5rem;
    
}

.footer-logo {
    height: 40px;
    margin-bottom: 1rem;
}

.footer-description {
    font-size: 0.9rem;
    line-height: 1.5;   
    color: #17A589;
}

.footer-title {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    position: relative;
    padding-bottom: 0.5rem;    
}

.footer-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: #17A589;
}

.footer-links {
    list-style: none;
    padding: 0;
    
}

.footer-links li {
    margin-bottom: 0.6rem;
}

.footer-links a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #3498db;
}

.contact-info {
    list-style: none;
    padding: 0;
}

.contact-info li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.social-links a {
    color: #ecf0f1;
    background-color: #34495e;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.social-links a:hover {
    background-color: #3498db;
    transform: translateY(-3px);
}

.newsletter input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 4px;
}

.subscribe-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.subscribe-btn:hover {
    background-color: #2980b9;
}

.footer-bottom {
    background-color: #1a252f;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
}

.legal-links {
    margin-top: 0.5rem;
}

.legal-links a {
    color: #bdc3c7;
    margin: 0 0.5rem;
    text-decoration: none;
}

.legal-links a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
    }

    .footer-section {
        text-align: center;
    }

    .footer-title::after {
        left: 50%;
        transform: translateX(-50%);
    }

    .social-links {
        justify-content: center;
    }
}
</style>