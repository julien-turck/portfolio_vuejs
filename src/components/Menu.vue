<script setup>
import { ref } from 'vue'
const isActiveQsj = ref(false)
const isActivePf = ref(false)
const isActiveMc = ref(false)
function classActiveQsj() {
    isActiveQsj.value = true
    isActivePf.value = false
    isActiveMc.value = false
}
function classActivePf() {
    isActiveQsj.value = false
    isActivePf.value = true
    isActiveMc.value = false
}
function classActiveMc() {
    isActiveQsj.value = false
    isActivePf.value = false
    isActiveMc.value = true
}
function classInactive() {
    isActiveQsj.value = false
    isActivePf.value = false
    isActiveMc.value = false
}
</script>

<template>
    <div class="menu">
        <figure class="logo">
            <a href="#" @click="() => classInactive()"><img src="../assets/pictures/logo.png"
                    alt="logo de la société-image d'alien"></a>
        </figure>
        <h1>A l'E-Aisne</h1>
        <nav>
            <ul class="nav">
                <li id="quiSuisJe" v-bind:class="{ active: isActiveQsj }">
                    <a href="#QuiSuisJe" @click="() => classActiveQsj()">Qui suis-je ?</a>
                </li>
                <li id="portfolio" v-bind:class="{ active: isActivePf }">
                    <a href="#Portfolio" @click="() => classActivePf()">Portfolio</a>
                </li>
                <li id="meContacter" v-bind:class="{ active: isActiveMc }">
                    <a href="#MeContacter" @click="() => classActiveMc()">Me contacter</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 76, 146, 0.5);
    position: sticky;
    top: 0;
    z-index: 1;
}

.logo img {
    width: 150px;
    height: 110px;
    border-radius: 10%;
}

h1 {
    color: white;
    text-align: center;
    font-size: 40px;
    text-decoration: none;
}

.nav {
    display: flex;
    list-style-type: none;
    margin-right: 10px;
}

.nav li {
    margin-left: 20px;
    text-decoration: none;
    font-weight: bold;
}

.nav li:hover {
    cursor: pointer;
    border-bottom: solid 2px white;
}

#quiSuisJe.active {
    border-bottom: solid 2px white;
}

#portfolio.active {
    border-bottom: solid 2px white;
}

#meContacter.active {
    border-bottom: solid 2px white;
}

.nav a {
    text-decoration: none;
    color: white;
}
</style>