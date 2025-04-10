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
  
    const prompt = `Tu es un expert en animation et en analyse sémantique.
Je vais te donner :

Le titre d’un dessin animé

Une liste de mots-clés en français

Ta mission est de me dire pour chaque mot s’il est pertinent (lié de manière évidente ou directe au dessin animé, par son univers, ses personnages, ses thèmes, etc.).
Si le mot est pertinent, il rapporte 10 points, sinon 0 point.
Donne-moi pour chaque mot une réponse structurée ainsi :
Mot : [mot] – Pertinent : [Oui / Non] – Points : [0 ou 10] – Justification : [courte explication]

Voici les données :
Titre du dessin animé : ${randomDessin.value.nom} 
Mots à analyser : [ ${champ1.value}, ${champ2.value}, ${champ3.value}, ${champ4.value}]`
                  
    try {
      response.value = await sendPrompt(prompt)
    } catch (e) {
      console.error(e)
      response.value = 'Une erreur est survenue.'
    }
  }
  </script>
  