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
          <p id="textDesc">Tout le monde a vécu une enfance, et nous ressentons tous une certaine nostalgie en nous remémorant les moments marquants de cette période. C’est pourquoi nous avons décidé de créer un jeu dans le style de Trivial Pursuit, mais centré sur ce qui a marqué notre enfance : des jouets, des dessins animés, etc.L’objectif de ce projet est de raviver les souvenirs d’enfance des joueurs.</p>
          <RouterLink class="buttonPersonalise" style="width: 55%;" to="#">Personnaliser</RouterLink>
        </div>
    </section>
    <section id="about">
        <img id="card3" src="../assets/cards3.png" alt="Cartes du jeu Relics Of Times" />
        <div id="divAbout">
          <p class="textAbout">Pour jouer c’est très simple, il vous faut minimum 4 personnes qui aiment et qui sont prêts à tout pour gagner. </p>
          <p class="textAbout">Chaque équipe ( de 2 membres minimum ) a 1 min pour faire deviner un maximum de cartes.
            La méthode utilisée est au choix parmi les 3 suivantes : chanter / mimer / mots clés. </p>
          <p class="textAbout">Suivant la catégorie sur laquelle vous tombez, vous pouvez gagner plus de points selon la méthode choisie.</p>
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
      font-family: "Relics Of Times";
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

      .textAbout {
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