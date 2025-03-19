<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import theHeader from './views/header.vue'
import HomeView from './views/HomeView.vue'

</script>

<template>
  <body>
    <theHeader />
    <HomeView />









  </body>
    <!-- <RouterView /> -->
</template>

<style scoped>
body{
  overflow-x: hidden;
}
</style>
