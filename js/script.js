// Variables globales
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let startTime = null;
        let timerInterval = null;
        let shuffledQuestions = [];

        // Fonction pour mélanger un tableau
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Fonction pour mélanger les options d'une question
        function shuffleOptions(question) {
            const indices = question.options.map((_, i) => i);
            const shuffledIndices = shuffleArray(indices);

            return {
                ...question,
                options: shuffledIndices.map(i => question.options[i]),
                correct: shuffledIndices.indexOf(question.correct)
            };
        }

        // Démarrer le quiz
        function startQuiz() {
            // Mélanger questions et options
            shuffledQuestions = shuffleArray(quizData).map(q => shuffleOptions(q));
            userAnswers = new Array(shuffledQuestions.length).fill(null);

            document.getElementById('startScreen').classList.add('hidden');
            document.getElementById('quizCard').classList.remove('hidden');
            document.getElementById('quizCard').classList.add('fade-in');

            startTime = Date.now();
            startTimer();
            showQuestion(0);
        }

        // Afficher une question
        function showQuestion(index) {
            currentQuestionIndex = index;
            const question = shuffledQuestions[index];

            document.getElementById('currentQuestion').textContent = index + 1;
            document.getElementById('questionNumber').textContent = `Question ${index + 1}/${shuffledQuestions.length}`;
            document.getElementById('competence').textContent = question.competence;
            document.getElementById('category').textContent = question.category;
            document.getElementById('questionText').textContent = question.question;

            // Progress bar
            const progress = ((index + 1) / shuffledQuestions.length) * 100;
            document.getElementById('progressBar').style.width = progress + '%';

            // Options
            const optionsList = document.getElementById('optionsList');
            optionsList.innerHTML = '';

            question.options.forEach((option, i) => {
                const li = document.createElement('li');
                const btn = document.createElement('button');
                btn.className = 'w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 relative pl-12';
                btn.textContent = option;

                // Circle indicator
                const circle = document.createElement('div');
                circle.className = 'absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-gray-300 rounded-full';
                btn.prepend(circle);

                if (userAnswers[index] === i) {
                    btn.classList.add('border-blue-500', 'bg-blue-500', 'text-white');
                    circle.classList.add('bg-white', 'border-white');
                }

                btn.onclick = () => selectOption(i);
                li.appendChild(btn);
                optionsList.appendChild(li);
            });

            document.getElementById('explanation').classList.add('hidden');
            updateNavButtons();
        }

        // Sélectionner une option
        function selectOption(optionIndex) {
            userAnswers[currentQuestionIndex] = optionIndex;
            const question = shuffledQuestions[currentQuestionIndex];

            // Mettre à jour l'affichage
            const buttons = document.querySelectorAll('#optionsList button');
            buttons.forEach((btn, i) => {
                btn.classList.remove('border-blue-500', 'bg-blue-500', 'text-white', 'border-green-500', 'bg-green-500', 'border-red-500', 'bg-red-500');
                const circle = btn.querySelector('div');
                circle.classList.remove('bg-white', 'border-white');

                if (i === question.correct) {
                    btn.classList.add('border-green-500', 'bg-green-500', 'text-white');
                    circle.classList.add('bg-white', 'border-white');
                } else if (i === optionIndex) {
                    btn.classList.add('border-red-500', 'bg-red-500', 'text-white');
                    circle.classList.add('bg-white', 'border-white');
                }
            });

            // Afficher l'explication
            const explanationDiv = document.getElementById('explanation');
            document.getElementById('explanationText').textContent = question.explanation;
            explanationDiv.classList.remove('hidden');
            explanationDiv.classList.add('slide-down');

            updateScore();
        }

        // Mettre à jour le score
        function updateScore() {
            let correct = 0;
            userAnswers.forEach((answer, i) => {
                if (answer !== null && answer === shuffledQuestions[i].correct) {
                    correct++;
                }
            });
            const percentage = Math.round((correct / shuffledQuestions.length) * 100);
            document.getElementById('score').textContent = percentage + '%';
        }

        // Navigation
        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                showQuestion(currentQuestionIndex - 1);
            }
        }

        function nextQuestion() {
            if (currentQuestionIndex < shuffledQuestions.length - 1) {
                showQuestion(currentQuestionIndex + 1);
            }
        }

        function updateNavButtons() {
            document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
            const isLast = currentQuestionIndex === shuffledQuestions.length - 1;
            document.getElementById('nextBtn').classList.toggle('hidden', isLast);
            document.getElementById('submitBtn').classList.toggle('hidden', !isLast);
        }

        // Timer
        function startTimer() {
            timerInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                document.getElementById('timer').textContent =
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        }

        // Soumettre le quiz
        function submitQuiz() {
            if (timerInterval) clearInterval(timerInterval);

            let correct = 0;
            const competenceScores = {};

            userAnswers.forEach((answer, i) => {
                const question = shuffledQuestions[i];
                const comp = question.competence;

                if (!competenceScores[comp]) {
                    competenceScores[comp] = { correct: 0, total: 0 };
                }
                competenceScores[comp].total++;

                if (answer !== null && answer === question.correct) {
                    correct++;
                    competenceScores[comp].correct++;
                }
            });

            const finalScore = Math.round((correct / shuffledQuestions.length) * 100);
            showResults(finalScore, competenceScores);
        }

        // Afficher les résultats
        function showResults(finalScore, competenceScores) {
            const resultsCard = document.getElementById('resultsCard');
            const scoreCircle = document.getElementById('scoreCircle');
            const scoreText = document.getElementById('scoreText');

            document.getElementById('finalScore').textContent = finalScore + '%';

            scoreCircle.className = 'w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-2xl';

            if (finalScore >= 80) {
                scoreCircle.classList.add('bg-gradient-to-br', 'from-green-400', 'to-emerald-600');
                scoreText.textContent = '🎉 Excellent ! Vous maîtrisez parfaitement les compétences D2WM !';
            } else if (finalScore >= 60) {
                scoreCircle.classList.add('bg-gradient-to-br', 'from-yellow-400', 'to-orange-500');
                scoreText.textContent = '👍 Bon travail ! Quelques révisions et vous serez au top !';
            } else {
                scoreCircle.classList.add('bg-gradient-to-br', 'from-red-400', 'to-pink-600');
                scoreText.textContent = '📚 Continuez vos efforts ! Consultez les flashcards pour progresser.';
            }

            // Breakdown par compétence
            const breakdown = document.getElementById('categoryBreakdown');
            breakdown.innerHTML = '';

            Object.keys(competenceScores).sort().forEach(comp => {
                const score = competenceScores[comp];
                const percentage = Math.round((score.correct / score.total) * 100);

                const div = document.createElement('div');
                div.className = 'bg-gray-50 rounded-2xl p-4 text-center';
                div.innerHTML = `
                    <div class="font-bold text-gray-800 mb-2">${comp}</div>
                    <div class="text-3xl font-bold text-blue-600">${percentage}%</div>
                    <div class="text-sm text-gray-600">${score.correct}/${score.total}</div>
                `;
                breakdown.appendChild(div);
            });

            document.getElementById('quizCard').classList.add('hidden');
            resultsCard.classList.remove('hidden');
            resultsCard.classList.add('fade-in');
        }

        // Recommencer
        function restartQuiz() {
            currentQuestionIndex = 0;
            userAnswers = [];
            if (timerInterval) clearInterval(timerInterval);

            document.getElementById('resultsCard').classList.add('hidden');
            document.getElementById('startScreen').classList.remove('hidden');
            document.getElementById('currentQuestion').textContent = '0';
            document.getElementById('score').textContent = '0%';
            document.getElementById('timer').textContent = '00:00';
        }

        // Raccourcis clavier
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('quizCard').classList.contains('hidden')) return;

            if (e.key >= '1' && e.key <= '4') {
                const index = parseInt(e.key) - 1;
                if (index < shuffledQuestions[currentQuestionIndex].options.length) {
                    selectOption(index);
                }
            } else if (e.key === 'ArrowLeft') {
                previousQuestion();
            } else if (e.key === 'ArrowRight') {
                nextQuestion();
            } else if (e.key === 'Enter' && currentQuestionIndex === shuffledQuestions.length - 1) {
                submitQuiz();
            }
        });

function updateLevel(score) {
    const badge = document.getElementById("levelBadge");

    if (score >= 80) badge.textContent = "👑 Boss CDA";
    else if (score >= 60) badge.textContent = "🥇 Confirmé";
    else if (score >= 40) badge.textContent = "🥈 Intermédiaire";
    else badge.textContent = "🥉 Débutant";
}

function getMotivation(score) {
    if (score >= 80) return "🔥 Excellent ! Tu es prêt pour le CDA !";
    if (score >= 60) return "💪 Très bon ! Encore un petit effort.";
    if (score >= 40) return "📈 Continue, tu progresses bien.";
    return "🚀 Ne lâche rien, la progression est en cours !";
}

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}