// --- 1. CONFIGURAZIONE SUPABASE ---
const SUPABASE_URL = 'https://mcgqftdzjtsfienytxke.supabase.co';
// ⚠️ IMPORTANTE: Sostituisci con la tua chiave che inizia con "ey..." (quella LUNGA)
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZ3FmdGR6anRzZmllbnl0eGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NTA5MzgsImV4cCI6MjA4NDMyNjkzOH0.YjLBcWBeCRnJTAFhwd4jZ70CIv6bzyxvY8ZMjTtyhJg'; 

// --- FIX ERRORE CONSOLE: Variabile shadowing ---
// Usiamo supabaseClient invece di _supabase o supabase per evitare conflitti
let supabaseClient = null;

// --- 2. STATO DELL'APPLICAZIONE ---
let currentUser = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;
let history = {};
let selectedAvatarSeed = '';
let selectedAvatarColor = '';

// --- 3. ELEMENTI DOM (dichiarati qui, inizializzati dopo DOMContentLoaded) ---
let loginScreen, startScreen, quizScreen, resultScreen;
let loginBtn, usernameInput, pinInput, loginError, avatarGrid;
let questionText, optionsContainer, progressBar, questionCounter, scoreCounter;
let feedbackArea, nextBtn, prevBtn, startBtn;

// --- 4. INIZIALIZZAZIONE ---
document.addEventListener('DOMContentLoaded', () => {
    // Inizializza elementi DOM
    loginScreen = document.getElementById('login-screen');
    startScreen = document.getElementById('start-screen');
    quizScreen = document.getElementById('quiz-screen');
    resultScreen = document.getElementById('result-screen');
    
    loginBtn = document.getElementById('login-btn');
    usernameInput = document.getElementById('username-input');
    pinInput = document.getElementById('pin-input');
    loginError = document.getElementById('login-error');
    avatarGrid = document.getElementById('avatar-grid');
    
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    progressBar = document.getElementById('progress-bar');
    questionCounter = document.getElementById('question-counter');
    scoreCounter = document.getElementById('score-counter');
    feedbackArea = document.getElementById('feedback-area');
    nextBtn = document.getElementById('next-btn');
    prevBtn = document.getElementById('prev-btn');
    startBtn = document.getElementById('start-btn');
    
    // Inizializza Supabase SOLO dopo che la libreria è caricata
    if (typeof window.supabase !== 'undefined') {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    } else {
        console.error('Supabase CDN non caricato correttamente!');
        loginError.textContent = 'Errore caricamento libreria. Ricarica la pagina.';
        loginError.classList.remove('hidden');
    }
    
    // Setup event listeners
    if (loginBtn) loginBtn.addEventListener('click', handleLogin);
    if (startBtn) startBtn.addEventListener('click', startGame);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
    
    // Genera opzioni avatar
    generateAvatarOptions();
    
    // Verifica sessione esistente
    checkSession();
});

// --- 5. GESTIONE AVATAR ---
function generateAvatarOptions() {
    if(!avatarGrid) return;
    avatarGrid.innerHTML = '';
    
    const avatars = [
        { name: 'Sir Byte',   seed: 'Adrian',  color: 'd1fae5' },
        { name: 'Lady Bug',   seed: 'Willow',  color: 'fef08a' },
        { name: 'Baron Net',  seed: 'Nolan',   color: 'bae6fd' },
        { name: 'Count CSS',  seed: 'Caleb',   color: 'bfdbfe' },
        { name: 'Dame Java',  seed: 'Molly',   color: 'fbcfe8' },
        { name: 'King Git',   seed: 'Oliver',  color: 'e9d5ff' },
        { name: 'Duke Data',  seed: 'Avery',   color: 'fed7aa' },
        { name: 'Lord Ping',  seed: 'Jack',    color: 'ffffff' },
        { name: 'Earl Cache', seed: 'Mason',   color: 'f3f4f6' },
        { name: 'Gen. Cloud', seed: 'Sawyer',  color: '99f6e4' }
    ];
    
    // Default: primo avatar
    const defaultHero = avatars[0];
    selectedAvatarSeed = defaultHero.seed;
    selectedAvatarColor = defaultHero.color;

    avatars.forEach((hero, index) => {
        const container = document.createElement('div');
        container.className = 'avatar-container';
        if(index === 0) container.classList.add('selected');

        const img = document.createElement('img');
        img.src = `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${hero.seed}&backgroundColor=${hero.color}`;
        img.className = 'avatar-option';
        
        const label = document.createElement('span');
        label.className = 'avatar-name';
        label.textContent = hero.name;

        container.onclick = () => {
            document.querySelectorAll('.avatar-container').forEach(el => el.classList.remove('selected'));
            container.classList.add('selected');
            selectedAvatarSeed = hero.seed;
            selectedAvatarColor = hero.color;
        };

        container.appendChild(img);
        container.appendChild(label);
        avatarGrid.appendChild(container);
    });
}

// --- 6. LOGICA LOGIN ---
async function handleLogin() {
    const username = usernameInput.value.trim().replace(/\s+/g, '');
    const pin = pinInput.value.trim();

    if (username.length < 3 || pin.length !== 4) {
        showError("Inserisci un nickname valido (min 3 caratteri) e un PIN di 4 cifre.");
        return;
    }

    if (!supabaseClient) {
        showError("Errore: Supabase non inizializzato. Ricarica la pagina.");
        return;
    }

    loginBtn.textContent = "Accesso...";
    loginBtn.disabled = true;
    loginError.classList.add('hidden');

    const shadowEmail = `${username}@cloudquiz.local`.toLowerCase();
    const shadowPassword = `${pin}_secure_salt`;

    try {
        // Tenta il login
        let { data, error } = await supabaseClient.auth.signInWithPassword({
            email: shadowEmail,
            password: shadowPassword
        });

        // Se fallisce, tenta la registrazione
        if (error && (error.message.includes("Invalid login") || error.message.includes("Email not confirmed"))) {
            console.log("Nuovo utente, registrazione...");
            
            const { data: signUpData, error: signUpError } = await supabaseClient.auth.signUp({
                email: shadowEmail,
                password: shadowPassword,
                options: {
                    data: { 
                        username: username, 
                        avatar_seed: selectedAvatarSeed,
                        avatar_color: selectedAvatarColor
                    }
                }
            });

            if (signUpError) {
                if(signUpError.message.includes("already registered") || signUpError.message.includes("already exists")) {
                    showError("Nickname già in uso. Se sei tu, verifica il PIN.");
                } else {
                    showError("Errore registrazione: " + signUpError.message);
                }
                resetLoginBtn();
                return;
            }
            
            data = signUpData;
        } else if (error) {
            showError("Errore login: " + error.message);
            resetLoginBtn();
            return;
        }

        if(data && data.user) {
            await handleLoginSuccess(data.user);
        } else {
            showError("Errore: Nessun utente ricevuto.");
            resetLoginBtn();
        }
    } catch (err) {
        console.error('Errore login:', err);
        showError("Errore di connessione. Verifica la tua connessione internet.");
        resetLoginBtn();
    }
}

function resetLoginBtn() {
    if(loginBtn) {
        loginBtn.textContent = "ENTRA / REGISTRATI";
        loginBtn.disabled = false;
    }
}

function showError(msg) {
    if(loginError) {
        loginError.textContent = msg;
        loginError.classList.remove('hidden');
    }
}

async function handleLoginSuccess(user) {
    currentUser = user;
    
    loginScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    
    // IMPORTANTE: Per utenti esistenti, recupera avatar dal DB (ignora selezione corrente)
    const meta = user.user_metadata || {};
    const displayUser = meta.username || "Utente";
    
    // Se l'utente ha già un avatar salvato, usalo; altrimenti usa quello selezionato (solo per nuovi utenti)
    const avatarSeed = meta.avatar_seed || selectedAvatarSeed;
    const avatarColor = meta.avatar_color || selectedAvatarColor;
    
    const welcomeMsgEl = document.getElementById('welcome-msg');
    const avatarImgEl = document.getElementById('current-user-avatar');
    
    if(welcomeMsgEl) welcomeMsgEl.textContent = `Ciao, ${displayUser}!`;
    if(avatarImgEl) {
        avatarImgEl.src = `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${avatarSeed}&backgroundColor=${avatarColor}`;
    }

    await loadLeaderboard();
}

window.logout = async function() {
    if(supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    location.reload();
}

async function checkSession() {
    if(!supabaseClient) return;
    
    try {
        const { data } = await supabaseClient.auth.getSession();
        if (data && data.session && data.session.user) {
            await handleLoginSuccess(data.session.user);
        }
    } catch (err) {
        console.error('Errore check sessione:', err);
    }
}

// --- 7. CLASSIFICA ---
async function loadLeaderboard(containerId = 'leaderboard-list') {
    const list = document.getElementById(containerId);
    if(!list || !supabaseClient) return;
    
    list.innerHTML = '<p style="color:#6b7280; font-size:0.9rem;">Aggiornamento...</p>';

    try {
        // Recupera tutti i risultati raggruppati per user_id con informazioni utente
        const { data: examResults, error: examError } = await supabaseClient
            .from('exam_results')
            .select('user_id, score, total_questions');

        if (examError) {
            console.error('Errore caricamento risultati:', examError);
            list.innerHTML = '<p>Classifica non disponibile.</p>';
            return;
        }

        if (!examResults || examResults.length === 0) {
            list.innerHTML = '<p style="color:#6b7280; font-size:0.9rem;">Nessun risultato ancora.</p>';
            return;
        }

        // Calcola la media per ogni utente
        const userStats = {};
        
        examResults.forEach(result => {
            const userId = result.user_id;
            if (!userStats[userId]) {
                userStats[userId] = {
                    scores: [],
                    totalQuestions: result.total_questions || 20
                };
            }
            userStats[userId].scores.push(result.score || 0);
        });

        // Calcola la media aritmetica per ogni utente
        const leaderboardData = [];
        
        for (const [userId, stats] of Object.entries(userStats)) {
            const avgScore = stats.scores.reduce((sum, score) => sum + score, 0) / stats.scores.length;
            const roundedAvg = Math.round(avgScore * 10) / 10; // Arrotonda a 1 decimale
            
            leaderboardData.push({
                user_id: userId,
                average_score: roundedAvg,
                total_tests: stats.scores.length
            });
        }

        // Ordina per media decrescente, poi per numero di test (in caso di parità, chi ha più test è più in alto)
        leaderboardData.sort((a, b) => {
            if (Math.abs(b.average_score - a.average_score) < 0.01) {
                // Stessa media (con tolleranza per floating point), ordina per numero di test decrescente
                return b.total_tests - a.total_tests;
            }
            // Altrimenti ordina per media decrescente
            return b.average_score - a.average_score;
        });

        // Prendi i top 5
        const topUsers = leaderboardData.slice(0, 5);
        const userIds = topUsers.map(u => u.user_id);

        // Recupera username e avatar dal primo risultato di ogni utente (sono salvati in exam_results)
        const { data: latestResults, error: latestError } = await supabaseClient
            .from('exam_results')
            .select('user_id, username, avatar_seed, avatar_color')
            .in('user_id', userIds)
            .order('created_at', { ascending: false });

        // Crea una mappa per username e avatar per user_id
        const userInfoMap = {};
        if (latestResults) {
            latestResults.forEach(result => {
                if (!userInfoMap[result.user_id]) {
                    userInfoMap[result.user_id] = {
                        username: result.username || `Utente ${result.user_id.substring(0, 8)}`,
                        avatar_seed: result.avatar_seed || 'default',
                        avatar_color: result.avatar_color || 'f3f4f6'
                    };
                }
            });
        }

        // Se è l'utente corrente, usa i suoi metadata se non presenti nel DB
        if (currentUser && !userInfoMap[currentUser.id]) {
            const meta = currentUser.user_metadata || {};
            userInfoMap[currentUser.id] = {
                username: meta.username || 'Utente',
                avatar_seed: meta.avatar_seed || 'default',
                avatar_color: meta.avatar_color || 'f3f4f6'
            };
        }

        // Combina i dati
        const leaderboardWithUserInfo = topUsers.map(user => {
            const userInfo = userInfoMap[user.user_id] || {
                username: `Utente ${user.user_id.substring(0, 8)}`,
                avatar_seed: 'default',
                avatar_color: 'f3f4f6'
            };
            return {
                ...user,
                username: userInfo.username,
                avatar_seed: userInfo.avatar_seed,
                avatar_color: userInfo.avatar_color
            };
        });

        // Renderizza la classifica
        list.innerHTML = '';
        leaderboardWithUserInfo.forEach((row, index) => {
            const div = document.createElement('div');
            div.className = 'leaderboard-row';
            
            let rank = `${index + 1}.`;
            if (index === 0) rank = '🥇';
            if (index === 1) rank = '🥈';
            if (index === 2) rank = '🥉';

            const avatarSeed = row.avatar_seed || 'default';
            const avatarColor = row.avatar_color || 'f3f4f6';

            div.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <span class="rank-badge">${rank}</span> 
                    <img src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=${avatarSeed}&backgroundColor=${avatarColor}" style="width:28px; height:28px; border-radius:50%; background:#fff; border:1px solid #ddd;">
                    <span style="font-weight:500;">${row.username || 'Anonimo'}</span>
                </div>
                <strong>${row.average_score.toFixed(1)}/20</strong>
            `;
            list.appendChild(div);
        });

    } catch (err) {
        console.error('Errore caricamento leaderboard:', err);
        list.innerHTML = '<p>Errore caricamento classifica.</p>';
    }
}

// --- 8. LOGICA QUIZ ---
function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    history = {};
    isAnswered = false;
    
    if (typeof quizData === 'undefined' || !quizData || quizData.length === 0) {
        alert("Errore: Dati quiz mancanti! Verifica che data.js sia caricato correttamente.");
        return;
    }
    
    const limit = Math.min(20, quizData.length);
    currentQuestions = shuffleArray([...quizData]).slice(0, limit);
    
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    renderQuestion();
}

function renderQuestion() {
    if (!currentQuestions || currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }
    
    const q = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;
    
    questionText.textContent = q.domanda;
    questionCounter.textContent = `Domanda ${currentQuestionIndex + 1}/${total}`;
    scoreCounter.textContent = `Punteggio: ${score}`;
    progressBar.style.width = `${((currentQuestionIndex) / total) * 100}%`;
    
    optionsContainer.innerHTML = '';
    feedbackArea.classList.add('hidden');
    
    prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);
    
    nextBtn.classList.add('hidden');
    nextBtn.textContent = (currentQuestionIndex === total - 1) ? "Termina Esame 🏁" : "Prossima ➡";

    const pastAnswer = history[currentQuestionIndex];
    isAnswered = !!pastAnswer;

    let shuffledOptions = shuffleArray([...q.opzioni]);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;

        if (isAnswered) {
            btn.style.cursor = 'default';
            const correctAnswer = decodeBase64(q.risposta_corretta);
            
            if (opt.trim() === pastAnswer.selected.trim()) {
                btn.classList.add(pastAnswer.isCorrect ? 'correct' : 'wrong');
                btn.innerHTML += pastAnswer.isCorrect ? ' <span style="float:right">✅</span>' : ' <span style="float:right">❌</span>';
            }
            if (opt.trim() === correctAnswer.trim() && !pastAnswer.isCorrect) {
                 btn.classList.add('correct');
                 btn.innerHTML += ' <span style="float:right">✅</span>';
            }
        } else {
            btn.onclick = () => checkAnswer(opt, q.risposta_corretta, q.spiegazione, btn, q.id);
        }
        optionsContainer.appendChild(btn);
    });

    if (isAnswered) {
        showFeedback(pastAnswer.isCorrect, q.spiegazione);
        nextBtn.classList.remove('hidden');
    }
}

function checkAnswer(selectedOption, encodedCorrectAnswer, explanation, btnElement, questionId) {
    if (isAnswered) return;
    isAnswered = true;

    const correctAnswer = decodeBase64(encodedCorrectAnswer);
    const isCorrect = selectedOption.trim() === correctAnswer.trim();

    history[currentQuestionIndex] = { selected: selectedOption, isCorrect: isCorrect };

    // TRACKING ERRORI
    if (currentUser && questionId && supabaseClient) {
        saveMistakeStats(currentUser.id, questionId, isCorrect);
    }

    const allBtns = optionsContainer.children;
    for (let btn of allBtns) {
        btn.style.cursor = 'default';
        btn.onclick = null;
        const btnText = btn.textContent.replace(/[✅❌]/g, '').trim();
        if (btnText === correctAnswer.trim()) {
            btn.classList.add('correct');
            if (!btn.innerHTML.includes('✅')) btn.innerHTML += ' <span style="float:right">✅</span>';
        }
    }

    if (isCorrect) {
        score++;
        if (!btnElement.classList.contains('correct')) btnElement.classList.add('correct');
    } else {
        btnElement.classList.add('wrong');
        btnElement.innerHTML = btnElement.innerHTML.replace(/[✅❌]/g, '') + ' <span style="float:right">❌</span>';
    }
    
    showFeedback(isCorrect, explanation);
    nextBtn.classList.remove('hidden');
    scoreCounter.textContent = `Punteggio: ${score}`;
}

function showFeedback(isCorrect, explanation) {
    if(!feedbackArea) return;
    
    const iconEl = document.getElementById('feedback-icon');
    const titleEl = document.getElementById('feedback-title');
    const textEl = document.getElementById('feedback-text');
    
    if(iconEl) iconEl.textContent = isCorrect ? '✅' : '❌';
    if(titleEl) titleEl.textContent = isCorrect ? 'Corretto!' : 'Sbagliato';
    if(textEl) textEl.textContent = explanation || '';
    
    feedbackArea.classList.remove('hidden');
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        isAnswered = false;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        isAnswered = !!history[currentQuestionIndex];
        renderQuestion();
    }
}

async function saveMistakeStats(userId, questionId, isCorrect) {
    if(!supabaseClient) return;
    
    try {
        const { data } = await supabaseClient
            .from('mistake_tracker')
            .select('*')
            .eq('user_id', userId)
            .eq('question_id', questionId)
            .single();

        let errorCount = data ? (data.error_count || 0) : 0;
        let correctStreak = data ? (data.correct_streak || 0) : 0;

        if (isCorrect) {
            correctStreak++;
        } else {
            errorCount++;
            correctStreak = 0;
        }

        await supabaseClient.from('mistake_tracker').upsert({ 
            user_id: userId, 
            question_id: questionId, 
            error_count: errorCount,
            correct_streak: correctStreak,
            last_seen: new Date().toISOString()
        }, {
            onConflict: 'user_id,question_id'
        });
    } catch (err) {
        console.error('Errore salvataggio mistake stats:', err);
    }
}

async function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // Carica subito la leaderboard nella schermata risultati
    await loadLeaderboard('result-leaderboard-list');
    
    const finalScoreEl = document.getElementById('final-score');
    const totalQuestionsDisplay = document.getElementById('total-questions-display');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');
    const percentageDisplay = document.getElementById('percentage-display');
    const savingStatus = document.getElementById('saving-status');
    
    const total = currentQuestions.length || 20;
    
    if(finalScoreEl) finalScoreEl.textContent = score;
    if(totalQuestionsDisplay) totalQuestionsDisplay.textContent = total;
    
    const percentage = Math.round((score / total) * 100);
    if(percentageDisplay) percentageDisplay.textContent = `${percentage}% di risposte esatte`;

    const threshold = total * 0.55; 
    if (score >= threshold) {
        if(resultTitle) resultTitle.textContent = "Promosso! 🎉";
        if(resultMessage) resultMessage.textContent = "Ottimo lavoro, hai superato l'esame.";
        if(resultIcon) resultIcon.textContent = "🏆";
        resultScreen.style.borderTop = "8px solid var(--success-text)";
    } else {
        if(resultTitle) resultTitle.textContent = "Bocciato 😔";
        if(resultMessage) resultMessage.textContent = `Soglia non raggiunta (minimo ${Math.ceil(threshold)}/${total}). Ripassa e riprova.`;
        if(resultIcon) resultIcon.textContent = "📚";
        resultScreen.style.borderTop = "8px solid var(--error-text)";
    }

    if (currentUser && supabaseClient && savingStatus) {
        savingStatus.textContent = "Salvataggio risultati nel cloud...";
        
        // Recupera username e avatar dai metadata dell'utente
        const meta = currentUser.user_metadata || {};
        const username = meta.username || 'Utente';
        const avatarSeed = meta.avatar_seed || 'default';
        const avatarColor = meta.avatar_color || 'f3f4f6';
        
        supabaseClient.from('exam_results').insert({
            user_id: currentUser.id,
            username: username,
            avatar_seed: avatarSeed,
            avatar_color: avatarColor,
            score: score,
            total_questions: total,
            is_perfect: (score === total)
        }).then(({ error }) => {
            if (!error) {
                savingStatus.textContent = "Risultati salvati con successo! ✅";
                savingStatus.style.color = "#166534";
                
                // Aggiorna leaderboard sia in start-screen che in result-screen (non await - eseguono in background)
                loadLeaderboard('leaderboard-list').catch(err => console.error('Errore leaderboard start:', err));
                loadLeaderboard('result-leaderboard-list').catch(err => console.error('Errore leaderboard result:', err));
            } else {
                savingStatus.textContent = "Errore salvataggio: " + error.message;
                savingStatus.style.color = "#991b1b";
                console.error(error);
            }
        }).catch(err => {
            savingStatus.textContent = "Errore di connessione durante il salvataggio.";
            savingStatus.style.color = "#991b1b";
            console.error(err);
        });
    }
}

function decodeBase64(str) {
    try {
        return new TextDecoder().decode(Uint8Array.from(atob(str), c => c.charCodeAt(0)));
    } catch (e) { 
        console.error('Errore decodifica base64:', e);
        return "Errore decodifica"; 
    }
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Disabilita menu contestuale
document.addEventListener('contextmenu', event => event.preventDefault());
