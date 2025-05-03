<template>
    <div class="error-page">
        <div class="text">
            <h1>404</h1>
            <br><br>
            <h3>Ups... esta dirección no está registrada en la ciudad.</h3>
            <br>
            <router-link to="/" class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 transition">
                Volver al inicio
            </router-link>
        </div>
        <div class="torch" :style="torchPosition"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const torchPosition = ref({
    top: '0px',
    left: '0px'
});

const handleMouseMove = (event) => {
    torchPosition.value = {
        top: `${event.pageY}px`,
        left: `${event.pageX}px`
    };
};

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
.error-page {
    height: 100vh;
    width: 100vw;
    background: url("https://latinosanbolivia2022.com/wp-content/uploads/2022/05/Vista_Aerea_del_Cristo_de_la_Concordia.jpg") no-repeat left top;
    background-size: cover;
    overflow: hidden;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    position: relative;
}

.text h1 {
    color: #011718;
    margin-top: -200px;
    font-size: 15em;
    text-align: center;
    text-shadow: -5px 5px 0px rgba(0, 0, 0, 0.7), -10px 10px 0px rgba(0, 0, 0, 0.4), -15px 15px 0px rgba(0, 0, 0, 0.2);
    font-family: monospace;
    font-weight: bold;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text h2 {
    color: black;
    font-size: 5em;
    text-shadow: -5px 5px 0px rgba(0, 0, 0, 0.7);
    text-align: center;
    margin-top: -150px;
    font-family: monospace;
    font-weight: bold;
}

.text h3 {
    color: white;
    margin-left: 30px;
    font-size: 2em;
    text-shadow: -5px 5px 0px rgba(0, 0, 0, 0.7);
    margin-top: -40px;
    font-family: monospace;
    font-weight: bold;
}

.torch {
    margin: -150px 0 0 -150px;
    width: 200px;
    height: 200px;
    box-shadow: 0 0 0 9999em #000000f7;
    opacity: 1;
    border-radius: 50%;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    pointer-events: none;
}

.torch::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    box-shadow: inset 0 0 40px 2px #000,
        0 0 20px 4px rgba(13, 13, 10, 0.2);
    position: absolute;
}
</style>