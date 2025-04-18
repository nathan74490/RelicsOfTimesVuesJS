<template>
    <div id="container" class="container">
        <div></div>
        <div>
        <h3 id="seconnecter">Se connecter</h3>
        <div id="form">
            
            <form class="formulaire">
                <input type="email" id="email" placeholder="Mail" name="email" required>
                <input type="password" id="password" placeholder="Mot de passe" name="password" required>
                <a href="#" id="motDePasseOubilie">Mot de passe oublié</a>
                <button type="submit">Se connecter</button>
                <RouterLink id="register" to="/register">Créer un compte</RouterLink>
            </form>
        </div>
    </div>
        
    </div>

</template>
<style>
    /* body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-image: url('../assets/fondLogin.svg');
    color: white;
    min-height: 100vh;
} */
#container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 30vw;

}
#fondLogin {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    /* opacity: 0.5; */
}
#seconnecter{
    font-family: 'Elegante Classica', sans-serif;
    font-size: 70px !important;
    text-align: center;
    color: white;
    margin-top: 50px;
    font-weight: bold;
    letter-spacing: 2px;
}

#form {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 40px; */
}

.formulaire {
    /* background-color: rgba(22, 22, 22, 0.966); */
    padding: 30px 40px;
    border-radius: 20px;
    /* box-shadow: 0 0 25px rgba(255, 255, 255, 0.05); */
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 425px;
}
#motDePasseOubilie{
    align-self: flex-end;
    font-size: 20px;
}
#register{
    align-self: center;
    font-size: 24px;
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
    border: 3px solid #ccc;
    border-radius: 50px;
    background-color: transparent;
    color: #ccc;
    font-size: 24px ;
}

input::placeholder {
    padding-left: 1vw;
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

</style>