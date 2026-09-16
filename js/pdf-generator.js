/**
 * Escape The Crowd - Instant PDF Delivery Generator
 * Generates and triggers download of the official eBook starter kit & Chapter 1 blueprint
 */

function generateAndDownloadEbook(buyerName = "Reader") {
  const content = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>Escape The Crowd - Abhishek Sharma</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Inter:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;1,400&display=swap');
    
    @page {
      size: A4;
      margin: 20mm;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      color: #1a1a24;
      background: #ffffff;
      line-height: 1.7;
      margin: 0;
      padding: 0;
    }
    
    .cover-page {
      page-break-after: always;
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px double #d4af37;
      padding: 40px;
      text-align: center;
      background: #0a0a0d;
      color: #fff;
      box-sizing: border-box;
    }
    
    .gold-text {
      color: #d4af37;
    }
    
    .book-tag {
      font-size: 13px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #d4af37;
    }
    
    h1.main-title {
      font-family: 'Cinzel', serif;
      font-size: 44px;
      margin: 20px 0 10px 0;
      letter-spacing: 2px;
      color: #ffffff;
    }
    
    p.subtitle {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 20px;
      color: #d4af37;
      margin: 0;
    }
    
    .cover-author {
      font-family: 'Cinzel', serif;
      font-size: 18px;
      letter-spacing: 3px;
      color: #ffffff;
      border-top: 1px solid rgba(212, 175, 55, 0.4);
      padding-top: 20px;
    }
    
    .chapter-page {
      page-break-after: always;
      padding: 20px 0;
    }
    
    h2.chapter-heading {
      font-family: 'Cinzel', serif;
      font-size: 26px;
      color: #0a0a0d;
      border-bottom: 2px solid #d4af37;
      padding-bottom: 10px;
      margin-top: 0;
    }
    
    .quote-box {
      background: #fdfbf7;
      border-left: 4px solid #d4af37;
      padding: 16px 20px;
      font-family: 'Playfair Display', serif;
      font-size: 17px;
      font-style: italic;
      color: #333;
      margin: 25px 0;
    }
    
    .reflect-box {
      background: #fff9e6;
      border: 1px solid #d4af37;
      border-radius: 8px;
      padding: 20px;
      margin: 30px 0;
    }
    
    .reflect-title {
      font-weight: 700;
      color: #8c6b0d;
      letter-spacing: 2px;
      font-size: 13px;
      margin-bottom: 8px;
    }
    
    .toc-item {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dotted #ccc;
      padding: 8px 0;
      font-size: 14px;
    }
    
    .footer-note {
      text-align: center;
      font-size: 12px;
      color: #777;
      margin-top: 40px;
      border-top: 1px solid #eee;
      padding-top: 15px;
    }
  </style>
</head>
<body>

  <!-- COVER PAGE -->
  <div class="cover-page">
    <div>
      <p class="book-tag">A Guide to Self-Mastery</p>
      <h1 class="main-title">ESCAPE THE CROWD</h1>
      <p class="subtitle">The Journey from Following to Becoming</p>
    </div>
    
    <div style="margin: 40px auto; max-width: 400px; border: 1px solid rgba(212,175,55,0.3); padding: 20px; border-radius: 6px;">
      <p style="font-size: 14px; color: #ccc; margin: 0;">Special Edition Prepared Exclusively For:</p>
      <h3 style="color: #d4af37; font-family: 'Cinzel', serif; margin: 8px 0 0 0; font-size: 22px;">${buyerName}</h3>
    </div>
    
    <div class="cover-author">
      ABHISHEK SHARMA<br>
      <span style="font-size: 12px; font-family: 'Inter', sans-serif; color: #d4af37; letter-spacing: 1px;">#AbhishekBuilds · abhisharma91296@gmail.com</span>
    </div>
  </div>

  <!-- TABLE OF CONTENTS -->
  <div class="chapter-page">
    <h2 class="chapter-heading">Table of Contents · 19 Chapters</h2>
    <p style="font-size: 14px; color: #666; margin-bottom: 25px;">The 6-Part Blueprint for Sovereign Thinking & Self-Mastery</p>
    
    <div style="margin-bottom: 18px;">
      <strong style="color: #8c6b0d;">PART 1: THE WAKE-UP CALL</strong>
      <div class="toc-item"><span>1. The Illusion of Safety</span><span>Page 3</span></div>
      <div class="toc-item"><span>2. The Price of Fitting In</span><span>Page 6</span></div>
      <div class="toc-item"><span>3. Autopilot Life</span><span>Page 9</span></div>
    </div>
    
    <div style="margin-bottom: 18px;">
      <strong style="color: #8c6b0d;">PART 2: RECLAIMING YOUR MIND</strong>
      <div class="toc-item"><span>4. Think for Yourself</span><span>Page 12</span></div>
      <div class="toc-item"><span>5. The Noise Around You</span><span>Page 15</span></div>
      <div class="toc-item"><span>6. The Power of Solitude</span><span>Page 18</span></div>
    </div>

    <div style="margin-bottom: 18px;">
      <strong style="color: #8c6b0d;">PART 3: BUILDING THE FOUNDATION</strong>
      <div class="toc-item"><span>7. Discipline When Motivation Dies</span><span>Page 21</span></div>
      <div class="toc-item"><span>8. Daily Non-Negotiables</span><span>Page 24</span></div>
      <div class="toc-item"><span>9. Protect Your Energy</span><span>Page 27</span></div>
    </div>

    <div style="margin-bottom: 18px;">
      <strong style="color: #8c6b0d;">PART 4: LEVERAGE & WEALTH</strong>
      <div class="toc-item"><span>10. Money Has Rules</span><span>Page 30</span></div>
      <div class="toc-item"><span>11. Skill Stacking</span><span>Page 33</span></div>
      <div class="toc-item"><span>12. The Freedom Formula</span><span>Page 36</span></div>
    </div>

    <div style="margin-bottom: 18px;">
      <strong style="color: #8c6b0d;">PART 5: RELATIONSHIPS & BOUNDARIES</strong>
      <div class="toc-item"><span>13. Your Circle Matters</span><span>Page 39</span></div>
      <div class="toc-item"><span>14. Learn to Say No</span><span>Page 42</span></div>
      <div class="toc-item"><span>15. Dealing with Hate</span><span>Page 45</span></div>
    </div>

    <div style="margin-bottom: 18px;">
      <strong style="color: #8c6b0d;">PART 6: THE LONG GAME</strong>
      <div class="toc-item"><span>16. The Five-Year Vision</span><span>Page 48</span></div>
      <div class="toc-item"><span>17. Stop Chasing, Start Building</span><span>Page 51</span></div>
      <div class="toc-item"><span>18. Become Unrecognizable</span><span>Page 54</span></div>
      <div class="toc-item"><span>19. You Were Never Meant to Follow</span><span>Page 57</span></div>
    </div>
  </div>

  <!-- CHAPTER 1: THE ILLUSION OF SAFETY -->
  <div class="chapter-page">
    <h2 class="chapter-heading">Chapter 1: The Illusion of Safety</h2>
    
    <p>
      Insaan hazaron saalon se groups mein rehne ke liye program hua hai. Ancient time mein agar tum tribe se alag ho jaate the, toh tumhari survival impossible thi — jungli jaanwar, mausam aur bhookh tumhe khatam kar dete the. Isliye humare dimaag mein ek deep psychological fear baith gaya: <strong>"Bheed se alag hona = Maut."</strong>
    </p>

    <div class="quote-box">
      "Bheed ka sabse bada trap ye hai ki wo comfort deti hai, lekin growth nahi."
    </div>

    <p>
      Lekin aaj ka jungle different hai. Aaj koi sherr tumhe nahi khaayega agar tum apna alag rasta choose karo. Phir bhi wahi purana fear humare andar zinda hai — judgment ka fear, rejection ka fear, "log kya kahenge" ka fear.
    </p>

    <p>
      Isliye hum wahi college choose karte hain jo "sabse acha" mana jaata hai, wahi career jo family aur friends approve karte hain, wahi opinions rakhte hain jo humare group mein popular hain. Hum khud se ye sawaal kabhi poochte hi nahi — <em>"Ye mujhe chahiye bhi hai, ya sirf isliye kar raha hoon kyunki baaki sab kar rahe hain?"</em>
    </p>

    <p>
      Jab tum bheed ke saath chalte ho, koi tumhe judge nahi karta — kyunki tum bhi wahi kar rahe ho jo sab kar rahe hain. Lekin jab tum apna alag rasta choose karte ho, judgment shuru ho jaata hai. Aur yahi judgment ka dar hai jo maximum logon ko unki poori zindagi bheed mein hi rakh deta hai.
    </p>

    <p>
      Real safety bheed mein nahi hoti — <strong>real safety self-awareness aur self-mastery mein hoti hai</strong>. Jab tumhe pata ho ki tum kya chahte ho aur kyun chahte ho, tab bheed ka opinion tumhe hila nahi sakta.
    </p>

    <div class="reflect-box">
      <div class="reflect-title">R E F L E C T &nbsp; A U D I T</div>
      <p style="margin: 0; font-size: 14px; color: #3a2e0a;">
        Apni last 5 badi decisions (career, relationship, lifestyle, money) ke baare mein socho. Kitni decisions tumne sach mein khud soch kar li, aur kitni sirf isliye li kyunki "sab yahi karte hain"? Write it down today.
      </p>
    </div>

    <div class="footer-note">
      Escape The Crowd © Abhishek Sharma (#AbhishekBuilds) · All Rights Reserved.
    </div>
  </div>

</body>
</html>`;

  // Create downloadable file
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  // Open in new tab formatted for instant printing / saving as PDF
  const printWindow = window.open(url, '_blank');
  if (printWindow) {
    printWindow.onload = function() {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  }

  // Also trigger direct HTML/Document download fallback
  const a = document.createElement('a');
  a.href = url;
  a.download = `Escape_The_Crowd_Abhishek_Sharma_${buyerName.replace(/\s+/g, '_')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

window.generateAndDownloadEbook = generateAndDownloadEbook;
