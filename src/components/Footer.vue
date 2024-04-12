<template>
    <div class="footer">
        <div class="social">
        <figure class="social__logo">
            <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/pictures/linkedin.png" alt="logo du réseau social Linkedin"></a>
        </figure>
        <figure class="social__logo">
            <a href="https://facebook.com/?lang=fr" target="_blank"><img src="../assets/pictures/facebook.png" alt="logo du réseau social Facebook"></a>
        </figure>
        <figure class="social__logo">
            <a href="https://github.com/" target="_blank"><img src="../assets/pictures/github.png" alt="logo du réseau social Github"></a>
        </figure>
        </div>
        <div>
            <p>Données mises à jour le <time datetime="2024-01-23">23 janvier 2024</time></p>
        </div>
    </div>
</template>

<style scoped>
    .footer{
    background-color: rgb(0, 76, 146);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    .social{
        display: flex;
        flex-direction: row;
    }

    .social__logo{
        width: 50px;
        height: 50px;
    }

    .social__logo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10%;
    }
</style>