// Stato dell'applicazione
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false; 
let history = {}; // MEMORIA: Salva le risposte { 0: {selected: "...", correct: true}, ... }

// Elementi DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const scoreCounter = document.getElementById('score-counter');
const feedbackArea = document.getElementById('feedback-area');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const feedbackIcon = document.getElementById('feedback-icon');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Listener
document.getElementById('start-btn').addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    history = {}; 
    
    // Prende 20 domande (o meno se non ce ne sono abbastanza)
    const limit = Math.min(20, quizData.length);
    currentQuestions = shuffleArray([...quizData]).slice(0, limit);
    
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;
    
    // Aggiorna Testi
    questionText.textContent = q.domanda;
    questionCounter.textContent = `Domanda ${currentQuestionIndex + 1}/${total}`;
    scoreCounter.textContent = `Punteggio: ${score}`;
    progressBar.style.width = `${((currentQuestionIndex) / total) * 100}%`;
    
    optionsContainer.innerHTML = '';
    feedbackArea.classList.add('hidden');

    // Gestione Bottoni Navigazione
    if (currentQuestionIndex > 0) {
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
    }
    
    // Il tasto prossima si nasconde di default
    nextBtn.classList.add('hidden'); 
    
    // Modifica testo tasto finale
    if (currentQuestionIndex === total - 1) {
        nextBtn.textContent = "Termina Esame 🏁";
    } else {
        nextBtn.textContent = "Prossima ➡";
    }

    // CONTROLLO STORICO
    const pastAnswer = history[currentQuestionIndex];
    isAnswered = !!pastAnswer;

    // Opzioni
    let displayOptions = q.opzioni; 
    // Nota: qui rimescoliamo sempre per semplicità. 
    // In una versione avanzata si potrebbe salvare l'ordine.
    const shuffledOptions = shuffleArray([...q.opzioni]);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;

        if (isAnswered) {
            // MODALITÀ REVISIONE
            btn.style.cursor = 'default';
            const correctAnswer = decodeBase64(q.risposta_corretta);
            
            // Ripristina colori
            if (opt === pastAnswer.selected) {
                if (pastAnswer.isCorrect) {
                    btn.classList.add('correct');
                    btn.innerHTML += ' <span style="float:right">✅</span>';
                } else {
                    btn.classList.add('wrong');
                    btn.innerHTML += ' <span style="float:right">❌</span>';
                }
            }
            // Mostra sempre la corretta
            if (opt === correctAnswer && !pastAnswer.isCorrect) {
                 btn.classList.add('correct');
                 btn.innerHTML += ' <span style="float:right">✅</span>';
            }
        } else {
            // MODALITÀ GIOCO
            btn.onclick = () => checkAnswer(opt, q.risposta_corretta, q.spiegazione, btn);
        }
        
        optionsContainer.appendChild(btn);
    });

    if (isAnswered) {
        showFeedback(pastAnswer.isCorrect, q.spiegazione);
        nextBtn.classList.remove('hidden');
    }
}

function checkAnswer(selectedOption, encodedCorrectAnswer, explanation, btnElement) {
    if (isAnswered) return;
    isAnswered = true;

    const correctAnswer = decodeBase64(encodedCorrectAnswer);
    // Trim per sicurezza sugli spazi vuoti
    const isCorrect = selectedOption.trim() === correctAnswer.trim();

    // SALVA STORICO
    history[currentQuestionIndex] = {
        selected: selectedOption,
        isCorrect: isCorrect
    };

    // Stile bottoni
    const allBtns = optionsContainer.children;
    for (let btn of allBtns) {
        btn.style.cursor = 'default';
        btn.onclick = null;
        if (btn.textContent.includes(correctAnswer)) { // Includes gestisce la spunta se già messa
            btn.classList.add('correct');
             // Evita doppia spunta
            if (!btn.innerHTML.includes('✅')) {
                btn.innerHTML += ' <span style="float:right">✅</span>';
            }
        }
    }

    if (isCorrect) {
        score++;
        if (!btnElement.classList.contains('correct')) {
             btnElement.classList.add('correct');
        }
    } else {
        btnElement.classList.add('wrong');
        btnElement.innerHTML += ' <span style="float:right">❌</span>';
    }
    
    showFeedback(isCorrect, explanation);
    nextBtn.classList.remove('hidden');
    
    scoreCounter.textContent = `Punteggio: ${score}`;
}

function showFeedback(isCorrect, text) {
    if (isCorrect) {
        feedbackTitle.textContent = "Corretto!";
        feedbackTitle.style.color = "var(--success-text)";
        feedbackIcon.textContent = "✅";
        feedbackArea.style.backgroundColor = "var(--success-bg)";
        feedbackArea.style.borderColor = "#bbf7d0";
    } else {
        feedbackTitle.textContent = "Sbagliato";
        feedbackTitle.style.color = "var(--error-text)";
        feedbackIcon.textContent = "❌";
        feedbackArea.style.backgroundColor = "var(--error-bg)";
        feedbackArea.style.borderColor = "#fecaca";
    }
    feedbackText.textContent = text;
    feedbackArea.classList.remove('hidden');
}

function nextQuestion() {
    // Incrementa indice
    currentQuestionIndex++;
    
    // Se siamo ancora dentro il range delle domande, mostra la prossima
    if (currentQuestionIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        // Altrimenti, finito!
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const finalScoreEl = document.getElementById('final-score');
    const resultMessage = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');
    const percentageDisplay = document.getElementById('percentage-display');
    const resultTitle = document.getElementById('result-title'); // Assicurati che esista in HTML
    
    finalScoreEl.textContent = score;
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    percentageDisplay.textContent = `${percentage}% di risposte esatte`;

    // Logica Promosso/Bocciato
    // Soglia 10 se le domande sono 20. Se sono diverse, usa il 60%
    const threshold = total * 0.5; // 50% per la sufficienza (10 su 20)

    if (score > threshold) {
        if(resultTitle) resultTitle.textContent = "Promosso! 🎉";
        if(resultMessage) resultMessage.textContent = "Ottimo lavoro, hai superato l'esame.";
        if(resultIcon) resultIcon.textContent = "🏆";
        resultScreen.style.borderTop = "8px solid var(--success-text)";
    } else {
        if(resultTitle) resultTitle.textContent = "Bocciato 😔";
        if(resultMessage) resultMessage.textContent = `Non hai raggiunto la soglia (${threshold + 1}/${total}). Ripassa e riprova.`;
        if(resultIcon) resultIcon.textContent = "📚";
        resultScreen.style.borderTop = "8px solid var(--error-text)";
    }
}

// Utility
function decodeBase64(str) {
    try {
        const binaryString = atob(str);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new TextDecoder().decode(bytes);
    } catch (e) {
        console.error("Errore decodifica:", e);
        return "Errore decodifica";
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('contextmenu', event => event.preventDefault());