<script setup>

    import userProfil from '@/components/login.vue';
</script>
<template>
    <div id="pageProfil">
        <userProfil/>
    </div>
    
</template>
<style>
    #pageProfil {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-image: url('../assets/fondLogin.svg');
    /* background-color: rgba(1, 1, 1, 0.644); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background: radial-gradient(circle at bottom left, #1a1a1a, #000000); */
    color: white;
    min-height: 100vh;
}
</style>