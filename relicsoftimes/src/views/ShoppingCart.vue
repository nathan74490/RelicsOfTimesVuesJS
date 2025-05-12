<template>
  <div>
    <div id="orderBackground" v-if="orderDone"></div>
    <div id="orderDone" v-if="orderDone">
      <img id="orderDoneBox" src="../assets/endOrder.svg" alt="Commande terminée" />
    </div>

    <section id="order">
      <h1>VOTRE COMMANDE</h1>
      <div v-if="cart.length === 0" style="text-align: center; color: white;">
        Votre panier est vide.
      </div>
      <div v-for="(item, index) in cart" :key="item.id" id="container">
        <div></div>
        <div id="information">
          <div class="info">
            <p class="infosLabel">Info personnalisation :</p>
            <p class="infos">{{ item.custom || "—" }}</p>
          </div>
          <div class="info">
            <p class="infosLabel">Date de livraison :</p>
            <p class="infos">{{ item.delivery || "—" }}</p>
          </div>
          <div class="info">
            <p class="infosLabel">Quantité :</p>
            <input type="number" v-model.number="item.quantity" @input="updateTotal" min="1" max="10" required />
          </div>
          <div class="info">
            <p class="infosLabel">Prix :</p>
            <p class="infos">{{ item.price * item.quantity }}€</p>
          </div>
          <button @click="removeItem(index)" class="buttonPersonalise">Supprimer</button>
        </div>
        <img id="cards" src="../assets/cardsOrder.png" />
        <div></div>
      </div>
    </section>

    <section id="cart" v-if="cart.length">
      <h3>Mode de paiement</h3>
      <div id="buttons">
        <label>Carte</label>
        <input class="radio" type="radio" value="Carte" v-model="paymentMethod" />
        <label>Paypal</label>
        <input class="radio" type="radio" value="Paypal" v-model="paymentMethod" />
        <label>Visa</label>
        <input class="radio" type="radio" value="Visa" v-model="paymentMethod" />
      </div>

      <div id="orderInfo">
        <form id="orderForm" @submit.prevent="checkout">
          <div id="cardInfo">
            <label class="label">Adresse :</label>
            <input type="text" class="textInput" v-model="address" required />
            <label class="label">Nom du titulaire :</label>
            <input type="text" class="textInput" v-model="cardName" required />
            <label class="label">Numéro de carte :</label>
            <input type="text" class="textInput" maxlength="16" v-model="cardNumber" required />
          </div>
          <h2>Total : {{ total }}€</h2>
          <button type="submit" class="buttonPersonalise">Passer la commande</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const cart = cartStore.items
const address = ref('')
const cardName = ref('')
const cardNumber = ref('')
const paymentMethod = ref('Carte')
const orderDone = ref(false)

const total = computed(() => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
})

function updateTotal() {
  // la valeur total est déjà calculée automatiquement avec computed
}

function removeItem(index) {
  cartStore.removeFromCart(index)
}

function checkout() {
  if (address.value && cardName.value && cardNumber.value) {
    alert('Commande confirmée !')
    cartStore.clearCart()
    orderDone.value = true
  } else {
    alert('Veuillez remplir toutes les informations de paiement.')
  }
}
</script>




<style>
body {
    color: white;
    background-image: url("../assets/fond_registeur.svg");
  }
  h1 {
    color: white;
    margin-top: 15vh;
    font-family: "Relics Of Times";
  }
  #order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    width: 100vw;
  }
  #cart {
    margin-bottom: 5vh;
  }
  #container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  #cards {
    width: 35%;
    height: 35%;
  }
  #orderInfo {
    color: #ffffff;
    padding-right: 25vw;
    padding-left: 25vw;
  }
  #cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  #cardNumber {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #orderBackground {
    display: none;
    z-index: 998;
    position: absolute;
    width: 100vw;
    height: 120vh;
    background-color: black;
    opacity: 0.8;
  }
  #orderDone {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
  #orderDoneBox {
    width: 30vw;
    height: 40vh;
  }

  .textInput {
    width: 100%;
    height: 40px;
    background-color: transparent;
    color: white;
    border: 3px solid #ffffff;
    border-radius: 8px;
  }
  .numberInput {
    width: 100%;
    height: 40px;
    background-color: transparent;
    color: white;
    border: 3px solid #ffffff;
    border-radius: 8px;
  }
  .cNumber {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 20vw;
  }
  #information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vh;
    width: 30vw;
  }
  .infos {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: white;
    text-align: left;
    width: 100%;
    height: 40px;
    font-size: 20px;
    border-radius: 8px;
    border: 3px solid #ffffff;
    padding-left: 1vw;
  }
  .infosLabel {
    color: #ffffff;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }
  #buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  h3 {
    text-align: center;
    font-family: "Relics Of Times";
  }
  .radio {
    z-index: 1;
    height: 2vh;
    width: 5vw;
    background-color: #ffffff;
    border: 3px solid #009CD4;
    border-radius: 8px;
  }
  .submitOrder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2vh;
  }
  input, textarea {
    padding-left: 1vh;
  }

  

</style>