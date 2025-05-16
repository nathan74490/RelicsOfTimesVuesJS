<template>
  <div id="successPage">
    <div class="popup">
      <h1 style="color: white;">MERCI POUR<br />VOTRE COMMANDE</h1>
      <p class="countdown">Redirection dans {{ countdown }} secondes...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const countdown = ref(5)

onMounted(() => {
  const interval = setInterval(() => {
    countdown.value--
    if (countdown.value === 0) {
      clearInterval(interval)
      router.push('/')
    }
  }, 1000)
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
}

.countdown {
  font-size: 1.5vw;
  margin-top: 2vh;
  color: #ccc;
}
</style>