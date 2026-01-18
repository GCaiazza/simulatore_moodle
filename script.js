// Stato dell'applicazione
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false; // Stato della domanda corrente
let history = {}; // MEMORIA: Salva le risposte date { 0: {selected: "...", correct: true}, ... }

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
const prevBtn = document.getElementById('prev-btn'); // NUOVO

// Funzione di Start
document.getElementById('start-btn').addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion); // NUOVO

function startGame() {
    // 1. Resetta stato
    score = 0;
    currentQuestionIndex = 0;
    history = {}; // Pulisce la memoria
    
    // 2. Prendi 20 domande casuali
    currentQuestions = shuffleArray([...quizData]).slice(0, 20);
    
    // 3. Mostra interfaccia quiz
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    renderQuestion();
}

function renderQuestion() {
    // Resetta stato UI base
    const q = currentQuestions[currentQuestionIndex];
    questionText.textContent = q.domanda;
    questionCounter.textContent = `Domanda ${currentQuestionIndex + 1}/20`;
    scoreCounter.textContent = `Punteggio: ${score}`;
    progressBar.style.width = `${((currentQuestionIndex) / 20) * 100}%`;
    optionsContainer.innerHTML = '';
    
    // Gestione Bottoni Navigazione
    // Il tasto "Indietro" appare solo se non siamo alla prima domanda
    if (currentQuestionIndex > 0) {
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
    }
    
    // Il tasto "Prossima" viene nascosto di default finché non si risponde,
    // MA se stiamo rivedendo una domanda già fatta, deve apparire subito.
    nextBtn.classList.add('hidden'); 
    feedbackArea.classList.add('hidden');

    // CONTROLLO STORICO: Abbiamo già risposto a questa domanda?
    const pastAnswer = history[currentQuestionIndex];
    isAnswered = !!pastAnswer; // Se c'è storico, è true

    // Mischia opzioni (o usa quelle salvate se volessimo mantenere l'ordine, 
    // ma rimescolare va bene basta che il testo combaci)
    // NOTA: Per coerenza visiva quando si torna indietro, l'ideale sarebbe non rimescolare 
    // ogni volta, ma per semplicità qui rimescoliamo. L'importante è la logica.
    let displayOptions = q.opzioni; 
    // Se è una nuova domanda, mischiamo. Se torniamo indietro, mischiamo di nuovo 
    // (l'utente vedrà le opzioni in ordine diverso ma con i colori giusti).
    // Se vuoi bloccare l'ordine servirebbe salvare anche quello nell'history.
    const shuffledOptions = shuffleArray([...q.opzioni]);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;

        if (isAnswered) {
            // --- MODALITÀ REVISIONE (SOLA LETTURA) ---
            btn.style.cursor = 'default';
            // Recuperiamo la risposta corretta decodificata
            const correctAnswer = decodeBase64(q.risposta_corretta);
            
            // Colora il tasto che l'utente aveva premuto
            if (opt === pastAnswer.selected) {
                if (pastAnswer.isCorrect) {
                    btn.classList.add('correct');
                    btn.innerHTML += ' <span style="float:right">✅</span>';
                } else {
                    btn.classList.add('wrong');
                    btn.innerHTML += ' <span style="float:right">❌</span>';
                }
            }
            // Colora sempre la risposta giusta (se l'utente aveva sbagliato)
            if (opt === correctAnswer && !pastAnswer.isCorrect) {
                 btn.classList.add('correct');
                 btn.innerHTML += ' <span style="float:right">✅</span>';
            }
        } else {
            // --- MODALITÀ GIOCO ---
            btn.onclick = () => checkAnswer(opt, q.risposta_corretta, q.spiegazione, btn);
        }
        
        optionsContainer.appendChild(btn);
    });

    // Se era già risposta, mostra feedback e tasto "Prossima"
    if (isAnswered) {
        showFeedback(pastAnswer.isCorrect, q.spiegazione);
        nextBtn.classList.remove('hidden');
    }
}

function checkAnswer(selectedOption, encodedCorrectAnswer, explanation, btnElement) {
    if (isAnswered) return;
    isAnswered = true;

    const correctAnswer = decodeBase64(encodedCorrectAnswer);
    const isCorrect = selectedOption.trim() === correctAnswer.trim();

    // SALVA NELLO STORICO
    history[currentQuestionIndex] = {
        selected: selectedOption,
        isCorrect: isCorrect
    };

    // Stile bottoni
    const allBtns = optionsContainer.children;
    for (let btn of allBtns) {
        btn.style.cursor = 'default';
        btn.onclick = null;
        if (btn.textContent.trim() === correctAnswer.trim()) {
            btn.classList.add('correct');
            btn.innerHTML += ' <span style="float:right">✅</span>';
        }
    }

    if (isCorrect) {
        score++;
        btnElement.classList.add('correct'); // Ridondante ma sicuro
    } else {
        btnElement.classList.add('wrong');
        btnElement.innerHTML += ' <span style="float:right">❌</span>';
    }
    
    showFeedback(isCorrect, explanation);
    nextBtn.classList.remove('hidden');
    
    // Aggiorna punteggio live
    scoreCounter.textContent = `Punteggio: ${score}`;
}

// Funzione helper per mostrare il box feedback
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
    currentQuestionIndex++;
    if (currentQuestionIndex < 20) {
        renderQuestion();
    } else {
        showResults();
    }
}

// NUOVO: Funzione per tornare indietro
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

// Utility: Decode Base64 UTF-8
function decodeBase64(str) {
    const binaryString = atob(str);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
}

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Security
document.addEventListener('contextmenu', event => event.preventDefault());