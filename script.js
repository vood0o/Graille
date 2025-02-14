let currentQuiz = null;
let questions = {};

function updateTimer() {
    const timer = document.getElementById('timer');
    let [minutes, seconds] = timer.textContent.split(':').map(Number);
    
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);

function getRandomQuestions(count, quizType) {
    const shuffled = questions[quizType].sort(() => 0.5 - Math.random());
    shuffled.forEach(question => {
        question.options.sort(() => 0.5 - Math.random());
    });
    return shuffled.slice(0, count);
}

function generateQuiz(questionSet) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = questionSet.map((q, qIndex) => {
        const multipleCorrect = q.options.filter(opt => opt.correct).length > 1;
        const inputType = multipleCorrect ? 'checkbox' : 'radio';
        
        return `
            <div class="question" data-total-correct="${q.options.filter(opt => opt.correct).length}">
                <p>${q.text}</p>
                ${q.options.map((opt, optIndex) => `
                    <label class="option">
                        <input type="${inputType}" name="q${qIndex}" value="${opt.correct}">
                        ${opt.text}
                    </label>
                `).join('')}
            </div>
        `;
    }).join('');

    questionSet.forEach((q, qIndex) => {
        const questionDiv = document.querySelectorAll('.question')[qIndex];
        const inputs = questionDiv.querySelectorAll('input');
        const multipleCorrect = q.options.filter(opt => opt.correct).length > 1;

        if (multipleCorrect) {
            // Pentru checkbox-uri, verifică la fiecare schimbare
            inputs.forEach(input => {
                input.addEventListener('change', function() {
                    const totalCorrect = parseInt(questionDiv.dataset.totalCorrect);
                    const checkedInputs = Array.from(inputs).filter(inp => inp.checked);
                    const correctChecked = checkedInputs.filter(inp => inp.value === 'true').length;
                    const incorrectChecked = checkedInputs.filter(inp => inp.value === 'false').length;

                    // Dacă numărul de selecții e egal cu numărul de răspunsuri corecte
                    if (checkedInputs.length === totalCorrect) {
                        inputs.forEach(inp => {
                            inp.disabled = true;
                            const label = inp.closest('label');
                            
                            if (inp.value === 'true') {
                                if (inp.checked) {
                                    label.classList.add('correct', 'selected');
                                } else {
                                    label.classList.add('correct');
                                }
                            } else if (inp.checked) {
                                label.classList.add('incorrect');
                            }
                        });
                    }
                });
            });
        } else {
            // Pentru radio buttons, comportamentul rămâne același
            inputs.forEach(input => {
                input.addEventListener('change', function() {
                    inputs.forEach(inp => {
                        inp.disabled = true;
                        const label = inp.closest('label');
                        
                        if (inp.value === 'true') {
                            if (inp === this) {
                                label.classList.add('correct', 'selected');
                            } else {
                                label.classList.add('correct');
                            }
                        }
                    });

                    const selectedLabel = this.closest('label');
                    if (this.value === 'false') {
                        selectedLabel.classList.add('incorrect');
                    }
                });
            });
        }
    });
}

function showQuiz(quizType) {
    currentQuiz = quizType;
    document.getElementById('card-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('back').style.display = 'block';
    initQuiz();
}

function showMenu() {
    document.getElementById('card-container').style.display = 'grid';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('timer').textContent = '00:00';
}

function initQuiz() {
    window.scrollTo(0, 0);
    const selectedQuestions = getRandomQuestions(15, currentQuiz);
    generateQuiz(selectedQuestions);
    
    document.getElementById('submit').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('results').textContent = '0/15';
}

function calculateScore() {
    let score = 0;
    const questions = document.querySelectorAll('.question');
    
    questions.forEach((questionEl) => {
        const inputs = questionEl.querySelectorAll('input');
        const isMultipleChoice = inputs[0].type === 'checkbox';
        
        if (isMultipleChoice) {
            const correctAnswers = Array.from(inputs).filter(input => input.value === 'true').length;
            const selectedCorrect = Array.from(inputs).filter(input => input.checked && input.value === 'true').length;
            const selectedIncorrect = Array.from(inputs).filter(input => input.checked && input.value === 'false').length;
            
            if (selectedCorrect === correctAnswers && selectedIncorrect === 0) {
                score++;
            }
        } else {
            const selectedInput = questionEl.querySelector('input:checked');
            if (selectedInput && selectedInput.value === 'true') {
                score++;
            }
        }
    });
    
    return score;
}

// Event Listeners
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const quizType = card.dataset.quiz;
        showQuiz(quizType);
    });
});

document.getElementById('submit').addEventListener('click', () => {
    const score = calculateScore();
    const resultsEl = document.getElementById('results');
    resultsEl.textContent = `${score}/15`;
    
    document.getElementById('submit').style.display = 'none';
    document.getElementById('restart').style.display = 'block';

    // Dezactivează toate input-urile rămase și arată răspunsurile corecte
    document.querySelectorAll('.question').forEach(questionEl => {
        const inputs = questionEl.querySelectorAll('input:not(:disabled)');
        if (inputs.length > 0) { // Doar pentru întrebările neverificate încă
            inputs.forEach(input => {
                input.disabled = true;
                if (input.value === 'true') {
                    input.closest('label').classList.add('correct');
                }
            });
        }
    });
});

document.getElementById('restart').addEventListener('click', initQuiz);
document.getElementById('back').addEventListener('click', showMenu);

// Initialize questions object when scripts are loaded
questions.eabd = allQuestionsEABD || [];
questions.medii = allQuestionsMedii || [];