<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import theHeader from '../src/header.vue'
import thefooter from '../src/footer.vue'
import HomeView from './views/HomeView.vue'

</script>

<template>
  <body>
    <theHeader />
    <div id="containt">
      <RouterView/>
    </div>
    








    <thefooter />
  </body>

    <!-- <RouterView /> -->
</template>

<style scoped>
body{
  overflow-x: hidden;
}
#containt{
  min-height: 90vh;
}
</style>
