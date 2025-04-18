<template>
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-contact">
                    <h3>Contact:</h3>
                    <a href="tel:+33772203515">
                        <p>0772203515</p>
                    </a>
                    <a href="mailto:relicsoftimes@gmail.com">
                        <p>relicsoftimes@gmail.com</p>
                    </a>
                </div>
                
            </div>
            <p>&copy; 2023 Relics of Times. Tous droits réservés.</p>
            <div class="footer-links">
                    <!-- <a href="#">Mentions légales</a> -->
                <a href="#"><img src="./assets/logoinsta.svg" alt=""></a>
                <div></div>
                <a href="#"><img src="./assets/logo_X.svg" alt=""></a>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    background-color: black;
    color: white;
    padding: 20px 0;
    position: absolute;
    /* bottom: 0px; */
    width: 100vw;
}
.footer-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* padding: 0 20px; */
}
img {
  width: 4vw;
}
.footer-links{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15vw;
}
p {
    margin: 0;
    font-size: 24px;
}

@media screen and (max-width: 800px) {
    footer {
      background-color: #333;
      color: white;
      padding: 20px 0;
      position: sticky;
      bottom: 0;
      width: 100vw;
    }
    .footer-container{
      display: flex;
      flex-direction: row;
      /* justify-content: flex-start; */
      align-items: center;
      margin: 0;
      padding: 0 10px;
    }
    .footer-links{
      display: flex;
      align-items: center;
      width: 15vw;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
}
</style>