<template>
  <div id="rules">
    <h1 id="textpopupdebut">Cliquer pour commencer</h1>
    <img id="ruleImg" src="../assets/ruleCard.svg">
    <div id="shadow"></div>
  </div>
    <img id="background" src="../assets/fondJeux.svg" alt="">
    <div class="container">
      <div>
        
      </div>
      <div class="container-dessin">
  
        <div v-if="randomDessin">
          <!-- <h2>{{ randomDessin.nom }}</h2> -->
          <!-- <img :src="randomDessin.image" :alt="randomDessin.nom" width="150" /> -->
          <div >
            <img id="carte" :src= "randomDessin.image"  alt="carte de jeu" />
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
          <button class="buttonPersonalise" style="width: 20%;" @click="getResponse">Confirmer</button>
        </div>
      </div>
  
  
      <div id="popup" v-if="response"><img id="popuprespons" src="../assets/gamePromo.png" alt=""><div  id="textepopuprespons">- {{ response }}</div> <button class="buttonPersonalise" style="width: 15vw; z-index: 110; margin-top: 50vh;" @click="addToCart">
          Ajouter au panier
        </button></div>
  
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { sendPrompt } from '@/services/openai'
import { useCartStore } from '@/stores/cart'

const dessinsAnimes = ref([])
const randomDessin = ref(null)

onMounted(async () => {
  const response = await fetch('/json/cart.json')
  const data = await response.json()
  dessinsAnimes.value = data.dessins_animes
  getRandomDessin()
})

function getRandomDessin() {
  if (dessinsAnimes.value.length > 0) {
    const index = Math.floor(Math.random() * dessinsAnimes.value.length)
    randomDessin.value = dessinsAnimes.value[index]
  }
}

const champ1 = ref('')
const champ2 = ref('')
const champ3 = ref('')
const champ4 = ref('')

const response = ref('')
const reduction = ref(0) // Nouveau ref pour stocker la réduction numérique

async function getResponse() {
  response.value = 'Chargement...'

  const prompt = `Tu es un expert en animation et en analyse sémantique.
Je vais te donner :

Le titre d’un dessin animé

Une liste de mots-clés en français

Ta mission est de me dire pour chaque mot s’il est pertinent (lié de manière évidente ou directe au dessin animé).
Chaque mot pertinent donne 10 points, sinon 0.
Retourne-moi uniquement le total de points en chiffre.
Si aucun mot pertinent, retourne 0.

Titre du dessin animé : ${randomDessin.value.nom}
Mots à analyser : [ ${champ1.value}, ${champ2.value}, ${champ3.value}, ${champ4.value}]`

  try {
    const apiResponse = await sendPrompt(prompt)
    reduction.value = parseInt(apiResponse) || 0
    response.value = `${reduction.value}%`
  } catch (e) {
    console.error(e)
    response.value = 'Une erreur est survenue.'
    reduction.value = 0
  }
}

const cartStore = useCartStore()

function addToCart() {
  const originalPrice = 29.99
  const discount = reduction.value
  const discountedPrice = originalPrice - (originalPrice * discount / 100)

  cartStore.addToCart({
    id: 1,
    custom: "Jeu Relics Of Times",
    delivery: "15/05/2025",
    originalPrice: originalPrice,
    discount: discount,
    price: discountedPrice.toFixed(2), // Prix final après réduction
    quantity: 1
  })

  alert(`Produit ajouté au panier avec une réduction de ${discount}% !`)
}

onMounted(() => {
  const body = document.querySelector('body');
  body.style.overflow = 'hidden'
  const rules = document.querySelector('#rules');
  if (rules) {
    rules.addEventListener('click', () => {
      rules.style.display = 'none';
      body.style.overflow = 'auto'
    });
  }
});

</script>

<style>
  body {
    overflow-x: hidden;
  }
  h2 {
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin-top: 10vh;
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

  .container {
    margin-top: 0;
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
  #popup{
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  #textepopuprespons{
    position: absolute;;
    width: 615px;
    height: 494px;
    z-index: 110;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #009CD4;
    font-size: 40px;
  }
  #popuprespons{
    position: absolute;;
    width: 615px;
    height: auto;
    z-index: 100;    
  }
  #rules {
    display: flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  #shadow {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
  #ruleImg {
    z-index: 999;
    bottom: 0;
    left: 0;
    position: absolute;
    height: 90%;
    width: 50%;
  }
  #textpopupdebut {
    z-index: 999;
    position: absolute;
    text-align: center;
    color: white;
    top: 42%;
    right: 15%;
    font-size: 50px;
  }
  </style>