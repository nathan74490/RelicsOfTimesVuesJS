<template>
  <div class="carousel-container">
    <input
      type="file"
      accept=".svg,.png,.jpg,.jpeg"
      ref="fileInput"
      style="display: none"
      @change="handleFileChange"
    />

    <div
      class="carousel-wrapper"
      ref="carouselRef"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <!-- Case spéciale pour ajouter un logo -->
      <div class="carousel-item add-item" @click="triggerFileInput">
        +
      </div>

      <!-- Logos normaux -->
      <div
        v-for="(image, index) in imagesInternal"
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
import { ref, watchEffect } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['logoSelected'])

const fileInput = ref(null)
const carouselRef = ref(null)
const imagesInternal = ref([...props.images]) // images modifiables

// Pour l'ajout
function triggerFileInput() {
  fileInput.value.click()
}

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file && file.type === 'image/svg+xml') {
    const reader = new FileReader()
    reader.onload = () => {
      imagesInternal.value.push(reader.result)
    }
    reader.readAsDataURL(file)
  }
}

// Pour le drag scroll vertical
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

// Mise à jour si les props changent
watchEffect(() => {
  imagesInternal.value = [...props.images]
})
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
  grid-template-columns: repeat(2, 102px);
  row-gap: 1rem;
  column-gap: 1rem;
  overflow-y: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  cursor: grab;
  user-select: none;
  padding-right: 0.5rem;
  justify-content: center;
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
  background: #959595;
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

/* Style de la case "+" */
.add-item {
  font-size: 48px;
  font-weight: bold;
  background: #e0e0e0;
  color: #333;
}
</style>
