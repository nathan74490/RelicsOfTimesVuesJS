<template>
    <img id='fondProfil' src="../assets/fondprofil.svg" alt="">
    <div id="profil">
        <h1>MON PROFIL</h1>
        <div id="info_profil">
            <div id="photo_user">
                <img src="../assets/defaultuser.svg" alt="">
            </div>
            <div id="infoUser">
                <div id="name_lastName_user">
                    
                    <div class="name_user">
                        <h4>Nom</h4>
                        <p class="user_value">nom user</p>
                    </div>
                    <div class="name_user">
                        <h4>Prenom</h4>
                        <p class="user_value">prenom user</p>
                    </div>
                </div>
                <h4>Email</h4>
                <p class="user_value">email user</p>
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

}
h1 {
    font-size: 5vw;
    color: #fff;
    white-space: nowrap;
    margin-top: 20px;
    text-align: center;
}
h4 {
    color: #009CD4;
}

#name_lastName_user {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 50px;
}
.name_user{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 5px;
}
#fondProfil {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

#photo_user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border-radius: 5%;
    margin-bottom: 20px;
    background-color: #8e8e8e;
}

#info_profil {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    gap: 20px;
    margin-top: 20px;
}

#infoUser {
    font-size: 18px;
    width: 50%;
    color: white;
}
.user_value{
    background-color:#D9D9D9 ;
    border-radius: 15px;
    color: black;
    padding: 5px;
    max-width: 25vw;
}
</style>