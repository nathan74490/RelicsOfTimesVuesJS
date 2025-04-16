<template>
    <div>
        <h1>Connecter vous</h1>
        <div id="form">
            <form class="formulaire">
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" required>


                <button class="buttonPersonalise">Se connecter</button>
                <RouterLink class="buttonPersonalise" to="/register">s'inscrire</RouterLink>
            </form>
        </div>
        
    </div>

</template>
<style>
    body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: radial-gradient(circle at bottom left, #1a1a1a, #000000);
    color: white;
    min-height: 100vh;
}

h1 {
    text-align: center;
    color: white;
    margin-top: 50px;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 2px;
}

#form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}

.formulaire {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 30px 40px;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
}

label {
    font-weight: 500;
    margin-bottom: 5px;
    font-size: 0.9rem;
}

input[type="email"],
input[type="password"] {
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #ccc;
    color: #000;
    font-size: 1rem;
}

button[type="submit"] {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 10px;
    border-radius: 20px;
    font-size: 1rem;
    /* cursor: pointer; */
    transition: background 0.3s ease, color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: white;
    color: black;
}

</style>