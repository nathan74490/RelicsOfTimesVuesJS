<template>
    <div id="page_personnaliser">
        <!-- <img id="carte" src="../assets/carte noir.svg" alt=""> -->
        <svg width="825" height="918" xmlns="http://www.w3.org/2000/svg">
            <rect width="825" height="918" class="mon-rectangle"  :style="{fill : selectedColor }" />
        </svg>


    </div>
    <ScrollCarousel :colors="colors" @colorSelected="handleColorSelection" />
</template>
<script setup>
import { ref } from 'vue'
import ScrollCarousel from '../components/ScrollCarousel.vue'

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
    stroke: #000;
    stroke-width: 5px;
}
</style>