<template>
  <section id="order">
    <h1>VOTRE COMMANDE</h1>
    <div id="container">
      <div></div>
      <div id="information">
        <div class="info">
          <p class="infosLabel">Info personnalisation :</p>
          <p class="infos">Lorem ipsum blablablabla</p>
        </div>
        <div class="info">
          <p class="infosLabel">Date de livraison :</p>
          <p class="infos">Lorem ipsum blablablabla</p>
        </div>
        <div class="info">
          <p class="infosLabel">Quantité :</p>
          <input type="number" max="10" placeholder="1" required>
        </div>
        <div class="info">
          <p class="infosLabel">Prix :</p>
          <p class="infos">9999€</p>
        </div>
      </div>
      <img id="cards" src="../assets/cardsOrder.png">
      <div></div>
    </div>
  </section>
  <section id="cart">
    <h3>Mode de paiement</h3>
    <div id="buttons">
      <label>Carte</label>
      <input class="radio" type="radio" value="Carte" name="paiement" checked/>
      <label>Paypal</label>
      <input class="radio" type="radio" value="Paypal" name="paiement"/>
      <label>Visa</label>
      <input class="radio" type="radio" value="Visa" name="paiement"/>
    </div>
    <div id="orderInfo">
      <form>
        <div id="cardInfo">
          <label class="label">Adresse :</label>
          <input type="text" class="textInput" placeholder="adresse" required>
          <label class="label">Nom du titulaire :</label>
          <input type="text" class="textInput" placeholder="nom du titulaire" required>
          <label class="label">Numéro de carte :</label>
          <input type="text" class="textInput" maxlength="16" placeholder="XXXX XXXX XXXX XXXX" required>
        </div>
        <div id="cardNumber">
          <div class="cNumber">
            <label class="label">Date d'expiration</label>
            <input type="text" class="numberInput" maxlength="5" placeholder="XX/XX" required>
          </div>
          <div class="cNumber">
            <label class="label">CVC</label>
            <input type="text" class="numberInput" maxlength="3" placeholder="XXX" required>
          </div>
        </div>
        <div class="submitOrder">
          <input class="buttonPersonalise" type="submit" value="Payer Maintenant" />
        </div>
      </form>
    </div>
  </section>
</template>
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
    color: #009CD4;
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
  .textInput {
    width: 100%;
    height: 40px;
    color: black;
    border: 3px solid #009CD4;
    background-color: #ffffff;
    border-radius: 8px;
  }
  .numberInput {
    width: 100%;
    height: 40px;
    border: 3px solid #009CD4;
    color: black;
    background-color: #ffffff;
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
    background-color: #ffffff;
    color: black;
    text-align: left;
    width: 100%;
    height: 40px;
    font-size: 20px;
    border-radius: 8px;
    border: 3px solid #009CD4;
  }
  .infosLabel {
    color: #009CD4;
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
    z-index: 999;
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
</style>
<script setup lang="ts">
</script>