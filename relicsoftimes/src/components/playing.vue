<template>
    voulez vous jouer ?
    <RouterLink to="/testprompt"><button @click="play">oui</button></RouterLink>
</template>
<script setup> 
import { RouterLink, RouterView } from 'vue-router'
</script>