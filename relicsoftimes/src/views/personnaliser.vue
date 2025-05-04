<template>
    <div id="page_personnaliser" >
        <!-- <img id="carte" src="../assets/carte noir.svg" alt=""> -->
        <img id="carte" src="../assets/Vector.svg" alt="">
    </div>
</template>
<script setup></script>
<style>
body {
    background-color: black;
}
#page_personnaliser{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
#carte{
    /* align-self: center; */
    height: auto;
    width: auto;
    stroke-width:2;
    stroke:green;
    fill:#ff0000;
    
}
</style>