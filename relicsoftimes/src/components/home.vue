<template>
    <section id="home">
        <h1>RELICS OF TIMES</h1>
        <a href="doYouWantToPlay.html"><button id="buttonTest">test du jeu</button></a>
        <img id="flecheBasPageAcce" src="../assets/flecheBasPageAcce.svg"
            alt="Flèche indiquant un scrolle possible vers le bas">
    </section>
    <section id="productDescription">
        <h2>THE GAME</h2>
    </section>
</template>

<style>
    #home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #999494;
    }
    h1 {
        font-size: 128px;
        color: #fff;
    }
    #buttonTest {
        margin-top: 20px;
        padding: 10px 20px;
        width: 50vw;
        background-color: #c7c7c7;
        color: #0d0d0d;
        border: none;
        border-radius: 300px;
        cursor: pointer;
        font-size: 128px;
        text-align: center;
        font-family: "ABeeZee", serif;
        font-weight: 400;
        font-style: normal;
    }
    #flecheBasPageAcce{
        margin-top: 20vh;
        width: 110px;
        height: 55px;
        
    }
    #productDescription{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #000000;
    }
</style>