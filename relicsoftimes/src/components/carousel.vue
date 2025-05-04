<template>
    <div class="carousel">
      <div class="carousel-container">
        <img :src="images[currentIndex]" class="carousel-image" alt="carousel image" />
        <!-- <img src="../assets/logo_amazon.svg" alt=""> -->
      </div>
      <div class="controls">
        <button @click="prev">‹</button>
        <button @click="next">›</button>
      </div>
      
      <div class="indicators">
        <span 
          v-for="(img, index) in images" 
          :key="index" 
          @click="goTo(index)"
          :class="{ active: index === currentIndex }"
        ></span>
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
  
  const currentIndex = ref(0)
  
  function next() {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }
  
  function prev() {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  }
  
  function goTo(index) {
    currentIndex.value = index
  }
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 600px;
    height: 300px;
    overflow: hidden;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
  }
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  .controls button {
    background: rgba(0,0,0,0.5);
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
  .indicators {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }
  .indicators span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #ddd;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  .indicators .active {
    background: #333;
  }
  </style>
  