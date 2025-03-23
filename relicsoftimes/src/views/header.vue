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
                <RouterLink to="/">
                    <a>Relics Of Times</a>
                </RouterLink>
                <!-- <a href="index.html"></a> -->
                 <RouterLink to="/contact"><a>Contact</a></RouterLink>
                <!-- <a href="contact.html">Contact</a> -->
            </li>
            <li >
                <RouterLink to="/profil"><img class="svgHeader" src="../assets/PersonIcon.svg" alt=""></RouterLink>
                <RouterLink to="/shoppingcart"><img class="svgHeader" src="../assets/ShoppingCartIcon.svg" alt=""></RouterLink>
                
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
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    border-bottom: black solid 1px;
    padding: 8px;
    margin: 0;
}

a {
    text-decoration: none;
    font-size: 36px;
    color: black;
}

header {
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
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
