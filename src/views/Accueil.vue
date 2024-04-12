<script setup>
import Modale from "../components/Modale.vue"
import { ref } from 'vue'
const modaleOk = ref(false)
const idModale = ref(0)
function isVisible(idButton) {
    idModale.value = idButton
    modaleOk.value = !modaleOk.value
    console.log(modaleOk)
}
const mock = [
    {
        'titre': "Création d'un Portfolio", 'date': '2024', 'description': "Projet réalisé durant ma formation de développeur web full-stack. Il consitait à créer un portfolio me présentant ainsi que mes premières créations en tant que développeur débutant. Parmi les contraintes, outre les technologies à utiliser, listées plus bas, il y avait des contenus et des effets attendus. Ce que j'ai acquis avec ce projet, c'est l'utilisation de VueJS, la liaison de plusieurs pages, l'ancrage des menus, la génération de modales ainsi que l'envoi de formulaires en ligne.", 'techno1': 'HTML', 'techno2': 'CSS', 'techno3': 'JavaScript', 'techno4': 'VueJS v3', 'techno5': 'Github'
    },
    {
        'titre': "Création d'un Curriculum Vitae", 'date': '2024', 'description': "Projet réalisé durant ma formation de développeur web full-stack. Il consitait à éditer mon CV, présentant mon parcours scolaire et professionnel. Parmi les contraintes, outre les technologies à utiliser, listées plus bas, il y avait des contenus et des effets attendus. Ce que j'ai acquis avec ce projet, c'est la génération d'une page en HTML avec l'ajout d'un favicon, stylisée avec du CSS. J'ai également appris à créer des effets et des renvois vers des liens externes. Enfin, j'ai appris à utiliser un outil de versionning et à vérifier la conformité de mes projets avec les recommandations du W3C.", 'techno1': 'HTML', 'techno2': 'CSS', 'techno3': 'Git', 'techno4': 'Github', 'techno5': 'Visual Studio'
    },
    {
        'titre': "Création d'un cahier des charges", 'date': '2024', 'description': "Projet réalisé durant ma formation de développeur web full-stack. Il consitait à éditer un cahier des charges répondant à la commande d'un site e-commerce. Le client était imposé mais fictif. Il avait des exigences de conenus pour ces clients, de type de payements ainsi que de transferts de compétences au niveau du back-office. Ce que j'ai acquis avec ce projet, c'est la confection d'un projet répondant à un besoin, la recherche sur ce qui se fait dans un domaine donné ainsi que sur la recherche d'offres d'hébergement.", 'techno1': 'WordPress', 'techno2': 'WooCommerce', 'techno3': 'SumUp', 'techno4': 'OVH', 'techno5': 'Canva'
    },
    {
        'titre': 'Dynamiser un espace de commentaires', 'date': '2024', 'description': "Projet réalisé durant ma formation de développeur web full-stack. Il consitait à rendre un espace de commentaire plus fluide dans son utilisation et dans l'affichage des informations. Parmi les contraintes, outre les technologies à utiliser, listées plus bas, il y avait des contenus et des effets attendus. Ce que j'ai acquis avec ce projet, c'est la création d'une fonction permettant l'affichage d'un nouveau bloc avec du contenu personnalisé, l'affichage d'un message d'erreur au moment opportun ainsi que la gestion du comportement d'une fonction.", 'techno1': 'HTML', 'techno2': 'Javascript', 'techno3': 'Git', 'techno4': 'Github', 'techno5': 'VisualStudio'
    },
    {
        'titre': "Administration d'un réseau de bibliothèques", 'date': 'De 2017 à 2022', 'description': "Desciption de mon poste au sein des bibliothèques d'Epinal. Vous pouvez visionner ici mon dossier de validation d'acquis d'expérience qui m'a permis de valider le BTS SIO. Ce serait beaucoup trop long de résumer ici ce que j'ai acquis durant cette période.Je vous invite donc à parcourir le PDF associé. Il vous permettra de juger de mes compétences dans les domaines de la maintenance, de l'administration et de la sécurisation du matériel informatique et des infrastructures réseaux.", 'techno1': 'Hyperviseurs', 'techno2': 'Serveurs OS Windows et Linux', 'techno3': 'Matériels réseau : Switchs, parefeux, proxys, bornes WIFI', 'techno4': 'Postes de travail OS Windows et Linux', 'techno5': 'Terminals mobiles OS Androïd et Apple', 'lien': '../assets/pictures/404.png'
    },
]

</script>

<template>
    <div class="quiSuisJe">
        <h3 id="QuiSuisJe">Qui suis-je?</h3>
        <div class="quiSuisJe__presentation">
            <figure class="quiSuisJe__photo">
                <a href="../src/assets/pictures/profile.png" target="_blank"><img
                        src="../../src/assets/pictures/profile.png" alt="Photo de profil de Julien Turck"></a>
            </figure>
            <article class="quiSuisJe__text">
                <h4>Julien TURCK</h4>
                <p>Actuellement, je suis technicien de maintenance informatique pour l'ADICA (Agence Départementale
                    d'Ingénierie pour les Collectivités de l'Aisne). Toutefois, mon parcours scolaire et professionnel
                    ne m'a pas tout de suite amené à travailler dans le secteur informatique.</p>
                <p>Vosgien d'origine, j'ai tout d'abord obtenu un Baccalauréat technique dans l'industrie, avant de me
                    réorienter dans le monde de la culture, de part ma passion pour l'histoire.</p>
                <p>Cette orientation m'a très rapidement amené à travailler dans les bibliothèques, secteur qui
                    recrutait beaucoup à l'époque. Mon atout majeur, qui me distinguait des autres candidats, était mon
                    appétence pour l'informatique et le numérique.</p>
                <p>J'étais donc sur des postes d'animateur multimédia et référent informatique / numérique. Ce qui m'a
                    permis d'apprendre sur le tas les métiers de technicien de maintenance puis d'administrateur réseaux
                    informatiques.</p>
                <p>Puis je suis devenu papa avec ma compagne axonnaise, que j'ai rejoint en 2021. Ce qui m'a amené à ma
                    situation professionnelle actuelle. C'est également durant cette période que j'ai obtenu un BTS SIO
                    par le biais de la validation des acquis de mes années en bibliothèque.</p>
                <p>Si mon parcours vous semble bien compliqué, je vous invite à consulter mon Curriculum Vitae en
                    <RouterLink to="./CV.html">cliquant ici</RouterLink>.
                </p>
            </article>
        </div>
    </div>
    <div class="portfolio">
        <article>
            <h3 id="Portfolio">Portfolio</h3>
            <p>Parce que des exemples sont plus parlant, </p>
            <p>Outre ce site que j'ai entièrement réalisé et dont vous pouvez consulter le projet en <button
                    class="openModal" @click="() => isVisible(0)">cliquant ici</button></p>
            <p>Vous pourrez visualiser ci-dessous les derniers projets auxquels j'ai participé.</p>
            <p>Pour visualiser tous mes projets et trouver celui qui vous convient : <RouterLink to="./projets.html">
                    cliquez
                    ici</RouterLink>
            </p>
        </article>
        <section class="projects">
            <div class="card">
                <figure class="card__image">
                    <img src="../../src/assets/pictures/cv.png"
                        alt="illustration de mon projet de création d'un Curriculum Vitae">
                </figure>
                <div class="card__description">
                    <h3>Création d'un Curriculum Vitae</h3>
                    <p>Projet réalisé durant ma formation de développeur web full-stack.</p>
                    <button class="openModal" @click="() => isVisible(1)">Pour en savoir plus</button>
                </div>
            </div>
            <div class="card">
                <figure class="card__image">
                    <img src="../../src/assets/pictures/cahier.png"
                        alt="illustration du cahier des charges d'un projet de site e-commerce">
                </figure>
                <div class="card__description">
                    <h3>Exemple de cahier des charges</h3>
                    <p>Projet réalisé durant ma formation de développeur web full-stack.</p>
                    <button class="openModal" @click="() => isVisible(2)">Pour en savoir plus</button>
                </div>
            </div>
            <div class="card">
                <figure class="card__image">
                    <img src="../../src/assets/pictures/js.png" alt="illustration d'un projet incluant du javascript">
                </figure>
                <div class="card__description">
                    <h3>Dynamiser un espace de commentaire</h3>
                    <p>Projet réalisé durant ma formation de développeur web full-stack.</p>
                    <button class="openModal" @click="() => isVisible(3)">Pour en savoir plus</button>
                </div>
            </div>
            <div class="card">
                <figure class="card__image">
                    <img src="../../src/assets/pictures/vae.PNG" alt="illustration d'un projet incluant du javascript">
                </figure>
                <div class="card__description">
                    <h3>Administration d'un réseau de bibliothèques</h3>
                    <p>Desciption de mon poste au sein des bibliothèques d'Epinal.</p>
                    <button class="openModal" @click="() => isVisible(4)">Pour en savoir
                        plus</button>
                </div>
            </div>
        </section>
    </div>
    <div>
        <section>
            <h3 id="MeContacter">Me contacter</h3>
            <p>Si la présentation d'un de mes projets vous a convaincu, <br> N'hésitez pas à me contacter afin que nous
                puissions créer le votre ensemble !</p>
        </section>
        <form class="form" action="https://formsubmit.co/81378b8103d24994e932f61a4606f7da" method="POST"
            target="_blank">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="https://julien-turck.github.io/assets/pages/thanks.html">
            <label for="firstname">
                <input type="text" name="firstname" id="firstname" placeholder="prénom" required>
            </label>
            <label for="lastname">
                <input type="text" name="lastname" id="lastname" placeholder="nom" required>
            </label>
            <label for="object">
                <input type="text" name="object" id="object" placeholder="objet" required>
            </label>
            <label for="message">
                <textarea name="message" id="message"
                    placeholder="Votre message (N'oubliez pas de laisser dans le corps du message un moyen de vous recontacter si besoin.)"
                    required></textarea>
            </label>
            <input type="submit" id="envoyer" value="Envoyer">
        </form>
    </div>
    <Modale :data="mock[idModale]" v-show="modaleOk" />
</template>

<style scoped>
.quiSuisJe {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
}

.quiSuisJe__presentation {
    display: flex;
    align-items: center;
}

.quiSuisJe__photo {
    width: 200px;
    height: 200px;
}

.quiSuisJe__photo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 30px gray;
}

.quiSuisJe__photo img:hover {
    cursor: zoom-in;
}

.quiSuisJe__text a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid gray;
}

.quiSuisJe__text a:hover {
    color: gray;
    border-bottom: 1px solid black;
}

.portfolio {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 76, 146, 0.2);
    padding-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;
}

.portfolio button {
    text-decoration: none;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid gray;
}

.portfolio button:hover {
    border-bottom: 1px solid black;
    color: gray;
}

.portfolio a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid gray;
}

.portfolio a:hover {
    border-bottom: 1px solid black;
    color: gray;
}

.projects {
    display: flex;
    justify-content: space-around;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.card__description {
    margin: 20px;
    font-size: 10px;
}

.card__image {
    width: 150px;
    height: 150px;
}

.card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.card__image img:hover {
    box-shadow: 12px 12px 2px 1px rgba(0, 76, 146, 0.2);
}

.openModal {
    border: none;
    padding-left: 0;
    background-color: inherit;
    border-bottom: 1px solid gray;
    font-weight: bold;
}

.openModal:hover {
    color: gray;
    border-bottom: 1px solid black;
    cursor: pointer;
}

.form {
    max-width: 400px;
    margin: 1rem auto 0 auto;
}

.form input,
.form textarea {
    display: block;
    width: 100%;
    padding: 5px;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.form textarea {
    min-height: 200px;
}

#envoyer {
    border: none;
    border-radius: 5%;
    background-color: rgba(0, 76, 146, 0.8);
    color: white;
    width: auto;
    min-width: 100px;
    font-size: 1rem;
}

#envoyer:hover {
    cursor: pointer;
    background-color: rgba(0, 76, 146, 0.4);
}
</style>