<template>
  <img id="background" src="../assets/fondJeux.svg" alt="">
  <div class="container">
    <div>
      
    </div>
    <div class="container-dessin">

      <div v-if="randomDessin">
        <h2>{{ randomDessin.nom }}</h2>
        <!-- <img :src="randomDessin.image" :alt="randomDessin.nom" width="150" /> -->
        <div >
          <img id="carte"src="../assets/image.jpg" alt="">
        </div>

      </div>
      <div class="formulaire">
        <h3 id="formulaire-title">Mots clées</h3>
        <div class="formulaire-champs">
          <input v-model="champ1" class="champ-texte" placeholder="Pose une question..." />
          <input v-model="champ2" class="champ-texte" placeholder="Pose une question..." />
          <input v-model="champ3" class="champ-texte" placeholder="Pose une question..." />
          <input v-model="champ4" class="champ-texte" placeholder="Pose une question..." />
        </div>
        <!-- <button @click="getRandomDessin">Nouveau dessin aléatoire</button> -->
        <button id="buttonPersonalise" style="width: 20%;" @click="getResponse">Confirmer</button>
      </div>
    </div>


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
<style>
body {
  overflow-x: hidden;
}
h2 {
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  min-height: 90vh;
}

.container-dessin {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
#background{
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

#carte {
  /* max-width: 425px;
  max-height: 620px; */
  width: 425px;
  height: 620px;
  /* background-color: bisque; */
  margin: 20px auto;
  border-radius: 32px;
}

.formulaire {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* margin-top: 20px; */
}
#formulaire-title{
  background-color: #009CD4;
  color: #fff;
  font-size: 18px;
  text-align: center;
  border-radius: 15px;
  border: 2px solid white;
  padding: 8px;
}
.formulaire-champs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.champ-texte {
  width: 30%;
  max-width: 400px;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-top: 5vh;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.champ-texte:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.2);
}


</style>