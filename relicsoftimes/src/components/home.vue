<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <section id="home">
      <img id="card1" src="../assets/cards1.png" alt="Cartes du jeu Relics Of Times" />
      <h1 id="title">Relics Of Times</h1>
<!--       <RouterLink to="/play" id="buttonTest">test du jeu</RouterLink>-->
        <!-- <a href="doYouWantToPlay.html"></a> -->
        <img id="flecheBasPageAcce" src="../assets/flecheBasPageAcce.svg"
            alt="Flèche indiquant un scrolle possible vers le bas">
    </section>
    <section id="productPersonalise">
        <img id="card2" src="../assets/cards2.png" alt="Cartes du jeu Relics Of Times" />
        <div id="divDesc">
          <p id="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <RouterLink id="buttonPersonalise" to="#">Personnaliser</RouterLink>
        </div>
    </section>
    <section id="">

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

    #title {
      position: absolute;
      z-index: 99;
      font-size: 96px;
      color: #fff;
      white-space: nowrap;
      left: 5vw;
    }

    #card1 {
      height: 100%;
      width: 100%;
    }

    #card2 {
      height: 100%;
      width: 100%;
    }

    #divDesc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      gap: 1vh;
      right: 5vw;
      font-size: 24px;
      text-align: right;
      width: 25vw;
      color: #fff;
    }

    #buttonPersonalise {
      background-color: #000000;
      color: #fff;
      font-size: 18px;
      text-align: center;
      border-radius: 50px;
      border: 2px solid white;
      padding: 8px;
      width: 55%;
    }

    #buttonPersonalise:hover {
      background-color: #ffffff;
      color: #009CD4;
    }

    #buttonPersonalise:active {
      background-color: #009CD4;
      border: 2px solid #009CD4;
      color: #ffffff;
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
    #productPersonalise{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #000000;
    }
</style>