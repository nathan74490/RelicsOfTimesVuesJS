<template>
    <div id="page_personnaliser">
        <!-- <img id="carte" src="../assets/carte noir.svg" alt=""> -->
        <div id="carte">
            <svg width="425" height="620" style="border-radius: 15px;" xmlns="http://www.w3.org/2000/svg">
                <rect width="425" height="620" class="mon-rectangle" :style="{ fill: selectedColor }" />
            </svg>
            <img id="ContourCarte" src="../assets/ContourCarte.png"  alt="">
            <img :src="selectedLogo" alt="logo"
                style="width: 100px; height: 100px; z-index: 1000; position: absolute; align-self: center;"
                v-if="selectedLogo" />
        </div>
        <MenuPagePersonnaliser @select="handleSelection" />
    </div>
    <div v-if="activeCarousel === 'colors'">
        <ScrollCarousel :colors="colors" @colorSelected="handleColorSelection" />
    </div>
    <div v-else-if="activeCarousel === 'images'">
        <VerticalLogoCarousel :images="images" @logoSelected="handleLogoSelected" />

    </div>
    <div v-else>
        <p style="text-align: center;">Bienvenue sur l'accueil !</p>
    </div>
    <!-- <ScrollCarousel :colors="colors" @colorSelected="handleColorSelection" /> -->
</template>
<script setup>
import { ref } from 'vue'
import MenuPagePersonnaliser from '../components/MenuPagePersonnailser.vue'
import ScrollCarousel from '../components/ScrollCarousel.vue'
import VerticalLogoCarousel from '../components/VerticalLogoCarousel.vue'

const activeCarousel = ref('colors') // valeur par défaut
function handleSelection(type) {
    activeCarousel.value = type
}
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F',
    '#9B59B6', '#1ABC9C', '#E67E22', '#2ECC71',
    '#E74C3C', '#3498DB', '#F39C12', '#8E44AD',
    '#16A085', '#D35400', '#27AE60', '#2980B9'
]

const selectedColor = ref(null)

function handleColorSelection(color) {
    selectedColor.value = color
}
const imageModules = import.meta.glob('@/assets/logos/*.svg', { eager: true })
const images = Object.values(imageModules).map(mod => mod.default)
const selectedLogo = ref(null)

function handleLogoSelected(logo) {
    selectedLogo.value = logo
}

</script>
<style>
body {
    background-color: black;
}

#page_personnaliser {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}#carte{
    height: 620px; 
    width: 425px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
}
#ContourCarte{
    position: absolute;
    height: 620px; 
    width: 425px;
    z-index: 500;
}
/* #carte{
    
    height: 918px;
    width: 825px;
    stroke-width:2;
    stroke:green;
    fill:#ff0000;
    
} */
.mon-rectangle {
    fill: #4CAF50;
    /* Vert */
    stroke: none;
    stroke-width: 5px;
}
</style>