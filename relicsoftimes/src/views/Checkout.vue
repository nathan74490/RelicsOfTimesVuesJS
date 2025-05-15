<template>
  <div id="checkoutPage">
    <section id="summary">
      <h1>Récapitulatif de votre commande</h1>
      <div v-for="item in cart" :key="item.id" class="recapItem">
        <p><strong>{{ item.custom }}</strong></p>
        <p>Quantité : {{ item.quantity }}</p>
        <p>Prix total : {{ (item.price * item.quantity).toFixed(2) }} €</p>
      </div>
      <h2>Total : {{ total }} €</h2>
    </section>

    <section id="clientInfo">
      <h2>Informations personnelles</h2>
      <form @submit.prevent="submitOrder">
        <input type="text" placeholder="Nom" v-model="lastName" required />
        <input type="text" placeholder="Prénom" v-model="firstName" required />
        <input type="text" placeholder="Adresse" v-model="address" required />
        <input type="text" placeholder="Ville" v-model="city" required />
        <input type="text" placeholder="Code postal" v-model="postalCode" required />

        <h2>Moyen de paiement</h2>
        <input type="text" placeholder="Nom sur la carte" v-model="cardName" required />
        <input type="text" placeholder="Numéro de carte" maxlength="16" v-model="cardNumber" required />
        <input type="text" placeholder="Date d'expiration (MM/AA)" v-model="expiration" required />
        <input type="text" placeholder="CVV" maxlength="4" v-model="cvv" required />

        <button class="buttonPersonalise" type="submit">Valider la commande</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const cart = cartStore.cartItems
const router = useRouter()

const lastName = ref('')
const firstName = ref('')
const address = ref('')
const city = ref('')
const postalCode = ref('')
const cardName = ref('')
const cardNumber = ref('')
const expiration = ref('')
const cvv = ref('')

const total = computed(() => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
})

function submitOrder() {
  if (lastName.value && firstName.value && address.value && city.value && postalCode.value && cardName.value && cardNumber.value && expiration.value && cvv.value) {
    cartStore.clearCart()
    router.push('/commande-validee')
  } else {
    alert('Veuillez remplir tous les champs.')
  }
}
</script>

<style scoped>
#checkoutPage {
  color: white;
  padding: 5vh 10vw;
  background-image: url("../assets/fond_registeur.svg");
  min-height: 100vh;
}
#summary, #clientInfo {
  margin-bottom: 5vh;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #ffffff;
  background-color: transparent;
  color: white;
}
.recapItem {
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
}
h1, h2 {
  font-family: "Relics Of Times";
  text-align: center;
  margin-bottom: 2vh;
}
</style>
