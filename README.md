# Portfolio de Julien Turck avec Vue.Js

Ce fichier est là pour vous aider à visualiser mon Portfolio, réalisé avec le Framework Vue.Js.
Vous pourrez également le modifier afin de l'améliorer et de vous l'approprier.
Attention : Toutes mes explications sont optimisées pour l'OS Windows 10 et 11

## Configuration machine préalable

Installation des logiciels suivants :
[VSCode](https://code.visualstudio.com/) + [Node.js](https://nodejs.org/download)

## installation du projet sur votre machine

Après téléchargement du projet à cette adresse : [portfolio_vuejs](https://github.com/julien-turck/portfolio_vuejs)
Dézippez le fichier afin que vue-project devienne le dossier racine du projet (si le nom du dossier contient d'autres éléments que vue-project, supprimez les en renommant le dossier)
Placez le à la racine du même lecteur que le logiciel Node.js pour plus de confort.
Attention : la première fois, ne modifiez pas l'arborescence des dossiers et fichiers du projets, sous peine que celui-ci comportent d'importantes erreurs ou qu'il soit inutilisable

### Afficher le projet

Démarrez 'Node.js command prompt' installé avec Node.js pauis tapez les commandes suivantes, dans l'ordre, pour :

vous placez sur le bon dossier :

```sh
cd vue-project
```

Attention : vue-project est le nom de base du projet. Si vous avez modifié le nom du dossier contenant le projet, il faudra adapter la commande en conséquence.

démarrez la compilation du projet :

```sh
npm run dev
```

Dans la barre d'URL d'un navigateur Internet, copiez et collez l'adresse local de type http://localhost:XXXX apparue dans la nouvelle fenêtre (XXXX étant à remplacer par le nombre correspondant au port qui lui sera reservé sur votre machine)

### Modifier le projet

Démarrez le logiciel Visual Studio Code, puis dans le menu file, cliquez sur Open Folder. Depuis la nouvelle fenêtre, recherchez le dossier projet dans l'explorateur de fichiers de votre machine. Double-cliquez dessus pour le selectionner.

### Créer un build exploitable pour les serveurs d'hébergement

Pour sa mise en ligne, il est important de "builder" le projet afin qu'il soit expoitable par les serveurs des hébergeurs.
Pour se faire, toujours dans Node.js, une fois placé dans le dossier du projet, tapez la commande suivante :

```sh
npm run build
```

Un dossier Dist s'inserera dans le dossier complet du projet. C'est le contenu de ce dossier qu'il faudra transférer sur votre serveur dédié par votre hebergeur.
Le transfert se fait en utilisant le protocole FTP, à l'aide d'un outil de transfert tiers comme Filezilla en téléchargeant la version "client" à cette adresse : [Filezilla](https://filezilla-project.org).


### Exploiter le formulaire fontionnel

En fin de Template du Composant Accueil.vue, se trouve un formulaire avec l'action suivante :
action="https://formsubmit.co/81378b8103d24994e932f61a4606f7da"
Le formulaire utilise l'outil en ligne gratuit formsubmit et cette action permet de recevoir les informations tapées dans le formulaire à l'adresse mail de notre choix.
Pour les recevoir, vous devez remplacer le numéro de série 81...da par votre propre adresse mail.
Vous recevrez alors une suite d'instructions afin que votre adresse soit remplacée par un numéro semblable au mien afin que celle-ci n'apparaisse plus dans le code.
Pour de plus amples informations sur ce service, consultez la documentation du site [formsubmit](https://formsubmit.co)
