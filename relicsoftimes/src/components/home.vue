<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <section id="home">
      <div class="container">
          <h1 id="title">Relics Of Times</h1>
          <img id="card1" src="../assets/cards1.png" alt="Cartes du jeu Relics Of Times" />
      </div>

<!--        <RouterLink to="/play" id="buttonTest">test du jeu</RouterLink>-->
        <!-- <a href="doYouWantToPlay.html"></a> -->
        <img id="flecheBasPageAcce" src="../assets/flecheBasPageAcce.svg"
            alt="Flèche indiquant un scrolle possible vers le bas">
    </section>
    <section id="productDescription">
        <h2>THE GAME</h2>
    </section>
</template>

<style>
    #home {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-color: #131313;
    }

    .container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100vw;
    }

    #title {
      position: absolute;
      z-index: 99;
      font-size: 96px;
      color: #fff;
      white-space: nowrap;
      left: 5vw;
    }

    #card1 {
      right: 0;
      height: 100%;
      width: 100%;
    }

    #buttonTest {
        margin-top: 20px;
        padding: 10px 20px;
        width: 50vw;
        background-color: #c7c7c7;
        color: #0d0d0d;
        border: none;
        border-radius: 300px;
        cursor: pointer;
        font-size: 128px;
        text-align: center;
        font-family: "ABeeZee", serif;
        font-weight: 400;
        font-style: normal;
    }
    #flecheBasPageAcce{
        width: 110px;
        height: 55px;
        
    }
    #productDescription{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #000000;
    }

    @media screen and (max-width: 1500px) {
      .container {
        justify-content: center;
        align-items: center;
      }
      #card1 {
        height: 100%;
        width: 100%;
      }
    }
</style>