<template>
    <div id="profil">
        <div id="info_profil">
          <div id="space"></div>
            <div id="infoUser">
              <h1>MON PROFIL</h1>
                <div class="info">
                  <p class="infos">Mail :</p>
                  <p class="infosProfile">mail@mail.com</p>
                </div>
                <div class="info">
                  <p class="infos">Prénom :</p>
                  <p class="infosProfile">Prénom</p>
                </div>
                <div class="info">
                  <p class="infos">Nom :</p>
                  <p class="infosProfile">Nom</p>
                </div>
              <div class="info">
                <p class="infos">Adresse :</p>
                <p class="infosProfile">Adresse</p>
              </div>
            </div>
        </div>
     </div>

</template>
<style>
 body {
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
#profil {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
.infosProfile {
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  text-align: left;
  width: 100%;
  height: 40px;
  font-size: 20px;
  border-radius: 8px;
  border: 3px solid #ffffff;
  padding-left: 1vw;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.infos {
  color: #ffffff;
}

h1 {
    font-size: 3vw;
    color: #fff;
    white-space: nowrap;
    margin-top: 20px;
    text-align: center;
}
h4 {
    color: #009CD4;
}

#space {
  width: 50vw;
}

#info_profil {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 20px;
    margin-top: 20px;
}

#infoUser {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  gap: 20px;
}
</style>