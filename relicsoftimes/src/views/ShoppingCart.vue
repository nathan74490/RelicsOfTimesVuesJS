<template>
  <section id="order">
    <h1>VOTRE COMMANDE</h1>
    <div id="container">
      <div id="information">
        <p>Info personnalisation :</p>
        <p>Lorem ipsum blablablabla</p>
        <p>Date de livraison :</p>
        <p>Lorem ipsum blablablabla</p>
        <p>Quantité :</p>
        <input type="number" max="10" placeholder="1" required>
        <p>Prix :</p>
        <p>9999€</p>
      </div>
      <img id="cards" src="../assets/doubleCards.png">
    </div>
  </section>
  <section id="cart">
    <h3>Mode de paiement</h3>
    <div id="buttons">
      <label>Carte</label>
      <input type="radio" value="Carte" name="paiement" checked/>
      <label>Paypal</label>
      <input type="radio" value="Paypal" name="paiement"/>
      <label>Visa</label>
      <input type="radio" value="Visa" name="paiement"/>
    </div>
    <div id="orderInfo">
      <form>
        <input type="text" placeholder="adresse" required>
      </form>
    </div>
  </section>
</template>
<style>
  #order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    width: 100vw;
  }
  #container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
  }
  #cards {
    width: 50%;
    height: 50%;
  }
</style>
<script setup lang="ts">
</script>