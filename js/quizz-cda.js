// Base de données des questions - Fusionnée et optimisée
        const quizData = [
            // ========== C1 - ENVIRONNEMENT (10 questions) ==========
            {
                competence: "C1",
                category: "Environnement",
                question: "Quelle commande permet d'installer les dépendances d'un projet Symfony ?",
                options: [
                    "npm install",
                    "composer require",
                    "composer install",
                    "symfony dependencies:install"
                ],
                correct: 2,
                explanation: "composer install lit composer.lock et installe les versions exactes des dépendances. composer require ajoute une nouvelle dépendance. npm install est pour Node.js."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Dans Git, comment créer une nouvelle branche ET basculer dessus en une seule commande ?",
                options: [
                    "git branch feature/login && git switch feature/login",
                    "git checkout -b feature/login",
                    "git new branch feature/login",
                    "git switch --create feature/login"
                ],
                correct: 1,
                explanation: "git checkout -b crée ET bascule sur la nouvelle branche. Alternative moderne : git switch -c ou git switch --create."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Quel fichier configure les dépendances JavaScript d'un projet Angular ?",
                options: [
                    "composer.json",
                    "angular.json",
                    "package.json",
                    "tsconfig.json"
                ],
                correct: 2,
                explanation: "package.json définit les dépendances npm. angular.json configure le build. tsconfig.json configure TypeScript. composer.json est pour PHP."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Comment vérifier la version de PHP installée sur votre système ?",
                options: [
                    "php -v",
                    "php --info",
                    "php version",
                    "php -check"
                ],
                correct: 0,
                explanation: "php -v affiche la version PHP. php --version fonctionne aussi. php -m liste les modules, php -i affiche phpinfo()."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Quel outil permet de gérer différentes versions de Node.js sur une même machine ?",
                options: [
                    "npm version",
                    "node-switcher",
                    "nvm (Node Version Manager)",
                    "node-manager"
                ],
                correct: 2,
                explanation: "nvm permet d'installer et basculer entre plusieurs versions Node.js. Alternative Windows : nvm-windows. fnm est une alternative moderne."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Dans VS Code, quelle extension est essentielle pour le développement TypeScript ?",
                options: [
                    "ESLint uniquement",
                    "TypeScript Hero",
                    "Support TypeScript intégré natif + ESLint",
                    "Prettier uniquement"
                ],
                correct: 2,
                explanation: "VS Code a le support TypeScript intégré. ESLint vérifie la qualité du code, Prettier formate. TypeScript Hero ajoute des fonctionnalités supplémentaires."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Quelle commande permet de créer un nouveau projet Angular avec routing et SCSS ?",
                options: [
                    "ng new mon-projet",
                    "ng new mon-projet --routing --style=scss",
                    "ng create mon-projet --routing --scss",
                    "angular new mon-projet --routing=true --style=scss"
                ],
                correct: 1,
                explanation: "ng new avec --routing ajoute le module de routing, --style=scss configure SCSS. Sans options, Angular CLI demande interactivement."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Quel format de commit message est recommandé par Conventional Commits ?",
                options: [
                    "\"Fixed bug in login\"",
                    "\"feat(auth): add login form validation\"",
                    "\"Update: login form\"",
                    "\"LOGIN: Add validation\""
                ],
                correct: 1,
                explanation: "Format : type(scope): description. Types : feat, fix, docs, refactor, test, chore. Facilite changelog automatique et clarté de l'historique."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Comment ignorer les fichiers node_modules dans un dépôt Git ?",
                options: [
                    "Créer un fichier .gitexclude avec node_modules/",
                    "Ajouter node_modules/ dans .gitignore",
                    "Exécuter git ignore node_modules",
                    "Configurer git config --global ignore.modules"
                ],
                correct: 1,
                explanation: ".gitignore à la racine du projet liste les fichiers/dossiers à ignorer. node_modules/ ignore le dossier entier. .gitexclude n'existe pas."
            },
            {
                competence: "C1",
                category: "Environnement",
                question: "Quelle variable d'environnement Symfony utilise pour définir le mode de l'application ?",
                options: [
                    "SYMFONY_MODE",
                    "APP_ENV",
                    "ENVIRONMENT",
                    "APP_MODE"
                ],
                correct: 1,
                explanation: "APP_ENV=prod (production), dev (développement), test. Contrôle cache, debug, optimisations. APP_DEBUG=0 désactive le debug en production."
            },

            // ========== C2 - MAQUETTAGE (8 questions) ==========
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Quel outil permet de créer des maquettes interactives avec prototypage ?",
                options: [
                    "Photoshop",
                    "Figma",
                    "Excel",
                    "PowerPoint"
                ],
                correct: 1,
                explanation: "Figma est spécialisé en design UI/UX avec prototypage interactif, collaboration temps réel. Alternatives : Adobe XD, Sketch. Photoshop est pour la retouche photo."
            },
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Qu'est-ce qu'une User Story en méthodologie Agile ?",
                options: [
                    "Un document technique décrivant l'architecture",
                    "En tant que [rôle], je veux [fonctionnalité], afin de [bénéfice]",
                    "Un test utilisateur effectué après le développement",
                    "Une histoire racontée par l'utilisateur final"
                ],
                correct: 1,
                explanation: "Format User Story : focus sur la valeur métier, pas l'implémentation technique. Complétée par critères d'acceptation (Definition of Done)."
            },
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Quel diagramme UML montre les interactions entre utilisateurs et système ?",
                options: [
                    "Diagramme de classes",
                    "Diagramme de cas d'utilisation",
                    "Diagramme de séquence",
                    "Diagramme entité-association"
                ],
                correct: 1,
                explanation: "Le diagramme de cas d'utilisation représente les fonctionnalités (use cases) et les acteurs. Premier diagramme créé en analyse fonctionnelle."
            },
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Selon WCAG 2.1, quel ratio de contraste minimum pour le texte normal ?",
                options: [
                    "3:1",
                    "4.5:1",
                    "5:1",
                    "7:1"
                ],
                correct: 1,
                explanation: "WCAG 2.1 exige 4.5:1 pour texte normal (AA), 3:1 pour texte large (18pt+). Niveau AAA : 7:1 (texte normal), 4.5:1 (texte large)."
            },
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Quelle approche prioriser pour le design d'interfaces modernes ?",
                options: [
                    "Desktop-first puis adapter au mobile",
                    "Mobile-first puis enrichir pour desktop",
                    "Tablette-first comme compromis",
                    "Créer des versions séparées pour chaque appareil"
                ],
                correct: 1,
                explanation: "Mobile-first force à prioriser le contenu essentiel, facilite l'enrichissement progressif (progressive enhancement). 60%+ du trafic est mobile."
            },
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Qu'est-ce qu'un wireframe ?",
                options: [
                    "Le design final avec couleurs et images",
                    "Une esquisse basse fidélité de la structure de la page",
                    "Le code HTML d'une page",
                    "Une maquette interactive avec animations"
                ],
                correct: 1,
                explanation: "Wireframe = schéma fil de fer, structure sans design visuel. Mockup = maquette avec design. Prototype = maquette interactive."
            },
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Quel principe d'ergonomie recommande de minimiser la charge cognitive ?",
                options: [
                    "Loi de Hick (choix limités)",
                    "Loi de Fitts (taille des cibles)",
                    "Loi de Miller (7±2 éléments)",
                    "Toutes ces lois contribuent"
                ],
                correct: 3,
                explanation: "Loi de Hick : + de choix = + de temps de décision. Loi de Fitts : taille cible ↑ = atteinte ↑. Loi de Miller : 7±2 éléments en mémoire de travail."
            },
            {
                competence: "C2",
                category: "Maquettage/UX",
                question: "Comment tester l'accessibilité d'une interface web ?",
                options: [
                    "Uniquement par des tests automatisés",
                    "Tests automatisés (Axe, Lighthouse) + tests manuels (navigation clavier, lecteurs d'écran)",
                    "Uniquement tester avec un lecteur d'écran",
                    "Vérifier seulement les contrastes de couleurs"
                ],
                correct: 1,
                explanation: "Approche complète : outils automatisés (30% des problèmes), tests manuels (clavier, NVDA/JAWS), tests avec utilisateurs en situation de handicap."
            },

            // ========== C3 - INTERFACES STATIQUES (9 questions) ==========
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Quelle balise HTML5 est sémantiquement correcte pour le contenu principal ?",
                options: [
                    "<div id='main'>",
                    "<main>",
                    "<section id='content'>",
                    "<article class='main'>"
                ],
                correct: 1,
                explanation: "<main> définit le contenu principal unique de la page. <article> pour contenu autonome, <section> pour section thématique, <div> n'a pas de sens sémantique."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Comment créer une grille CSS responsive avec 3 colonnes sur desktop, 1 sur mobile ?",
                options: [
                    "display: grid; grid-template-columns: repeat(3, 1fr);",
                    "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));",
                    "display: flex; flex-direction: column;",
                    "display: table; table-layout: auto;"
                ],
                correct: 1,
                explanation: "repeat(auto-fit, minmax(300px, 1fr)) crée une grille responsive : min 300px par colonne, s'adapte automatiquement. Option A nécessite media queries."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Quelle meta tag est ESSENTIELLE pour le responsive design ?",
                options: [
                    "<meta charset='UTF-8'>",
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
                    "<meta name='description' content='...'>",
                    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"
                ],
                correct: 1,
                explanation: "viewport contrôle l'affichage mobile : width=device-width adapte la largeur, initial-scale=1.0 définit le zoom. Sans elle, mode desktop sur mobile."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Comment centrer un élément verticalement et horizontalement avec Flexbox ?",
                options: [
                    "display: flex; justify-content: center; align-items: center;",
                    "display: flex; align-content: center;",
                    "display: flex; justify-items: center;",
                    "display: flex; place-content: center;"
                ],
                correct: 0,
                explanation: "justify-content: center (axe principal/horizontal), align-items: center (axe transversal/vertical). place-content est un raccourci CSS Grid."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Quelle unité CSS est préférable pour les tailles de police accessibles ?",
                options: [
                    "px (pixels)",
                    "rem (root em)",
                    "pt (points)",
                    "cm (centimètres)"
                ],
                correct: 1,
                explanation: "rem respecte les préférences de taille de police du navigateur (accessibilité). 1rem = taille du <html>. em = relative au parent. px = fixe (non accessible)."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Comment optimiser les images pour le web moderne ?",
                options: [
                    "Utiliser uniquement JPEG en haute qualité",
                    "Utiliser WebP/AVIF avec fallback, images responsive (srcset), lazy loading",
                    "Augmenter la résolution pour les écrans Retina",
                    "Compresser toutes les images en PNG-8"
                ],
                correct: 1,
                explanation: "WebP (-30% vs JPEG), AVIF (-50%), srcset (différentes résolutions), loading='lazy', picture element. Compression + format moderne + stratégie de chargement."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Quel sélecteur CSS a la spécificité la PLUS élevée ?",
                options: [
                    "div.class",
                    "#id",
                    ".class .subclass",
                    "div > p"
                ],
                correct: 1,
                explanation: "Spécificité : inline style (1000) > #id (100) > .class (10) > element (1). !important surcharge tout (à éviter). #id bat toutes les classes."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Quelle propriété CSS permet d'appliquer des transitions fluides ?",
                options: [
                    "animation",
                    "transition",
                    "transform",
                    "timing-function"
                ],
                correct: 1,
                explanation: "transition: property duration timing-function delay. animation = keyframes complexes. transform = transformations géométriques. timing-function = courbe d'accélération."
            },
            {
                competence: "C3",
                category: "HTML/CSS",
                question: "Comment déclarer une variable CSS réutilisable ?",
                options: [
                    "$primary-color: #3b82f6;",
                    "--primary-color: #3b82f6;",
                    "@primary-color: #3b82f6;",
                    "var-primary-color: #3b82f6;"
                ],
                correct: 1,
                explanation: "CSS Custom Properties : --nom dans :root {}, utilisation : var(--nom). $ est Sass, @ est pour at-rules CSS."
            },

            // ========== C4 - INTERFACES DYNAMIQUES (12 questions) ==========
            {
                competence: "C4",
                category: "JavaScript",
                question: "Quelle différence entre let, const et var en JavaScript ?",
                options: [
                    "Aucune différence, juste des alias",
                    "let/const = block scope + temporal dead zone, var = function scope + hoisting",
                    "const ne peut jamais être modifié, let et var oui",
                    "var est moderne, let/const sont obsolètes"
                ],
                correct: 1,
                explanation: "let/const : block scope, pas de hoisting utilisable, const = référence constante (objet modifiable). var : function scope, hoisting complet (à éviter)."
            },
            {
                competence: "C4",
                category: "JavaScript",
                question: "Comment intercepter les erreurs dans une Promise ?",
                options: [
                    "try...catch uniquement",
                    ".catch() ou try...catch avec async/await",
                    ".error() callback",
                    "On ne peut pas gérer les erreurs de Promise"
                ],
                correct: 1,
                explanation: "Deux approches : promise.catch(error => {}) ou try { await promise } catch (error) {}. .finally() pour code exécuté dans tous les cas."
            },
            {
                competence: "C4",
                category: "JavaScript",
                question: "Qu'est-ce que le DOM (Document Object Model) ?",
                options: [
                    "Un langage de programmation",
                    "Une API pour manipuler la structure HTML/XML du document",
                    "Un framework JavaScript",
                    "Une base de données pour le navigateur"
                ],
                correct: 1,
                explanation: "Le DOM est une API (interface de programmation) qui représente le document HTML/XML comme un arbre d'objets manipulables via JavaScript."
            },
            {
                competence: "C4",
                category: "Angular",
                question: "En Angular 20, quelle syntaxe remplace *ngIf ?",
                options: [
                    "{{ #if condition }}",
                    "@if (condition) { }",
                    "[ngIf]='condition'",
                    "ng-if='condition'"
                ],
                correct: 1,
                explanation: "Angular 17+ : nouveau Control Flow avec @if, @for, @switch remplaçant *ngIf, *ngFor, *ngSwitch. Syntaxe plus claire, meilleures performances."
            },
            {
                competence: "C4",
                category: "Angular",
                question: "Comment créer un service injectable au niveau root en Angular ?",
                options: [
                    "@Injectable({ scope: 'root' })",
                    "@Injectable({ providedIn: 'root' })",
                    "@Service({ singleton: true })",
                    "@Injectable({ global: true })"
                ],
                correct: 1,
                explanation: "providedIn: 'root' = service singleton disponible partout. Tree-shakeable : supprimé automatiquement si non utilisé. Évite l'ajout dans providers[]."
            },
            {
                competence: "C4",
                category: "Angular",
                question: "Qu'est-ce qu'un Observable en RxJS (Angular) ?",
                options: [
                    "Une Promise améliorée",
                    "Un flux de données asynchrone, lazy, annulable avec opérateurs",
                    "Un type de variable TypeScript",
                    "Une fonction callback"
                ],
                correct: 1,
                explanation: "Observable = flux asynchrone, lazy (pas d'exécution sans subscribe), annulable (unsubscribe), opérateurs puissants (map, filter, mergeMap). Promise = eager, une seule valeur."
            },
            {
                competence: "C4",
                category: "Angular",
                question: "Comment implémenter le lazy loading d'un module de routes en Angular ?",
                options: [
                    "{ path: 'admin', component: AdminComponent }",
                    "{ path: 'admin', loadChildren: () => import('./admin/admin.routes') }",
                    "{ path: 'admin', lazy: true }",
                    "{ path: 'admin', preload: AdminModule }"
                ],
                correct: 1,
                explanation: "loadChildren avec import() dynamique charge le module seulement à l'activation de la route, réduisant le bundle initial. Angular 14+ : standalone routes."
            },
            {
                competence: "C4",
                category: "JavaScript",
                question: "Quelle méthode JavaScript permet de filtrer un tableau ?",
                options: [
                    "array.forEach()",
                    "array.filter(callback)",
                    "array.map()",
                    "array.reduce()"
                ],
                correct: 1,
                explanation: "filter() retourne nouveau tableau avec éléments validant la condition. map() transforme, forEach() itère sans retour, reduce() accumule."
            },
            {
                competence: "C4",
                category: "JavaScript",
                question: "Comment éviter les fuites mémoire avec les event listeners ?",
                options: [
                    "Ne jamais retirer les listeners",
                    "Utiliser removeEventListener() quand l'élément est détruit",
                    "Utiliser seulement addEventListener()",
                    "Les navigateurs gèrent automatiquement tout"
                ],
                correct: 1,
                explanation: "Toujours appeler removeEventListener() lors de la destruction du composant/élément. Dans Angular : utiliser ngOnDestroy(), dans vanilla JS : AbortController."
            },
            {
                competence: "C4",
                category: "JavaScript",
                question: "Qu'est-ce que le localStorage en JavaScript ?",
                options: [
                    "Une API pour stocker des données temporaires (session)",
                    "Une API pour stocker des données persistantes côté client (même après fermeture)",
                    "Une base de données SQL côté client",
                    "Un système de cache serveur"
                ],
                correct: 1,
                explanation: "localStorage : persistant, ~5MB, accessible par domaine. sessionStorage : durée de session. IndexedDB : BDD NoSQL client (~100MB+). Cookies : 4KB, envoyés au serveur."
            },
            {
                competence: "C4",
                category: "JavaScript",
                question: "Quelle est la différence entre == et === en JavaScript ?",
                options: [
                    "Aucune différence",
                    "== compare valeurs avec coercition de type, === compare valeurs ET types (strict)",
                    "== est plus rapide que ===",
                    "=== est obsolète"
                ],
                correct: 1,
                explanation: "== : coercition ('5' == 5 → true). === : strict, pas de conversion ('5' === 5 → false). Toujours préférer === pour éviter bugs subtils."
            },
            {
                competence: "C4",
                category: "JavaScript",
                question: "Comment déclarer une fonction fléchée (arrow function) en JavaScript ?",
                options: [
                    "function() => { }",
                    "() => { }",
                    "=> function() { }",
                    "arrow function() { }"
                ],
                correct: 1,
                explanation: "Syntaxe : (params) => { body }. Différences vs function : pas de this propre (hérite du contexte), pas de arguments, pas de new. Concise : x => x * 2."
            },

            // ========== C5 - BASE DE DONNÉES (11 questions) ==========
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Quelle est la différence entre INNER JOIN et LEFT JOIN ?",
                options: [
                    "Aucune différence, syntaxe différente uniquement",
                    "INNER JOIN : lignes avec correspondance dans les deux tables. LEFT JOIN : toutes lignes gauche + correspondances droite (NULL si absent)",
                    "LEFT JOIN est plus rapide qu'INNER JOIN",
                    "INNER JOIN retourne plus de résultats que LEFT JOIN"
                ],
                correct: 1,
                explanation: "INNER JOIN : intersection (correspondances uniquement). LEFT JOIN : tout à gauche + matches (NULL à droite si absent). RIGHT JOIN : inverse. FULL OUTER : tout."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Comment définir une clé étrangère en SQL ?",
                options: [
                    "FOREIGN user_id TO users.id",
                    "FOREIGN KEY (user_id) REFERENCES users(id)",
                    "REFERENCE KEY user_id FROM users",
                    "user_id LINKS TO users(id)"
                ],
                correct: 1,
                explanation: "FOREIGN KEY (colonne) REFERENCES table(colonne_cible). Ajouter ON DELETE CASCADE/RESTRICT/SET NULL selon besoin. Garantit intégrité référentielle."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Quelle forme normale élimine les dépendances transitives ?",
                options: [
                    "1NF (Première Forme Normale)",
                    "2NF (Deuxième Forme Normale)",
                    "3NF (Troisième Forme Normale)",
                    "BCNF (Boyce-Codd)"
                ],
                correct: 2,
                explanation: "1NF : valeurs atomiques. 2NF : pas de dépendance partielle (PK composite). 3NF : pas de dépendance transitive (attribut dépend d'un non-clé). BCNF : plus strict."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Différence entre MLD (Modèle Logique) et MPD (Modèle Physique) ?",
                options: [
                    "MLD utilise SQL, MPD utilise NoSQL",
                    "MLD définit tables et relations, MPD ajoute types SQL et contraintes techniques",
                    "MLD est conceptuel, MPD est logique",
                    "Aucune différence"
                ],
                correct: 1,
                explanation: "MCD : conceptuel (entités/associations). MLD : logique (tables, PK/FK). MPD : physique (VARCHAR(255), INT, INDEX, CHECK, DEFAULT, implémentation SGBD)."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Que fait la clause ON DELETE CASCADE ?",
                options: [
                    "Empêche la suppression si des références existent",
                    "Supprime automatiquement les enregistrements enfants liés",
                    "Archive les données au lieu de les supprimer",
                    "Met NULL dans les clés étrangères"
                ],
                correct: 1,
                explanation: "CASCADE : suppression propagée aux enfants. RESTRICT : bloque suppression si références. SET NULL : FK → NULL. SET DEFAULT : FK → valeur par défaut."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Comment créer un index pour optimiser les performances d'une requête ?",
                options: [
                    "CREATE OPTIMIZE ON table(column)",
                    "CREATE INDEX idx_name ON table(column)",
                    "ADD INDEX table.column",
                    "OPTIMIZE TABLE column"
                ],
                correct: 1,
                explanation: "CREATE INDEX accélère les recherches (WHERE, JOIN) mais ralentit INSERT/UPDATE. Indexer : clés étrangères, colonnes fréquemment filtrées. Pas sur petites tables."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Quelle différence principale entre SQL et NoSQL ?",
                options: [
                    "SQL est plus rapide que NoSQL",
                    "SQL : schéma fixe, relations, ACID. NoSQL : schéma flexible, scalabilité horizontale, BASE",
                    "NoSQL ne permet pas de relations",
                    "SQL est uniquement pour le web"
                ],
                correct: 1,
                explanation: "SQL : relationnel, schéma rigide, ACID complet, scalabilité verticale. NoSQL : types variés (document, clé-valeur, graphe), flexible, BASE, scalabilité horizontale."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Quel type de base NoSQL convient pour des sessions utilisateur avec expiration ?",
                options: [
                    "Document (MongoDB)",
                    "Clé-Valeur (Redis)",
                    "Colonne (Cassandra)",
                    "Graphe (Neo4j)"
                ],
                correct: 1,
                explanation: "Redis : clé-valeur en mémoire, ultra-rapide, TTL natif (expiration). Idéal pour cache, sessions, queues. MongoDB conviendrait mais Redis est optimisé pour ce cas."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Comment transformer une relation One-to-Many en Many-to-Many ?",
                options: [
                    "Ajouter plusieurs clés étrangères dans une table",
                    "Créer une table d'association (jonction) avec les PK des deux tables comme clé composite",
                    "Utiliser des triggers SQL",
                    "Dupliquer les données dans les deux tables"
                ],
                correct: 1,
                explanation: "Table de jointure avec FK vers les 2 tables. Ex : User ←→ user_role ←→ Role. PK composite (user_id, role_id) ou PK auto + index unique composite."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Quelle commande SQL permet de récupérer des données ?",
                options: [
                    "GET",
                    "SELECT",
                    "FETCH",
                    "RETRIEVE"
                ],
                correct: 1,
                explanation: "SELECT : lecture. INSERT : ajout. UPDATE : modification. DELETE : suppression. TRUNCATE : vider table. DROP : supprimer table."
            },
            {
                competence: "C5",
                category: "SQL/BDD",
                question: "Comment lire une cardinalité (1,n) dans un MCD ?",
                options: [
                    "1 occurrence minimum, n occurrences maximum",
                    "n occurrences minimum, 1 occurrence maximum",
                    "Exactement 1 ou n occurrences",
                    "Entre 1 et n occurrences aléatoires"
                ],
                correct: 0,
                explanation: "Cardinalité (min, max) : (0,1) optionnel unique, (1,1) obligatoire unique, (0,n) optionnel multiple, (1,n) obligatoire multiple. Se lit toujours (minimum, maximum)."
            },

            // ========== C6 - ACCÈS AUX DONNÉES (9 questions) ==========
            {
                competence: "C6",
                category: "API/ORM",
                question: "Qu'est-ce qu'une API REST ?",
                options: [
                    "Un protocole de sécurité",
                    "Un style architectural pour services web basé sur HTTP avec ressources et verbes",
                    "Un langage de programmation",
                    "Une base de données"
                ],
                correct: 1,
                explanation: "REST : Representational State Transfer. Principes : stateless, ressources (URI), verbes HTTP (GET, POST, PUT, DELETE), formats (JSON/XML)."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "Quelle méthode HTTP pour créer une nouvelle ressource ?",
                options: [
                    "GET",
                    "POST",
                    "PUT",
                    "CREATE"
                ],
                correct: 1,
                explanation: "POST : création. GET : lecture. PUT : mise à jour complète (idempotent). PATCH : mise à jour partielle. DELETE : suppression."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "Comment prévenir les injections SQL avec un ORM (Doctrine) ?",
                options: [
                    "Valider avec des regex uniquement",
                    "Utiliser setParameter() avec Query Builder ou DQL",
                    "Échapper manuellement les apostrophes",
                    "Utiliser addslashes()"
                ],
                correct: 1,
                explanation: "setParameter() sépare code et données, rendant injection impossible. Query Builder et DQL utilisent requêtes préparées. JAMAIS concaténer directement."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "Dans Symfony avec Doctrine, où écrire une requête personnalisée complexe ?",
                options: [
                    "Dans le Controller directement",
                    "Dans le Repository avec Query Builder",
                    "Dans le template Twig",
                    "Dans un fichier SQL séparé"
                ],
                correct: 1,
                explanation: "Repository : logique d'accès données, requêtes personnalisées avec Query Builder ou DQL. Controller : orchestration. Éviter SQL brut (risque injection, non typé)."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "Qu'est-ce qu'un JWT (JSON Web Token) ?",
                options: [
                    "Un format de base de données",
                    "Un standard pour transmettre des informations sécurisées entre parties (header.payload.signature)",
                    "Un protocole de transfert de fichiers",
                    "Un framework JavaScript"
                ],
                correct: 1,
                explanation: "JWT : 3 parties (header, payload, signature). Stateless, auto-contenu. Utilisation : authentification API, SSO. Stocker en httpOnly cookie (pas localStorage, risque XSS)."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "Différence principale entre REST et GraphQL ?",
                options: [
                    "REST est plus moderne que GraphQL",
                    "GraphQL : un endpoint, client spécifie données. REST : endpoints multiples, données fixes",
                    "GraphQL ne fonctionne qu'avec NoSQL",
                    "REST est plus rapide que GraphQL"
                ],
                correct: 1,
                explanation: "GraphQL : requête flexible, un endpoint, évite over-fetching/under-fetching. REST : endpoints par ressource, structure fixe. Chacun a ses cas d'usage."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "En Angular, quel service HTTP retourne des Observables ?",
                options: [
                    "fetch()",
                    "HttpClient",
                    "XMLHttpRequest",
                    "axios"
                ],
                correct: 1,
                explanation: "HttpClient d'Angular retourne Observables RxJS : opérateurs puissants (map, catchError, retry), annulation (unsubscribe). fetch() = Promise, axios pas natif Angular."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "Comment gérer les erreurs HTTP dans une requête Angular ?",
                options: [
                    "try...catch sur this.http.get()",
                    "Utiliser l'opérateur catchError() de RxJS",
                    "On ne peut pas gérer les erreurs HTTP",
                    "Utiliser .error() callback"
                ],
                correct: 1,
                explanation: "catchError(error => { ... }) dans pipe(). Erreurs HTTP côté client (réseau) et serveur (4xx, 5xx). Afficher message, logger, retourner Observable de secours."
            },
            {
                competence: "C6",
                category: "API/ORM",
                question: "Qu'est-ce que CORS (Cross-Origin Resource Sharing) ?",
                options: [
                    "Un protocole de sécurité pour les bases de données",
                    "Un mécanisme permettant à un domaine d'accéder aux ressources d'un autre domaine",
                    "Un format de données JSON",
                    "Un type de requête HTTP"
                ],
                correct: 1,
                explanation: "CORS : mécanisme de sécurité navigateur. Headers (Access-Control-Allow-Origin, Methods, Headers) autorisent requêtes cross-domain. Configuration côté serveur."
            },

            // ========== C7 - COMPOSANTS MÉTIER (10 questions) ==========
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Qu'est-ce que le pattern MVC ?",
                options: [
                    "Model : données/métier, View : présentation, Controller : lien M↔V",
                    "Un framework PHP",
                    "Une base de données",
                    "Un type de serveur web"
                ],
                correct: 0,
                explanation: "MVC sépare responsabilités : Model (données, logique métier), View (templates, affichage), Controller (orchestration, reçoit requêtes). Facilite tests et maintenance."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Quel principe SOLID signifie qu'une classe ne doit avoir qu'une seule responsabilité ?",
                options: [
                    "Open/Closed Principle",
                    "Single Responsibility Principle",
                    "Liskov Substitution Principle",
                    "Interface Segregation Principle"
                ],
                correct: 1,
                explanation: "S = Single Responsibility : une classe, une raison de changer. Facilite tests, maintenance. Ex : UserService ne doit pas gérer emails ET authentification."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "En PHP 8+, comment déclarer une propriété readonly ?",
                options: [
                    "private $name { get; }",
                    "public readonly string $name;",
                    "const string $name;",
                    "public string $name { readonly; }"
                ],
                correct: 1,
                explanation: "readonly (PHP 8.1+) : initialisée une fois (constructeur), immuable après. PHP 8.4 : property hooks (get/set automatiques). const : valeur à la compilation."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Qu'est-ce que l'injection de dépendances ?",
                options: [
                    "Une faille de sécurité",
                    "Fournir les dépendances d'une classe de l'extérieur (constructeur, setter) plutôt que new dans la classe",
                    "Un type de base de données",
                    "Une méthode de chiffrement"
                ],
                correct: 1,
                explanation: "DI : inverser le contrôle, classe reçoit dépendances (interface) de l'extérieur. Avantages : testabilité (mocks), découplage, respect SOLID (Dependency Inversion)."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Dans Symfony, comment déclarer un service et l'injecter automatiquement ?",
                options: [
                    "Déclarer dans services.yaml, utiliser #[Autowire] ou autowiring automatique",
                    "Créer manuellement avec new dans chaque classe",
                    "Importer avec require_once",
                    "Symfony ne permet pas l'injection de dépendances"
                ],
                correct: 0,
                explanation: "Symfony : autowiring automatique pour services dans src/. Configuration dans services.yaml. Injection via constructeur (type-hint suffit). #[Autowire] pour cas spéciaux."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Qu'est-ce qu'une architecture hexagonale (Clean Architecture) ?",
                options: [
                    "Une architecture avec 6 couches obligatoires",
                    "Isoler le domaine métier des détails techniques via ports (interfaces) et adapters (implémentations)",
                    "Une architecture pour applications 3D",
                    "Un pattern de base de données"
                ],
                correct: 1,
                explanation: "Hexagonale (Ports & Adapters) : domaine métier au centre, indépendant des frameworks/BDD/UI. Ports = interfaces, Adapters = implémentations. Testabilité et évolutivité."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Quelle annotation Symfony valide qu'un champ n'est pas vide ?",
                options: [
                    "@Assert\\Required",
                    "@Assert\\NotBlank",
                    "@Assert\\NotEmpty",
                    "@Assert\\Mandatory"
                ],
                correct: 1,
                explanation: "NotBlank : pas vide (pas '', null, whitespace). NotNull : pas null ('' valide). Length : longueur. Email : format email. Validation Bean Validation (JSR 303)."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Comment gérer les transactions en Doctrine ORM ?",
                options: [
                    "Les transactions sont automatiques",
                    "Utiliser EntityManager::beginTransaction(), commit(), rollback()",
                    "Utiliser des triggers SQL uniquement",
                    "On ne peut pas gérer les transactions avec Doctrine"
                ],
                correct: 1,
                explanation: "EntityManager->beginTransaction(), ->commit(), ->rollback(). ->transactional(function() {}) pour gestion automatique. Garantit atomicité (ACID)."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Qu'est-ce qu'un Service dans l'architecture logicielle ?",
                options: [
                    "Une classe contenant la logique métier réutilisable",
                    "Une base de données",
                    "Un fichier HTML",
                    "Un type de serveur"
                ],
                correct: 0,
                explanation: "Service : classe avec logique métier, opérations complexes, coordination entre repositories. Stateless, injectable. Ex : OrderService, EmailService, PaymentService."
            },
            {
                competence: "C7",
                category: "Backend/POO",
                question: "Comment documenter une classe PHP pour générer la documentation ?",
                options: [
                    "Utiliser des commentaires // uniquement",
                    "Utiliser PHPDoc avec /** */ et tags @param, @return, @throws",
                    "Écrire un fichier README séparé",
                    "La documentation est automatique"
                ],
                correct: 1,
                explanation: "PHPDoc : /** */ avec tags (@param, @return, @throws, @var, @see). Généré avec phpDocumentor, ApiGen. IDE utilise pour autocomplétion et hints."
            },

            // ========== C8 - DÉPLOIEMENT (6 questions) ==========
            {
                competence: "C8",
                category: "Déploiement/DevOps",
                question: "Qu'est-ce que Docker ?",
                options: [
                    "Un système d'exploitation",
                    "Une plateforme de containerisation empaquetant app + dépendances",
                    "Un serveur web",
                    "Un langage de programmation"
                ],
                correct: 1,
                explanation: "Docker : containers isolés et portables. Image = template, Container = instance. Dockerfile = recette. Avantages : portabilité, isolation, reproductibilité."
            },
            {
                competence: "C8",
                category: "Déploiement/DevOps",
                question: "Quelle différence entre CI et CD (Deployment) ?",
                options: [
                    "CI compile, CD teste",
                    "CI : build + tests automatiques. CD : déploiement automatique en production",
                    "CI pour frontend, CD pour backend",
                    "Aucune différence"
                ],
                correct: 1,
                explanation: "CI (Continuous Integration) : build + tests à chaque commit. CD (Continuous Deployment) : déploiement auto en PROD. Continuous Delivery : staging auto, prod manuel."
            },
            {
                competence: "C8",
                category: "Déploiement/DevOps",
                question: "Quel fichier orchestre plusieurs containers Docker ?",
                options: [
                    "Dockerfile",
                    "docker-compose.yml",
                    ".dockerignore",
                    "compose.json"
                ],
                correct: 1,
                explanation: "docker-compose.yml : définit services (app, db, redis), networks, volumes. docker-compose up/down. Dockerfile construit une image. .dockerignore exclut fichiers du contexte."
            },
            {
                competence: "C8",
                category: "Déploiement/DevOps",
                question: "Comment préparer Symfony pour la production ?",
                options: [
                    "composer install --no-dev --optimize-autoloader && php bin/console cache:clear --env=prod",
                    "Copier les fichiers directement sur le serveur",
                    "Utiliser composer install seulement",
                    "Aucune préparation nécessaire"
                ],
                correct: 0,
                explanation: "--no-dev exclut dépendances dev, --optimize-autoloader optimise chargement. cache:clear --env=prod crée cache prod. APP_ENV=prod, APP_DEBUG=0."
            },
            {
                competence: "C8",
                category: "Déploiement/DevOps",
                question: "Quel outil automatise les migrations de base de données dans Symfony ?",
                options: [
                    "Symfony Migrator",
                    "Doctrine Migrations",
                    "DB Auto-Update",
                    "Schema Sync"
                ],
                correct: 1,
                explanation: "Doctrine Migrations : make:migration génère fichiers SQL versionnés, migrate exécute, rollback annule. Synchronisation BDD entre environnements, historique des changements."
            },
            {
                competence: "C8",
                category: "Déploiement/DevOps",
                question: "Qu'est-ce qu'un fichier .env dans Symfony ?",
                options: [
                    "Un fichier de configuration des routes",
                    "Un fichier contenant les variables d'environnement (APP_ENV, DATABASE_URL, secrets)",
                    "Un fichier de templates",
                    "Un fichier de logs"
                ],
                correct: 1,
                explanation: ".env : variables d'environnement (APP_ENV, DATABASE_URL, MAILER_DSN). .env.local : surcharge locale (git ignored). .env.prod : production. Ne JAMAIS commiter secrets."
            }
        ];
