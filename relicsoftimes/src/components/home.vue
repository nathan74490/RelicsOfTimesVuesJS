  <script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart' // importe ton store
import SlideSplide from '@/components/SlideSplide.vue';
const cartStore = useCartStore()

function addToCart() {
  cartStore.addToCart({
    id: 1,
    custom: "Jeu Relics Of Times",
    delivery: "15/05/2025",
    price: 29.99
  })
  alert("Produit ajouté au panier !")
}
</script>

<template>
  <section id="home">
    <div id="divDesc">
      <h1 id="title">Relics Of Times</h1>
      <p>Revivez vos plus beaux souvenirs d’enfance le temps d’un jeu.</p>
      <RouterLink class="buttonPersonalise" style="width: 15vw;" to="/play">Tester le jeu</RouterLink>
    </div>
  </section>
  <div>
    <div style="width: 100vw; padding: 2rem 0;">
    <SlideSplide />
    </div>
  </div>
  <section id="productPersonalise">
    <div id="dviinfohome">
      <h2 id="titleproductPrersonalise">Personnalisez vos cartes</h2>
      <div style="width: 24vw; display: flex; flex-direction: column; gap: 5vh;">
        <p class="textDesc">Tout le monde a vécu une enfance, et nous éprouvons tous une certaine nostalgie en repensant
          aux
          moments marquants de cette période.</p>

        <p class="textDesc">C’est pourquoi nous avons décidé de créer un jeu inspiré du célèbre Trivial Pursuit, centré
          sur
          ce qui a bercé notre enfance : jouets, dessins animés, séries cultes, et bien plus encore.</p>

        <p class="textDesc">L’objectif de ce projet est de raviver chez les joueurs leurs plus beaux souvenirs
          d’enfance.</p>
      </div>
      <RouterLink class="buttonPersonalise" style="width: 55%;" to="#">Personnaliser</RouterLink>
    </div>
  </section>
  <section id="about">
    <div id="divAbout">
      <h2 id="titleplay">Comment-ça marche ?</h2>
      <div id="logoRegles">
        <div class="imagesRegles"><img src="../assets/logoGroupe.svg" alt="">
          <p>4-8 joueurs</p>
        </div>
        <div class="imagesRegles"><img src="../assets/logoFamille.svg" alt="">
          <p>+ 10 ans </p>
        </div>
        <div class="imagesRegles"><img src="../assets/logoTime.svg" alt="">
          <p>+ 25 min</p>
        </div>
      </div>
      <p class="textAbout">La méthode utilisée pour faire deviner est au choix parmi les 3 suivantes : chanter / mimer /
        mots clés.</p>
      <p class="textAbout">
        Suivant la catégorie sur laquelle vous tombez, vous pouvez gagner plus de points selon la méthode choisie. </p>
      <div id="btnBasPageAcce">
        <RouterLink class="buttonPersonalise" style="width: 15vw;" to="/play">Tester le jeu</RouterLink>
        <button class="buttonPersonalise" style="width: 15vw;" @click="addToCart">
          Ajouter au panier
        </button>
      </div>
    </div>
  </section>
</template>

<style>
/*---------------------------------------------*/
#home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/cards1.png");
  background-size: cover;
  justify-content: center;
  color: #fff;
  gap: 1vh;
}

#title {
  font-family: "Relics Of Times";
  font-size: 5vw;
  color: #fff;
}

#divDesc {
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-end; */
  gap: 5vh;
  /* width: 25vw; */
  color: #fff;
}

p#divDesc {
  font-size: 24px;
  text-align: justify;
  color: #fff;
}

/*---------------------------------------------*/
.app-container {
  padding: 50px;
  display: flex;
  justify-content: center;
}

/*----------------------------------------------*/
#productPersonalise {
  margin-top: -1vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/cards2.png");
  background-size: cover;
}

#titleproductPrersonalise {
  font-family: "Relics Of Times";
  font-size: 48px;
  color: #fff;
  text-align: end;
}

#dviinfohome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5vh;
  margin-right: 5vw;
  font-size: 24px;
  width: 32vw;
  color: #fff;
}

.textDesc {
  font-family: "Alatsi", sans-serif;
  font-size: 20px;
  text-align: end;
}

/*---------------------------------------------*/
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/cards3.png");
  background-size: cover;
}

#divAbout {
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  font-size: 24px;
  /* text-align: justify; */
  width: 30vw;
  color: #fff;
}

#logoRegles {
  display: flex;
  flex-direction: row;
  gap: 5vh;
}

#titleplay {
  font-family: "Relics Of Times";
  font-size: 48px;
  color: #fff;
  text-align: start;
}

.textAbout {
  font-size: 20px;
}

#btnBasPageAcce {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1vh;
  width: 25vw;
}

/* #buttonTest {
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
#flecheBasPageAcce {
  width: 110px;
  height: 55px;

} */




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

  .textDesc {
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

  #flecheBasPageAcce {
    width: 110px;
    height: 55px;

  }

  #productPersonalise {
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