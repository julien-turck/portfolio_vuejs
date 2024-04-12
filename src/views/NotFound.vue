<template>
    <div class="notFound">
        <div class="text">
            <h2>ERROR 404</h2>
            <p>OUPS ! Cette page est en cours de maintenance !</p>
            <p>Mais nous nous efforçons de la rendre disponible au plus vite</p>
        </div>
        <figure class="img404">
            <img src="../../src/assets/pictures/404.png" alt="image d'un alien tapotant sur un clavier">
        </figure>
        <p>Pour revenir à la page d'accueil, <a href="Accueil.vue">cliquez ici</a></p>
    </div>
</template>

<style scoped>
.notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1px;
}

.notFound a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid gray;
}

.notFound a:hover {
    color: gray;
    font-weight: bold;
    border-bottom: 1px solid black;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img404 img {
    width: 300px;
    height: 300px;
    object-fit: cover;
}
</style>