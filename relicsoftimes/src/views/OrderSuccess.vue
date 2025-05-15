<template>
  <div id="successPage">
    <div class="popup">
      <h1 style="color: white;">MERCI POUR<br />VOTRE COMMANDE</h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/')
  }, 5000) // redirection après 5 secondes
})
</script>

<style scoped>
#successPage {
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Relics Of Times", serif;
}

.popup {
  border: 4px solid white;
  padding: 4vh 6vw;
  border-radius: 16px;
  text-align: center;
  font-size: 3vw;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 0 40px white;
  color: white;
}
</style>
