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
          v-for="(color, index) in colors"
          :key="index"
          class="carousel-item"
          :style="{ backgroundColor: color }"
          @click="handleClick(color)"
        >
          {{ color }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Props + Emits
  const props = defineProps({
    colors: {
      type: Array,
      required: true
    }
  })
  const emit = defineEmits(['colorSelected'])
  
  // Drag-scroll logic
  const carouselRef = ref(null)
  const isDragging = ref(false)
  const startX = ref(0)
  const scrollLeft = ref(0)
  let dragMoved = false
  
  function startDrag(e) {
    isDragging.value = true
    dragMoved = false
    startX.value = e.pageX - carouselRef.value.offsetLeft
    scrollLeft.value = carouselRef.value.scrollLeft
    carouselRef.value.style.cursor = 'grabbing'
  }
  
  function onDrag(e) {
    if (!isDragging.value) return
    e.preventDefault()
    dragMoved = true
    const x = e.pageX - carouselRef.value.offsetLeft
    const walk = (x - startX.value) * 1.5
    carouselRef.value.scrollLeft = scrollLeft.value - walk
  }
  
  function stopDrag() {
    isDragging.value = false
    carouselRef.value.style.cursor = 'grab'
  }
  
  function handleClick(color) {
    if (!dragMoved) {
      emit('colorSelected', color)
    }
  }
  </script>
  <style scoped>
  .carousel-container {
    background-color: white;
    max-width: 70vw;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .carousel-wrapper {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    scroll-behavior: smooth;
    padding-bottom: 1rem;
    cursor: grab;
    user-select: none;
  }
  
  .carousel-wrapper::-webkit-scrollbar {
    height: 6px;
  }
  .carousel-wrapper::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
  
  .carousel-item {
    flex: 0 0 calc((70vw - 6rem) / 7);
    height: 120px;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>