<template>
    <div>
        <h1>MON PROFIL</h1>
        <div>
            <div id="photo_user"></div>
            <button>Modifier la photo</button>
        </div>
        <div id="form">
            <form class="formulaire">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>

                <label for="nom">Prenom :</label>
                <input type="text" id="prenom" name="prenom" required>

                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" required>


                <button type="submit">Créer</button>
            </form>
        </div>
    </div>

</template>