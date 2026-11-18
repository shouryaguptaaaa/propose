<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffeaf2">
  <title>A Little Question for You 🌷</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Dancing+Script:wght@600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Reusable flower illustration -->
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <symbol id="flower" viewBox="0 0 100 100">
        <g fill="#f7a8c6" stroke="#fff" stroke-width="1.5">
          <ellipse cx="50" cy="22" rx="13" ry="21"/>
          <ellipse cx="50" cy="22" rx="13" ry="21" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="22" rx="13" ry="21" transform="rotate(120 50 50)"/>
          <ellipse cx="50" cy="22" rx="13" ry="21" transform="rotate(180 50 50)"/>
          <ellipse cx="50" cy="22" rx="13" ry="21" transform="rotate(240 50 50)"/>
          <ellipse cx="50" cy="22" rx="13" ry="21" transform="rotate(300 50 50)"/>
        </g>
        <circle cx="50" cy="50" r="11" fill="#ffe08a"/>
        <circle cx="50" cy="50" r="5" fill="#f4b942"/>
      </symbol>
    </defs>
  </svg>

  <div class="glow glow-a" aria-hidden="true"></div>
  <div class="glow glow-b" aria-hidden="true"></div>
  <div id="petals" class="petals" aria-hidden="true"></div>

  <!-- Music player -->
  <button id="musicBtn" class="music-btn" type="button" aria-label="Play music">
    <span class="music-icon" aria-hidden="true">♫</span>
    <span id="musicLabel" class="music-label">Play music</span>
  </button>
  <audio id="bgMusic" src="assets/music/music.mp3" loop preload="none"></audio>

  <main class="page">

    <!-- Hero -->
    <header class="hero">
      <svg class="hero-flower" aria-hidden="true"><use href="#flower"/></svg>
      <p class="eyebrow">A little something made just for you</p>
      <h1>Will you make my day <span class="script">special?</span></h1>
      <p class="intro">I have a question to ask… and I hope it makes you smile.</p>
    </header>

    <!-- Gallery -->
    <section class="section" aria-labelledby="memTitle">
      <h2 id="memTitle" class="section-title">Little moments 🌸</h2>
      <div id="gallery" class="gallery">
        <figure data-name="a.jpg"><img src="assets/images/a.jpg" alt="Memory 1" loading="lazy" decoding="async"></figure>
        <figure data-name="b.jpg"><img src="assets/images/b.jpg" alt="Memory 2" loading="lazy" decoding="async"></figure>
        <figure data-name="c.jpg"><img src="assets/images/c.jpg" alt="Memory 3" loading="lazy" decoding="async"></figure>
        <figure data-name="d.jpg"><img src="assets/images/d.jpg" alt="Memory 4" loading="lazy" decoding="async"></figure>
        <figure data-name="e.jpg"><img src="assets/images/e.jpg" alt="Memory 5" loading="lazy" decoding="async"></figure>
        <figure data-name="f.jpg"><img src="assets/images/f.jpg" alt="Memory 6" loading="lazy" decoding="async"></figure>
        <figure data-name="g.jpg"><img src="assets/images/g.jpg" alt="Memory 7" loading="lazy" decoding="async"></figure>
      </div>
    </section>

    <!-- Proposal card -->
    <section class="section" aria-labelledby="askTitle">
      <div id="card" class="card">
        <svg class="corner corner-tl" aria-hidden="true"><use href="#flower"/></svg>
        <svg class="corner corner-br" aria-hidden="true"><use href="#flower"/></svg>

        <p class="script card-script">with all my heart</p>
        <h2 id="askTitle" class="card-title">Will you say yes?</h2>
        <p class="subtext">You make ordinary days feel softer and brighter. Whatever your answer, thank you for hearing me out.</p>

        <div id="reasonBox" class="reason-box" hidden>
          <div class="counter-row">
            <span id="counter" class="counter">0 / 100</span>
          </div>
          <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
            <div id="bar" class="bar"></div>
          </div>
          <p id="reasonText" class="reason-text" aria-live="polite"></p>
        </div>

        <div id="finalMsg" class="final-msg" hidden>
          <p>💗 You've read all 100 reasons now.</p>
          <p>Whatever you choose is completely yours, and I'll respect it. Thank you for giving this your time. Both buttons are still here for you.</p>
        </div>

        <div class="actions">
          <button id="yesBtn" class="btn yes-btn" type="button">Yes 💗</button>
          <button id="noBtn" class="btn no-btn" type="button">No</button>
        </div>
      </div>
    </section>

    <footer class="footer">Made with care, flowers &amp; a little courage 🌷</footer>
  </main>

  <!-- Lightbox -->
  <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Photo preview" hidden>
    <button id="lbClose" class="lb-btn lb-close" type="button" aria-label="Close">✕</button>
    <button id="lbPrev" class="lb-btn lb-prev" type="button" aria-label="Previous photo">‹</button>
    <figure class="lb-figure">
      <img id="lbImg" src="" alt="">
      <figcaption id="lbCap" class="lb-cap"></figcaption>
    </figure>
    <button id="lbNext" class="lb-btn lb-next" type="button" aria-label="Next photo">›</button>
  </div>

  <!-- YES success screen -->
  <div id="success" class="success" role="dialog" aria-modal="true" aria-labelledby="successTitle" hidden>
    <div id="hearts" class="hearts" aria-hidden="true"></div>
    <div class="success-card">
      <svg class="success-flower" aria-hidden="true"><use href="#flower"/></svg>
      <h2 id="successTitle" class="success-title">Thank you 💖</h2>
      <p class="success-text">You just made me the happiest person today. I promise to make you smile, every single day.</p>
      <p class="success-sub">This moment is going to stay with me forever. 🌷</p>
      <button id="successClose" class="btn yes-btn" type="button">Back to our memories</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
