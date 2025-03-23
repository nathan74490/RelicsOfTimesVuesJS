<template>
    <div>
      <h2>Dessin animé aléatoire</h2>
      <div v-if="randomDessin">
        <img :src="randomDessin.image" :alt="randomDessin.nom" width="150" />
        <p>{{ randomDessin.nom }}</p>
      </div>
  
      <button @click="getRandomDessin">Nouveau dessin aléatoire</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const dessinsAnimes = ref([])
  const randomDessin = ref(null)
  
  onMounted(async () => {
    const response = await fetch('/json/cart.json')
    const data = await response.json()
    dessinsAnimes.value = data.dessins_animes
    getRandomDessin() // On choisit un aléatoire dès le départ
  })
  
  function getRandomDessin() {
    if (dessinsAnimes.value.length > 0) {
      const index = Math.floor(Math.random() * dessinsAnimes.value.length)
      randomDessin.value = dessinsAnimes.value[index]
    }
  }
  </script>
  