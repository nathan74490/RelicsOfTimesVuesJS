<template>
  <div class="slider-container">
    <div class="slider-track" :style="{ animationDuration: animationDuration + 's' }">
      <div class="slide" v-for="(slide, index) in duplicatedSlides" :key="index">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '@/assets/photodesgolmont.png'
import img2 from '@/assets/photodesgolmont2.png'
import img3 from '@/assets/gamePromo.png'
import img4 from '@/assets/cards1.png'
import img5 from '@/assets/cards2.png'
import img6 from '@/assets/cards3.png'

const slides = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 6' },
]

// pour que l'effet soit infini, on duplique les images
const duplicatedSlides = [...slides, ...slides]
const animationDuration = 20 // en secondes – adapte la vitesse ici
</script>

<style>
.slider-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  margin: 2rem auto;
  position: relative;
}

.slider-track {
  display: flex;
  width: max-content;
  animation: scroll-left linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.slide {
  flex: 0 0 auto;
  width: 25%;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.slide img {
  width: 449px;
  height: 336; 
  object-fit: contain; 
  display: block;
  border-radius: 10px;
}

</style>
