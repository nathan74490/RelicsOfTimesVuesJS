<template>
    <div class="container">
        <h1>Créer mon compte</h1>
        <div class="info_profil"> 


            <div id="form">
                <form class="formulaire">
                    
                    <input type="text" id="nom" placeholder="Nom" name="nom" required>

                    
                    <input type="text" id="prenom" placeholder="Prenom"  name="prenom" required>

                    
                    <input type="email" id="email" placeholder="Email" name="email" required>

                    
                    <input type="password" id="password" placeholder="Mot de passe" name="password" required>


                    <button type="submit">Créer</button>
                </form>
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
.info_profil {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    /* width: 80vw; */
    gap: 20px;
    margin-top: 20px;
}

h1 {
    text-align: center;
    color: #fff;
    margin-top: 50px;
    font-size: 64px;
    font-family: 'Elegante Classica', sans-serif;
    /* font-weight: bold; */
    letter-spacing: 2px;
}

#form {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 40px; */
}
input[type="email"],
input[type="text"],
input[type="password"] {
    padding: 10px;
    border: 3px solid #ccc;
    border-radius: 50px;
    background-color: transparent;
    color: #ccc;
    font-size: 24px ;
}
button[type="submit"] {
    background-color: #009CD4;
    text-align: center;
    font-size: 36px;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 50px;
    /* font-size: 1rem; */
    /* cursor: pointer; */
    transition: background 0.3s ease, color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: white;
    color: black;
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

.formulaire {
    /* background-color: rgba(84, 84, 84, 0.484); */
    padding: 30px 40px;
    border-radius: 20px;
    /* box-shadow: 0 0 25px rgba(94, 94, 94, 0.05);c  */
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 425px;
}

label {
    font-weight: 500;
    margin-bottom: 5px;
    font-size: 0.9rem;
}

input[type="email"],
input[type="text"],
input[type="password"] {
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #ccc;
    color: #000;
    font-size: 1rem;
}


</style>