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
                <RouterLink to="/profile"><img src="../assets/PersonIcon.svg" alt=""></RouterLink>
                <RouterLink to="/shoppingcart"><img src="../assets/ShoppingCartIcon.svg" alt=""></RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                    class="icons" id="user">
                    <path
                        d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                    class="icons" id="cart">
                    <path
                        d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                </svg>
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
</style>
