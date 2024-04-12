<script setup>

const props = defineProps(["data"])
import { ref } from 'vue'
const visible = ref(false)
function close() {
    visible.value = !visible.value
    console.log(visible)
}

</script>


<template>
    <div class="modal" v-show="visible">
        <div class="modal__overlay" @click="() => close()"></div>
        <div class="modal__content">
            <button class="modal__close" @click="() => close()">&times;</button>
            <div>
                <h3>{{ data.titre }}</h3>
                <div class="modal__année">
                    <figure>
                        <img src="../assets/pictures/calendrier.png" alt="icône représentant un calendrier">
                    </figure>
                    <p>{{ data.date }}</p>
                </div>
                <h4>Présentation du projet</h4>
                <p>{{ data.description }}</p>
                <h4>Technologies</h4>
                <ul>
                    <li>{{ data.techno1 }}</li>
                    <li>{{ data.techno2 }}</li>
                    <li>{{ data.techno3 }}</li>
                    <li>{{ data.techno4 }}</li>
                    <li>{{ data.techno5 }}</li>
                </ul>
                <p>Lien pour visualiser le résultat : <a href="lien.html" target="_blank">{{ data.lien1 }}</a></p>
                <p>Lien pour accéder au projet Github, le cas échéant : <a href="https://github.com/julien-turck"
                        target="_blank">{{ data.lien2 }}</a></p>
            </div>
        </div>
    </div>
</template>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    /*visibility: hidden;*/
}

.modal.active {
    visibility: visible;
}

.modal a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid gray;
}

.modal a:hover {
    border-bottom: 1px solid black;
    color: gray;
}

.modal__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333333d3;
}

.modal__content {
    display: flex;
    width: 90%;
    background: white;
    border-radius: 5px;
    position: absolute;
    padding: 10px;
    text-align: justify;
}

.modal__année {
    display: flex;
}

.modal__année figure {
    width: 25px;
    height: 25px;
}

.modal__année img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal__close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: none;
    border: 1px solid gray;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    font-size: 18px;
    color: gray;
}

.modal__close:hover {
    border: 1px solid white;
    background-color: red;
    color: white;
    cursor: pointer;
}
</style>