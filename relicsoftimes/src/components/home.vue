<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <section id="home">
      <img id="card1" src="../assets/cards1.png" alt="Cartes du jeu Relics Of Times" />
      <h1 id="title">Relics Of Times</h1>
<!--       <RouterLink to="/play" id="buttonTest">test du jeu</RouterLink>-->
        <!-- <a href="doYouWantToPlay.html"></a> -->
    </section>
    <section id="productPersonalise">
        <img id="card2" src="../assets/cards2.png" alt="Cartes du jeu Relics Of Times" />
        <div id="divDesc">
          <p id="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <RouterLink class="buttonPersonalise" style="width: 55%;" to="#">Personnaliser</RouterLink>
        </div>
    </section>
    <section id="about">
        <img id="card3" src="../assets/cards3.png" alt="Cartes du jeu Relics Of Times" />
        <div id="divAbout">
          <p id="textAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <RouterLink class="buttonPersonalise" style="width: 55%;" to="/play">Tester le jeu</RouterLink>
        </div>
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
      font-size: 5vw;
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

    #card3 {
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
      text-align: justify;
      width: 25vw;
      color: #fff;
    }

    #divAbout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      gap: 1vh;
      left: 5vw;
      font-size: 24px;
      text-align: justify;
      width: 25vw;
      color: #fff;
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

    #about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-color: #000000;
    }

    @media screen and (max-width: 800px) {
      #home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 45vh;
        width: 100vw;
        background-color: #131313;
      }

      #title {
        position: absolute;
        z-index: 99;
        font-size: 5vw;
        color: #fff;
        white-space: nowrap;
        left: 5vw;
      }

      #textDesc {
        font-size: 3vw;
        text-align: justify-all;
      }

      #card1 {
        height: 100%;
        width: 100%;
      }

      #card2 {
        height: 100%;
        width: 100%;
      }

      #card3 {
        height: 100%;
        width: 100%;
      }

      #divDesc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        text-align: justify-all;
        gap: 1vh;
        right: 5vw;
        width: 30vw;
        color: #fff;
      }

      #divAbout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        gap: 1vh;
        left: 5vw;
        text-align: justify;
        width: 30vw;
        color: #fff;
      }

      #textAbout {
        font-size: 3vw;
        text-align: justify-all;
      }

      .buttonPersonalise {
        font-size: 2vw;
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
        text-align: justify;
        height: 45vh;
        width: 100vw;
        background-color: #000000;
      }

      #about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: justify;
        height: 45vh;
        width: 100vw;
        background-color: #000000;
      }
    }
</style>