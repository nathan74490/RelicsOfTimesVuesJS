<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <div id="main">
    <section id="result">
      <img id="imgResult" src="../assets/gamePromo.png">
      <h1 id="promoText">-20%</h1>
    </section>
    <RouterLink class="buttonPersonalise" style="width: 55%;" to="#">Je passe commande</RouterLink>
  </div>
</template>

<style>
  #result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/fondResult.png");
  }
  #imgResult {
    width: 520px;
    height: 360px;
  }
  #promoText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #009CD4;
    font-size: 40px;
    font-family: "Relics Of Times";
  }
</style>