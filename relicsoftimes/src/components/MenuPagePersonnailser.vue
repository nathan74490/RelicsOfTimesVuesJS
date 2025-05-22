<template>
  <div id="menu">
    <nav @click="emit('select', 'colors')">Couleur fond</nav>
    <nav @click="emit('select', 'images')">Logo</nav>
    <nav id="btnajoutpanier" @click="emit('addToCart')">Ajouter au panier</nav>
  </div>
</template>

<script setup>
const emit = defineEmits(['select', 'addToCart'])
</script>

<style scoped>
#menu {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  height: 30vh;
  width: 20vw;
  border-radius: 15px;
}

nav {
  background-color: #ffffff;
  border: 1px solid rgb(6, 6, 6);
  color: #000000;
  padding: 10px;
  border-radius: 20px;
  font-size: 32px;
  width: 16vw;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

nav:hover {
  background-color: #ffffff;
  color: #009CD4;
}

nav:active {
  background-color: #009CD4;
  border: 2px solid #009CD4;
  color: #ffffff;
}
#btnajoutpanier{
  background-color: #000000;
  border: 1px solid rgb(6, 6, 6);
  color: #ffffff;
  padding: 10px;
  border-radius: 20px;
  font-size: 32px;
  width: 16vw;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;
  cursor: pointer;
}
#btnajoutpanier:hover {
  background-color: #009CD4;
  color: #ffffff;
}
</style>