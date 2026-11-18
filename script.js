(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const rand = (min, max) => Math.random() * (max - min) + min;
  const isSmall = window.matchMedia("(max-width: 500px)").matches;

  /* ---------- 100 reasons ---------- */
  const reasons = [
    "Because your smile can turn my whole day around. 🌷",
    "Because talking to you makes time feel lighter. 💗",
    "Because you are kind in ways you don't even notice. ✨",
    "Because your laughter is my favourite sound. 🌸",
    "Because you make ordinary moments feel special. 💌",
    "Because I feel like myself around you. 🌼",
    "Because you listen with your whole heart. 💗",
    "Because your presence feels like home. 🏡",
    "Because you care deeply about the people around you. 🌷",
    "Because I have never met anyone quite like you. ✨",
    "Because your eyes say so much without words. 💫",
    "Because you make me want to be a better person. 🌱",
    "Because even your silence feels comforting. 🕊️",
    "Because you are beautiful, inside and out. 🌸",
    "Because you remember the little things. 💭",
    "Because you bring calm to my chaos. 🌊",
    "Because every memory with you is one I treasure. 📷",
    "Because your encouragement means more than you know. 💪",
    "Because you make hard days feel easier. ☀️",
    "Because your kindness is truly rare. 🌹",
    "Because you are strong, even when you don't feel it. 🌿",
    "Because the way you talk about your dreams inspires me. 🌟",
    "Because you make me laugh at the silliest things. 😄",
    "Because you are patient with the people you love. 💞",
    "Because I look forward to your messages. 📱",
    "Because you have a gentle heart. 🕊️",
    "Because you make simple plans feel like adventures. 🗺️",
    "Because I'm grateful that our paths crossed. 🍀",
    "Because you deserve to hear how special you are. 💖",
    "Because your honesty is something I deeply respect. 🤍",
    "Because you see the good in people. 🌻",
    "Because your voice is my favourite comfort. 🎶",
    "Because you make the world feel softer. ☁️",
    "Because you are truly one of a kind. 💎",
    "Because I smile every time I think of you. 😊",
    "Because you are graceful even in small moments. 🦋",
    "Because you make me feel understood. 💬",
    "Because your little habits are secretly my favourites. 🌷",
    "Because you light up every room you walk into. 💡",
    "Because you deserve flowers, not just on special days. 💐",
    "Because you work hard and rarely ask for credit. 🌾",
    "Because you are brave in quiet ways. 🦢",
    "Because being around you feels peaceful. 🍃",
    "Because you have a wonderful sense of humour. 😂",
    "Because your warmth makes everyone feel welcome. 🔆",
    "Because you are the best part of my ordinary days. 🌤️",
    "Because you make me believe in good things. 🌈",
    "Because you are thoughtful without even trying. 🎁",
    "Because I admire how you keep going. 🌄",
    "Because we're halfway through and I still have so much to say about you. 💗",
    "Because you are worth taking a chance on. 🎲",
    "Because your happiness matters to me. 🌸",
    "Because you make me feel lucky. 🍀",
    "Because you bring out the best in everyone around you. ✨",
    "Because your kindness to strangers says everything about you. 🤝",
    "Because I trust you. 🔐",
    "Because you make every conversation meaningful. 💬",
    "Because you have a beautiful way of seeing the world. 🔭",
    "Because you are my favourite person to talk to. 📞",
    "Because I want to celebrate your wins, big and small. 🎉",
    "Because you make me curious about everything you love. 📚",
    "Because your presence makes me feel safe. 🛡️",
    "Because you have the sweetest way of caring. 🍯",
    "Because I'd rather be honest and brave than regret staying quiet. 💌",
    "Because you deserve someone who appreciates you fully. 🌹",
    "Because you make time feel precious. ⏳",
    "Because you are a gift to the people who know you. 🎀",
    "Because you are enough, exactly as you are. 💗",
    "Because your smile stays with me long after we talk. 🌷",
    "Because you make even tough days brighter. 🌞",
    "Because you inspire me without even trying. 🌟",
    "Because I love how real you are. 🤍",
    "Because you are gentle and strong at the same time. 🌿",
    "Because I've learned so much just by knowing you. 📖",
    "Because you make me want to hold onto good moments. 📸",
    "Because your goodness is genuine. 🌼",
    "Because you make the little things feel magical. 🪄",
    "Because I would love to make you smile every day. 😊",
    "Because you are someone worth waiting for. 🕰️",
    "Because you have become important to me. 💞",
    "Because your kindness changes people. 🌸",
    "Because you carry yourself with such grace. 🦋",
    "Because with you, even silence feels full. 🌙",
    "Because you deserve all the happiness in the world. 🌍",
    "Because I want to keep making memories with you. 📷",
    "Because you are more special than these words can say. 💖",
    "Because you make my heart feel light. 🎈",
    "Because you are sincere in a world of pretending. 🌻",
    "Because I'm thankful for every moment with you. 🙏",
    "Because you make me hopeful about tomorrow. 🌅",
    "Because you are lovely in ways that go beyond looks. 💐",
    "Because I could never run out of reasons. ♾️",
    "Because you deserve a love that feels gentle and true. 🕊️",
    "Because you have made my life brighter. ☀️",
    "Because my feelings for you are honest and real. 💗",
    "Because you are worth every flower in this garden. 🌺",
    "Because I would choose to know you again in any world. 🌌",
    "Because you're almost at the end, and I'm still smiling. 😊",
    "Because there's always one more reason waiting. 🌷",
    "Because you are, simply, you, and that is wonderful. 💖"
  ];
  const TOTAL = 100;

  /* ---------- Elements ---------- */
  const card = $("card");
  const yesBtn = $("yesBtn");
  const noBtn = $("noBtn");
  const reasonBox = $("reasonBox");
  const reasonText = $("reasonText");
  const counter = $("counter");
  const bar = $("bar");
  const finalMsg = $("finalMsg");
  const success = $("success");
  const successClose = $("successClose");
  const heartsLayer = $("hearts");

  /* ---------- Falling petals ---------- */
  (function makePetals() {
    const wrap = $("petals");
    const icons = ["🌸", "🌷", "💮", "🌺", "🌸"];
    const count = isSmall ? 10 : 18;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.textContent = icons[i % icons.length];
      p.style.left = rand(0, 100) + "%";
      p.style.fontSize = rand(14, 26) + "px";
      p.style.animationDuration = rand(11, 20) + "s";
      p.style.animationDelay = -rand(0, 18) + "s";
      p.style.setProperty("--drift", rand(-60, 80) + "px");
      frag.appendChild(p);
    }
    wrap.appendChild(frag);
  })();

  /* ---------- Gallery: entrance animation ---------- */
  const gallery = $("gallery");
  const figures = Array.from(gallery.querySelectorAll("figure"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    figures.forEach((f, i) => {
      f.style.transitionDelay = (i % 3) * 90 + "ms";
      io.observe(f);
    });
  } else {
    figures.forEach((f) => f.classList.add("show"));
  }

  // If an image file is missing, show a pink placeholder with its filename
  figures.forEach((f) => {
    const img = f.querySelector("img");
    img.addEventListener("error", () => f.classList.add("missing"));
  });

  /* ---------- Lightbox ---------- */
  const lightbox = $("lightbox");
  const lbImg = $("lbImg");
  const lbCap = $("lbCap");
  let current = 0;
  let touchX = null;

  function showPhoto(i) {
    current = (i + figures.length) % figures.length;
    const img = figures[current].querySelector("img");
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = (current + 1) + " / " + figures.length;
    lbImg.style.animation = "none";
    void lbImg.offsetWidth;
    lbImg.style.animation = "";
  }
  function openLightbox(i) {
    if (figures[i].classList.contains("missing")) return;
    showPhoto(i);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    $("lbClose").focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
  }
  function step(dir) {
    let i = current;
    for (let n = 0; n < figures.length; n++) {
      i = (i + dir + figures.length) % figures.length;
      if (!figures[i].classList.contains("missing")) { showPhoto(i); return; }
    }
  }

  figures.forEach((f, i) => f.addEventListener("click", () => openLightbox(i)));
  $("lbClose").addEventListener("click", closeLightbox);
  $("lbPrev").addEventListener("click", () => step(-1));
  $("lbNext").addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  lightbox.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.hidden) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    } else if (!success.hidden && e.key === "Escape") {
      closeSuccess();
    }
  });

  /* ---------- Music player ---------- */
  const music = $("bgMusic");
  const musicBtn = $("musicBtn");
  const musicLabel = $("musicLabel");

  function setMusicUI(playing) {
    musicBtn.classList.toggle("playing", playing);
    musicLabel.textContent = playing ? "Pause music" : "Play music";
    musicBtn.setAttribute("aria-label", playing ? "Pause music" : "Play music");
  }
  musicBtn.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        setMusicUI(true);
      } catch (err) {
        setMusicUI(false);
        musicLabel.textContent = "Add music.mp3";
      }
    } else {
      music.pause();
      setMusicUI(false);
    }
  });
  music.addEventListener("pause", () => setMusicUI(false));
  music.addEventListener("play", () => setMusicUI(true));

  /* ---------- NO button: 100 unique reasons ---------- */
  // Shuffled once so reasons never repeat before all 100 are shown
  const order = reasons.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  let noCount = 0;
  let answered = false;

  function playfulMove() {
    // Small move that always keeps the button visible and tappable
    const maxRight = isSmall ? 26 : 70;
    const x = rand(-6, maxRight);
    const y = rand(-8, 14);
    noBtn.style.setProperty("--tx", x.toFixed(0) + "px");
    noBtn.style.setProperty("--ty", y.toFixed(0) + "px");
  }

  noBtn.addEventListener("click", () => {
    if (answered) return;
    reasonBox.hidden = false;

    if (noCount < TOTAL) {
      noCount++;
      const text = reasons[order[noCount - 1] % reasons.length];
      reasonText.textContent = text;
      counter.textContent = noCount + " / " + TOTAL;
      bar.style.width = (noCount / TOTAL * 100) + "%";
      bar.parentElement.setAttribute("aria-valuenow", String(noCount));

      reasonText.classList.remove("swap");
      void reasonText.offsetWidth;
      reasonText.classList.add("swap");

      if (noCount === TOTAL) {
        finalMsg.hidden = false;
        noBtn.textContent = "No";
      }
    }
    playfulMove();
  });

  /* ---------- YES button ---------- */
  function makeHearts() {
    heartsLayer.textContent = "";
    const icons = ["💗", "🌸", "💖", "🌷", "💕", "🌺"];
    const count = isSmall ? 22 : 36;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const h = document.createElement("span");
      h.className = "heart";
      h.textContent = icons[i % icons.length];
      h.style.left = rand(0, 100) + "%";
      h.style.fontSize = rand(18, 38) + "px";
      h.style.animationDuration = rand(5, 10) + "s";
      h.style.animationDelay = -rand(0, 8) + "s";
      h.style.setProperty("--drift", rand(-60, 60) + "px");
      frag.appendChild(h);
    }
    heartsLayer.appendChild(frag);
  }

  function closeSuccess() {
    success.hidden = true;
    document.body.style.overflow = "";
  }

  yesBtn.addEventListener("click", () => {
    if (!answered) {
      answered = true; // locks the result: NO can no longer change anything
      card.classList.add("answered");
      reasonBox.hidden = true;
      finalMsg.hidden = true;
      noBtn.disabled = true;
      yesBtn.textContent = "You said yes 💗";
      yesBtn.disabled = true;
    }
    makeHearts();
    success.hidden = false;
    document.body.style.overflow = "hidden";
    successClose.focus();
  });
  successClose.addEventListener("click", closeSuccess);
})();
