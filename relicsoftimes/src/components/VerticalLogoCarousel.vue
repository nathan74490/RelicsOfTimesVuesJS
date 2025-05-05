<template>
  <div class="carousel-container">
    <div
      class="carousel-wrapper"
      ref="carouselRef"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item"
        @click="handleClick(image)"
      >
        <img :src="image" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['logoSelected'])

const carouselRef = ref(null)
const isDragging = ref(false)
const startY = ref(0)
const scrollTop = ref(0)
let dragMoved = false

function startDrag(e) {
  isDragging.value = true
  dragMoved = false
  startY.value = e.pageY - carouselRef.value.offsetTop
  scrollTop.value = carouselRef.value.scrollTop
  carouselRef.value.style.cursor = 'grabbing'
}

function onDrag(e) {
  if (!isDragging.value) return
  e.preventDefault()
  dragMoved = true
  const y = e.pageY - carouselRef.value.offsetTop
  const walk = (y - startY.value) * 1.5
  carouselRef.value.scrollTop = scrollTop.value - walk
}

function stopDrag() {
  isDragging.value = false
  carouselRef.value.style.cursor = 'grab'
}

function handleClick(image) {
  if (!dragMoved) {
    emit('logoSelected', image)
  }
}
</script>

<style scoped>
.carousel-container {
  background-color: white;
  max-height: 70vh;
  width: 20vw;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.carousel-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 102px); /* 2 logos par ligne, taille fixe */
  row-gap: 1rem;
  column-gap: 1rem;
  overflow-y: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  cursor: grab;
  user-select: none;
  padding-right: 0.5rem;
  justify-content: center; /* centre les colonnes dans le conteneur */
}

.carousel-wrapper::-webkit-scrollbar {
  width: 6px;
}
.carousel-wrapper::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.carousel-item {
  width: 102px;
  height: 102px;
  border-radius: 12px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.carousel-item img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}
</style>
