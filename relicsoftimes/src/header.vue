<script setup>
import { RouterLink, RouterView } from 'vue-router'
// userIcon = document.getElementById("user");
// cartIcon = document.getElementById("cart");

// userIcon.addEventListener("click", () => {
//     window.location.href = "./user.html";
// })

// cartIcon.addEventListener("click", () => {
//     window.location.href = "./cart.html";
// })

</script>

<template>
    <header>
        <ul>
            <li>
                
                <!-- <a href="index.html"></a> -->
                 <a id="link" href="/#productPersonalise"> A propos</a>
                 <RouterLink to="/Personnaliser"><a id="link">Personnaliser</a></RouterLink>
                 
                <!-- <a href="contact.html">Contact</a> -->
            </li>
            <RouterLink to="/">
                    <img src="../src/assets/logoRT.svg" alt="">
                </RouterLink>
            <div></div>
            <li >
                <RouterLink to="/profil"><img class="svgHeader" src="../src/assets/profil.svg" alt=""></RouterLink>
                <RouterLink to="/shoppingcart"><img class="svgHeader" src="../src/assets/panier.svg" alt=""></RouterLink>
                
            </li>
        </ul>
    </header>
</template>

<style>
body { 
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}


li {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    overflow: hidden;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    /* max-height: 109px; */
    width: 100%;
    overflow: hidden;
    /* border-bottom: black solid 1px; */
    padding: 8px;
    margin: 0;
}

#link {
    font-family: "Relics Of Times";
    text-decoration: none;
    font-size: 36px;
    color: white;
}

a {
  text-decoration: none;
  color: white;
}

header {
    display: flex;
    position: absolute;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    z-index: 99;
    top: 0;
    width: 100%;
    background-color: transparent;
    max-height: 10.9vh;
    
}
.settings{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.svgHeader{
    color: black;
    height: 40px;
    width: 40px;
}
</style>
