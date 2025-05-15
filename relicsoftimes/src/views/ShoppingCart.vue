<template>
  <div id="shoppingCart">
    <section id="order">
      <h1>VOTRE PANIER</h1>
      <div v-if="cart.length === 0" style="text-align: center; color: white;">
        Votre panier est vide.
      </div>
      <div v-else>
        <div v-for="(item, index) in cart" :key="item.id" id="container">
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
              <p class="infos">{{ item.quantity }}</p>
            </div>
            <div class="info">
              <p class="infosLabel">Prix unitaire :</p>
              <p class="infos">{{ item.originalPrice.toFixed(2) }} €</p>
            </div>
            <div class="info" v-if="item.discount">
              <p class="infosLabel">Réduction :</p>
              <p class="infos">-{{ item.discount }}%</p>
            </div>
            <div class="info">
              <p class="infosLabel">Prix total :</p>
              <p class="infos">{{ (item.price * item.quantity).toFixed(2) }} €</p>
            </div>
            <button @click="removeItem(index)" class="buttonPersonalise">Supprimer</button>
          </div>
          <img id="cards" src="../assets/cardsOrder.png" />
        </div>
        <h2 style="text-align: center; color: white; margin-top: 4vh;">Total : {{ total }} €</h2>
        <div style="display: flex; justify-content: center; margin-top: 3vh;">
          <RouterLink to="/checkout">
            <button class="buttonPersonalise">Je passe commande</button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()
const cart = cartStore.cartItems

const total = computed(() => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
})

function removeItem(index) {
  cartStore.cartItems.splice(index, 1)
}
</script>

<style scoped>
#shoppingCart {
  color: white;
  background-image: url("../assets/fond_registeur.svg");
  min-height: 100vh;
  padding: 5vh 5vw;
}
#order {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  width: 100%;
}
#container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 2vh;
}
#cards {
  width: 35%;
  height: 35%;
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
</style>
