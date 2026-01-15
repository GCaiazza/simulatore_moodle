// Stato dell'applicazione
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

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

// Funzione di Start
document.getElementById('start-btn').addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);

function startGame() {
    // 1. Resetta stato
    score = 0;
    currentQuestionIndex = 0;
    
    // 2. Prendi 20 domande casuali
    // quizData viene caricato da data.js
    currentQuestions = shuffleArray([...quizData]).slice(0, 20);
    
    // 3. Mostra interfaccia quiz
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    renderQuestion();
}

function renderQuestion() {
    isAnswered = false;
    const q = currentQuestions[currentQuestionIndex];
    
    // Aggiorna UI
    questionText.textContent = q.domanda;
    questionCounter.textContent = `Domanda ${currentQuestionIndex + 1}/20`;
    scoreCounter.textContent = `Punteggio: ${score}`;
    progressBar.style.width = `${((currentQuestionIndex) / 20) * 100}%`;
    
    // Resetta feedback
    feedbackArea.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    // Mischia opzioni
    const shuffledOptions = shuffleArray([...q.opzioni]);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;
        // Passiamo l'intera riga dati per sicurezza
        btn.onclick = () => checkAnswer(opt, q.risposta_corretta, q.spiegazione, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedOption, encodedCorrectAnswer, explanation, btnElement) {
    if (isAnswered) return; // Evita doppi click
    isAnswered = true;

    // --- FIX UTF-8 ---
    // Decodifica corretta per caratteri accentati (à, è, ì, ò, ù)
    // 1. Decodifica Base64 in stringa binaria
    const binaryString = atob(encodedCorrectAnswer);
    // 2. Converti in array di bytes
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    // 3. Decodifica i bytes come UTF-8
    const correctAnswer = new TextDecoder().decode(bytes);
    // -----------------

    // Normalizziamo le stringhe (rimuove spazi extra invisibili)
    const isCorrect = selectedOption.trim() === correctAnswer.trim();
    
    // Stile bottoni
    const allBtns = optionsContainer.children;
    for (let btn of allBtns) {
        btn.style.cursor = 'default';
        btn.onclick = null; // Disabilita ulteriori click
        
        // Cerca il bottone che contiene la risposta giusta e coloralo di VERDE
        // Usiamo trim() anche qui per sicurezza
        if (btn.textContent.trim() === correctAnswer.trim()) {
            btn.classList.add('correct');
            // Aggiungiamo un'icona check visiva
            btn.innerHTML += ' <span style="float:right">✅</span>';
        }
    }

    if (isCorrect) {
        score++;
        feedbackTitle.textContent = "Corretto!";
        feedbackTitle.style.color = "var(--success-text)";
        feedbackIcon.textContent = "✅";
        feedbackArea.style.backgroundColor = "var(--success-bg)";
        feedbackArea.style.borderColor = "#bbf7d0";
    } else {
        // Se hai sbagliato, colora il tuo di ROSSO
        btnElement.classList.add('wrong');
        btnElement.innerHTML += ' <span style="float:right">❌</span>';
        
        feedbackTitle.textContent = "Sbagliato";
        feedbackTitle.style.color = "var(--error-text)";
        feedbackIcon.textContent = "❌";
        feedbackArea.style.backgroundColor = "var(--error-bg)";
        feedbackArea.style.borderColor = "#fecaca";
    }
    
    // Mostra spiegazione
    feedbackText.textContent = explanation;
    feedbackArea.classList.remove('hidden');
    
    // Aggiorna punteggio live
    scoreCounter.textContent = `Punteggio: ${score}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 20) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const finalScoreEl = document.getElementById('final-score');
    const resultMessage = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');
    const percentageDisplay = document.getElementById('percentage-display');
    const resultTitle = document.getElementById('result-title');
    
    finalScoreEl.textContent = score;
    const percentage = Math.round((score / 20) * 100);
    percentageDisplay.textContent = `${percentage}% di risposte esatte`;

    if (score > 10) {
        resultTitle.textContent = "Promosso! 🎉";
        resultMessage.textContent = "Ottimo lavoro, hai superato l'esame.";
        resultIcon.textContent = "🏆";
        resultScreen.style.borderTop = "8px solid var(--success-text)";
    } else {
        resultTitle.textContent = "Bocciato 😔";
        resultMessage.textContent = "Non hai raggiunto la soglia sufficiente (11/20). Ripassa e riprova.";
        resultIcon.textContent = "📚";
        resultScreen.style.borderTop = "8px solid var(--error-text)";
    }
}

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Security: Disabilita tasto destro (deterrente base)
document.addEventListener('contextmenu', event => event.preventDefault());