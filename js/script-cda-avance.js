// Variables globales
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let startTime = null;
        let timerInterval = null;

        // Mélanger les questions au chargement
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Mélanger les options de chaque question
        function shuffleOptions(question) {
            const indices = question.options.map((_, i) => i);
            const shuffledIndices = shuffleArray(indices);

            return {
                ...question,
                options: shuffledIndices.map(i => question.options[i]),
                correct: shuffledIndices.indexOf(question.correct)
            };
        }

        // Initialiser le quiz
        function startQuiz() {
            // Mélanger les questions
            const shuffledQuestions = shuffleArray(quizData);

            // Mélanger les options de chaque question
            window.quizQuestions = shuffledQuestions.map(q => shuffleOptions(q));

            // Initialiser les réponses
            userAnswers = new Array(window.quizQuestions.length).fill(null);

            // Masquer l'écran de démarrage
            document.getElementById('startScreen').style.display = 'none';
            document.getElementById('quizCard').classList.add('active');

            // Démarrer le timer
            startTime = Date.now();
            startGlobalTimer();

            // Afficher la première question
            showQuestion(0);
        }

        // Afficher une question
        function showQuestion(index) {
            if (index < 0 || index >= window.quizQuestions.length) return;

            currentQuestionIndex = index;
            const question = window.quizQuestions[index];

            // Mettre à jour les statistiques
            document.getElementById('currentQuestion').textContent = index + 1;
            document.getElementById('questionNumber').textContent = `Question ${index + 1}`;
            document.getElementById('questionCategory').textContent = question.category;
            document.getElementById('difficulty').textContent = question.difficulty === 'hard' ? 'Difficile' : question.difficulty === 'medium' ? 'Avancé' : 'Facile';
            document.getElementById('questionText').textContent = question.question;

            // Mettre à jour la barre de progression
            const progress = ((index + 1) / window.quizQuestions.length) * 100;
            document.getElementById('progressBar').style.width = progress + '%';

            // Générer les options
            const optionsList = document.getElementById('optionsList');
            optionsList.innerHTML = '';

            question.options.forEach((option, optionIndex) => {
                const li = document.createElement('li');
                li.className = 'option-item';

                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = option;

                // Vérifier si l'utilisateur a déjà répondu
                if (userAnswers[index] === optionIndex) {
                    button.classList.add('selected');
                }

                button.addEventListener('click', () => selectOption(optionIndex));
                li.appendChild(button);
                optionsList.appendChild(li);
            });

            // Masquer l'explication
            document.getElementById('explanation').classList.remove('show');

            // Mettre à jour les boutons de navigation
            updateNavigationButtons();
        }

        // Sélectionner une option
        function selectOption(optionIndex) {
            // Désélectionner toutes les options
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected', 'correct', 'incorrect');
            });

            // Sélectionner l'option choisie
            const selectedButton = document.querySelectorAll('.option-btn')[optionIndex];
            selectedButton.classList.add('selected');

            // Sauvegarder la réponse
            userAnswers[currentQuestionIndex] = optionIndex;

            // Afficher l'explication
            showExplanation();

            // Mettre à jour le score
            updateScore();
        }

        // Afficher l'explication
        function showExplanation() {
            const question = window.quizQuestions[currentQuestionIndex];
            const explanationDiv = document.getElementById('explanation');
            const explanationText = document.getElementById('explanationText');

            explanationText.textContent = question.explanation;
            explanationDiv.classList.add('show');

            // Marquer les bonnes et mauvaises réponses
            const options = document.querySelectorAll('.option-btn');
            options.forEach((option, index) => {
                if (index === question.correct) {
                    option.classList.add('correct');
                } else if (index === userAnswers[currentQuestionIndex] && index !== question.correct) {
                    option.classList.add('incorrect');
                }
            });
        }

        // Mettre à jour le score
        function updateScore() {
            let correctAnswers = 0;
            userAnswers.forEach((answer, index) => {
                if (answer !== null && answer === window.quizQuestions[index].correct) {
                    correctAnswers++;
                }
            });

            const score = Math.round((correctAnswers / window.quizQuestions.length) * 100);
            document.getElementById('score').textContent = score;
        }

        // Navigation
        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                showQuestion(currentQuestionIndex - 1);
            }
        }

        function nextQuestion() {
            if (currentQuestionIndex < window.quizQuestions.length - 1) {
                showQuestion(currentQuestionIndex + 1);
            }
        }

        function updateNavigationButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const submitBtn = document.getElementById('submitBtn');

            prevBtn.disabled = currentQuestionIndex === 0;
            nextBtn.style.display = currentQuestionIndex === window.quizQuestions.length - 1 ? 'none' : 'inline-block';
            submitBtn.style.display = currentQuestionIndex === window.quizQuestions.length - 1 ? 'inline-block' : 'none';
        }

        // Soumettre le quiz
        function submitQuiz() {
            // Arrêter le timer
            if (timerInterval) clearInterval(timerInterval);

            // Calculer le score final
            let correctAnswers = 0;
            const categoryScores = {};

            userAnswers.forEach((answer, index) => {
                const question = window.quizQuestions[index];
                const category = question.category;

                if (!categoryScores[category]) {
                    categoryScores[category] = { correct: 0, total: 0 };
                }

                categoryScores[category].total++;

                if (answer !== null && answer === question.correct) {
                    correctAnswers++;
                    categoryScores[category].correct++;
                }
            });

            const finalScore = Math.round((correctAnswers / window.quizQuestions.length) * 100);

            // Afficher les résultats
            showResults(finalScore, categoryScores);
        }

        // Afficher les résultats
        function showResults(finalScore, categoryScores) {
            const resultsCard = document.getElementById('resultsCard');
            const scoreCircle = document.getElementById('scoreCircle');
            const finalScoreSpan = document.getElementById('finalScore');
            const scoreText = document.getElementById('scoreText');
            const categoryBreakdown = document.getElementById('categoryBreakdown');

            // Définir le style du score
            scoreCircle.className = 'score-circle';
            if (finalScore >= 70) {
                scoreCircle.classList.add('score-excellent');
                scoreText.textContent = 'Excellent ! Vous maîtrisez bien les compétences CDA !';
            } else if (finalScore >= 50) {
                scoreCircle.classList.add('score-good');
                scoreText.textContent = 'Bon travail ! Continuez à réviser les points faibles.';
            } else {
                scoreCircle.classList.add('score-average');
                scoreText.textContent = 'Il faut encore travailler. Consultez les Flashcards et le Quiz Ultime !';
            }

            finalScoreSpan.textContent = finalScore + '%';

            // Générer le breakdown par catégorie
            categoryBreakdown.innerHTML = '';
            Object.keys(categoryScores).forEach(category => {
                const score = categoryScores[category];
                const percentage = Math.round((score.correct / score.total) * 100);

                const categoryItem = document.createElement('div');
                categoryItem.className = 'category-item';
                categoryItem.innerHTML = `
                    <div class="category-name">${category}</div>
                    <div class="category-score">${percentage}%</div>
                    <div style="font-size: 12px; color: #7f8c8d;">${score.correct}/${score.total}</div>
                `;
                categoryBreakdown.appendChild(categoryItem);
            });

            // Masquer le quiz et afficher les résultats
            document.getElementById('quizCard').classList.remove('active');
            resultsCard.classList.add('show');
        }

        // Recommencer le quiz
        function restartQuiz() {
            currentQuestionIndex = 0;
            userAnswers = [];
            startTime = null;

            if (timerInterval) clearInterval(timerInterval);

            document.getElementById('resultsCard').classList.remove('show');
            document.getElementById('quizCard').classList.remove('active');
            document.getElementById('startScreen').style.display = 'block';

            document.getElementById('currentQuestion').textContent = '0';
            document.getElementById('score').textContent = '0';
            document.getElementById('timer').textContent = '00:00';
        }

        // Timer global
        function startGlobalTimer() {
            timerInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        }

        // Gestion des raccourcis clavier
        document.addEventListener('keydown', function(e) {
            if (document.getElementById('quizCard').classList.contains('active')) {
                switch(e.key) {
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        const optionIndex = parseInt(e.key) - 1;
                        if (optionIndex < window.quizQuestions[currentQuestionIndex].options.length) {
                            selectOption(optionIndex);
                        }
                        break;
                    case 'ArrowLeft':
                        if (currentQuestionIndex > 0) {
                            previousQuestion();
                        }
                        break;
                    case 'ArrowRight':
                        if (currentQuestionIndex < window.quizQuestions.length - 1) {
                            nextQuestion();
                        }
                        break;
                    case 'Enter':
                        if (currentQuestionIndex === window.quizQuestions.length - 1) {
                            submitQuiz();
                        }
                        break;
                }
            }
        });