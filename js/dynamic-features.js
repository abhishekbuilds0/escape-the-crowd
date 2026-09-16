/**
 * Escape The Crowd - Dynamic Features
 * 1. Live Urgency Counter & Midnight Countdown
 * 2. Interactive 30-Second Mindset Quiz with Dynamic Scoring & Diagnosis
 * 4. Real-time Live Visitors & Dynamic Activity Ticker
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Live Urgency Counter & Dynamic Midnight Countdown
  // ==========================================================================
  
  // Real-time Countdown to Midnight
  function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);

    const diff = midnight - now;
    if (diff <= 0) return;

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const formattedTime = 
      String(hours).padStart(2, '0') + 'h : ' + 
      String(minutes).padStart(2, '0') + 'm : ' + 
      String(seconds).padStart(2, '0') + 's';

    const timerElements = document.querySelectorAll('.js-urgency-timer');
    timerElements.forEach(el => {
      el.textContent = formattedTime;
    });
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Dynamic Copies Left Counter (Creates authentic urgency, stops at 3)
  let copiesLeft = 7;
  const copiesBadgeElements = document.querySelectorAll('.js-copies-left');
  const copiesBar = document.getElementById('pricingCopiesBar');

  function updateCopiesDisplay() {
    copiesBadgeElements.forEach(el => {
      el.textContent = copiesLeft;
      el.classList.add('pulse-highlight');
      setTimeout(() => el.classList.remove('pulse-highlight'), 600);
    });

    if (copiesBar) {
      // 50 total batch, e.g. 43 sold out, 7 left (86% filled)
      const percentSold = Math.round(((50 - copiesLeft) / 50) * 100);
      copiesBar.style.width = percentSold + '%';
    }
  }

  updateCopiesDisplay();

  // Occasionally decrease by 1 copy to show real activity
  setTimeout(() => {
    if (copiesLeft > 4) {
      copiesLeft--;
      updateCopiesDisplay();
    }
  }, 45000);

  setTimeout(() => {
    if (copiesLeft > 3) {
      copiesLeft--;
      updateCopiesDisplay();
    }
  }, 120000);


  // ==========================================================================
  // 4. Real-time Live Visitors Counter
  // ==========================================================================
  let baseVisitors = 36;
  const visitorCountElements = document.querySelectorAll('.js-live-visitors');

  function updateVisitors() {
    // Subtle fluctuation between 32 and 45
    const variation = Math.floor(Math.random() * 7) - 3;
    baseVisitors = Math.min(48, Math.max(31, baseVisitors + variation));

    visitorCountElements.forEach(el => {
      el.textContent = baseVisitors;
    });
  }

  updateVisitors();
  setInterval(updateVisitors, 7000);


  // ==========================================================================
  // 2. Interactive 30-Second Crowd Mindset Quiz
  // ==========================================================================
  const quizCard = document.getElementById('mindsetQuizCard');
  if (!quizCard) return;

  const quizQuestions = [
    {
      q: "Aap apni life aur career ke major decisions kiske hisaab se lete hain?",
      options: [
        { text: "Family aur society ke expectations (Safe 9-5 & Fixed Path)", points: 30 },
        { text: "Kuch apna karna chahta hu, par failure aur log kya kahenge ka darr hai", points: 20 },
        { text: "Main 100% apne rules aur core values par decision leta hu", points: 5 }
      ]
    },
    {
      q: "Paisa aur financial thinking ke maamle mein aapka kya mindset hai?",
      options: [
        { text: "Salary/income aate hi lifestyle inflation aur doosron ko impress karne mein kharch ho jaata hai", points: 35 },
        { text: "Savings karta hu, par financial independence ka koi structured system nahi hai", points: 20 },
        { text: "Cashflow aur high-leverage skills build kar raha hu for sovereign freedom", points: 5 }
      ]
    },
    {
      q: "Jab social media ya society kisi trend ke peeche bhaagti hai, aapka reaction kya hota hai?",
      options: [
        { text: "FOMO (Fear Of Missing Out) hota hai aur main bhi bheed ke saath follow karta hu", points: 35 },
        { text: "Doubt hota hai par akele stand lene ki himmat nahi hoti", points: 20 },
        { text: "Main pause leta hu aur first principles se independent sochta hu", points: 5 }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let totalScore = 0;

  const questionText = document.getElementById('quizQuestionText');
  const questionNumber = document.getElementById('quizQuestionNumber');
  const quizOptionsContainer = document.getElementById('quizOptionsContainer');
  const quizProgress = document.getElementById('quizProgress');
  const quizActiveView = document.getElementById('quizActiveView');
  const quizResultView = document.getElementById('quizResultView');
  const quizScoreNumber = document.getElementById('quizScoreNumber');
  const quizScoreBar = document.getElementById('quizScoreBar');
  const quizDiagnosisTitle = document.getElementById('quizDiagnosisTitle');
  const quizDiagnosisDesc = document.getElementById('quizDiagnosisDesc');
  const quizRetakeBtn = document.getElementById('quizRetakeBtn');

  function renderQuestion() {
    const qData = quizQuestions[currentQuestionIndex];
    if (!qData) return;

    questionNumber.textContent = `Sawaal ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    questionText.textContent = qData.q;
    quizProgress.style.width = `${((currentQuestionIndex) / quizQuestions.length) * 100}%`;

    quizOptionsContainer.innerHTML = '';

    qData.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span class="quiz-option-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="quiz-option-text">${opt.text}</span>
      `;

      btn.addEventListener('click', () => {
        totalScore += opt.points;
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
          renderQuestion();
        } else {
          showResults();
        }
      });

      quizOptionsContainer.appendChild(btn);
    });
  }

  function showResults() {
    quizProgress.style.width = '100%';
    quizActiveView.style.display = 'none';
    quizResultView.style.display = 'block';

    // Normalize score to percentage (max points 100)
    const finalPercent = Math.min(95, Math.max(25, totalScore));

    quizScoreNumber.textContent = `${finalPercent}%`;
    quizScoreBar.style.width = `${finalPercent}%`;

    if (finalPercent >= 70) {
      quizScoreBar.style.background = 'linear-gradient(90deg, #eab308, #ef4444)';
      quizDiagnosisTitle.innerHTML = `⚠️ High Alert: Aap <strong>${finalPercent}% Bheed (Crowd Trap)</strong> mein phase hain!`;
      quizDiagnosisDesc.innerHTML = `
        Aapki energy, time aur decisions abhi borrowed opinions aur societal expectations se drive ho rahe hain. 
        Agar aapne abhi action nahi liya, toh agle 5 saal bhi aap wahi rahenge jahan bheed aapko le jayegi.
        <br><br>
        <strong>Prescribed Action:</strong> Aapke liye <em>Escape The Crowd</em> ka <strong>Part I (The Sleepwalk)</strong> aur <strong>Part II (The Great Deception)</strong> padhna mandatory hai!
      `;
    } else if (finalPercent >= 45) {
      quizScoreBar.style.background = 'linear-gradient(90deg, #22c55e, #eab308)';
      quizDiagnosisTitle.innerHTML = `⚡ Moderate: Aap <strong>${finalPercent}% Crowd vs Sovereign</strong> ke bich mein hain.`;
      quizDiagnosisDesc.innerHTML = `
        Aapko samajh aa raha hai ki conventional path mein kuch gadbad hai, par step lene mein hesitation aur clarity ki kami hai. 
        <br><br>
        <strong>Prescribed Action:</strong> <em>Escape The Crowd</em> ka <strong>Part IV (The Sovereign Code)</strong> aapko akele khade hone ki internal solid foundation dega.
      `;
    } else {
      quizScoreBar.style.background = 'linear-gradient(90deg, #22c55e, #10b981)';
      quizDiagnosisTitle.innerHTML = `🏆 Sovereign Mindset: Aap sirf <strong>${finalPercent}% Crowd Trapped</strong> hain!`;
      quizDiagnosisDesc.innerHTML = `
        Aap already majority logon se aage hain aur apni life ko conscious awareness ke saath jeete hain. 
        <br><br>
        <strong>Prescribed Action:</strong> <em>Escape The Crowd</em> ka <strong>Part VI (Living Sovereign)</strong> aapke execution aur legacy impact ko 10x multiply karega.
      `;
    }
  }

  if (quizRetakeBtn) {
    quizRetakeBtn.addEventListener('click', () => {
      currentQuestionIndex = 0;
      totalScore = 0;
      quizActiveView.style.display = 'block';
      quizResultView.style.display = 'none';
      renderQuestion();
    });
  }

  // Initialize first question
  renderQuestion();
});
