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
                 <RouterLink to="/contact"><a>A propos</a></RouterLink>
                 <RouterLink to="/contact"><a>Personnaliser</a></RouterLink>
                 
                <!-- <a href="contact.html">Contact</a> -->
            </li>
            <RouterLink to="/">
                    <img src="../assets/logoRT.svg" alt="">
                </RouterLink>
            <div></div>
            <li >
                <RouterLink to="/profil"><img class="svgHeader" src="../assets/profil.svg" alt=""></RouterLink>
                <RouterLink to="/shoppingcart"><img class="svgHeader" src="../assets/panier.svg" alt=""></RouterLink>
                
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

a {
    text-decoration: none;
    font-size: 36px;
    color: white;
}

header {
    display: flex;
    position: sticky;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: black;
    max-height: 109px;
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
