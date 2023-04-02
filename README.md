# Test technique N°2
![techno react](https://img.shields.io/badge/Techno-React-red) ![Plateforme mobile tablets](https://img.shields.io/badge/Plateform-Mobile/Tablets-yellowgreen) ![enter image description here](https://img.shields.io/badge/BDD-api-green)

Cet exercice consiste à implémenter une **application web** qui affiche une liste de films d’après la **maquette Figma** fournie et une **API Endpoint** fournie.

**Lien vers l'application :** 

## Instructions de ce test  [📜](https://emojipedia.org/scroll/)

> 1.  **Récupération des données de l'API Endpoint et affichage dans la liste de films** Vous devez récupérer les données de l'API Endpoint
> fournie, puis les afficher dans la liste de films de votre application
> web de cette façon :
>     -   La section en entête de la page d’accueil de l’application devra afficher les 4 films les plus récents de la liste complète, dans
> une liste déroulante horizontale.
>     -   Le reste de la section devra afficher la liste de tous **les autres** films dans une liste déroulante verticale.
>    
> 2.  **Recherche par titre de film** Les utilisateurs doivent être en mesure de rechercher des films (par titre uniquement). Les résultats
> de recherche doivent s’afficher dans une modale et sont triés par
> ordre alphabétique. Le type d’algoritme de recherche est au choix (ex:
> fuzzy).
> 
> 3.  **Affichage des détails de chaque film dans une modale** Lorsqu'un film est sélectionné, les détails de celui-ci doivent s'afficher dans
> une modale.
> 
> 4.  **Adaptabilité de l'application** L'application doit être pensée “Mobile First” et responsive, afin de garantir une expérience
> utilisateur optimale sur toutes les tailles d'écrans smartphones et
> tablettes.

## Installation 🛠️

 1. Cloner le repository à l'endroit au choix sur votre machine. 
 2. Se rendre à la racine du repo cloné et effectuer dans le terminal : 

    YARN INSTALL

 3. Puis pour lancer le projet faire : 

    YARN START 

 4. Et enfin lancer dans un navigateur à l'adresse : 

    http://localhost:8080/


## Choix techniques [🛠️](https://emojipedia.org/hammer-and-wrench/)

Pour cet exercice j'ai fait les choix techniques suivants :

|Techno| Justification |
|--|--|
| React | Pour sa gestion par composants, sa simplicité dans le fait de pouvoir changer la palce de certains composants, de pouvoir tout ranger facilment mais aussi pour sa performance / réactivité. |
|Axios| Facile à utiliser et à intégrer dans les projets React. Il offre une syntaxe simple et claire pour effectuer des requêtes HTTP, notamment GET, POST, PUT, DELETE, etc.|
| PropTypes | Documentez clairement quelles props sont attendues et quel type de données elles doivent contenir. Cela permet à d'autres développeurs de comprendre le code rapidement. |
| Babel | Permet d'utiliser les dernières fonctionnalités du langage JavaScript (ES6, ES7, etc.) tout en maintenant la compatibilité avec les navigateurs plus anciens. |
| Webpack | Il prend en charge l'importation de différents types de fichiers (JavaScript, CSS, images, etc.) et génère un ensemble de fichiers optimisés pour la production. |
| ESLint | Il aide à améliorer la qualité du code et à suivre les meilleures pratiques en développement. Détecter et corriger les erreurs. |
| SASS | Cela permet de pouvoir mieux organiser mon CSS et pouvoir ranger le code en cascade. |
| Framework CSS | Je n'ai utilisé aucun framework CSS dans cet exercice pour deux raisons, montrer que je suis capable de reproduire la maquette sans aide supplémentaire et pour avoir un rendu très fidèle. |



## Choix de conception et d'architecture [📊](https://emojipedia.org/bar-chart/)

### Structure du projet et organisation des fichiers 

![Structure projet](https://imgtr.ee/images/2023/03/31/USSH4.png)



## Problèmes / solutions trouvés 
| Problèmes | Solutions |
|--|--|
| Problème de CORS avec l'API | Je n'avais pas accès par mon localhost à faire des appels API car cette url ne devait pas être dans la liste des url autorisés par le serveur, j'ai du passer par un proxy pour faire mes requettes HTTP.  |
| Thumbnail manquantes  | Certaines étaient manquantes et retournaient une erreur 404 au moment de les recupérer, j'ai du mettre en place une verification pour que si pas de thumbnail, le film ne s'affiche pas dans les différents composants, car sans image, ce n'était pas très user friendly. |
| Cover manquantes  | Même problème que pour les thumbnails.  |
| Différentes tailles des thumbnail |       J'ai du trouver des manières de les resize en gardant les ratio/proportions et qu'elles soient au final toutes de la même taille avec quelques règles CSS.|

