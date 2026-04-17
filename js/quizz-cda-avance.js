// Questions du Quiz Avancé - 30 questions pratiques
        const quizData = [
            // SECTION: C1 - Environnement de développement (3 questions)
            {
                category: "C1 - Environnement",
                difficulty: "medium",
                question: "Pour installer un projet Symfony 7, quelle commande utilisez-vous avec Composer ?",
                options: [
                    "composer install symfony/symfony",
                    "composer create-project symfony/skeleton my-project",
                    "composer require symfony/framework-bundle",
                    "symfony new my-project --webapp"
                ],
                correct: 1,
                explanation: "La commande 'composer create-project symfony/skeleton' crée un projet minimal. Pour une application web complète, utilisez 'symfony/website-skeleton'. La CLI Symfony 'symfony new' est également valide mais nécessite l'installation de la CLI."
            },
            {
                category: "C1 - Environnement",
                difficulty: "medium",
                question: "Dans Angular 20, comment créer un nouveau composant standalone ?",
                options: [
                    "ng generate component my-component",
                    "ng g c my-component --standalone",
                    "ng new component my-component",
                    "ng create my-component --type=standalone"
                ],
                correct: 1,
                explanation: "Depuis Angular 14+, utilisez '--standalone' pour créer des composants autonomes sans NgModule. En Angular 17+, c'est le comportement par défaut."
            },
            {
                category: "C1 - Environnement",
                difficulty: "medium",
                question: "Quel fichier configure les dépendances PHP dans un projet Symfony ?",
                options: [
                    "package.json",
                    "composer.json",
                    "symfony.lock",
                    "dependencies.yaml"
                ],
                correct: 1,
                explanation: "composer.json définit les dépendances PHP, leurs versions et les autoload. composer.lock fixe les versions exactes installées. symfony.lock est géré par Symfony Flex pour les recettes."
            },

            // SECTION: C2 - Interfaces utilisateur (4 questions)
            {
                category: "C2 - Interfaces UI",
                difficulty: "medium",
                question: "En Angular 20, quelle syntaxe remplace *ngIf dans les templates ?",
                options: [
                    "@if (condition) { }",
                    "{{ if condition }}",
                    "[ngIf]=\"condition\"",
                    "ng-if=\"condition\""
                ],
                correct: 0,
                explanation: "Angular 17+ introduit le nouveau Control Flow avec @if, @for, @switch qui remplacent *ngIf, *ngFor, *ngSwitch. Syntaxe plus claire et performances améliorées."
            },
            {
                category: "C2 - Interfaces UI",
                difficulty: "medium",
                question: "Comment implémenter le lazy loading d'un module de routes en Angular ?",
                options: [
                    "{ path: 'admin', component: AdminComponent }",
                    "{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }",
                    "{ path: 'admin', lazy: true, component: AdminComponent }",
                    "{ path: 'admin', preload: AdminModule }"
                ],
                correct: 1,
                explanation: "Le lazy loading utilise loadChildren avec import() dynamique pour charger le module uniquement quand la route est activée, réduisant le bundle initial."
            },
            {
                category: "C2 - Interfaces UI",
                difficulty: "easy",
                question: "Quelle meta tag est essentielle pour le responsive design ?",
                options: [
                    "<meta charset='UTF-8'>",
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
                    "<meta name='robots' content='index, follow'>",
                    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"
                ],
                correct: 1,
                explanation: "La balise viewport contrôle l'affichage sur mobile : width=device-width adapte la largeur, initial-scale=1.0 définit le zoom initial. Sans elle, le site s'affiche en mode desktop sur mobile."
            },
            {
                category: "C2 - Interfaces UI",
                difficulty: "medium",
                question: "Dans Symfony, comment rendre une vue Twig depuis un contrôleur avec PHP 8.4 ?",
                options: [
                    "return $this->render('template.html.twig', ['data' => $data]);",
                    "return new Response($this->twig->render('template.html.twig'));",
                    "return view('template.html.twig', ['data' => $data]);",
                    "return $this->renderView('template', $data);"
                ],
                correct: 0,
                explanation: "La méthode render() du AbstractController retourne une Response avec le template Twig compilé. Elle accepte le nom du template et un tableau de variables."
            },

            // SECTION: C3 - Composants métier (3 questions)
            {
                category: "C3 - Composants métier",
                difficulty: "medium",
                question: "En PHP 8.4, comment déclarer une propriété readonly dans une classe ?",
                options: [
                    "private $name { get; }",
                    "public readonly string $name;",
                    "const string $name;",
                    "public string $name { readonly; }"
                ],
                correct: 1,
                explanation: "Les propriétés readonly (PHP 8.1+) sont initialisées une seule fois (constructeur) et ne peuvent plus être modifiées. PHP 8.4 améliore avec les property hooks."
            },
            {
                category: "C3 - Composants métier",
                difficulty: "medium",
                question: "Quel principe SOLID est violé si une classe UserService gère à la fois l'authentification ET l'envoi d'emails ?",
                options: [
                    "Open/Closed Principle",
                    "Single Responsibility Principle",
                    "Liskov Substitution Principle",
                    "Dependency Inversion Principle"
                ],
                correct: 1,
                explanation: "Single Responsibility : une classe doit avoir une seule raison de changer. UserService devrait uniquement gérer l'authentification, l'envoi d'emails devrait être dans EmailService."
            },
            {
                category: "C3 - Composants métier",
                difficulty: "medium",
                question: "Dans Angular 20, comment créer un service injecté au niveau root ?",
                options: [
                    "@Injectable({ scope: 'root' })",
                    "@Injectable({ providedIn: 'root' })",
                    "@Injectable({ global: true })",
                    "@Service({ singleton: true })"
                ],
                correct: 1,
                explanation: "providedIn: 'root' rend le service singleton disponible dans toute l'application. Tree-shakeable : supprimé automatiquement s'il n'est pas utilisé."
            },

            // SECTION: C4 - Gestion de projet (3 questions)
            {
                category: "C4 - Gestion projet",
                difficulty: "easy",
                question: "Comment créer une nouvelle branche Git et basculer dessus ?",
                options: [
                    "git branch feature/login && git switch feature/login",
                    "git checkout -b feature/login",
                    "git new branch feature/login",
                    "git create feature/login"
                ],
                correct: 1,
                explanation: "git checkout -b crée ET bascule sur la nouvelle branche en une commande. Alternative moderne : git switch -c feature/login."
            },
            {
                category: "C4 - Gestion projet",
                difficulty: "medium",
                question: "Dans Scrum, quelle cérémonie dure 15 minutes maximum ?",
                options: [
                    "Sprint Planning",
                    "Daily Scrum (Stand-up)",
                    "Sprint Review",
                    "Sprint Retrospective"
                ],
                correct: 1,
                explanation: "Le Daily Scrum (stand-up) dure 15 minutes max. L'équipe synchronise : Hier ? Aujourd'hui ? Obstacles ? Sprint Planning = 4h (sprint 2 semaines), Review = 2h, Retrospective = 1h30."
            },
            {
                category: "C4 - Gestion projet",
                difficulty: "easy",
                question: "Quel format de commit message est recommandé pour les projets professionnels ?",
                options: [
                    "\"Fixed bug\"",
                    "\"feat(auth): add login form validation\"",
                    "\"Update UserController.php\"",
                    "\"Work in progress\""
                ],
                correct: 1,
                explanation: "Conventional Commits : type(scope): description. Types : feat, fix, docs, refactor, test, chore. Facilite le changelog automatique et la compréhension de l'historique."
            },

            // SECTION: C5 - Analyse & Maquettage (2 questions)
            {
                category: "C5 - Analyse",
                difficulty: "medium",
                question: "Quel format d'User Story est correct ?",
                options: [
                    "En tant qu'utilisateur, je veux me connecter pour accéder à mon compte",
                    "Créer un formulaire de login avec email et password",
                    "L'utilisateur doit pouvoir se connecter",
                    "Implémenter l'authentification JWT"
                ],
                correct: 0,
                explanation: "Format User Story : En tant que [rôle], je veux [fonctionnalité], afin de [bénéfice]. Focus sur la valeur métier, pas l'implémentation technique."
            },
            {
                category: "C5 - Analyse",
                difficulty: "easy",
                question: "Quel diagramme UML représente les interactions entre acteurs et système ?",
                options: [
                    "Diagramme de classes",
                    "Diagramme de séquence",
                    "Diagramme de cas d'utilisation",
                    "Diagramme d'activité"
                ],
                correct: 2,
                explanation: "Le diagramme de cas d'utilisation montre les fonctionnalités (use cases) et les acteurs qui les utilisent. Premier diagramme créé en analyse fonctionnelle."
            },

            // SECTION: C6 - Architecture logicielle (3 questions)
            {
                category: "C6 - Architecture",
                difficulty: "medium",
                question: "Dans Symfony, où doit se trouver la logique métier selon MVC ?",
                options: [
                    "Dans le Controller",
                    "Dans le Service (Model)",
                    "Dans le Template Twig",
                    "Dans le Repository"
                ],
                correct: 1,
                explanation: "La logique métier doit être dans les Services (couche Model). Le Controller orchestre, le Repository accède aux données, la View affiche. Respect de la séparation des responsabilités."
            },
            {
                category: "C6 - Architecture",
                difficulty: "medium",
                question: "Quel pattern architectural sépare l'application en couches Domain, Infrastructure, Application ?",
                options: [
                    "MVC (Model-View-Controller)",
                    "Architecture Hexagonale (Ports & Adapters)",
                    "MVVM (Model-View-ViewModel)",
                    "Layered Architecture"
                ],
                correct: 1,
                explanation: "L'Architecture Hexagonale (Clean Architecture) sépare le domaine métier des détails techniques (BDD, framework, UI). Le domaine est au centre, entouré de ports et adapters."
            },
            {
                category: "C6 - Architecture",
                difficulty: "medium",
                question: "Quel est l'avantage principal de l'injection de dépendances ?",
                options: [
                    "Améliore les performances de l'application",
                    "Facilite les tests unitaires et réduit le couplage",
                    "Réduit la taille du code",
                    "Accélère le temps de développement"
                ],
                correct: 1,
                explanation: "L'injection de dépendances permet d'injecter des mocks/stubs pour les tests, respecte SOLID (Dependency Inversion), réduit le couplage entre classes. Essentiel pour code testable et maintenable."
            },

            // SECTION: C7 - Bases de données (3 questions)
            {
                category: "C7 - Bases de données",
                difficulty: "medium",
                question: "Quelle différence entre MLD et MPD ?",
                options: [
                    "MLD est conceptuel, MPD est logique",
                    "MLD définit les tables et PK/FK, MPD ajoute types SQL et contraintes",
                    "MLD utilise SQL, MPD utilise NoSQL",
                    "Il n'y a pas de différence"
                ],
                correct: 1,
                explanation: "MLD (Modèle Logique) : structure logique (tables, PK/FK), indépendant du SGBD. MPD (Modèle Physique) : implémentation concrète (VARCHAR(255), INT, INDEX, CHECK, DEFAULT)."
            },
            {
                category: "C7 - Bases de données",
                difficulty: "easy",
                question: "Comment définir une clé étrangère en SQL ?",
                options: [
                    "FOREIGN KEY (user_id) REFERENCES users(id)",
                    "FOREIGN user_id TO users.id",
                    "REFERENCE KEY user_id FROM users",
                    "user_id LINKS TO users(id)"
                ],
                correct: 0,
                explanation: "FOREIGN KEY (colonne) REFERENCES table_cible(colonne_cible) crée une contrainte d'intégrité référentielle. Ajouter ON DELETE CASCADE/RESTRICT selon besoin."
            },
            {
                category: "C7 - Bases de données",
                difficulty: "medium",
                question: "Quel type de base NoSQL convient pour stocker des sessions utilisateur avec expiration ?",
                options: [
                    "Document (MongoDB)",
                    "Clé-Valeur (Redis)",
                    "Colonne (Cassandra)",
                    "Graphe (Neo4j)"
                ],
                correct: 1,
                explanation: "Redis (clé-valeur) est idéal pour cache et sessions : ultra-rapide (en mémoire), TTL (Time To Live) natif, structure simple. MongoDB conviendrait mais Redis est optimisé pour ce cas."
            },

            // SECTION: C8 - Accès aux données (3 questions)
            {
                category: "C8 - Accès données",
                difficulty: "medium",
                question: "Dans Symfony avec Doctrine, comment exécuter une requête personnalisée ?",
                options: [
                    "Utiliser Query Builder dans le Repository",
                    "Écrire du SQL brut directement dans le Controller",
                    "Utiliser uniquement find(), findAll(), findBy()",
                    "Créer un fichier SQL et l'importer"
                ],
                correct: 0,
                explanation: "Query Builder dans le Repository permet des requêtes personnalisées type-safe, maintenues avec le code. Évite SQL brut (risque injection, non typé). DQL (Doctrine Query Language) aussi possible."
            },
            {
                category: "C8 - Accès données",
                difficulty: "medium",
                question: "En Angular, quel service HTTP retourne un Observable ?",
                options: [
                    "fetch()",
                    "HttpClient",
                    "XMLHttpRequest",
                    "axios"
                ],
                correct: 1,
                explanation: "HttpClient d'Angular retourne des Observables RxJS, permettant opérateurs (map, filter, catchError), annulation, retry. fetch() retourne Promise, axios n'est pas natif Angular."
            },
            {
                category: "C8 - Accès données",
                difficulty: "medium",
                question: "Comment prévenir les injections SQL avec Doctrine ORM ?",
                options: [
                    "Utiliser addslashes() sur les paramètres",
                    "Valider les entrées avec des regex",
                    "Utiliser setParameter() avec Query Builder ou requêtes préparées",
                    "Échapper manuellement les guillemets"
                ],
                correct: 2,
                explanation: "setParameter() ou requêtes préparées séparent code SQL des données, rendant injection impossible. Doctrine gère l'échappement automatiquement. JAMAIS concaténer directement."
            },

            // SECTION: C9 - Tests (3 questions)
            {
                category: "C9 - Tests",
                difficulty: "medium",
                question: "Quelle est la répartition idéale dans la pyramide des tests ?",
                options: [
                    "30% unitaires, 40% intégration, 30% E2E",
                    "70-80% unitaires, 15-20% intégration, 5-10% E2E",
                    "50% unitaires, 25% intégration, 25% E2E",
                    "90% E2E, 10% unitaires"
                ],
                correct: 1,
                explanation: "Pyramide optimale : base large (70-80% tests unitaires rapides), milieu (15-20% intégration), sommet (5-10% E2E lents). Équilibre vitesse/coût/couverture."
            },
            {
                category: "C9 - Tests",
                difficulty: "medium",
                question: "Dans le cycle TDD Red-Green-Refactor, que signifie 'Green' ?",
                options: [
                    "Écrire un test qui passe immédiatement",
                    "Écrire le code MINIMAL pour faire passer le test",
                    "Optimiser et refactorer le code",
                    "Valider que tous les tests passent"
                ],
                correct: 1,
                explanation: "Green = écrire le code MINIMAL (même 'stupide') pour passer le test. Red = test qui échoue. Refactor = améliorer sans casser tests. Focus sur la progression incrémentale."
            },
            {
                category: "C9 - Tests",
                difficulty: "easy",
                question: "Quel outil permet les tests E2E dans Angular ?",
                options: [
                    "Jasmine",
                    "Karma",
                    "Cypress ou Playwright",
                    "Jest"
                ],
                correct: 2,
                explanation: "Cypress et Playwright sont dédiés aux tests E2E (interface complète, navigation). Jasmine/Jest = tests unitaires, Karma = test runner (déprécié Angular 12+)."
            },

            // SECTION: C10 - Déploiement (3 questions)
            {
                category: "C10 - Déploiement",
                difficulty: "medium",
                question: "Quel fichier définit les services dans Docker Compose ?",
                options: [
                    "Dockerfile",
                    "docker-compose.yml",
                    ".dockerignore",
                    "compose.json"
                ],
                correct: 1,
                explanation: "docker-compose.yml définit les services (app, db, redis), networks, volumes. Dockerfile construit une image. docker-compose up démarre tous les services."
            },
            {
                category: "C10 - Déploiement",
                difficulty: "medium",
                question: "Quelle commande Symfony prépare l'application pour la production ?",
                options: [
                    "composer install --no-dev --optimize-autoloader",
                    "php bin/console cache:clear --env=prod",
                    "php bin/console assets:install --env=prod",
                    "symfony deploy"
                ],
                correct: 0,
                explanation: "composer install --no-dev (exclut dev dependencies) --optimize-autoloader (optimise chargement classes) est essentiel pour production. Suivi de cache:clear --env=prod."
            },
            {
                category: "C10 - Déploiement",
                difficulty: "easy",
                question: "Quelle variable d'environnement Symfony contrôle le mode de l'application ?",
                options: [
                    "SYMFONY_MODE",
                    "APP_ENV",
                    "ENVIRONMENT",
                    "SYMFONY_ENV"
                ],
                correct: 1,
                explanation: "APP_ENV=prod (production), dev (développement), test. Contrôle cache, debug, optimisations. APP_DEBUG=0 en production désactive le mode debug."
            },

            // SECTION: C11 - DevOps (3 questions)
            {
                category: "C11 - DevOps",
                difficulty: "medium",
                question: "Quelle est la différence entre CI et CD (Deployment) ?",
                options: [
                    "CI compile le code, CD le teste",
                    "CI valide le code automatiquement, CD déploie automatiquement en production",
                    "CI est pour frontend, CD pour backend",
                    "Il n'y a pas de différence"
                ],
                correct: 1,
                explanation: "CI (Continuous Integration) : build + tests automatiques à chaque commit. CD (Continuous Deployment) : déploiement automatique en PRODUCTION. Continuous Delivery = staging auto, prod manuel."
            },
            {
                category: "C11 - DevOps",
                difficulty: "medium",
                question: "Dans GitHub Actions, comment définir un workflow qui s'exécute à chaque push ?",
                options: [
                    "on: [push]",
                    "trigger: push",
                    "when: push",
                    "event: push"
                ],
                correct: 0,
                explanation: "on: [push] ou on: push déclenche le workflow. On peut filtrer : on: push: branches: [main]. GitHub Actions utilise fichiers .github/workflows/*.yml."
            },
            {
                category: "C11 - DevOps",
                difficulty: "easy",
                question: "Quel outil permet d'automatiser les migrations de base de données dans Symfony ?",
                options: [
                    "Doctrine Migrations",
                    "Symfony Migrator",
                    "DB Auto-Update",
                    "Schema Sync"
                ],
                correct: 0,
                explanation: "Doctrine Migrations génère (make:migration) et exécute (migrate) des migrations versionnées SQL. Permet rollback, synchronisation BDD entre environnements."
            }
        ];