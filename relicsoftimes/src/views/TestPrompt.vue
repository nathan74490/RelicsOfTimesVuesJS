<template>
    <div>
      <h2>Dessin animé aléatoire</h2>
      <div v-if="randomDessin">
        <img :src="randomDessin.image" :alt="randomDessin.nom" width="150" />
        <p>{{ randomDessin.nom }}</p>
      </div>
  
      <button @click="getRandomDessin">Nouveau dessin aléatoire</button>
    </div>
    <div>
      <input v-model="champ1" placeholder="Pose une question..." />
      <input v-model="champ2" placeholder="Pose une question..." />
      <input v-model="champ3" placeholder="Pose une question..." />
      <input v-model="champ4" placeholder="Pose une question..." />
      <button @click="getResponse">Envoyer</button>
      <p v-if="response">Réponse : {{ response }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { sendPrompt } from '@/services/openai'
  
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


  // Champs saisis par l'utilisateur
  const champ1 = ref('')
  const champ2 = ref('')
  const champ3 = ref('')
  const champ4 = ref('')
  
  // Réponse de l'API
  const response = ref('')
  
  // Fonction pour envoyer le prompt à l'API
  async function getResponse() {
    response.value = 'Chargement...'
  
    const prompt = `Peux-tu me dire si les mots suivants correspondent bien au dessin animé ${randomDessin.nom} ? Pour chaque mot qui correspond, ajoute 10 points. Mots : ${champ1.value}, ${champ2.value}, ${champ3.value}, ${champ4.value}`
  
    try {
      response.value = await sendPrompt(prompt)
    } catch (e) {
      console.error(e)
      response.value = 'Une erreur est survenue.'
    }
  }
  </script>
  